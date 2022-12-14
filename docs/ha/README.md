mobiletto-cli
 ==========
 Tsarin layin umarni (CLI) don [mobiletto](https://www.npmjs.com/package/mobiletto)
 ajiya.

 Mobiletto yana goyan bayan haษin kai zuwa Amazon S3, Backblaze B2, da tsarin fayil na gida.

 # Karanta wannan a wani yare
 An fassara wannan takaddar README.md, ta [hokeylization](https://github.com/cobbzilla/hokeylization), zuwa
 **[kowane harshe yana da tallafin Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Na tabbata ba cikakke ba ne, amma ina fata ya fi komai kyau!

 [๐ธ๐ฆ Larabci](../ar/README.md)
 [๐ง๐ฉ Bengali](../bn/README.md)
 [๐ฉ๐ช Jamusanci](../de/README.md)
 [๐บ๐ธ Turanci](../ha/README.md)
 [๐ช๐ธ Mutanen Espanya](../es/README.md)
 [๐ซ๐ท Faransanci](../fr/README.md)
 [๐น๐ฉ Hausa](../ha/README.md)
 [๐ฎ๐ณ Hindi](../hi/README.md)
 [๐ฎ๐ฉ Indonesian](../id/README.md)
 [๐ฎ๐น Italiyanci](../it/README.md)
 [๐ฏ๐ต Jafananci](../ja/README.md)
 [๐ฐ๐ท Korean](../ko/README.md)
 [๐ฎ๐ณ Maranthi](../mr/README.md)
 [๐ต๐ฑ Yaren mutanen Poland](../pl/README.md)
 [๐ง๐ท Portuguese](../pt/README.md)
 [๐ท๐บ Rashanci](../ru/README.md)
 [๐ฐ๐ช Swahili](../sw/README.md)
 [๐ต๐ญ Tagalog](../tl/README.md)
 [๐น๐ท Baturke](../tr/README.md)
 [๐ต๐ฐ Urdu](../ur/README.md)
 [๐ป๐ณ Vietnamese](../vi/README.md)
 [๐จ๐ณ Sinanci](../zh/README.md)


 **[๐ ... Duk Harsuna ...](../README.md)**
 ----

 ### Akwai matsala da wannan fassarar README?
 Wannan fassarar ta asali ta [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 na iya zama aibi - * ana maraba da gyare-gyare!* Da fatan za a aika [buฦatun ja akan GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ko kuma idan ba ku ji daษin yin hakan ba, [buษe batun](https://github.com/cobbzilla/mobiletto-cli/issues)

 Lokacin da kuka ฦirฦiri sabon batun GitHub game da fassarar, da fatan za a yi:
 * hada da URL na shafi (kwafi / manna daga mashaya adireshin mashigin)
 * hada da ainihin rubutun da ba daidai ba (kwafi / manna daga mai bincike)
 * don Allah bayyana abin da ba daidai ba -- shin fassarar ba daidai ba ce? an karye tsarin ko ta yaya?
 * a hankali ba da shawarar mafi kyawun fassarar, ko yadda ya kamata a tsara rubutun yadda ya kamata
 * **Na gode!**

 # Abubuwan ciki
 * [Madogararsa](#Source)
 * [Tallafawa da Kuษi](#Taimako-da-Kudade)
 * [Shigar da amfani](#Shigar-da-amfani)
 * [kunshin npm](#npm-kunshin)
 * [Daga tushe](#Daga-source)
 * [Haษin kai](#Haษin kai)
 * [ฦirฦiri haษin kai](#Create-a-connection)
 * [Jerin haษin gwiwa](#List-connections)
 * [Jiji da haษin haษin JSON](#Dump-connection-JSON-config)
 * [Cire haษin kai](#Cire-a-connection)
 * [Cire duk haษin gwiwa](#Cire-all-connections)
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
 Ina ฦoฦari in zama ฦwararren mai haษaka tushen software. Na kasance ina aiki a ciki
 masana'antar software tsawon shekaru da yawa, na fara kamfanoni masu nasara kuma na sayar da su ga kamfanonin jama'a.
 Kwanan nan na rasa aiki, kuma ba ni da wani aiki a layi daya

 Don haka zan gwada rubuta software mai taimako don ganin ko hakan yana aiki

 Idan kuna jin daษin amfani da wannan software, zan yi matukar godiya ga har ma da
 mafi ฦanฦanta [gudunmawar wata-wata ta hanyar Patreon](https://www.patreon.com/cobbzilla)

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
 Don gudu daga tushe, kuna buฦatar nodejs v16+ da yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Haษin kai
 Ana samun isa ga duk ma'ajiyar wayar hannu ta hanyar haษi.

 Mobiletto a halin yanzu yana goyan bayan haษin kai zuwa ma'ajin tsarin fayil na gida da buckets S3 na Amazon.

 An ayyana haษin kai ta wani abu JSON mai kama da haka:

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

 Don cikakkun bayanai kan duk zaษuษษuka da ฦimarsu da ma'anarsu, duba littafin
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### ฦirฦiri haษi
 Don ฦirฦirar sabuwar haษi, muna buฦatar ษayan waษannan abubuwan JSON.

 Za mu iya ฦirฦirar ษaya ta hanyar hulษa, ko samar da ษaya ta hanyar fayil ko JSON na zahiri:

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

 ### Lissafin haษin gwiwa
 Jerin abubuwan haษin kai:

    mo connect -l
    mo connect --list

 ### Jujjuya haษin haษin JSON
 Nuna cikakken tsarin JSON don haษi. **GARGADI** wannan zai buga makullai da sirrikan stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Cire haษin haษin gwiwa
 Cire haษi guda ษaya:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Cire duk haษin gwiwa
 Cire DUKAN haษin kai:

    mo connect -R
    mo connect --remove-all

 ## Aiki tare da ajiya
 Da zarar kun ฦirฦiri wasu haษin gwiwa, yi amfani da ayyukan `ls` , `cp` , `rm` , `meta` da `mirror` ayyuka
 yin aiki da su.

 Duk hanyar fayil ษin da kuka bayar zuwa umarni dole ne a sanya shi gaba da sunan haษin
 yana nufin. A cikin misalan da ke ฦasa, muna ษauka akwai haษin gwiwa guda biyu masu suna `conn1` ' da `conn2`

 ### Fayilolin lissafi
 Fitar da umarnin jeri jerin abubuwan JSON ne, ษaya a kowane layi, wakiltar fayiloli
 samu. Waษannan abubuwan za su sami `name` suna' da `type` , da yuwuwar wasu filayen.

    mo ls conn1/some/path

 Yi lissafin fayiloli akai-akai:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Rufe bayanin ma'auni ***: Har yanzu ba a goyan bayan jeri-jeri don rufaffen haษin yanar gizo ba.
 Zaku iya jera kundin adireshi guda ษaya kawai a lokaci guda.

 Yi lissafin fayiloli a zahiri (kyakkyawan bugu JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lissafa fayiloli akai-akai da baki:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Duba taimako don umarnin `ls` , ya bayyana duk zaษuษษuka:

    mo ls -h
    mo ls --help

 ### Rubuta fayil zuwa stdout
 `cat` zai buga fayil zuwa stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 A cikin ruhun UNIX na gaskiya *(duk da haka ba lallai ba ne!)* Umurnin 'cat' na `cat` ** ba ya ษaukar wani zaษi**
 ban da `-h` / `--help` don nuna bayanai masu taimako.

 ### Kwafi fayiloli
 Kwafi fayil guda ษaya daga wayar hannu zuwa wancan:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kwafi fayil guda ษaya daga wayar hannu zuwa wani, canza suna a wurin da aka nufa:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kwafi a kai a kai:

    mo cp -r conn1/some/directory conn2/some/dest/

 Duba taimako don umarni `cp` , ya bayyana duk zaษuษษuka:

    mo cp -h
    mo cp --help

 Lura: Kwafi fayil baya sauri sosai, saboda a halin yanzu yana buฦatar fayil na ษan lokaci na tsaka-tsaki.

 ### Share fayiloli
 Share fayil guda:

    mo rm conn1/some/file.txt

 Share fayil guda ษaya kuma kada ku koka game da kowane kurakurai:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Share directory:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Share kundin adireshi kuma kar a koka kan kowane kurakurai:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Duba metadata
 Yana da amfani sau da yawa don sanin metadata don fayil, ba tare da zazzage dukkan fayil ษin ba.

 Mobiletto zai iya ba da rahoton girman fayil da lokacin gyara na ฦarshe, ban da suna da nau'in.

 Don duba metadata:

    mo meta conn1/some/file.txt

 ### kundayen adireshi na madubi
 Mirroring ya fi wani lamari na musamman na `cp` , umarni ne na mobiletto daban wanda ke kunshe da
 aikin kwafi; yana ci gaba har ma lokacin da kurakurai suka faru, da bin diddigin ฦidayar nasara da kurakurai.

 Don madubi komai daga conn1 zuwa conn2:

    mo mirror conn1 conn2

 Don madubi babban kundin adireshi:

    mo mirror conn1/some/subdir conn2

 Don madubi babban kundin adireshi zuwa wani babban kundin adireshi:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
