mobiletto-cli
=============
A command-line interface (CLI) for [mobiletto](https://www.npmjs.com/package/mobiletto)
storage.

Mobiletto supports connections to Amazon S3, Backblaze B2, and local filesystems.

# Read this in another language
This README.md document has been translated, via [hokeylization](https://github.com/cobbzilla/hokeylization), into
**[every language supported by Google Translate](https://cloud.google.com/translate/docs/languages)!**

I'm certain it's not perfect, but I hope it's better than nothing!

&nbsp;&nbsp;&nbsp;[🇸🇦 Arabic](docs/ar/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇩 Bengali](docs/bn/README.md)
&nbsp;&nbsp;&nbsp;[🇩🇪 German](docs/de/README.md)
&nbsp;&nbsp;&nbsp;[🇺🇸 English](docs/en/README.md)
&nbsp;&nbsp;&nbsp;[🇪🇸 Spanish](docs/es/README.md)
&nbsp;&nbsp;&nbsp;[🇫🇷 French](docs/fr/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇩 Hausa](docs/ha/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Hindi](docs/hi/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇩 Indonesian](docs/id/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇹 Italian](docs/it/README.md)
&nbsp;&nbsp;&nbsp;[🇯🇵 Japanese](docs/ja/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇷 Korean](docs/ko/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Marathi](docs/mr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇱 Polish](docs/pl/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇷 Portuguese](docs/pt/README.md)
&nbsp;&nbsp;&nbsp;[🇷🇺 Russian](docs/ru/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇪 Swahili](docs/sw/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇭 Tagalog](docs/tl/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇷 Turkish](docs/tr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇰 Urdu](docs/ur/README.md)
&nbsp;&nbsp;&nbsp;[🇻🇳 Vietnamese](docs/vi/README.md)
&nbsp;&nbsp;&nbsp;[🇨🇳 Chinese](docs/zh/README.md)
<br/>
&nbsp;&nbsp;&nbsp;**[📚 ... All Languages ...](docs/README.md)**
----

### Is there a problem with this translation of the README?
This particular translation of the original [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
may be flawed -- *corrections are very welcome!* Please send a [pull request on GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
or if you're not comfortable doing that, [open an issue](https://github.com/cobbzilla/mobiletto-cli/issues)

When you create a new GitHub issue about a translation, please do:
* include the page URL (copy/paste from browser address bar)
* include the exact text that is wrong (copy/paste from browser)
* please describe what is wrong -- is the translation incorrect? is the formatting broken somehow?
* kindly offer a suggestion of a better translation, or how the text should be properly formatted
* **Thank you!**

# Contents
* [Source](#Source)
* [Support and Funding](#Support-and-Funding)
* [Installation and usage](#Installation-and-usage)
  * [npm package](#npm-package)
  * [From source](#From-source)
* [Connections](#Connections)
  * [Create a connection](#Create-a-connection)
  * [List connections](#List-connections)
  * [Dump connection JSON config](#Dump-connection-JSON-config)
  * [Remove a connection](#Remove-a-connection)
  * [Remove all connections](#Remove-all-connections)
* [Working with storage](#Working-with-storage)
  * [List files](#List-files)
  * [Write a file to stdout](#Write-a-file-to-stdout)
  * [Copy files](#Copy-files)
  * [Delete files](#Delete-files)
  * [View metadata](#View-metadata)
  * [Mirror directories](#Mirror-directories)

### Source
* [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
* [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

## Support and Funding
I would be sincerely grateful for any [contribution via Patreon](https://www.patreon.com/cobbzilla)

## Installation and usage
You can install and run `mobiletto-cli` via npm or directly from source.

### npm package
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

### From source
To run from source, you'll need nodejs v16+ and yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

## Connections
All mobiletto storage is accessed through a connection.

Mobiletto currently supports connections to the local filesystem storage and Amazon S3 buckets.

Connections are specified by a JSON object that looks like this:

    {
        "name": "name-of-connection",
        "type": "s3",            # one of "s3", "b2", or "local"
        "opts": {
            "readOnly": false,   # optional, default false
            "cacheSize": 100,    # optional, 
            ... other type-specific options ...
        },
        "encryption": {          # optional, default is no encryption
            "key": "enc-key",    # required if encryption is enabled
            "iv": "enc-IV",      # optional, derived from key if omitted
            "algo": "enc-algo"   # optional, default is aes-256-cbc
        }
    }

For full details on all the options and their values and meanings, see the
[mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

### Create a connection
To create a new connection, we need one of these JSON objects.

We can create one interactively, or supply one via a file or JSON literal:

    # Create JSON via interactive prompts
    mo connect 

    # Create via interactive prompts, but force name `my-conn` to be used
    mo connect -c my-conn 
    mo connect --create my-conn     # long-form option

    # Create from JSON config
    mo connect my-conn.json

    # Create from JSON config, but force name `renamed` to be used
    mo connect -c renamed my-conn.json

    # Create from literal JSON object
    mo connect '{
        "name": "my-conn",
        "type": "local",
        "key": "/tmp/basedir"
    }'

### List connections
List available connections:

    mo connect -l
    mo connect --list

### Dump connection JSON config
Show the full JSON config for a connection. **WARNING** this will print keys and secrets to stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

### Remove a connection
Remove a single connection:

    mo connect -r my-conn
    mo connect --remove my-conn

### Remove all connections
Remove ALL connections:

    mo connect -R
    mo connect --remove-all

## Working with storage
Once you have created some connections, use the `ls`, `cp`, `rm`, `meta` and `mirror` operations
to work with them.

Every file path that you provide to a command must be prefixed with the name of the connection
it refers to. In the examples below, we assume two connections exist named `conn1` and `conn2`

### List files
The output of a list command is a series of JSON objects, one per line, representing the files
found. These objects will have a `name` and `type`, and possibly other fields.

    mo ls conn1/some/path

List files recursively:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

**Encrypted storage note**: Recursive listing is not yet supported for encrypted connections.
You can only list one directory of files at a time.

List files verbosely (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

List files recursively and verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

View help for `ls` command, describes all options:

    mo ls -h
    mo ls --help

### Write a file to stdout
The `cat` command will print a file to stdout:

    mo cat conn1/some/file                         # print to terminal
    mo cat conn1/some/file | some-other-command    # use in command pipeline

In the true UNIX spirit *(yet certainly not the practice!)* mobiletto's `cat` command **takes no options**
other than `-h`/`--help` to display helpful information.

### Copy files
Copy a single file from one mobiletto to another:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

Copy a single file from one mobiletto to another, renaming it at the destination:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

Recursively copy a directory:

    mo cp -r conn1/some/directory conn2/some/dest/

View help for `cp` command, describes all options:

    mo cp -h
    mo cp --help

Note: File copying is not very fast, because it currently requires an intermediary temp file. 

### Delete files
Delete a single file:

    mo rm conn1/some/file.txt

Delete a single file and don't complain about any errors:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

Delete a directory:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

Delete a directory and don't complain about any errors:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

### View metadata
It's often useful to know the metadata for a file, without downloading the whole file.

Mobiletto is able to report the file size and last modified time, in addition to name and type.

To view metadata:

    mo meta conn1/some/file.txt

### Mirror directories
Mirroring is more than a special case of `cp`, it is a separate mobiletto command that wraps the
copy operation; it continues even when errors occur, and counts the number of successes and errors.

To mirror everything from conn1 into conn2:

    mo mirror conn1 conn2

To mirror a subdirectory: 

    mo mirror conn1/some/subdir conn2

To mirror a subdirectory into another subdirectory: 

    mo mirror conn1/some/subdir conn2/another/dir
