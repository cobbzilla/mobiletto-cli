mobiletto-cli
 =============
 Een opdrachtregelinterface (CLI) voor [mobiletto](https://www.npmjs.com/package/mobiletto)
 opslag.

 Mobiletto ondersteunt verbindingen met Amazon S3, Backblaze B2 en lokale bestandssystemen.

 # Lees dit in een andere taal
 Dit README.md-document is via [hokeylization](https://github.com/cobbzilla/hokeylization) vertaald in
 **[elke taal ondersteund door Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ik weet zeker dat het niet perfect is, maar ik hoop dat het beter is dan niets!

 [🇸🇦 Arabisch](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Duits](../de/README.md)
 [🇺🇸 Nederlands](../en/README.md)
 [🇪🇸 Spaans](../es/README.md)
 [🇫🇷 Frans](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesisch](../id/README.md)
 [🇮🇹 Italiaans](../it/README.md)
 [🇯🇵 Japans](../ja/README.md)
 [🇰🇷 Koreaans](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pools](../pl/README.md)
 [🇧🇷 Portugees](../pt/README.md)
 [🇷🇺 Russisch](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turks](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamees](../vi/README.md)
 [🇨🇳 Chinees](../zh/README.md)


 **[📚 ... Alle talen ...](../README.md)**
 ----

 ### Is er een probleem met deze vertaling van de README?
 Deze specifieke vertaling van het origineel [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kan gebrekkig zijn -- *correcties zijn zeer welkom!* Stuur een [pull-verzoek op GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 of als u zich daar niet prettig bij voelt, [open een probleem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Wanneer u een nieuw GitHub-probleem maakt over een vertaling, doet u het volgende:
 * inclusief de pagina-URL (kopiëren/plakken uit de adresbalk van de browser)
 * voeg de exacte tekst toe die fout is (kopiëren/plakken vanuit browser)
 * beschrijf a.u.b. wat er mis is -- is de vertaling onjuist? is de opmaak op de een of andere manier kapot?
 * graag een suggestie voor een betere vertaling, of hoe de tekst correct moet worden opgemaakt
 * **Dank je!**

 # Inhoud
 * [Bron](#Bron)
 * [Ondersteuning en financiering](#Ondersteuning en financiering)
 * [Installatie en gebruik](#Installatie-en-gebruik)
 * [npm-pakket](#npm-pakket)
 * [Van bron](#Van bron)
 * [Verbindingen](#Verbindingen)
 * [Maak een verbinding](#Maak een verbinding)
 * [Lijst verbindingen](#List-verbindingen)
 * [Dump-verbinding JSON-configuratie](#Dump-verbinding-JSON-config)
 * [Verwijder een verbinding](#Verwijder-een-verbinding)
 * [Verwijder alle verbindingen](#Verwijder-alle-verbindingen)
 * [Werken met opslag](#Werken-met-opslag)
 * [Lijst bestanden](#List-bestanden)
 * [Schrijf een bestand naar stdout](#Schrijf-een-bestand-naar-stdout)
 * [Bestanden kopiëren](#Kopie-bestanden)
 * [Bestanden verwijderen](#Delete-bestanden)
 * [Metadata bekijken](#View-metadata)
 * [Spiegelmappen](#Spiegel-mappen)

 ### Bron
 * [mobiletto-cli op GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli op npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Ondersteuning en financiering
 Ik probeer een professionele open source softwareontwikkelaar te worden. ik heb gewerkt in
 jarenlang in de software-industrie, heb ik succesvolle bedrijven gestart en verkocht aan openbare bedrijven.
 Onlangs verloor ik mijn baan, en ik heb niet echt ander werk op de planning

 Dus ik ga proberen nuttige software te schrijven en kijken of dat werkt

 Als u deze software graag gebruikt, zou ik u oprecht dankbaar zijn, zelfs voor de
 kleinste [maandelijkse bijdrage via Patreon](https://www.patreon.com/cobbzilla)

 *Dank je!*

 ## Installatie en gebruik
 U kunt `mobiletto-cli` installeren en uitvoeren via npm of rechtstreeks vanaf de broncode.

 ### npm pakket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Van bron
 Om vanaf de bron te draaien, heb je nodejs v16+ en garen nodig

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Verbindingen
 Alle mobiletto-opslag is toegankelijk via een verbinding.

 Mobiletto ondersteunt momenteel verbindingen met de lokale bestandssysteemopslag en Amazon S3-buckets.

 Verbindingen worden gespecificeerd door een JSON-object dat er als volgt uitziet:

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

 Voor volledige details over alle opties en hun waarden en betekenissen, zie de
 [mobiletto-documenten](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Maak een verbinding
 Om een nieuwe verbinding te maken, hebben we een van deze JSON-objecten nodig.

 We kunnen er een interactief maken, of er een leveren via een bestand of JSON letterlijk:

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

 ### Lijst verbindingen
 Lijst beschikbare verbindingen:

    mo connect -l
    mo connect --list

 ### Dumpverbinding JSON-configuratie
 Toon de volledige JSON-configuratie voor een verbinding. **WAARSCHUWING** hiermee worden sleutels en geheimen naar stdout afgedrukt.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Een verbinding verwijderen
 Een enkele verbinding verwijderen:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Verwijder alle verbindingen
 Verwijder ALLE verbindingen:

    mo connect -R
    mo connect --remove-all

 ## Werken met opslag
 Nadat u enkele verbindingen hebt gemaakt, gebruikt u de `ls` , `cp` , `rm` , `meta` en `mirror`
 om met hen te werken.

 Elk bestandspad dat u aan een opdracht geeft, moet worden voorafgegaan door de naam van de verbinding
 het verwijst naar. In de onderstaande voorbeelden nemen we aan dat er twee verbindingen zijn genaamd `conn1` en `conn2`

 ### Lijst bestanden
 De uitvoer van een lijstopdracht is een reeks JSON-objecten, één per regel, die de bestanden vertegenwoordigen
 gevonden. Deze objecten hebben een `name` en `type` , en mogelijk andere velden.

    mo ls conn1/some/path

 Lijst bestanden recursief:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Opmerking over versleutelde opslag**: recursieve vermeldingen worden nog niet ondersteund voor versleutelde verbindingen.
 U kunt slechts één map met bestanden tegelijk weergeven.

 Lijst bestanden uitgebreid (mooi-afdruk JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lijst bestanden recursief en uitgebreid:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Bekijk help voor `ls` commando, beschrijft alle opties:

    mo ls -h
    mo ls --help

 ### Schrijf een bestand naar stdout
 Het `cat` commando zal een bestand naar stdout afdrukken:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 In de ware UNIX-geest *(maar zeker niet de praktijk!)* mobiletto's `cat` commando **heeft geen opties**
 anders dan `-h` / `--help` om nuttige informatie weer te geven.

 ### Bestanden kopiëren
 Kopieer een enkel bestand van de ene mobiletto naar de andere:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopieer een enkel bestand van de ene mobiletto naar de andere en hernoem het op de bestemming:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopieer een map recursief:

    mo cp -r conn1/some/directory conn2/some/dest/

 Bekijk help voor `cp` commando, beschrijft alle opties:

    mo cp -h
    mo cp --help

 Opmerking: het kopiëren van bestanden gaat niet erg snel, omdat er momenteel een tijdelijk tijdelijk bestand voor nodig is.

 ### Verwijder bestanden
 Een enkel bestand verwijderen:

    mo rm conn1/some/file.txt

 Verwijder een enkel bestand en klaag niet over fouten:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Een map verwijderen:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Verwijder een map en klaag niet over eventuele fouten:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Bekijk metadata
 Het is vaak handig om de metadata van een bestand te kennen, zonder het hele bestand te downloaden.

 Mobiletto kan naast naam en type ook de bestandsgrootte en de tijd van de laatste wijziging rapporteren.

 Metagegevens bekijken:

    mo meta conn1/some/file.txt

 ### Spiegelmappen
 Mirroring is meer dan een speciaal geval van `cp` , het is een apart mobiletto-commando dat de
 kopieer bewerking; het gaat door, zelfs als er fouten optreden, en houdt een telling van successen en fouten bij.

 Om alles van conn1 naar conn2 te spiegelen:

    mo mirror conn1 conn2

 Een submap spiegelen:

    mo mirror conn1/some/subdir conn2

 Een submap spiegelen naar een andere submap:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
