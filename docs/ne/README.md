mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) को लागि कमाण्ड-लाइन इन्टरफेस (CLI)
 भण्डारण।

 Mobiletto Amazon S3, Backblaze B2, र स्थानीय फाइल प्रणालीहरूमा जडानहरू समर्थन गर्दछ।

 # यो अर्को भाषामा पढ्नुहोस्
 यो README.md कागजात [hokeylization](https://github.com/cobbzilla/hokeylization) मार्फत अनुवाद गरिएको छ, मा
 **[Google अनुवादद्वारा समर्थित हरेक भाषा](https://cloud.google.com/translate/docs/languages)!**

 म निश्चित छु कि यो उत्तम छैन, तर मलाई आशा छ कि यो केहि भन्दा राम्रो छ!

 [🇸🇦 अरबी](../ar/README.md)
 [🇧🇩 बंगाली](../bn/README.md)
 [🇩🇪 जर्मन](../de/README.md)
 [🇺🇸 अंग्रेजी](../en/README.md)
 [🇪🇸 स्पेनिश](../es/README.md)
 [🇫🇷 फ्रान्सेली](../fr/README.md)
 [🇹🇩 हौसा](../ha/README.md)
 [🇮🇳 हिन्दी](../hi/README.md)
 [🇮🇩 इन्डोनेसियाली](../id/README.md)
 [🇮🇹 इटालियन](../it/README.md)
 [🇯🇵 जापानी](../ja/README.md)
 [🇰🇷 कोरियाली](../ko/README.md)
 [🇮🇳 मरांथी](../mr/README.md)
 [🇵🇱 पोलिश](../pl/README.md)
 [🇧🇷 पोर्तुगाली](../pt/README.md)
 [🇷🇺 रूसी](../ru/README.md)
 [🇰🇪 स्वाहिली](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 टर्की](../tr/README.md)
 [🇵🇰 उर्दू](../ur/README.md)
 [🇻🇳 भियतनामी](../vi/README.md)
 [🇨🇳 चिनियाँ](../zh/README.md)


 **[📚 ... सबै भाषाहरू ...](../README.md)**
 ----

 ### README को यो अनुवादमा कुनै समस्या छ?
 मूल [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) को यो विशेष अनुवाद
 त्रुटि हुन सक्छ -- *सुधार धेरै स्वागत छ!* कृपया [GitHub मा पुल अनुरोध](https://github.com/cobbzilla/mobiletto-cli/pulls) पठाउनुहोस्,
 वा यदि तपाईं त्यसो गर्न सहज हुनुहुन्न भने, [एउटा मुद्दा खोल्नुहोस्](https://github.com/cobbzilla/mobiletto-cli/issues)

 जब तपाइँ अनुवादको बारेमा नयाँ GitHub मुद्दा सिर्जना गर्नुहुन्छ, कृपया गर्नुहोस्:
 * पृष्ठ URL समावेश गर्नुहोस् (ब्राउजर ठेगाना पट्टीबाट प्रतिलिपि / टाँस्नुहोस्)
 * सही पाठ समावेश गर्नुहोस् जुन गलत छ (ब्राउजरबाट प्रतिलिपि / टाँस्नुहोस्)
 * कृपया के गलत छ वर्णन गर्नुहोस् -- के अनुवाद गलत छ? ढाँचा कतै बिग्रिएको छ?
 * कृपया राम्रो अनुवादको सुझाव, वा पाठ कसरी ठीकसँग ढाँचा हुनुपर्छ भन्ने प्रस्ताव गर्नुहोस्
 * **धन्यवाद!**

 # सामग्री
 * [स्रोत](#स्रोत)
 * [समर्थन र कोष](#समर्थन र कोष)
 * [स्थापना र उपयोग](#स्थापना-र-उपयोग)
 * [npm प्याकेज](#npm-प्याकेज)
 * [स्रोतबाट](#स्रोतबाट)
 * [जडानहरू](# जडानहरू)
 * [एक जडान सिर्जना गर्नुहोस्](#Create-a-connection)
 * [सूची जडानहरू](#सूची जडानहरू)
 * [डम्प जडान JSON कन्फिगरेसन](#Dump-connection-JSON-config)
 * [कनेक्सन हटाउनुहोस्](#Remove-a-connection)
 * [सबै जडानहरू हटाउनुहोस्](#Remove-all-connections)
 * [भण्डारणसँग काम गर्दै](#भण्डारणसँग काम गर्दै)
 * [सूची फाइलहरू](#सूची फाइलहरू)
 * [stdout मा फाइल लेख्नुहोस्](#लेख्नुहोस्-ए-फाइल-टु-स्टडआउट)
 * [प्रतिलिपि फाइलहरू](#प्रतिलिपि फाइलहरू)
 * [फाइलहरू मेटाउनुहोस्](#फाइलहरू मेटाउनुहोस्)
 * [मेटाडेटा हेर्नुहोस्](#View-metadata)
 * [मिरर डाइरेक्टरीहरू](#मिरर डाइरेक्टरीहरू)

 ### मुहान
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## सहयोग र कोष
 म एक पेशेवर खुला स्रोत सफ्टवेयर विकासकर्ता बन्ने प्रयास गर्दैछु। मा काम गर्दै आएको छु
 धेरै वर्षदेखि सफ्टवेयर उद्योगमा, मैले सफल कम्पनीहरू सुरु गरेको छु र तिनीहरूलाई सार्वजनिक कम्पनीहरूमा बेचेको छु।
 भर्खरै मैले मेरो जागिर गुमाएँ, र मसँग साँच्चै अरू कुनै काम छैन

 त्यसोभए म उपयोगी सफ्टवेयर लेख्ने प्रयास गर्न जाँदैछु र हेर्नुहोस् कि यसले काम गर्दछ

 यदि तपाइँ यो सफ्टवेयर प्रयोग गरेर रमाइलो गर्नुहुन्छ भने, म पनि ईमानदारीपूर्वक आभारी हुनेछु
 सबैभन्दा सानो [Patreon मार्फत मासिक योगदान](https://www.patreon.com/cobbzilla)

 *धन्यवाद!*

 ## स्थापना र उपयोग
 तपाईं `mobiletto-cli` स्थापना र चलाउन सक्नुहुन्छ।

 ### npm प्याकेज
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### स्रोतबाट
 स्रोतबाट चलाउनको लागि, तपाइँलाई nodejs v16+ र धागो चाहिन्छ

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## जडानहरू
 सबै Mobiletto भण्डारण जडान मार्फत पहुँच गरिन्छ।

 Mobiletto ले हाल स्थानीय फाइल प्रणाली भण्डारण र Amazon S3 बकेटहरूमा जडानहरूलाई समर्थन गर्दछ।

 जडानहरू JSON वस्तु द्वारा निर्दिष्ट गरिएको छ जुन यो जस्तो देखिन्छ:

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

 सबै विकल्पहरू र तिनीहरूको मान र अर्थहरूमा पूर्ण विवरणहरूको लागि, हेर्नुहोस्
 [mobiletto कागजात](https://www.npmjs.com/package/mobiletto#Basic-usage)।

 ### जडान बनाउनुहोस्
 नयाँ जडान सिर्जना गर्न, हामीलाई यी JSON वस्तुहरू मध्ये एउटा चाहिन्छ।

 हामी अन्तरक्रियात्मक रूपमा एउटा सिर्जना गर्न सक्छौं, वा फाइल वा JSON शाब्दिक मार्फत आपूर्ति गर्न सक्छौं:

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

 ### जडानहरू सूची गर्नुहोस्
 उपलब्ध जडानहरू सूचीबद्ध गर्नुहोस्:

    mo connect -l
    mo connect --list

 ### डम्प जडान JSON कन्फिगरेसन
 जडानको लागि पूर्ण JSON कन्फिगरेसन देखाउनुहोस्। **चेतावनी** यसले कुञ्जी र गोप्य कुराहरू stdout मा छाप्नेछ।

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### जडान हटाउनुहोस्
 एकल जडान हटाउनुहोस्:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### सबै जडानहरू हटाउनुहोस्
 सबै जडानहरू हटाउनुहोस्:

    mo connect -R
    mo connect --remove-all

 ## भण्डारणको साथ काम गर्दै
 एकचोटि तपाईंले केही जडानहरू सिर्जना गरेपछि, ` `ls` , `cp` , `rm` , `meta` र `mirror` अपरेशनहरू प्रयोग गर्नुहोस्।
 तिनीहरूसँग काम गर्न।

 प्रत्येक फाइल पथ जुन तपाइँले आदेशमा प्रदान गर्नुहुन्छ जडानको नामको साथ उपसर्ग हुनुपर्छ
 यसले जनाउँछ। तलका उदाहरणहरूमा, `conn1` र `conn2` नामक दुई जडानहरू अवस्थित छन् भनी हामी मान्दछौं

 ### फाइलहरू सूचीबद्ध गर्नुहोस्
 सूची आदेशको आउटपुट JSON वस्तुहरूको श्रृंखला हो, प्रति रेखा एक, फाइलहरू प्रतिनिधित्व गर्दछ
 भेटियो। यी वस्तुहरूमा `name` र `type` , र सम्भवतः अन्य क्षेत्रहरू हुनेछन्।

    mo ls conn1/some/path

 पुनरावर्ती फाइलहरू सूचीबद्ध गर्नुहोस्:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **इन्क्रिप्टेड भण्डारण नोट**: पुनरावर्ती सूची अझै पनि गुप्तिकरण जडानहरूको लागि समर्थित छैन।
 तपाईंले एक पटकमा फाइलहरूको एउटा डाइरेक्टरी मात्र सूचीबद्ध गर्न सक्नुहुन्छ।

 फाईलहरू मौखिक रूपमा सूचीबद्ध गर्नुहोस् (सुन्दर-प्रिन्ट JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 पुनरावर्ती र मौखिक रूपमा फाइलहरू सूचीबद्ध गर्नुहोस्:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` आदेशको लागि मद्दत हेर्नुहोस्, सबै विकल्पहरू वर्णन गर्दछ:

    mo ls -h
    mo ls --help

 ### stdout मा फाइल लेख्नुहोस्
 `cat` मा फाइल प्रिन्ट गर्नेछ:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 साँचो UNIX आत्मामा *(अझै पनि पक्कै पनि अभ्यास होइन!)* mobiletto को `cat` आदेश **कुनै विकल्प छैन**
 उपयोगी जानकारी प्रदर्शन गर्न `-h` / `--help` ।

 ### फाइलहरू प्रतिलिपि गर्नुहोस्
 एउटा मोबाइलबाट अर्कोमा एउटा फाइल प्रतिलिपि गर्नुहोस्:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 एउटा मोबाइलबाट अर्कोमा एउटा फाइल प्रतिलिपि गर्नुहोस्, यसलाई गन्तव्यमा पुन: नामाकरण गर्नुहोस्:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 पुनरावर्ती एक निर्देशिका प्रतिलिपि गर्नुहोस्:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` आदेशको लागि मद्दत हेर्नुहोस्, सबै विकल्पहरू वर्णन गर्दछ:

    mo cp -h
    mo cp --help

 नोट: फाइल प्रतिलिपि गर्न धेरै छिटो छैन, किनभने यसलाई हाल एक मध्यस्थ अस्थायी फाइल चाहिन्छ।

 ### फाइलहरू मेटाउनुहोस्
 एकल फाइल मेटाउनुहोस्:

    mo rm conn1/some/file.txt

 एकल फाइल मेटाउनुहोस् र कुनै त्रुटिहरूको बारेमा गुनासो नगर्नुहोस्:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 निर्देशिका मेटाउनुहोस्:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 डाइरेक्टरी मेटाउनुहोस् र कुनै त्रुटिहरूको बारेमा गुनासो नगर्नुहोस्:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### मेटाडेटा हेर्नुहोस्
 पूरै फाइल डाउनलोड नगरिकन फाइलको मेटाडेटा जान्न अक्सर उपयोगी हुन्छ।

 Mobiletto नाम र प्रकार को अतिरिक्त, फाइल आकार र अन्तिम परिमार्जित समय रिपोर्ट गर्न सक्षम छ।

 मेटाडेटा हेर्नको लागि:

    mo meta conn1/some/file.txt

 ### मिरर निर्देशिकाहरू
 `cp` को विशेष केस भन्दा बढी हो, यो एउटा छुट्टै mobiletto कमाण्ड हो जसले यसलाई लपेट्छ।
 प्रतिलिपि सञ्चालन; त्रुटिहरू हुँदा पनि यो जारी रहन्छ, र सफलता र त्रुटिहरूको गणना ट्र्याक गर्नुहोस्।

 conn1 देखि conn2 मा सबै कुरा मिरर गर्न:

    mo mirror conn1 conn2

 उपनिर्देशिका मिरर गर्न:

    mo mirror conn1/some/subdir conn2

 एउटा उपनिर्देशिकालाई अर्को उपनिर्देशिकामा मिरर गर्न:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
