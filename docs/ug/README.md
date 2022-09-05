mobiletto-client
 =============
 [Mobiletto] ئۈچۈن بۇيرۇق قۇرى كۆرۈنمە يۈزى (CLI) (https://www.npmjs.com/package/mobiletto)
 ساقلاش.

 Mobiletto ئامازون S3 ، Backblaze B2 ۋە يەرلىك ھۆججەت سىستېمىسىغا ئۇلىنىشنى قوللايدۇ.

 # بۇنى باشقا تىلدا ئوقۇڭ
 بۇ README.md ھۆججىتى [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) ئارقىلىق تەرجىمە قىلىندى
 ** [Google تەرجىمىسى قوللايدىغان ھەر بىر تىل](https://cloud.google.com/translate/docs/languages)! **

 مەن ئۇنىڭ مۇكەممەل ئەمەسلىكىگە ئىشىنىمەن ، ئەمما ئۇنىڭ ھېچ ئىشتىن ياخشى بولۇشىنى ئۈمىد قىلىمەن!

 [🇸🇦 ئەرەبچە](docs / ar / README.md)
 [🇧🇩 بېنگالچە](docs / bn / README.md)
 [🇩🇪 گېرمانچە](docs / de / README.md)
 [🇺🇸 ئىنگلىزچە](docs / en / README.md)
 [🇪🇸 ئىسپانچە](docs / es / README.md)
 [🇫🇷 فىرانسۇزچە](docs / fr / README.md)
 [🇹🇩 Hausa](docs / ha / README.md)
 [🇮🇳 Hindi](docs / hi / README.md)
 [🇮🇩 ھىندونېزىيە](docs / id / README.md)
 [🇮🇹 ئىتالىيانچە](docs / it / README.md)
 [🇯🇵 ياپونچە](docs / ja / README.md)
 [🇰🇷 كورېيەچە](docs / ko / README.md)
 [🇮🇳 Maranthi](docs / mr / README.md)
 [🇵🇱 پولشاچە](docs / pl / README.md)
 [🇧🇷 پورتۇگالچە](docs / pt / README.md)
 [🇷🇺 رۇسچە](docs / ru / README.md)
 [🇰🇪 Swahili](docs / sw / README.md)
 [Ag Tagalog](docs / tl / README.md)
 [🇹🇷 تۈركچە](docs / tr / README.md)
 [🇵🇰 ئوردۇچە](docs / ur / README.md)
 [🇻🇳 ۋېيتنامچە](docs / vi / README.md)
 [🇨🇳 خەنزۇچە](docs / zh / README.md)


 ** [📚 ... بارلىق تىللار ...](docs / README.md) **
 ----

 ### README نىڭ بۇ تەرجىمىسىدە مەسىلە بارمۇ؟
 ئەسلى [README] نىڭ بۇ ئالاھىدە تەرجىمىسى (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 كەمتۈك بولۇشى مۇمكىن - * تۈزىتىشلەرنى قارشى ئالىمىز! * [GitHub غا تارتىش ئىلتىماسى] ئەۋەتىڭ.
 ياكى بۇنداق قىلىشقا راھەت بولمىساڭىز ، [مەسىلە ئېچىڭ](https://github.com/cobbzilla/mobiletto-cli/issues)

 تەرجىمىگە مۇناسىۋەتلىك يېڭى GitHub مەسىلىسىنى قۇرغاندا ، قىلىڭ:
 * بەت ئادرېسىنى ئۆز ئىچىگە ئالىدۇ (توركۆرگۈ ئادرېس ستونىدىن كۆچۈرۈش / چاپلاش)
 * خاتا بولغان تېكىستنى ئۆز ئىچىگە ئالىدۇ (توركۆرگۈدىن كۆچۈرۈش / چاپلاش)
 * نېمىنىڭ خاتا ئىكەنلىكىنى تەسۋىرلەپ بېرىڭ - تەرجىمە خاتامۇ؟ فورمات قانداقتۇر بۇزۇلدىمۇ؟
 * ياخشىراق تەرجىمە ياكى تېكىستنى قانداق فورماتلاش كېرەكلىكى توغرىسىدا تەكلىپ بىلەن تەمىنلەڭ
 * ** رەھمەت سىزگە! **

 ### مەنبە
 * [GitHub دىكى mobiletto- خېرىدار](https://github.com/cobbzilla/mobiletto-cli)
 * [npm دىكى mobiletto- خېرىدار](https://www.npmjs.com/package/mobiletto-cli)

 # مەزمۇن
 * [قاچىلاش ۋە ئىشلىتىش](# قاچىلاش-ئىشلىتىش)
 * [npm بولىقى](# npm-pack)
 * [مەنبەدىن](# مەنبەدىن)
 * [ئۇلىنىش](# ئۇلىنىش)
 * [ئۇلىنىش قۇرۇش](# قۇرۇش-ئۇلىنىش)
 * [تىزىملىك ئۇلىنىشى](# تىزىملىك-ئۇلىنىش)
 * [ئەخلەت ئۇلاش JSON config](# Dump-connection-JSON-config)
 * [ئۇلىنىشنى ئۆچۈرۈڭ](# Remove-a-connection)
 * [بارلىق ئۇلىنىشلارنى ئۆچۈرۈڭ](# بارلىق ئۇلىنىشلارنى ئۆچۈرۈڭ)
 * [ساقلاش بىلەن ئىشلەش](# ساقلاش بىلەن ئىشلەش)
 * [ھۆججەتلەرنى تىزىش](# تىزىملىك-ھۆججەتلەر)
 * [ھۆججەتنى stdout غا يېزىڭ](# ھۆججەتتىن ھۆججەتكە يېزىش)
 * [ھۆججەتلەرنى كۆچۈرۈش](# ھۆججەتلەرنى كۆچۈرۈش)
 * [ھۆججەتلەرنى ئۆچۈرۈش](# ھۆججەتلەرنى ئۆچۈرۈش)
 * [مېتا سانلىق مەلۇماتنى كۆرۈش](# View-metadata)
 * [ئەينەك مۇندەرىجىسى](# ئەينەك مۇندەرىجىسى)

 ## قاچىلاش ۋە ئىشلىتىش
 Npm ئارقىلىق ياكى بىۋاسىتە مەنبەدىن `mobiletto-cli` نى قاچىلاپ ئىجرا قىلالايسىز.

 ### npm بولىقى
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### مەنبەدىن
 مەنبەدىن ئىجرا قىلىش ئۈچۈن nodejs v16 + ۋە يىپقا ئېھتىياجلىق بولىسىز

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## ئۇلىنىش
 Mobiletto ساقلىغۇچنىڭ ھەممىسى ئۇلىنىش ئارقىلىق زىيارەت قىلىنىدۇ.

 Mobiletto ھازىر يەرلىك ھۆججەت سىستېمىسى ساقلاش ۋە ئامازون S3 چېلەكلىرىگە ئۇلىنىشنى قوللايدۇ.

 ئۇلىنىش JSON ئوبيېكتى تەرىپىدىن بەلگىلىنىدۇ:

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

 بارلىق تاللاشلار ۋە ئۇلارنىڭ قىممىتى ۋە مەنىسى توغرىسىدىكى تەپسىلاتلارنى كۆرۈڭ
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### ئۇلىنىش قۇر
 يېڭى ئۇلىنىش ھاسىل قىلىش ئۈچۈن ، بىز بۇ JSON ئوبيېكتلىرىدىن بىرىگە ئېھتىياجلىق.

 بىز ئۆز-ئارا تەسىر كۆرسىتەلەيمىز ياكى ھۆججەت ياكى JSON ئارقىلىق بىۋاسىتە تەمىنلىيەلەيمىز:

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

 ### تىزىملىك ئۇلىنىشى
 ئىشلەتكىلى بولىدىغان ئۇلىنىشلارنى تىزىڭ:

    mo connect -l
    mo connect --list

 ### ئۇلىنىش JSON سەپلىمىسىنى تاشلاش
 ئۇلىنىش ئۈچۈن تولۇق JSON سەپلىمىسىنى كۆرسىتىڭ. ** ئاگاھلاندۇرۇش ** بۇ stdout غا ئاچقۇچ ۋە مەخپىيەتلىكلەرنى بېسىپ چىقىرىدۇ.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ئۇلىنىشنى ئۆچۈرۈڭ
 بىرلا ئۇلىنىشنى ئۆچۈرۈڭ:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### بارلىق ئۇلىنىشلارنى ئۆچۈرۈڭ
 بارلىق ئۇلىنىشلارنى ئۆچۈرۈڭ:

    mo connect -R
    mo connect --remove-all

 ## ساقلاش بىلەن ئىشلەش
 بەزى ئۇلىنىشلارنى قۇرغاندىن كېيىن ، « `ls` » ، « `cp` ، `rm` ، `meta` ۋە `mirror` مەشغۇلاتىنى ئىشلىتىڭ.
 ئۇلار بىلەن بىللە ئىشلەش.

 سىز بۇيرۇق بىلەن تەمىنلىگەن ھەر بىر ھۆججەت يولى چوقۇم ئۇلىنىش ئىسمى بىلەن قوشۇلۇشى كېرەك
 ئۇ كۆرسىتىدۇ. تۆۋەندىكى مىساللاردا ، « `conn1` `conn2` دەپ ئاتىلىدىغان ئىككى ئۇلىنىش بار دەپ پەرەز قىلىمىز

 ### ھۆججەتلەرنى تىزىڭ
 تىزىملىك بۇيرۇقىنىڭ چىقىرىلىشى بىر يۈرۈش JSON ئوبيېكتى بولۇپ ، ھەر بىر قۇر ھۆججەتلەرگە ۋەكىللىك قىلىدۇ
 تېپىلدى. بۇ جىسىملارنىڭ `name` » ۋە « `type` » بولىدۇ ، بەلكىم باشقا ساھە بولۇشى مۇمكىن.

    mo ls conn1/some/path

 ھۆججەتلەرنى قايتا-قايتا تىزىڭ:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** شىفىرلانغان ساقلاش خاتىرىسى **: شىفىرلانغان ئۇلىنىش ئۈچۈن قايتا-قايتا تىزىملىك تېخى قوللىمايدۇ.
 بىرلا ۋاقىتتا ھۆججەتلەرنىڭ بىر مۇندەرىجىسىنى تىزىپ چىقالايسىز.

 ھۆججەتلەرنى ئاغزاكى تىزىڭ (چىرايلىق بېسىلغان JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ھۆججەتلەرنى تەكرار ۋە ئاغزاكى تىزىڭ:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 « `ls` » بۇيرۇقىنىڭ ياردەملىرىنى كۆرۈڭ ، بارلىق تاللاشلارنى تەسۋىرلەيدۇ:

    mo ls -h
    mo ls --help

 ### stdout غا ھۆججەت يېزىڭ
 `cat` بۇيرۇقى ھۆججەتنى stdout غا بېسىپ چىقىرىدۇ:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 ھەقىقىي UNIX روھىدا * (ئەمما ئەمەلىيەتتە ئەمەلىيەت ئەمەس!) * Mobiletto نىڭ « `cat` » بۇيرۇقى ** ھېچقانداق تاللاش ئېلىپ بارمايدۇ **
 پايدىلىق ئۇچۇرلارنى كۆرسىتىش ئۈچۈن `-h` / `--help` دىن باشقا.

 ### ھۆججەتلەرنى كۆچۈرۈڭ
 بىر ھۆججەتنى بىر كۆچمە تېلېفوندىن يەنە بىر ھۆججەتكە كۆچۈرۈڭ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 بىر ھۆججەتنى بىر كۆچمە تېلېفوندىن يەنە بىر ھۆججەتكە كۆچۈرۈپ ، مەنزىلگە ئۆزگەرتىڭ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 مۇندەرىجىنى قايتا-قايتا كۆچۈرۈڭ:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` بۇيرۇقىنىڭ ياردەملىرىنى كۆرۈڭ ، بارلىق تاللاشلارنى تەسۋىرلەيدۇ:

    mo cp -h
    mo cp --help

 ئەسكەرتىش: ھۆججەت كۆچۈرۈش ئۇنچە تېز ئەمەس ، چۈنكى ئۇ ھازىر ۋاسىتىلىك temp ھۆججىتىنى تەلەپ قىلىدۇ.

 ### ھۆججەتلەرنى ئۆچۈرۈڭ
 بىر ھۆججەتنى ئۆچۈرۈڭ:

    mo rm conn1/some/file.txt

 بىر ھۆججەتنى ئۆچۈرۈڭ ، خاتالىقلاردىن ئاغرىنماڭ:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 مۇندەرىجىنى ئۆچۈرۈڭ:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 مۇندەرىجىنى ئۆچۈرۈڭ ، خاتالىقلاردىن ئاغرىنماڭ:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### مېتا سانلىق مەلۇماتنى كۆرۈڭ
 پۈتۈن ھۆججەتنى چۈشۈرمەي تۇرۇپ ، ھۆججەتنىڭ مېتا سانلىق مەلۇماتلىرىنى بىلىش ھەمىشە پايدىلىق.

 Mobiletto ئىسىم ۋە تىپتىن باشقا ، ھۆججەتنىڭ چوڭ-كىچىكلىكى ۋە ئاخىرقى قېتىم ئۆزگەرتىلگەن ۋاقىتنى دوكلات قىلالايدۇ.

 مېتا سانلىق مەلۇماتنى كۆرۈش:

    mo meta conn1/some/file.txt

 ### ئەينەك مۇندەرىجىسى
 ئەينەك قىلىش «cp» نىڭ ئالاھىدە ئەھۋاللىرىدىن باشقا ، ئۇ ئوراپ تۇرىدىغان ئايرىم `cp` بۇيرۇقى
 كۆپەيتىش مەشغۇلاتى خاتالىق يۈز بەرگەن تەقدىردىمۇ داۋاملىشىدۇ ، مۇۋەپپەقىيەت ۋە خاتالىقلارنىڭ سانىنى ئىز قوغلايدۇ.

 Conn1 دىن conn2 غىچە بولغان ھەممە نەرسىنى ئەينەك قىلىش:

    mo mirror conn1 conn2

 تارماق مۇندەرىجىنى ئەينەك قىلىش:

    mo mirror conn1/some/subdir conn2

 تارماق مۇندەرىجىنى باشقا تارماق مۇندەرىجىگە ئەينەك قىلىش:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
