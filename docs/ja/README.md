mobiletto-cli
 =============
 [mobiletto] のコマンドライン インターフェイス (CLI) (https://www.npmjs.com/package/mobiletto)
保管所。

 Mobiletto は、Amazon S3、Backblaze B2、およびローカル ファイル システムへの接続をサポートしています。

 # これを別の言語で読む
この README.md ドキュメントは、[hokeylization](https://github.com/cobbzilla/hokeylization) によって翻訳されています。
 **[Google 翻訳でサポートされているすべての言語](https://cloud.google.com/translate/docs/languages)!**

完璧ではないことは確かですが、何もないよりはましだと思います!

 [🇸🇦 アラビア語](../ar/README.md)
 [🇧🇩ベンガル語](../bn/README.md)
 [🇩🇪 ドイツ語](../de/README.md)
 [🇺🇸 英語](../en/README.md)
 [🇪🇸 スペイン語](../es/README.md)
 [🇫🇷フランス語](../fr/README.md)
 [🇹🇩ハウサ](../ha/README.md)
 [🇮🇳 ヒンディー語](../hi/README.md)
 [🇮🇩 インドネシア語](../id/README.md)
 [🇮🇹 イタリア語](../it/README.md)
 [🇯🇵 日本語](../ja/README.md)
 [🇰🇷韓国語](../ko/README.md)
 [🇮🇳 マランティ](../mr/README.md)
 [🇵🇱 ポーランド語](../pl/README.md)
 [🇧🇷 ポルトガル語](../pt/README.md)
 [🇷🇺 ロシア語](../ru/README.md)
 [🇰🇪 スワヒリ語](../sw/README.md)
 [🇵🇭 タガログ語](../tl/README.md)
 [🇹🇷トルコ語](../tr/README.md)
 [🇵🇰 ウルドゥー語](../ur/README.md)
 [🇻🇳 ベトナム語](../vi/README.md)
 [🇨🇳 中国語](../zh/README.md)


 **[📚 ... すべての言語 ...](../README.md)**
 ----

 ### この README の翻訳に問題はありますか?
元の [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) の特定の翻訳
欠陥がある可能性があります -- *修正は大歓迎です!* [GitHub のプル リクエスト](https://github.com/cobbzilla/mobiletto-cli/pulls) を送信してください。
または、それが苦手な場合は、[問題を開く](https://github.com/cobbzilla/mobiletto-cli/issues)

翻訳に関する新しい GitHub の問題を作成する場合は、次のことを行ってください。
 * ページの URL を含めます (ブラウザのアドレス バーからコピー/貼り付け)
 * 間違っている正確なテキストを含めます (ブラウザからコピー/貼り付け)
 * 何が間違っているのか説明してください -- 翻訳は間違っていますか?どういうわけかフォーマットが壊れていますか？
 * より良い翻訳の提案、またはテキストを適切にフォーマットする方法を親切に提供してください
* **ありがとうございました！**

 ＃ コンテンツ
* [ソース](#ソース)
 * [支援と資金提供](#支援と資金提供)
 * [インストールと使い方](#インストールと使い方)
 * [npm パッケージ](#npm パッケージ)
 * [ソースから](#ソースから)
 * [接続](#接続)
 * [つながりを作る](#Create-a-connection)
 * [接続のリスト](#接続のリスト)
 * [ダンプ接続 JSON 構成](#Dump-connection-JSON-config)
 * [接続を削除](#Remove-a-connection)
 * [すべての接続を削除](#Remove-all-connections)
 * [ストレージの操作](#ストレージの操作)
 * [リストファイル](#List-files)
 * [ファイルを標準出力に書き込む](#Write-a-file-to-stdout)
 * [ファイルのコピー](#Copy-files)
 * [ファイルを削除](#Delete-files)
 * [メタデータを表示](#View-metadata)
 * [ミラー ディレクトリ](#ミラー ディレクトリ)

 ＃＃＃ ソース
* [GitHub の mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm上のmobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## サポートと資金提供
私はプロのオープン ソース ソフトウェア開発者になろうとしています。私はで働いています
長年ソフトウェア業界に携わってきた私は、成功した会社を立ち上げ、上場企業に売却してきました。
最近、仕事を失い、他に仕事が決まっているわけではありません

だから私は役立つソフトウェアを書いてみて、それがうまくいくかどうかを見ていきます

このソフトウェアをお楽しみいただけましたら、
最小 [Patreon による月間貢献](https://www.patreon.com/cobbzilla)

 *ありがとうございました！*

 ## インストールと使い方
npm 経由またはソースから直接`mobiletto-cli`をインストールして実行できます。

 ### npm パッケージ
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ソースから
ソースから実行するには、nodejs v16+ と yarn が必要です

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## 接続
すべての mobiletto ストレージは、接続を介してアクセスされます。

 Mobiletto は現在、ローカル ファイルシステム ストレージと Amazon S3 バケットへの接続をサポートしています。

接続は、次のような JSON オブジェクトによって指定されます。

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

すべてのオプションとその値と意味の詳細については、
 [mobiletto ドキュメント](https://www.npmjs.com/package/mobiletto#Basic-usage)。

 ### 接続を作成する
新しい接続を作成するには、これらの JSON オブジェクトのいずれかが必要です。

インタラクティブに作成することも、ファイルまたは JSON リテラルを介して提供することもできます。

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

 ### 接続を一覧表示する
利用可能な接続を一覧表示します。

    mo connect -l
    mo connect --list

 ### 接続の JSON 設定をダンプする
接続の完全な JSON 構成を表示します。 **警告** これにより、キーとシークレットが stdout に出力されます。

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### 接続を削除する
単一の接続を削除します。

    mo connect -r my-conn
    mo connect --remove my-conn

 ### すべての接続を削除
すべての接続を削除します。

    mo connect -R
    mo connect --remove-all

 ## ストレージの操作
いくつかの接続を作成したら、 ` `ls` 、 `cp` 、 `rm` 、 `meta`および`mirror`操作を使用します
彼らと一緒に働くために。

コマンドに指定するすべてのファイル パスには、接頭辞として接続名を付ける必要があります。
を指します。以下の例では、 `conn1`と`conn2`という名前の 2 つの接続が存在すると想定しています。

 ### リストファイル
list コマンドの出力は、ファイルを表す一連の JSON オブジェクト (1 行に 1 つずつ) です。
見つかった。これらのオブジェクトには`name`と`type`があり、場合によっては他のフィールドもあります。

    mo ls conn1/some/path

ファイルを再帰的にリストします。

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **暗号化されたストレージに関する注意**: 再帰的なリストは、暗号化された接続ではまだサポートされていません。
一度にリストできるファイルのディレクトリは 1 つだけです。

ファイルを詳細に一覧表示します (JSON をきれいに印刷します):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

ファイルを再帰的かつ詳細にリストします。

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls`コマンドのヘルプを表示し、すべてのオプションについて説明します。

    mo ls -h
    mo ls --help

 ### stdout にファイルを書き込む
`cat`コマンドはファイルを stdout に出力します:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

真の UNIX 精神で *(しかし、実際にはそうではありません!)* mobiletto の`cat`コマンドは **オプションを取りません**
役立つ情報を表示するには、 `-h` / `--help` 」以外。

 ### ファイルをコピーする
ある mobiletto から別の mobiletto に 1 つのファイルをコピーします。

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 1 つのファイルを 1 つの mobiletto から別の mobiletto にコピーし、宛先で名前を変更します。

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

ディレクトリを再帰的にコピーします。

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp`コマンドのヘルプを表示し、すべてのオプションについて説明します。

    mo cp -h
    mo cp --help

注: 現在、中間の一時ファイルが必要なため、ファイルのコピーはそれほど高速ではありません。

 ### ファイルを削除する
1 つのファイルを削除します。

    mo rm conn1/some/file.txt

単一のファイルを削除し、エラーについて文句を言わない:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

ディレクトリを削除します。

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

ディレクトリを削除し、エラーについて文句を言わない:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### メタデータを表示
ファイル全体をダウンロードしなくても、ファイルのメタデータを知っていると便利なことがよくあります。

 Mobiletto は、名前と種類に加えて、ファイル サイズと最終更新時刻を報告できます。

メタデータを表示するには:

    mo meta conn1/some/file.txt

 ### ミラーディレクトリ
ミラーリングは`cp`の特殊なケース以上のものであり、別の mobiletto コマンドでラップします。
コピー操作;エラーが発生しても続行し、成功とエラーの数を追跡します。

 conn1 から conn2 にすべてをミラーリングするには:

    mo mirror conn1 conn2

サブディレクトリをミラーリングするには:

    mo mirror conn1/some/subdir conn2

サブディレクトリを別のサブディレクトリにミラーリングするには:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
