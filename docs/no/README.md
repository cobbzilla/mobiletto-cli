mobiletto-cli
 ==============
 Et kommandolinjegrensesnitt (CLI) for [mobiletto](https://www.npmjs.com/package/mobiletto)
 Oppbevaring.

 Mobiletto støtter tilkoblinger til Amazon S3, Backblaze B2 og lokale filsystemer.

 # Les dette på et annet språk
 Dette README.md-dokumentet har blitt oversatt, via [hokeylization](https://github.com/cobbzilla/hokeylization), til
 **[alle språk som støttes av Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jeg er sikker på at det ikke er perfekt, men jeg håper det er bedre enn ingenting!

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


 **[📚 ... Alle språk ...](../README.md)**
 ----

 ### Er det et problem med denne oversettelsen av README?
 Denne spesielle oversettelsen av originalen [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kan være feil -- *rettelser er svært velkomne!* Send en [pull request på GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 eller hvis du ikke er komfortabel med å gjøre det, [åpne et problem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Når du oppretter et nytt GitHub-problem om en oversettelse, vennligst gjør:
 * Ta med sidens URL (kopier/lim inn fra nettleserens adresselinje)
 * Ta med den eksakte teksten som er feil (kopier/lim inn fra nettleseren)
 * beskriv hva som er galt -- er oversettelsen feil? er formateringen ødelagt på en eller annen måte?
 * kom gjerne med et forslag til en bedre oversettelse, eller hvordan teksten bør formateres riktig
 * **Takk skal du ha!**

 # Innhold
 * [Kilde](#Kilde)
 * [Support and Funding](#Support-and-Funding)
 * [Installasjon og bruk](#Installasjon-og-bruk)
 * [npm-pakke](#npm-pakke)
 * [Fra kilde](#Fra-kilde)
 * [Connections](#Connections)
 * [Opprett en tilkobling](#Create-a-connection)
 * [Liste tilkoblinger](#List-tilkoblinger)
 * [Dump tilkobling JSON-konfigurasjon](#Dump-tilkobling-JSON-konfig)
 * [Fjern en tilkobling](#Remove-a-connection)
 * [Fjern alle tilkoblinger](#Fjern alle tilkoblinger)
 * [Jobber med lagring](#Arbeider-med-lagring)
 * [Listefiler](#List-filer)
 * [Skriv en fil til stdout](#Skriv-en-fil-til-stdout)
 * [Kopier filer](#Kopi-filer)
 * [Slett filer](#Slett-filer)
 * [Se metadata](#Vis-metadata)
 * [Speilkataloger](#Speilkataloger)

 ### Kilde
 * [mobiletto-cli på GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli på npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Støtte og finansiering
 Jeg prøver å være en profesjonell programvareutvikler med åpen kildekode. Jeg har jobbet i
 programvareindustrien i mange år, har jeg startet suksessfulle selskaper og solgt dem til offentlige selskaper.
 Nylig mistet jeg jobben min, og jeg har egentlig ikke noe annet arbeid på rad

 Så jeg skal prøve å skrive nyttig programvare og se om det fungerer

 Hvis du liker å bruke denne programvaren, ville jeg være oppriktig takknemlig for selv
 minste [månedlig bidrag via Patreon](https://www.patreon.com/cobbzilla)

 *Takk skal du ha!*

 ## Installasjon og bruk
 Du kan installere og kjøre `mobiletto-cli` via npm eller direkte fra kilden.

 ### npm-pakke
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Fra kilden
 For å kjøre fra kilden trenger du nodejs v16+ og garn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Tilkoblinger
 All mobiltto-lagring er tilgjengelig via en tilkobling.

 Mobiletto støtter for tiden tilkoblinger til det lokale filsystemlagringen og Amazon S3-bøttene.

 Tilkoblinger er spesifisert av et JSON-objekt som ser slik ut:

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

 For fullstendige detaljer om alle alternativene og deres verdier og betydninger, se
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Opprett en tilkobling
 For å opprette en ny tilkobling trenger vi ett av disse JSON-objektene.

 Vi kan lage en interaktivt, eller levere en via en fil eller JSON bokstavelig:

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

 ### Liste tilkoblinger
 Liste over tilgjengelige tilkoblinger:

    mo connect -l
    mo connect --list

 ### Dump tilkobling JSON-konfigurasjon
 Vis hele JSON-konfigurasjonen for en tilkobling. **ADVARSEL** dette vil skrive ut nøkler og hemmeligheter til stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Fjern en tilkobling
 Fjern en enkelt tilkobling:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Fjern alle tilkoblinger
 Fjern ALLE tilkoblinger:

    mo connect -R
    mo connect --remove-all

 ## Jobber med lagring
 Når du har opprettet noen tilkoblinger, bruk `ls` , `cp` , `rm` , `meta` og `mirror` operasjonene
 å jobbe med dem.

 Hver filbane du oppgir til en kommando, må ha navnet på tilkoblingen foran
 det referer til. I eksemplene nedenfor antar vi at det eksisterer to tilkoblinger som heter `conn1` og `conn2`

 ### Liste filer
 Utdata fra en listekommando er en serie JSON-objekter, ett per linje, som representerer filene
 funnet. Disse objektene vil ha et `name` og `type` , og muligens andre felt.

    mo ls conn1/some/path

 List filer rekursivt:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Notat om kryptert lagring**: Rekursiv oppføring støttes ennå ikke for krypterte tilkoblinger.
 Du kan bare liste én katalog med filer om gangen.

 Vis filene detaljert (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 List filer rekursivt og detaljert:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Se hjelp for `ls` kommandoen, beskriver alle alternativer:

    mo ls -h
    mo ls --help

 ### Skriv en fil til stdout
 `cat` kommandoen vil skrive ut en fil til stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 I sann UNIX-ånd *(men absolutt ikke praksisen!)* mobilettos `cat` kommando **tar ingen alternativer**
 annet enn `-h` / `--help` for å vise nyttig informasjon.

 ### Kopier filer
 Kopier en enkelt fil fra en mobiletto til en annen:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopier en enkelt fil fra en mobiletto til en annen, og gi den nytt navn på destinasjonen:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopier en katalog rekursivt:

    mo cp -r conn1/some/directory conn2/some/dest/

 Se hjelp for `cp` kommandoen, beskriver alle alternativer:

    mo cp -h
    mo cp --help

 Merk: Filkopiering går ikke veldig raskt, fordi det for øyeblikket krever en midlertidig midlertidig fil.

 ### Slett filer
 Slett en enkelt fil:

    mo rm conn1/some/file.txt

 Slett en enkelt fil og ikke klag på eventuelle feil:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Slett en katalog:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Slett en katalog og ikke klag på feil:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Se metadata
 Det er ofte nyttig å kjenne til metadataene for en fil, uten å laste ned hele filen.

 Mobiletto kan rapportere filstørrelse og siste endringstid, i tillegg til navn og type.

 For å se metadata:

    mo meta conn1/some/file.txt

 ### Speil kataloger
 Speiling er mer enn et spesialtilfelle av `cp` , det er en egen mobiletto-kommando som omslutter
 kopieringsoperasjon; den fortsetter selv når feil oppstår, og sporer en telling av suksesser og feil.

 For å speile alt fra conn1 til conn2:

    mo mirror conn1 conn2

 Slik speiler du en underkatalog:

    mo mirror conn1/some/subdir conn2

 Slik speiler du en underkatalog til en annen underkatalog:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
