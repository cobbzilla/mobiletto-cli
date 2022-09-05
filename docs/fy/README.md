mobiletto-cli
 ==============
 In kommando-rigelynterface (CLI) foar [mobiletto](https://www.npmjs.com/package/mobiletto)
 opslach.

 Mobiletto stipet ferbiningen mei Amazon S3, Backblaze B2, en lokale bestânssystemen.

 # Lês dit yn in oare taal
 Dit README.md dokumint is oerset, fia [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), yn
 **[elke taal stipe troch Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ik bin der wis fan dat it net perfekt is, mar ik hoopje dat it better is as neat!

 [🇸🇦 Arabysk](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Dútsk](../de/README.md)
 [🇺🇸 Ingelsk](../en/README.md)
 [🇪🇸 Spaansk](../es/README.md)
 [🇫🇷 Frânsk](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Yndonesysk](../id/README.md)
 [🇮🇹 Italjaansk](../it/README.md)
 [🇯🇵 Japansk](../ja/README.md)
 [🇰🇷 Koreaansk](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Poalsk](../pl/README.md)
 [🇧🇷 Portugeesk](../pt/README.md)
 [🇷🇺 Russysk](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turksk](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Fietnameesk](../vi/README.md)
 [🇨🇳 Sineesk](../zh/README.md)


 **[📚 ... Alle talen ...](../README.md)**
 ----

 ### Is der in probleem mei dizze oersetting fan de README?
 Dizze bysûndere oersetting fan it orizjineel [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kin defekt wêze -- *korreksjes binne tige wolkom!* Stjoer asjebleaft in [pull request on GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 of as jo it net noflik binne om dat te dwaan, [iepenje in probleem](https://github.com/cobbzilla/mobiletto-cli/issues)

 As jo in nij GitHub-probleem oanmeitsje oer in oersetting, dwaan dan:
 * befetsje de side-URL (kopiearje / plakke fan browseradresbalke)
 * befetsje de krekte tekst dy't ferkeard is (kopiearje / plakke fan browser)
 * beskriuw asjebleaft wat der mis is -- is de oersetting ferkeard? is de opmaak op ien of oare manier brutsen?
 * biede freonlik in suggestje foar in bettere oersetting, of hoe't de tekst goed opmakke wurde moat
 * **Dankewol!**

 ### Boarne
 * [mobiletto-cli op GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli op npm](https://www.npmjs.com/package/mobiletto-cli)

 # Ynhâld
 * [Ynstallaasje en gebrûk](#Ynstallaasje-en-gebrûk)
 * [npm-pakket](#npm-pakket)
 * [Fan boarne](#Fan-boarne)
 * [Connections](#Connections)
 * [Meitsje in ferbining](#Create-a-ferbining)
 * [List ferbinings](#List-ferbinings)
 * [Dump ferbining JSON config](#Dump-ferbining-JSON-config)
 * [In ferbining fuortsmite](#Remove-a-ferbining)
 * [Alle ferbiningen fuortsmite](#Alle ferbiningen fuortsmite)
 * [Wurkje mei opslach](#Werken-mei-opslach)
 * [List triemmen](#List-bestannen)
 * [Skriuw in bestân nei stdout](#Write-a-file-to-stdout)
 * [Bestân kopiearje](#Kopiearje-bestannen)
 * [bestannen wiskje](#bestannen wiskje)
 * [Besjoch metadata](#View-metadata)
 * [Spiegelmappen](#Mirror-mappen)

 ## Ynstallaasje en gebrûk
 Jo kinne `mobiletto-cli` ynstallearje en útfiere fia npm of direkt fan boarne.

 ### npm pakket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Fan boarne
 Om fan 'e boarne te rinnen, moatte jo nodejs v16+ en garen hawwe

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Ferbinings
 Alle mobiletto-opslach is tagonklik fia in ferbining.

 Mobiletto stipet op it stuit ferbiningen mei de lokale opslach fan bestânsysteem en Amazon S3-bakken.

 Ferbinings wurde oantsjutte troch in JSON-objekt dat der sa útsjocht:

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

 Foar folsleine details oer alle opsjes en harren wearden en betsjuttings, sjoch de
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Meitsje in ferbining
 Om in nije ferbining te meitsjen, hawwe wy ien fan dizze JSON-objekten nedich.

 Wy kinne ien ynteraktyf oanmeitsje, of ien leverje fia in bestân as JSON-letterlik:

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

 ### List ferbinings
 List beskikbere ferbiningen:

    mo connect -l
    mo connect --list

 ### Dump ferbining JSON config
 Lit de folsleine JSON-konfiguraasje sjen foar in ferbining. ** WAARSKUWING ** dit sil toetsen en geheimen printsje nei stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### In ferbining fuortsmite
 In inkele ferbining fuortsmite:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Alle ferbiningen fuortsmite
 ALLE ferbinings fuortsmite:

    mo connect -R
    mo connect --remove-all

 ## Wurkje mei opslach
 As jo ienris wat ferbinings makke hawwe, brûk dan de `ls` , `cp` , `rm` , `meta` en `mirror`
 om mei harren te wurkjen.

 Elk bestânspaad dat jo leverje oan in kommando moat foarôfgeand wêze mei de namme fan 'e ferbining
 it ferwiist nei. Yn 'e foarbylden hjirûnder geane wy derfan út dat twa ferbiningen besteane mei de namme `conn1` en `conn2`

 ### List triemmen
 De útfier fan in listkommando is in searje JSON-objekten, ien per rigel, dy't de bestannen fertsjintwurdigje
 fûn. Dizze objekten sille in `name` namme` en `type` , en mooglik oare fjilden.

    mo ls conn1/some/path

 List triemmen rekursyf:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Opmerking foar fersifere opslach**: Rekursive fermelding wurdt noch net stipe foar fersifere ferbiningen.
 Jo kinne mar ien map mei triemmen tagelyk listje.

 List triemmen verbosely (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 List triemmen rekursyf en verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Besjoch help foar `ls` kommando, beskriuwt alle opsjes:

    mo ls -h
    mo ls --help

 ### Skriuw in bestân nei stdout
 It kommando `cat` sil in bestân printsje nei stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Yn 'e wiere UNIX-geast *(mar wis net de praktyk!)* mobiletto's `cat` kommando **nimt gjin opsjes**
 oars as `-h` / `--help` om nuttige ynformaasje wer te jaan.

 ### Bestannen kopiearje
 Kopiearje ien bestân fan de iene mobiletto nei de oare:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopiearje in inkeld bestân fan de iene mobiletto nei de oare, omneame it op de bestimming:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopiearje in map rekursyf:

    mo cp -r conn1/some/directory conn2/some/dest/

 Besjoch help foar `cp` kommando, beskriuwt alle opsjes:

    mo cp -h
    mo cp --help

 Opmerking: it kopiearjen fan bestân is net heul rap, om't it op it stuit in intermediair tydlik bestân fereasket.

 ### Triemen wiskje
 In inkele triem wiskje:

    mo rm conn1/some/file.txt

 Wiskje ien bestân en klagje net oer flaters:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 In map wiskje:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Wiskje in map en klagje net oer flaters:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Besjoch metadata
 It is faaks handich om de metadata foar in bestân te kennen, sûnder it hiele bestân te downloaden.

 Mobiletto is yn steat om de triemgrutte en de lêste wizige tiid te rapportearjen, neist namme en type.

 Om metadata te besjen:

    mo meta conn1/some/file.txt

 ### Mirror-mappen
 Mirroring is mear dan in spesjaal gefal fan `cp` , it is in apart mobiletto-kommando dat de
 kopiearje operaasje; it giet troch sels as flaters foarkomme, en track in telling fan súksessen en flaters.

 Om alles fan conn1 nei conn2 te spegeljen:

    mo mirror conn1 conn2

 Om in submap te spegeljen:

    mo mirror conn1/some/subdir conn2

 Om in submap te spegeljen yn in oare submap:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
