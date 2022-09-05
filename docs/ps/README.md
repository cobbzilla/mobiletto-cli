mobiletto-cli
 =============
 د [mobiletto](https://www.npmjs.com/package/mobiletto) لپاره د کمانډ لاین انٹرفیس (CLI)
 ذخیره

 Mobiletto د ایمیزون S3، Backblaze B2، او محلي فایل سیسټمونو سره د اړیکو ملاتړ کوي.

 # دا په بله ژبه ولولئ
 دا README.md سند د [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) له لارې ژباړل شوی دی
 **[هره ژبه چې د ګوګل ژباړې لخوا ملاتړ کیږي](https://cloud.google.com/translate/docs/languages)!**

 زه ډاډه یم چې دا بشپړ نه دی، مګر زه هیله لرم چې دا د هیڅ شی څخه غوره نه وي!

 [🇸🇦 عربي](../ar/README.md)
 [🇧🇩 بنگالي](../bn/README.md)
 [🇩🇪 الماني](../de/README.md)
 [🇺🇸 انګلیسي](../en/README.md)
 [🇪🇸 هسپانوي](../es/README.md)
 [🇫🇷 فرانسوي](../fr/README.md)
 [🇹🇩 هوسا](../ha/README.md)
 [🇮🇳 هندي](../hi/README.md)
 [🇮🇩 اندونیزیا](../id/README.md)
 [🇮🇹 ایټالوی](../it/README.md)
 [🇯🇵 جاپاني](../ja/README.md)
 [🇰🇷 کوریا](../ko/README.md)
 [🇮🇳 مارانتي](../mr/README.md)
 [🇵🇱 پولنډ](../pl/README.md)
 [🇧🇷 پرتګالي](../pt/README.md)
 [🇷🇺 روسي](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ترکي](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ويتنامي](../vi/README.md)
 [🇨🇳 چینایي](../zh/README.md)


 **[📚 ... ټولې ژبې ...](../README.md)**
 -----

 ### ایا د README د دې ژباړې سره کومه ستونزه شتون لري؟
 د اصلي [README] دا ځانګړې ژباړه (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 کیدای شي نیمګړتیا وي -- *اصلاحات ډیر ښه راغلاست دي!* مهرباني وکړئ [په GitHub کې د پلولو غوښتنه](https://github.com/cobbzilla/mobiletto-cli/pulls) واستوئ.
 یا که تاسو په دې کولو کې آرام نه یاست، [یوه مسله پرانیزئ](https://github.com/cobbzilla/mobiletto-cli/issues)

 کله چې تاسو د ژباړې په اړه د GitHub نوې مسله رامینځته کړئ ، مهرباني وکړئ دا وکړئ:
 * د پاڼې URL شامل کړئ (کاپي/پیسټ د براوزر ادرس بار څخه)
 * دقیق متن شامل کړئ چې غلط دی (کاپي / د براوزر څخه پیسټ)
 * مهرباني وکړئ تشریح کړئ چې څه غلط دي -- آیا ژباړه غلطه ده؟ ایا فارمینګ په یو ډول مات شوی؟
 * په مهربانۍ سره د غوره ژباړې وړاندیز وړاندې کړئ، یا دا چې متن باید په سمه توګه فارمیټ شي
 * **مننه!**

 ### سرچینه
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # منځپانګې
 * [نصب کول او کارول](#نصب کول او کارول)
 * [npm بسته](#npm-پیکیج)
 * [له سرچینې څخه](#له سرچینې څخه)
 * [اړیکې](#اړیکې)
 * [پیوستون جوړ کړئ](# یو پیوستون جوړ کړئ)
 * [د اړیکو لیست](# لیست پیوستون)
 * [ډمپ پیوستون JSON تشکیل](#Dump-connection-JSON-config)
 * [پیوستون لرې کړئ](#د اړیکه لرې کړئ)
 * [ټولې اړیکې لرې کړئ](#ټولې اړیکې لرې کړئ)
 * [د ذخیره کولو سره کار کول](#د ذخیره کولو سره کار کول)
 * [د فایلونو لیست](# لیست فایلونه)
 * [د stdout لپاره فایل ولیکئ](#Write-a-file-to-stdout)
 * [کاپي فایلونه](#کاپي فایلونه)
 * [فایلونه ړنګ کړئ](#دوتنې حذف کړئ)
 * [میټاډاټا وګورئ](#View-metadata)
 * [د عکس لارښودونه](#میرر لارښودونه)

 ## نصب او کارول
 تاسو کولی شئ د npm له لارې یا مستقیم له سرچینې څخه `mobiletto-cli` نصب او چل کړئ.

 ### npm بسته
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### له سرچینې څخه
 د سرچینې څخه د چلولو لپاره، تاسو به nodejs v16+ او سوت ته اړتیا ولرئ

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## اړیکې
 د ګرځنده تلیفون ټول ذخیره د اتصال له لارې لاسرسی کیږي.

 Mobiletto اوس مهال د محلي فایل سیسټم ذخیره کولو او ایمیزون S3 بالټونو سره د اړیکو ملاتړ کوي.

 اړیکې د JSON څیز لخوا مشخص شوي چې داسې ښکاري:

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

 د ټولو اختیارونو او د دوی ارزښتونو او معنی په اړه د بشپړ توضیحاتو لپاره ، وګورئ
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### اړیکه جوړه کړئ
 د نوي پیوستون رامینځته کولو لپاره ، موږ د دې JSON شیانو څخه یو ته اړتیا لرو.

 موږ کولی شو یو په متقابل ډول رامینځته کړو ، یا د فایل یا JSON لفظي له لارې یې عرضه کړو:

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

 ### د اړیکو لیست
 د شته اړیکو لیست:

    mo connect -l
    mo connect --list

 ### ډمپ پیوستون JSON تشکیل
 د پیوستون لپاره بشپړ JSON ترتیب وښایاست. **خبرداری** دا به کیلي او رازونه stdout ته چاپ کړي.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### اړیکه لرې کړئ
 یو واحد اړیکه لرې کړئ:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### ټولې اړیکې لرې کړئ
 ټولې اړیکې لرې کړئ:

    mo connect -R
    mo connect --remove-all

 ## د ذخیره کولو سره کار کول
 یوځل چې تاسو یو څه اړیکې رامینځته کړې ، د `ls` ، `cp` ، `rm` ، `meta` او `mirror` عملیات وکاروئ.
 د هغوی سره کار کول.

 د فایل هره لاره چې تاسو کمانډ ته چمتو کوئ باید د پیوستون نوم سره مخکینۍ وي
 ته اشاره کوي. په لاندې مثالونو کې، موږ فرض کوو چې دوه اړیکې شتون لري چې نوم یې `conn1` او `conn2`

 ### فایلونه لیست کړئ
 د لیست کمانډ محصول د JSON شیانو لړۍ ده، په هره کرښه کې یو، د فایلونو استازیتوب کوي
 موندل دا توکي به یو `name` او `type` ، او احتمالا نورې ساحې.

    mo ls conn1/some/path

 فایلونه په تکراري ډول لیست کړئ:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** د کوډ شوي ذخیره یادښت **: تکراري لیست لاهم د کوډ شوي ارتباطاتو لپاره نه دی ملاتړ شوی.
 تاسو کولی شئ په یو وخت کې یوازې د فایلونو یوه لارښود لیست کړئ.

 فایلونه په لفظي ډول لیست کړئ (ښکلا چاپ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 فایلونه په تکراري او لفظي ډول لیست کړئ:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 د `ls` کمانډ لپاره مرسته وګورئ، ټول اختیارونه بیانوي:

    mo ls -h
    mo ls --help

 ### stdout ته فایل ولیکئ
 د `cat` کمانډ به یو فایل د سټیډ آؤٹ ته چاپ کړي:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 په ریښتیني UNIX روح کې * (تر اوسه یقینا تمرین نه دی!) * د موبیلټو د `cat` کمانډ ** هیڅ اختیار نه اخلي **
 د ګټورو معلوماتو د ښودلو لپاره د `-h` / `--help` پرته.

 ### فایلونه کاپي کړئ
 یو واحد فایل له یو موبایل څخه بل ته کاپي کړئ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 یو واحد فایل له یو موبایل څخه بل ته کاپي کړئ، په منزل کې یې نوم بدل کړئ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 په تکراري ډول یو لارښود کاپي کړئ:

    mo cp -r conn1/some/directory conn2/some/dest/

 د `cp` کمانډ لپاره مرسته وګورئ، ټول اختیارونه بیانوي:

    mo cp -h
    mo cp --help

 یادونه: د فایل کاپي کول خورا ګړندي ندي ، ځکه چې دا اوس مهال د منځګړی temp فایل ته اړتیا لري.

 ### فایلونه ړنګ کړئ
 یو واحد فایل حذف کړئ:

    mo rm conn1/some/file.txt

 یو واحد فایل ړنګ کړئ او د کومې تېروتنې په اړه شکایت مه کوئ:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 لارښود ړنګ کړئ:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 لارښود ړنګ کړئ او د کومې تېروتنې په اړه شکایت مه کوئ:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### میټاډاټا وګورئ
 دا ډیری وخت ګټور دی چې د فایل لپاره میټاډاټا پوه شئ، پرته له دې چې ټول فایل ډاونلوډ کړئ.

 Mobiletto د نوم او ډول سربیره د فایل اندازې او وروستي ترمیم شوي وخت راپور ورکولو توان لري.

 د میټاډاټا لیدو لپاره:

    mo meta conn1/some/file.txt

 ### د عکس لارښودونه
 عکس العمل د `cp` له یوې ځانګړې قضیې څخه ډیر دی، دا یو جلا ګرځنده کمانډ دی چې د کټګوري پوښي.
 د کاپي عملیات دا حتی ادامه لري کله چې غلطي پیښیږي، او د بریالیتوبونو او غلطیتونو شمیره تعقیبوي.

 د conn1 څخه conn2 ته د هرڅه منعکس کولو لپاره:

    mo mirror conn1 conn2

 د فرعي لارښود منعکس کولو لپاره:

    mo mirror conn1/some/subdir conn2

 د یوې فرعي لارښود په بل فرعي لارښود کې عکس اخیستل:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
