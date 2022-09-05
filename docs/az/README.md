mobiletto-cli
 ==============
 [mobiletto] üçün komanda xətti interfeysi (CLI)(https://www.npmjs.com/package/mobiletto)
 saxlama.

 Mobiletto Amazon S3, Backblaze B2 və yerli fayl sistemlərinə qoşulmaları dəstəkləyir.

 # Bunu başqa dildə oxuyun
 Bu README.md sənədi [hokeylization](https://github.com/cobbzilla/hokeylization) vasitəsilə tərcümə olunub
 **[Google Translate tərəfindən dəstəklənən bütün dillər](https://cloud.google.com/translate/docs/languages)!**

 Əminəm ki, mükəmməl deyil, amma ümid edirəm ki, heç nədən yaxşıdır!

 [🇸🇦 Ərəb](../ar/README.md)
 [🇧🇩 Benqal dili](../bn/README.md)
 [🇩🇪 Almanca](../de/README.md)
 [🇺🇸 İngilis dili](../en/README.md)
 [🇪🇸 İspan](../es/README.md)
 [🇫🇷 Fransızca](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 İndoneziya dili](../id/README.md)
 [🇮🇹 İtalyanca](../it/README.md)
 [🇯🇵 Yapon](../ja/README.md)
 [🇰🇷 Koreya](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polyak](../pl/README.md)
 [🇧🇷 Portuqal dili](../pt/README.md)
 [🇷🇺 Rus dili](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Taqaloq](../tl/README.md)
 [🇹🇷 Türkcə](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vyetnam dili](../vi/README.md)
 [🇨🇳 Çin](../zh/README.md)


 **[📚 ... Bütün Dillər ...](../README.md)**
 ----

 ### README-nin bu tərcüməsində problem varmı?
 Orijinalın bu xüsusi tərcüməsi [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 qüsurlu ola bilər -- *düzəlişlər çox xoşdur!* Lütfən, [GitHub-da çəkmə sorğusu] göndərin (https://github.com/cobbzilla/mobiletto-cli/pulls),
 və ya bunu etməkdə rahat deyilsinizsə, [məsələ açın](https://github.com/cobbzilla/mobiletto-cli/issues)

 Tərcümə ilə bağlı yeni GitHub məsələsi yaratdığınız zaman, lütfən:
 * səhifənin URL-ni daxil edin (brauzerin ünvan çubuğundan kopyalayın/yapışdırın)
 * səhv olan mətni daxil edin (brauzerdən kopyalayın/yapışdırın)
 * zəhmət olmasa nəyin səhv olduğunu təsvir edin -- tərcümə səhvdir? formatlama birtəhər pozuldu?
 * lütfən daha yaxşı tərcümə təklifi və ya mətnin düzgün formatlaşdırılması ilə bağlı təklif verin
 * **Çox sağ ol!**

 # Məzmun
 * [Mənbə](#Mənbə)
 * [Dəstək və Maliyyələşdirmə](#Dəstək və Maliyyələşdirmə)
 * [Quraşdırma və istifadə](#Quraşdırma və istifadə)
 * [npm paketi](#npm-paket)
 * [Mənbədən](#Mənbədən)
 * [Bağlantılar](#Bağlantılar)
 * [Bağlantı yaradın](#Bağlantı yarat)
 * [Siyahı əlaqələri](#Siyahı-bağlantılar)
 * [Dump bağlantısı JSON konfiqurasiyası](#Dump-connection-JSON-config)
 * [Əlaqəni sil](#Bağlantıyı sil)
 * [Bütün bağlantıları silin](#Remove-all-connections)
 * [Yaddaşla işləmək](#Saxlama ilə işləmək)
 * [Faylların siyahısı](#Siyahı-fayllar)
 * [Stdout-a fayl yazın](#Write-a-file-to-stdout)
 * [Faylları kopyalayın](#Faylları kopyalayın)
 * [Faylları silin](#Delete-fayllar)
 * [Metadataya baxın](#View-metadata)
 * [Güzgü qovluqları](#Güzgü kataloqları)

 ### Mənbə
 * [GitHub-da mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm-də mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## Dəstək və Maliyyələşdirmə
 Mən peşəkar açıq mənbə proqram təminatı tərtibatçısı olmağa çalışıram. məndə işləmişəm
 Uzun illər proqram sektorunda müvəffəqiyyətli şirkətlər qurdum və onları açıq şirkətlərə satdım.
 Bu yaxınlarda işimi itirdim və başqa işim yoxdur

 Beləliklə, mən faydalı proqram yazmağa çalışacağam və bunun işlədiyini görəcəyəm

 Bu proqramdan istifadə etməkdən zövq alırsınızsa, mən hətta bu proqrama görə də səmimi olaraq minnətdar olaram
 ən kiçik [Patreon vasitəsilə aylıq töhfə](https://www.patreon.com/cobbzilla)

 *Çox sağ ol!*

 ## Quraşdırma və istifadə
 Siz `mobiletto-cli` quraşdıra və işlədə bilərsiniz.

 ### npm paketi
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Mənbədən
 Mənbədən işləmək üçün sizə nodejs v16+ və iplik lazımdır

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Əlaqələr
 Bütün mobiletto yaddaşına bağlantı vasitəsilə daxil olur.

 Mobiletto hazırda yerli fayl sistemi yaddaşına və Amazon S3 vedrələrinə qoşulmaları dəstəkləyir.

 Əlaqələr bu kimi görünən JSON obyekti tərəfindən müəyyən edilir:

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

 Bütün variantlar və onların dəyərləri və mənaları haqqında tam təfərrüatlar üçün baxın
 [mobiletto sənədləri](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Əlaqə yaradın
 Yeni əlaqə yaratmaq üçün bu JSON obyektlərindən birinə ehtiyacımız var.

 Biz interaktiv şəkildə birini yarada və ya fayl və ya JSON hərfi vasitəsilə təmin edə bilərik:

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

 ### Əlaqələrin siyahısı
 Mövcud bağlantıların siyahısı:

    mo connect -l
    mo connect --list

 ### JSON konfiqurasiyasını boşaltın
 Bağlantı üçün tam JSON konfiqurasiyasını göstərin. **XƏBƏRDARLIQ** bu, stdout üçün açarları və sirləri çap edəcək.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Bağlantını silin
 Tək bir əlaqəni silin:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Bütün əlaqələri çıxarın
 BÜTÜN bağlantıları silin:

    mo connect -R
    mo connect --remove-all

 ## Saxlama ilə işləmək
 Bəzi əlaqələr yaratdıqdan sonra `ls` , `cp` , `rm` , `meta` və `mirror` əməliyyatlarından istifadə edin.
 onlarla işləmək.

 Komandaya təqdim etdiyiniz hər bir fayl yolu əlaqənin adı ilə prefiks edilməlidir
 istinad edir. Aşağıdakı nümunələrdə `conn1` və `conn2` adlı iki əlaqənin mövcud olduğunu fərz edirik.

 ### Faylların siyahısı
 Siyahı əmrinin çıxışı faylları təmsil edən bir sıra JSON obyektləridir
 tapıldı. Bu obyektlərin `name` və `type` və ola bilsin ki, başqa sahələri olacaq.

    mo ls conn1/some/path

 Faylları rekursiv olaraq sıralayın:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Şifrələnmiş yaddaş qeydi**: Şifrələnmiş bağlantılar üçün rekursiv siyahı hələ dəstəklənmir.
 Siz eyni anda yalnız bir fayl qovluğunu sadalaya bilərsiniz.

 Faylları ətraflı siyahıya salın (yaxşı çap edilmiş JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Faylları rekursiv və ətraflı siyahıya alın:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` əmri üçün yardıma baxın, bütün variantları təsvir edir:

    mo ls -h
    mo ls --help

 ### stdout-a fayl yazın
 `cat` əmri faylı stdout-a çap edəcək:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Əsl UNIX ruhunda *(lakin praktikada belə deyil!)* mobiletto-nun `cat` əmri **heç bir seçim tələb etmir**
 faydalı məlumatı göstərmək üçün `-h` / `--help` başqa.

 ### Faylları kopyalayın
 Bir faylı bir mobildən digərinə kopyalayın:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Bir faylı bir mobildən digərinə köçürün, təyinat yerində adını dəyişdirin:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kataloqu rekursiv surətdə kopyalayın:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` əmri üçün yardıma baxın, bütün variantları təsvir edir:

    mo cp -h
    mo cp --help

 Qeyd: Faylın surətinin çıxarılması o qədər də sürətli deyil, çünki hazırda vasitəçi müvəqqəti fayl tələb edir.

 ### Faylları silin
 Tək faylı silin:

    mo rm conn1/some/file.txt

 Bir faylı silin və heç bir səhvdən şikayət etməyin:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Kataloqu silin:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Kataloqu silin və səhvlərdən şikayət etməyin:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Metadataya baxın
 Bütün faylı yükləmədən faylın metadatasını bilmək çox vaxt faydalıdır.

 Mobiletto ad və növündən əlavə fayl ölçüsünü və son dəyişdirilmiş vaxtı bildirə bilir.

 Metadata baxmaq üçün:

    mo meta conn1/some/file.txt

 ### Güzgü kataloqları
 `cp` -nin xüsusi halından daha çox şeydir, o, ayrı bir mobiletto əmridir.
 surət əməliyyatı; səhvlər baş verdikdə belə davam edir və uğur və səhvlərin sayını izləyin.

 Hər şeyi conn1-dən conn2-yə əks etdirmək üçün:

    mo mirror conn1 conn2

 Alt kataloqu əks etdirmək üçün:

    mo mirror conn1/some/subdir conn2

 Bir alt kataloqu başqa alt kataloqa əks etdirmək üçün:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
