mobiletto-cli
 ==============
 Komando-lerroko interfazea (CLI) [mobiletto](https://www.npmjs.com/package/mobiletto)
 biltegiratzea.

 Mobiletto-k Amazon S3, Backblaze B2 eta tokiko fitxategi-sistemetarako konexioak onartzen ditu.

 # Irakurri hau beste hizkuntza batean
 README.md dokumentu hau [hokeylization](https://github.com/cobbzilla/hokeylization) bidez itzuli da.
 **[Google Translate-k onartzen duen hizkuntza guztietan](https://cloud.google.com/translate/docs/languages)!**

 Ziur nago ez dela perfektua, baina espero dut ezer baino hobea izatea!

 [🇸🇦 arabiera](../ar/README.md)
 [🇧🇩 bengalera](../bn/README.md)
 [🇩🇪 alemana](../de/README.md)
 [🇺🇸 Ingelesa](../eu/README.md)
 [🇪🇸 Gaztelania](../es/README.md)
 [🇫🇷 frantsesa](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesiera](../id/README.md)
 [🇮🇹 italiera](../it/README.md)
 [🇯🇵 Japoniera](../ja/README.md)
 [🇰🇷 koreera](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poloniera](../pl/README.md)
 [🇧🇷 portugesa](../pt/README.md)
 [🇷🇺 errusiera](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkiera](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamera](../vi/README.md)
 [🇨🇳 txinera](../zh/README.md)


 **[📚 ... Hizkuntza guztiak ...](../README.md)**
 ----

 ### Arazorik al dago IRAKURRI-ren itzulpen honekin?
 [README] jatorrizkoaren itzulpen zehatz hau (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 akatsa izan daiteke -- *zuzenketak oso ongi etorriak dira!* Bidali [pull eskaera GitHub-en](https://github.com/cobbzilla/mobiletto-cli/pulls),
 edo hori egiten eroso ez bazaude, [ireki arazo bat](https://github.com/cobbzilla/mobiletto-cli/issues)

 Itzulpen bati buruzko GitHub-en arazo berri bat sortzen duzunean, egin:
 * Sartu orriaren URLa (kopiatu/itsatsi arakatzailearen helbide barratik)
 * sartu oker dagoen testu zehatza (kopiatu/itsatsi arakatzailetik)
 * Mesedez, deskribatu zer dagoen gaizki -- itzulpena okerra al da? formatua hautsi al da nolabait?
 * Mesedez, eskaini itzulpen hobeago baten iradokizuna, edo testua nola formateatu behar den
 * **Eskerrik asko!**

 # Edukiak
 * [Iturria](#Iturria)
 * [Laguntza eta finantzaketa](#Support-and-Funding)
 * [Instalazioa eta erabilera](#Instalazioa eta erabilera)
 * [npm paketea](#npm-package)
 * [Iturburutik](#Iturburutik)
 * [Konexioak](#Konexioak)
 * [Sortu konexio bat](#Create-a-connection)
 * [Zerrenda konexioak](#List-connections)
 * [Dump konexioa JSON konfigurazioa](#Dump-connection-JSON-config)
 * [Kendu konexio bat](#Kendu-konexio bat)
 * [Kendu konexio guztiak](#Kendu-konexio guztiak)
 * [Biltegiratzearekin lan egiten](#Biltegiratzearekin lan egitea)
 * [Zerrenda fitxategiak](#List-fitxategiak)
 * [Idatzi fitxategi bat stdout-era](#Write-a-file-to-stdout)
 * [Kopiatu fitxategiak](#Kopiatu-fitxategiak)
 * [Ezabatu fitxategiak](#Delete-fitxategiak)
 * [Ikusi metadatuak](#View-metadata)
 * [Ispilu direktorioa](#Ispilu-direktorioak)

 ### Iturria
 * [mobiletto-cli GitHub-en](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli npm-n](https://www.npmjs.com/package/mobiletto-cli)

 ## Laguntza eta finantzaketa
 Kode irekiko software garatzaile profesionala izaten saiatzen ari naiz. lanean aritu naiz
 urte askotan softwarearen industrian, enpresa arrakastatsuak sortu eta enpresa publikoei saldu ditut.
 Duela gutxi lana galdu nuen, eta ez daukat beste lanik prest

 Beraz, software lagungarria idazten saiatuko naiz eta ea funtzionatzen duen

 Software hau erabiltzea gustatzen bazaizu, benetan eskertuko nuke
 txikiena [Patreon bidezko hileko ekarpena](https://www.patreon.com/cobbzilla)

 *Eskerrik asko!*

 ## Instalazioa eta erabilera
 `mobiletto-cli` instalatu eta exekutatu dezakezu npm bidez edo zuzenean iturburutik.

 ### npm paketea
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Iturburutik
 Iturburutik exekutatzeko, nodejs v16+ eta yarn beharko dituzu

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Konexioak
 Mobiletto biltegiratze guztia konexio baten bidez sartzen da.

 Une honetan Mobilettok fitxategi-sistema lokaleko biltegiratze eta Amazon S3 kuboetarako konexioak onartzen ditu.

 Konexioak itxura hau duen JSON objektu batek zehazten ditu:

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

 Aukera guztiei eta haien balioei eta esanahiei buruzko xehetasun osoak lortzeko, ikusi
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Sortu konexio bat
 Konexio berri bat sortzeko, JSON objektu hauetako bat behar dugu.

 Interaktiboki bat sor dezakegu, edo fitxategi edo JSON literal baten bidez hornitu:

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

 ### Zerrendatu konexioak
 Zerrendatu eskuragarri dauden konexioak:

    mo connect -l
    mo connect --list

 ### Iraultzi konexioa JSON konfigurazioa
 Erakutsi JSON konfigurazio osoa konexio baterako. ** KONTUZ ** honek gakoak eta sekretuak inprimatuko ditu stdout-en.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Kendu konexio bat
 Kendu konexio bakarra:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Kendu konexio guztiak
 Kendu konexio GUZTIAK:

    mo connect -R
    mo connect --remove-all

 ## Biltegiratzearekin lan egiten
 Konexio batzuk sortu ondoren, erabili `ls` , `cp` , `rm` , `meta` eta `mirror` eragiketak
 haiekin lan egiteko.

 Komando bati ematen diozun fitxategi bide bakoitzari konexioaren izena jarri behar zaio
 aipatzen du. Beheko adibideetan, `conn1` eta `conn2` izeneko bi konexio daudela suposatzen dugu

 ### Zerrendatu fitxategiak
 Zerrenda-komando baten irteera JSON objektu multzo bat da, lerro bakoitzeko bat, fitxategiak adierazten dituena
 aurkituta. Objektu hauek `name` eta `type` izango dituzte, eta baliteke beste eremu batzuk.

    mo ls conn1/some/path

 Zerrendatu fitxategiak modu errekurtsiboan:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Enkriptatutako biltegiratze-oharra**: zerrenda errekurtsiboa oraindik ez da onartzen enkriptatutako konexioetarako.
 Fitxategien direktorio bakarra zerrenda dezakezu aldi berean.

 Zerrendatu fitxategiak modu zehatzean (JSON nahiko inprimatua):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Zerrendatu fitxategiak modu errekurtsiboan eta zehatzean:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Ikusi `ls` komandoaren laguntza, aukera guztiak deskribatzen ditu:

    mo ls -h
    mo ls --help

 ### Idatzi fitxategi bat stdout-era
 `cat` komandoak fitxategi bat inprimatuko du stdout-era:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Benetako UNIX izpirituan *(oraindik ez da praktika!)* mobiletto-ren `cat` komandoak **ez du aukerarik hartzen**
 `-h` / `--help` ez ezik, informazio lagungarria bistaratzeko.

 ### Kopiatu fitxategiak
 Kopiatu fitxategi bakar bat mobiletto batetik bestera:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopiatu fitxategi bakar bat mobiletto batetik bestera, helmugan izena aldatuz:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Errekurtsiboki kopiatu direktorio bat:

    mo cp -r conn1/some/directory conn2/some/dest/

 Ikusi `cp` komandoaren laguntza, aukera guztiak deskribatzen ditu:

    mo cp -h
    mo cp --help

 Oharra: Fitxategiak kopiatzea ez da oso azkarra, gaur egun bitartekari-fitxategi temporal bat behar duelako.

 ### Ezabatu fitxategiak
 Ezabatu fitxategi bakarra:

    mo rm conn1/some/file.txt

 Ezabatu fitxategi bakar bat eta ez kexatu akatsengatik:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Ezabatu direktorio bat:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Ezabatu direktorio bat eta ez kexatu akatsengatik:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Ikusi metadatuak
 Askotan erabilgarria da fitxategi baten metadatuak ezagutzea, fitxategi osoa deskargatu gabe.

 Mobiletto-k fitxategiaren tamainaren eta azken aldaketaren denboraren berri eman dezake, izenaz eta motaz gain.

 Metadatuak ikusteko:

    mo meta conn1/some/file.txt

 ### Ispilu direktorioak
 `cp` -ren kasu berezi bat baino gehiago da, mobiletto komando bereizia da.
 kopia eragiketa; akatsak gertatzen direnean ere jarraitzen du eta arrakasta eta akatsen kopuruaren jarraipena egiten du.

 Conn1etik conn2ra dena islatzeko:

    mo mirror conn1 conn2

 Azpidirektorio bat islatzeko:

    mo mirror conn1/some/subdir conn2

 Azpidirektorio bat beste azpidirektorio batean islatzeko:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
