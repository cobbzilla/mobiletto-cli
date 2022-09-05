mobiletto-cli
 ==============
 Հրամանի տող ինտերֆեյս (CLI) [mobiletto]-ի համար (https://www.npmjs.com/package/mobiletto)
 պահեստավորում.

 Mobiletto-ն աջակցում է կապեր Amazon S3-ի, Backblaze B2-ի և տեղական ֆայլային համակարգերի հետ:

 # Կարդացեք սա այլ լեզվով
 Այս README.md փաստաթուղթը թարգմանվել է [hokeylization](https://github.com/cobbzilla/hokeylization) միջոցով
 **[Google Translate-ի կողմից աջակցվող յուրաքանչյուր լեզու](https://cloud.google.com/translate/docs/languages)!**

 Ես վստահ եմ, որ դա կատարյալ չէ, բայց հուսով եմ, որ ավելի լավ է, քան ոչինչ:

 [🇸🇦 արաբերեն](../ar/README.md)
 [🇧🇩 բենգալերեն](../bn/README.md)
 [🇩🇪 գերմաներեն](../de/README.md)
 [🇺🇸 Անգլերեն](../en/README.md)
 [🇪🇸 իսպաներեն](../es/README.md)
 [🇫🇷 ֆրանսերեն](../fr/README.md)
 [🇹🇩 Հաուսա](../ha/README.md)
 [🇮🇳 հինդի](../hi/README.md)
 [🇮🇩 ինդոնեզերեն](../id/README.md)
 [🇮🇹 Իտալերեն](../it/README.md)
 [🇯🇵 ճապոներեն](../ja/README.md)
 [🇰🇷 կորեերեն](../ko/README.md)
 [🇮🇳 Մարանտի](../mr/README.md)
 [🇵🇱 լեհերեն](../pl/README.md)
 [🇧🇷 պորտուգալերեն](../pt/README.md)
 [🇷🇺 ռուսերեն](../ru/README.md)
 [🇰🇪 Սուահիլի](../sw/README.md)
 [🇵🇭 Տագալերեն](../tl/README.md)
 [🇹🇷 թուրքերեն](../tr/README.md)
 [🇵🇰 ուրդու](../ur/README.md)
 [🇻🇳 Վիետնամերեն](../vi/README.md)
 [🇨🇳 չինարեն](../zh/README.md)


 **[📚 ... Բոլոր լեզուները ...](../README.md)**
 ----

 ### Խնդիր կա՞ README-ի այս թարգմանության հետ:
 Բնօրինակի այս թարգմանությունը [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 կարող է թերի լինել.
 կամ եթե դա ձեզ հարմար չէ, [բացեք խնդիրը](https://github.com/cobbzilla/mobiletto-cli/issues)

 Երբ թարգմանության վերաբերյալ GitHub-ի նոր խնդիր եք ստեղծում, խնդրում ենք անել.
 * ներառել էջի URL-ը (պատճենել/տեղադրել դիտարկիչի հասցեի տողից)
 * ներառել ճշգրիտ տեքստը, որը սխալ է (պատճենել/տեղադրել զննարկիչից)
 * խնդրում եմ նկարագրեք, թե ինչն է սխալ. թարգմանությունը ճիշտ չէ՞: ֆորմատավորումը ինչ-որ կերպ կոտրված է?
 * Խնդրում ենք առաջարկել ավելի լավ թարգմանություն կամ ինչպես պետք է տեքստը ճիշտ ձևաչափվի
 * **Շնորհակալություն!**

 # Բովանդակություն
 * [Աղբյուր](# Աղբյուր)
 * [Աջակցություն և ֆինանսավորում](#Support-and-Funding)
 * [Տեղադրում և օգտագործում](#Installation-and-usage)
 * [npm փաթեթ](#npm-փաթեթ)
 * [Աղբյուրից](#Աղբյուրից)
 * [Միացումներ](#Connections)
 * [Ստեղծել կապ](#Create-a-connection)
 * [Ցանկ կապեր](#Ցուցակ-միացումներ)
 * [Dump Connection JSON config](#Dump-connection-JSON-config)
 * [Հեռացնել կապը](#Remove-a-connection)
 * [Հեռացնել բոլոր կապերը](#Remove-all-connections)
 * [Աշխատում է պահեստի հետ](#Working-with-storage)
 * [Ֆայլերի ցանկը](#List-files)
 * [Write a file to stdout](#Write-a-file-to-stdout)
 * [Պատճենել ֆայլերը](#Copy-files)
 * [Ջնջել ֆայլերը](#Ջնջել-ֆայլեր)
 * [Դիտել մետատվյալները](#View-metadata)
 * [Հայելի գրացուցակներ](#Mirror-directories)

 ### Աղբյուր
 * [mobiletto-cli GitHub-ում](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli npm-ում](https://www.npmjs.com/package/mobiletto-cli)

 ## Աջակցություն և ֆինանսավորում
 Ես փորձում եմ լինել պրոֆեսիոնալ բաց կոդով ծրագրակազմ մշակող: Ես աշխատել եմ
 ծրագրային ապահովման ոլորտում երկար տարիներ ես ստեղծել եմ հաջողակ ընկերություններ և վաճառել դրանք հանրային ընկերություններին:
 Վերջերս ես կորցրել էի աշխատանքս, և իրականում այլ աշխատանք չունեմ

 Այսպիսով, ես կփորձեմ գրել օգտակար ծրագրակազմ և տեսնել, թե արդյոք դա աշխատում է

 Եթե ձեզ դուր է գալիս այս ծրագրաշարն օգտագործելը, ես անկեղծորեն շնորհակալ կլինեմ նույնիսկ դրա համար
 ամենափոքր [ամսական ներդրում Patreon-ի միջոցով](https://www.patreon.com/cobbzilla)

 *Շնորհակալություն!*

 ## Տեղադրում և օգտագործում
 Դուք կարող եք տեղադրել և գործարկել `mobiletto-cli` ի միջոցով կամ անմիջապես աղբյուրից:

 ### npm փաթեթ
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Աղբյուրից
 Աղբյուրից գործարկելու համար ձեզ հարկավոր է nodejs v16+ և մանվածք

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Միացումներ
 Mobiletto-ի ողջ պահեստը հասանելի է կապի միջոցով:

 Mobiletto-ն ներկայումս աջակցում է կապեր տեղական ֆայլային համակարգի պահեստավորման և Amazon S3 դույլերի հետ:

 Միացումները նշված են JSON օբյեկտի կողմից, որն ունի հետևյալ տեսքը.

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

 Բոլոր տարբերակների և դրանց արժեքների և իմաստների վերաբերյալ ամբողջական մանրամասների համար տե՛ս
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage):

 ### Ստեղծեք կապ
 Նոր կապ ստեղծելու համար մեզ անհրաժեշտ է այս JSON օբյեկտներից մեկը:

 Մենք կարող ենք ստեղծել մեկը ինտերակտիվ կերպով կամ մատակարարել ֆայլի կամ JSON բառացի.

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

 ### Ցուցակեք կապերը
 Թվարկեք մատչելի կապերը.

    mo connect -l
    mo connect --list

 ### Միացում JSON կոնֆիգուրացիա
 Ցույց տալ ամբողջական JSON կազմաձևը միացման համար: **ԶԳՈՒՇԱՑՈՒՄ** սա կտպագրի ստեղները և գաղտնիքները stdout-ի համար:

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Հեռացնել կապը
 Հեռացնել մեկ կապը.

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Հեռացրեք բոլոր կապերը
 Հեռացնել ԲՈԼՈՐ կապերը.

    mo connect -R
    mo connect --remove-all

 ## Աշխատում է պահեստի հետ
 Որոշ կապեր ստեղծելուց հետո օգտագործեք `ls` , `cp` , `rm` , `meta` և `mirror` գործողությունները:
 աշխատել նրանց հետ:

 Յուրաքանչյուր ֆայլի ուղի, որը դուք տրամադրում եք հրամանին, պետք է նախածանց ունենա կապի անվան հետ
 դա վերաբերում է. Ստորև բերված օրինակներում մենք ենթադրում ենք, որ գոյություն ունեն երկու կապ՝ `conn1` և `conn2`

 ### Ցուցակել ֆայլերը
 Ցուցակի հրամանի ելքը JSON օբյեկտների շարք է, մեկ տողում, որը ներկայացնում է ֆայլերը
 հայտնաբերվել է. Այս օբյեկտները կունենան `name` անուն» և `type` , և, հնարավոր է, այլ դաշտեր:

    mo ls conn1/some/path

 Թվարկեք ֆայլերը ռեկուրսիվորեն.

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Գաղտնագրված պահեստավորման նշում**. ռեկուրսիվ ցուցակը դեռ չի աջակցվում կոդավորված կապերի համար:
 Դուք կարող եք միաժամանակ թվարկել ֆայլերի միայն մեկ գրացուցակ:

 Թվարկեք ֆայլերը մանրամասնորեն (գեղեցիկ տպագիր JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Թվարկեք ֆայլերը ռեկուրսիվ և բառացիորեն.

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Դիտել օգնությունը `ls` հրամանի համար, նկարագրում է բոլոր տարբերակները.

    mo ls -h
    mo ls --help

 ### Գրեք ֆայլ stdout-ի համար
 `cat` .

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Իրական UNIX ոգով *(բայց, իհարկե, ոչ պրակտիկա!)* mobiletto-ի `cat` » հրամանը **տարբերակ չի վերցնում**
 բացի `-h` / `--help` -ից՝ օգտակար տեղեկատվություն ցուցադրելու համար:

 ### Պատճենել ֆայլերը
 Պատճենեք մեկ ֆայլ մեկ բջջայինից մյուսը.

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Պատճենեք մեկ ֆայլ մեկ բջջայինից մյուսը՝ այն վերանվանելով նպատակակետում՝

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Ռեկուրսիվ կերպով պատճենեք գրացուցակը.

    mo cp -r conn1/some/directory conn2/some/dest/

 Դիտել օգնությունը `cp` հրամանի համար, նկարագրում է բոլոր տարբերակները.

    mo cp -h
    mo cp --help

 Նշում. Ֆայլի պատճենումը շատ արագ չէ, քանի որ այն ներկայումս պահանջում է միջանկյալ ժամանակային ֆայլ:

 ### Ջնջել ֆայլերը
 Ջնջել մեկ ֆայլ.

    mo rm conn1/some/file.txt

 Ջնջեք մեկ ֆայլ և մի բողոքեք որևէ սխալի մասին.

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Ջնջել գրացուցակը.

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Ջնջեք գրացուցակը և մի բողոքեք որևէ սխալի մասին.

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Դիտեք մետատվյալները
 Հաճախ օգտակար է իմանալ ֆայլի մետատվյալները՝ առանց ամբողջ ֆայլը ներբեռնելու:

 Mobiletto-ն ի վիճակի է զեկուցել ֆայլի չափի և վերջին փոփոխված ժամանակի մասին, բացի անունից և տեսակից:

 Մետատվյալները դիտելու համար՝

    mo meta conn1/some/file.txt

 ### Հայելի գրացուցակներ
 Mirroring-ը ավելին է, քան `cp` »-ի հատուկ դեպքը, այն առանձին mobiletto հրաման է, որը փաթաթում է
 պատճենահանման գործողություն; այն շարունակվում է նույնիսկ այն ժամանակ, երբ տեղի են ունենում սխալներ, և հետևում է հաջողությունների և սխալների քանակին:

 Ամեն ինչ conn1-ից conn2 արտացոլելու համար.

    mo mirror conn1 conn2

 Ենթացանցը արտացոլելու համար.

    mo mirror conn1/some/subdir conn2

 Ենթացանցը մեկ այլ ենթագրքի մեջ արտացոլելու համար.

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
