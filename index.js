#!/usr/bin/env node
const commander = require('commander')
const chalk = require('chalk')

const { handleCliError } = require("./connections")

const COMMANDS = ['connect', 'ls', 'cat', 'cp', 'rm', 'meta', 'mirror']
const SUB_PROGRAMS = {}
COMMANDS.forEach(cmd => SUB_PROGRAMS[cmd] = require(`./commands/${cmd}`))

const SUB_COMMAND_HELP = COMMANDS.map(c => {
    return `\t${chalk.whiteBright(c)} ${' '.repeat(12 - c.length)}${SUB_PROGRAMS[c].summary()}`
}).toString().replaceAll(',', '\n')

const HELP_PREFIX = '__~_help_~__';

const VERSION = require('./package.json').version;
const MOBILETTO_VERSION = require(`${__dirname}/../mobiletto/package.json`).version

const program = new commander.Command()
    .command('mo')
    .description(`CLI for mobiletto storage\n\nVersions:\n  mobiletto-cli ${VERSION}\n  mobiletto ${MOBILETTO_VERSION}`)
    .argument('[args...]')
    .version(VERSION)
    .allowUnknownOption()
    .action((args) => {
        if (args.length === 0) {
            program.error(chalk.redBright('No command provided'))
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
    .addHelpText('after', `\nUse a command:\n${SUB_COMMAND_HELP}\n`)

// hide help option if it is for a subcommand
const args = process.argv
for (let i = 3 ; i < args.length; i++) {
    if (args[i] === '-h' || args[i] === '--help') {
        args[i] = HELP_PREFIX + args[i]
    }
}

try {
    program.parse(args)
} catch (e) {
    handleCliError(e, program)
}
