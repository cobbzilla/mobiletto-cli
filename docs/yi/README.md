mobiletto-cli
 =============
 א באַפֿעל שורה צובינד (CLI) פֿאַר [mobiletto](https://www.npmjs.com/package/mobiletto)
 סטאָרידזש.

 Mobiletto שטיצט קאַנעקשאַנז צו Amazon S3, Backblaze B2 און היגע פילעסיסטעמס.

 # לייענען דעם אין אן אנדער שפּראַך
 דעם README.md דאָקומענט איז איבערגעזעצט דורך [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), אין
 **[יעדער שפּראַך געשטיצט דורך Google Translate](https://cloud.google.com/translate/docs/languages)!**

 איך בין זיכער אַז עס איז נישט גאנץ, אָבער איך האָפֿן עס איז בעסער ווי גאָרנישט!

 [🇸🇦 אַראַביש](../ar/README.md)
 [🇧🇩 בענגאַליש](../bn/README.md)
 [🇩🇪 דייַטש](../de/README.md)
 [🇺🇸 ענגליש](../en/README.md)
 [🇪🇸 שפּאַניש](../es/README.md)
 [🇫🇷 פראנצויזיש](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 הינדיש](../hi/README.md)
 [🇮🇩 אינדאָנעזיש](../id/README.md)
 [🇮🇹 איטאַליעניש](../it/README.md)
 [🇯🇵 יאַפּאַניש](../ja/README.md)
 [🇰🇷 קאָרעיִש](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 פויליש](../pl/README.md)
 [🇧🇷 פּאָרטוגעזיש](../pt/README.md)
 [🇷🇺 רוסיש](../ru/README.md)
 [🇰🇪 סוואַהילי](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 טערקיש](../tr/README.md)
 [🇵🇰 אורדו](../ur/README.md)
 [🇻🇳 וויעטנאַמעזיש](../vi/README.md)
 [🇨🇳 כינעזיש](../zh/README.md)


 **[📚 ... אַלע שפּראַכן ...](../README.md)**
 ----

 ### איז עס אַ פּראָבלעם מיט דעם איבערזעצונג פון די README?
 די באַזונדער איבערזעצונג פון דער אָריגינעל [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 קען זיין פלאָז -- * קערעקשאַנז זענען זייער באַגריסן! * ביטע שיקן אַ [ציען בעטן אויף גיטהוב](https://github.com/cobbzilla/mobiletto-cli/pulls),
 אָדער אויב איר זענט נישט באַקוועם צו טאָן דאָס, [עפענען אַן אַרויסגעבן](https://github.com/cobbzilla/mobiletto-cli/issues)

 ווען איר שאַפֿן אַ נייַע GitHub אַרויסגעבן וועגן אַ איבערזעצונג, ביטע טאָן:
 * אַרייַננעמען די URL פון די בלאַט (קאָפּי / פּאַפּ פון דעם בלעטערער אַדרעס באַר)
 * אַרייַננעמען די פּינטלעך טעקסט וואָס איז פאַלש (קאָפּי / פּאַפּ פון בלעטערער)
 * ביטע באַשרייַבן וואָס איז פאַלש - איז די איבערזעצונג פאַלש? איז די פאָרמאַטטינג עפעס צעבראכן?
 * ביטע פאָרשלאָגן אַ פאָרשלאָג פון אַ בעסער איבערזעצונג, אָדער ווי דער טעקסט זאָל זיין רעכט פאָרמאַטטעד
 * **אדאנק!**

 ### מקור
 * [mobiletto-cli אויף GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli אויף npm](https://www.npmjs.com/package/mobiletto-cli)

 # אינהאַלט
 * [ינסטאַלירונג און באַניץ](#ינסטאַללאַטיאָן און באַניץ)
 * [npm פּעקל](#npm-פּעקל)
 * [פֿון מקור](#פֿון מקור)
 * [קאַנעקשאַנז](# קאַנעקשאַנז)
 * [שאַפֿן אַ פֿאַרבינדונג](#שאַפֿן אַ פֿאַרבינדונג)
 * [רשימה קאַנעקשאַנז](# רשימה קאַנעקשאַנז)
 * [דאַמפּ קשר JSON config](#Dmp-connection-JSON-config)
 * [נעם אַ פֿאַרבינדונג](#נעם-אַ-פֿאַרבינדונג)
 * [נעם אַלע קאַנעקשאַנז](# אַראָפּנעמען אַלע קאַנעקשאַנז)
 * [ארבעטן מיט סטאָרידזש](#ארבעטן-מיט-סטאָרידזש)
 * [רשימה טעקעס](# רשימה טעקעס)
 * [שרייַבן אַ טעקע צו סטדאָוט](# שרייב אַ טעקע צו סטדאָוט)
 * [קאָפּי טעקעס](# קאָפּי-פיילס)
 * [מעקן טעקעס](# דיליט טעקעס)
 * [View מעטאַדאַטאַ](#View-מעטאַדאַטאַ)
 * [שפּיגל דירעקטעריז](# שפּיגל-דירעקטעריז)

 ## ינסטאַלירונג און באַניץ
 איר קענען ינסטאַלירן און לויפן `mobiletto-cli` דורך npm אָדער גלייַך פֿון מקור.

 ### npm פּעקל
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### פון מקור
 צו לויפן פֿון מקור, איר דאַרפֿן נאָדעדזשס וו16+ און יאַרן

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## קאַנעקשאַנז
 כל מאָבילעטטאָ סטאָרידזש איז אַקסעסט דורך אַ קשר.

 Mobiletto דערווייַל שטיצט קאַנעקשאַנז צו די היגע טעקע סיסטעם סטאָרידזש און Amazon S3 באַקאַץ.

 קאַנעקשאַנז זענען ספּעסיפיעד דורך אַ JSON כייפעץ וואָס קוקט ווי דאָס:

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

 פֿאַר פול דעטאַילס וועגן אַלע די אָפּציעס און זייער וואַלועס און מינינגז, זען די
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### שאַפֿן אַ קשר
 צו שאַפֿן אַ נייַע קשר, מיר דאַרפֿן איינער פון די JSON אַבדזשעקץ.

 מיר קענען מאַכן איינער ינטעראַקטיוועלי, אָדער צושטעלן איינער דורך אַ טעקע אָדער JSON ליטעראַל:

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

 ### רשימה קאַנעקשאַנז
 רשימה בנימצא קאַנעקשאַנז:

    mo connect -l
    mo connect --list

 ### דאַמפּ קשר JSON config
 ווייַזן די פול JSON קאַנפיגיעריישאַן פֿאַר אַ קשר. ** ווארענונג ** דאָס וועט דרוקן שליסלען און סיקריץ צו סטדאָוט.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### אַראָפּנעמען אַ קשר
 אַראָפּנעמען אַ איין קשר:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### אַראָפּנעמען אַלע קאַנעקשאַנז
 אַראָפּנעמען אַלע קאַנעקשאַנז:

    mo connect -R
    mo connect --remove-all

 ## ארבעטן מיט סטאָרידזש
 אַמאָל איר האָבן באשאפן עטלעכע קאַנעקשאַנז, נוצן די `ls` , `cp` , `rm` , `meta` און `mirror` אַפּעריישאַנז
 צו אַרבעטן מיט זיי.

 יעדער טעקע דרך וואָס איר צושטעלן צו אַ באַפֿעל מוזן זיין פּריפיקסט מיט די נאָמען פון די קשר
 עס רעפערס צו. אין די ביישפילן אונטן, מיר יבערנעמען צוויי קאַנעקשאַנז מיט די נאָמען `conn1` און `conn2`

 ### רשימה טעקעס
 דער רעזולטאַט פון אַ רשימה באַפֿעל איז אַ סעריע פון JSON אַבדזשעקץ, איינער פּער שורה, רעפּריזענטינג די טעקעס
 געפונען. די אַבדזשעקץ וועט האָבן אַ `name` און `type` , און עפשער אנדערע פעלדער.

    mo ls conn1/some/path

 רשימה טעקעס רעקורסיוועלי:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** ענקריפּטיד סטאָרידזש טאָן **: רעקורסיווע ליסטינג איז נאָך נישט געשטיצט פֿאַר ינקריפּטיד קאַנעקשאַנז.
 איר קענען בלויז רשימה איין וועגווייַזער פון טעקעס אין אַ צייַט.

 רשימה טעקעס ווערבאָוסלי (שיין-פּרינט JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 רשימה טעקעס רעקורסיוועלי און ווערבאָוסלי:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 זען הילף פֿאַר `ls` באַפֿעל, באשרייבט אַלע אָפּציעס:

    mo ls -h
    mo ls --help

 ### שרייב אַ טעקע צו סטדאָוט
 דער `cat` באַפֿעל וועט דרוקן אַ טעקע צו סטדאָוט:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 אין דעם אמת UNIX גייסט *(נאָך זיכער נישט די פיר!)* `cat` באַפֿעל ** נעמט קיין אָפּציעס**
 אנדערע ווי `-h` / `--help` צו ווייַזן נוציק אינפֿאָרמאַציע.

 ### קאָפּי טעקעס
 נאָכמאַכן אַ איין טעקע פון איין מאָבילעט צו אנדערן:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 נאָכמאַכן אַ איין טעקע פון איין מאָבילעט צו אנדערן, ריניימינג עס אין די דעסטיניישאַן:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 רעקורסיוועלי נאָכמאַכן אַ וועגווייַזער:

    mo cp -r conn1/some/directory conn2/some/dest/

 קוק הילף פֿאַר `cp` באַפֿעל, באשרייבט אַלע אָפּציעס:

    mo cp -h
    mo cp --help

 באַמערקונג: טעקע קאַפּיינג איז נישט זייער שנעל, ווייַל עס דערווייַל ריקווייערז אַ ינטערמידיערי טעמפּ טעקע.

 ### ויסמעקן טעקעס
 ויסמעקן אַ איין טעקע:

    mo rm conn1/some/file.txt

 ויסמעקן אַ איין טעקע און טאָן ניט באַקלאָגנ זיך וועגן קיין ערראָרס:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ויסמעקן אַ וועגווייַזער:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ויסמעקן אַ וועגווייַזער און טאָן ניט באַקלאָגנ זיך וועגן קיין ערראָרס:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### View מעטאַדאַטאַ
 עס איז אָפט נוציק צו וויסן די מעטאַדאַטאַ פֿאַר אַ טעקע, אָן דאַונלאָודינג די גאנצע טעקע.

 Mobiletto איז ביכולת צו באַריכט די טעקע גרייס און לעצטע מאַדאַפייד צייט, אין אַדישאַן צו נאָמען און טיפּ.

 צו זען מעטאַדאַטאַ:

    mo meta conn1/some/file.txt

 ### שפּיגל דירעקטעריז
 מירראָרינג איז מער ווי אַ ספּעציעל פאַל פון `cp` , עס איז אַ באַזונדער מאָבילעטטאָ באַפֿעל וואָס ראַפּס די
 קאָפּיע אָפּעראַציע; עס האלט אפילו ווען ערראָרס פאַלן, און שפּור אַ ציילן פון סאַקסעסאַז און ערראָרס.

 צו שפּיגל אַלץ פֿון קאָנ 1 צו קאָנ 2:

    mo mirror conn1 conn2

 צו שפּיגל אַ סובדירעקטאָרי:

    mo mirror conn1/some/subdir conn2

 צו שפּיגל אַ סובדירעקטאָרי אין אן אנדער סובדירעקטאָרי:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
