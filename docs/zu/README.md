mobiletto-cli
 ==============
 Isixhumi esibonakalayo somugqa womyalo (CLI) se-[mobiletto](https://www.npmjs.com/package/mobiletto)
 isitoreji.

 I-Mobiletto isekela ukuxhumana ne-Amazon S3, i-Backblaze B2, nezinhlelo zamafayela zendawo.

 # Funda lokhu ngolunye ulimi
 Lo mbhalo we-README.md uhunyushwe ngokuthi [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), ku-
 **[zonke izilimi zisekelwa i-Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ngiqinisekile ukuthi ayiphelele, kodwa ngethemba ukuthi ingcono kunalutho!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 isiJalimane](../de/README.md)
 [🇺🇸 IsiNgisi](../zu/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 isi-Indonesian](../id/README.md)
 [🇮🇹 isiNtaliyane](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 isi-Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 isi-Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Isi-Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 isiShayina](../zh/README.md)


 **[📚 ... Zonke Izilimi ...](../README.md)**
 ----

 ### Ingabe kunenkinga ngalokhu kuhunyushwa kwe- README?
 Lokhu kuhunyushwa koqobo [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 ingase ibe namaphutha -- *izilungiso zamukelekile kakhulu!* Sicela uthumele [isicelo sokudonsa ku-GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 noma uma ungakhululekile ukwenza lokho, [vula inkinga](https://github.com/cobbzilla/mobiletto-cli/issues)

 Uma udala udaba olusha lwe-GitHub mayelana nokuhumusha, sicela wenze:
 * faka i-URL yekhasi (kopisha/unamathisele kubha yekheli lesiphequluli)
 * faka phakathi nombhalo ongalungile (kopisha/unamathisele esipheqululini)
 * ngicela uchaze ukuthi yini engalungile -- ingabe ukuhumusha akulungile? ingabe ukufometha kwephukile ngandlela thile?
 * ngomusa nikeza isiphakamiso senguqulo engcono kakhulu, noma indlela umbhalo okufanele ufomethwe kahle ngayo
 * **Ngiyabonga!**

 ### Umthombo
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # Okuqukethwe
 * [Ukufakwa nokusetshenziswa](#Ukufakwa-nokusebenzisa)
 * [npm package](#npm-package)
 * [Kusuka kumthombo](#Kusuka-kumthombo)
 * [Izixhumanisi](#Izixhumanisi)
 * [Dala uxhumano](#Dala-uxhumano)
 * [Faka uhlu lokuxhumana](#Uhlu-ukuxhumana)
 * [Lahla uxhumano lwe-JSON config](#Lahla-uxhumano-JSON-config)
 * [Susa uxhumano](#Susa-uxhumano)
 * [Susa konke ukuxhumana](#Susa-konke-ukuxhumana)
 * [Isebenza ngesitoreji](#Isebenza-ngesitoreji)
 * [Faka uhlu lwamafayela](#Uhlu-amafayela)
 * [Bhala ifayela ukuze u-stdout](#Bhala-ifayela-kuya-stdout)
 * [Kopisha amafayela](#Kopisha-amafayela)
 * [Susa amafayela](#Susa-amafayela)
 * [Buka imethadatha](#Buka-imethadatha)
 * [Imibhalo yesibuko](#Imibhalo-yemibhalo)

 ## Ukufakwa nokusetshenziswa
 Ungafaka futhi usebenzise `mobiletto-cli` nge-npm noma ngokuqondile emthonjeni.

 ### npm iphakheji
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Kusuka kumthombo
 Ukuze uqalise kusuka kumthombo, uzodinga ama-nodejs v16+ kanye nentambo

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Izixhumanisi
 Sonke isitoreji se-mobiletto sifinyelelwa ngoxhumo.

 I-Mobiletto okwamanje isekela ukuxhumeka kusitoreji sesistimu yasendaweni kanye namabhakede e-Amazon S3.

 Ukuxhumana kucaciswe into ye-JSON ebukeka kanje:

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

 Ukuze uthole imininingwane egcwele ngazo zonke izinketho namanani nezincazelo zazo, bheka
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Dala uxhumano
 Ukudala uxhumano olusha, sidinga eyodwa yalezi zinto ze-JSON.

 Singadala eyodwa ngokuhlanganyela, noma siyinikeze ngefayela noma i-JSON yangempela:

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

 ### Faka ohlwini izixhumanisi
 Uhlu lokuxhumana olutholakalayo:

    mo connect -l
    mo connect --list

 ### Lahla uxhumano lwe-JSON config
 Bonisa ukucushwa okugcwele kwe-JSON ukuze kuxhunywe. **ISEXWAYISO** lokhu kuzophrinta okhiye nezimfihlo ku-stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Susa uxhumano
 Susa uxhumano olulodwa:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Susa konke ukuxhumana
 Susa KONKE ukuxhumana:

    mo connect -R
    mo connect --remove-all

 ## Ukusebenza ngesitoreji
 Uma usudale okunye ukuxhumana, sebenzisa `ls` , `cp` , `rm` , `meta` kanye `mirror` imisebenzi.
 ukusebenza nabo.

 Yonke indlela yefayela oyinikeza umyalo kufanele ibe negama lokuxhuma
 libhekisela ku. Ezibonelweni ezingezansi, sithatha ngokuthi kukhona ukuxhumana okubili `conn1` kanye `conn2`

 ### Faka ohlwini amafayela
 Ukukhishwa komyalo wohlu kuwuchungechunge lwezinto ze-JSON, eyodwa ngomugqa ngamunye, emele amafayela
 kutholiwe. Lezi zinto zizoba `name` kanye `type` , futhi mhlawumbe nezinye izinkambu.

    mo ls conn1/some/path

 Faka kuhlu amafayela ngokuphindaphindiwe:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Inothi lesitoreji esibethelwe**: Ukufakwa kuhlu okuphindaphindayo akukakasekelwa ekuxhumekeni okubethelwe.
 Ungafaka ohlwini lwemibhalo eyodwa kuphela ngesikhathi.

 Faka kuhlu amafayela ngokwe-verbosely (i-pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Faka kuhlu amafayela ngokuphindaphindayo nangokwezwi:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Buka usizo `ls` , uchaza zonke izinketho:

    mo ls -h
    mo ls --help

 ### Bhala ifayela ukuze u-stdout
 Umyalo `cat` ifayela ukuze u-stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ngomoya weqiniso we-UNIX *(nokho ngokuqinisekile akuwona umkhuba!)* umyalo `cat` we-mobiletto **awuthathi izinketho**
 ngaphandle kokuthi `-h` / `--help` ukuze ubonise ulwazi oluwusizo.

 ### Kopisha amafayela
 Kopisha ifayela elilodwa ukusuka ku-mobiletto eyodwa ukuya kwelinye:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopisha ifayela elilodwa ukusuka ku-mobiletto eyodwa ukuya kwelinye, uliqambe kabusha lapho uya khona:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopisha ngokuphindiwe uhla lwemibhalo:

    mo cp -r conn1/some/directory conn2/some/dest/

 Buka usizo `cp` , uchaza zonke izinketho:

    mo cp -h
    mo cp --help

 Qaphela: Ukukopisha ifayela akusheshi kakhulu, ngoba okwamanje kudinga ifayela lesikhashana lomlamuli.

 ### Susa amafayela
 Susa ifayela elilodwa:

    mo rm conn1/some/file.txt

 Susa ifayela elilodwa futhi ungakhonondi nganoma yimaphi amaphutha:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Susa uhla lwemibhalo:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Susa uhla lwemibhalo futhi ungakhonondi nganoma yimaphi amaphutha:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Buka imethadatha
 Kuyasiza kakhulu ukwazi imethadatha yefayela, ngaphandle kokulanda lonke ifayela.

 I-Mobiletto iyakwazi ukubika usayizi wefayela kanye nesikhathi sokugcina esilungisiwe, ngaphezu kwegama nohlobo.

 Ukuze ubuke imethadatha:

    mo meta conn1/some/file.txt

 ### Isibuko semibhalo
 Ukwenza isibuko kungaphezu kwekesi elikhethekile `cp` , kungumyalo ohlukile we-mobiletto ogoqa ifayela
 umsebenzi wokukopisha; iyaqhubeka noma kwenzeka amaphutha, futhi ilandelela isibalo sempumelelo namaphutha.

 Ukufanisa yonke into kusuka ku-conn1 kuya ku-conn2:

    mo mirror conn1 conn2

 Ukwenza isifaniso sohla lwemibhalo olungaphansi:

    mo mirror conn1/some/subdir conn2

 Ukufanisa uhla lwemibhalo kolunye uhla lwemibhalo olungaphansi:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
