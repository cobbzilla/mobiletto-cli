मोबाइलटो-क्ली
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) के लिए एक कमांड-लाइन इंटरफ़ेस (CLI)
 भंडारण।

 Mobiletto Amazon S3, Backblaze B2 और स्थानीय फाइल सिस्टम से कनेक्शन का समर्थन करता है।

 #इसे दूसरी भाषा में पढ़ें
 इस README.md दस्तावेज़ का अनुवाद [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) के माध्यम से किया गया है।
 **[Google अनुवाद द्वारा समर्थित प्रत्येक भाषा](https://cloud.google.com/translate/docs/languages)!**

 मुझे यकीन है कि यह सही नहीं है, लेकिन मुझे आशा है कि यह कुछ भी नहीं से बेहतर है!

 [🇸🇦 अरबी](../ar/README.md)
 [🇧🇩 बंगाली](../bn/README.md)
 [🇩🇪 जर्मन](../de/README.md)
 [🇺🇸 अंग्रेजी](../hi/README.md)
 [🇪🇸 स्पेनिश](../es/README.md)
 [🇫🇷 फ्रेंच](../fr/README.md)
 [🇹🇩 हौसा](../ha/README.md)
 [🇮🇳 हिन्दी](../hi/README.md)
 [🇮🇩 इन्डोनेशियाई](../id/README.md)
 [🇮🇹 इटालियन](../it/README.md)
 [🇯🇵 जापानी](../ja/README.md)
 [🇰🇷 कोरियाई](../ko/README.md)
 [🇮🇳 मरांथी](../mr/README.md)
 [🇵🇱 पोलिश](../pl/README.md)
 [🇧🇷 पुर्तगाली](../pt/README.md)
 [🇷🇺 रूसी](../ru/README.md)
 [🇰🇪 स्वाहिली](../sw/README.md)
 [🇵🇭 तागालोग](../tl/README.md)
 [🇹🇷 तुर्की](../tr/README.md)
 [🇵🇰 उर्दू](../ur/README.md)
 [🇻🇳 वियतनामी](../vi/README.md)
 [🇨🇳 चीनी](../zh/README.md)


 **[📚 ... सभी भाषाएं ...](../README.md)**
 ----

 ### क्या README के इस अनुवाद में कोई समस्या है?
 मूल [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) का यह विशेष अनुवाद
 त्रुटिपूर्ण हो सकता है -- *सुधारों का बहुत स्वागत है!* कृपया [GitHub पर पुल अनुरोध](https://github.com/cobbzilla/mobiletto-cli/pulls) भेजें,
 या यदि आप ऐसा करने में सहज नहीं हैं, तो [एक मुद्दा खोलें](https://github.com/cobbzilla/mobiletto-cli/issues)

 जब आप अनुवाद के बारे में एक नया GitHub मुद्दा बनाते हैं, तो कृपया यह करें:
 * पेज यूआरएल शामिल करें (ब्राउज़र एड्रेस बार से कॉपी/पेस्ट करें)
 * सटीक टेक्स्ट शामिल करें जो गलत है (ब्राउज़र से कॉपी/पेस्ट करें)
 * कृपया बताएं कि क्या गलत है -- क्या अनुवाद गलत है? स्वरूपण किसी भी तरह टूटा हुआ है?
 * कृपया एक बेहतर अनुवाद का सुझाव दें, या पाठ को ठीक से कैसे स्वरूपित किया जाना चाहिए
 * **आपको धन्यवाद!**

 ### स्रोत
 * [GitHub पर mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [एनपीएम पर mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 # सामग्री
 * [स्थापना और उपयोग](# स्थापना और उपयोग)
 * [एनपीएम पैकेज](# एनपीएम-पैकेज)
 * [स्रोत से](# स्रोत से)
 * [कनेक्शन](# कनेक्शन)
 * [एक कनेक्शन बनाएं](# एक कनेक्शन बनाएं)
 * [सूची कनेक्शन](# सूची-कनेक्शन)
 * [डंप कनेक्शन JSON कॉन्फिगरेशन](# डंप-कनेक्शन-JSON-config)
 * [एक कनेक्शन निकालें](# एक कनेक्शन निकालें)
 * [सभी कनेक्शन हटाएं](# सभी कनेक्शन हटाएं)
 * [भंडारण के साथ काम करना](# भंडारण के साथ काम करना)
 * [सूची फ़ाइलें](# सूची-फ़ाइलें)
 * [stdout के लिए एक फ़ाइल लिखें](# एक फ़ाइल-से-स्टडआउट लिखें)
 * [कॉपी फाइल](# कॉपी-फाइलें)
 * [फ़ाइलें हटाएं](# हटाएं-फ़ाइलें)
 * [मेटाडेटा देखें](#व्यू-मेटाडेटा)
 * [दर्पण निर्देशिका](# मिरर-निर्देशिका)

 ## स्थापना और उपयोग
 आप npm के माध्यम से या सीधे स्रोत से `mobiletto-cli` स्थापित और चला सकते हैं।

 ### एनपीएम पैकेज
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### स्रोत से
 स्रोत से चलाने के लिए, आपको नोडज v16+ और यार्न की आवश्यकता होगी

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## सम्बन्ध
 सभी mobiletto संग्रहण को एक कनेक्शन के माध्यम से एक्सेस किया जाता है।

 Mobiletto वर्तमान में स्थानीय फाइल सिस्टम स्टोरेज और Amazon S3 बकेट से कनेक्शन का समर्थन करता है।

 कनेक्शन एक JSON ऑब्जेक्ट द्वारा निर्दिष्ट किया जाता है जो इस तरह दिखता है:

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

 सभी विकल्पों और उनके मूल्यों और अर्थों पर पूर्ण विवरण के लिए देखें
 [mobiletto डॉक्स](https://www.npmjs.com/package/mobiletto#Basic-usage)।

 ### एक कनेक्शन बनाएं
 एक नया कनेक्शन बनाने के लिए, हमें इनमें से एक JSON ऑब्जेक्ट की आवश्यकता है।

 हम एक अंतःक्रियात्मक रूप से बना सकते हैं, या एक फ़ाइल या JSON शाब्दिक के माध्यम से आपूर्ति कर सकते हैं:

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

 ### सूची कनेक्शन
 उपलब्ध कनेक्शनों की सूची बनाएं:

    mo connect -l
    mo connect --list

 ### डंप कनेक्शन JSON config
 कनेक्शन के लिए पूर्ण JSON कॉन्फ़िगरेशन दिखाएं। **चेतावनी** यह स्टडआउट की कुंजियों और रहस्यों को प्रिंट करेगा।

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### एक कनेक्शन निकालें
 एकल कनेक्शन निकालें:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### सभी कनेक्शन हटाएं
 सभी कनेक्शन निकालें:

    mo connect -R
    mo connect --remove-all

 ## भंडारण के साथ काम करना
 एक बार जब आप कुछ कनेक्शन बना लेते हैं, तो ` `ls` , `cp` , `rm` , `meta` और `mirror` संचालन का उपयोग करें
 उनके साथ काम करने के लिए।

 प्रत्येक फ़ाइल पथ जो आप एक कमांड को प्रदान करते हैं, उसे कनेक्शन के नाम के साथ उपसर्ग करना चाहिए
 यह इसे संदर्भित करता है। नीचे दिए गए उदाहरणों में, हम मानते हैं कि `conn1` और `conn2` नामक दो कनेक्शन मौजूद हैं

 ### फाइलों की सूची बनाएं
 सूची कमांड का आउटपुट JSON ऑब्जेक्ट्स की एक श्रृंखला है, प्रति पंक्ति एक, फाइलों का प्रतिनिधित्व करता है
 मिल गया। इन वस्तुओं में एक `name` और `type` और संभवतः अन्य फ़ील्ड होंगे।

    mo ls conn1/some/path

 फ़ाइलों को पुनरावर्ती रूप से सूचीबद्ध करें:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **एन्क्रिप्टेड स्टोरेज नोट**: एन्क्रिप्टेड कनेक्शन के लिए रिकर्सिव लिस्टिंग अभी तक समर्थित नहीं है।
 आप एक समय में फाइलों की केवल एक निर्देशिका सूचीबद्ध कर सकते हैं।

 फाइलों को मौखिक रूप से सूचीबद्ध करें (सुंदर-प्रिंट JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 फ़ाइलों को पुनरावर्ती और मौखिक रूप से सूचीबद्ध करें:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` कमांड के लिए सहायता देखें, सभी विकल्पों का वर्णन करता है:

    mo ls -h
    mo ls --help

 ### stdout में फ़ाइल लिखें
 `cat` कमांड एक फाइल को स्टडआउट में प्रिंट करेगा:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 सही UNIX भावना में *(फिर भी निश्चित रूप से अभ्यास नहीं!)* mobiletto की `cat` कमांड **कोई विकल्प नहीं लेता**
 उपयोगी जानकारी प्रदर्शित करने के लिए `-h` / `--help` के अलावा अन्य।

 ### फाइल कॉपी करें
 एक फ़ाइल को एक मोबाइल से दूसरे में कॉपी करें:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 एक फ़ाइल को एक मोबाइल से दूसरी फ़ाइल में कॉपी करें, गंतव्य पर उसका नाम बदलें:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 एक निर्देशिका की पुनरावर्ती प्रतिलिपि बनाएँ:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` कमांड के लिए सहायता देखें, सभी विकल्पों का वर्णन करता है:

    mo cp -h
    mo cp --help

 नोट: फ़ाइल की प्रतिलिपि बनाना बहुत तेज़ नहीं है, क्योंकि वर्तमान में इसके लिए एक मध्यस्थ अस्थायी फ़ाइल की आवश्यकता है।

 ### फाइलों को नष्ट
 एकल फ़ाइल हटाएं:

    mo rm conn1/some/file.txt

 एक फ़ाइल हटाएं और किसी भी त्रुटि के बारे में शिकायत न करें:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 एक निर्देशिका हटाएं:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 एक निर्देशिका हटाएं और किसी भी त्रुटि के बारे में शिकायत न करें:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### मेटाडेटा देखें
 पूरी फ़ाइल को डाउनलोड किए बिना किसी फ़ाइल के मेटाडेटा को जानना अक्सर उपयोगी होता है।

 Mobiletto नाम और प्रकार के अलावा फ़ाइल आकार और अंतिम संशोधित समय की रिपोर्ट करने में सक्षम है।

 मेटाडेटा देखने के लिए:

    mo meta conn1/some/file.txt

 ### मिरर निर्देशिका
 मिररिंग `cp` के एक विशेष मामले से अधिक है, यह एक अलग mobiletto कमांड है जो को लपेटता है
 कॉपी ऑपरेशन; यह तब भी जारी रहता है जब त्रुटियां होती हैं, और सफलताओं और त्रुटियों की गिनती को ट्रैक करती हैं।

 conn1 से conn2 में सब कुछ मिरर करने के लिए:

    mo mirror conn1 conn2

 उपनिर्देशिका को मिरर करने के लिए:

    mo mirror conn1/some/subdir conn2

 एक उपनिर्देशिका को दूसरी उपनिर्देशिका में मिरर करने के लिए:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
