mobiletto-cli
 =============
 Interfejs komandne linije (CLI) za [mobiletto](https://www.npmjs.com/package/mobiletto)
 skladištenje.

 Mobiletto podržava veze na Amazon S3, Backblaze B2 i lokalne sisteme datoteka.

 # Pročitajte ovo na drugom jeziku
 Ovaj README.md dokument je preveden, putem [hokeylization](https://github.com/cobbzilla/hokeylization), na
 **[svaki jezik podržan od strane Google prevodioca](https://cloud.google.com/translate/docs/languages)!**

 Siguran sam da nije savršeno, ali nadam se da je bolje nego ništa!

 [🇸🇦 arapski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 njemački](../de/README.md)
 [🇺🇸 engleski](../en/README.md)
 [🇪🇸 španski](../es/README.md)
 [🇫🇷 francuski](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonezijski](../id/README.md)
 [🇮🇹 talijanski](../it/README.md)
 [🇯🇵 japanski](../ja/README.md)
 [🇰🇷 korejski](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poljski](../pl/README.md)
 [🇧🇷 portugalski](../pt/README.md)
 [🇷🇺 ruski](../ru/README.md)
 [🇰🇪 svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turski](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vijetnamski](../vi/README.md)
 [🇨🇳 kineski](../zh/README.md)


 **[📚 ... Svi jezici ...](../README.md)**
 ----

 ### Postoji li problem sa ovim prijevodom README-a?
 Ovaj konkretni prijevod originalnog [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 može biti manjkav -- *ispravke su dobrodošle!* Molimo pošaljite [zahtjev za povlačenje na GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ili ako vam to nije ugodno, [otvorite problem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kada kreirate novi GitHub problem o prijevodu, učinite:
 * uključite URL stranice (kopirajte/zalijepite iz adresne trake pretraživača)
 * uključite tačan tekst koji je pogrešan (kopirajte/zalijepite iz pretraživača)
 * opišite šta nije u redu -- da li je prevod netačan? da li je formatiranje nekako pokvareno?
 * ljubazno ponudite prijedlog boljeg prijevoda, odnosno kako bi tekst trebao biti pravilno formatiran
 * **Hvala ti!**

 # Sadržaj
 * [Izvor](#Izvor)
 * [Podrška i finansiranje](#Support-and-Funding)
 * [Instalacija i upotreba](#Instalacija-i-upotreba)
 * [npm paket](#npm-package)
 * [Iz izvora](#Iz izvora)
 * [Connections](#Connections)
 * [Kreirajte vezu](#Create-a-connection)
 * [Lista veza](#Lista-veze)
 * [Dump konfiguracija JSON veze](#Dump-connection-JSON-config)
 * [Ukloni vezu](#Remove-a-connection)
 * [Ukloni sve veze](#Remove-all-connections)
 * [Rad sa pohranom](#Rad-sa-skladištem)
 * [Lista fajlova](#Lista fajlova)
 * [Napišite datoteku u stdout](#Write-a-file-to-stdout)
 * [Kopiraj fajlove](#Copy-files)
 * [Izbriši fajlove](#Delete-files)
 * [Prikaži metapodatke](#View-metadata)
 * [Mirror direktoriji](#Mirror-directories)

 ### Izvor
 * [mobiletto-cli na GitHubu](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Podrška i finansiranje
 Pokušavam biti profesionalni programer otvorenog koda. Ja sam radio u
 softverskoj industriji dugi niz godina, pokrenuo sam uspješne kompanije i prodao ih javnim preduzećima.
 Nedavno sam izgubio posao i nemam nikakav drugi posao u redu

 Zato ću pokušati da napišem koristan softver i da vidim da li radi

 Ako uživate u korištenju ovog softvera, bio bih vam iskreno zahvalan čak i za
 najmanji [mjesečni doprinos putem Patreona](https://www.patreon.com/cobbzilla)

 *Hvala ti!*

 ## Instalacija i upotreba
 Možete instalirati i pokrenuti `mobiletto-cli` putem npm-a ili direktno iz izvora.

 ### npm paket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Iz izvora
 Za pokretanje iz izvora, trebat će vam nodejs v16+ i yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Veze
 Svim mobilnim pohranama pristupa se putem veze.

 Mobiletto trenutno podržava konekcije na lokalnu pohranu sistema datoteka i Amazon S3 bucket.

 Veze su određene JSON objektom koji izgleda ovako:

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

 Za sve detalje o svim opcijama i njihovim vrijednostima i značenjima, pogledajte
 [mobiletto dokumenti](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Kreirajte vezu
 Za kreiranje nove veze potreban nam je jedan od ovih JSON objekata.

 Možemo ga kreirati interaktivno ili ga dostaviti putem datoteke ili JSON literala:

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

 ### Lista veza
 Navedite dostupne veze:

    mo connect -l
    mo connect --list

 ### Dump konfiguraciju JSON veze
 Prikaži potpunu JSON konfiguraciju za vezu. **UPOZORENJE** ovo će ispisati ključeve i tajne na stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Uklonite vezu
 Uklonite jednu vezu:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Uklonite sve veze
 Uklonite SVE konekcije:

    mo connect -R
    mo connect --remove-all

 ## Rad sa skladištem
 Nakon što kreirate neke veze, koristite operacije `ls` , `cp` , `rm` , `meta` i `mirror`
 da radim sa njima.

 Svaka putanja datoteke koju date naredbi mora imati prefiks imena veze
 to se odnosi na. U primjerima ispod, pretpostavljamo da postoje dvije veze pod nazivom `conn1` i `conn2`

 ### Lista fajlova
 Izlaz komande liste je niz JSON objekata, jedan po redu, koji predstavljaju datoteke
 pronađeno. Ovi objekti će imati `name` i `type` , a moguće i druga polja.

    mo ls conn1/some/path

 Lista fajlova rekurzivno:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Napomena o šifriranoj pohrani**: Rekurzivni popis još nije podržan za šifrirane veze.
 Možete navesti samo jedan direktorij datoteka odjednom.

 Opširno navedite datoteke (prilično ispisan JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lista fajlova rekurzivno i verbozno:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Pogledajte pomoć za naredbu `ls` , opisuje sve opcije:

    mo ls -h
    mo ls --help

 ### Napišite datoteku u stdout
 Komanda `cat` će ispisati datoteku na stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 U pravom UNIX duhu *(ali svakako nije praksa!)* mobiletto-ova naredba `cat` **nema opcija**
 osim `-h` / `--help` za prikaz korisnih informacija.

 ### Kopiraj fajlove
 Kopirajte jednu datoteku s jednog mobilnog telefona na drugi:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopirajte jednu datoteku iz jednog mobilnog telefona u drugi, preimenujući je na odredištu:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekurzivno kopirajte direktorij:

    mo cp -r conn1/some/directory conn2/some/dest/

 Pogledajte pomoć za `cp` komandu, opisuje sve opcije:

    mo cp -h
    mo cp --help

 Napomena: Kopiranje datoteka nije vrlo brzo, jer trenutno zahtijeva posredni privremeni fajl.

 ### Izbrišite fajlove
 Izbrišite jedan fajl:

    mo rm conn1/some/file.txt

 Izbrišite jedan fajl i nemojte se žaliti na greške:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Izbrišite direktorij:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Izbrišite direktorij i nemojte se žaliti na greške:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Pogledaj metapodatke
 Često je korisno znati metapodatke za datoteku, bez preuzimanja cijele datoteke.

 Mobiletto može prijaviti veličinu datoteke i vrijeme posljednje izmjene, pored imena i tipa.

 Za pregled metapodataka:

    mo meta conn1/some/file.txt

 ### Mirror direktorije
 Zrcaljenje je više od posebnog slučaja `cp` , to je zasebna mobiletto naredba koja obavija
 operacija kopiranja; nastavlja se čak i kada se pojave greške i prati broj uspjeha i grešaka.

 Za preslikavanje svega od conn1 u conn2:

    mo mirror conn1 conn2

 Za preslikavanje poddirektorijuma:

    mo mirror conn1/some/subdir conn2

 Za preslikavanje poddirektorijuma u drugi poddirektorij:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
