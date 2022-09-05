mobiletto-cli
 ==============
 Інтэрфейс каманднага радка (CLI) для [mobiletto](https://www.npmjs.com/package/mobiletto)
 захоўванне.

 Mobiletto падтрымлівае падключэнне да Amazon S3, Backblaze B2 і лакальных файлавых сістэм.

 # Прачытайце гэта на іншай мове
 Гэты дакумент README.md быў перакладзены праз [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) на
 **[усе мовы, якія падтрымліваюцца Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Я ўпэўнены, што гэта не ідэальна, але я спадзяюся, што гэта лепш, чым нічога!

 [🇸🇦 арабская](../ar/README.md)
 [🇧🇩 бенгальская](../bn/README.md)
 [🇩🇪 нямецкая](../de/README.md)
 [🇺🇸 англійская](../en/README.md)
 [🇪🇸 Іспанская](../es/README.md)
 [🇫🇷 французская](../fr/README.md)
 [🇹🇩 Хаўса](../ha/README.md)
 [🇮🇳 хіндзі](../hi/README.md)
 [🇮🇩 Інданезійская](../id/README.md)
 [🇮🇹 Італьянская](../it/README.md)
 [🇯🇵 японская](../ja/README.md)
 [🇰🇷 карэйская](../ko/README.md)
 [🇮🇳 маранты](../mr/README.md)
 [🇵🇱 польская](../pl/README.md)
 [🇧🇷 партугальская](../pt/README.md)
 [🇷🇺 руская](../ru/README.md)
 [🇰🇪 суахілі](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 турэцкая](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 в'етнамская](../vi/README.md)
 [🇨🇳 кітайская](../zh/README.md)


 **[📚 ... Усе мовы ...](../README.md)**
 ----

 ### Ці ёсць праблемы з гэтым перакладам README?
 Гэты канкрэтны пераклад арыгінала [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 можа мець недахопы -- *выпраўленні вельмі вітаюцца!* Адпраўце [запыт на выцягванне на GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 або, калі вам гэта не зручна, [адкрыйце пытанне](https://github.com/cobbzilla/mobiletto-cli/issues)

 Калі вы ствараеце новую праблему GitHub аб перакладзе, зрабіце:
 * уключыце URL старонкі (скапіруйце/устаўце з адраснага радка браўзера)
 * уключыце дакладны няправільны тэкст (скапіруйце/устаўце з браўзера)
 * калі ласка, апішыце, што не так -- пераклад няправільны? фарматаванне неяк парушана?
 * калі ласка, прапануйце лепшы пераклад ці тое, як правільна афармляць тэкст
 * **Дзякуй!**

 ### Крыніца
 * [mobiletto-cli на GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli на npm](https://www.npmjs.com/package/mobiletto-cli)

 # Змест
 * [Устаноўка і выкарыстанне](#Installation-and-usage)
 * [пакет npm](#npm-пакет)
 * [З крыніцы](#З крыніцы)
 * [Падключэнні](#Падключэнні)
 * [Стварыць злучэнне](#Create-a-connection)
 * [Спіс злучэнняў](#Спіс-злучэнняў)
 * [Дамп канфігурацыі JSON злучэння](#Dump-connection-JSON-config)
 * [Выдаліць злучэнне](#Remove-a-connection)
 * [Выдаліць усе злучэнні](#Remove-all-connections)
 * [Праца са сховішчам](#Working-with-storage)
 * [Спіс файлаў](#Спіс-файлаў)
 * [Запісаць файл у stdout](#Write-a-file-to-stdout)
 * [Капіраваць файлы](#Copy-файлы)
 * [Выдаліць файлы](#Delete-files)
 * [Прагляд метададзеных](#View-metadata)
 * [Люстраныя каталогі](#Mirror-каталогі)

 ## Устаноўка і выкарыстанне
 Вы можаце ўсталяваць і запусціць `mobiletto-cli` праз npm або непасрэдна з крыніцы.

 ### пакет npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### З крыніцы
 Для запуску з зыходнага кода вам спатрэбіцца nodejs v16+ і yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Сувязі
 Доступ да ўсяго сховішча mobiletto ажыццяўляецца праз злучэнне.

 У цяперашні час Mobiletto падтрымлівае падключэнне да лакальнага сховішча файлавай сістэмы і вёдраў Amazon S3.

 Злучэнні вызначаюцца аб'ектам JSON, які выглядае так:

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

 Для атрымання поўнай інфармацыі аб усіх опцыях, іх значэннях і значэннях гл
 [mobiletto дакументы](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Стварыце злучэнне
 Каб стварыць новае злучэнне, нам спатрэбіцца адзін з гэтых аб'ектаў JSON.

 Мы можам стварыць яго ў інтэрактыўным рэжыме або паставіць яго праз файл або літарал JSON:

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

 ### Спіс злучэнняў
 Спіс даступных злучэнняў:

    mo connect -l
    mo connect --list

 ### Дамп канфігурацыі JSON злучэння
 Паказаць поўную канфігурацыю JSON для злучэння. **ПАПЯРЭДЖАННЕ** гэта прывядзе да друку ключоў і сакрэтаў у стандартным вывадзе.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Выдаліць злучэнне
 Выдаліць адно злучэнне:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Выдаліць усе злучэнні
 Выдаліць УСЕ злучэнні:

    mo connect -R
    mo connect --remove-all

 ## Праца са сховішчам
 Калі вы стварылі некалькі злучэнняў, выкарыстоўвайце `ls` , `cp` , `rm` , `meta` і `mirror`
 працаваць з імі.

 Кожны шлях да файла, які вы даяце камандзе, павінен мець прэфікс імя злучэння
 гэта адносіцца да. У прыведзеных ніжэй прыкладах мы мяркуем, што існуюць два злучэнні з `conn1` і `conn2`

 ### Спіс файлаў
 Выхад каманды спісу - гэта шэраг аб'ектаў JSON, па адным у радку, якія прадстаўляюць файлы
 знойдзены. Гэтыя аб'екты будуць мець `name` і `type` і, магчыма, іншыя палі.

    mo ls conn1/some/path

 Спіс файлаў рэкурсіўна:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Заўвага аб зашыфраваным сховішчы**: рэкурсіўны спіс яшчэ не падтрымліваецца для зашыфраваных злучэнняў.
 Вы можаце пералічыць толькі адзін каталог файлаў адначасова.

 Падрабязны спіс файлаў (прыкладна друкаваны JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Спіс файлаў рэкурсіўна і падрабязна:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Праглядзіце даведку для каманды `ls` , апісвае ўсе параметры:

    mo ls -h
    mo ls --help

 ### Запіс файла ў стандартны вывад
 Каманда `cat` надрукуе файл у стандартны вывад:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 У сапраўдным духу UNIX *(але, вядома, не практыка!)* каманда mobiletto `cat` **не прымае варыянтаў**
 акрамя `-h` / `--help` для адлюстравання карыснай інфармацыі.

 ### Капіяваць файлы
 Скапіруйце адзін файл з аднаго mobiletto на іншы:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Скапіруйце адзін файл з аднаго mobiletto на іншы, перайменаваўшы яго ў месцы прызначэння:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Рэкурсіўна скапіяваць каталог:

    mo cp -r conn1/some/directory conn2/some/dest/

 Праглядзець даведку для каманды `cp` , апісвае ўсе параметры:

    mo cp -h
    mo cp --help

 Заўвага: капіраванне файлаў не вельмі хуткае, таму што зараз патрабуецца прамежкавы часовы файл.

 ### Выдаліць файлы
 Выдаліць адзін файл:

    mo rm conn1/some/file.txt

 Выдаліце адзін файл і не скардзіцеся на памылкі:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Выдаліць каталог:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Выдаліце каталог і не скардзіцеся на памылкі:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Прагляд метададзеных
 Часта бывае карысна ведаць метаданыя для файла, не спампоўваючы ўвесь файл.

 Mobiletto можа паведамляць памер файла і час апошняга змянення, а таксама назву і тып.

 Для прагляду метададзеных:

    mo meta conn1/some/file.txt

 ### Люстраныя каталогі
 Адлюстраванне - гэта больш, чым асаблівы выпадак `cp` , гэта асобная каманда mobiletto, якая абгортвае
 аперацыя капіравання; ён працягваецца, нават калі ўзнікаюць памылкі, і адсочвае колькасць поспехаў і памылак.

 Каб адлюстраваць усё з conn1 у conn2:

    mo mirror conn1 conn2

 Каб адлюстраваць падкаталог:

    mo mirror conn1/some/subdir conn2

 Каб адлюстраваць падкаталог у іншы падкаталог:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
