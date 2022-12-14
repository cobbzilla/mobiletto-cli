#!/usr/bin/env node
const commander = require('commander')
const chalk = require('chalk')
const { connect, mountAndPath, handleCliError, cleanup } = require('../connections')
const { logger } = require("../logger")

const program = new commander.Command()

const cmd_ls = program.command('ls')
    .summary('List files')
    .description('List files\n\n' +
        'More info:\n' +
        'https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md#List-files')
    .option('-r, --recursive', 'List files recursively')
    .option('-v, --verbose', 'Pretty-print the JSON results')
    .argument('<path>', 'The path to list')
    .action((path, opts) => {
        try {
            const mp = mountAndPath(path)
            connect(mp.mount)
                .then(conn => conn.list(mp.path, { recursive: opts.recursive })
                    .then((results) => {
                            if (results) {
                                if (opts.verbose) {
                                    results.forEach(r => process.stdout.write(JSON.stringify(r, null, 2) + '\n'))
                                } else {
                                    results.forEach(r => process.stdout.write(JSON.stringify(r) + '\n'))
                                }
                            } else {
                                if (opts.verbose) { process.stdout.write(chalk.yellowBright('No results found\n')) }
                            }
                        },
                        (err) => {
                            if (err) { handleCliError(err, program) }
                        }))
                .finally(cleanup)
        } catch (e) {
            handleCliError(e, program)
        }
    });

module.exports = cmd_ls
