mobiletto-cli
 =============
 [mobiletto] үчүн буйрук сабы интерфейси (CLI)(https://www.npmjs.com/package/mobiletto)
 сактоо.

 Mobiletto Amazon S3, Backblaze B2 жана жергиликтүү файл тутумдарына туташууну колдойт.

 # Муну башка тилде окуңуз
 Бул README.md документи [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) аркылуу которулган
 **[Google Translate тарабынан колдоого алынган ар бир тил](https://cloud.google.com/translate/docs/languages)!**

 Мен бул идеалдуу эмес экенине ишенем, бирок ал жоктон жакшы деп үмүттөнөм!

 [🇸🇦 араб](../ar/README.md)
 [🇧🇩 Бенгалча](../bn/README.md)
 [🇩🇪 Германиялык](../de/README.md)
 [🇺🇸 Кыргызча](../en/README.md)
 [🇪🇸 Испанча](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Хинди](../hi/README.md)
 [🇮🇩 Индонезия](../id/README.md)
 [🇮🇹 Италиялык](../it/README.md)
 [🇯🇵 Жапон](../ja/README.md)
 [🇰🇷 Корейче](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Поляк](../pl/README.md)
 [🇧🇷 Португалча](../pt/README.md)
 [🇷🇺 Орусча](../ru/README.md)
 [🇰🇪 суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 Түрк](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 вьетнамча](../vi/README.md)
 [🇨🇳 Кытай](../zh/README.md)


 **[📚 ... Бардык тилдер ...](../README.md)**
 ----

 ### Бул README котормосунда көйгөй барбы?
 Бул түпнуска котормосу [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 мүчүлүштүктөр болушу мүмкүн -- *түзөтүүлөр абдан жагымдуу!* Сураныч, [GitHub'да тартуу өтүнүчүн] жөнөтүңүз (https://github.com/cobbzilla/mobiletto-cli/pulls),
 же муну кылуу сизге жакпаса, [маселени ачыңыз](https://github.com/cobbzilla/mobiletto-cli/issues)

 Котормо боюнча жаңы GitHub маселесин түзүп жатканда, төмөнкүнү аткарыңыз:
 * баракчанын URL дарегин камтуу (браузердин дарек тилкесинен көчүрүү/чаптоо)
 * туура эмес текстти кошуу (браузерден көчүрүү / чаптоо)
 * эмне туура эмес экенин айтып бериңиз -- котормо туура эмеспи? форматтоо кандайдыр бир жол менен бузулганбы?
 * Жакшыраак котормо сунушун сунуштаңыз, же текстти кантип туура форматтоо керек
 * **Рахмат сага!**

 ### Булак
 * [GitHub боюнча mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # Мазмуну
 * [Орнотуу жана колдонуу](#Орнотуу жана колдонуу)
 * [npm пакети](#npm-пакет)
 * [Булактан](#Булактан)
 * [Байланыштар](#Байланыштар)
 * [Байланыш түзүү](#Туташуу түзүү)
 * [Тизме байланыштары](#Тизме-байланыштары)
 * [Дамп туташуу JSON конфигурациясы](#Dump-connection-JSON-конфигурация)
 * [Байланышты алып салуу](#Туташууларды өчүрүү)
 * [Баардык туташууларды алып салуу](#Remove-all-connections)
 * [Сактагыч менен иштөө](#Сактагыч менен иштөө)
 * [Тизме файлдары](#Тизме-файлдар)
 * [Stdout'ка файл жазуу](#Write-a-file-to-stdout)
 * [Файлдарды көчүрүү](#Copy-файлдар)
 * [Файлдарды жок кылуу](#Delete-файлдар)
 * [Метадайындарды көрүү](#Көрүү-метадайындар)
 * [Күзгү каталогдор](#Mirror-каталогдор)

 ## Орнотуу жана колдонуу
 Сиз npm аркылуу же түз булактан `mobiletto-cli` орнотуп, иштете аласыз.

 ### npm пакети
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Булактан
 Булактан иштетүү үчүн сизге nodejs v16+ жана жип керек болот

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Байланыштар
 Бардык mobiletto сактагычына туташуу аркылуу кирүүгө болот.

 Учурда Mobiletto жергиликтүү файл тутумунун сактагычына жана Amazon S3 чакаларына туташууну колдойт.

 Туташуулар төмөнкүдөй көрүнгөн JSON объекти тарабынан көрсөтүлөт:

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

 Бардык параметрлер жана алардын баалуулуктары жана маанилери жөнүндө толук маалымат алуу үчүн, караңыз
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Байланыш түзүү
 Жаңы туташууну түзүү үчүн бизге бул JSON объекттеринин бири керек.

 Биз интерактивдүү түрдө бирин түзө алабыз же файл же JSON литералы аркылуу бере алабыз:

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

 ### Тизме байланыштары
 Жеткиликтүү байланыштардын тизмеси:

    mo connect -l
    mo connect --list

 ### Dump туташуу JSON конфигурациясы
 Туташуу үчүн толук JSON конфигурациясын көрсөтүңүз. **ЭСКЕРТҮҮ** бул stdout үчүн ачкычтарды жана сырларды басып чыгарат.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Байланышты алып салуу
 Жалгыз байланышты алып салуу:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Бардык байланыштарды алып салыңыз
 БАРДЫК байланыштарды алып салуу:

    mo connect -R
    mo connect --remove-all

 ## Сактагыч менен иштөө
 Кээ бир байланыштарды түзгөндөн кийин, ` `ls` , `cp` , `rm` , `meta` жана `mirror` операцияларын колдонуңуз
 алар менен иштөө.

 Буйрукка берген ар бир файл жолуна туташуу аты менен префикс коюлушу керек
 деп билдирет. Төмөндөгү мисалдарда биз `conn1` жана `conn2` деп аталган эки байланыш бар деп ойлойбуз.

 ### Тизме файлдары
 Тизме буйругунун чыгарылышы ар бир сапта бирден, файлдарды чагылдырган JSON объекттеринин сериясы
 табылган. Бул объекттердин `name` жана `type` " жана башка талаалар болушу мүмкүн.

    mo ls conn1/some/path

 Файлдарды рекурсивдүү тизмектөө:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Шифрленген сактагыч эскертүүсү**: Шифрленген байланыштар үчүн рекурсивдүү тизме азырынча колдоого алынбайт.
 Сиз бир эле учурда файлдардын бир гана каталогун тизмелей аласыз.

 Файлдарды тизмектөө (жагымдуу басып чыгаруу JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Файлдарды рекурсивдүү жана кеңири тизмектеңиз:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` буйругунун жардамын көрүү, бардык варианттарды сүрөттөйт:

    mo ls -h
    mo ls --help

 ### stdout'ка файл жазыңыз
 `cat` басып чыгарат:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Чыныгы UNIX рухунда *(бирок, албетте, практика эмес!)* mobiletto'нун `cat` буйругу **эч кандай вариантты талап кылбайт**
 пайдалуу маалыматты көрсөтүү үчүн `-h` / `--help` башка.

 ### Файлдарды көчүрүү
 Бир файлды бир мобилдик телефондон экинчисине көчүрүү:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Бир файлды бир мобилдик телефондон экинчисине көчүрүп, анын атын көздөгөн жерде өзгөртүңүз:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Каталогду рекурсивдүү көчүрүү:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` буйругу боюнча жардамды көрүү, бардык варианттарды сүрөттөйт:

    mo cp -h
    mo cp --help

 Эскертүү: Файлды көчүрүү өтө тез эмес, анткени ал учурда ортомчу убактылуу файлды талап кылат.

 ### Файлдарды өчүрүү
 Бир файлды жок кылуу:

    mo rm conn1/some/file.txt

 Бир файлды жок кылыңыз жана каталар жөнүндө арызданбаңыз:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Каталогду жок кылуу:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Каталогду жок кылыңыз жана каталарга нааразы болбоңуз:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Метаберилиштерди көрүү
 Бүт файлды жүктөп албастан, файлдын метаберилиштерин билүү көбүнчө пайдалуу.

 Mobiletto файлдын өлчөмүн жана акыркы өзгөртүлгөн убактысын, аты жана түрүнөн тышкары кабарлай алат.

 Метадайындарды көрүү үчүн:

    mo meta conn1/some/file.txt

 ### Күзгү каталогдор
 Mirroring `cp` өзгөчө учуру эмес, бул өзүнчө mobiletto буйругу.
 көчүрүү операциясы; каталар пайда болгондо да уланып, ийгиликтер менен каталардын санын көзөмөлдөйт.

 Баарын conn1ден conn2ге чагылдыруу үчүн:

    mo mirror conn1 conn2

 Чакан каталогду чагылдыруу үчүн:

    mo mirror conn1/some/subdir conn2

 Чакан каталогду башка подкаталогго чагылдыруу үчүн:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
