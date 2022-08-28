#!/usr/bin/env node
const commander = require('commander')
const chalk = require('chalk')

const { handleCliError } = require("./connections");

const COMMANDS = ['connect', 'ls', 'cp', 'rm', 'meta']
const SUB_PROGRAMS = {}
COMMANDS.forEach(cmd => SUB_PROGRAMS[cmd] = require(`./commands/${cmd}`))

const HELP_PREFIX = '__~_help_~__';

const program = new commander.Command()
    .command('mo')
    .description('CLI for mobiletto storage')
    .argument('[args...]')
    .allowUnknownOption()
    .action((args) => {
        if (args.length === 0) {
            program.error(chalk.redBright('no command provided'))
        }
        const subcommand = args[0]
        const subprogram = SUB_PROGRAMS[subcommand]
        if (!subprogram) {
            program.error(chalk.redBright(`not a valid command: ${subcommand}`))
        }
        // un-hide hidden help option, if there is one
        for (let i = 1 ; i < args.length; i++) {
            if (args[i].startsWith(HELP_PREFIX)) {
                args[i] = '--help'
            }
        }
        subprogram.parse(['mo', ...args])
    })
    .showHelpAfterError()

// hide help option if it is for a subcommand
const args = process.argv
for (let i = 3 ; i < args.length; i++) {
    if (args[i] === '-h' || args[i] === '--help') {
        args[i] = HELP_PREFIX + args[i]
    }
}

try {
    program.parse(process.argv)
} catch (e) {
    handleCliError(e, program)
}