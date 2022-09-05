mobiletto-cli
 ==============
 Komentorivikäyttöliittymä (CLI) [mobilettolle](https://www.npmjs.com/package/mobiletto)
 varastointi.

 Mobiletto tukee yhteyksiä Amazon S3:een, Backblaze B2:een ja paikallisiin tiedostojärjestelmiin.

 # Lue tämä toisella kielellä
 Tämä README.md-dokumentti on käännetty [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) kautta kielelle
 **[kaikki Google-kääntäjän tukemat kielet](https://cloud.google.com/translate/docs/languages)!**

 Olen varma, että se ei ole täydellinen, mutta toivon, että se on parempi kuin ei mitään!

 [🇸🇦 arabia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 saksaksi](../de/README.md)
 [🇺🇸 englanti](../en/README.md)
 [🇪🇸 espanja](../es/README.md)
 [🇫🇷 ranska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesia](../id/README.md)
 [🇮🇹 italia](../it/README.md)
 [🇯🇵 japani](../ja/README.md)
 [🇰🇷 korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 puola](../pl/README.md)
 [🇧🇷 portugali](../pt/README.md)
 [🇷🇺 venäjä](../ru/README.md)
 [🇰🇪 swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnam](../vi/README.md)
 [🇨🇳 kiina](../zh/README.md)


 **[📚 ... Kaikki kielet ...](../README.md)**
 ----

 ### Onko tässä README-käännöksessä ongelma?
 Tämä käännös alkuperäisestä [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 voi olla virheellinen -- *korjaukset ovat erittäin tervetulleita!* Lähetä [pull-pyyntö GitHubissa](https://github.com/cobbzilla/mobiletto-cli/pulls),
 tai jos et halua tehdä niin, [avaa ongelma](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kun luot uuden GitHub-ongelman käännöksestä, toimi seuraavasti:
 * sisällytä sivun URL-osoite (kopioi/liitä selaimen osoiteriviltä)
 * sisällytä täsmällinen virheellinen teksti (kopioi/liitä selaimesta)
 * kuvaile mikä on vialla -- onko käännös virheellinen? onko muotoilu rikki jotenkin?
 * Ehdota ystävällisesti parempaa käännöstä tai tekstin oikeaa muotoilua
 * **Kiitos!**

 ### Lähde
 * [mobiletto-cli GitHubissa](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # Sisältö
 * [Asennus ja käyttö](#Installation-and-usage)
 * [npm-paketti](#npm-paketti)
 * [Lähteestä](#Lähteestä)
 * [Yhteydet](#Connections)
 * [Luo yhteys](#Create-a-connection)
 * [Lista yhteydet](#List-connections)
 * [Dump connection JSON-config](#Dump-connection-JSON-config)
 * [Poista yhteys](#Remove-a-connection)
 * [Poista kaikki yhteydet](#Remove-all-connections)
 * [Tallennustilan käyttö](#Working-with-storage)
 * [Listatiedostot](#Lista-tiedostot)
 * [Kirjoita tiedosto stdoutiin](#Write-a-file-to-stdout)
 * [Kopioi tiedostot](#Copy-files)
 * [Poista tiedostot](#Delete-files)
 * [Näytä metatiedot](#View-metadata)
 * [Peilihakemistot](#Mirror-directories)

 ## Asennus ja käyttö
 Voit asentaa ja suorittaa `mobiletto-cli` :n npm:n kautta tai suoraan lähteestä.

 ### npm-paketti
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Lähteestä
 Suoritaksesi lähteestä tarvitset nodejs v16+ ja langan

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Yhteydet
 Kaikkeen mobiletto-tallennustilaan pääsee yhteyden kautta.

 Mobiletto tukee tällä hetkellä yhteyksiä paikalliseen tiedostojärjestelmän tallennustilaan ja Amazon S3 -ämpäriin.

 Yhteydet määritetään JSON-objektilla, joka näyttää tältä:

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

 Katso tarkemmat tiedot kaikista vaihtoehdoista ja niiden arvoista ja merkityksistä
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Luo yhteys
 Uuden yhteyden luomiseksi tarvitsemme yhden näistä JSON-objekteista.

 Voimme luoda sellaisen interaktiivisesti tai toimittaa sellaisen tiedoston tai JSON-literaalin kautta:

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

 ### Listaa yhteydet
 Listaa käytettävissä olevat yhteydet:

    mo connect -l
    mo connect --list

 ### Pura yhteys JSON-kokoonpano
 Näytä koko yhteyden JSON-määritys. **VAROITUS** tämä tulostaa avaimet ja salaisuudet vakiomuotoon.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Poista yhteys
 Yksittäisen yhteyden poistaminen:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Poista kaikki liitännät
 Poista KAIKKI liitännät:

    mo connect -R
    mo connect --remove-all

 ## Työskentely tallennustilan kanssa
 Kun olet luonut yhteyksiä, käytä `ls` , `cp` , `rm` , `meta` ja `mirror`
 työskentelemään heidän kanssaan.

 Jokaisen komennolle antamasi tiedostopolun etuliitteenä on oltava yhteyden nimi
 se viittaa. Alla olevissa esimerkeissä oletetaan, että on olemassa kaksi yhteyttä nimeltä `conn1` " ja `conn2`

 ### Listaa tiedostot
 Listakomennon tulos on sarja JSON-objekteja, yksi riviä kohden, jotka edustavat tiedostoja
 löytyi. Näillä objekteilla on `name` " ja "tyyppi `type` sekä mahdollisesti muita kenttiä.

    mo ls conn1/some/path

 Listaa tiedostot rekursiivisesti:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Salattua tallennustilaa koskeva huomautus**: Rekursiivista listaamista ei vielä tueta salatuissa yhteyksissä.
 Voit luetella vain yhden tiedostohakemiston kerrallaan.

 Listaa tiedostot sanallisesti (kauniin painettu JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Listaa tiedostot rekursiivisesti ja sanallisesti:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Katso `ls` komennon ohje, jossa kuvataan kaikki vaihtoehdot:

    mo ls -h
    mo ls --help

 ### Kirjoita tiedosto stdoutiin
 Komento `cat` tulostaa tiedoston stdout-tiedostoon:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Todellisen UNIX-hengessä *(mutta ei todellakaan käytäntö!)* mobiletton `cat` -komento **ei ota valintoja**
 muu kuin `-h` / `--help` näyttää hyödyllisiä tietoja.

 ### Kopioi tiedostot
 Kopioi yksi tiedosto mobiililaitteesta toiseen:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopioi yksi tiedosto mobiililaitteesta toiseen nimeämällä se uudelleen kohteessa:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopioi hakemisto rekursiivisesti:

    mo cp -r conn1/some/directory conn2/some/dest/

 Katso `cp` komennon ohje, jossa kuvataan kaikki vaihtoehdot:

    mo cp -h
    mo cp --help

 Huomautus: Tiedostojen kopiointi ei ole kovin nopeaa, koska se vaatii tällä hetkellä väliaikaisen välitiedoston.

 ### Poista tiedostot
 Yksittäisen tiedoston poistaminen:

    mo rm conn1/some/file.txt

 Poista yksittäinen tiedosto äläkä valita virheistä:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Poista hakemisto:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Poista hakemisto äläkä valita virheistä:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Näytä metatiedot
 Usein on hyödyllistä tietää tiedoston metatiedot lataamatta koko tiedostoa.

 Mobiletto pystyy raportoimaan tiedoston koon ja viimeisimmän muokkauksen ajan, nimen ja tyypin lisäksi.

 Voit tarkastella metatietoja seuraavasti:

    mo meta conn1/some/file.txt

 ### Peilaa hakemistoja
 Peilaus on enemmän kuin `cp` :n erikoistapaus, se on erillinen mobiletto-komento, joka käärii
 kopioida toiminta; se jatkuu myös virheiden sattuessa ja seuraa onnistumisten ja virheiden määrää.

 Peilaaksesi kaiken conn1:stä conn2:een:

    mo mirror conn1 conn2

 Voit peilata alihakemistoa seuraavasti:

    mo mirror conn1/some/subdir conn2

 Alihakemiston peilaus toiseen alihakemistoon:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
