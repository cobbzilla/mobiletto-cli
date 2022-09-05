mobiletto-cli
 ==============
 Rozhranie príkazového riadka (CLI) pre [mobiletto](https://www.npmjs.com/package/mobiletto)
 skladovanie.

 Mobiletto podporuje pripojenia k Amazon S3, Backblaze B2 a lokálnym súborovým systémom.

 # Prečítajte si to v inom jazyku
 Tento dokument README.md bol preložený prostredníctvom [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) do
 **[každý jazyk podporovaný Prekladačom Google](https://cloud.google.com/translate/docs/languages)!**

 Som si istý, že to nie je dokonalé, ale dúfam, že je to lepšie ako nič!

 [🇸🇦 arabčina](../ar/README.md)
 [🇧🇩 bengálčina](../bn/README.md)
 [🇩🇪 nemčina](../de/README.md)
 [🇺🇸 angličtina](../en/README.md)
 [🇪🇸 španielčina](../es/README.md)
 [🇫🇷 francúzština](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindčina](../hi/README.md)
 [🇮🇩 indonézština](../id/README.md)
 [🇮🇹 taliančina](../it/README.md)
 [🇯🇵 japončina](../ja/README.md)
 [🇰🇷 kórejčina](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poľština](../pl/README.md)
 [🇧🇷 portugalčina](../pt/README.md)
 [🇷🇺 ruština](../ru/README.md)
 [🇰🇪 svahilčina](../sw/README.md)
 [🇵🇭 tagalčina](../tl/README.md)
 [🇹🇷 turečtina](../tr/README.md)
 [🇵🇰 urdčina](../ur/README.md)
 [🇻🇳 vietnamčina](../vi/README.md)
 [🇨🇳 čínština](../zh/README.md)


 **[📚 ... Všetky jazyky ...](../README.md)**
 ----

 ### Vyskytol sa problém s týmto prekladom súboru README?
 Tento konkrétny preklad originálu [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 môže byť chybný -- *opravy sú veľmi vítané!* Pošlite [žiadosť o stiahnutie na GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 alebo ak sa vám to nepáči, [otvorte problém](https://github.com/cobbzilla/mobiletto-cli/issues)

 Keď vytvoríte nový problém na GitHub o preklade, postupujte takto:
 * uveďte adresu URL stránky (skopírujte/prilepte z panela s adresou prehliadača)
 * uveďte presný text, ktorý je nesprávny (skopírujte/prilepte z prehliadača)
 * popíšte, čo je nesprávne - je preklad nesprávny? je formátovanie nejako porušené?
 * láskavo ponúknite návrh na lepší preklad alebo ako by mal byť text správne naformátovaný
 * **Ďakujem!**

 ### Zdroj
 * [mobiletto-cli na GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli na npm](https://www.npmjs.com/package/mobiletto-cli)

 # Obsah
 * [Inštalácia a použitie](#Inštalácia a použitie)
 * [npm balík](#npm-balík)
 * [Zo zdroja](#Zo zdroja)
 * [Connections](#Connections)
 * [Vytvoriť pripojenie](#Create-a-connection)
 * [Vypísať spojenia](#List-connections)
 * [Vypísať konfiguráciu JSON pripojenia](#Dump-connection-JSON-config)
 * [Odstrániť pripojenie](#Remove-a-connection)
 * [Odstrániť všetky pripojenia](#Remove-all-connections)
 * [Práca s úložiskom](#Working-with-storage)
 * [Zoznam súborov](#List-files)
 * [Napíšte súbor do stdout](#Write-a-file-to-stdout)
 * [Kopírovať súbory](#Copy-files)
 * [Odstrániť súbory](#Delete-files)
 * [Zobraziť metadáta](#View-metadata)
 * [Zrkadlové adresáre](#Mirror-directories)

 ## Inštalácia a použitie
 `mobiletto-cli` môžete nainštalovať a spustiť cez npm alebo priamo zo zdroja.

 ### balík npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Zo zdroja
 Na spustenie zo zdroja budete potrebovať nodejs v16+ a priadzu

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Pripojenia
 Ku všetkým úložiskám mobiletto sa pristupuje cez pripojenie.

 Mobiletto v súčasnosti podporuje pripojenia k miestnemu úložisku súborového systému a bucketom Amazon S3.

 Pripojenia sú špecifikované objektom JSON, ktorý vyzerá takto:

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

 Úplné podrobnosti o všetkých možnostiach a ich hodnotách a významoch nájdete v časti
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Vytvorte spojenie
 Na vytvorenie nového pripojenia potrebujeme jeden z týchto objektov JSON.

 Môžeme ho vytvoriť interaktívne alebo ho dodať prostredníctvom súboru alebo literálu JSON:

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

 ### Vypísať spojenia
 Zoznam dostupných spojení:

    mo connect -l
    mo connect --list

 ### Vypíšte konfiguráciu JSON pripojenia
 Zobrazte úplnú konfiguráciu JSON pre pripojenie. **UPOZORNENIE** toto vytlačí kľúče a tajomstvá na stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Odstráňte pripojenie
 Odstráňte jedno pripojenie:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Odstráňte všetky pripojenia
 Odstráňte VŠETKY pripojenia:

    mo connect -R
    mo connect --remove-all

 ## Práca s úložiskom
 Po vytvorení niektorých spojení použite `ls` , `cp` , `rm` , `meta` a `mirror` mirror`
 pracovať s nimi.

 Každá cesta k súboru, ktorú zadáte príkazu, musí mať predponu s názvom pripojenia
 odkazuje na. V príkladoch nižšie predpokladáme, že existujú dve spojenia s názvom `conn1` “ a `conn2`

 ### Zoznam súborov
 Výstupom príkazu list je séria objektov JSON, jeden na riadok, ktoré predstavujú súbory
 nájdené. Tieto objekty budú mať `name` a `type` a možno aj ďalšie polia.

    mo ls conn1/some/path

 Zoznam súborov rekurzívne:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Poznámka k šifrovanému úložisku**: Rekurzívny výpis zatiaľ nie je podporovaný pre šifrované pripojenia.
 Naraz môžete uviesť iba jeden adresár súborov.

 Podrobný zoznam súborov (pekne vytlačený JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Zoznam súborov rekurzívne a podrobne:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Zobraziť pomoc pre príkaz `ls` , popisuje všetky možnosti:

    mo ls -h
    mo ls --help

 ### Napíšte súbor do stdout
 Príkaz `cat` vytlačí súbor na stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 V pravom duchu UNIX *(ale určite to nie je prax!)* príkaz `cat` v mobiletto **neberie žiadne možnosti**
 iné ako `-h` / `--help` na zobrazenie užitočných informácií.

 ### Kopírujte súbory
 Skopírujte jeden súbor z jedného mobiletto do druhého:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Skopírujte jeden súbor z jedného mobiletto do druhého a v cieľovom mieste ho premenujte:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekurzívne skopírujte adresár:

    mo cp -r conn1/some/directory conn2/some/dest/

 Zobraziť pomoc pre príkaz `cp` , popisuje všetky možnosti:

    mo cp -h
    mo cp --help

 Poznámka: Kopírovanie súborov nie je príliš rýchle, pretože v súčasnosti vyžaduje prechodný dočasný súbor.

 ### Vymazať súbory
 Odstránenie jedného súboru:

    mo rm conn1/some/file.txt

 Vymažte jeden súbor a nesťažujte sa na žiadne chyby:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Odstránenie adresára:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Odstráňte adresár a nesťažujte sa na žiadne chyby:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Zobraziť metadáta
 Často je užitočné poznať metadáta súboru bez sťahovania celého súboru.

 Mobiletto dokáže okrem názvu a typu nahlásiť aj veľkosť súboru a čas poslednej úpravy.

 Ak chcete zobraziť metadáta:

    mo meta conn1/some/file.txt

 ### Zrkadliť adresáre
 Zrkadlenie je viac než len špeciálny prípad `cp` , je to samostatný príkaz mobiletto, ktorý obalí
 operácia kopírovania; pokračuje, aj keď sa vyskytnú chyby, a sleduje počet úspechov a chýb.

 Ak chcete zrkadliť všetko od conn1 do conn2:

    mo mirror conn1 conn2

 Ak chcete zrkadliť podadresár:

    mo mirror conn1/some/subdir conn2

 Ak chcete zrkadliť podadresár do iného podadresára:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
