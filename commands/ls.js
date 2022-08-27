#!/usr/bin/env node
const commander = require('commander')
const { getConnection, connect, handleCliError } = require('../connections')

const program = new commander.Command()

const cmd_ls = program.command('ls')
    .description('List files')
    .option('-r, --recursive', 'list files recursively')
    .option('-v, --verbose', 'Pretty-print the JSON results')
    .argument('<path>', 'The path to list')
    .action((path, opts) => {
        try {
            const slash = path.indexOf('/')
            const mobi = slash === -1
                ? path
                : slash === path.length -1
                    ? path.substring(0, path.length - 1)
                    : path.substring(0, slash)
            getConnection(mobi)
            const listPath = path.substring(mobi.length + 1)
            connect(mobi)
                .then(conn => conn.list(listPath, { recursive: opts.recursive })
                    .then(results => {
                            if (results) {
                                if (opts.verbose) {
                                    results.forEach(r => console.log(JSON.stringify(r, null, 2)))
                                } else {
                                    results.forEach(r => console.log(JSON.stringify(r)))
                                }
                            } else {
                                if (opts.verbose) {
                                    console.log('No results found')
                                }
                            }
                        },
                        (err) => {
                            if (err) {
                                handleCliError(err, program)
                            }
                        }))
        } catch (e) {
            handleCliError(e, program)
        }
    });

module.exports = cmd_ls
