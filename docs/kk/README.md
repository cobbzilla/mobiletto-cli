mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) үшін пәрмен жолы интерфейсі (CLI)
 сақтау.

 Mobiletto Amazon S3, Backblaze B2 және жергілікті файлдық жүйелерге қосылымдарды қолдайды.

 # Мұны басқа тілде оқыңыз
 Бұл README.md құжаты [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) арқылы аударылған.
 **[Google Translate қолдайтын барлық тіл](https://cloud.google.com/translate/docs/languages)!**

 Мен бұл мінсіз емес екеніне сенімдімін, бірақ бұл жоқтан жақсы деп үміттенемін!

 [🇸🇦 араб](../ar/README.md)
 [🇧🇩 Бенгал](../bn/README.md)
 [🇩🇪 неміс тілі](../de/README.md)
 [🇺🇸 Ағылшын тілі](../en/README.md)
 [🇪🇸 испан](../es/README.md)
 [🇫🇷 Француз](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 хинди](../hi/README.md)
 [🇮🇩 Индонезия](../id/README.md)
 [🇮🇹 Итальяндық](../it/README.md)
 [🇯🇵 жапон](../ja/README.md)
 [🇰🇷 Корей тілі](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Поляк](../pl/README.md)
 [🇧🇷 Португалша](../pt/README.md)
 [🇷🇺 Орысша](../ru/README.md)
 [🇰🇪 суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 Түрікше](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 вьетнамдық](../vi/README.md)
 [🇨🇳 Қытай](../zh/README.md)


 **[📚 ... Барлық тілдер ...](../README.md)**
 ----

 ### README аудармасында ақау бар ма?
 Түпнұсқаның бұл нақты аудармасы [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 ақаулы болуы мүмкін -- *түзетулер өте құпталады!* [GitHub сайтындағы тарту сұрауын](https://github.com/cobbzilla/mobiletto-cli/pulls) жіберіңіз.
 немесе мұны істеу ыңғайсыз болса, [мәселені ашыңыз](https://github.com/cobbzilla/mobiletto-cli/issues)

 Аударма туралы жаңа GitHub мәселесін жасағанда, мынаны орындаңыз:
 * беттің URL мекенжайын қосу (браузердің мекенжай жолағынан көшіру/қою)
 * қате мәтінді қосыңыз (браузерден көшіру/қою)
 * ненің дұрыс емес екенін сипаттаңыз -- аударма дұрыс емес пе? пішімдеу қандай да бір түрде бұзылды ма?
 * жақсырақ аударманы немесе мәтінді қалай дұрыс пішімдеу керектігін ұсыныңыз
 * **Рақмет сізге!**

 ### Дереккөз
 * [GitHub сайтындағы mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # Мазмұны
 * [Орнату және пайдалану](#Орнату және пайдалану)
 * [npm бумасы](#npm-пакет)
 * [Дереккөзден](#Дереккөзден)
 * [Қосылымдар](#Қосылымдар)
 * [Байланыс жасау](#Байланыс жасау)
 * [Қосылымдар тізімі](#Тізім-байланыстар)
 * [Демп қосылымы JSON конфигурациясы](#Dump-connection-JSON-config)
 * [Қосылымды жою](#Қосылымды өшіру)
 * [Барлық қосылымдарды жою](#Remove-all-connections)
 * [Жадпен жұмыс істеу](#Жадпен жұмыс істеу)
 * [Файлдардың тізімі](#Тізім-файлдар)
 * [Файлды stdout-қа жазу](#Write-a-file-to-stdout)
 * [Файлдарды көшіру](#Көшіру-файлдар)
 * [Файлдарды жою](#Delete-файлдар)
 * [Метадеректерді көру](#Көру-метадеректер)
 * [Айна каталогтары](#Айна каталогтары)

 ## Орнату және пайдалану
 `mobiletto-cli` npm арқылы немесе тікелей көзден орнатуға және іске қосуға болады.

 ### npm бумасы
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Дереккөзден
 Көзден іске қосу үшін nodejs v16+ және жіп қажет

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Қосылымдар
 Барлық mobiletto жадына қосылым арқылы қол жеткізуге болады.

 Қазіргі уақытта Mobiletto жергілікті файлдық жүйе қоймасына және Amazon S3 шелектеріне қосылымдарды қолдайды.

 Қосылымдар келесідей көрінетін JSON нысаны арқылы көрсетіледі:

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

 Барлық опциялар және олардың мәндері мен мағыналары туралы толық ақпаратты мына жерден қараңыз
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Байланыс жасаңыз
 Жаңа қосылым жасау үшін бізге осы JSON нысандарының бірі қажет.

 Біз біреуін интерактивті түрде жасай аламыз немесе біреуін файл немесе JSON литералы арқылы жеткізе аламыз:

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

 ### Қосылымдар тізімі
 Қолжетімді қосылымдар тізімі:

    mo connect -l
    mo connect --list

 ### JSON конфигурациясының дамп қосылымы
 Қосылым үшін толық JSON конфигурациясын көрсетіңіз. **ЕСКЕРТУ** бұл stdout бағдарламасына кілттер мен құпияларды басып шығарады.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Байланысты жою
 Бір қосылымды жою:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Барлық қосылымдарды алып тастаңыз
 БАРЛЫҚ қосылымдарды жою:

    mo connect -R
    mo connect --remove-all

 ## Жадпен жұмыс
 Кейбір қосылымдарды `ls` кейін 'ls' , ' `cp` , `rm` , `meta` және `mirror` операцияларын пайдаланыңыз.
 олармен жұмыс істеу.

 Пәрменге беретін әрбір файл жолында қосылым атауының префиксі болуы керек
 сілтеме жасайды. Төмендегі мысалдарда "conn1" және " `conn1` деп аталатын екі қосылым бар деп `conn2`

 ### Файлдарды тізімдеу
 Тізім пәрменінің шығысы файлдарды көрсететін JSON нысандарының сериясы болып табылады, әр жолға бір
 табылды. Бұл нысандардың `name` және `type` » және басқа өрістер болуы мүмкін.

    mo ls conn1/some/path

 Файлдарды рекурсивті түрде тізімдеу:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Шифрланған сақтау жазбасы**: шифрланған қосылымдар үшін рекурсивті тізімге әлі қолдау көрсетілмейді.
 Бір уақытта файлдардың бір каталогын ғана тізімдей аласыз.

 Файлдарды егжей-тегжейлі тізімдеу (жақсы басып шығару JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Файлдарды рекурсивті және толық тізімдеңіз:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` пәрменіне арналған анықтаманы қараңыз, барлық опцияларды сипаттайды:

    mo ls -h
    mo ls --help

 ### stdout файлына файл жазыңыз
 `cat` пәрмені файлды stdout файлына басып шығарады:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Нағыз UNIX рухында *(бірақ бұл тәжірибе емес!)* mobiletto-ның `cat` » пәрмені **опцияларды қабылдамайды**
 пайдалы ақпаратты көрсету үшін `-h` / `--help` басқа.

 ### Файлдарды көшіру
 Бір файлды бір мобильді құрылғыдан екіншісіне көшіріңіз:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Бір файлды бір мобильді құрылғыдан екіншісіне көшіріп, оның атын тағайындалған жерде өзгертіңіз:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Каталогты рекурсивті көшіру:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` пәрменінің анықтамасын қарау, барлық опцияларды сипаттайды:

    mo cp -h
    mo cp --help

 Ескертпе: Файлды көшіру өте жылдам емес, себебі ол қазіргі уақытта делдал уақытша файлды қажет етеді.

 ### Файлдарды жою
 Бір файлды жою:

    mo rm conn1/some/file.txt

 Бір файлды жойыңыз және қателер туралы шағымданбаңыз:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Каталогты жою:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Каталогты жойыңыз және қателер туралы шағымданбаңыз:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Метадеректерді көру
 Бүкіл файлды жүктеп алмай-ақ, файлдың метадеректерін білу жиі пайдалы.

 Mobiletto файлдың өлшемі мен соңғы өзгертілген уақытын, аты мен түріне қоса есептей алады.

 Метадеректерді көру үшін:

    mo meta conn1/some/file.txt

 ### Айна каталогтары
 Айналау `cp` -дің ерекше жағдайынан да көп, ол бөлек mobiletto пәрмені болып табылады.
 көшіру операциясы; ол қателер орын алған кезде де жалғасады және табыстар мен қателердің санын қадағалаңыз.

 Барлығын conn1-ден conn2-ге көрсету үшін:

    mo mirror conn1 conn2

 Ішкі каталогты көрсету үшін:

    mo mirror conn1/some/subdir conn2

 Ішкі каталогты басқа ішкі каталогқа көрсету үшін:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
