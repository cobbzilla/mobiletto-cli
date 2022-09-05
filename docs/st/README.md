mobiletto-cli
 =============
 Khokahano ea mola oa litaelo (CLI) bakeng sa [mobiletto](https://www.npmjs.com/package/mobiletto)
 polokelo.

 Mobiletto e ts'ehetsa likhokahano ho Amazon S3, Backblaze B2, le lits'ebetso tsa lifaele tsa lehae.

 # Bala sena ka puo e 'ngoe
 Tokomane ena ea README.md e fetoletsoe, ka [hokeylization](https://github.com/cobbzilla/hokeylization), ho
 **[puo e nngwe le e nngwe e tshehetswa ke Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ke na le bonnete ba hore ha ea phethahala, empa ke ts'epa hore e betere ho feta letho!

 [🇸🇦 Searabia](../ar/README.md)
 [🇧🇩 Benghali](../bn/README.md)
 [🇩🇪 Sejeremane](../de/README.md)
 [🇺🇸 Senyesemane](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 Sefora](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Sehindi](../hi/README.md)
 [🇮🇩 Seindonesia](../id/README.md)
 [🇮🇹 Setaliana](../it/README.md)
 [🇯🇵 Sejapane](../ja/README.md)
 [🇰🇷 Sekorea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Sepolishe](../pl/README.md)
 [🇧🇷 Sepotoketsi](../pt/README.md)
 [🇷🇺 Serussia](../ru/README.md)
 [🇰🇪 Seswahili](../sw/README.md)
 [🇵🇭 Setagalog](../tl/README.md)
 [🇹🇷 Seturkey](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Sevietnam](../vi/README.md)
 [🇨🇳 Sechaena](../zh/README.md)


 **[📚 ... Lipuo Tsohle ...](../README.md)**
 ----

 ### Na ho na le bothata ka phetolelo ee ea README?
 Phetolelo ena ea pele ea [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 e kanna ea ba le bofokoli -- *litokiso li amohelehile!* Ka kopo romella [ho hula kopo ho GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 kapa ha o sa phutholoha ho etsa joalo, [bula bothata](https://github.com/cobbzilla/mobiletto-cli/issues)

 Ha o theha taba e ncha ea GitHub mabapi le phetolelo, ka kopo etsa:
 * kenyelletsa URL ea leqephe (kopi / beha ho tsoa bareng ea aterese ea sebatli)
 * kenyelletsa mongolo o nepahetseng (kopi / beha ho tsoa ho sebatli)
 * Ka kopo hlalosa se fosahetseng -- na phetolelo e fosahetse? na sebopeho se robehile ka tsela e itseng?
 * ka mosa fana ka tlhahiso ea phetolelo e molemonyana, kapa hore na taba e ngotsoe joang ka tsela e nepahetseng
 * **Kea leboha!**

 # Litaba
 * [Mohloli](#Mohloli)
 * [Tšehetso le Lichelete](#Tšehetso-le-Lichelete)
 * [Kenyello le tšebeliso](#Kenya-le-tsebeliso)
 * [pakete ea npm](#npm-package)
 * [Ho tsoa mohloling](#Ho tsoa mohloling)
 * [Likhokahano](#Likhokahano)
 * [Theha khokahano](#Theha-khokahanyo)
 * [Lethathamo la likhokahano](#Likhokahano tsa lethathamo)
 * [Khokelo ea ho lahla JSON config](#Dump-connection-JSON-config)
 * [Tlosa kgokelo](#Tlosa-kgokelo)
 * [Tlosa likhokahano tsohle](#Tlosa-mahokelo-tsohle)
 * [E sebetsa ka polokelo](#Ho sebetsa ka polokelo)
 * [Lethathamo la lifaele](#Lethathamo-lifaele)
 * [Ngola faele ho stdout](#Ngola-faele-ho-stdout)
 * [Kopitsa lifaele](#Copy-file)
 * [Hlakola lifaele](#Delete-file)
 * [Sheba lintlha](#Sheba-metadata)
 * [Libuka tsa seipone](#Mirror-directory)

 ### Mohloli
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Tšehetso le Lichelete
 Ke leka ho ba setsebi sa software ea open source software. Ke ntse ke sebetsa
 indasteri ea software ka lilemo tse ngata, ke qalile lik'hamphani tse atlehileng mme ka li rekisetsa lik'hamphani tsa sechaba.
 Haufinyane tjena ke lahlehetsoe ke mosebetsi, 'me ha ho na mosebetsi o mong oo ke o lokiselitseng

 Kahoo ke tla leka ho ngola software e thusang mme ke bone hore na e ea sebetsa

 Haeba u natefeloa ke ho sebelisa software ena, ke tla leboha haholo bakeng sa eona
 e nyane [monehelo oa khoeli le khoeli ka Patreon](https://www.patreon.com/cobbzilla)

 *Kea leboha!*

 ## Ho kenya le tšebeliso
 O ka kenya le ho tsamaisa `mobiletto-cli` ka npm kapa ka kotloloho ho tsoa mohloling.

 ### npm sephutheloana
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ho tsoa mohloling
 Ho matha ho tsoa mohloling, o tla hloka li-nodejs v16+ le khoele

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Likamano
 Polokelo eohle ea mobiletto e fumaneha ka khokahanyo.

 Mobiletto hajoale e ts'ehetsa likhokahano tsa polokelo ea sistimi ea lehae le linkho tsa Amazon S3.

 Lihokelo li hlalositsoe ke ntho ea JSON e shebahalang tjena:

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

 Bakeng sa lintlha tse felletseng mabapi le likhetho tsohle le boleng ba tsona le meelelo, bona
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Theha khokahano
 Ho theha khokahano e ncha, re hloka e 'ngoe ea lintho tsena tsa JSON.

 Re ka theha e 'ngoe ka ho sebelisana, kapa ra fana ka eona ka faele kapa JSON ea sebele:

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

 ### Etsa lethathamo la likhokahano
 Etsa lethathamo la likhokahano tse teng:

    mo connect -l
    mo connect --list

 ### Khokahano ea ho lahla JSON config
 Hlahisa sebopeho se felletseng sa JSON bakeng sa khokahano. **TEMOSO** sena se tla hatisa linotlolo le makunutu ho stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Tlosa khokahano
 Tlosa khokahano e le 'ngoe:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Tlosa likhokahano tsohle
 Tlosa likhokahano TSOHLE:

    mo connect -R
    mo connect --remove-all

 ## Ho sebetsa ka polokelo
 Ha u se u thehile likhokahano tse ling, sebelisa lits'ebetso tsa `ls` , `cp` , `rm` , `meta` le `mirror` .
 ho sebetsa le bona.

 Tsela e 'ngoe le e' ngoe ea faele eo u fanang ka eona taelong e tlameha ho hlophisoa ka lebitso la khokahano
 e bua ka. Mehlaleng e ka tlase, re nka hore likhokahano tse peli li teng tse bitsoang `conn1` le `conn2`

 ### Thathamisa lifaele
 Sephetho sa taelo ea lenane ke letoto la lintho tsa JSON, e le 'ngoe ka mola, e emelang lifaele
 fumanehile. Lintho tsena li tla ba le `name` le `type` , 'me mohlomong le likarolo tse ling.

    mo ls conn1/some/path

 Hlahisa lifaele ka ho pheta-pheta:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Tlhaloso ea polokelo e kentsoeng**: Lethathamo le phetoang ha le so tšehetsoe bakeng sa likhokahano tse patiloeng.
 O ka thathamisa buka e le 'ngoe feela ea lifaele ka nako.

 Etsa lethathamo la lifaele ka lentsoe le le leng (li hatisa JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Hlahisa lifaele ka ho pheta-pheta le ka mantsoe:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Sheba thuso bakeng sa taelo ea `ls` , e hlalosa likhetho tsohle:

    mo ls -h
    mo ls --help

 ### Ngola faele ho stdout
 Taelo ea `cat` e tla hatisa faele ho stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ka moea oa 'nete oa UNIX *(empa ha se tloaelo!)* taelo ea mobiletto ea `cat` ** ha e nke likhetho **
 ntle le `-h` / `--help` ho hlahisa lintlha tse thusang.

 ### Kopitsa lifaele
 Kopitsa faele e le 'ngoe ho tloha mobiletto e' ngoe ho ea ho e 'ngoe:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopitsa faele e le 'ngoe ho tloha mobiletto e' ngoe ho ea ho e 'ngoe, u e reha lebitso sebakeng seo u eang ho sona:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopitsa bukana khafetsa:

    mo cp -r conn1/some/directory conn2/some/dest/

 Sheba thuso bakeng sa taelo ea `cp` , e hlalosa likhetho tsohle:

    mo cp -h
    mo cp --help

 Tlhokomeliso: Ho kopitsa faele ha ho potlake haholo, hobane hajoale ho hloka faele ea nakoana.

 ### Hlakola lifaele
 Hlakola faele e le 'ngoe:

    mo rm conn1/some/file.txt

 Hlakola faele e le 'ngoe 'me u se ke ua tletleba ka liphoso leha e le life:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Hlakola bukana:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Hlakola bukana 'me u se ke ua tletleba ka liphoso leha e le life:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Sheba metadata
 Hangata ho molemo ho tseba metadata ea faele, ntle le ho khoasolla faele eohle.

 Mobiletto e khona ho tlaleha boholo ba faele le nako ea ho qetela e fetotsoeng, ho kenyelletsa lebitso le mofuta.

 Ho sheba metadata:

    mo meta conn1/some/file.txt

 ### Likhokahano tsa seipone
 Mirroring e feta taba e khethehileng ea `cp` , ke taelo e arohaneng ea mobiletto e koahelang
 ts'ebetso ea kopo; e tsoela pele le ha liphoso li etsahala, 'me u latele palo ea likatleho le liphoso.

 Ho bonahatsa ntho e 'ngoe le e' ngoe ho tloha conn1 ho ea conn2:

    mo mirror conn1 conn2

 Ho etsisa subdirectory:

    mo mirror conn1/some/subdir conn2

 Ho hlahisa bukana e nyane ho subdirectory e 'ngoe:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
