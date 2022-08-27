#!/usr/bin/env node
const commander = require('commander')

const program = new commander.Command()

const cmd_cp = program.command('cp')
    .description('Copy files')
    .option('-r, --recursive', 'copy files recursively')
    .option('-f, --force', 'continue even when errors occur')
    .argument('<from>', 'copy from here')
    .argument('<to>', 'copy to here')
    .action((from, to, options, command) => {
        console.log(`cp ${JSON.stringify(options)} from=${from} to=${to}`)
    })

module.exports = cmd_cp
