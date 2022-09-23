#!/usr/bin/env node
const commander = require('commander')
const chalk = require("chalk");
const { mountAndPath, connect, handleCliError, cleanup } = require("../connections");

const program = new commander.Command()

const cmd_meta = program.command('meta')
    .summary('View file metadata')
    .description('File metadata includes size and last-modified time\n\n' +
        'More info:\n' +
        'https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md#View-metadata')
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
                                process.stdout.write(JSON.stringify(meta, null, 2) + '\n')
                            } else {
                                process.stdout.write(JSON.stringify(meta) + '\n')
                            }
                        } else {
                            if (opts.verbose) { process.stdout.write(chalk.yellowBright('Metadata not found\n')) }
                        }
                    },
                    (err) => {
                        if (err) { handleCliError(err, program) }
                    })
                .finally(cleanup)

        } catch (e) {
            handleCliError(e, program)
        }
    });

module.exports = cmd_meta
