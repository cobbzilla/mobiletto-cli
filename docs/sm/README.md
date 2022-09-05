mobiletto-cli
 =============
 O se fa'atonuga laina laina (CLI) mo [mobiletto](https://www.npmjs.com/package/mobiletto)
 teuina.

 E lagolagoina e Mobiletto feso'ota'iga i le Amazon S3, Backblaze B2, ma faila faila i le lotoifale.

 # Faitau lenei i se isi gagana
 O lenei README.md pepa ua faaliliuina, e ala i le [hokeylization](https://github.com/cobbzilla/hokeylization), i totonu
 **[gagana uma e lagolagoina e Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ou te mautinoa e le atoatoa, ae ou te faʻamoemoe e sili atu nai lo le leai!

 [🇸🇦 Alapi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Siamani](../de/README.md)
 [🇺🇸 Igilisi](../en/README.md)
 [🇪🇸 Sipaniolo](../es/README.md)
 [🇫🇷 Farani](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Initonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Iapani](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polani](../pl/README.md)
 [🇧🇷 Potukale](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Saina](../zh/README.md)


 **[📚 ... Gagana Uma ...](../README.md)**
 ----

 ### E iai se fa'afitauli i lenei fa'aliliuga o le README?
 Lenei fa'aliliuga fa'apitoa o le ulua'i [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 atonu e sese -- *fa'asa'oga e matua talia lava!* Fa'amolemole lafo mai se [talosaga toso ile GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 pe afai e te le fiafia e fai lena mea, [tatala se mataupu](https://github.com/cobbzilla/mobiletto-cli/issues)

 A e fatuina se lomiga fou GitHub e uiga i se faaliliuga, faamolemole fai:
 * fa'aaofia ai le itulau URL (kopi/pa'i mai le tuatusi tuatusi pa)
 * fa'aaofia ai le fa'amatalaga sa'o e sese (kopi/pa'i mai le su'esu'ega)
 * fa'amolemole fa'amatala le mea o lo'o fa'aletonu -- e le sa'o le fa'aliliuga? ua malepe le faatulagaga?
 * ofo mai ma le agalelei se fautuaga o se faaliliuga e sili atu, po o le auala e tatau ona faatulaga lelei ai le tusitusiga
 * **Faafetai!**

 # I totonu
 * [Source](#Source)
 * [Lagolago ma le Faatupeina](#Support-and-Funding)
 * [Fa'apipi'i ma fa'aoga](#Fa'apipi'i-ma-fa'aoga)
 * [npm package](#npm-package)
 * [Mai puna](#From-source)
 * [So'oga](#So'oga)
 * [Fausia se fesoʻotaʻiga](#Fausia-se-soʻoga)
 * [Lisi feso'ota'iga](#Lisi-so'oga)
 * [Lafoa'i feso'ota'iga JSON config](#Dump-so'oga-JSON-config)
 * [Aveese se fesoʻotaʻiga](#Remove-a-connection)
 * [Aveese uma so'oga](#Remove-all-connections)
 * [Galue ma le teuina](#Galue-ma-teuga)
 * [Lisi faila](#Lisi-faila)
 * [Tusi se faila i le stdout](#Write-a-file-to-stdout)
 * [Kopi faila](#Kopi-faila)
 * [Tape faila](#Delete-faila)
 * [Va'ai metadata](#View-metadata)
 * [Fa'ata fa'atonuga](#Fa'ata-fa'atonuga)

 ### Punavai
 * [mobiletto-cli i le GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Lagolago ma Faatupeina
 O lo'o ou taumafai e avea a'u ma se tagata fa'apolofesa fa'apolofesa fa'apolofesa matala. Sa ou galue i totonu
 le pisinisi faakomepiuta mo le tele o tausaga, ua ou amataina kamupani manuia ma faatau atu i kamupani lautele.
 Talu ai nei na ou leiloa ai laʻu galuega, ma e leai lava se isi galuega o loʻo faʻatulagaina

 O lea o le a ou taumafai e tusi le polokalama fesoasoani ma vaai pe aoga

 Afai e te fiafia e faʻaaoga lenei polokalama, ou te matua faʻafetai lava mo le
 aupito itiiti [saomea faalemasina e ala i Patreon](https://www.patreon.com/cobbzilla)

 *Faafetai!*

 ## Fa'apipi'i ma fa'aoga
 E mafai ona e faʻapipiʻi ma taʻavale `mobiletto-cli` e ala ile npm pe tuusaʻo mai le puna.

 ### npm afifi
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Mai puna
 E te tamoe mai le puna, e te manaʻomia nodejs v16+ ma vulu

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## So'oga
 E maua uma le teuina o mobiletto e ala i se feso'ota'iga.

 O lo'o lagolagoina nei e Mobiletto feso'ota'iga i le faila faila i le lotoifale ma pakete Amazon S3.

 O fesoʻotaʻiga e faʻamaonia e se mea JSON e pei o lenei:

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

 Mo fa'amatalaga atoa i filifiliga uma ma o latou taua ma uiga, va'ai le
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Fausia se sootaga
 Ina ia fatuina se fesoʻotaʻiga fou, matou te manaʻomia se tasi o nei mea JSON.

 E mafai ona matou fatuina se tasi fefaʻasoaaʻi, pe tuʻuina atu se tasi e ala i se faila poʻo le JSON moni:

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

 ### Lisi feso'ota'iga
 Lisi feso'ota'iga avanoa:

    mo connect -l
    mo connect --list

 ### Lafoa'i feso'ota'iga JSON config
 Faaali le JSON config atoa mo se sootaga. **Lapataiga** e lolomi ai ki ma mealilo ile stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Aveese se sootaga
 Aveese se feso'ota'iga e tasi:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Aveese uma so'oga
 Ave'ese so'oga uma:

    mo connect -R
    mo connect --remove-all

 ## Galulue ma le teuina
 A mae'a ona e faia ni feso'ota'iga, fa'aoga le `ls` , `cp` , `rm` , `meta` ma `mirror` gaioiga.
 e galulue faatasi ma i latou.

 O ala faila uma e te tuʻuina atu i se faʻatonuga e tatau ona faʻapipiʻi i le igoa o le fesoʻotaʻiga
 e faasino i. I faʻataʻitaʻiga o loʻo i lalo, matou te manatu e lua fesoʻotaʻiga o loʻo i ai igoa `conn1` ma `conn2`

 ### Lisi faila
 O le gaioiga o se lisi lisi o se faasologa o mea JSON, tasi i le laina, e fai ma sui o faila
 maua. O nei mea faitino o le ai ai se `name` ma `type` , ma atonu o isi fanua.

    mo ls conn1/some/path

 Lisi faila fa'asolosolo:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Fa'amatalaga e teu ai fa'ailoga**: E le'i lagolagoina le lisi toe fa'ailoga mo feso'ota'iga fa'ailoga.
 E na'o le tasi le lisi o faila e mafai ona e lisiina ile taimi.

 Lisi faila i upu (matagofie-lomi JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lisi faila fa'asolosolo ma fa'aupuga:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Va'ai fesoasoani mo le `ls` fa'atonuga, fa'amatala uma filifiliga:

    mo ls -h
    mo ls --help

 ### Tusi se faila e stdout
 O le `cat` poloaiga o le a lolomi ai se faila i le stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 I le agaga moni UNIX *(ae mautinoa lava e le o le masani!)* mobiletto's `cat` poloaiga **e leai ni filifiliga**
 e ese mai le `-h` / `--help` e fa'aalia ai fa'amatalaga fesoasoani.

 ### Kopi faila
 Kopi se faila se tasi mai le tasi mobiletto i le isi:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopi se faila se tasi mai le tasi mobiletto i le isi, toe faʻaigoaina i le mea e alu i ai:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopi fa'asolosolo se lisi:

    mo cp -r conn1/some/directory conn2/some/dest/

 Va'ai fesoasoani mo le `cp` fa'atonuga, fa'amatala uma filifiliga:

    mo cp -h
    mo cp --help

 Manatua: O le kopiina o faila e le vave tele, aua o loʻo manaʻomia nei se faila temp intermediary.

 ### Aveese faila
 Aveese se faila e tasi:

    mo rm conn1/some/file.txt

 Aveese se faila e tasi ma aua le faitio i ni mea sese:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Ave'ese se lisi:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Ave'ese se lisi ma aua le faitio i ni mea sese:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Va'ai metadata
 E masani ona aoga le iloa o metadata mo se faila, e aunoa ma le la'uina o le faila atoa.

 E mafai e Mobiletto ona lipotia le tele o faila ma le taimi toe suia, faʻaopoopo i le igoa ma le ituaiga.

 E matamata i metadata:

    mo meta conn1/some/file.txt

 ### Fa'ata fa'atonuga
 Mirroring e sili atu nai lo se tulaga faʻapitoa o le `cp` , o se faʻatonuga mobiletto ese e afifi ai le
 galuega kopi; e fa'aauau pea e tusa lava pe tutupu ni mea sese, ma siaki le faitau aofa'i o manuia ma mea sese.

 Fa'ata mea uma mai le conn1 i le conn2:

    mo mirror conn1 conn2

 E fa'atusa se subdirectory:

    mo mirror conn1/some/subdir conn2

 Ina ia fa'atusa se subdirectory i se isi subdirectory:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
