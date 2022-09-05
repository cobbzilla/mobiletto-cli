mobiletto-cli
 ==============
 Sučelje naredbenog retka (CLI) za [mobiletto](https://www.npmjs.com/package/mobiletto)
 skladištenje.

 Mobiletto podržava veze na Amazon S3, Backblaze B2 i lokalne datotečne sustave.

 # Pročitajte ovo na drugom jeziku
 Ovaj dokument README.md preveden je putem [hokeylization](https://github.com/cobbzilla/hokeylization) na
 **[svi jezici koje podržava Google prevoditelj](https://cloud.google.com/translate/docs/languages)!**

 Sigurna sam da nije savršeno, ali nadam se da je bolje nego ništa!

 [🇸🇦 arapski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 njemački](../de/README.md)
 [🇺🇸 engleski](../en/README.md)
 [🇪🇸 španjolski](../es/README.md)
 [🇫🇷 francuski](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonezijski](../id/README.md)
 [🇮🇹 talijanski](../it/README.md)
 [🇯🇵 japanski](../ja/README.md)
 [🇰🇷 korejski](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
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

 ### Postoji li problem s ovim prijevodom README?
 Ovaj konkretan prijevod izvornika [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 može imati manjkavosti -- *ispravci su dobrodošli!* Pošaljite [zahtjev za povlačenjem na GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ili ako vam to nije ugodno, [otvorite problem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kada stvorite novi GitHub problem o prijevodu, učinite sljedeće:
 * uključite URL stranice (kopirajte/zalijepite iz adresne trake preglednika)
 * uključite točan tekst koji je pogrešan (kopirajte/zalijepite iz preglednika)
 * molimo opišite što nije u redu -- je li prijevod netočan? je li formatiranje nekako pokvareno?
 * ljubazno ponudite prijedlog boljeg prijevoda ili kako bi tekst trebao biti pravilno oblikovan
 * **Hvala vam!**

 # Sadržaj
 * [Izvor](#Izvor)
 * [Podrška i financiranje](#Support-and-Funding)
 * [Instalacija i korištenje](#Instalacija-i-korištenje)
 * [npm paket](#npm-paket)
 * [Iz izvora](#Iz izvora)
 * [Veze](#Veze)
 * [Stvorite vezu](#Create-a-connection)
 * [Popis veza](#Popis-veza)
 * [Dump JSON konfiguracije veze](#Dump-connection-JSON-config)
 * [Ukloni vezu](#Remove-a-connection)
 * [Ukloni sve veze](#Remove-all-connections)
 * [Rad s pohranom](#Working-with-storage)
 * [Popis datoteka](#Popis datoteka)
 * [Upišite datoteku u stdout](#Write-a-file-to-stdout)
 * [Kopiraj datoteke](#Copy-files)
 * [Izbriši datoteke](#Delete-files)
 * [Prikaz metapodataka](#View-metadata)
 * [Zrcalni direktoriji](#Mirror-directories)

 ### Izvor
 * [mobiletto-cli na GitHubu](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli na npm-u](https://www.npmjs.com/package/mobiletto-cli)

 ## Podrška i financiranje
 Pokušavam biti profesionalni programer softvera otvorenog koda. radio sam u
 U softverskoj industriji dugi niz godina, pokrenuo sam uspješne tvrtke i prodao ih javnim tvrtkama.
 Nedavno sam ostao bez posla i zapravo nemam drugog posla u planu

 Stoga ću pokušati napisati koristan softver i vidjeti hoće li to uspjeti

 Ako uživate u korištenju ovog softvera, bio bih vam iskreno zahvalan čak i na
 najmanji [mjesečni doprinos putem Patreona](https://www.patreon.com/cobbzilla)

 *Hvala vam!*

 ## Instalacija i korištenje
 Možete instalirati i pokrenuti `mobiletto-cli` putem npm-a ili izravno iz izvora.

 ### npm paket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Iz izvora
 Za pokretanje iz izvora trebat će vam nodejs v16+ i yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Veze
 Cijeloj pohrani mobiletto pristupa se putem veze.

 Mobiletto trenutno podržava veze s lokalnom pohranom datotečnog sustava i Amazon S3 spremnicima.

 Veze su navedene JSON objektom koji izgleda ovako:

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

 ### Stvorite vezu
 Za stvaranje nove veze potreban nam je jedan od ovih JSON objekata.

 Možemo ga izraditi interaktivno ili ga dostaviti putem datoteke ili JSON literala:

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

 ### Popis veza
 Navedite dostupne veze:

    mo connect -l
    mo connect --list

 ### Ispis JSON konfiguracije veze
 Prikaži punu JSON konfiguraciju za vezu. **UPOZORENJE** ovo će ispisati ključeve i tajne na stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Uklonite vezu
 Ukloni jednu vezu:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Uklonite sve veze
 Ukloni SVE veze:

    mo connect -R
    mo connect --remove-all

 ## Rad s pohranom
 Nakon što stvorite neke veze, upotrijebite `ls` , `cp` , `rm` , `meta` i `mirror`
 raditi s njima.

 Svaka staza datoteke koju navedete naredbi mora imati prefiks s nazivom veze
 odnosi se na. U primjerima u nastavku pretpostavljamo da postoje dvije veze pod nazivom `conn1` " i `conn2`

 ### Popis datoteka
 Izlaz naredbe popisa je niz JSON objekata, jedan po retku, koji predstavljaju datoteke
 pronađeno. Ti će objekti imati `name` i `type` tip`, a možda i druga polja.

    mo ls conn1/some/path

 Popis datoteka rekurzivno:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Napomena o šifriranoj pohrani**: Rekurzivni popis još nije podržan za šifrirane veze.
 Možete ispisati samo jedan direktorij datoteka odjednom.

 Detaljan popis datoteka (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Navedite datoteke rekurzivno i verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Pogledajte pomoć za naredbu `ls` , opisuje sve opcije:

    mo ls -h
    mo ls --help

 ### Napišite datoteku u stdout
 Naredba `cat` će datoteku na stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 U pravom duhu UNIX-a *(ali sigurno nije praksa!)* mobilettoova naredba `cat` **ne uzima opcije**
 osim `-h` / `--help` za prikaz korisnih informacija.

 ### Kopiraj datoteke
 Kopirajte jednu datoteku s jednog mobilnog telefona na drugi:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopirajte jednu datoteku s jednog mobilnog uređaja na drugi, preimenujući je na odredištu:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekurzivno kopirajte direktorij:

    mo cp -r conn1/some/directory conn2/some/dest/

 Pogledajte pomoć za naredbu `cp` , opisuje sve opcije:

    mo cp -h
    mo cp --help

 Napomena: Kopiranje datoteke nije jako brzo jer trenutno zahtijeva posredničku privremenu datoteku.

 ### Obriši datoteke
 Brisanje jedne datoteke:

    mo rm conn1/some/file.txt

 Izbrišite jednu datoteku i nemojte se žaliti na pogreške:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Brisanje imenika:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Izbrišite imenik i nemojte se žaliti na pogreške:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Pogledaj metapodatke
 Često je korisno znati metapodatke za datoteku, bez preuzimanja cijele datoteke.

 Mobiletto može prijaviti veličinu datoteke i vrijeme zadnje izmjene, uz naziv i vrstu.

 Za prikaz metapodataka:

    mo meta conn1/some/file.txt

 ### Zrcalni imenici
 Zrcaljenje je više od posebnog slučaja `cp` , to je zasebna mobiletto naredba koja obavija
 operacija kopiranja; nastavlja se čak i kada se pojave pogreške i prati broj uspjeha i pogrešaka.

 Za zrcaljenje svega iz conn1 u conn2:

    mo mirror conn1 conn2

 Za zrcaljenje poddirektorija:

    mo mirror conn1/some/subdir conn2

 Za zrcaljenje poddirektorija u drugi poddirektorij:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
