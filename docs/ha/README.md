mobiletto-cli
 ==========
 Tsarin layin umarni (CLI) don [mobiletto](https://www.npmjs.com/package/mobiletto)
 ajiya.

 Mobiletto yana goyan bayan haɗin kai zuwa Amazon S3, Backblaze B2, da tsarin fayil na gida.

 # Karanta wannan a wani yare
 An fassara wannan takaddar README.md, ta [hokeylization](https://github.com/cobbzilla/hokeylization), zuwa
 **[kowane harshe yana da tallafin Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Na tabbata ba cikakke ba ne, amma ina fata ya fi komai kyau!

 [🇸🇦 Larabci](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jamusanci](../de/README.md)
 [🇺🇸 Turanci](../ha/README.md)
 [🇪🇸 Mutanen Espanya](../es/README.md)
 [🇫🇷 Faransanci](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italiyanci](../it/README.md)
 [🇯🇵 Jafananci](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Yaren mutanen Poland](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Rashanci](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Baturke](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Sinanci](../zh/README.md)


 **[📚 ... Duk Harsuna ...](../README.md)**
 ----

 ### Akwai matsala da wannan fassarar README?
 Wannan fassarar ta asali ta [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 na iya zama aibi - * ana maraba da gyare-gyare!* Da fatan za a aika [buƙatun ja akan GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ko kuma idan ba ku ji daɗin yin hakan ba, [buɗe batun](https://github.com/cobbzilla/mobiletto-cli/issues)

 Lokacin da kuka ƙirƙiri sabon batun GitHub game da fassarar, da fatan za a yi:
 * hada da URL na shafi (kwafi / manna daga mashaya adireshin mashigin)
 * hada da ainihin rubutun da ba daidai ba (kwafi / manna daga mai bincike)
 * don Allah bayyana abin da ba daidai ba -- shin fassarar ba daidai ba ce? an karye tsarin ko ta yaya?
 * a hankali ba da shawarar mafi kyawun fassarar, ko yadda ya kamata a tsara rubutun yadda ya kamata
 * **Na gode!**

 # Abubuwan ciki
 * [Madogararsa](#Source)
 * [Tallafawa da Kuɗi](#Taimako-da-Kudade)
 * [Shigar da amfani](#Shigar-da-amfani)
 * [kunshin npm](#npm-kunshin)
 * [Daga tushe](#Daga-source)
 * [Haɗin kai](#Haɗin kai)
 * [Ƙirƙiri haɗin kai](#Create-a-connection)
 * [Jerin haɗin gwiwa](#List-connections)
 * [Jiji da haɗin haɗin JSON](#Dump-connection-JSON-config)
 * [Cire haɗin kai](#Cire-a-connection)
 * [Cire duk haɗin gwiwa](#Cire-all-connections)
 * [Aiki tare da ajiya](#Aiki tare da ajiya)
 * [Jerin fayiloli](#List-files)
 * [Rubuta fayil zuwa stdout](#Rubuta-a-file-zuwa-stdout)
 * [Kwafi fayiloli](#Copy-files)
 * [Goge fayiloli](#Delete-files)
 * [Duba metadata](#View-metadadata)
 * [Kundayen adireshi na madubi](#Mirror-directories)

 ### Source
 * [mobiletto-cli akan GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli akan npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Tallafi da Kudi
 Ina ƙoƙari in zama ƙwararren mai haɓaka tushen software. Na kasance ina aiki a ciki
 masana'antar software tsawon shekaru da yawa, na fara kamfanoni masu nasara kuma na sayar da su ga kamfanonin jama'a.
 Kwanan nan na rasa aiki, kuma ba ni da wani aiki a layi daya

 Don haka zan gwada rubuta software mai taimako don ganin ko hakan yana aiki

 Idan kuna jin daɗin amfani da wannan software, zan yi matukar godiya ga har ma da
 mafi ƙanƙanta [gudunmawar wata-wata ta hanyar Patreon](https://www.patreon.com/cobbzilla)

 *Na gode!*

 ## Shigarwa da amfani
 Kuna iya shigar da kunna `mobiletto-cli` ta npm ko kai tsaye daga tushe.

 Kunshin ### npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Daga tushe
 Don gudu daga tushe, kuna buƙatar nodejs v16+ da yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Haɗin kai
 Ana samun isa ga duk ma'ajiyar wayar hannu ta hanyar haɗi.

 Mobiletto a halin yanzu yana goyan bayan haɗin kai zuwa ma'ajin tsarin fayil na gida da buckets S3 na Amazon.

 An ayyana haɗin kai ta wani abu JSON mai kama da haka:

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

 Don cikakkun bayanai kan duk zaɓuɓɓuka da ƙimarsu da ma'anarsu, duba littafin
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Ƙirƙiri haɗi
 Don ƙirƙirar sabuwar haɗi, muna buƙatar ɗayan waɗannan abubuwan JSON.

 Za mu iya ƙirƙirar ɗaya ta hanyar hulɗa, ko samar da ɗaya ta hanyar fayil ko JSON na zahiri:

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

 ### Lissafin haɗin gwiwa
 Jerin abubuwan haɗin kai:

    mo connect -l
    mo connect --list

 ### Jujjuya haɗin haɗin JSON
 Nuna cikakken tsarin JSON don haɗi. **GARGADI** wannan zai buga makullai da sirrikan stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Cire haɗin haɗin gwiwa
 Cire haɗi guda ɗaya:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Cire duk haɗin gwiwa
 Cire DUKAN haɗin kai:

    mo connect -R
    mo connect --remove-all

 ## Aiki tare da ajiya
 Da zarar kun ƙirƙiri wasu haɗin gwiwa, yi amfani da ayyukan `ls` , `cp` , `rm` , `meta` da `mirror` ayyuka
 yin aiki da su.

 Duk hanyar fayil ɗin da kuka bayar zuwa umarni dole ne a sanya shi gaba da sunan haɗin
 yana nufin. A cikin misalan da ke ƙasa, muna ɗauka akwai haɗin gwiwa guda biyu masu suna `conn1` ' da `conn2`

 ### Fayilolin lissafi
 Fitar da umarnin jeri jerin abubuwan JSON ne, ɗaya a kowane layi, wakiltar fayiloli
 samu. Waɗannan abubuwan za su sami `name` suna' da `type` , da yuwuwar wasu filayen.

    mo ls conn1/some/path

 Yi lissafin fayiloli akai-akai:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Rufe bayanin ma'auni ***: Har yanzu ba a goyan bayan jeri-jeri don rufaffen haɗin yanar gizo ba.
 Zaku iya jera kundin adireshi guda ɗaya kawai a lokaci guda.

 Yi lissafin fayiloli a zahiri (kyakkyawan bugu JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lissafa fayiloli akai-akai da baki:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Duba taimako don umarnin `ls` , ya bayyana duk zaɓuɓɓuka:

    mo ls -h
    mo ls --help

 ### Rubuta fayil zuwa stdout
 `cat` zai buga fayil zuwa stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 A cikin ruhun UNIX na gaskiya *(duk da haka ba lallai ba ne!)* Umurnin 'cat' na `cat` ** ba ya ɗaukar wani zaɓi**
 ban da `-h` / `--help` don nuna bayanai masu taimako.

 ### Kwafi fayiloli
 Kwafi fayil guda ɗaya daga wayar hannu zuwa wancan:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kwafi fayil guda ɗaya daga wayar hannu zuwa wani, canza suna a wurin da aka nufa:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kwafi a kai a kai:

    mo cp -r conn1/some/directory conn2/some/dest/

 Duba taimako don umarni `cp` , ya bayyana duk zaɓuɓɓuka:

    mo cp -h
    mo cp --help

 Lura: Kwafi fayil baya sauri sosai, saboda a halin yanzu yana buƙatar fayil na ɗan lokaci na tsaka-tsaki.

 ### Share fayiloli
 Share fayil guda:

    mo rm conn1/some/file.txt

 Share fayil guda ɗaya kuma kada ku koka game da kowane kurakurai:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Share directory:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Share kundin adireshi kuma kar a koka kan kowane kurakurai:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Duba metadata
 Yana da amfani sau da yawa don sanin metadata don fayil, ba tare da zazzage dukkan fayil ɗin ba.

 Mobiletto zai iya ba da rahoton girman fayil da lokacin gyara na ƙarshe, ban da suna da nau'in.

 Don duba metadata:

    mo meta conn1/some/file.txt

 ### kundayen adireshi na madubi
 Mirroring ya fi wani lamari na musamman na `cp` , umarni ne na mobiletto daban wanda ke kunshe da
 aikin kwafi; yana ci gaba har ma lokacin da kurakurai suka faru, da bin diddigin ƙidayar nasara da kurakurai.

 Don madubi komai daga conn1 zuwa conn2:

    mo mirror conn1 conn2

 Don madubi babban kundin adireshi:

    mo mirror conn1/some/subdir conn2

 Don madubi babban kundin adireshi zuwa wani babban kundin adireshi:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
