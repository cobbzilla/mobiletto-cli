mobiletto-cli
 ============
 هڪ ڪمانڊ لائن انٽرفيس (CLI) لاءِ [mobiletto](https://www.npmjs.com/package/mobiletto)
 ذخيرو.

 Mobiletto ڪنيڪشن کي سپورٽ ڪري ٿو Amazon S3، Backblaze B2، ۽ مقامي فائل سسٽم.

 # ھي پڙھو ٻي ٻولي ۾
 هي README.md دستاويز ترجمو ڪيو ويو آهي، ذريعي [ `hokeylization` ](https://github.com/cobbzilla/hokeylization)، ۾
 **[گوگل ترجمي جي مدد سان هر ٻولي](https://cloud.google.com/translate/docs/languages)!**

 مون کي پڪ آهي ته اهو مڪمل ناهي، پر مون کي اميد آهي ته اهو ڪجهه به نه کان بهتر آهي!

 [🇸🇦 عربي](../ar/README.md)
 [🇧🇩 بنگالي](../bn/README.md)
 [🇩🇪 جرمن](../de/README.md)
 [🇺🇸 انگريزي](../en/README.md)
 [🇪🇸 اسپينش](../es/README.md)
 [🇫🇷 فرانسيسي](../fr/README.md)
 [🇹🇩 هائوسا](../ha/README.md)
 [🇮🇳 هندي](../hi/README.md)
 [🇮🇩 انڊونيشيا](../id/README.md)
 [🇮🇹 اطالوي](../it/README.md)
 [🇯🇵 جاپاني](../ja/README.md)
 [🇰🇷 ڪورين](../ko/README.md)
 [🇮🇳 مارانٿي](../mr/README.md)
 [🇵🇱 پولش](../pl/README.md)
 [🇧🇷 پرتگالي](../pt/README.md)
 [🇷🇺 روسي](../ru/README.md)
 [🇰🇪 سواهلي](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ترڪي](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ويٽنامي](../vi/README.md)
 [🇨🇳 چيني](../zh/README.md)


 **[📚 ... سڀ ٻوليون ...](../README.md)**
 ----

 ### ڇا README جي ھن ترجمي ۾ ڪو مسئلو آھي؟
 هي خاص ترجمو اصل جو [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 غلطي ٿي سگھي ٿي -- *اصلاح تمام ڀليڪار آھي!* مھرباني ڪري موڪليو [pull request on GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 يا جيڪڏهن توهان اهو ڪرڻ ۾ آرام سان نه آهيو، [هڪ مسئلو کوليو](https://github.com/cobbzilla/mobiletto-cli/issues)

 جڏهن توهان ترجمي بابت هڪ نئون GitHub مسئلو ٺاهيو، مهرباني ڪري ڪريو:
 * صفحي جو URL شامل ڪريو (براؤزر ايڊريس بار مان ڪاپي/پيسٽ ڪريو)
 * صحيح متن شامل ڪريو جيڪو غلط آهي (براؤزر مان ڪاپي / پيسٽ ڪريو)
 * مهرباني ڪري وضاحت ڪريو ڇا غلط آهي - ڇا ترجمو غلط آهي؟ ڇا فارميٽنگ ڪنهن طرح ڀڄي وئي آهي؟
 * مھرباني ڪري بھتر ترجمي جي تجويز پيش ڪريو، يا متن کي ڪيئن صحيح شڪل ۾ ھجڻ گھرجي
 * **توهان جي مهرباني!**

 ### ذريعو
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # مواد
 * [انسٽاليشن ۽ استعمال](# تنصيب ۽ استعمال)
 * [npm پيڪيج](#npm-پيڪيج)
 * [ذريعو کان](#ذريعو)
 * [ڪنيڪشن](# ڪنيڪشن)
 * [هڪ ڪنيڪشن ٺاهيو](#Create-a-connection)
 * [فهرست ڪنيڪشن](#List-connections)
 * [ڊمپ ڪنيڪشن JSON config](#Dump-connection-JSON-config)
 * [هڪ ڪنيڪشن هٽايو](#هٽايو-هڪ-ڪنيڪشن)
 * [سڀني ڪنيڪشن کي هٽايو](#Remove-all-connections)
 * [اسٽوريج سان ڪم ڪرڻ](# اسٽوريج سان گڏ ڪم ڪرڻ)
 * [فائلن جي فهرست](# فهرست فائلون)
 * [write a file to stdout](#write-a-file-to-stdout)
 * [فائلون نقل ڪريو](#ڪاپي فائلون)
 * [فائلون حذف ڪريو](#Delete-files)
 * [ميٽا ڊيٽا ڏسو](#View-metadata)
 * [آئيني ڊاريڪٽري](#ميرر-ڊائريڪٽريز)

 ## تنصيب ۽ استعمال
 توهان انسٽال ڪري سگهو ٿا ۽ هلائي سگهو ٿا `mobiletto-cli` ذريعي npm يا سڌو ذريعو مان.

 ### npm پيڪيج
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ذريعن کان
 ذريعن کان هلائڻ لاءِ، توهان کي ضرورت پوندي nodejs v16+ ۽ يارن

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## رابطا
 سڀني موبائيلٽو اسٽوريج کي ڪنيڪشن ذريعي پهچايو ويندو آهي.

 Mobiletto في الحال مقامي فائل سسٽم اسٽوريج ۽ Amazon S3 بڪٽس سان ڪنيڪشن کي سپورٽ ڪري ٿو.

 ڪنيڪشن هڪ JSON اعتراض طرفان بيان ڪيا ويا آهن جيڪي هن طرح نظر اچن ٿا:

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

 سڀني اختيارن ۽ انهن جي قدرن ۽ معنائن تي مڪمل تفصيل لاءِ، ڏسو
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### ڪنيڪشن ٺاهيو
 ھڪڙو نئون ڪنيڪشن ٺاھڻ لاء، اسان کي انھن مان ھڪڙي JSON شين جي ضرورت آھي.

 اسان هڪ ٺاهي سگهون ٿا انٽرايڪٽو، يا هڪ فائل ذريعي فراهم ڪري سگهون ٿا يا JSON لفظي:

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

 ### لسٽ ڪنيڪشن
 فهرست دستياب ڪنيڪشن:

    mo connect -l
    mo connect --list

 ### ڊمپ ڪنيڪشن JSON ترتيب
 ڪنيڪشن لاءِ مڪمل JSON ترتيب ڏيکاريو. ** وارننگ** هي ڪيچ ۽ رازن کي پرنٽ ڪندو stdout ڏانهن.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ڪنيڪشن هٽايو
 ھڪڙي ڪنيڪشن کي هٽايو:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### سڀ ڪنيڪشن هٽايو
 سڀ ڪنيڪشن هٽايو:

    mo connect -R
    mo connect --remove-all

 ## اسٽوريج سان ڪم ڪرڻ
 هڪ دفعو توهان ڪجهه ڪنيڪشن ٺاهي ڇڏيو، استعمال ڪريو `ls` ، `cp` ، `rm` ، `meta` ۽ `mirror` آپريشن.
 انهن سان گڏ ڪم ڪرڻ لاء.

 ھر فائل جو رستو جيڪو توھان مهيا ڪندا آھيو ھڪڙي حڪم کي ڪنيڪشن جي نالي سان اڳڀرو ڪيو وڃي
 اهو حوالو ڏئي ٿو. هيٺ ڏنل مثالن ۾، اسان فرض ڪريون ٿا ته ٻه ڪنيڪشن موجود آهن جن جي نالي سان `conn1` ۽ `conn2`

 ### فائلون لسٽ ڪريو
 لسٽ ڪمانڊ جو آئوٽ پٽ JSON شين جو هڪ سلسلو آهي، هڪ في ليڪ، فائلن جي نمائندگي ڪري ٿو
 مليو. انهن شين ۾ هڪ `name` ۽ `type` ، ۽ ممڪن طور تي ٻيا فيلڊ هوندا.

    mo ls conn1/some/path

 فائلن کي بار بار لسٽ ڪريو:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **انڪريپٽ ٿيل اسٽوريج نوٽ**: ٻيهر ورجائيندڙ لسٽنگ اڃا تائين انڪرپٽ ٿيل ڪنيڪشن لاءِ سپورٽ نه ڪئي وئي آهي.
 توھان ھڪڙي وقت ۾ فائلن جي صرف ھڪڙي ڊاريڪٽري لسٽ ڪري سگھو ٿا.

 فائلن کي لفظي طور تي لسٽ ڪريو (خوبصورت-پرنٽ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 لسٽ فائلن کي بار بار ۽ لفظي طور تي:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` حڪم لاء مدد ڏسو، سڀني اختيارن کي بيان ڪري ٿو:

    mo ls -h
    mo ls --help

 ### stdout لاءِ فائل لکو
 `cat` تي فائل پرنٽ ڪندو:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 سچي UNIX روح ۾ * (اڃا تائين يقيناً عملي طور تي نه!) * موبائيلٽو جي `cat` ڪمانڊ ** ڪو به اختيار نه وٺندو آهي**
 مددگار معلومات ڏيکارڻ لاءِ `-h` / `--help` کان سواءِ.

 ### فائلون نقل ڪريو
 ھڪڙي ھڪڙي فائل کي ھڪڙي موبائيل کان ٻئي ڏانھن نقل ڪريو:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ھڪڙي ھڪڙي فائل کي نقل ڪريو ھڪڙي موبائيل کان ٻئي ڏانھن، ان کي منزل تي تبديل ڪريو:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 بار بار ڊاريڪٽري کي نقل ڪريو:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` حڪم لاء مدد ڏسو، سڀني اختيارن کي بيان ڪري ٿو:

    mo cp -h
    mo cp --help

 نوٽ: فائل ڪاپي ڪرڻ تمام تيز نه آهي، ڇاڪاڻ ته ان کي في الحال هڪ وچولي عارضي فائل جي ضرورت آهي.

 ### فائلون حذف ڪريو
 ھڪڙي فائل کي حذف ڪريو:

    mo rm conn1/some/file.txt

 ھڪڙي فائل کي حذف ڪريو ۽ ڪنھن غلطي جي شڪايت نه ڪريو:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ڊاريڪٽري کي ختم ڪريو:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ڊاريڪٽري کي ختم ڪريو ۽ ڪنهن به غلطي جي باري ۾ شڪايت نه ڪريو:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### ميٽا ڊيٽا ڏسو
 اهو اڪثر ڪري ڪارائتو آهي هڪ فائل لاءِ ميٽاڊيٽا ڄاڻڻ، بغير پوري فائل کي ڊائون لوڊ ڪرڻ جي.

 Mobiletto فائل سائيز ۽ آخري تبديل ٿيل وقت جي رپورٽ ڪرڻ جي قابل آهي، نالو ۽ قسم جي اضافي ۾.

 ميٽا ڊيٽا ڏسڻ لاءِ:

    mo meta conn1/some/file.txt

 ### آئيني ڊائريڪٽري
 `cp` جي هڪ خاص صورت کان وڌيڪ آهي، اهو هڪ الڳ موبائيلٽو ڪمانڊ آهي جيڪو لپي ٿو
 ڪاپي آپريشن؛ اهو جاري آهي جيتوڻيڪ غلطيون ٿينديون آهن، ۽ ڪاميابين ۽ غلطين جي ڳڻپ کي ٽريڪ ڪريو.

 conn1 کان conn2 تائين هر شي کي آئيني ڏيڻ لاءِ:

    mo mirror conn1 conn2

 ھڪڙي ذيلي ڊاريڪٽري کي آئيني ڪرڻ لاء:

    mo mirror conn1/some/subdir conn2

 ھڪڙي ذيلي ڊاريڪٽري کي ٻي سب ڊاريڪٽري ۾ آئيني ڪرڻ لاءِ:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
