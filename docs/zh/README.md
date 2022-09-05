mobiletto-cli
 ==============
 [mobiletto](https://www.npmjs.com/package/mobiletto) 的命令行界面 (CLI)
贮存。

 Mobiletto 支持与 Amazon S3、Backblaze B2 和本地文件系统的连接。

 # 用另一种语言阅读
此 README.md 文档已通过 [hokeylization](https://github.com/cobbzilla/hokeylization) 翻译成
**[谷歌翻译支持的所有语言](https://cloud.google.com/translate/docs/languages)！**

我敢肯定它并不完美，但我希望它总比没有好！

 [🇸🇦 阿拉伯语](../ar/README.md)
 [🇧🇩 孟加拉语](../bn/README.md)
 [🇩🇪 德语](../de/README.md)
 [🇺🇸 英文](../en/README.md)
 [🇪🇸 西班牙语](../es/README.md)
 [🇫🇷 法语](../fr/README.md)
 [🇹🇩豪萨语](../ha/README.md)
 [🇮🇳印地语](../hi/README.md)
 [🇮🇩 印尼语](../id/README.md)
 [🇮🇹 意大利语](../it/README.md)
 [🇯🇵 日语](../ja/README.md)
 [🇰🇷韩语](../ko/README.md)
 [🇮🇳 马兰地语](../mr/README.md)
 [🇵🇱波兰语](../pl/README.md)
 [🇧🇷 葡萄牙语](../pt/README.md)
 [🇷🇺 俄语](../ru/README.md)
 [🇰🇪 斯瓦希里语](../sw/README.md)
 [🇵🇭 他加禄语](../tl/README.md)
 [🇹🇷 土耳其语](../tr/README.md)
 [🇵🇰乌尔都语](../ur/README.md)
 [🇻🇳 越南语](../vi/README.md)
 [🇨🇳 中文](../zh/README.md)


 **[📚 ...所有语言 ...](../README.md)**
 ----

 ### README 的这个翻译有问题吗？
原始 [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) 的特殊翻译
可能有缺陷 -- *非常欢迎更正！* 请发送 [GitHub 上的拉取请求](https://github.com/cobbzilla/mobiletto-cli/pulls)，
或者如果你不习惯这样做，[打开一个问题](https://github.com/cobbzilla/mobiletto-cli/issues)

当您创建有关翻译的新 GitHub 问题时，请执行以下操作：
 * 包括页面 URL（从浏览器地址栏复制/粘贴）
 *包括错误的确切文本（从浏览器复制/粘贴）
 * 请描述问题所在——翻译不正确吗？格式是否以某种方式损坏？
 * 请提供更好的翻译建议，或文本应如何正确格式化
* **谢谢！**

 ＃ 内容
* [来源](#来源)
 * [支持和资助](#Support-and-Funding)
 * [安装和使用](#Installation-and-usage)
 * [npm 包](#npm 包)
 * [来自源](#From-source)
 * [连接数]（#连接数）
 * [创建连接](#Create-a-connection)
 * [列出连接](#List-connections)
 * [转储连接 JSON 配置](#Dump-connection-JSON-config)
 * [删除连接](#Remove-a-connection)
 * [删除所有连接](#Remove-all-connections)
 * [使用存储](#Working-with-storage)
 * [列出文件](#List-files)
 * [将文件写入标准输出](#Write-a-file-to-stdout)
 * [复制文件](#Copy-files)
 * [删除文件](#Delete-files)
 * [查看元数据](#View-metadata)
 * [镜像目录](#Mirror-directories)

 ＃＃＃ 资源
* [github上的mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm 上的 mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## 支持和资金
我正在努力成为一名专业的开源软件开发人员。我一直在工作
从事软件行业多年，我创办了成功的公司，并把它们卖给了上市公司。
最近我失业了，我真的没有其他工作要做

所以我将尝试编写有用的软件，看看是否可行

如果您喜欢使用此软件，我将由衷感谢
最小的 [通过 Patreon 的每月贡献](https://www.patreon.com/cobbzilla)

 *谢谢！*

 ##安装和使用
您可以通过 npm 或直接从源代码安装和运行`mobiletto-cli` 。

 ### npm 包
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### 来自源
要从源代码运行，您需要 nodejs v16+ 和 yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## 连接
所有 mobiletto 存储都通过连接访问。

 Mobiletto 当前支持连接到本地文件系统存储和 Amazon S3 存储桶。

连接由如下所示的 JSON 对象指定：

    {
        "name": "name-of-connection",
        "type": "s3", # one of "s3", "b2", or "local"
        "opts": {
            "readOnly": false, # optional, default false
            "cacheSize": 100, # optional,
            ... other type-specific options ...
        },
        "encryption": { # optional, default is no encryption
            "key": "enc-key", # required if encryption is enabled
            "iv": "enc-IV", # optional, derived from key if omitted
            "algo": "enc-algo" # optional, default is aes-256-cbc
        }
    }

有关所有选项及其值和含义的完整详细信息，请参阅
[mobiletto 文档](https://www.npmjs.com/package/mobiletto#Basic-usage)。

 ### 创建连接
要创建新连接，我们需要这些 JSON 对象之一。

我们可以交互地创建一个，或者通过文件或 JSON 文字提供一个：

    # Create JSON via interactive prompts
    mo connect

    # Create via interactive prompts, but force name `my-conn` to be used
    mo connect -c my-conn
    mo connect --create my-conn # long-form option

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

 ### 列出连接
列出可用的连接：

    mo connect -l
    mo connect --list

 ### 转储连接 JSON 配置
显示连接的完整 JSON 配置。 **警告**这会将密钥和秘密打印到标准输出。

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### 删除连接
删除单个连接：

    mo connect -r my-conn
    mo connect --remove my-conn

 ### 删除所有连接
删除所有连接：

    mo connect -R
    mo connect --remove-all

 ## 使用存储
创建一些连接后，使用`ls` ls` 、 ` `cp` 、 `rm` 、 `meta`和`mirror`操作
与他们一起工作。

您提供给命令的每个文件路径都必须以连接名称为前缀
它指的是。在下面的示例中，我们假设存在两个名为`conn1`和`conn2`

 ### 列出文件
list 命令的输出是一系列 JSON 对象，每行一个，代表文件
成立。这些对象将有一个`name`和`type` ，可能还有其他字段。

    mo ls conn1/some/path

递归列出文件：

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **加密存储说明**：加密连接尚不支持递归列表。
您一次只能列出一个文件目录。

详细列出文件（漂亮的 JSON）：

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

递归和详细地列出文件：

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

查看`ls`命令的帮助，描述所有选项：

    mo ls -h
    mo ls --help

 ### 将文件写入标准输出
`cat`命令会将文件打印到标准输出：

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

本着真正的 UNIX 精神 *（但肯定不是实践！）* mobiletto 的`cat`命令**没有选项**
除了`-h` / `--help`来显示有用的信息。

 ### 复制文件
将单个文件从一个 mobiletto 复制到另一个：

    mo cp conn1/some/path/to/file conn2/some/dest/path/

将单个文件从一个 mobiletto 复制到另一个，在目的地重命名：

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

递归复制目录：

    mo cp -r conn1/some/directory conn2/some/dest/

查看`cp`命令的帮助，描述所有选项：

    mo cp -h
    mo cp --help

注意：文件复制不是很快，因为它目前需要一个中间临时文件。

 ＃＃＃ 删除文件
删除单个文件：

    mo rm conn1/some/file.txt

删除单个文件，不要抱怨任何错误：

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

删除目录：

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

删除一个目录，不要抱怨任何错误：

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### 查看元数据
了解文件的元数据通常很有用，而无需下载整个文件。

 Mobiletto 能够报告文件大小和上次修改时间，以及名称和类型。

查看元数据：

    mo meta conn1/some/file.txt

 ### 镜像目录
镜像不仅仅是`cp`的一个特例，它是一个单独的 mobiletto 命令，它包装了
复制操作；即使发生错误，它也会继续，并跟踪成功和错误的计数。

要将 conn1 中的所有内容镜像到 conn2：

    mo mirror conn1 conn2

要镜像子目录：

    mo mirror conn1/some/subdir conn2

要将子目录镜像到另一个子目录：

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
