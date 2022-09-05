mobiletto-cli
 =============
 ایک کمانڈ لائن انٹرفیس (CLI) برائے [mobiletto](https://www.npmjs.com/package/mobiletto)
 ذخیرہ

 Mobiletto Amazon S3، Backblaze B2، اور مقامی فائل سسٹم کے کنکشن کو سپورٹ کرتا ہے۔

 # اسے دوسری زبان میں پڑھیں
 اس README.md دستاویز کا ترجمہ کیا گیا ہے، بذریعہ [ `hokeylization` ](https://github.com/cobbzilla/hokeylization)، میں
 **[گوگل ٹرانسلیٹ کے ذریعے تعاون یافتہ ہر زبان](https://cloud.google.com/translate/docs/languages)!**

 مجھے یقین ہے کہ یہ کامل نہیں ہے، لیکن مجھے امید ہے کہ یہ کچھ بھی نہیں سے بہتر ہے!

 [🇸🇦 عربی](../ar/README.md)
 [🇧🇩 بنگالی](../bn/README.md)
 [🇩🇪 جرمن](../de/README.md)
 [🇺🇸 انگریزی](../en/README.md)
 [🇪🇸 ہسپانوی](../es/README.md)
 [🇫🇷 فرانسیسی](../fr/README.md)
 [🇹🇩 ہاؤسا](../ha/README.md)
 [🇮🇳 ہندی](../hi/README.md)
 [🇮🇩 انڈونیشیائی](../id/README.md)
 [🇮🇹 اطالوی](../it/README.md)
 [🇯🇵 جاپانی](../ja/README.md)
 [🇰🇷 کورین](../ko/README.md)
 [🇮🇳 مرانتھی](../mr/README.md)
 [🇵🇱 پولش](../pl/README.md)
 [🇧🇷 پرتگالی](../pt/README.md)
 [🇷🇺 روسی](../ru/README.md)
 [🇰🇪 سواحلی](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ترکی](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ویتنامی](../vi/README.md)
 [🇨🇳 چینی](../zh/README.md)


 **[📚 ... تمام زبانیں ...](../README.md)**
 ----

 ### کیا README کے اس ترجمے میں کوئی مسئلہ ہے؟
 اصل کا یہ خاص ترجمہ [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 خامی ہو سکتی ہے -- *تصحیح بہت خوش آئند ہے!* براہ کرم [GitHub پر پل کی درخواست](https://github.com/cobbzilla/mobiletto-cli/pulls) بھیجیں۔
 یا اگر آپ ایسا کرنے میں آرام سے نہیں ہیں تو، [ایک مسئلہ کھولیں](https://github.com/cobbzilla/mobiletto-cli/issues)

 جب آپ ترجمہ کے بارے میں ایک نیا GitHub مسئلہ بناتے ہیں، تو براہ کرم یہ کریں:
 * صفحہ کا یو آر ایل شامل کریں (براؤزر ایڈریس بار سے کاپی/پیسٹ کریں)
 * درست متن شامل کریں جو غلط ہے (براؤزر سے کاپی/پیسٹ)
 *براہ کرم بیان کریں کہ کیا غلط ہے -- کیا ترجمہ غلط ہے؟ کیا فارمیٹنگ کسی طرح ٹوٹ گئی ہے؟
 * براہِ کرم ایک بہتر ترجمے کی تجویز پیش کریں، یا متن کو کس طرح مناسب طریقے سے فارمیٹ کیا جائے۔
 *** آپ کا شکریہ!**

 ### ذریعہ
 * [موبائلیٹو-کلی آن گٹ ہب](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # مشمولات
 * [انسٹالیشن اور استعمال](# انسٹالیشن اور استعمال)
 * [npm پیکیج](#npm-پیکیج)
 * [ذریعہ سے](#ذریعہ سے)
 * [کنکشنز](# کنکشنز)
 * [کنکشن بنائیں](#Create-a-connection)
 * [لسٹ کنکشنز](# فہرست کنکشنز)
 * [ڈمپ کنکشن JSON تشکیل](#Dump-connection-JSON-config)
 * [کنکشن ہٹائیں](# ہٹائیں-ایک-کنکشن)
 * [تمام کنکشنز کو ہٹا دیں](# تمام کنکشنز کو ہٹا دیں)
 * [اسٹوریج کے ساتھ کام کرنا](#Working-with-storage)
 * [فائلوں کی فہرست](# فہرست فائلیں)
 * [stdout پر ایک فائل لکھیں](#Write-a-file-to-stdout)
 * [کاپی فائلیں](# کاپی فائلیں)
 * [فائلیں حذف کریں](#فائلیں حذف کریں)
 * [میٹا ڈیٹا دیکھیں](#View-metadata)
 * [آئینہ ڈائریکٹریز](#آئینہ ڈائریکٹریز)

 ## انسٹالیشن اور استعمال
 آپ npm کے ذریعے یا براہ راست ذریعہ سے `mobiletto-cli` کو انسٹال اور چلا سکتے ہیں۔

 ### npm پیکیج
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ماخذ سے
 ماخذ سے چلانے کے لیے، آپ کو nodejs v16+ اور یارن کی ضرورت ہوگی۔

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## رابطے
 تمام موبائل ٹو سٹوریج تک ایک کنکشن کے ذریعے رسائی حاصل کی جاتی ہے۔

 Mobiletto فی الحال مقامی فائل سسٹم سٹوریج اور Amazon S3 بالٹی کے کنکشن کو سپورٹ کرتا ہے۔

 کنکشن ایک JSON آبجیکٹ کے ذریعہ بیان کیے گئے ہیں جو اس طرح نظر آتے ہیں:

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

 تمام اختیارات اور ان کی اقدار اور معانی کے بارے میں مکمل تفصیلات کے لیے، دیکھیں
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage)۔

 ### کنکشن بنائیں
 نیا کنکشن بنانے کے لیے، ہمیں ان میں سے ایک JSON آبجیکٹ کی ضرورت ہے۔

 ہم ایک انٹرایکٹو بنا سکتے ہیں، یا فائل یا JSON لٹریل کے ذریعے فراہم کر سکتے ہیں:

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

 ### کنکشن کی فہرست بنائیں
 دستیاب رابطوں کی فہرست:

    mo connect -l
    mo connect --list

 ### ڈمپ کنکشن JSON تشکیل
 کنکشن کے لیے مکمل JSON تشکیل دکھائیں۔ **انتباہ** یہ کلیدوں اور رازوں کو stdout پر پرنٹ کرے گا۔

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### کنکشن ہٹا دیں۔
 ایک کنکشن کو ہٹا دیں:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### تمام کنکشن ہٹا دیں۔
 تمام کنکشن ہٹا دیں:

    mo connect -R
    mo connect --remove-all

 ## اسٹوریج کے ساتھ کام کرنا
 ایک بار جب آپ کچھ کنکشن بنا لیں تو، ` `ls` ، ` `cp` ، `rm` ، `meta` اور `mirror` آپریشنز استعمال کریں۔
 ان کے ساتھ کام کرنے کے لئے.

 ہر فائل پاتھ جو آپ کمانڈ کو فراہم کرتے ہیں اس کا کنکشن کے نام کے ساتھ سابقہ ہونا ضروری ہے۔
 یہ حوالہ دیتا ہے. ذیل کی مثالوں میں، ہم فرض کرتے ہیں کہ `conn1` اور `conn2` کے نام سے دو کنکشن موجود ہیں۔

 ### فائلوں کی فہرست بنائیں
 فہرست کمانڈ کا آؤٹ پٹ JSON اشیاء کی ایک سیریز ہے، ایک فی لائن، فائلوں کی نمائندگی کرتی ہے۔
 پایا ان اشیاء میں ایک `name` اور `type` قسم'، اور ممکنہ طور پر دیگر فیلڈز ہوں گے۔

    mo ls conn1/some/path

 بار بار فائلوں کی فہرست بنائیں:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **انکرپٹڈ سٹوریج نوٹ**: مرموز کنکشنز کے لیے ریکورسیو لسٹنگ ابھی تک تعاون یافتہ نہیں ہے۔
 آپ ایک وقت میں فائلوں کی صرف ایک ڈائریکٹری درج کر سکتے ہیں۔

 لفظی طور پر فائلوں کی فہرست بنائیں (خوبصورت پرنٹ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 بار بار اور لفظی طور پر فائلوں کی فہرست بنائیں:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` کمانڈ کے لیے مدد دیکھیں، تمام اختیارات کی وضاحت کرتا ہے:

    mo ls -h
    mo ls --help

 ### stdout پر ایک فائل لکھیں۔
 `cat` کمانڈ ایک فائل کو stdout پر پرنٹ کرے گا:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 حقیقی UNIX روح میں *(ابھی تک یقینی طور پر عمل نہیں!)* mobiletto کی `cat` کمانڈ **کوئی آپشن نہیں لیتی**
 مفید معلومات ظاہر کرنے کے لیے `-h` / `--help` کے علاوہ۔

 ### فائلیں کاپی کریں۔
 ایک فائل کو ایک موبائل سے دوسرے میں کاپی کریں:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ایک ہی فائل کو ایک موبائل سے دوسرے میں کاپی کریں، منزل پر اس کا نام تبدیل کریں:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 بار بار ایک ڈائریکٹری کاپی کریں:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` کمانڈ کے لیے مدد دیکھیں، تمام اختیارات کی وضاحت کرتا ہے:

    mo cp -h
    mo cp --help

 نوٹ: فائل کاپی کرنا بہت تیز نہیں ہے، کیونکہ اس کے لیے فی الحال ایک درمیانی عارضی فائل کی ضرورت ہے۔

 ### فائلیں حذف کریں۔
 ایک فائل کو حذف کریں:

    mo rm conn1/some/file.txt

 ایک فائل کو حذف کریں اور کسی غلطی کی شکایت نہ کریں:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ایک ڈائریکٹری حذف کریں:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ڈائرکٹری کو حذف کریں اور کسی غلطی کی شکایت نہ کریں:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### میٹا ڈیٹا دیکھیں
 پوری فائل کو ڈاؤن لوڈ کیے بغیر، کسی فائل کا میٹا ڈیٹا جاننا اکثر مفید ہوتا ہے۔

 Mobiletto نام اور قسم کے علاوہ فائل کے سائز اور آخری ترمیم شدہ وقت کی اطلاع دینے کے قابل ہے۔

 میٹا ڈیٹا دیکھنے کے لیے:

    mo meta conn1/some/file.txt

 ### آئینہ ڈائریکٹریز
 عکس بندی `cp` کے ایک خاص معاملے سے زیادہ ہے، یہ ایک الگ موبائلٹو کمانڈ ہے جو سمیٹتی ہے
 کاپی آپریشن؛ یہ تب بھی جاری رہتا ہے جب غلطیاں ہوتی ہیں، اور کامیابیوں اور غلطیوں کی گنتی کا پتہ لگاتے ہیں۔

 conn1 سے conn2 میں ہر چیز کی عکس بندی کرنا:

    mo mirror conn1 conn2

 ذیلی ڈائرکٹری کی عکس بندی کرنے کے لیے:

    mo mirror conn1/some/subdir conn2

 ایک ذیلی ڈائرکٹری کو دوسری سب ڈائرکٹری میں آئینہ دینے کے لیے:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
