mobiletto-cli
 ==============
 Ujongano lomgca womyalelo (CLI) we [mobiletto](https://www.npmjs.com/package/mobiletto)
 yokugcina.

 I-Mobiletto ixhasa uqhagamshelo kwi-Amazon S3, i-Backblaze B2, kunye neenkqubo zefayile zendawo.

 # Funda oku ngolunye ulwimi
 Olu xwebhu README.md luguqulelwe, kusetyenziswa [hokeylization](https://github.com/cobbzilla/hokeylization), kwi
 **[lonke ulwimi luxhaswa yiToliki kaGoogle](https://cloud.google.com/translate/docs/languages)!**

 Ndiqinisekile ukuba ayifezekanga, kodwa ndiyathemba ukuba ingcono kunanto!

 [🇸🇦 isiArabhu](amaxwebhu/ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 isiJamani](../de/README.md)
 [🇺🇸 IsiNgesi](../en/README.md)
 [🇪🇸 ISpanish](amaxwebhu/es/README.md)
 [🇫🇷 isiFrentshi](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 isi-Indonesian](../id/README.md)
 [🇮🇹 IsiTaliyane](amaxwebhu/it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 isiKorea](amaxwebhu/ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 IsiPhuthukezi](amaxwebhu/pt/README.md)
 [🇷🇺 IsiRashiya](../ru/README.md)
 [🇰🇪 IsiSwahili](amaxwebhu/sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 IsiTurkey](../tr/README.md)
 [🇵🇰 Urdu](amaxwebhu/ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 isiTshayina](../zh/README.md)


 **[📚 ... Zonke Iilwimi ...](amaxwebhu/README.md)**
 ----

 ### Ngaba kukho ingxaki ngoluguqulelo lwe-FUNDA?
 Le nguqulelo yoqobo [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 isenokuba neziphene -- *izilungiso zamkelekile kakhulu!* Nceda uthumele [isicelo sokutsala kwi-GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 okanye ukuba awukhululekanga ukwenza loo nto, [vula umcimbi](https://github.com/cobbzilla/mobiletto-cli/issues)

 Xa usenza umba omtsha weGitHub malunga nenguqulelo, nceda wenze:
 * bandakanya i-URL yephepha (ikopi/uncamathisele kwibar yedilesi yomkhangeli zincwadi)
 * bandakanya isicatshulwa kanye esingalunganga (khuphela/uncamathisele kwisikhangeli)
 * Nceda uchaze ukuba yintoni engalunganga -- ingaba uguqulelo aluchanekanga? Ngaba ukufomatha kwaphukile ngandlela ithile?
 * ngobubele nikela icebiso lenguqulelo engcono, okanye indlela umbhalo ofanele ubhalwe ngokufanelekileyo
 * **Enkosi!**

 # Imixholo
 * [Umthombo](#Umthombo)
 * [Inkxaso kunye neNkxaso](#Inkxaso-kunye-neNkxaso-mali)
 * [Ufakelo kunye nokusetyenziswa](#Fakelo-kunye-usetyenziso)
 * [npm package](#npm-package)
 * [Ukusuka kumthombo](#Ukusuka-umthombo)
 * [Uqhagamshelwano](#Uqhagamshelwano)
 * [Yenza umdibaniso](#Yenza-uqhagamshelo)
 * [Uluhlu loqhagamshelo](#Uluhlu-imidibaniso)
 * [Lahla uxhulumaniso lwe-JSON config](#Ukulahla-uqhagamshelo-JSON-config)
 * [Susa umdibaniso](#Susa-uqhagamshelo)
 * [Susa lonke uqhagamshelo](#Susa-zonke-iiqhagamshelo)
 * [Isebenza ngogcino](#Isebenza-ngendawo yokugcina)
 * [Uluhlu lweefayile](#Uluhlu-iifayile)
 * [Bhala ifayile ku-stdout](#Bhala-ifayile-ukuya-stdout)
 * [Kopisha iifayile](#Khuphela-iifayile)
 * [Cima iifayile](#Cima-iifayile)
 * [Jonga imetadata](#Jonga-imetadata)
 * [Izalathisi zesipili](#Mirror-directory)

 ### Umthombo
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Inkxaso kunye neNkxaso
 Ndizama ukuba ngumphuhlisi wesoftware ovulelekileyo. Bendisebenza ngaphakathi
 ishishini lesoftware iminyaka emininzi, ndiqale iinkampani eziphumeleleyo kwaye ndazithengisa kwiinkampani zoluntu.
 Kutshanje ndiye ndaphelelwa ngumsebenzi, yaye andinawo omnye umsebenzi endiwudwelisileyo

 Ke ndiza kuzama ukubhala isoftware eluncedo kwaye ndibone ukuba iyasebenza na

 Ukuba uyakonwabela ukusebenzisa le software, ndingabulela ngokungazenzisiyo nokuba
 incinci [igalelo lenyanga ngePatreon](https://www.patreon.com/cobbzilla)

 *Enkosi!*

 ## Ufakelo kunye nokusetyenziswa
 Ungafaka kwaye usebenzise `mobiletto-cli` nge-npm okanye ngokuthe ngqo kwimvelaphi.

 ### npm iphakheji
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ukusuka kwimvelaphi
 Ukuze usebenze kumthombo, uya kufuna ii-nodejs v16+ kunye nomsonto

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Uqhagamshelwano
 Lonke ugcino lwemobiletto lufumaneka ngoqhagamshelo.

 I-Mobiletto okwangoku ixhasa uqhagamshelo kugcino lwefayile yendawo kunye neebhakethi ze-Amazon S3.

 Uqhagamshelo lucaciswe yinto ye-JSON ejongeka ngolu hlobo:

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

 Ukufumana iinkcukacha ezipheleleyo kuzo zonke iinketho kunye nexabiso kunye neentsingiselo zazo, bona
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Yenza umdibaniso
 Ukwenza unxibelelwano olutsha, sifuna enye yezi zinto ze-JSON.

 Singayenza enye ngokudibeneyo, okanye sinikeze enye ngefayile okanye i-JSON yangempela:

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

 ### Dwelisa imidibaniso
 Dwelisa imidibaniso ekhoyo:

    mo connect -l
    mo connect --list

 ### Lahla umdibaniso we-JSON config
 Bonisa uqwalaselo olupheleleyo lwe-JSON lodibaniso. **ISILUMKISO** oku kuya kuprinta izitshixo kunye neemfihlo zestdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Susa umdibaniso
 Susa umdibaniso omnye:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Susa yonke imidibaniso
 Susa LONKE imidibaniso:

    mo connect -R
    mo connect --remove-all

 ## Ukusebenza ngogcino
 Nje ukuba wenze imidibaniso ethile, sebenzisa i `ls` , `cp` , `rm` , `meta` kunye `mirror` imisebenzi.
 ukusebenza nabo.

 Yonke indlela yefayile oyinikezelayo kumyalelo kufuneka ilungiswe ngegama lodibaniso
 ibhekisa ku. Kwimizekelo engezantsi, sithatha ukuba kukho imidibaniso emibini ekhoyo ebizwa `conn1` kunye `conn2`

 ### Dwelisa iifayile
 Imveliso yomyalelo woluhlu luluhlu lwezinto ze JSON, enye ngomgca ngamnye, imele iifayile
 ifunyenwe. Ezi zinto zizakuba ne `name` kunye `type` , kwaye kunokwenzeka neminye imihlaba.

    mo ls conn1/some/path

 Dwelisa iifayile ngokuphindaphindiweyo:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Inqaku lokugcina elinoguqulelo oluntsonkothileyo**: Uluhlu oluphinda-phindayo alukaxhaswa kuqhagamshelwano oluntsonkothileyo.
 Ungadwelisa kuphela ulawulo lweefayile ngexesha.

 Dwelisa iifayile ngokwe-verbosely (shicilelo elihle le-JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Dwelisa iifayile ngokuphinda-phindiweyo kunye ne-verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Jonga uncedo `ls` , uchaza zonke iinketho:

    mo ls -h
    mo ls --help

 ### Bhala ifayile kwistdout
 Umyalelo `cat` uya kuprinta ifayile kwistdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Kumoya wokwenyani we-UNIX *(kodwa ngokuqinisekileyo ayisiyiyo isiqhelo!)* Umyalelo we-mobiletto `cat` **awuthathi ndlela zimbi**
 ngaphandle kwe `-h` / `--help` ukubonisa ulwazi oluluncedo.

 ### Khuphela iifayile
 Khuphela ifayile enye ukusuka kwimobiletto ukuya kwenye:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Khuphela ifayile enye ukusuka kwenye imobiletto ukuya kwenye, uyiqambe ngokutsha kwindawo oya kuyo:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Khuphela kwakhona uvimba weefayili:

    mo cp -r conn1/some/directory conn2/some/dest/

 Jonga uncedo `cp` , uchaza zonke iinketho:

    mo cp -h
    mo cp --help

 Qaphela: Ukukhuphela ifayile akukhawulezi kakhulu, kuba okwangoku kufuna ifayile yexesha eliphakathi.

 ### Cima iifayile
 Cima ifayile enye:

    mo rm conn1/some/file.txt

 Cima ifayile enye kwaye ungakhalazi ngazo naziphi na iimpazamo:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Cima uvimba weefayili:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Cima uvimba weefayili kwaye ungakhalazi ngazo naziphi na iimpazamo:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Jonga imetadata
 Kuhlala kuluncedo ukwazi imetadata yefayile, ngaphandle kokukhuphela yonke ifayile.

 I-Mobiletto iyakwazi ukuchaza ubungakanani befayile kunye nexesha lokugqibela elilungisiweyo, ukongeza kwigama kunye nohlobo.

 Ukujonga imetadata:

    mo meta conn1/some/file.txt

 ### Isipili sabalawuli
 Isibuko singaphezulu kwemeko ekhethekileyo ye `cp` , ngumyalelo owahlukileyo wemobiletto osonga i
 umsebenzi wokukopa; iyaqhubeka naxa iimpazamo zisenzeka, kwaye ulandelele impumelelo neempazamo.

 Ukujonga yonke into ukusuka kwi-conn1 ukuya kwi-conn2:

    mo mirror conn1 conn2

 Ukujonga uvimba weefayili onganeno:

    mo mirror conn1/some/subdir conn2

 Ukwenza isipili sikavimba weefayili kolunye uvimba weefayili:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
