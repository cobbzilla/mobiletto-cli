mobiletto-cli
 ==============
 Käsurea liides (CLI) [mobiletto] jaoks (https://www.npmjs.com/package/mobiletto)
 ladustamine.

 Mobiletto toetab ühendusi Amazon S3, Backblaze B2 ja kohalike failisüsteemidega.

 # Lugege seda teises keeles
 See README.md dokument on [hokeylization](https://github.com/cobbzilla/hokeylization) kaudu tõlgitud keelde
 **[Google'i tõlge toetab kõiki keeli](https://cloud.google.com/translate/docs/languages)!**

 Olen kindel, et see pole täiuslik, aga ma loodan, et see on parem kui mitte midagi!

 [🇸🇦 araabia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 saksa keel](../de/README.md)
 [🇺🇸 inglise keel](../en/README.md)
 [🇪🇸 hispaania](../es/README.md)
 [🇫🇷 prantsuse keel](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneesia](../id/README.md)
 [🇮🇹 itaalia](../it/README.md)
 [🇯🇵 jaapani](../ja/README.md)
 [🇰🇷 korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Poola](../pl/README.md)
 [🇧🇷 portugali](../pt/README.md)
 [🇷🇺 vene keel](../ru/README.md)
 [🇰🇪 suahiili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 türgi](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnami](../vi/README.md)
 [🇨🇳 hiina](../zh/README.md)


 **[📚 ... Kõik keeled ...](../README.md)**
 ----

 ### Kas selle README tõlkega on probleeme?
 See konkreetne originaali [README] tõlge (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 võib olla vigane -- *parandused on väga teretulnud!* Saatke [tõmbetaotlus GitHubis](https://github.com/cobbzilla/mobiletto-cli/pulls),
 või kui te ei soovi seda teha, [avage probleem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kui loote tõlke kohta uue GitHubi probleemi, tehke järgmist.
 * lisage lehe URL (kopeerige/kleepige brauseri aadressiribalt)
 * lisage täpne tekst, mis on vale (kopeeri/kleebi brauserist)
 * palun kirjeldage, mis on valesti – kas tõlge on vale? kas vormindus on kuidagi katki?
 * pakkuge lahkelt ettepanekut parema tõlke kohta või kuidas tekst tuleks õigesti vormistada
 * **Aitäh!**

 # Sisu
 * [Allikas](#Allikas)
 * [Toetus ja rahastamine](#Support-and-Funding)
 * [Paigaldamine ja kasutamine](#Installation-and-usage)
 * [npm-pakett](#npm-pakett)
 * [Allikast](#Allikast)
 * [Ühendused](#Connections)
 * [Loo ühendus](#Create-a-connection)
 * [Loendi ühendused](#List-connections)
 * [JSON-konfiguratsiooni tühjendamine](#Dump-connection-JSON-config)
 * [Eemalda ühendus](#Remove-a-connection)
 * [Eemalda kõik ühendused](#Remove-all-connections)
 * [Salvestusruumiga töötamine](#Working-with-storage)
 * [Failide loend](#List-files)
 * [Kirjutage fail stdouti](#Write-a-file-to-stdout)
 * [Kopeeri failid](#Kopeeri-failid)
 * [Kustuta failid](#Delete-files)
 * [Kuva metaandmed](#View-metadata)
 * [Peegelkataloogid](#Peegelkataloogid)

 ### Allikas
 * [mobiletto-cli GitHubis](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Toetus ja rahastamine
 Üritan olla professionaalne avatud lähtekoodiga tarkvaraarendaja. Olen töötanud
 tarkvaratööstuses aastaid, olen loonud edukaid ettevõtteid ja müünud neid riigiettevõtetele.
 Hiljuti kaotasin töö ja muud tööd mul tegelikult ei ole

 Nii et proovin kirjutada kasulikku tarkvara ja vaadata, kas see töötab

 Kui teile meeldib seda tarkvara kasutada, oleksin isegi selle eest siiralt tänulik
 väikseim [igakuine sissemakse Patreoni kaudu](https://www.patreon.com/cobbzilla)

 *Aitäh!*

 ## Paigaldamine ja kasutamine
 Saate installida ja käivitada `mobiletto-cli` kaudu või otse allikast.

 ### npm pakett
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Allikast
 Lähteallikast käivitamiseks vajate nodejs v16+ ja lõnga

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Ühendused
 Kogu mobiletto salvestusruumile pääseb juurde ühenduse kaudu.

 Mobiletto toetab praegu ühendusi kohaliku failisüsteemi salvestusruumi ja Amazon S3 ämbritega.

 Ühendused on määratud JSON-objektiga, mis näeb välja järgmine:

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

 Kõigi valikute ning nende väärtuste ja tähenduste kohta leiate üksikasjalikku teavet
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Looge ühendus
 Uue ühenduse loomiseks vajame ühte neist JSON-objektidest.

 Saame selle luua interaktiivselt või esitada selle faili või JSON-literaali kaudu:

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

 ### Ühenduste loend
 Saadaolevate ühenduste loend:

    mo connect -l
    mo connect --list

 ### Tühjenda ühenduse JSON-i konfiguratsioon
 Kuvage ühenduse jaoks täielik JSON-i konfiguratsioon. **HOIATUS** prinditakse võtmed ja saladused stdouti.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Ühenduse eemaldamine
 Eemaldage üks ühendus:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Eemaldage kõik ühendused
 Eemalda KÕIK ühendused:

    mo connect -R
    mo connect --remove-all

 ## Töötamine salvestusruumiga
 Kui olete ühenduse loonud, kasutage toiminguid `ls` , `cp` , `rm` , `meta` ja `mirror`
 nendega töötada.

 Igale käsule antud failiteele tuleb lisada ühenduse nimi
 see viitab. Allolevates näidetes eeldame, et eksisteerib kaks ühendust nimedega `conn1` ja `conn2`

 ### Failide loend
 Loendikäsu väljund on JSON-objektide seeria, üks rea kohta ja mis esindavad faile
 leitud. Nendel objektidel on `name` ja `type` ning võib-olla ka muud väljad.

    mo ls conn1/some/path

 Loetle failid rekursiivselt:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Märkus krüptitud salvestusruumi kohta**: krüptitud ühenduste puhul ei toetata veel rekursiivset loendit.
 Saate korraga loetleda ainult ühe failide kataloogi.

 Loetlege failid üksikasjalikult (kaunisti trükitud JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Loetlege failid rekursiivselt ja sõnasõnaliselt:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Vaadake käsu `ls` abi, kirjeldab kõiki valikuid:

    mo ls -h
    mo ls --help

 ### Kirjutage fail stdouti
 Käsk `cat` prindib faili stdouti:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Tõelises UNIX-i vaimus *(kuid kindlasti mitte tavaks!)* mobiletto käsk `cat` **ei kasuta mingeid valikuid**
 muud kui `-h` / `--help` , et kuvada kasulikku teavet.

 ### Failide kopeerimine
 Kopeerige üks fail ühest mobiilist teise:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopeerige üks fail ühest mobiilist teise, nimetades selle sihtkohas ümber:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kataloogi rekursiivne kopeerimine:

    mo cp -r conn1/some/directory conn2/some/dest/

 Vaadake käsu `cp` abi, kirjeldab kõiki valikuid:

    mo cp -h
    mo cp --help

 Märkus. Failide kopeerimine ei ole väga kiire, kuna see nõuab hetkel vahepealset ajutist faili.

 ### Kustutage failid
 Kustutage üks fail:

    mo rm conn1/some/file.txt

 Kustutage üks fail ja ärge kurtke vigade üle:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Kataloogi kustutamine:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Kustutage kataloog ja ärge kurtke vigade üle:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Vaadake metaandmeid
 Sageli on kasulik teada faili metaandmeid ilma kogu faili alla laadimata.

 Mobiletto suudab lisaks nimele ja tüübile teatada faili suuruse ja viimati muudetud aja.

 Metaandmete vaatamiseks toimige järgmiselt.

    mo meta conn1/some/file.txt

 ### Kataloogide peegeldamine
 Peegeldamine on midagi enamat kui `cp` , see on eraldi käsk mobiletto, mis mähib
 kopeerimisoperatsioon; see jätkub isegi vigade ilmnemisel ning jälgib õnnestumiste ja vigade arvu.

 Et peegeldada kõike alates conn1-st kuni konn2-ni:

    mo mirror conn1 conn2

 Alamkataloogi peegeldamiseks tehke järgmist.

    mo mirror conn1/some/subdir conn2

 Alamkataloogi peegeldamiseks teise alamkataloogi tehke järgmist.

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
