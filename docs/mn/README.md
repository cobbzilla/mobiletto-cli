mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto)-д зориулсан тушаалын мөрийн интерфейс (CLI)
 хадгалах.

 Mobiletto нь Amazon S3, Backblaze B2 болон дотоод файлын системтэй холбогдохыг дэмждэг.

 # Үүнийг өөр хэлээр уншина уу
 Энэхүү README.md баримтыг [hokeylization](https://github.com/cobbzilla/hokeylization) руу орчуулсан.
 **[Google Translate дэмждэг бүх хэл](https://cloud.google.com/translate/docs/languages)!**

 Энэ нь төгс биш гэдэгт би итгэлтэй байна, гэхдээ энэ нь юу ч биш байснаас дээр гэж найдаж байна!

 [🇸🇦 Араб хэл](../ar/README.md)
 [🇧🇩 Бенгал](../bn/README.md)
 [🇩🇪 Герман](../de/README.md)
 [🇺🇸 Англи хэл](../en/README.md)
 [🇪🇸 Испани](../es/README.md)
 [🇫🇷 Франц](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Хинди](../hi/README.md)
 [🇮🇩 Индонези](../id/README.md)
 [🇮🇹 Итали](../it/README.md)
 [🇯🇵 Япон](../ja/README.md)
 [🇰🇷 Солонгос хэл](../ko/README.md)
 [🇮🇳 Маранти](../mr/README.md)
 [🇵🇱 Польш](../pl/README.md)
 [🇧🇷 Португали](../pt/README.md)
 [🇷🇺 Орос](../ru/README.md)
 [🇰🇪 Суахили](../sw/README.md)
 [🇵🇭 Тагалог](../tl/README.md)
 [🇹🇷 Турк](../tr/README.md)
 [🇵🇰 Урду](../ur/README.md)
 [🇻🇳 Вьетнам](../vi/README.md)
 [🇨🇳 Хятад](../zh/README.md)


 **[📚 ... Бүх хэл ...](../README.md)**
 ----

 ### Энэ README орчуулгад асуудал гарсан уу?
 Анхны [README] орчуулга (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 алдаатай байж магадгүй -- *засвар хийхэд таатай байна!* [GitHub дээр татах хүсэлт](https://github.com/cobbzilla/mobiletto-cli/pulls) илгээнэ үү.
 эсвэл та үүнийг хийхэд эвгүй байгаа бол [асуудал нээнэ үү](https://github.com/cobbzilla/mobiletto-cli/issues)

 Орчуулгын талаар шинэ GitHub асуудал үүсгэхдээ дараах зүйлийг хийнэ үү:
 * хуудасны URL-г оруулах (хөтчийн хаягийн мөрөнд хуулах/хуулах)
 * алдаатай текстийг оруулах (хөтөчөөс хуулах/хуулах)
 * юу буруу байгааг тайлбарлана уу -- орчуулга буруу байна уу? формат ямар нэг байдлаар эвдэрсэн үү?
 * Илүү сайн орчуулга эсвэл текстийг хэрхэн зөв форматлах талаар санал болго
 * **Баярлалаа!**

 # Агуулга
 * [Эх сурвалж](#Эх сурвалж)
 * [Дэмжлэг ба санхүүжилт](#Дэмжлэг ба санхүүжилт)
 * [Суулгалт ба хэрэглээ](#Суулгалт ба ашиглалт)
 * [npm багц](#npm-багц)
 * [Эх сурвалжаас](#Эх сурвалжаас)
 * [Холболтууд](#Холболт)
 * [Холболт үүсгэх](#Холболт үүсгэх)
 * [Жагсаалтын холболт](#Жагсаалт-холболт)
 * [Dump холболтын JSON тохиргоо](#Dump-холболт-JSON-тохиргоо)
 * [Холболтыг арилгах](#Холболтыг устгах)
 * [Бүх холболтыг устгах](#Бүх холболтыг устгах)
 * [Хадгаламжтай ажиллах](#Хадгалах-тай ажиллах)
 * [Жагсаалтын файл](#Жагсаалт-файл)
 * [Stdout руу файл бичих](#Write-a-file-to-stdout)
 * [Файл хуулах](#Хуулбар файл)
 * [Файл устгах](#Устгах-файл)
 * [Мета өгөгдлийг харах](#Харах-метадта)
 * [Толины лавлахууд](#Толь лавлахууд)

 ### Эх сурвалж
 * [GitHub дээрх mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm дээрх mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Дэмжлэг ба санхүүжилт
 Би мэргэжлийн нээлттэй эхийн програм хангамж хөгжүүлэгч болохыг хичээж байна. Би ажиллаж байсан
 Програм хангамжийн салбарт олон жилийн турш би амжилттай компаниудыг байгуулж, олон нийтийн компаниудад зарсан.
 Саяхан би ажлаасаа халагдсан, надад өөр ажил алга

 Тиймээс би хэрэгтэй программ бичихийг оролдоод, энэ нь ажиллах эсэхийг шалгах болно

 Хэрэв та энэ програм хангамжийг ашиглах дуртай бол би энэ програмыг ашиглахад чин сэтгэлээсээ талархах болно
 хамгийн бага [Patreon-оор дамжуулан сарын хандив](https://www.patreon.com/cobbzilla)

 *Баярлалаа!*

 ## Суурилуулалт, ашиглалт
 Та `mobiletto-cli` npm эсвэл шууд эх сурвалжаас суулгаж ажиллуулж болно.

 ### npm багц
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Эх сурвалжаас
 Эх сурвалжаас ажиллуулахын тулд танд nodejs v16+ болон утас хэрэгтэй болно

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Холболтууд
 Бүх mobiletto хадгалах санд холболтоор хандах боломжтой.

 Mobiletto нь одоогоор локал файлын систем болон Amazon S3 хувинтай холбогдохыг дэмждэг.

 Холболтуудыг JSON объектоор зааж өгсөн бөгөөд дараах байдалтай байна:

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

 Бүх сонголтууд болон тэдгээрийн үнэ цэнэ, утгын талаарх дэлгэрэнгүй мэдээллийг эндээс үзнэ үү
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Холболт үүсгэх
 Шинэ холболт үүсгэхийн тулд бидэнд эдгээр JSON объектуудын аль нэг нь хэрэгтэй.

 Бид нэгийг интерактив байдлаар үүсгэх эсвэл файл эсвэл JSON literal-аар дамжуулан нийлүүлэх боломжтой:

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

 ### Холболтуудыг жагсаах
 Боломжтой холболтуудыг жагсаах:

    mo connect -l
    mo connect --list

 ### Дамп холболтын JSON тохиргоо
 Холболтын бүрэн JSON тохиргоог харуул. ** АНХААРУУЛГА** энэ нь stdout-д түлхүүр болон нууцыг хэвлэх болно.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Холболтыг устгана уу
 Нэг холболтыг устгах:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Бүх холболтыг устгана уу
 БҮХ холболтыг устгах:

    mo connect -R
    mo connect --remove-all

 ## Хадгалах төхөөрөмжтэй ажиллах
 Зарим холболт үүсгэсний дараа 'ls', `cp` `ls` ', `rm` , `meta` болон `mirror` .
 тэдэнтэй ажиллах.

 Таны тушаалд өгсөн файлын зам бүр нь холболтын нэрээр угтвартай байх ёстой
 гэж хэлдэг. Доорх жишээнүүдэд бид `conn1` болон `conn2` нэртэй хоёр холболт байгаа гэж таамаглаж байна.

 ### Файлуудыг жагсаах
 Жагсаалтын командын гаралт нь файлуудыг төлөөлж буй JSON объектуудын цуврал бөгөөд мөрөнд нэг юм
 олдсон. Эдгээр объектууд нь `name` нэр`, `type` , магадгүй бусад талбаруудтай байх болно.

    mo ls conn1/some/path

 Файлуудыг рекурсив байдлаар жагсаах:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Шифрлэгдсэн хадгалалтын тэмдэглэл**: Шифрлэгдсэн холболтуудад рекурсив жагсаалт хараахан дэмжигдээгүй байна.
 Та нэг удаад зөвхөн нэг файлын санг жагсааж болно.

 Файлуудыг дэлгэрэнгүйгээр жагсаах (JSON-г сайхан хэвлэх):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Файлуудыг рекурсив болон дэлгэрэнгүй байдлаар жагсаах:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` командын тусламжийг үзэх, бүх сонголтыг тайлбарлана:

    mo ls -h
    mo ls --help

 ### stdout руу файл бичнэ үү
 `cat` команд нь stdout руу файл хэвлэх болно:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Жинхэнэ UNIX сүнсэнд *(гэхдээ тийм биш!)* mobiletto-н `cat` команд **ямар ч сонголт хийхгүй**
 `-h` / `--help` -ээс өөр хэрэгтэй мэдээллийг харуулах.

 ### Файл хуулах
 Нэг файлыг нэг гар утаснаас нөгөө рүү хуулах:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Нэг файлыг нэг гар утаснаас нөгөө рүү хуулж, очих газартаа нэрийг нь өөрчилнө үү:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Рекурсив лавлах хуулах:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` командын тусламжийг үзэх, бүх сонголтыг тайлбарлана:

    mo cp -h
    mo cp --help

 Тэмдэглэл: Файл хуулах нь тийм ч хурдан биш, учир нь одоогоор зуучлагч temp файл шаардлагатай.

 ### Файлуудыг устгах
 Нэг файлыг устгах:

    mo rm conn1/some/file.txt

 Ганц файлыг устгаад ямар ч алдааны талаар гомдоллохгүй байх:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Лавлах устгах:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Лавлахыг устгаад ямар ч алдааны талаар гомдоллохгүй байх:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Мета өгөгдлийг харах
 Файлыг бүхэлд нь татаж авахгүйгээр мета өгөгдлийг мэдэх нь ихэвчлэн ашигтай байдаг.

 Mobiletto нь нэр, төрлөөс гадна файлын хэмжээ, хамгийн сүүлд өөрчлөгдсөн цагийг мэдээлэх боломжтой.

 Мета өгөгдлийг үзэхийн тулд:

    mo meta conn1/some/file.txt

 ### Толин тусгал лавлах
 Толин тусгал нь `cp` -ын онцгой тохиолдлоос илүү бөгөөд энэ нь тусдаа mobiletto команд юм.
 хуулбарлах ажиллагаа; Энэ нь алдаа гарсан ч гэсэн үргэлжилдэг бөгөөд амжилт, алдааны тоог хянадаг.

 Бүх зүйлийг conn1-ээс conn2 болгон толилуулахын тулд:

    mo mirror conn1 conn2

 Дэд санг толилуулахын тулд:

    mo mirror conn1/some/subdir conn2

 Дэд санг өөр дэд лавлах руу толилуулахын тулд:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
