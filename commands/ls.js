#!/usr/bin/env node
const commander = require('commander')

const program = new commander.Command()

const cmd_ls = program.command('ls')
    .description('List files')
    .option('-r, --recursive', 'list files recursively')
    .argument('<path>', 'The path to list')
    .action((path) => {
        console.log(`ls path=${path}`)
    });

module.exports = cmd_ls
