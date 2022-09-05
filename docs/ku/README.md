mobiletto-cli
 ==============
 Navberek rêza fermanê (CLI) ji bo [mobiletto](https://www.npmjs.com/package/mobiletto)
 embarkirinî.

 Mobiletto girêdanên bi Amazon S3, Backblaze B2, û pergalên pelên herêmî re piştgirî dike.

 # Vê bi zimanekî din bixwînin
 Ev belgeya README.md, bi rêya [hokeylization](https://github.com/cobbzilla/hokeylization) hatiye wergerandin.
 **[her ziman ji hêla Google Wergerê ve tê piştgirî kirin](https://cloud.google.com/translate/docs/languages)!**

 Ez bawer im ku ew ne bêkêmasî ye, lê ez hêvî dikim ku ew ji tunebûnê çêtir e!

 [🇸🇦 Erebî](belge/ar/README.md)
 [🇧🇩 Bengali](belge/bn/README.md)
 [🇩🇪 Almanî](belge/de/README.md)
 [🇺🇸 Îngilîzî](belge/ku/README.md)
 [🇪🇸 Spanî](belge/es/README.md)
 [🇫🇷 Fransî](belge/fr/README.md)
 [🇹🇩 Hausa](belge/ha/README.md)
 [🇮🇳 Hindi](belge/hi/README.md)
 [🇮🇩 Endonezyayî](belge/id/README.md)
 [🇮🇹 Îtalî](belge/it/README.md)
 [🇯🇵 Japonî](belge/ja/README.md)
 [🇰🇷 Koreyî](../ko/README.md)
 [🇮🇳 Maranthi](belge/mr/README.md)
 [🇵🇱 Polonî](belge/pl/README.md)
 [🇧🇷 Portekîzî](belge/pt/README.md)
 [🇷🇺 Rûsî](belge/ru/README.md)
 [🇰🇪 Swahili](belge/sw/README.md)
 [🇵🇭 Tagalog](belge/tl/README.md)
 [🇹🇷 Tirkî](../tr/README.md)
 [🇵🇰 Urdu](belge/ur/README.md)
 [🇻🇳 Viyetnamî](belge/vi/README.md)
 [🇨🇳 Çînî](belge/zh/README.md)


 **[📚 ... Hemû Ziman ...](belge/README.md)**
 ----

 ### Di vê wergera README de pirsgirêkek heye?
 Ev wergera taybetî ya orîjînal [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 dibe ku xelet be -- *serrastkirin pir bi xêr hatin!* Ji kerema xwe [daxwaza vekişînê li ser GitHub] bişînin (https://github.com/cobbzilla/mobiletto-cli/pulls),
 an heke hûn ne rehet in ku wiya bikin, [pirsek veke](https://github.com/cobbzilla/mobiletto-cli/issues)

 Dema ku hûn der barê wergerekê de pirsgirêkek nû ya GitHub çêkin, ji kerema xwe bikin:
 * URL-ya rûpelê têxe (ji barika navnîşana gerokê kopî/pêç bike)
 * nivîsa tam a ku xelet e tê de (ji gerokê kopî/paste)
 * ji kerema xwe re şirove bike ka çi xelet e -- werger xelet e? formatkirin bi rengekî şikestî ye?
 * Ji kerema xwe pêşniyarek wergerek çêtir pêşkêşî bikin, an jî nivîs çawa bi rêkûpêk were şekil kirin
 * **Spas dikim!**

 # Naverok
 * [Çavkanî](#Çavkanî)
 * [Piştgirî û Fînanse](#Piştgirî-û-Fona)
 * [Sazkirin û bikaranîn](#Sazkirin-û-bikaranîna)
 * [pakêta npm](#npm-pakêt)
 * [Ji çavkaniyê](#Ji-çavkaniyê)
 * [Têkilî](#Têkilî)
 * [Têkiliyek biafirîne](#Create-a-connection)
 * [Têkiliyên navnîşê](#List-girêdan)
 * [Pêwendiya JSON-ê veqetîne](#Dump-connection-JSON-config)
 * [Pêwendiyek jêbirin](#Remove-a-connection)
 * [Hemû girêdan jêbirin](# Remove-all-connection)
 * [Bi hilanînê re dixebitin](# Xebat-bi-depokirinê)
 * [Pelên navnîşê](#List-pel)
 * [Pelek ji stdout re binivîse](#Write-a-file-to-stdout)
 * [Pelên kopî bikin](#Copy-pels)
 * [Pel jêbirin](# Pelên jêbirin)
 * [Metadata Binêre](#View-metadata)
 * [Rêveberên neynikê](#Mirror-directories)

 ### Çavkanî
 * [mobiletto-cli li ser GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli li ser npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Piştgirî û Fînanse
 Ez hewl didim ku bibim pêşdebirek nermalava çavkaniya vekirî ya profesyonel. Ez tê de dixebitim
 pîşesaziya nermalava gelek salan, min dest bi pargîdaniyên serfiraz kir û wan firot pargîdaniyên gelemperî.
 Di van demên dawî de min karê xwe winda kir, û bi rastî jî tu karekî din li ber destê min nîn e

 Ji ber vê yekê ez ê hewl bidim ku nermalava alîkar binivîsim û bibînim ka ew kar dike

 Heke hûn ji karanîna vê nermalavê kêfê digirin, ez ê ji dil jî spasdar bim
 herî piçûk [beşdariya mehane bi rêya Patreon](https://www.patreon.com/cobbzilla)

 *Spas dikim!*

 ## Sazkirin û bikaranîn
 Hûn dikarin `mobiletto-cli` bi npm an rasterast ji çavkaniyê saz bikin û bimeşînin.

 ### pakêta npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ji çavkaniyê
 Ji bo ku hûn ji çavkaniyê birevin, hûn ê hewceyê nodejs v16+ û yarn bin

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Têkilî
 Hemî hilanîna mobiletto bi pêwendiyek tê gihîştin.

 Mobiletto niha girêdanên bi hilanîna pergala pelan a herêmî û kepçeyên Amazon S3 piştgirî dike.

 Têkilî ji hêla tiştek JSON ve têne destnîşan kirin ku bi vî rengî xuya dike:

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

 Ji bo hûrguliyên tevahî li ser hemî vebijarkan û nirx û wateyên wan, li binêre
 [docsên mobîl](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Têkiliyek çêbikin
 Ji bo afirandina pêwendiyek nû, em yek ji van tiştên JSON hewce ne.

 Em dikarin yek bi înteraktîf biafirînin, an jî bi pelek an JSON biwêj ve yekê peyda bikin:

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

 ### Têkiliyên navnîş bikin
 Lîsteya girêdanên berdest:

    mo connect -l
    mo connect --list

 ### Veavakirina girêdana JSON-ê biavêje
 Ji bo girêdanê veavakirina JSON-a tevahî nîşan bide. **HIŞYAR** ev ê mift û sirên stdout çap bike.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Têkiliyek jêbirin
 Têkiliyek yekane jêbirin:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Hemî girêdan jêbirin
 HEMÛ girêdan rakin:

    mo connect -R
    mo connect --remove-all

 ## Bi hilanînê re dixebitin
 Dema ku we hin girêdan afirandin, `ls` , `cp` , `rm` , `meta` û `mirror` bikar bînin.
 bi wan re kar bikin.

 Her rêça pelê ya ku hûn ji fermanekê re peyda dikin divê bi navê pêwendiyê pêşgir be
 behsa wê dike. Di mînakên jêrîn de, em texmîn dikin ku du girêdan bi navên `conn1` û `conn2`

 ### Pelên navnîş bikin
 Derketina fermanek navnîşek rêzek tiştên JSON e, yek ji rêzê, ku pelan temsîl dike
 dîtin. Van tiştan dê "nav `name` û `type` û dibe ku qadên din hebin.

    mo ls conn1/some/path

 Lîsteya pelan bi paşverû:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nîşeya hilanînê ya bi şîfre **: Lîsteya vegerî hîn ji bo girêdanên şîfrekirî nayê piştgirî kirin.
 Hûn dikarin tenê yek peldanka pelan di demekê de navnîş bikin.

 Pelan bi devkî navnîş bikin (JSON-çapkirî):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Pelan bi paşverû û bi devkî navnîş bikin:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Ji bo fermana `ls` , hemî vebijarkan diyar dike:

    mo ls -h
    mo ls --help

 ### Pelek ji bo stdout binivîsin
 Fermana `cat` dê pelek li stdout çap bike:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Di ruhê UNIX-ê ya rastîn de *(lê bê guman ne pratîkî ye!)* fermana `cat` ya mobiletto ** vebijarkan nagire **
 ji bilî `-h` / `--help` ji bo nîşandana agahdariya alîkar.

 ### Pelên kopî bikin
 Pelê yekane ji yek mobîlek din kopî bikin:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Pelek yekane ji yek mobiletto-yek din kopî bikin, li cîhê navê wê biguherînin:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Bi vegerî pelrêçek kopî bikin:

    mo cp -r conn1/some/directory conn2/some/dest/

 Ji bo fermana `cp` , hemî vebijarkan diyar dike:

    mo cp -h
    mo cp --help

 Nîşe: Kopîkirina pelan ne pir bilez e, ji ber ku niha pelek demkî ya navbeynkar hewce dike.

 ### Pelan jêbirin
 Pelê yekane jêbirin:

    mo rm conn1/some/file.txt

 Pelê yekane jêbikin û ji xeletiyan gilî nekin:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Pelrêçek jêbirin:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Pelrêçek jêbirin û ji xeletiyan gilî nekin:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Metadata bibînin
 Pir caran kêrhatî ye ku meriv metadata pelê nas bike, bêyî dakêşana tevahî pelê.

 Mobiletto dikare ji bilî nav û celebê mezinahiya pelê û dema guherandina dawîn rapor bike.

 Ji bo dîtina metadata:

    mo meta conn1/some/file.txt

 ### Derhênerên neynikê
 Mirroring ji rewşek taybetî ya `cp` e, ew fermanek cihêreng a mobîl e ku pê ve girêdayî ye.
 operasyona kopîkirinê; ew berdewam dike tewra gava xeletî çêdibin, û hejmarek serkeftin û xeletiyan dişopîne.

 Ji bo neynika her tiştî ji conn1 berbi conn2:

    mo mirror conn1 conn2

 Ji bo neynika binerxetê:

    mo mirror conn1/some/subdir conn2

 Ji bo neynika binerdekrêkûpêkek di binerdekek din de:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
