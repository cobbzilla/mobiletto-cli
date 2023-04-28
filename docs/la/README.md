mobiletto-cli
 =============
 Praeceptum-linea interface ad [mobiletto](https://www.npmjs.com/package/mobiletto)
 repono.

 Mobiletto subsidia nexus cum Amazonio S3, Backblaze B2, et spheraticorum localium.

 # Lege hoc in alia lingua
 Hoc README.md documentum translatum est, per [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[Omnis lingua a Google Translate](https://cloud.google.com/translate/docs/languages)!

 Perfectum certe non sum, sed spero melius quam nihil!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengalica](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesiaca](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Coreanica](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonica](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamica](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[ ... Omnes Linguae ...](../README.md)**
 ----

 ### Estne problema cum hac translatione README?
 Haec praecipua translatio originalis [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 fortasse vitiosum -- *correctiones valde gratae sunt!* Mitte quaeso [in GitHub petitionem](https://github.com/cobbzilla/mobiletto-cli/pulls);
 vel si non es commodus id faciens, [aperi fluxum](https://github.com/cobbzilla/mobiletto-cli/issues)

 Cum novam GitHub quaestionem de translatione creas, quaeso fac;
 * Paginam URL includere (exemplum / crustulum ex vecte electronica)
 * Textum includere quod est nefas (exemplum / crustulum ex pasco)
 * Quaeso describere quid sit iniuria — est interpretatio falsa? fractum est forma aliqua?
 * benigne suggestionem praebeant translationis melioris vel quomodo textus debite formatus sit
 * **Gratias tibi!**

 # Contents
 * [Source](#Source)
 * [Support and Funding](Support-and-Funding)
 * [Installation and usus](Installation-and-usus)
 * [npm sarcina](#npm-sarcina)
 * [Ex fonte].
 * [Connexiones](#Connexiones)
 * [Connexionem crea](connexionem # crea-a-)
 * [Coniunctiones List](# connexiones List)
 * [Config TUBER nexum JSON](JSON-config-connexionem-# Dump)
 * [Remove nexum](# Aufer-a-iunctio)
 *
 * [Opus cum repono](# Working-cum-repono)
 * [Filiarum index](#List-files)
 * [Scribe lima ut stdout](# Scribe-a-file-ad-stdout)
 * [Copy files].
 * [Delere files](# Delete-files)
 * [Visum metadata].
 * [Speculum directoria](# Speculum-directiones)

 ### Source
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [Mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Support et Donec
 Conor esse professionalem fontem programmatum elit. I have been working in
 industria programmatis multos annos feliciter societates incepi et eas societates publicas vendidi.
 Nuper officium meum perdidi, et aliud opus non instruxit

 Eo igitur experior utilium programmatum scribo et vide an opera sit

 Si hoc programmate utendo frueris, gratus ero sincere pro etiam ipsis
 minima [menstrua contributio per Patreon](https://www.patreon.com/cobbzilla)

 *Gratias tibi!*

 ## Installation and usus
 Potes instituere et currere `mobiletto-cli` per npm vel immediate a fonte.

 ### NPM sarcina
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ex fonte
 Ut a fonte discurras, nodejs v16+ et bis tinctis opus est

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Contrahentes
 Omnes mobiletto repono accessed per connexionem.

 Mobiletto currently hospites ad tabulariorum locorum repositiones et S3 situlas Amazonium sustinet.

 Connexiones specificantur ab objecto JSON quod hoc simile est:

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

 Nam singula plena in omnibus optionibus eorumque valores ac significationes vide "
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### crea nexum
 Ad novam connexionem, una ex his obiectis JSON indigemus.

 Possumus unum interactive creare, vel unum per limam vel JSON literalem praebere:

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

 ### List hospites
 Praesto nexus album:

    mo connect -l
    mo connect --list

 ### TUBER nexum JSON config
 Ostende plenam JSON config pro nexu. Monitum hoc claves et secreta typis imprimet.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Remove nexum
 Unum nexum removere:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Remove omnes hospites
 Omnes hospites amove:

    mo connect -R
    mo connect --remove-all

 ## Working cum repono
 Postquam nonnullas nexus creasti, utere `ls` , `cp` , `rm` , `meta` et `mirror`
 ut laborent.

 Omnis fasciculi semita, quam praeceptum praebere debet, praefixa est nomine nexus
 refers to. In infra exemplis ponimus duas coniunctiones nominatas `conn1` et `conn2`

 ### Files List
 Output indici mandati est rerum JSON series, una per lineam, tabellariorum repraesentans
 reperit. Res haec `name` et `type` , et fortasse alios agros.

    mo ls conn1/some/path

 Recursively album files:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 Encrypted note repositae: Recursive listing nondum sustentata pro nexus encrypted.
 Unum tantum documentorum indices ad tempus enumerare potes.

 Indices imaginum verbosely (pulchellus-print JSON);

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Album files recursively et verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Visum auxilium pro imperio `ls` , omnia bene describit:

    mo ls -h
    mo ls --help

 ### Scribere lima ut stdout
 `cat` mandatum imprimet ut stdout limam:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 In spiritu vero UNIX (certe non est usus!) `cat` mandatum cat`s ** optiones non accipit.
 aliud quam `-h` / `--help` ad utiles informationes exhibendas.

 ### Exemplar files
 Effingo unum fasciculum ab uno mobiletto ad alium:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Effingo unum fasciculum ab uno mobiletto ad alterum, illud in destinatione nominans:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Recursively effingo directorium:

    mo cp -r conn1/some/directory conn2/some/dest/

 Visum auxilium pro imperio `cp` , omnia bene describit:

    mo cp -h
    mo cp --help

 Nota: Tabella exscribendi velocissima non est, quia nunc documentum medium temp fasciculi postulat.

 ### Delere files
 Delere unum fasciculum:

    mo rm conn1/some/file.txt

 Unum fasciculum dele et noli de aliquibus erroribus queri:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Delere directorium:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Directorium dele et noli de aliquibus erroribus queri:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Visum metadata
 Saepe utile est metadata pro tabella cognoscere, sine tota tabula detrahenda.

 Mobiletto nuntiare potest magnitudinem tabellae et temporis mutationis ultimum, praeter nomen et genus.

 Ad metadata view:

    mo meta conn1/some/file.txt

 ### Speculum directoria
 Speculum plus quam speciale de `cp` , separatum est mandatum mobiletto quod adligat
 operatio exemplum; pergit etiam cum errores inveniunt, et prosperorum et errorum narrationem indagant.

 Ad speculum omnia ex conn1 in conn2:

    mo mirror conn1 conn2

 Subdirectorium ad speculum;

    mo mirror conn1/some/subdir conn2

 Speculum subdirectorium in aliud subdirectorium:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
