#!/usr/bin/env node
const commander = require('commander')

const program = new commander.Command()

const cmd_rm = program.command('rm')
    .description('Remove files')
    .option('-r, --recursive', 'remove files recursively')
    .option('-f, --force', 'continue even when errors occur')
    .argument('<path>', 'The path to remove')
    .action((path, options) => {
        console.log(`rm ${JSON.stringify(options)} path=${path}`)
    });

module.exports = cmd_rm
