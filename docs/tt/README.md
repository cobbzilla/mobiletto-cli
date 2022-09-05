mobiletto-клиент
 =============
 [Mobiletto] өчен командование интерфейсы (CLI) (https://www.npmjs.com/package/mobiletto)
 саклау.

 Mobiletto Amazon S3, Backblaze B2 һәм җирле файл системаларына тоташуны хуплый.

 # Моны бүтән телдә укыгыз
 Бу README.md документ [ `hokeylization` ] аша (https://github.com/cobbzilla/hokeylization) тәрҗемә ителде
 ** [Google Translate ярдәмендә һәр тел](https://cloud.google.com/translate/docs/languages)! **

 Мин камил түгел дип ышанам, ләкин бернәрсәдән дә яхшырак түгел дип ышанам!

 [🇸🇦 Гарәпчә](docs / ar / README.md)
 [🇧🇩 Бенгали](docs / bn / README.md)
 [🇩🇪 Алманча](docs / de / README.md)
 [🇺🇸 Инглизчә](docs / en / README.md)
 [🇪🇸 Испанча](docs / es / README.md)
 [🇫🇷 Французча](docs / fr / README.md)
 [🇹🇩 Хауса](докс / га / README.md)
 [🇮🇳 Hindiинди](docs / hi / README.md)
 [🇮🇩 Индонезия](docs / id / README.md)
 [🇮🇹 Италия](docs / it / README.md)
 [🇯🇵 Япон](docs / ja / README.md)
 [🇰🇷 Корея](docs / ko / README.md)
 [🇮🇳 Маранти](docs / mr / README.md)
 [🇵🇱 Поляк](docs / pl / README.md)
 [🇧🇷 Португалча](docs / pt / README.md)
 [🇷🇺 русча](docs / ru / README.md)
 [🇰🇪 Суахили](docs / sw / README.md)
 [🇵🇭 Тагалог](docs / tl / README.md)
 [🇹🇷 Төрекчә](docs / tr / README.md)
 [🇵🇰 Урду](docs / ur / README.md)
 [🇻🇳 Вьетнам](docs / vi / README.md)
 [🇨🇳 Кытай](docs / zh / README.md)


 ** [📚 ... Барлык телләр ...](docs / README.md) **
 ----

 ### README тәрҗемәсендә проблема бармы?
 Бу оригиналь тәрҗемә [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 кимчелекле булырга мөмкин - * төзәтмәләр бик рәхимле! * Зинһар, [GitHub'ка тарту соравы] җибәрегез (https://github.com/cobbzilla/mobiletto-cli/pulls),
 яисә моны эшләү уңайлы булмаса, [проблеманы ачыгыз](https://github.com/cobbzilla/mobiletto-cli/issues)

 Тәрҗемә турында яңа GitHub чыгарганда, зинһар өчен:
 * битнең URL-ны кертегез (браузер адрес тактасыннан күчереп языгыз)
 * дөрес булмаган текстны кертегез (браузердан күчереп языгыз)
 * зинһар, нәрсә начар икәнен сурәтләгез - тәрҗемә дөрес түгелме? форматлау ничектер бозылганмы?
 * яхшырак тәрҗемә итү тәкъдимен тәкъдим итегез, яки текстны ничек форматларга кирәк
 * **Рәхмәт!**

 ### Чыганак
 * [GitHub'та mobiletto-клиент](https://github.com/cobbzilla/mobiletto-cli)
 * [мобильто-клиент npm](https://www.npmjs.com/package/mobiletto-cli)

 # Эчтәлек
 * [Урнаштыру һәм куллану](# Урнаштыру-куллану)
 * [npm пакеты](# npm-пакет)
 * [Чыганактан](# Чыганактан)
 * [Бәйләнешләр](# Бәйләнешләр)
 * [Бәйләнеш ясагыз](# Create-a-connection)
 * [Бәйләнешләр исемлеге](# Исемлек-бәйләнешләр)
 * [JSON конфигурациясен ташлагыз](# Чүп-тоташу-JSON-конфигурация)
 * [Бәйләнешне бетерегез](# Remove-a-connection)
 * [Барлык бәйләнешләрне бетерегез](# Барысын да бетерегез)
 * [Саклау белән эшләү](# Саклау белән эш)
 * [Файллар исемлеге](# Исемлек-файллар)
 * [Stdout'ка файл языгыз](# Языгыз-файлдан-стдутка)
 * [Файлларны күчерү](# Файлларны күчерү)
 * [Файлларны бетерү](# Файлларны бетерү)
 * [Мета мәгълүматларны карау](# View-metadata)
 * [Көзге каталоглар](# Көзге-каталоглар)

 ## Урнаштыру һәм куллану
 Сез `mobiletto-cli` npm аша яки турыдан-туры чыганактан урнаштыра аласыз.

 ### npm пакеты
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Чыганактан
 Чыганактан йөгерү өчен сезгә nodejs v16 + һәм җеп кирәк

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Бәйләнешләр
 Барлык мобильто саклауга тоташу аша кереп була.

 Mobiletto хәзерге вакытта җирле файл системасы саклауга һәм Amazon S3 чиләкләренә тоташуны хуплый.

 Бәйләнешләр JSON объекты белән күрсәтелә:

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

 Барлык вариантлар, аларның кыйммәтләре һәм мәгънәләре турында тулы мәгълүмат өчен карагыз
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Бәйләнеш булдырыгыз
 Яңа бәйләнеш булдыру өчен безгә бу JSON объектларының берсе кирәк.

 Без интерактив рәвештә ясый алабыз, яки файл яки JSON аша туры китерә алабыз:

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

 ### Бәйләнешләр исемлеге
 Мөмкин булган бәйләнешләрне күрсәтегез:

    mo connect -l
    mo connect --list

 ### JSON конфигурациясен ташлагыз
 Бәйләнү өчен тулы JSON конфигурациясен күрсәтегез. ** Кисәтү ** бу баскычларга һәм серләргә бастырылачак.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Бәйләнешне бетерегез
 Бер тоташуны бетерегез:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Барлык бәйләнешләрне бетерегез
 БАРЫ тоташуларны бетерегез:

    mo connect -R
    mo connect --remove-all

 ## Саклау белән эшләү
 Кайбер бәйләнешләр булдырганнан соң, " `ls` ", " `cp` ", " `rm` , `meta` һәм `mirror` операцияләрен кулланыгыз.
 алар белән эшләргә.

 Сез боерык биргән һәр файл юлы тоташу исеме белән алдан кушылырга тиеш
 турында бара. Түбәндәге мисалларда без " `conn1` һәм " `conn2` " дип аталган ике бәйләнеш бар дип уйлыйбыз

 ### Файлларны күрсәтегез
 Исемлек командасының чыгышы - файлларны күрсәтүче JSON объектлары сериясе
 табылды. Бу объектларның `name` исеме" һәм `type` , һәм, мөгаен, башка кырлары булачак.

    mo ls conn1/some/path

 Файлларны рекурсив рәвештә күрсәтегез:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Шифрланган саклагыч язмасы **: Шифрланган тоташулар өчен рекурсив исемлек әле ярдәм итми.
 Сез берьюлы файлларның бер каталогын гына күрсәтә аласыз.

 Файлларны телдән санап чыгыгыз (матур итеп бастырылган JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Файлларны рекурсив һәм телдән санап чыгыгыз:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 " `ls` командасы өчен ярдәмне карагыз, барлык вариантларны тасвирлый:

    mo ls -h
    mo ls --help

 ### stdout'ка файл языгыз
 " `cat` " боерыгы файлны stdout өчен бастырачак:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Чын UNIX рухында * (ләкин, әлбәттә, практика түгел!) * Мобильттоның " `cat` " боерыгы ** бернинди вариантны да алмый **
 файдалы мәгълүматны күрсәтү өчен " `-h` / `--help` дан кала.

 ### Файлларны күчерү
 Бер файлны бер мобильтодан икенчесенә күчерегез:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Бер файлны бер мобильтодан икенчесенә күчерегез, аның исемен үзгәртегез:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Каталогны рекурсив рәвештә күчереп алыгыз:

    mo cp -r conn1/some/directory conn2/some/dest/

 " `cp` командасы өчен ярдәмне карагыз, барлык вариантларны тасвирлый:

    mo cp -h
    mo cp --help

 Искәрмә: Файлны күчереп алу бик тиз түгел, чөнки хәзерге вакытта арадашчы темп файлын таләп итә.

 ### Файлларны бетерү
 Бер файлны бетерегез:

    mo rm conn1/some/file.txt

 Бер файлны бетерегез һәм хаталардан зарланмагыз:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Белешмәлекне бетерү:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Каталогны бетерегез һәм хаталардан зарланмагыз:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Мета мәгълүматларны карау
 Файл өчен мета-мәгълүматларны белү еш файдалы, бөтен файлны йөкләмичә.

 Mobiletto файлның зурлыгын һәм соңгы үзгәртелгән вакытын, исеменә һәм төренә өстәп хәбәр итә ала.

 Мета мәгълүматларны карау өчен:

    mo meta conn1/some/file.txt

 ### Көзге каталоглар
 Көзге - махсус " `cp` " очраклары гына түгел, бу аерым мобильто боерыгы
 күчереп алу операциясе; хаталар булганда да дәвам итә, уңышлар һәм хаталар санын күзәтә.

 Conn1-дән con2-га кадәр барысын да чагылдыру өчен:

    mo mirror conn1 conn2

 Подразделение көзгесе өчен:

    mo mirror conn1/some/subdir conn2

 Суб-каталогны бүтән суб-каталогка чагылдыру өчен:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
