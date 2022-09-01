#!/usr/bin/env node
const fs = require('fs')
const commander = require('commander')
const chalk = require('chalk')
const {
    CONNECT_FIELDS, FIELD_TYPE_VALIDATORS,
    registerConnection, connectionNames, getConnection,
    removeConnection, removeAllConnections,
    CliError, handleCliError, cleanup
} = require('../connections')
const { interactiveConnect } = require('./iconnect')

const program = new commander.Command()

function assignField(field, config, fieldConfigs) {
    const fieldConfig = fieldConfigs[field]
    if (fieldConfig.when && !config.opts[fieldConfig.when]) {
        return
    }
    const value = config[field]
    let jsonValue
    if (typeof value === 'undefined' || value === null || value.length === 0) {
        jsonValue = fieldConfig.type
            ? FIELD_TYPE_VALIDATORS[fieldConfig.type](fieldConfig.default)
            : fieldConfig.default
    } else if (fieldConfig.type) {
        jsonValue = FIELD_TYPE_VALIDATORS[fieldConfig.type](value)
    } else {
        jsonValue = value
    }
    if (field === 'key' || field === 'secret') {
        config[field] = jsonValue
    } else {
        config.opts[field] = jsonValue
    }
}

async function _createConn (config, options) {
    if (options.create) {
        config.name = options.create
    }
    if (!config.name) throw new CliError(`createConnection: invalid JSON: "name" property is required`)
    if (!config.type) throw new CliError(`createConnection: invalid JSON: "type" property is required`)
    config.opts = Object.assign({}, config.opts ? config.opts: {})
    const configGroups = [CONNECT_FIELDS.all, CONNECT_FIELDS[config.type]]
    configGroups.forEach(fieldConfigs => {
        Object.keys(fieldConfigs).forEach(field => {
            assignField(field, config, fieldConfigs)
        })
    })
    const encryption = config.encryption
        ? {
            key: config.encryptionKey,
            iv: config.encryptionIV,
            algo: config.encryptionAlgo
        }
        : null
    config.encryption = encryption ? encryption : null
    if (config.redis) {
        config.opts.redisConfig = {
            host: config.redisHost || '127.0.0.1',
            port: +config.redisPort || 6379,
            prefix: config.redisPrefix || '_mobiletto__'
        }
    }
    try {
        await registerConnection(config.name, config, options.force)
        await cleanup()
        console.log(`Connection '${config.name}' successfully registered`)
    } catch (e) {
        handleCliError(e, program)
    }
}

async function createConnection (json, options) {
    let config = null
    if (json) {
        // If it starts with { treat it as a literal JSON object
        if (json.startsWith('{')) {
            config = JSON.parse(json)
            try {
                await _createConn(config, options)
            } catch (e) {
                handleCliError(e, program)
            }
        } else {
            fs.readFile(json, 'utf8', async (err, data) => {
                if (err) { return handleCliError(err, program) }
                config = JSON.parse(data)
                try {
                    await _createConn(config, options)
                } catch (e) {
                    handleCliError(e, program)
                }
            })
        }
    } else {
        try {
            interactiveConnect(options.create).then(async (config) => {
                try {
                    await _createConn(config, options)
                } catch (e) {
                    handleCliError(e, program)
                }

            })
        } catch (e) {
            handleCliError(e, program)
        }
    }
}

function listConnections () {
    console.log(chalk.whiteBright(connectionNames().toString().replaceAll(',','\n')))
}

function dumpConnection (name, verbose) {
    const output = verbose
        ? JSON.stringify(getConnection(name), null, 2)
        : JSON.stringify(getConnection(name))
    console.log(chalk.whiteBright(output))
}

function rmConnection (name, force) {
    removeConnection(name, force)
    console.log(chalk.greenBright('Removed: ') + chalk.whiteBright(name))
}

function rmAllConnections () {
    const names = connectionNames()
    removeAllConnections()
    console.log(chalk.greenBright('Removed:\n') + names.toString().replaceAll(',','\n'))
}

const cmd_connect = program.command('connect')
    .summary('Define a connection to a mobiletto storage volume')
    .description('Connection details are saved in a per-user configuration location\n\n' +
        'Mobiletto uses the `conf` npm package to persist these connection details\n' +
        ' * https://www.npmjs.com/package/conf\n\n' +
        'Want to delete anything and everything?\n' +
        'This approach is "as-good-as-uninstall" -- use the `-R` option to remove all\n' +
        'connections, this deletes all the data stored by this tool. The rump file will\n' +
        'contain an empty JSON object.\n\n' +
        'If no options are provided, the -c / --create option is assumed\n\n' +
        'More info:\n' +
        'https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md#Connections')
    .option('-c, --create [name]', 'Create a connection. If `name` is omitted, the JSON is expected to have a "name" property')
    .option('-l, --list', 'List all available connections')
    .option('-d, --dump [name]', 'Dump full JSON configuration for a connection. ' + chalk.redBright('WARNING: Any secret keys in your config will be printed to stdout. Use with caution.'))
    .option('-v, --verbose', 'Pretty-print output from -d / --dump command')
    .option('-r, --remove [name]', 'Delete a connection')
    .option('-R, --remove-all', 'Delete all connections')
    .option('-f, --force', 'When creating a connection, if another connection has the same name, overwrite it')
    .argument('[json]', 'The path to a JSON file, or a literal JSON object to define the connection.\nIf omitted, interactive prompts will guide you through creating a connection')
    .action((json, options) => {
        try {
            if (options.create) {
                // ensure no other modes were specified
                if (options.list) {
                    program.error(chalk.redBright('Cannot specify -l / --list when creating a new connection'))
                } else if (options.dump) {
                    program.error(chalk.redBright('Cannot specify -d / --dump when creating a new connection'))
                } else if (options.remove) {
                    program.error(chalk.redBright('Cannot specify -r / --remove when creating a new connection'))
                } else if (options.removeAll) {
                    program.error(chalk.redBright('Cannot specify -R / --remove-all when creating a new connection'))
                }
                return createConnection(json, options)
            } else if (options.list) {
                if (options.dump) {
                    program.error(chalk.redBright('Cannot specify -d / --dump when listing connections'))
                } else if (options.remove) {
                    program.error(chalk.redBright('Cannot specify -r / --remove when listing connections'))
                } else if (options.removeAll) {
                    program.error(chalk.redBright('Cannot specify -R / --remove-all when listing connections'))
                }
                // list
                return listConnections()
            } else if (options.dump) {
                if (options.remove) {
                    program.error(chalk.redBright('Cannot specify -r / --remove when dumping connection info'))
                } else if (options.removeAll) {
                    program.error(chalk.redBright('Cannot specify -R / --remove-all when dumping connection info'))
                }
                // dump
                dumpConnection(options.dump, options.verbose)
            } else if (options.remove) {
                if (options.removeAll) {
                    program.error(chalk.redBright('Cannot specify -R / --remove-all when removing a single connection'))
                }
                // remove
                rmConnection(options.remove, options.force)
            } else if (options.removeAll) {
                // remove all
                rmAllConnections()
            } else {
                // create is the default
                return createConnection(json, options)
            }
        } catch (e) {
            handleCliError(e, program)
        }
    })

module.exports = cmd_connect
