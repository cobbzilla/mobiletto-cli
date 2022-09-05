mobiletto-cli
 ==============
 En kommandolinjegrænseflade (CLI) til [mobiletto](https://www.npmjs.com/package/mobiletto)
 opbevaring.

 Mobiletto understøtter forbindelser til Amazon S3, Backblaze B2 og lokale filsystemer.

 # Læs dette på et andet sprog
 Dette README.md-dokument er via [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) blevet oversat til
 **[alle sprog understøttet af Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jeg er sikker på, at det ikke er perfekt, men jeg håber, det er bedre end ingenting!

 [🇸🇦 arabisk](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 tysk](../de/README.md)
 [🇺🇸 engelsk](../en/README.md)
 [🇪🇸 spansk](../es/README.md)
 [🇫🇷 fransk](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonesisk](../id/README.md)
 [🇮🇹 italiensk](../it/README.md)
 [🇯🇵 japansk](../ja/README.md)
 [🇰🇷 koreansk](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polsk](../pl/README.md)
 [🇧🇷 portugisisk](../pt/README.md)
 [🇷🇺 russisk](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tyrkisk](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamesisk](../vi/README.md)
 [🇨🇳 kinesisk](../zh/README.md)


 **[📚 ... Alle sprog ...](../README.md)**
 ----

 ### Er der et problem med denne oversættelse af README?
 Denne særlige oversættelse af originalen [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kan være defekt -- *rettelser er meget velkomne!* Send venligst en [pull request på GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 eller hvis du ikke er tryg ved at gøre det, [åbn et problem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Når du opretter et nyt GitHub-problem om en oversættelse, skal du gøre følgende:
 * inkludere sidens URL (kopier/indsæt fra browserens adresselinje)
 * medtag den nøjagtige tekst, der er forkert (kopier/indsæt fra browser)
 * beskriv venligst hvad der er galt -- er oversættelsen forkert? er formateringen brudt på en eller anden måde?
 * kom med et forslag til en bedre oversættelse, eller hvordan teksten skal formateres korrekt
 * **Tak skal du have!**

 ### Kilde
 * [mobiletto-cli på GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli på npm](https://www.npmjs.com/package/mobiletto-cli)

 # Indhold
 * [Installation og brug](#Installation-and-usage)
 * [npm-pakke](#npm-pakke)
 * [Fra kilde](#Fra-kilde)
 * [Forbindelser](#Forbindelser)
 * [Opret en forbindelse](#Opret-en-forbindelse)
 * [List forbindelser](#List-forbindelser)
 * [Dump forbindelse JSON config](#Dump-connection-JSON-config)
 * [Fjern en forbindelse](#Fjern-en-forbindelse)
 * [Fjern alle forbindelser](#Fjern-alle-forbindelser)
 * [Working with storage](#Working-with-storage)
 * [Listefiler](#List-filer)
 * [Skriv en fil til stdout](#Skriv-en-fil-til-stdout)
 * [Kopier filer](#Kopi-filer)
 * [Slet filer](#Slet-filer)
 * [Se metadata](#Vis-metadata)
 * [Mirror-mapper](#Mirror-mapper)

 ## Installation og brug
 Du kan installere og køre `mobiletto-cli` via npm eller direkte fra kilden.

 ### npm-pakke
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Fra kilden
 For at køre fra kilden skal du bruge nodejs v16+ og garn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Forbindelser
 Al mobiltto-lager tilgås via en forbindelse.

 Mobiletto understøtter i øjeblikket forbindelser til det lokale filsystemlager og Amazon S3 buckets.

 Forbindelser er specificeret af et JSON-objekt, der ser sådan ud:

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

 For fuldstændige detaljer om alle mulighederne og deres værdier og betydninger, se
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Opret en forbindelse
 For at oprette en ny forbindelse har vi brug for et af disse JSON-objekter.

 Vi kan oprette en interaktivt eller levere en via en fil eller JSON-bogstav:

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

 ### Liste forbindelser
 Liste over tilgængelige forbindelser:

    mo connect -l
    mo connect --list

 ### Dump forbindelse JSON config
 Vis den fulde JSON-konfiguration for en forbindelse. **ADVARSEL** dette vil udskrive nøgler og hemmeligheder til stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Fjern en forbindelse
 Fjern en enkelt forbindelse:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Fjern alle forbindelser
 Fjern ALLE forbindelser:

    mo connect -R
    mo connect --remove-all

 ## Arbejder med opbevaring
 Når du har oprettet nogle forbindelser, skal du bruge `ls` , `cp` , `rm` , `meta` og `mirror` operationerne
 at arbejde med dem.

 Hver filsti, du angiver til en kommando, skal have navnet på forbindelsen foran
 det henviser til. I eksemplerne nedenfor antager vi, at der findes to forbindelser ved navn `conn1` og `conn2`

 ### Liste filer
 Outputtet af en listekommando er en række JSON-objekter, et pr. linje, der repræsenterer filerne
 fundet. Disse objekter vil have et `name` og `type` type` og muligvis andre felter.

    mo ls conn1/some/path

 List filer rekursivt:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Note om krypteret lagring**: Rekursiv liste understøttes endnu ikke for krypterede forbindelser.
 Du kan kun liste én mappe med filer ad gangen.

 Liste filer udførligt (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 List filer rekursivt og verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Se hjælp til `ls` kommando, beskriver alle muligheder:

    mo ls -h
    mo ls --help

 ### Skriv en fil til stdout
 Kommandoen `cat` vil udskrive en fil til stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 I den sande UNIX-ånd *(men bestemt ikke praksis!)* mobilettos `cat` kommando **tager ingen muligheder**
 andet end `-h` / `--help` for at vise nyttige oplysninger.

 ### Kopier filer
 Kopier en enkelt fil fra en mobiletto til en anden:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopier en enkelt fil fra en mobiletto til en anden, og omdøb den på destinationen:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopier rekursivt en mappe:

    mo cp -r conn1/some/directory conn2/some/dest/

 Se hjælp til kommandoen `cp` , beskriver alle muligheder:

    mo cp -h
    mo cp --help

 Bemærk: Filkopiering er ikke særlig hurtig, fordi den i øjeblikket kræver en midlertidig midlertidig fil.

 ### Slet filer
 Slet en enkelt fil:

    mo rm conn1/some/file.txt

 Slet en enkelt fil og klag ikke over eventuelle fejl:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Slet en mappe:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Slet en mappe og klag ikke over eventuelle fejl:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Se metadata
 Det er ofte nyttigt at kende metadataene for en fil uden at downloade hele filen.

 Mobiletto er i stand til at rapportere filstørrelsen og sidst ændrede tidspunkt, ud over navn og type.

 Sådan får du vist metadata:

    mo meta conn1/some/file.txt

 ### Spejl biblioteker
 Spejling er mere end et specialtilfælde af `cp` , det er en separat mobiletto-kommando, der omslutter
 kopi operation; den fortsætter, selv når der opstår fejl, og spor en optælling af succeser og fejl.

 For at spejle alt fra conn1 til conn2:

    mo mirror conn1 conn2

 Sådan spejler du en undermappe:

    mo mirror conn1/some/subdir conn2

 Sådan spejler du en undermappe til en anden undermappe:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
