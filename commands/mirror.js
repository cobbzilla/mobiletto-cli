#!/usr/bin/env node
const commander = require('commander')
const chalk = require('chalk')
const { mountAndPath, connect, handleCliError } = require("../connections");

const program = new commander.Command()

const cmd_cp = program.command('cp')
    .summary('Mirror directories')
    .description('Mirror directories between two mobiletto connections')
    .argument('<from>', 'Mirror from here')
    .argument('<to>', 'Mirror to here')
    .action(async (from, to) => {
        try {
            const fromMobi = mountAndPath(from)
            const toMobi = mountAndPath(to)
            const fromConn = await connect(fromMobi.mount)
            const toConn = await connect(toMobi.mount)
            if (fromMobi.mount === toMobi.mount) {
                program.error(chalk.redBright("The 'from' and 'to' cannot be the same connection"))
                return
            }
            toConn.mirror(fromConn, toMobi.path, fromMobi.path)
                .then((results) => {
                    console.log(chalk.whiteBright('Mirror completed') + '\n' +
                        chalk.greenBright('success: ') + results.success + '\n' +
                        (results.errors > 0 ? chalk.redBright('errors: ') : chalk.whiteBright('errors: ')) +
                        results.errors + '\n')
                })
        } catch (e) {
            handleCliError(e, program)
        }
    })

module.exports = cmd_cp
