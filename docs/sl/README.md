mobiletto-cli
 ==============
 Vmesnik ukazne vrstice (CLI) za [mobiletto](https://www.npmjs.com/package/mobiletto)
 shranjevanje.

 Mobiletto podpira povezave z Amazon S3, Backblaze B2 in lokalnimi datotečnimi sistemi.

 # Preberite to v drugem jeziku
 Ta dokument README.md je bil preveden prek [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) v
 **[vsak jezik, ki ga podpira Google Prevajalnik](https://cloud.google.com/translate/docs/languages)!**

 Prepričan sem, da ni popolno, a upam, da je bolje kot nič!

 [🇸🇦 arabščina](../ar/README.md)
 [🇧🇩 bengalščina](../bn/README.md)
 [🇩🇪 nemščina](../de/README.md)
 [🇺🇸 angleščina](../en/README.md)
 [🇪🇸 španščina](../es/README.md)
 [🇫🇷 francoščina](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonezijščina](../id/README.md)
 [🇮🇹 italijanščina](../it/README.md)
 [🇯🇵 japonščina](../ja/README.md)
 [🇰🇷 korejščina](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poljščina](../pl/README.md)
 [🇧🇷 portugalščina](../pt/README.md)
 [🇷🇺 rusko](../ru/README.md)
 [🇰🇪 svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turščina](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnamščina](../vi/README.md)
 [🇨🇳 kitajščina](../zh/README.md)


 **[📚 ... Vsi jeziki ...](../README.md)**
 ----

 ### Ali obstaja težava s tem prevodom README?
 Ta poseben prevod izvirnika [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 je morda pomanjkljiv -- *popravki so zelo dobrodošli!* Prosimo, pošljite [zahtevo za vlečenje na GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ali če vam to ni všeč, [odprite težavo](https://github.com/cobbzilla/mobiletto-cli/issues)

 Ko ustvarite novo težavo GitHub o prevodu, naredite naslednje:
 * vključite URL strani (kopirajte/prilepite iz naslovne vrstice brskalnika)
 * vključi točno besedilo, ki je napačno (kopiraj/prilepi iz brskalnika)
 * Prosimo, opišite, kaj je narobe -- ali je prevod napačen? je formatiranje nekako pokvarjeno?
 * vljudno prosim za predlog boljšega prevoda oziroma kako naj bo besedilo pravilno oblikovano
 * **Hvala vam!**

 ### Vir
 * [mobiletto-cli na GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli na npm](https://www.npmjs.com/package/mobiletto-cli)

 # Vsebina
 * [Namestitev in uporaba](#Namestitev-in-uporaba)
 * [paket npm](#npm-paket)
 * [Iz vira](#Iz vira)
 * [Povezave](#Povezave)
 * [Ustvari povezavo](#Create-a-connection)
 * [Seznam povezav](#Seznam povezav)
 * [Izpis konfiguracije povezave JSON](#Dump-connection-JSON-config)
 * [Odstrani povezavo](#Remove-a-connection)
 * [Odstrani vse povezave](#Remove-all-connections)
 * [Delo s shrambo](#Delo s shrambo)
 * [Seznam datotek](#Seznam datotek)
 * [Zapiši datoteko v stdout](#Write-a-file-to-stdout)
 * [Kopiraj datoteke](#Copy-files)
 * [Izbriši datoteke](#Delete-files)
 * [Ogled metapodatkov](#View-metadata)
 * [Zrcalni imeniki](#Mirror-directories)

 ## Namestitev in uporaba
 `mobiletto-cli` lahko namestite in zaženete prek npm ali neposredno iz vira.

 ### paket npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Iz vira
 Za zagon iz izvorne kode boste potrebovali nodejs v16+ in yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Povezave
 Do celotnega pomnilnika mobiletto se dostopa prek povezave.

 Mobiletto trenutno podpira povezave z lokalno shrambo datotečnega sistema in vedri Amazon S3.

 Povezave določa objekt JSON, ki je videti takole:

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

 Za vse podrobnosti o vseh možnostih ter njihovih vrednostih in pomenih glejte
 [mobiletto dokumenti](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Ustvari povezavo
 Za ustvarjanje nove povezave potrebujemo enega od teh objektov JSON.

 Ustvarimo ga lahko interaktivno ali ga posredujemo prek datoteke ali literala JSON:

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

 ### Seznam povezav
 Seznam razpoložljivih povezav:

    mo connect -l
    mo connect --list

 ### Izpis povezave JSON konfiguracije
 Prikaži celotno konfiguracijo JSON za povezavo. **OPOZORILO** to bo natisnilo ključe in skrivnosti v stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Odstrani povezavo
 Odstranite eno povezavo:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Odstrani vse povezave
 Odstranite VSE povezave:

    mo connect -R
    mo connect --remove-all

 ## Delo s shranjevanjem
 Ko ustvarite nekaj povezav, uporabite `ls` , `cp` , `rm` , `meta` in `mirror` mirror`
 delati z njimi.

 Vsaka pot do datoteke, ki jo podate ukazu, mora imeti predpono ime povezave
 se nanaša na. V spodnjih primerih predvidevamo, da obstajata dve povezavi z imenom `conn1` in `conn2`

 ### Seznam datotek
 Rezultat ukaza seznama je vrsta objektov JSON, po eden na vrstico, ki predstavljajo datoteke
 našel. Ti objekti bodo imeli `name` in `type` in po možnosti druga polja.

    mo ls conn1/some/path

 Seznam datotek rekurzivno:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Opomba o šifriranem pomnilniku**: Rekurzivni seznam še ni podprt za šifrirane povezave.
 Naenkrat lahko navedete samo en imenik datotek.

 Dobesedni seznam datotek (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Seznam datotek rekurzivno in podrobno:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Oglejte si pomoč za ukaz `ls` , opisuje vse možnosti:

    mo ls -h
    mo ls --help

 ### Zapišite datoteko v stdout
 Ukaz `cat` bo natisnil datoteko v stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 V pravem duhu UNIX *(vendar zagotovo ne praksa!)* ukaz `cat` **ne sprejema nobenih možnosti**
 razen `-h` / `--help` za prikaz koristnih informacij.

 ### Kopiraj datoteke
 Kopirajte eno datoteko z enega mobilnega telefona na drugega:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopirajte posamezno datoteko iz enega mobiletto v drugega in jo preimenujte na cilju:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekurzivno kopirajte imenik:

    mo cp -r conn1/some/directory conn2/some/dest/

 Oglejte si pomoč za ukaz `cp` , opisuje vse možnosti:

    mo cp -h
    mo cp --help

 Opomba: kopiranje datotek ni zelo hitro, ker trenutno zahteva vmesno začasno datoteko.

 ### Izbriši datoteke
 Izbriši eno datoteko:

    mo rm conn1/some/file.txt

 Izbrišite eno datoteko in se ne pritožujte zaradi napak:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Brisanje imenika:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Izbrišite imenik in se ne pritožujte zaradi napak:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Ogled metapodatkov
 Pogosto je koristno poznati metapodatke za datoteko, ne da bi prenesli celotno datoteko.

 Mobiletto lahko poleg imena in vrste poroča tudi o velikosti datoteke in času zadnje spremembe.

 Za ogled metapodatkov:

    mo meta conn1/some/file.txt

 ### Zrcalni imeniki
 Zrcaljenje je več kot poseben primer `cp` , je ločen ukaz mobiletto, ki ovije
 kopiranje; nadaljuje tudi, ko pride do napak, in sledi štetju uspehov in napak.

 Za zrcaljenje vsega iz conn1 v conn2:

    mo mirror conn1 conn2

 Za zrcaljenje podimenika:

    mo mirror conn1/some/subdir conn2

 Za zrcaljenje podimenika v drug podimenik:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
