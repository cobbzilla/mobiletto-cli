#!/usr/bin/env node
const commander = require('commander')

const program = new commander.Command()

const cmd_meta = program.command('meta')
    .description('View file metadata')
    .argument('<path>', 'The path to show metadata for')
    .action((path) => {
        console.log(`meta path=${path}`)
    });

module.exports = cmd_meta
