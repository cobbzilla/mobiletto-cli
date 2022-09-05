mobiletto-cli
 =============
 Parancssori felület (CLI) a [mobiletto] számára (https://www.npmjs.com/package/mobiletto)
 tárolás.

 A Mobiletto támogatja az Amazon S3, a Backblaze B2 és a helyi fájlrendszerek csatlakozását.

 # Olvassa el ezt egy másik nyelven
 Ezt a README.md dokumentumot a [hokeylization](https://github.com/cobbzilla/hokeylization) segítségével lefordították nyelvre
 **[a Google Fordító által támogatott minden nyelv](https://cloud.google.com/translate/docs/languages)!**

 Biztos vagyok benne, hogy nem tökéletes, de remélem, jobb a semminél!

 [🇸🇦 arab](../ar/README.md)
 [🇧🇩 bengáli](../bn/README.md)
 [🇩🇪 német](../de/README.md)
 [🇺🇸 angol](../en/README.md)
 [🇪🇸 spanyol](../es/README.md)
 [🇫🇷 francia](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonéz](../id/README.md)
 [🇮🇹 olasz](../it/README.md)
 [🇯🇵 japán](../ja/README.md)
 [🇰🇷 koreai](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 lengyel](../pl/README.md)
 [🇧🇷 portugál](../pt/README.md)
 [🇷🇺 orosz](../ru/README.md)
 [🇰🇪 szuahéli](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 török](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnami](../vi/README.md)
 [🇨🇳 kínai](../zh/README.md)


 **[📚 ... Minden nyelv ...](../README.md)**
 ----

 ### Probléma van a README fordításával?
 Ez a fordítás az eredeti [README]-nek (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 hibás lehet -- *a javításokat nagyon szívesen fogadjuk!* Kérjük, küldjön [lehívási kérelmet a GitHubon](https://github.com/cobbzilla/mobiletto-cli/pulls),
 vagy ha nem érzi jól magát, [nyisson meg egy problémát](https://github.com/cobbzilla/mobiletto-cli/issues)

 Amikor új GitHub-kiadást hoz létre egy fordítással kapcsolatban, tegye a következőket:
 * tartalmazza az oldal URL-jét (másolás/beillesztés a böngésző címsorából)
 * Pontosan adja meg a hibás szöveget (másolás/beillesztés a böngészőből)
 * Kérem írja le, mi a hiba -- hibás a fordítás? elromlott valahogy a formázás?
 * Kérem, tegyen javaslatot jobb fordításra, vagy a szöveg helyes formázására
 * **Köszönöm!**

 # Tartalom
 * [Forrás](#Forrás)
 * [Támogatás és finanszírozás](#Support-and-Funding)
 * [Telepítés és használat](#Installation-and-usage)
 * [npm-csomag](#npm-csomag)
 * [Forrásból](#Forrásból)
 * [Kapcsolatok](#Connections)
 * [Kapcsolat létrehozása](#Create-a-connection)
 * [Kapcsolatok listázása](#List-connections)
 * [JSON-konfiguráció kiíratása](#Dump-connection-JSON-config)
 * [Kapcsolat eltávolítása](#Remove-a-connection)
 * [Remove all connections](#Remove-all-connections)
 * [Working with storage](#Working-with-storage)
 * [Fájlok listázása](#Lista-fájlok)
 * [Fájl írása az stdout-ba](#Fájl írása az alapértelmezett fájlba)
 * [Fájlok másolása](#Fájlok másolása)
 * [Fájlok törlése](#Delete-files)
 * [Metaadatok megtekintése](#View-metadata)
 * [Könyvtárak tükrözése](#Tükör-könyvtárak)

 ### Forrás
 * [mobiletto-cli a GitHubon](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Támogatás és finanszírozás
 Megpróbálok professzionális nyílt forráskódú szoftverfejlesztő lenni. ben dolgoztam
 A szoftveriparban évek óta sikeres cégeket alapítottam, amelyeket állami cégeknek adtam el.
 Nemrég elvesztettem a munkámat, és nem igazán van más dolgom

 Tehát megpróbálok hasznos szoftvereket írni, és megnézem, működik-e

 Ha szívesen használja ezt a szoftvert, őszintén hálás lennék még a
 legkisebb [havi hozzájárulás a Patreonon keresztül](https://www.patreon.com/cobbzilla)

 *Köszönöm!*

 ## Telepítés és használat
 Telepítheti és futtathatja a `mobiletto-cli` az npm-en keresztül vagy közvetlenül a forrásból.

 ### npm csomag
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### A forrásból
 A forrásból való futtatáshoz nodejs v16+ és yarn szükséges

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Kapcsolatok
 Minden mobiletto tárhely kapcsolaton keresztül érhető el.

 A Mobiletto jelenleg támogatja a kapcsolatot a helyi fájlrendszer tárolójával és az Amazon S3 tárolókkal.

 A kapcsolatokat egy JSON-objektum határozza meg, amely így néz ki:

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

 Az összes opcióval, értékükkel és jelentésükkel kapcsolatos részletes információkért lásd a
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Hozzon létre kapcsolatot
 Új kapcsolat létrehozásához szükségünk van az egyik ilyen JSON-objektumra.

 Létrehozhatunk egyet interaktívan, vagy megadhatunk egyet fájl vagy JSON literál segítségével:

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

 ### Kapcsolatok listázása
 Az elérhető kapcsolatok listája:

    mo connect -l
    mo connect --list

 ### Kapcsolat kiíratása JSON-konfiguráció
 Mutassa meg a kapcsolat teljes JSON-konfigurációját. **FIGYELEM** ez kinyomtatja a kulcsokat és a titkokat az stdout-ba.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Kapcsolat eltávolítása
 Egyetlen csatlakozás eltávolítása:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Távolítson el minden kapcsolatot
 Távolítsa el az ÖSSZES kapcsolatot:

    mo connect -R
    mo connect --remove-all

 ## Tárolás használata
 Miután létrehozott néhány kapcsolatot, használja az `ls` , `cp` , `rm` , `meta` és `mirror` tükör` műveleteket
 dolgozni velük.

 Minden fájl elérési útját, amelyet egy parancshoz ad meg, előtaggal kell ellátni a kapcsolat nevével
 utal valamire. Az alábbi példákban feltételezzük, hogy két kapcsolat létezik, amelyek neve `conn1` " és `conn2`

 ### Fájlok listázása
 A listaparancs kimenete JSON-objektumok sorozata, soronként egy, amely a fájlokat reprezentálja
 megtalált. Ezeknek az objektumoknak lesz egy `name` és `type` , és esetleg más mezők is.

    mo ls conn1/some/path

 Fájlok rekurzív listázása:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Megjegyzés a titkosított tárhelyről**: A rekurzív listázás még nem támogatott titkosított kapcsolatok esetén.
 Egyszerre csak egy könyvtárat listázhat ki.

 Fájlok részletes listázása (jól nyomtatott JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Fájlok listázása rekurzívan és szó szerint:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Tekintse meg az `ls` parancs súgóját, leírja az összes lehetőséget:

    mo ls -h
    mo ls --help

 ### Írjon egy fájlt az stdoutba
 A `cat` parancs egy fájlt nyomtat az stdout-ba:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Az igazi UNIX szellemében *(de természetesen nem a gyakorlatban!)* a mobiletto `cat` parancsa **nem használ opciókat**
 a `-h` / `--help` a hasznos információk megjelenítéséhez.

 ### Fájlok másolása
 Egyetlen fájl másolása egyik mobilról a másikra:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Másoljon át egyetlen fájlt egyik mobilról a másikra, és nevezze át a célhelyen:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Könyvtár rekurzív másolása:

    mo cp -r conn1/some/directory conn2/some/dest/

 Tekintse meg a `cp` parancs súgóját, leírja az összes lehetőséget:

    mo cp -h
    mo cp --help

 Megjegyzés: A fájl másolása nem túl gyors, mert jelenleg ideiglenes ideiglenes fájlra van szükség.

 ### Fájlok törlése
 Egyetlen fájl törlése:

    mo rm conn1/some/file.txt

 Töröljön egyetlen fájlt, és ne panaszkodjon a hibákra:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Könyvtár törlése:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Töröljön egy könyvtárat, és ne panaszkodjon a hibákra:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Metaadatok megtekintése
 Gyakran hasznos tudni a fájl metaadatait anélkül, hogy a teljes fájlt letöltené.

 A Mobiletto a néven és a típuson kívül képes jelenteni a fájl méretét és az utolsó módosítás idejét.

 A metaadatok megtekintéséhez:

    mo meta conn1/some/file.txt

 ### Könyvtárak tükrözése
 A tükrözés több, mint a `cp` speciális esete, ez egy külön mobiletto parancs, amely a
 másolási művelet; akkor is folytatódik, ha hiba történik, és nyomon követi a sikerek és hibák számát.

 A conn1-től a conn2-ig mindent tükrözni:

    mo mirror conn1 conn2

 Egy alkönyvtár tükrözéséhez:

    mo mirror conn1/some/subdir conn2

 Egy alkönyvtár tükrözése másik alkönyvtárba:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
