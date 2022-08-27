const Conf = require('conf')
const chalk = require("chalk");
const { mobiletto } = require("mobiletto");

const schema = {}
const registry = new Conf({ schema })

// adapted from https://stackoverflow.com/a/27724419
function CliError (message, err) {
    this.message = chalk.redBright(`${message}${err ? `: ${err}` : ''}`)
    this.err = err
    // Use V8's native method if available, otherwise fallback
    if ('captureStackTrace' in Error) {
        Error.captureStackTrace(this, TypeError)
    } else {
        this.stack = (new Error(this.message)).stack
    }
}


// noinspection EqualityComparisonWithCoercionJS
const FIELD_TYPE_VALIDATORS = {
    boolean: (val) => {
        if (val === 'true') return true
        if (val === 'false') return true
        throw new CliError(`invalid boolean value, expected true or false: ${val}`)
    },
    integer: (val) => {
        if (!val || !/\d+/.test(val)) throw new CliError(`invalid integer: ${val}`)
        return +val
    },
    char: (val) => {
        if (!val || val.length !== 1) throw new CliError(`invalid character (expected a single char): ${val}`)
        return val
    }
}

const CONNECT_FIELDS = {
    all: {
        readOnly: { msg: 'Mount as read-only?', type: 'boolean', default: false },
        encryption: { msg: 'Enable encryption?', type: 'boolean', default: false },
        encryptionKey: { msg: 'Encryption key', when: 'encryption' },
        encryptionIV: { msg: 'Encryption IV', when: 'encryption', default: null },
        encryptionAlgo: { msg: 'Encryption algorithm', when: 'encryption', default: 'aes-256-cbc' },
        cacheSize: { msg: 'Size of LRU cache for list results', type: 'integer', default: 100 }
    },
    local: {
        key: { msg: 'Base directory' },
        mode: { msg: 'File creation mode', default: '0o0600' }
    },
    s3: {
        key: { msg: 'AWS Access Key' },
        secret: { msg: 'AWS Secret Key' },
        bucket: { msg: 'Bucket name' },
        region: { msg: 'AWS Region', default: 'us-east-1' },
        prefix: { msg: 'Prefix', default: ''},
        delimiter: { msg: 'Delimiter', default: '/', type: 'char' }
    }
}

const CONNECTIONS = {}

const registerConnection = async (name, config, force) => {
    if (!force && registry.get(name, null) !== null) {
        throw new CliError(`registerConnection: name '${name}' is already registered`)
    }
    try {
        CONNECTIONS[name] = await mobiletto(config.type, config.key, config.secret, config.opts, config.encryption)
    } catch (e) {
        throw new CliError(`registerConnection: error testing connection: ${JSON.stringify(e)}`)
    }
    registry.set(name, config)
}

const connect = async (name) => {
    if (CONNECTIONS[name]) return CONNECTIONS[name]
    const config = registry.get(name, null)
    if (!config) throw new CliError(`connect: no connection named '${name}' is defined`)
    CONNECTIONS[name] = await mobiletto(config.type, config.key, config.secret, config.opts, config.encryption)
    return CONNECTIONS[name]
}

const connectionNames = () => {
    const names = []
    for (const entry of registry) {
        names.push(entry[0])
    }
    return names
}

const getConnection = (name) => registry.get(name)

const removeConnection = (name, force) => {
    if (!force &&!registry.has(name)) throw new CliError(`connection does not exist: ${name}`)
    registry.delete(name)
}

const removeAllConnections = () => registry.clear()

const handleCliError = (e, program) => {
    if (e instanceof CliError) {
        program.error(e.message)
    } else {
        throw e
    }
}

module.exports = {
    CONNECT_FIELDS, FIELD_TYPE_VALIDATORS,
    registerConnection, getConnection,
    removeConnection, removeAllConnections,
    connect, connectionNames,
    CliError, handleCliError
}
