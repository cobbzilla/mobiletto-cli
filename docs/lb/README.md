mobiletto-cli
 ==============
 Eng Kommandozeil-Interface (CLI) fir [mobiletto](https://www.npmjs.com/package/mobiletto)
 Stockage.

 Mobiletto ënnerstëtzt Verbindunge mat Amazon S3, Backblaze B2, a lokal Dateiesystemer.

 # Liest dëst an enger anerer Sprooch
 Dëst README.md Dokument gouf iwwersat, iwwer [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), an
 **[all Sprooch ënnerstëtzt vu Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ech si sécher datt et net perfekt ass, awer ech hoffen et ass besser wéi näischt!

 [🇸🇦 Arabesch](../ar/README.md)
 [🇧🇩 Bengalesch](../bn/README.md)
 [🇩🇪 Däitsch](../de/README.md)
 [🇺🇸 Englesch](../en/README.md)
 [🇪🇸 Spuenesch](../es/README.md)
 [🇫🇷 Franséisch](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesesch](../id/README.md)
 [🇮🇹 Italienesch](../it/README.md)
 [🇯🇵 Japanesch](../ja/README.md)
 [🇰🇷 Koreanesch](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polnesch](../pl/README.md)
 [🇧🇷 Portugisesch](../pt/README.md)
 [🇷🇺 Russesch](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tierkesch](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamesesch](../vi/README.md)
 [🇨🇳 Chinesesch](../zh/README.md)


 **[📚 ... All Sproochen ...](../README.md)**
 ----

 ### Gëtt et e Problem mat dëser Iwwersetzung vum README?
 Dës speziell Iwwersetzung vum Original [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kann fehlerhaft sinn -- *Korrekturen si ganz wëllkomm!* Schéckt w.e.g. eng [Pull Ufro op GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 oder wann Dir net bequem sidd dat ze maachen, [maacht en Thema op](https://github.com/cobbzilla/mobiletto-cli/issues)

 Wann Dir en neit GitHub Thema iwwer eng Iwwersetzung erstellt, maacht w.e.g.:
 * enthält d'Säit URL (Kopie / Paste vun der Adressbar vum Browser)
 * enthält den exakten Text dee falsch ass (copy/paste vum Browser)
 * beschreiw w.e.g. wat falsch ass - ass d'Iwwersetzung falsch? ass d'Formatéierung iergendwéi gebrach?
 * bitt frëndlech e Virschlag fir eng besser Iwwersetzung un, oder wéi den Text richteg formatéiert soll sinn
 * **Merci!**

 ### Quell
 * [mobiletto-cli op GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli op npm](https://www.npmjs.com/package/mobiletto-cli)

 # Inhalter
 * [Installatioun a Benotzung](#Installatioun-a-Benotzung)
 * [npm Package](#npm-Package)
 * [Vun der Quell](# Vun der Quell)
 * [Connections](#Connections)
 * [Erstellt eng Verbindung](#Create-a-Connection)
 * [Lëscht Verbindungen](#Lëscht-Verbindungen)
 * [Dump Connection JSON config](#Dump-connection-JSON-config)
 * [Eng Verbindung ewechhuelen](#Ewechmaachen-e-Verbindung)
 * [All Verbindungen erofhuelen](#All Verbindungen erofhuelen)
 * [Schafft mat Späicheren](#Working-with-Storage)
 * [Lëscht Dateien](#Lëscht Dateien)
 * [Schreift e Fichier op stdout](#Schreift-e-Datei-zu-stdout)
 * [Kopie Dateien](#Copy-Dateien)
 * [Dateien läschen](# Läschen-Dateien)
 * [View Metadaten](#View-Metadaten)
 * [Spigel Verzeichnungen](#Spigel-Verzeichnungen)

 ## Installatioun a Benotzung
 Dir kënnt `mobiletto-cli` iwwer npm oder direkt vun der Quell installéieren a lafen.

 ### npm Package
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Vun der Quell
 Fir aus der Quell ze lafen, braucht Dir nodejs v16+ a Garn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Verbindungen
 All Mobiletto-Späichere gëtt iwwer eng Verbindung zougänglech.

 Mobiletto ënnerstëtzt de Moment Verbindunge mat der lokaler Dateiesystemspäicherung an Amazon S3 Eemer.

 D'Verbindunge gi vun engem JSON-Objet spezifizéiert deen esou ausgesäit:

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

 Fir voll Detailer iwwer all Optiounen an hir Wäerter a Bedeitungen, kuckt d'
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Erstellt eng Verbindung
 Fir eng nei Verbindung ze kreéieren, brauche mir ee vun dësen JSON Objekter.

 Mir kënnen een interaktiv erstellen, oder een iwwer eng Datei oder JSON wuertwiertlech liwweren:

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

 ### Lëscht Verbindungen
 Lëscht verfügbare Verbindungen:

    mo connect -l
    mo connect --list

 ### Dump Verbindung JSON config
 Weist déi voll JSON Configuratioun fir eng Verbindung. ** OPGEPASST ** dëst wäert Schlësselen a Geheimnisser ze stdout Drécken.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Ewechzehuelen eng Verbindung
 Ewechzehuelen eng eenzeg Verbindung:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Ewechzehuelen all Verbindungen
 Ewechzehuelen ALL Verbindungen:

    mo connect -R
    mo connect --remove-all

 ## Schafft mat Lagerung
 Wann Dir e puer Verbindungen erstallt hutt, benotzt d' `ls` , `cp` , `rm` , `meta` a `mirror` Operatiounen
 mat hinnen ze schaffen.

 All Dateiwee, deen Dir un e Kommando gitt, muss mam Numm vun der Verbindung virgesi sinn
 et bezitt sech op. An de Beispiller hei drënner huelen mir un datt zwou Verbindungen existéieren mam Numm `conn1` an `conn2`

 ### Lëscht Dateien
 Den Ausgang vun engem Lëschtbefehl ass eng Serie vu JSON Objekter, een pro Zeil, déi d'Dateien representéieren
 fonnt. Dës Objete wäerten en `name` an `type` hunn, an eventuell aner Felder.

    mo ls conn1/some/path

 Lëscht Dateien rekursiv:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Verschlësselte Späichernotiz**: Rekursiv Oplëschtung gëtt nach net fir verschlësselte Verbindungen ënnerstëtzt.
 Dir kënnt nëmmen ee Verzeechnes vun Dateien gläichzäiteg oplëschten.

 Lëscht Dateien verbosely (zimmlech gedréckt JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lëscht Dateien rekursiv a verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Kuckt d'Hëllef fir `ls` Kommando, beschreift all Optiounen:

    mo ls -h
    mo ls --help

 ### Schreift eng Datei op stdout
 De Kommando `cat` dréckt eng Datei op stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Am richtegen UNIX Geescht *(awer sécher net d'Praxis!)* dem mobiletto säi `cat` Kommando **huelt keng Optiounen**
 anescht wéi `-h` / `--help` fir hëllefräich Informatioun ze weisen.

 ### Dateien kopéieren
 Kopéiert eng eenzeg Datei vun engem Mobiletto op en aneren:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopéiert eng eenzeg Datei vun engem Mobiletto op en aneren, nennt se op der Destinatioun:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekursiv kopéiert e Verzeichnis:

    mo cp -r conn1/some/directory conn2/some/dest/

 Kuckt Hëllef fir `cp` Kommando, beschreift all Optiounen:

    mo cp -h
    mo cp --help

 Bemierkung: D'Kopie vun Dateien ass net ganz séier, well et aktuell eng Tëschestatiounsdatei erfuerdert.

 ### Dateien läschen
 Läschen eng eenzeg Datei:

    mo rm conn1/some/file.txt

 Läscht eng eenzeg Datei a beschwéiert Iech net iwwer Feeler:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 E Verzeichnis läschen:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 E Verzeechnes läschen a beschwéieren net iwwer Feeler:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Metadaten kucken
 Et ass dacks nëtzlech d'Metadate fir eng Datei ze kennen, ouni déi ganz Datei erofzelueden.

 Mobiletto ass fäeg d'Dateigréisst an d'lescht geännert Zäit ze berichten, zousätzlech zum Numm an Typ.

 Fir Metadaten ze gesinn:

    mo meta conn1/some/file.txt

 ### Spigelverzeichnungen
 Mirroring ass méi wéi e spezielle Fall vu `cp` , et ass e separaten Mobiletto Kommando deen de
 Kopie Operatioun; et weider och wann Feeler geschéien, an Streck eng Grof vun Erfolleger a Feeler.

 Fir alles vu conn1 an conn2 ze spigelen:

    mo mirror conn1 conn2

 Fir en Ënnerverzeechnes ze spigelen:

    mo mirror conn1/some/subdir conn2

 Fir en Ënnerverzeechnes an en aneren Ënnerverzeechnes ze spigelen:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
