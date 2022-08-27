#!/usr/bin/env node
const commander = require('commander')
const {mountAndPath, connect, handleCliError} = require("../connections");
const chalk = require("chalk");

const program = new commander.Command()

const cmd_meta = program.command('meta')
    .description('View file metadata')
    .argument('<path>', 'The path to show metadata for')
    .option('-v, --verbose', 'Pretty-print the JSON results')
    .action((path, opts) => {
        try {
            const mp = mountAndPath(path)
            connect(mp.mount)
                .then(conn => conn.metadata(mp.path))
                .then((meta) => {
                        if (meta) {
                            if (opts.verbose) {
                                console.log(JSON.stringify(meta, null, 2))
                            } else {
                                console.log(JSON.stringify(meta))
                            }
                        } else {
                            if (opts.verbose) { console.log(chalk.yellowBright('Metadata not found')) }
                        }
                    },
                    (err) => {
                        if (err) { handleCliError(err, program) }
                    })
        } catch (e) {
            handleCliError(e, program)
        }
    });

module.exports = cmd_meta
