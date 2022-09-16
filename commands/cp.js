#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const os = require('os')
const randomstring = require('randomstring')
const commander = require('commander')
const { M_FILE } = require('mobiletto')
const chalk = require("chalk")
const logger = require('../logger').logger
const { mountAndPath, handleCliError, connect, CliError, cleanup } = require("../connections")

const program = new commander.Command()

const copyAcross = (fromConn, fromPath, toConn, toPath, verbose, force) => (obj) => {
    if (obj.type && obj.type === M_FILE) {
        try {
            const destName = fromPath.includes('/') && obj.name.startsWith(fromPath)
                ? obj.name.substring(path.dirname(fromPath).length + 1)
                : obj.name
            const destFullPath = toPath +
                (toPath.endsWith('/') || toPath.includes('.') ? '' : '/') +
                (toPath.includes('.') ? '' : (destName.startsWith('/') ? destName.substring(1) : destName))
            if (verbose) { logger.info(`cp: determined destName='${destName}' and destFullPath='${destFullPath}' from source path='${fromPath}', target path='${toPath}'`)}

            const file = os.tmpdir() + '/' + randomstring.generate(20) + '.' + Date.now() + '.mo'
            const writer = fs.createWriteStream(file)
            if (verbose) { logger.info(`cp: writing source ${obj.name} -> temp ${file}`) }
            fromConn.read(obj.name,
                (chunk) => writer.write(chunk),
                () => {
                    writer.close((err) => {
                        if (err) {
                            const message = `cp: error closing temp file ${file}`
                            if (verbose) { logger.error(chalk.redBright(message + `: ${err}`)) }
                            if (force) return
                            throw new CliError(message, err)
                        }
                        if (verbose) { logger.info(`cp: FINISHED writing ${obj.name} -> temp ${file} (file closed successfully)`) }
                    })
                })
                .then(
                    async () => {
                        // read from temp file -> write to mirror
                        if (verbose) { logger.info(`cp: writing temp ${file} -> target ${destFullPath}`) }
                        const reader = fs.createReadStream(file)
                        try {
                            await toConn.write(destFullPath, reader)
                        } catch (e) {
                            const message = `cp: error copying file to ${destFullPath}`
                            if (verbose) { logger.error(chalk.redBright(message + `: ${e}`)) }
                            if (force) return
                            throw new CliError(message, e)
                        }
                    },
                    (err) => {
                        const message = `cp: error copying file to ${destFullPath}`
                        if (verbose) { logger.error(chalk.redBright(message + `: ${err}`)) }
                        if (force) return
                        throw new CliError(message, err)
                    })
                .finally(async () => {
                    fs.rm(file, (err) => {
                        if (err) { logger.error(chalk.redBright(`Error deleting temp file: ${file}: ${err}`)) }
                    })
                    await cleanup()
                })
        } catch (e) {
            if (verbose) {
                logger.error(chalk.redBright(`Unexpected error copying file ${obj.name}: ${e}`))
            }
            if (!force) throw e
        }
    }
}
const cmd_cp = program.command('cp')
    .summary('Copy files')
    .description('Copy files from one mobiletto connection to another\n\n' +
        'More info:\n' +
        'https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md#Copy-files')
    .option('-r, --recursive', 'Copy files recursively')
    .option('-f, --force', 'Continue even when errors occur')
    .option('-v, --verbose', 'Verbose output')
    .argument('<from>', 'Copy from here')
    .argument('<to>', 'Copy to here')
    .action(async (from, to, opts, command) => {
        try {
            const verbose = opts.verbose || false
            const fromMobi = mountAndPath(from)
            const toMobi = mountAndPath(to)
            const fromConn = await connect(fromMobi.mount)
            const toConn = await connect(toMobi.mount)
            if (fromMobi.mount === toMobi.mount) {
                program.error(chalk.redBright("The 'from' and 'to' cannot be the same connection"))
                return
            }
            const copy = copyAcross(fromConn, fromMobi.path, toConn, toMobi.path, verbose, opts.force)
            if (opts.recursive) {
                if (verbose) { logger.info(`cp: starting recursive copy: ${from} -> ${to}`) }
                await fromConn.list(fromMobi.path, {recursive: true, visitor: copy})
            } else {
                if (verbose) { logger.info(`cp: determining metadata for single file copy: ${from} -> ${to}`) }
                const meta = await fromConn.metadata(fromMobi.path)
                if (meta.type !== M_FILE) {
                    logger.error(chalk.redBright(`'${fromMobi.path}' is not a file. Use the -r / --recursive option to copy directories`))
                    return
                }
                if (verbose) { logger.info(`cp: copying single file: ${from} -> ${to} metadata=${JSON.stringify(meta)}`) }
                await copy(meta)
            }
        } catch (e) {
            if (opts.verbose) { logger.error(chalk.redBright(`cp: unexpected error: ${e}`)) }
            handleCliError(e, program)
        }
    })

module.exports = cmd_cp
