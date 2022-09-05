mobiletto-cli
 ==============
 Интерфейс на командния ред (CLI) за [mobiletto](https://www.npmjs.com/package/mobiletto)
 съхранение.

 Mobiletto поддържа връзки към Amazon S3, Backblaze B2 и локални файлови системи.

 # Прочетете това на друг език
 Този документ README.md е преведен чрез [hokeylization](https://github.com/cobbzilla/hokeylization) на
 **[всеки език, поддържан от Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Сигурен съм, че не е перфектно, но се надявам да е по-добре от нищо!

 [🇸🇦 арабски](../ar/README.md)
 [🇧🇩 бенгалски](../bn/README.md)
 [🇩🇪 немски](../de/README.md)
 [🇺🇸 английски](../en/README.md)
 [🇪🇸 испански](../es/README.md)
 [🇫🇷 френски](../fr/README.md)
 [🇹🇩 Хауса](../ha/README.md)
 [🇮🇳 хинди](../hi/README.md)
 [🇮🇩 индонезийски](../id/README.md)
 [🇮🇹 италиански](../it/README.md)
 [🇯🇵 японски](../ja/README.md)
 [🇰🇷 корейски](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 полски](../pl/README.md)
 [🇧🇷 португалски](../pt/README.md)
 [🇷🇺 руски](../ru/README.md)
 [🇰🇪 суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 турски](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 виетнамски](../vi/README.md)
 [🇨🇳 китайски](../zh/README.md)


 **[📚 ... Всички езици ...](../README.md)**
 ----

 ### Има ли проблем с този превод на README?
 Този конкретен превод на оригинала [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 може да има недостатъци -- *корекциите са добре дошли!* Моля, изпратете [заявка за изтегляне в GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 или ако не ви е удобно да правите това, [отворете проблем](https://github.com/cobbzilla/mobiletto-cli/issues)

 Когато създавате нов проблем в GitHub относно превод, моля, направете следното:
 * включете URL адреса на страницата (копирайте/поставете от адресната лента на браузъра)
 * включете точния грешен текст (копирайте/поставете от браузъра)
 * моля, опишете какво не е наред -- преводът неправилен ли е? форматирането повредено ли е по някакъв начин?
 * любезно предложете предложение за по-добър превод или как текстът да бъде правилно форматиран
 * **Благодаря ти!**

 # Съдържание
 * [Източник](#Източник)
 * [Подкрепа и финансиране](#Support-and-Funding)
 * [Инсталиране и използване](#Installation-and-usage)
 * [npm пакет](#npm-пакет)
 * [От източник](#От-източник)
 * [Връзки](#Връзки)
 * [Създаване на връзка](#Create-a-connection)
 * [Списък на връзките](#Списък-връзки)
 * [Дъмп JSON конфигурация на връзка](#Dump-connection-JSON-config)
 * [Премахване на връзка](#Remove-a-connection)
 * [Премахване на всички връзки](#Премахване на всички връзки)
 * [Работа със съхранение](#Working-with-storage)
 * [Списък на файлове](#Списък на файлове)
 * [Записване на файл в stdout](#Write-a-file-to-stdout)
 * [Копиране на файлове](#Копиране на файлове)
 * [Изтриване на файлове](#Изтриване на файлове)
 * [Преглед на метаданни](#View-metadata)
 * [Огледални директории](#Огледални-директории)

 ### Източник
 * [mobiletto-cli в GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli на npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Подкрепа и финансиране
 Опитвам се да бъда професионален разработчик на софтуер с отворен код. Работил съм в
 в софтуерната индустрия в продължение на много години, основах успешни компании и ги продадох на публични компании.
 Наскоро загубих работата си и всъщност нямам никаква друга работа

 Така че ще се опитам да напиша полезен софтуер и да видя дали работи

 Ако обичате да използвате този софтуер, ще съм искрено благодарен дори за
 най-малката [месечна вноска чрез Patreon](https://www.patreon.com/cobbzilla)

 *Благодаря ти!*

 ## Инсталиране и използване
 Можете да инсталирате и стартирате `mobiletto-cli` чрез npm или директно от източника.

 ### npm пакет
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### От източника
 За да стартирате от източника, ще ви трябва nodejs v16+ и yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Връзки
 Цялото хранилище на mobiletto е достъпно чрез връзка.

 Понастоящем Mobiletto поддържа връзки към хранилището на локалната файлова система и кофите на Amazon S3.

 Връзките се определят от JSON обект, който изглежда така:

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

 За пълни подробности относно всички опции и техните стойности и значения вижте
 [mobiletto документи](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Създайте връзка
 За да създадем нова връзка, имаме нужда от един от тези JSON обекти.

 Можем да създадем такъв интерактивно или да го предоставим чрез файл или JSON литерал:

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

 ### Избройте връзките
 Избройте наличните връзки:

    mo connect -l
    mo connect --list

 ### Изхвърлете JSON конфигурация на връзката
 Показване на пълната JSON конфигурация за връзка. **ПРЕДУПРЕЖДЕНИЕ** това ще отпечата ключове и тайни на stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Премахване на връзка
 Премахнете една връзка:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Премахнете всички връзки
 Премахнете ВСИЧКИ връзки:

    mo connect -R
    mo connect --remove-all

 ## Работа със съхранение
 След като създадете някои връзки, използвайте `ls` , `cp` , `rm` , `meta` и `mirror`
 да работи с тях.

 Всеки файлов път, който предоставяте на команда, трябва да има префикс с името на връзката
 се отнася до. В примерите по-долу приемаме, че съществуват две връзки с имена `conn1` “ и `conn2`

 ### Списък на файлове
 Резултатът от команда за списък е поредица от JSON обекти, по един на ред, представляващи файловете
 намерени. Тези обекти ще имат `name` и `type` тип` и евентуално други полета.

    mo ls conn1/some/path

 Избройте файлове рекурсивно:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Бележка за шифровано съхранение**: Рекурсивният списък все още не се поддържа за шифровани връзки.
 Можете да посочите само една директория с файлове наведнъж.

 Подробен списък на файловете (JSON с красив печат):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Избройте файловете рекурсивно и многословно:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Вижте помощ за командата `ls` , описва всички опции:

    mo ls -h
    mo ls --help

 ### Напишете файл в stdout
 Командата `cat` ще отпечата файл в stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 В истинския дух на UNIX *(но със сигурност не е практика!)* командата `cat` на mobiletto **не приема опции**
 различен от `-h` / `--help` за показване на полезна информация.

 ### Копиране на файлове
 Копирайте един файл от един мобилен телефон на друг:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Копирайте един файл от един mobiletto на друг, като го преименувате на местоназначението:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Рекурсивно копиране на директория:

    mo cp -r conn1/some/directory conn2/some/dest/

 Вижте помощ за командата `cp` , описва всички опции:

    mo cp -h
    mo cp --help

 Забележка: Копирането на файлове не е много бързо, тъй като в момента изисква междинен временен файл.

 ### Изтрий файловете
 Изтриване на един файл:

    mo rm conn1/some/file.txt

 Изтрийте един файл и не се оплаквайте от грешки:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Изтриване на директория:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Изтрийте директория и не се оплаквайте от грешки:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Преглед на метаданни
 Често е полезно да знаете метаданните за файл, без да изтегляте целия файл.

 Mobiletto може да докладва размера на файла и времето на последна промяна, в допълнение към името и типа.

 За да видите метаданни:

    mo meta conn1/some/file.txt

 ### Огледални директории
 Mirroring е нещо повече от специален случай на `cp` , това е отделна команда mobiletto, която обгръща
 операция за копиране; продължава дори когато възникнат грешки и проследява броя на успехите и грешките.

 За да отразявате всичко от conn1 в conn2:

    mo mirror conn1 conn2

 За да дублирате поддиректория:

    mo mirror conn1/some/subdir conn2

 За да дублирате поддиректория в друга поддиректория:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
