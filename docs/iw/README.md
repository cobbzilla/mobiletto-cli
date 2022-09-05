mobiletto-cli
 =============
 ממשק שורת פקודה (CLI) עבור [mobiletto](https://www.npmjs.com/package/mobiletto)
 אִחסוּן.

 Mobiletto תומך בחיבורים לאמזון S3, Backblaze B2 ומערכות קבצים מקומיות.

 # קרא את זה בשפה אחרת
 מסמך README.md זה תורגם, באמצעות [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), ל-
 **[בכל שפה נתמכת על ידי Google Translate](https://cloud.google.com/translate/docs/languages)!**

 אני בטוח שזה לא מושלם, אבל אני מקווה שזה יותר טוב מכלום!

 [🇸🇦 ערבית](../ar/README.md)
 [🇧🇩 בנגלית](../bn/README.md)
 [🇩🇪 גרמנית](../de/README.md)
 [🇺🇸 אנגלית](../en/README.md)
 [🇪🇸 ספרדית](../es/README.md)
 [🇫🇷 צרפתית](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 הינדי](../hi/README.md)
 [🇮🇩 אינדונזית](../id/README.md)
 [🇮🇹 איטלקית](../it/README.md)
 [🇯🇵 יפנית](../ja/README.md)
 [🇰🇷 קוריאנית](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 פולנית](../pl/README.md)
 [🇧🇷 פורטוגזית](../pt/README.md)
 [🇷🇺 רוסית](../ru/README.md)
 [🇰🇪 סוואהילי](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 טורקית](../tr/README.md)
 [🇵🇰 אורדו](../ur/README.md)
 [🇻🇳 וייטנאמית](../vi/README.md)
 [🇨🇳 סינית](../zh/README.md)


 **[📚 ... כל השפות ...](../README.md)**
 ----

 ### האם יש בעיה עם התרגום הזה של README?
 התרגום הספציפי הזה של [README] המקורי (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 עשוי להיות פגום -- *תיקונים יתקבלו בברכה!* אנא שלח [בקשת משיכה ב-GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 או אם אתה לא מרגיש בנוח לעשות את זה, [פתח בעיה](https://github.com/cobbzilla/mobiletto-cli/issues)

 כאשר אתה יוצר בעיה חדשה של GitHub על תרגום, אנא עשה:
 * כלול את כתובת האתר של הדף (העתק/הדבק משורת הכתובת של הדפדפן)
 * כלול את הטקסט המדויק השגוי (העתק/הדבק מדפדפן)
 * נא לתאר מה לא בסדר -- האם התרגום שגוי? הפורמט שבור איכשהו?
 * אנא הציעו הצעה לתרגום טוב יותר, או כיצד יש לעצב את הטקסט כראוי
 * **תודה!**

 ### מקור
 * [mobiletto-cli ב-GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli ב-npm](https://www.npmjs.com/package/mobiletto-cli)

 # תוכן
 * [התקנה ושימוש](#התקנה-ושימוש)
 * [חבילת npm](#npm-package)
 * [ממקור](#ממקור)
 * [חיבורים](#חיבורים)
 * [צור חיבור](#Create-a-connection)
 * [רשימת חיבורים](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [הסר חיבור](#Remove-a-connection)
 * [הסר את כל החיבורים](#הסר את כל החיבורים)
 * [עבודה עם אחסון](#עבודה עם אחסון)
 * [קבצי רשימה](#List-files)
 * [כתוב קובץ ל-stdout](#Write-a-file-to-stdout)
 * [העתק קבצים](#Copy-files)
 * [מחק קבצים](#Delete-files)
 * [הצג מטא נתונים](#View-metadata)
 * [ספריות מראה](#ספריות מראה)

 ## התקנה ושימוש
 אתה יכול להתקין ולהפעיל `mobiletto-cli` באמצעות npm או ישירות מהמקור.

 ### חבילת npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ממקור
 כדי לרוץ מהמקור, תזדקק ל-nodejs v16+ וחוט

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## חיבורים
 כל אחסון mobiletto נגיש דרך חיבור.

 Mobiletto תומך כיום בחיבורים לאחסון מערכת הקבצים המקומית ולדליים של Amazon S3.

 החיבורים מצוינים על ידי אובייקט JSON שנראה כך:

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

 לפרטים מלאים על כל האפשרויות והערכים והמשמעויות שלהן, ראה את
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### צור חיבור
 כדי ליצור חיבור חדש, אנו זקוקים לאחד מאובייקטי JSON אלה.

 אנחנו יכולים ליצור אחד באופן אינטראקטיבי, או לספק אחד באמצעות קובץ או JSON מילולי:

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

 ### רשימת חיבורים
 רשימת חיבורים זמינים:

    mo connect -l
    mo connect --list

 ### dump חיבור JSON תצורת
 הצג את תצורת ה-JSON המלאה עבור חיבור. **אזהרה** זה ידפיס מפתחות וסודות ל-stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### הסר חיבור
 הסר חיבור בודד:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### הסר את כל החיבורים
 הסר את כל החיבורים:

    mo connect -R
    mo connect --remove-all

 ## עבודה עם אחסון
 לאחר שיצרת כמה חיבורים, השתמש `ls` , `cp` , `rm` , `meta` ו- `mirror`
 לעבוד איתם.

 כל נתיב קובץ שאתה מספק לפקודה חייב להיות עם קידומת שם החיבור
 זה מתייחס ל. בדוגמאות שלהלן, אנו מניחים שקיימים שני חיבורים בשם `conn1` ו- `conn2`

 ### רשימת קבצים
 הפלט של פקודת רשימה היא סדרה של אובייקטי JSON, אחד בכל שורה, המייצגים את הקבצים
 מצאתי. לאובייקטים האלה יהיו `name` שם `type` , ואולי שדות אחרים.

    mo ls conn1/some/path

 רשימת קבצים באופן רקורסיבי:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **הערת אחסון מוצפן**: רישום רקורסיבי עדיין אינו נתמך עבור חיבורים מוצפנים.
 אתה יכול לרשום רק ספרייה אחת של קבצים בכל פעם.

 רשום קבצים בצורה מילולית (JSON מודפס יפה):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 רשום קבצים באופן רקורסיבי ומילולי:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 הצג עזרה עבור פקודת `ls` , מתאר את כל האפשרויות:

    mo ls -h
    mo ls --help

 ### כתוב קובץ ל-stdout
 הפקודה `cat` תדפיס קובץ ל-stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 ברוח UNIX האמיתית *(אבל בהחלט לא התרגול!)* הפקודה 'חתול' של `cat` **לא לוקחת אופציות**
 מלבד `-h` / `--help` כדי להציג מידע מועיל.

 ### העתק קבצים
 העתק קובץ בודד ממכשיר נייד אחד לאחר:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 העתק קובץ בודד מ-mobiltto אחד לאחר, ושנה את שמו ביעד:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 העתק ספרייה באופן רקורסיבי:

    mo cp -r conn1/some/directory conn2/some/dest/

 הצג עזרה עבור פקודת `cp` , מתאר את כל האפשרויות:

    mo cp -h
    mo cp --help

 הערה: העתקת הקבצים אינה מהירה במיוחד, מכיוון שכרגע היא דורשת קובץ זמני מתווך.

 ### מחק קבצים
 מחק קובץ בודד:

    mo rm conn1/some/file.txt

 מחק קובץ בודד ואל תתלונן על שגיאות כלשהן:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 מחק ספרייה:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 מחק ספרייה ואל תתלונן על שגיאות כלשהן:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### הצג מטא נתונים
 לעתים קרובות כדאי לדעת את המטא נתונים של קובץ, מבלי להוריד את כל הקובץ.

 Mobiletto מסוגלת לדווח על גודל הקובץ וזמן השינוי האחרון, בנוסף לשם וסוג.

 כדי להציג מטא נתונים:

    mo meta conn1/some/file.txt

 ### ספריות מראה
 שיקוף הוא יותר ממקרה מיוחד של `cp` , זוהי פקודת mobiletto נפרדת שעוטפת את
 פעולת העתקה; הוא ממשיך גם כאשר מתרחשות שגיאות, ועוקב אחר ספירת הצלחות ושגיאות.

 כדי לשקף הכל מ-conn1 ל-conn2:

    mo mirror conn1 conn2

 כדי לשקף ספריית משנה:

    mo mirror conn1/some/subdir conn2

 כדי לשקף ספריית משנה לתוך ספריית משנה אחרת:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
