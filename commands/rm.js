#!/usr/bin/env node
const commander = require('commander')
const { logger } = require("../logger")
const { mountAndPath, connect, handleCliError, cleanup } = require("../connections");
const chalk = require("chalk");

const program = new commander.Command()

const cmd_rm = program.command('rm')
    .summary('Remove files')
    .description('Remove files\n\n' +
        'More info:\n' +
        'https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md#Delete-files')
    .option('-r, --recursive', 'Remove files recursively')
    .option('-f, --force', 'Continue even when errors occur')
    .argument('<path>', 'The path to remove')
    .action((path, opts) => {
        try {
            const mp = mountAndPath(path)
            connect(mp.mount)
                .then(conn => conn.remove(mp.path, { recursive: opts.recursive, quiet: opts.force }))
                .then((removed) => {
                        if (removed) {
                            let removedFiles = ''
                            if (Array.isArray(removed)) {
                                removed.forEach(f => removedFiles += f + '\n')
                            } else {
                                removedFiles = removed
                            }
                            logger.info(chalk.greenBright('Removed: ') + chalk.whiteBright(removedFiles))
                        }
                    },
                    (err) => { if (err) { handleCliError(err, program) } })
                .finally(cleanup)
        } catch (e) {
            handleCliError(e, program)
        }
    });

module.exports = cmd_rm
