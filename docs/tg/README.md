mobiletto-cli
 =============
 Интерфейси сатри фармон (CLI) барои [mobiletto](https://www.npmjs.com/package/mobiletto)
 нигоҳдорӣ.

 Mobiletto пайвастҳоро ба Amazon S3, Backblaze B2 ва системаҳои файлии маҳаллӣ дастгирӣ мекунад.

 # Инро ба забони дигар хонед
 Ин ҳуҷҷати README.md тавассути [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) ба забони тарҷума шудааст
 **[ҳар забоне, ки аз ҷониби Google Translate дастгирӣ мешавад](https://cloud.google.com/translate/docs/languages)!**

 Ман итминон дорам, ки ин комил нест, аммо ман умедворам, ки он аз ҳеҷ чиз беҳтар аст!

 [🇸🇦 Арабӣ](../ar/README.md)
 [🇧🇩 Бенгалӣ](../bn/README.md)
 [🇩🇪 Олмон](../de/README.md)
 [🇺🇸 англисӣ](../en/README.md)
 [🇪🇸 испанӣ](../es/README.md)
 [🇫🇷 Фаронса](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Ҳиндӣ](../hi/README.md)
 [🇮🇩 Индонезия](../id/README.md)
 [🇮🇹 Италия](../it/README.md)
 [🇯🇵 Ҷопон](../ja/README.md)
 [🇰🇷 Кореяи](../ko/README.md)
 [🇮🇳 Марантӣ](../mr/README.md)
 [🇵🇱 Лаҳистон](../pl/README.md)
 [🇧🇷 португалӣ](../pt/README.md)
 [🇷🇺 русӣ](../ru/README.md)
 [🇰🇪 Суахили](../sw/README.md)
 [🇵🇭 Тагалогӣ](../tl/README.md)
 [🇹🇷 Туркӣ](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 Ветнамӣ](../vi/README.md)
 [🇨🇳 Чин](../zh/README.md)


 **[📚 ... Ҳама забонҳо ...](../README.md)**
 ----

 ### Оё бо ин тарҷумаи README мушкилот вуҷуд дорад?
 Ин тарҷумаи махсуси аслии [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 метавонад камбудиҳо дошта бошад -- *ислоҳот хеле хуш омадед!* Лутфан [дархост дар GitHub] ирсол кунед(https://github.com/cobbzilla/mobiletto-cli/pulls),
 ё агар шумо ин корро бароҳат надоред, [як масъаларо кушоед](https://github.com/cobbzilla/mobiletto-cli/issues)

 Вақте ки шумо дар бораи тарҷума масъалаи нави GitHub эҷод мекунед, лутфан амал кунед:
 * URL-и саҳифаро дохил кунед (аз сатри суроғаҳои браузер нусхабардорӣ/часбонед)
 * матни дақиқи нодурустро дохил кунед (аз браузер нусхабардорӣ/часбонед)
 * лутфан шарҳ диҳед, ки чӣ хато аст -- тарҷума нодуруст аст? оё форматкунӣ ягон хел вайрон шудааст?
 * лутфан пешниҳод кунед, ки тарҷумаи беҳтар ё чӣ гуна матн бояд дуруст формат карда шавад
 * **Сипос!**

 ### Сарчашма
 * [mobiletto-cli дар GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli дар npm](https://www.npmjs.com/package/mobiletto-cli)

 # Мундариҷа
 * [Насб ва истифода](#Насб ва истифода)
 * [бастаи npm](#npm-баста)
 * [Аз сарчашма](#Аз сарчашма)
 * [Пайвастҳо](#Пайвастҳо)
 * [Эҷоди пайвастшавӣ](#Эҷоди пайвастшавӣ)
 * [Рӯйхати пайвастҳо](#Рӯйхати пайвастҳо)
 * [Танзимоти пайвасти JSON](#Dump-connection-JSON-config)
 * [Нест кардани пайвастшавӣ](#Remove-a-пайваст)
 * [Ҳама пайвастҳоро хориҷ кунед](#Remove-ҳамаи пайвастҳо)
 * [Кор бо анбор](#Кор бо анбор)
 * [Рӯйхати файлҳо](#Рӯйхати файлҳо)
 * [Файлро ба stdout нависед](#Write-a-file-to-stdout)
 * [Нусхабардории файлҳо](#Нусхабардории файлҳо)
 * [Нест кардани файлҳо](#Нест кардани файлҳо)
 * [Намоиши метамаълумот](#Намоиш-метадата)
 * [Феҳристҳои оина](#Мирror-директорҳо)

 ## Насб ва истифода
 Шумо метавонед `mobiletto-cli` тавассути npm ё мустақиман аз манбаъ насб ва идора кунед.

 ### бастаи npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Аз манбаъ
 Барои аз манбаъ кор кардан, ба шумо nodejs v16+ ва ришта лозим аст

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Пайвастшавӣ
 Ҳама нигаҳдории mobiletto тавассути пайвастшавӣ дастрас карда мешаванд.

 Айни замон Mobiletto пайвастҳоро ба нигаҳдории системаи файлии маҳаллӣ ва сатилҳои Amazon S3 дастгирӣ мекунад.

 Пайвастшавӣ аз ҷониби объекти JSON муайян карда мешавад, ки чунин менамояд:

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

 Барои тафсилоти пурра дар бораи ҳамаи интихобҳо ва арзишҳо ва маънои онҳо, нигаред
 [docs mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Пайваст эҷод кунед
 Барои сохтани пайвасти нав ба мо яке аз ин объектҳои JSON лозим аст.

 Мо метавонем онро ба таври интерактивӣ эҷод кунем ё онро тавассути файл ё JSON литералӣ таъмин кунем:

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

 ### Рӯйхати пайвастҳо
 Рӯйхати пайвастҳои дастрас:

    mo connect -l
    mo connect --list

 ### Танзимоти пайвасти JSON
 Барои пайвастшавӣ конфигуратсияи пурраи JSON-ро нишон диҳед. ** Огоҳӣ ** ин калидҳо ва асрорро ба stdout чоп мекунад.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Пайвастро хориҷ кунед
 Як пайвастро хориҷ кунед:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Ҳама пайвастҳоро хориҷ кунед
 ҲАМАИ пайвастҳоро хориҷ кунед:

    mo connect -R
    mo connect --remove-all

 ## Кор бо анбор
 Пас аз он ки шумо якчанд пайвастҳоро эҷод кардед, амалҳои ' `ls` ', `cp` , `rm` , `meta` ва `mirror` истифода баред
 ки бо онхо кор кунанд.

 Ҳар як роҳи файле, ки шумо ба фармон пешниҳод мекунед, бояд бо номи пайвастшавӣ пешоянд бошад
 ба он ишора мекунад. Дар мисолҳои зер, мо фарз мекунем, ки ду пайваст бо номи `conn1` " ва `conn2`

 ### Рӯйхати файлҳо
 Натиҷаи фармони рӯйхат як қатор объектҳои JSON мебошад, ки дар як сатр яке аз файлҳоро ифода мекунад
 ёфт. Ин объектҳо дорои `name` ва `type` ва эҳтимолан дигар майдонҳо хоҳанд буд.

    mo ls conn1/some/path

 Рӯйхати файлҳо ба таври рекурсивӣ:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Ёддошти нигаҳдории рамзгузоришуда**: Рӯйхати рекурсивӣ ҳанӯз барои пайвастҳои рамзгузоришуда дастгирӣ намешавад.
 Шумо метавонед дар як вақт танҳо як феҳристи файлҳоро номбар кунед.

 Рӯйхати файлҳо ба таври муфассал (JSON чопи зебо):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Рӯйхати файлҳоро ба таври рекурсивӣ ва муфассал номбар кунед:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Намоиши кӯмак барои фармони `ls` , ҳамаи вариантҳоро тавсиф мекунад:

    mo ls -h
    mo ls --help

 ### Файлро ба stdout нависед
 Фармони `cat` файлро ба stdout чоп мекунад:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Дар рӯҳияи воқеии UNIX *(аммо бешубҳа ин амал нест!)* Фармони `cat` -и mobiletto **ҳеҷ интихобро қабул намекунад**
 ғайр аз `-h` / `--help` барои намоиш додани маълумоти муфид.

 ### Файлҳоро нусхабардорӣ кунед
 Як файлро аз як mobiletto ба дигараш нусхабардорӣ кунед:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Як файлро аз як mobiletto ба дигараш нусхабардорӣ кунед ва номи онро дар макони таъинот иваз кунед:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Феҳристи такрорӣ нусхабардорӣ кунед:

    mo cp -r conn1/some/directory conn2/some/dest/

 Кӯмакро барои фармони `cp` , ҳамаи вариантҳоро тавсиф мекунад:

    mo cp -h
    mo cp --help

 Эзоҳ: Нусхабардории файл он қадар зуд нест, зеро он дар айни замон файли муваққатии миёнаравро талаб мекунад.

 ### Файлҳоро нест кунед
 Як файлро нест кунед:

    mo rm conn1/some/file.txt

 Як файлро нест кунед ва аз хатогиҳо шикоят накунед:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Нест кардани директория:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Директорияро нест кунед ва аз хатогиҳо шикоят накунед:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Дидани метамаълумот
 Донистани метамаълумот барои файл, бе зеркашии тамоми файл, аксар вақт муфид аст.

 Mobiletto қодир аст, ки ба ғайр аз ном ва намуд андозаи файл ва вақти охирини тағирёфтаро гузориш диҳад.

 Барои дидани метамаълумот:

    mo meta conn1/some/file.txt

 ### Феҳристҳои оина
 Mirroring бештар аз як ҳолати махсуси `cp` аст, он як фармони алоҳидаи mobiletto аст, ки
 амалиёти нусхабардорӣ; он ҳатто вақте ки хатогиҳо рух медиҳанд, идома меёбад ва шумораи муваффақиятҳо ва хатогиҳоро пайгирӣ мекунад.

 Барои инъикоси ҳама чиз аз conn1 ба conn2:

    mo mirror conn1 conn2

 Барои инъикоси зеркаталог:

    mo mirror conn1/some/subdir conn2

 Барои инъикоси зеркаталог ба зеркаталоги дигар:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
