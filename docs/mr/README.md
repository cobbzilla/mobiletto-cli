mobiletto-cli
 ==============
 [mobiletto](https://www.npmjs.com/package/mobiletto) साठी कमांड-लाइन इंटरफेस (CLI)
 स्टोरेज

 Mobiletto Amazon S3, Backblaze B2 आणि स्थानिक फाइलसिस्टमशी जोडणीचे समर्थन करते.

 # हे दुसऱ्या भाषेत वाचा
 या README.md दस्तऐवजाचे भाषांतर [hokeylisation](https://github.com/cobbzilla/hokeylization) द्वारे केले गेले आहे.
 **[Google Translate द्वारे समर्थित प्रत्येक भाषा](https://cloud.google.com/translate/docs/languages)!**

 मला खात्री आहे की ते परिपूर्ण नाही, परंतु मला आशा आहे की ते काहीही नसण्यापेक्षा चांगले आहे!

 [🇸🇦 अरबी](../ar/README.md)
 [🇧🇩 बंगाली](../bn/README.md)
 [🇩🇪 जर्मन](../de/README.md)
 [🇺🇸 इंग्रजी](../en/README.md)
 [🇪🇸 स्पॅनिश](../es/README.md)
 [🇫🇷 फ्रेंच](../fr/README.md)
 [🇹🇩 हौसा](../ha/README.md)
 [🇮🇳 हिंदी](../hi/README.md)
 [🇮🇩 इंडोनेशियन](../id/README.md)
 [🇮🇹 इटालियन](../it/README.md)
 [🇯🇵 जपानी](../ja/README.md)
 [🇰🇷 कोरियन](../ko/README.md)
 [🇮🇳 मराठी](../mr/README.md)
 [🇵🇱 पोलिश](../pl/README.md)
 [🇧🇷 पोर्तुगीज](../pt/README.md)
 [🇷🇺 रशियन](../ru/README.md)
 [🇰🇪 स्वाहिली](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 तुर्की](../tr/README.md)
 [🇵🇰 उर्दू](../ur/README.md)
 [🇻🇳 व्हिएतनामी](../vi/README.md)
 [🇨🇳 चीनी](../zh/README.md)


 **[📚 ... सर्व भाषा ...](../README.md)**
 ----

 ### README च्या या भाषांतरात काही अडचण आहे का?
 मूळ [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) चे हे विशिष्ट भाषांतर
 सदोष असू शकतात -- *दुरुस्तीचे स्वागत आहे!* कृपया [GitHub वर पुल विनंती](https://github.com/cobbzilla/mobiletto-cli/pulls) पाठवा,
 किंवा तुम्हाला ते करण्यात सोयीस्कर नसल्यास, [समस्या उघडा](https://github.com/cobbzilla/mobiletto-cli/issues)

 जेव्हा तुम्ही भाषांतराबद्दल नवीन GitHub समस्या तयार करता, तेव्हा कृपया हे करा:
 * पृष्ठ URL समाविष्ट करा (ब्राउझर अॅड्रेस बारवरून कॉपी/पेस्ट करा)
 * चुकीचा मजकूर समाविष्ट करा (ब्राउझरवरून कॉपी/पेस्ट करा)
 * कृपया काय चुकीचे आहे याचे वर्णन करा -- भाषांतर चुकीचे आहे का? स्वरूपन काहीसे तुटले आहे का?
 * कृपया अधिक चांगल्या भाषांतराची किंवा मजकूर योग्यरित्या कसा फॉरमॅट केला जावा यासाठी सुचवा
 * **धन्यवाद!**

 # सामग्री
 * [स्रोत](#स्रोत)
 * [समर्थन आणि निधी](#समर्थन-आणि-निधी)
 * [स्थापना आणि वापर](#स्थापना-आणि-वापर)
 * [npm पॅकेज](#npm-पॅकेज)
 * [स्रोताकडून](#स्रोत-स्रोत)
 * [कनेक्शन](#कनेक्शन)
 * [कनेक्शन तयार करा](#Create-a-connection)
 * [सूची कनेक्शन](#सूची-कनेक्शन)
 * [डंप कनेक्शन JSON कॉन्फिगरेशन](#Dump-connection-JSON-config)
 * [कनेक्शन काढा](#रिमूव्ह-ए-कनेक्शन)
 * [सर्व कनेक्शन काढा](#रिमूव्ह-सर्व-कनेक्शन)
 * [स्टोरेजसह काम करणे](#वर्किंग-विथ-स्टोरेज)
 * [सूची फायली](#सूची-फाईल्स)
 * [stdout वर एक फाइल लिहा](#Write-a-file-to-stdout)
 * [कॉपी फाइल्स](#कॉपी-फाईल्स)
 * [फाईल्स हटवा](#Delete-files)
 * [मेटाडेटा पहा](#दृश्य-मेटाडेटा)
 * [मिरर डिरेक्टरी](#मिरर-डिरेक्टरी)

 ### स्त्रोत
 * [GitHub वर mobileetto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## समर्थन आणि निधी
 मी एक प्रोफेशनल ओपन सोर्स सॉफ्टवेअर डेव्हलपर बनण्याचा प्रयत्न करत आहे. मध्ये काम करत आहे
 अनेक वर्षांपासून सॉफ्टवेअर उद्योगात, मी यशस्वी कंपन्या सुरू केल्या आहेत आणि त्या सार्वजनिक कंपन्यांना विकल्या आहेत.
 अलीकडे मी माझी नोकरी गमावली, आणि माझ्याकडे खरोखर दुसरे कोणतेही काम नाही

 म्हणून मी उपयुक्त सॉफ्टवेअर लिहिण्याचा प्रयत्न करणार आहे आणि ते कार्य करते का ते पाहणार आहे

 जर तुम्हाला हे सॉफ्टवेअर वापरून आनंद वाटत असेल तर मी अगदी मनापासून आभारी आहे
 सर्वात लहान [पॅट्रिऑनद्वारे मासिक योगदान](https://www.patreon.com/cobbzilla)

 *धन्यवाद!*

 ## स्थापना आणि वापर
 तुम्ही npm द्वारे किंवा थेट स्त्रोतावरून `mobiletto-cli` इंस्टॉल आणि चालवू शकता.

 ### npm पॅकेज
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### स्त्रोताकडून
 स्त्रोतावरून चालवण्यासाठी, तुम्हाला nodejs v16+ आणि यार्नची आवश्यकता असेल

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## कनेक्शन
 सर्व मोबाईल स्टोरेजमध्ये कनेक्शनद्वारे प्रवेश केला जातो.

 Mobiletto सध्या स्थानिक फाइल सिस्टम स्टोरेज आणि Amazon S3 बकेट्सच्या कनेक्शनला समर्थन देते.

 यासारखे दिसणारे JSON ऑब्जेक्टद्वारे कनेक्शन निर्दिष्ट केले जातात:

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

 सर्व पर्याय आणि त्यांची मूल्ये आणि अर्थ यांच्या संपूर्ण तपशीलांसाठी, पहा
 [mobiletto डॉक्स](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### कनेक्शन तयार करा
 नवीन कनेक्शन तयार करण्यासाठी, आम्हाला यापैकी एक JSON ऑब्जेक्ट आवश्यक आहे.

 आम्ही एक परस्पर तयार करू शकतो किंवा फाईल किंवा JSON शाब्दिक द्वारे पुरवू शकतो:

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

 ### कनेक्शनची यादी करा
 उपलब्ध कनेक्शनची यादी करा:

    mo connect -l
    mo connect --list

 ### डंप कनेक्शन JSON कॉन्फिगरेशन
 कनेक्शनसाठी पूर्ण JSON कॉन्फिगरेशन दाखवा. **चेतावणी** हे stdout वर की आणि रहस्ये मुद्रित करेल.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### कनेक्शन काढा
 एकल कनेक्शन काढा:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### सर्व कनेक्शन काढा
 सर्व कनेक्शन काढा:

    mo connect -R
    mo connect --remove-all

 ## स्टोरेजसह कार्य करत आहे
 एकदा तुम्ही काही कनेक्शन तयार `ls` , `ls`, ` `cp` , `rm` , `meta` आणि `mirror` ऑपरेशन्स वापरा.
 त्यांच्यासोबत काम करण्यासाठी.

 तुम्ही कमांडला दिलेला प्रत्येक फाईल पाथ कनेक्शनच्या नावासोबत जोडलेला असणे आवश्यक आहे
 ते संदर्भित करते. खालील उदाहरणांमध्ये, आम्ही असे गृहीत धरतो की `conn1` आणि `conn2` नावाची दोन जोडणी अस्तित्वात आहेत

 ### फायलींची यादी करा
 लिस्ट कमांडचे आउटपुट JSON ऑब्जेक्ट्सची मालिका आहे, प्रत्येक ओळीत एक, फाइल्सचे प्रतिनिधित्व करते
 आढळले. या ऑब्जेक्ट्समध्ये `name` आणि `type` आणि शक्यतो इतर फील्ड असतील.

    mo ls conn1/some/path

 फायलींची आवर्ती यादी करा:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **एनक्रिप्टेड स्टोरेज टीप**: पुनरावर्ती सूची अद्याप एनक्रिप्टेड कनेक्शनसाठी समर्थित नाही.
 तुम्ही एका वेळी फायलींची फक्त एक निर्देशिका सूचीबद्ध करू शकता.

 शब्दशः फायली सूचीबद्ध करा (प्रीटी-प्रिंट JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 फायली आवर्ती आणि शब्दशः सूचीबद्ध करा:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` कमांडसाठी मदत पहा, सर्व पर्यायांचे वर्णन करते:

    mo ls -h
    mo ls --help

 ### stdout वर एक फाईल लिहा
 `cat` कमांड stdout वर फाइल मुद्रित करेल:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 खर्‍या UNIX आत्म्यात *(अजून नक्कीच सराव नाही!)* mobiletto ची `cat` आज्ञा **कोणतेही पर्याय घेत नाही**
 उपयुक्त माहिती प्रदर्शित करण्यासाठी `-h` / `--help` व्यतिरिक्त.

 ### फायली कॉपी करा
 एका मोबाईलवरून दुसर्‍या मोबाईलवर एकच फाइल कॉपी करा:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 गंतव्यस्थानावर नाव बदलून, एका मोबाईलवरून दुसर्‍या मोबाइलवर एक फाइल कॉपी करा:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 आवर्तीपणे निर्देशिका कॉपी करा:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` कमांडसाठी मदत पहा, सर्व पर्यायांचे वर्णन करते:

    mo cp -h
    mo cp --help

 टीप: फाइल कॉपी करणे फार जलद नाही, कारण त्यासाठी सध्या मध्यस्थ तात्पुरती फाइल आवश्यक आहे.

 ### फाइल्स हटवा
 एकच फाइल हटवा:

    mo rm conn1/some/file.txt

 एकच फाइल हटवा आणि कोणत्याही त्रुटींबद्दल तक्रार करू नका:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 निर्देशिका हटवा:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 निर्देशिका हटवा आणि कोणत्याही त्रुटींबद्दल तक्रार करू नका:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### मेटाडेटा पहा
 संपूर्ण फाईल डाउनलोड न करता फाईलचा मेटाडेटा जाणून घेणे अनेकदा उपयुक्त ठरते.

 Mobiletto नाव आणि प्रकार व्यतिरिक्त फाइल आकार आणि अंतिम सुधारित वेळ अहवाल करण्यास सक्षम आहे.

 मेटाडेटा पाहण्यासाठी:

    mo meta conn1/some/file.txt

 ### मिरर डिरेक्टरी
 मिररिंग हे `cp` च्या विशेष केसपेक्षा अधिक आहे, ही एक स्वतंत्र मोबाइलटो कमांड आहे जी गुंडाळते
 कॉपी ऑपरेशन; जेव्हा चुका होतात तेव्हाही ते चालू राहते आणि यश आणि त्रुटींच्या संख्येचा मागोवा घेतात.

 conn1 पासून conn2 मध्ये सर्वकाही मिरर करण्यासाठी:

    mo mirror conn1 conn2

 उपनिर्देशिका मिरर करण्यासाठी:

    mo mirror conn1/some/subdir conn2

 उपनिर्देशिका दुसर्‍या उपनिर्देशिकेत मिरर करण्यासाठी:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
