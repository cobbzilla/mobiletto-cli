mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) க்கான கட்டளை-வரி இடைமுகம் (CLI)
 சேமிப்பு.

 Mobiletto Amazon S3, Backblaze B2 மற்றும் உள்ளூர் கோப்பு முறைமைகளுக்கான இணைப்புகளை ஆதரிக்கிறது.

 # இதை வேறொரு மொழியில் படியுங்கள்
 இந்த README.md ஆவணம் [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) வழியாக மொழிபெயர்க்கப்பட்டுள்ளது.
 **[Google மொழிபெயர்ப்பால் ஆதரிக்கப்படும் ஒவ்வொரு மொழியும்](https://cloud.google.com/translate/docs/languages)!**

 இது சரியானது அல்ல என்று நான் உறுதியாக நம்புகிறேன், ஆனால் இது எதையும் விட சிறந்தது என்று நம்புகிறேன்!

 [🇸🇦 அரபு](../ar/README.md)
 [🇧🇩 பெங்காலி](../bn/README.md)
 [🇩🇪 ஜெர்மன்](../de/README.md)
 [🇺🇸 ஆங்கிலம்](../en/README.md)
 [🇪🇸 ஸ்பானிஷ்](../es/README.md)
 [🇫🇷 பிரஞ்சு](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 இந்தி](../hi/README.md)
 [🇮🇩 இந்தோனேசிய](../id/README.md)
 [🇮🇹 இத்தாலியன்](../it/README.md)
 [🇯🇵 ஜப்பானிய](../ja/README.md)
 [🇰🇷 கொரியன்](../ko/README.md)
 [🇮🇳 மராந்தி](../mr/README.md)
 [🇵🇱 போலந்து](../pl/README.md)
 [🇧🇷 போர்த்துகீசியம்](../pt/README.md)
 [🇷🇺 ரஷியன்](../ru/README.md)
 [🇰🇪 சுவாஹிலி](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 துருக்கியம்](../tr/README.md)
 [🇵🇰 உருது](../ur/README.md)
 [🇻🇳 வியட்நாம்](../vi/README.md)
 [🇨🇳 சீன](../zh/README.md)


 **[📚 ... அனைத்து மொழிகளும் ...](../README.md)**
 ----

 ### README இன் இந்த மொழிபெயர்ப்பில் சிக்கல் உள்ளதா?
 அசல் [README] இன் இந்த குறிப்பிட்ட மொழிபெயர்ப்பு (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 குறைபாடுகள் இருக்கலாம் -- *திருத்தங்கள் மிகவும் வரவேற்கப்படுகின்றன!* தயவுசெய்து [GitHub இல் இழுக்கும் கோரிக்கை](https://github.com/cobbzilla/mobiletto-cli/pulls),
 அல்லது அதைச் செய்வது உங்களுக்கு வசதியாக இல்லை என்றால், [சிக்கலைத் திறக்கவும்](https://github.com/cobbzilla/mobiletto-cli/issues)

 மொழிபெயர்ப்பில் புதிய GitHub சிக்கலை உருவாக்கும் போது, தயவுசெய்து பின்வருவனவற்றைச் செய்யுங்கள்:
 * பக்க URL ஐச் சேர்க்கவும் (உலாவி முகவரிப் பட்டியில் இருந்து நகலெடுத்து ஒட்டவும்)
 * தவறான உரையைச் சேர்க்கவும் (உலாவியிலிருந்து நகலெடுக்கவும்/ஒட்டவும்)
 * என்ன தவறு என்று விவரிக்கவும் -- மொழிபெயர்ப்பு தவறானதா? வடிவமைப்பு எப்படியாவது உடைந்துவிட்டதா?
 * சிறந்த மொழிபெயர்ப்பு அல்லது உரையை எவ்வாறு சரியாக வடிவமைக்க வேண்டும் என்ற ஆலோசனையை தயவுசெய்து வழங்கவும்
 * **நன்றி!**

 ### ஆதாரம்
 * [GitHub இல் மொபைலெட்டோ-கிளை](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # உள்ளடக்கம்
 * [நிறுவல் மற்றும் பயன்பாடு](#நிறுவல் மற்றும் பயன்பாடு)
 * [npm தொகுப்பு](#npm-package)
 * [மூலத்திலிருந்து](#மூலத்திலிருந்து)
 * [இணைப்புகள்](#இணைப்புகள்)
 * [இணைப்பை உருவாக்கு](#Create-a-connection)
 * [பட்டியல் இணைப்புகள்](#பட்டியல்-இணைப்புகள்)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [இணைப்பை அகற்று](#இணைப்பை அகற்று)
 * [எல்லா இணைப்புகளையும் அகற்று](#அனைத்து இணைப்புகளையும் அகற்று)
 * [சேமிப்புடன் வேலை செய்தல்](#சேமிப்புடன் வேலை செய்தல்)
 * [பட்டியல் கோப்புகள்](#பட்டியல் கோப்புகள்)
 * [stdout க்கு ஒரு கோப்பை எழுதவும்](#Write-a-file-to-stdout)
 * [கோப்புகளை நகலெடு](#நகல்-கோப்புகள்)
 * [கோப்புகளை நீக்கு](#நீக்கு-கோப்புகள்)
 * [மெட்டாடேட்டாவைக் காண்க](#வியூ-மெட்டாடேட்டா)
 * [மிரர் கோப்பகங்கள்](#மிரர்-கோப்பகங்கள்)

 ## நிறுவல் மற்றும் பயன்பாடு
 நீங்கள் `mobiletto-cli` ஐ நிறுவி இயக்கலாம்.

 ### npm தொகுப்பு
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### மூலத்திலிருந்து
 மூலத்திலிருந்து இயக்க, உங்களுக்கு nodejs v16+ மற்றும் நூல் தேவைப்படும்

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## இணைப்புகள்
 அனைத்து mobiletto சேமிப்பகமும் ஒரு இணைப்பு மூலம் அணுகப்படுகிறது.

 Mobiletto தற்போது உள்ளூர் கோப்பு முறைமை சேமிப்பு மற்றும் Amazon S3 பக்கெட்டுகளுக்கான இணைப்புகளை ஆதரிக்கிறது.

 இணைப்புகள் JSON ஆப்ஜெக்ட் மூலம் குறிப்பிடப்பட்டவை இது போன்றது:

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

 அனைத்து விருப்பங்கள் மற்றும் அவற்றின் மதிப்புகள் மற்றும் அர்த்தங்கள் பற்றிய முழு விவரங்களுக்கு, பார்க்கவும்
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### இணைப்பை உருவாக்கவும்
 புதிய இணைப்பை உருவாக்க, இந்த JSON ஆப்ஜெக்ட்களில் ஒன்று நமக்குத் தேவை.

 நாம் ஊடாடும் வகையில் ஒன்றை உருவாக்கலாம் அல்லது ஒரு கோப்பு அல்லது JSON மொழியில் ஒன்றை வழங்கலாம்:

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

 ### பட்டியல் இணைப்புகள்
 கிடைக்கக்கூடிய இணைப்புகளை பட்டியலிடுங்கள்:

    mo connect -l
    mo connect --list

 ### டம்ப் இணைப்பு JSON கட்டமைப்பு
 இணைப்புக்கான முழு JSON கட்டமைப்பைக் காட்டு. **எச்சரிக்கை** இது stdout க்கு விசைகளையும் ரகசியங்களையும் அச்சிடும்.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### இணைப்பை அகற்று
 ஒற்றை இணைப்பை அகற்றவும்:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### அனைத்து இணைப்புகளையும் அகற்று
 அனைத்து இணைப்புகளையும் அகற்று:

    mo connect -R
    mo connect --remove-all

 ## சேமிப்பகத்துடன் வேலை செய்கிறது
 நீங்கள் சில இணைப்புகளை உருவாக்கியதும், `ls` , `cp` , `rm` , `meta` மற்றும் `mirror` செயல்பாடுகளைப் பயன்படுத்தவும்.
 அவர்களுடன் வேலை செய்ய.

 கட்டளைக்கு நீங்கள் வழங்கும் ஒவ்வொரு கோப்பு பாதையும் இணைப்பின் பெயருடன் முன்னொட்டாக இருக்க வேண்டும்
 அது குறிக்கிறது. கீழே உள்ள எடுத்துக்காட்டுகளில், `conn1` மற்றும் `conn2` என்ற பெயரில் இரண்டு இணைப்புகள் இருப்பதாகக் கருதுகிறோம்

 ### பட்டியல் கோப்புகள்
 பட்டியல் கட்டளையின் வெளியீடு JSON பொருள்களின் வரிசையாகும், ஒரு வரிக்கு ஒன்று, கோப்புகளைக் குறிக்கிறது
 கண்டறியப்பட்டது. இந்தப் பொருள்களுக்கு `name` மற்றும் `type` வகை` மற்றும் பிற புலங்கள் இருக்கலாம்.

    mo ls conn1/some/path

 கோப்புகளை மீண்டும் மீண்டும் பட்டியலிடுங்கள்:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **மறைகுறியாக்கப்பட்ட சேமிப்பக குறிப்பு**: மறைகுறியாக்கப்பட்ட இணைப்புகளுக்கு சுழல்நிலை பட்டியல் இன்னும் ஆதரிக்கப்படவில்லை.
 நீங்கள் ஒரு நேரத்தில் ஒரு கோப்பகத்தை மட்டுமே பட்டியலிட முடியும்.

 கோப்புகளை வார்த்தைகளால் பட்டியலிடவும் (அழகான அச்சிட JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 கோப்புகளை சுழல்நிலையாகவும் வாய்மொழியாகவும் பட்டியலிடவும்:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` கட்டளைக்கான உதவியைப் பார்க்கவும், அனைத்து விருப்பங்களையும் விவரிக்கிறது:

    mo ls -h
    mo ls --help

 ### stdout க்கு ஒரு கோப்பை எழுதவும்
 `cat` கட்டளை ஒரு கோப்பை stdout க்கு அச்சிடும்:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 உண்மையான UNIX ஆவியில் *(இன்னும் நிச்சயமாக நடைமுறை இல்லை!)* mobiletto இன் `cat` கட்டளை **எந்த விருப்பமும் எடுக்காது**
 உதவிகரமான தகவலைக் காட்ட `-h` / `--help` தவிர.

 ### கோப்புகளை நகலெடுக்கவும்
 ஒரு கோப்பினை ஒரு மொபைலில் இருந்து மற்றொரு மொபைலுக்கு நகலெடுக்கவும்:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ஒரு கோப்பினை ஒரு மொபைலில் இருந்து மற்றொரு மொபைலுக்கு நகலெடுத்து, அதை இலக்கில் மறுபெயரிடவும்:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 ஒரு கோப்பகத்தை மீண்டும் மீண்டும் நகலெடுக்கவும்:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` கட்டளைக்கான உதவியைப் பார்க்கவும், அனைத்து விருப்பங்களையும் விவரிக்கிறது:

    mo cp -h
    mo cp --help

 குறிப்பு: கோப்பு நகலெடுப்பது மிக வேகமாக இல்லை, ஏனெனில் அதற்கு தற்போது இடைநிலை தற்காலிக கோப்பு தேவைப்படுகிறது.

 ### கோப்புகளை நீக்கு
 ஒரு கோப்பை நீக்கு:

    mo rm conn1/some/file.txt

 ஒரு கோப்பை நீக்கி, பிழைகள் பற்றி புகார் செய்ய வேண்டாம்:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 கோப்பகத்தை நீக்கு:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ஒரு கோப்பகத்தை நீக்கி, பிழைகள் பற்றி புகார் செய்ய வேண்டாம்:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### மெட்டாடேட்டாவைப் பார்க்கவும்
 முழு கோப்பையும் பதிவிறக்காமல், ஒரு கோப்பிற்கான மெட்டாடேட்டாவை அறிந்துகொள்வது பெரும்பாலும் பயனுள்ளதாக இருக்கும்.

 Mobiletto ஆனது பெயர் மற்றும் வகைக்கு கூடுதலாக, கோப்பு அளவு மற்றும் கடைசியாக மாற்றியமைக்கப்பட்ட நேரத்தைப் புகாரளிக்க முடியும்.

 மெட்டாடேட்டாவைப் பார்க்க:

    mo meta conn1/some/file.txt

 ### மிரர் கோப்பகங்கள்
 பிரதிபலிப்பு என்பது `cp` இன் சிறப்பு நிகழ்வை விட அதிகம், இது ஒரு தனி mobiletto கட்டளையாகும்
 நகல் செயல்பாடு; பிழைகள் ஏற்பட்டாலும் அது தொடர்கிறது, மேலும் வெற்றிகள் மற்றும் பிழைகளின் எண்ணிக்கையைக் கண்காணிக்கவும்.

 conn1 இலிருந்து conn2 வரை அனைத்தையும் பிரதிபலிக்க:

    mo mirror conn1 conn2

 துணை அடைவை பிரதிபலிக்க:

    mo mirror conn1/some/subdir conn2

 ஒரு துணை அடைவை மற்றொரு துணை அடைவில் பிரதிபலிக்க:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
