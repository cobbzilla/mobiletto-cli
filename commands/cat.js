#!/usr/bin/env node
const commander = require('commander')
const {mountAndPath, connect, handleCliError} = require("../connections");

const program = new commander.Command()

const cmd_meta = program.command('cat')
    .summary('Write a file to stdout')
    .description('Write a file to stdout\n\n' +
        'The name `cat` (a shortening of \'concatenate\') comes from the UNIX utility \n' +
        'program of the same name, which is often used to print the contents of a file \n' +
        'to the terminal\n\n' +
        'More fun facts: https://en.wikipedia.org/wiki/Cat_(Unix)\n\n' +
        'More info on this command:\n' +
        'https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md#Write-a-file-to-stdout')
    .argument('<path>', 'The path to the file to print to stdout')
    .action((path) => {
        try {
            const mp = mountAndPath(path)
            connect(mp.mount)
                .then(conn => conn.read(mp.path,
                        (chunk) => process.stdout.write(chunk),
                        (err) => { if (err) { handleCliError(err, program) } }),
                    (err) => { if (err) { handleCliError(err, program) } })
        } catch (e) {
            handleCliError(e, program)
        }
    });

module.exports = cmd_meta
