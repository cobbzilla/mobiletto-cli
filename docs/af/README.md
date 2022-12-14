mobiletto-cli
 ==============
 'n Opdraglyn-koppelvlak (CLI) vir [mobiletto](https://www.npmjs.com/package/mobiletto)
 berging.

 Mobiletto ondersteun verbindings met Amazon S3, Backblaze B2 en plaaslike lรชerstelsels.

 # Lees dit in 'n ander taal
 Hierdie README.md-dokument is vertaal, via [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[elke taal wat deur Google Translate ondersteun word](https://cloud.google.com/translate/docs/languages)!**

 Ek is seker dit is nie perfek nie, maar ek hoop dit is beter as niks!

 [๐ธ๐ฆ Arabies](../ar/README.md)
 [๐ง๐ฉ Bengaals](../bn/README.md)
 [๐ฉ๐ช Duits](../de/README.md)
 [๐บ๐ธ Engels](../en/README.md)
 [๐ช๐ธ Spaans](../es/README.md)
 [๐ซ๐ท Frans](../fr/README.md)
 [๐น๐ฉ Hausa](../ha/README.md)
 [๐ฎ๐ณ Hindi](../hi/README.md)
 [๐ฎ๐ฉ Indonesies](../id/README.md)
 [๐ฎ๐น Italiaans](../it/README.md)
 [๐ฏ๐ต Japannees](../ja/README.md)
 [๐ฐ๐ท Koreaans](../ko/README.md)
 [๐ฎ๐ณ Maranthi](../mr/README.md)
 [๐ต๐ฑ Pools](../pl/README.md)
 [๐ง๐ท Portugees](../pt/README.md)
 [๐ท๐บ Russies](../ru/README.md)
 [๐ฐ๐ช Swahili](../sw/README.md)
 [๐ต๐ญ Tagalog](../tl/README.md)
 [๐น๐ท Turks](../tr/README.md)
 [๐ต๐ฐ Oerdoe](../ur/README.md)
 [๐ป๐ณ Viรซtnamees](../vi/README.md)
 [๐จ๐ณ Chinees](../zh/README.md)


 **[๐ ... Alle tale ...](../README.md)**
 ----

 ### Is daar 'n probleem met hierdie vertaling van die README?
 Hierdie spesifieke vertaling van die oorspronklike [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 mag gebrekkig wees -- *regstellings is baie welkom!* Stuur asseblief 'n [trekversoek op GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 of as jy nie gemaklik is om dit te doen nie, [maak 'n kwessie oop](https://github.com/cobbzilla/mobiletto-cli/issues)

 Wanneer jy 'n nuwe GitHub-uitgawe oor 'n vertaling skep, doen asseblief:
 * sluit die bladsy-URL in (kopieer/plak vanaf blaaieradresbalk)
 * sluit die presiese teks in wat verkeerd is (kopieer/plak vanaf blaaier)
 * Beskryf asseblief wat fout is -- is die vertaling verkeerd? is die formatering op een of ander manier gebreek?
 * Bied asseblief 'n voorstel van 'n beter vertaling, of hoe die teks behoorlik geformateer moet word
 * **Dankie!**

 # Inhoud
 * [Bron](#Bron)
 * [Ondersteuning en befondsing](#Ondersteuning-en-befondsing)
 * [Installasie en gebruik](#Installasie-en-gebruik)
 * [npm-pakket](#npm-pakket)
 * [Van bron](#Van bron)
 * [Connections](#Connections)
 * [Skep 'n verbinding](#Skep-'n-verbinding)
 * [Lys verbindings](#Lysverbindings)
 * [Stort verbinding JSON config](#Dump-connection-JSON-config)
 * [Verwyder 'n verbinding](#Verwyder-'n-verbinding)
 * [Verwyder alle verbindings](#Verwyder-alle-verbindings)
 * [Werk met berging](#Werk-met-berging)
 * [Lys lรชers](#Lys-lรชers)
 * [Skryf 'n lรชer na stdout](#Skryf-'n-lรชer-na-stdout)
 * [Kopieer lรชers](#Copy-files)
 * [Vee lรชers uit](#Delete-files)
 * [Bekyk metadata](#Bekyk-metadata)
 * [Spieรซlgidse](#Spieรซlgidse)

 ### Bron
 * [mobiletto-cli op GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli op npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Ondersteuning en befondsing
 Ek probeer om 'n professionele oopbron sagteware-ontwikkelaar te wees. Ek het gewerk in
 die sagteware-industrie vir baie jare, het ek suksesvolle maatskappye begin en dit aan openbare maatskappye verkoop.
 Onlangs het ek my werk verloor, en ek het nie regtig enige ander werk in die ry nie

 So ek gaan probeer om nuttige sagteware te skryf en kyk of dit werk

 As jy dit geniet om hierdie sagteware te gebruik, sal ek opreg dankbaar wees vir selfs die
 kleinste [maandelikse bydrae via Patreon](https://www.patreon.com/cobbzilla)

 *Dankie!*

 ## Installasie en gebruik
 Jy kan `mobiletto-cli` installeer en laat loop via npm of direk vanaf die bron.

 ### npm-pakket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Van bron
 Om vanaf die bron te hardloop, benodig jy nodejs v16+ en gare

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Verbindings
 Alle mobiletto-berging word verkry deur 'n verbinding.

 Mobiletto ondersteun tans verbindings met die plaaslike lรชerstelselberging en Amazon S3-emmers.

 Verbindings word gespesifiseer deur 'n JSON-voorwerp wat soos volg lyk:

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

 Vir volledige besonderhede oor al die opsies en hul waardes en betekenisse, sien die
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Skep 'n verbinding
 Om 'n nuwe verbinding te skep, benodig ons een van hierdie JSON-objekte.

 Ons kan een interaktief skep, of een verskaf via 'n lรชer of JSON letterlik:

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

 ### Lys verbindings
 Lys beskikbare verbindings:

    mo connect -l
    mo connect --list

 ### Dump verbinding JSON konfig
 Wys die volledige JSON-opstelling vir 'n verbinding. **WAARSKUWING** dit sal sleutels en geheime na stdout druk.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Verwyder 'n verbinding
 Verwyder 'n enkele verbinding:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Verwyder alle verbindings
 Verwyder ALLE verbindings:

    mo connect -R
    mo connect --remove-all

 ## Werk met berging
 Sodra jy 'n paar verbindings geskep het, gebruik die `ls` , `cp` , `rm` , `meta` en `mirror` bewerkings
 om met hulle te werk.

 Elke lรชerpad wat jy aan 'n opdrag verskaf, moet voorafgegaan word met die naam van die verbinding
 dit verwys na. In die voorbeelde hieronder, neem ons aan dat twee verbindings bestaan genaamd `conn1` en `conn2`

 ### Lys lรชers
 Die uitvoer van 'n lysopdrag is 'n reeks JSON-voorwerpe, een per reรซl, wat die lรชers verteenwoordig
 gevind. Hierdie voorwerpe sal 'n `name` ' en `type` , en moontlik ander velde.

    mo ls conn1/some/path

 Lys lรชers rekursief:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Geรซnkripteerde bergingsnota**: Rekursiewe lys word nog nie vir geรซnkripteerde verbindings ondersteun nie.
 Jy kan net een gids van lรชers op 'n slag lys.

 Lys lรชers breedvoerig (mooi-gedrukte JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lys lรชers rekursief en woordeliks:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Bekyk hulp vir `ls` opdrag, beskryf alle opsies:

    mo ls -h
    mo ls --help

 ### Skryf 'n lรชer na stdout
 Die `cat` opdrag sal 'n lรชer na stdout druk:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 In die ware UNIX-gees *(maar beslis nie die praktyk nie!)* mobiletto se `cat` opdrag **neem geen opsies nie**
 anders as `-h` / `--help` om nuttige inligting te vertoon.

 ### Kopieer lรชers
 Kopieer 'n enkele lรชer van een mobiletto na 'n ander:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopieer 'n enkele lรชer van een mobiletto na 'n ander, en hernoem dit by die bestemming:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopieer 'n gids rekursief:

    mo cp -r conn1/some/directory conn2/some/dest/

 Bekyk hulp vir `cp` opdrag, beskryf alle opsies:

    mo cp -h
    mo cp --help

 Let wel: Lรชerkopieer is nie baie vinnig nie, want dit vereis tans 'n tussenganger-templeer.

 ### Vee lรชers uit
 Vee 'n enkele lรชer uit:

    mo rm conn1/some/file.txt

 Vee 'n enkele lรชer uit en moenie kla oor enige foute nie:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Vee 'n gids uit:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Vee 'n gids uit en moenie kla oor enige foute nie:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Bekyk metadata
 Dit is dikwels nuttig om die metadata vir 'n lรชer te ken, sonder om die hele lรชer af te laai.

 Mobiletto kan die lรชergrootte en laaste gewysigde tyd rapporteer, benewens naam en tipe.

 Om metadata te bekyk:

    mo meta conn1/some/file.txt

 ### Spieรซl dopgehou
 Mirroring is meer as 'n spesiale geval van `cp` , dit is 'n aparte mobiletto-opdrag wat die
 kopieerbewerking; dit gaan voort selfs wanneer foute voorkom, en volg 'n telling van suksesse en foute.

 Om alles van conn1 na conn2 te weerspieรซl:

    mo mirror conn1 conn2

 Om 'n subgids te weerspieรซl:

    mo mirror conn1/some/subdir conn2

 Om 'n subgids in 'n ander subgids te weerspieรซl:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
