mobiltto-cli
 ==============
 Ett kommandoradsgränssnitt (CLI) för [mobiletto](https://www.npmjs.com/package/mobiletto)
 lagring.

 Mobiletto stöder anslutningar till Amazon S3, Backblaze B2 och lokala filsystem.

 # Läs detta på ett annat språk
 Detta README.md-dokument har översatts, via [hokeylization](https://github.com/cobbzilla/hokeylization), till
 **[alla språk som stöds av Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jag är säker på att det inte är perfekt, men jag hoppas att det är bättre än ingenting!

 [🇸🇦 arabiska](../ar/README.md)
 [🇧🇩 bengaliska](../bn/README.md)
 [🇩🇪 tyska](../de/README.md)
 [🇺🇸 engelska](../en/README.md)
 [🇪🇸 spanska](../es/README.md)
 [🇫🇷 franska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonesiska](../id/README.md)
 [🇮🇹 italienska](../it/README.md)
 [🇯🇵 japanska](../ja/README.md)
 [🇰🇷 koreanska](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polska](../pl/README.md)
 [🇧🇷 portugisiska](../pt/README.md)
 [🇷🇺 ryska](../ru/README.md)
 [🇰🇪 swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkiska](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamesiska](../vi/README.md)
 [🇨🇳 kinesiska](../zh/README.md)


 **[📚 ... Alla språk ...](../README.md)**
 ----

 ### Finns det ett problem med denna översättning av README?
 Denna speciella översättning av originalet [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kan vara felaktiga -- *korrigeringar är mycket välkomna!* Skicka en [pull-förfrågan på GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 eller om du inte är bekväm med att göra det, [öppna ett problem](https://github.com/cobbzilla/mobiletto-cli/issues)

 När du skapar ett nytt GitHub-nummer om en översättning, vänligen gör:
 * inkludera sidans URL (kopiera/klistra in från webbläsarens adressfält)
 * inkludera den exakta texten som är fel (kopiera/klistra in från webbläsaren)
 * vänligen beskriv vad som är fel -- är översättningen felaktig? är formateringen trasig på något sätt?
 * kom gärna med ett förslag på en bättre översättning eller hur texten bör formateras korrekt
 * **Tack!**

 # Innehåll
 * [Källa](#Källa)
 * [Support and Funding](#Support-and-Funding)
 * [Installation och användning](#Installation-and-usage)
 * [npm-paket](#npm-paket)
 * [Från källa](#Från-källa)
 * [Anslutningar](#Anslutningar)
 * [Skapa en anslutning](#Skapa-en-anslutning)
 * [Lista anslutningar](#List-anslutningar)
 * [Dump anslutning JSON-konfiguration](#Dump-anslutning-JSON-konfig)
 * [Ta bort en anslutning](#Remove-a-connection)
 * [Ta bort alla anslutningar](#Remove-all-connections)
 * [Arbetar med lagring](#Arbetar-med-lagring)
 * [Listfiler](#List-filer)
 * [Skriv en fil till stdout](#Write-a-file-to-stdout)
 * [Kopiera filer](#Copy-filer)
 * [Ta bort filer](#Delete-files)
 * [Visa metadata](#Visa-metadata)
 * [Mirror-kataloger](#Mirror-kataloger)

 ### Källa
 * [mobiletto-cli på GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli på npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Stöd och finansiering
 Jag försöker bli en professionell mjukvaruutvecklare med öppen källkod. Jag har jobbat i
 mjukvaruindustrin i många år har jag startat framgångsrika företag och sålt dem till offentliga företag.
 Nyligen förlorade jag mitt jobb, och jag har egentligen inget annat arbete på gång

 Så jag ska försöka skriva användbar programvara och se om det fungerar

 Om du gillar att använda den här programvaran skulle jag vara uppriktigt tacksam för även den
 minsta [månadsbidrag via Patreon](https://www.patreon.com/cobbzilla)

 *Tack!*

 ## Installation och användning
 Du kan installera och köra `mobiletto-cli` via npm eller direkt från källan.

 ### npm-paket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Från källan
 För att köra från källan behöver du nodejs v16+ och garn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Anslutningar
 All mobiltto-lagring nås via en anslutning.

 Mobiletto stöder för närvarande anslutningar till det lokala filsystemets lagring och Amazon S3-hinkar.

 Anslutningar specificeras av ett JSON-objekt som ser ut så här:

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

 För fullständig information om alla alternativ och deras värden och betydelser, se
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Skapa en anslutning
 För att skapa en ny anslutning behöver vi ett av dessa JSON-objekt.

 Vi kan skapa en interaktivt, eller tillhandahålla en via en fil eller JSON literal:

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

 ### Lista anslutningar
 Lista tillgängliga anslutningar:

    mo connect -l
    mo connect --list

 ### Dump anslutning JSON-konfiguration
 Visa hela JSON-konfigurationen för en anslutning. **VARNING** detta kommer att skriva ut nycklar och hemligheter till stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Ta bort en anslutning
 Ta bort en enskild anslutning:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Ta bort alla anslutningar
 Ta bort ALLA anslutningar:

    mo connect -R
    mo connect --remove-all

 ## Arbetar med lagring
 När du har skapat några anslutningar, använd `ls` , `cp` , `rm` , `meta` och `mirror`
 att arbeta med dem.

 Varje filsökväg som du anger till ett kommando måste föregås med namnet på anslutningen
 det hänvisar till. I exemplen nedan antar vi att det finns två anslutningar som heter `conn1` och `conn2`

 ### Lista filer
 Utdata från ett listkommando är en serie JSON-objekt, ett per rad, som representerar filerna
 hittades. Dessa objekt kommer att ha ett `name` och `type` , och möjligen andra fält.

    mo ls conn1/some/path

 Lista filer rekursivt:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Anmärkning om krypterad lagring**: Rekursiv listning stöds ännu inte för krypterade anslutningar.
 Du kan bara lista en katalog med filer åt gången.

 Lista filer utförligt (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lista filer rekursivt och utförligt:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Visa hjälp för kommandot `ls` , beskriver alla alternativ:

    mo ls -h
    mo ls --help

 ### Skriv en fil till stdout
 `cat` kommer att skriva ut en fil till stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 I sann UNIX-anda *(men absolut inte praxis!)* mobilttos `cat` kommando **tar inga alternativ**
 annat än `-h` / `--help` för att visa användbar information.

 ### Kopiera filer
 Kopiera en enskild fil från en mobiltto till en annan:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopiera en enskild fil från en mobiltto till en annan och byt namn på den på destinationen:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopiera en katalog rekursivt:

    mo cp -r conn1/some/directory conn2/some/dest/

 Visa hjälp för kommandot `cp` , beskriver alla alternativ:

    mo cp -h
    mo cp --help

 Obs: Filkopiering går inte särskilt snabbt, eftersom det för närvarande kräver en mellanliggande temporär fil.

 ### Radera filer
 Ta bort en enskild fil:

    mo rm conn1/some/file.txt

 Ta bort en enskild fil och klaga inte på några fel:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Ta bort en katalog:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Ta bort en katalog och klaga inte på några fel:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Visa metadata
 Det är ofta användbart att känna till metadata för en fil, utan att ladda ner hela filen.

 Mobiletto kan rapportera filstorlek och senast ändrade tid, förutom namn och typ.

 Så här visar du metadata:

    mo meta conn1/some/file.txt

 ### Spegelkataloger
 Spegling är mer än ett specialfall av `cp` , det är ett separat mobiletto-kommando som omsluter
 kopieringsoperation; det fortsätter även när fel uppstår, och spåra ett antal framgångar och fel.

 För att spegla allt från conn1 till conn2:

    mo mirror conn1 conn2

 Så här speglar du en underkatalog:

    mo mirror conn1/some/subdir conn2

 Så här speglar du en underkatalog till en annan underkatalog:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
