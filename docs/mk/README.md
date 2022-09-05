mobiletto-cli
 ==============
 Интерфејс на командната линија (CLI) за [mobiletto](https://www.npmjs.com/package/mobiletto)
 складирање.

 Mobiletto поддржува врски со Amazon S3, Backblaze B2 и локални датотечни системи.

 # Прочитајте го ова на друг јазик
 Овој документ README.md е преведен, преку [hokeylization](https://github.com/cobbzilla/hokeylization), на
 **[секој јазик поддржан од Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Сигурен сум дека не е совршено, но се надевам дека е подобро од ништо!

 [🇸🇦 Арапски](../ar/README.md)
 [🇧🇩 бенгалски](../bn/README.md)
 [🇩🇪 германски](../de/README.md)
 [🇺🇸 англиски](../en/README.md)
 [🇪🇸 шпански](../es/README.md)
 [🇫🇷 француски](../fr/README.md)
 [🇹🇩 Хауса](../ha/README.md)
 [🇮🇳 хинди](../hi/README.md)
 [🇮🇩 индонезиски](../id/README.md)
 [🇮🇹 италијански](../it/README.md)
 [🇯🇵 Јапонски](../ja/README.md)
 [🇰🇷 корејски](../ko/README.md)
 [🇮🇳 Маранти](../mr/README.md)
 [🇵🇱 полски](../pl/README.md)
 [🇧🇷 португалски](../pt/README.md)
 [🇷🇺 руски](../ru/README.md)
 [🇰🇪 свахили](../sw/README.md)
 [🇵🇭 тагалог](../tl/README.md)
 [🇹🇷 турски](../tr/README.md)
 [🇵🇰 Урду](../ur/README.md)
 [🇻🇳 виетнамски](../vi/README.md)
 [🇨🇳 кинески](../zh/README.md)


 **[📚 ... Сите јазици ...](../README.md)**
 ----

 ### Дали има проблем со овој превод на README?
 Овој конкретен превод на оригиналот [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 може да има недостатоци -- *корекциите се многу добредојдени!* Ве молиме испратете [барање за повлекување на GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 или ако не ви е удобно да го правите тоа, [отворете проблем](https://github.com/cobbzilla/mobiletto-cli/issues)

 Кога креирате нов проблем на GitHub за превод, ве молиме направете:
 * Вклучете ја URL-адресата на страницата (копирајте/залепете од лентата за адреси на прелистувачот)
 * Вклучете го точниот текст што е погрешен (копирајте/залепете од прелистувачот)
 * Ве молиме опишете што не е во ред -- дали преводот е неточен? форматирањето некако е скршено?
 * љубезно понудете предлог за подобар превод или како текстот треба да биде правилно форматиран
 * **Ви благодарам!**

 # Содржини
 * [Извор](#Извор)
 * [Поддршка и финансирање](#Support-and-Funding)
 * [Инсталација и користење](#Installation-and-usage)
 * [пакет npm](#npm-пакет)
 * [Од извор](#Од-извор)
 * [Поврзувања](#Connections)
 * [Креирај врска](#Креирај-а-врска)
 * [Список врски](#Список-врски)
 * [Dump Connection JSON config](#Dump-connection-JSON-config)
 * [Отстрани врска](#Отстрани-а-врска)
 * [Отстрани ги сите врски](#Remove-all-connections)
 * [Работа со складирање](#Working-with-storage)
 * [Список на датотеки](#Список-датотеки)
 * [Напишете датотека во stdout](#Write-a-file-to-stdout)
 * [Копирај датотеки](#Копирај-датотеки)
 * [Избриши датотеки](#Избриши-датотеки)
 * [Прикажи метаподатоци](#View-metadata)
 * [Огледало директориуми](# Mirror-directories)

 ### Извор
 * [mobiletto-cli на GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli на npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Поддршка и финансирање
 Се обидувам да бидам професионален развивач на софтвер со отворен код. Јас сум работел во
 Софтверската индустрија долги години, основав успешни компании и ги продавав на јавни претпријатија.
 Неодамна останав без работа и навистина немам друга работа

 Затоа, ќе се обидам да напишам корисен софтвер и да видам дали тоа функционира

 Ако уживате во користењето на овој софтвер, би ви бил искрено благодарен дури и за тоа
 најмал [месечен придонес преку Patreon](https://www.patreon.com/cobbzilla)

 *Ви благодарам!*

 ## Инсталација и користење
 Може да инсталирате и стартувате `mobiletto-cli` преку npm или директно од изворот.

 ### npm пакет
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Од изворот
 За да стартувате од изворот, ќе ви требаат nodejs v16+ и предиво

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Врски
 Целото складирање на мобилни телефони се пристапува преку врска.

 Mobiletto моментално поддржува врски со локалното складирање на датотечен систем и кофите на Amazon S3.

 Врските се специфицирани со JSON објект кој изгледа вака:

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

 За целосни детали за сите опции и нивните вредности и значења, видете во
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Создадете врска
 За да создадеме нова врска, потребен ни е еден од овие JSON објекти.

 Можеме да создадеме интерактивно, или да обезбедиме преку датотека или JSON буквално:

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

 ### Наведете врски
 Наведете ги достапните врски:

    mo connect -l
    mo connect --list

 ### Префрлете ја конфигурацијата на JSON
 Прикажи ја целосната конфигурација JSON за врска. **ПРЕДУПРЕДУВАЊЕ** ова ќе ги отпечати клучевите и тајните за stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Отстранете врска
 Отстранете една врска:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Отстранете ги сите врски
 Отстранете ги СИТЕ врски:

    mo connect -R
    mo connect --remove-all

 ## Работа со складирање
 Откако ќе создадете некои врски, користете ги `ls` , `cp` , `rm` , `meta` и `mirror`
 да работат со нив.

 Секоја патека на датотеката што ја давате на командата мора да биде со префикс со името на врската
 се однесува на. Во примерите подолу, претпоставуваме дека постојат две врски со име `conn1` и `conn2`

 ### Наведете датотеки
 Излезот од командата за листа е серија JSON објекти, по еден по линија, што ги претставува датотеките
 пронајден. Овие објекти ќе имаат `name` и `type` , а можеби и други полиња.

    mo ls conn1/some/path

 Наведете ги датотеките рекурзивно:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Забелешка за шифрирано складирање**: Рекурзивниот список сè уште не е поддржан за шифрирани врски.
 Можете да наведете само еден директориум со датотеки во исто време.

 Наведете ги датотеките опширно (прилично печатен JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Наведете ги датотеките рекурзивно и говорно:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Прикажи помош за командата `ls` , ги опишува сите опции:

    mo ls -h
    mo ls --help

 ### Напишете датотека за stdout
 Командата `cat` ќе отпечати датотека во stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Во вистинскиот дух на UNIX *(сепак сигурно не е практика!)* командата `cat` на mobiletto ** не зема никакви опции**
 освен `-h` / `--help` за прикажување корисни информации.

 ### Копирајте датотеки
 Копирајте една датотека од еден мобилен во друг:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Копирајте една датотека од еден мобилен во друг, преименувајќи ја на дестинацијата:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Рекурзивно копирајте директориум:

    mo cp -r conn1/some/directory conn2/some/dest/

 Прикажи помош за командата `cp` , ги опишува сите опции:

    mo cp -h
    mo cp --help

 Забелешка: копирањето на датотеката не е многу брзо, бидејќи во моментов бара посредна темп датотека.

 ### Избришете датотеки
 Избришете една датотека:

    mo rm conn1/some/file.txt

 Избришете една датотека и не се жалете за никакви грешки:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Избришете директориум:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Избришете директориум и не се жалете за какви било грешки:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Прикажи метаподатоци
 Често е корисно да се знаат метаподатоците за датотека, без да се преземе целата датотека.

 Mobiletto може да ја пријави големината на датотеката и последното изменето време, покрај името и типот.

 За да видите метаподатоци:

    mo meta conn1/some/file.txt

 ### Огледало директориуми
 Mirroring е повеќе од посебен случај на `cp` , тоа е посебна mobiletto команда што го обвива
 операција за копирање; продолжува дури и кога ќе се појават грешки и следи број на успеси и грешки.

 За пресликување на сè од conn1 во conn2:

    mo mirror conn1 conn2

 За пресликување на поддиректориум:

    mo mirror conn1/some/subdir conn2

 За пресликување на поддиректориум во друг поддиректориум:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
