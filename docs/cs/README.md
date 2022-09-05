mobiletto-cli
 ===============
 Rozhraní příkazového řádku (CLI) pro [mobiletto](https://www.npmjs.com/package/mobiletto)
 úložný prostor.

 Mobiletto podporuje připojení k Amazon S3, Backblaze B2 a místním souborovým systémům.

 # Přečtěte si to v jiném jazyce
 Tento dokument README.md byl přeložen prostřednictvím [hokeylizace](https://github.com/cobbzilla/hokeylization) do
 **[každý jazyk podporovaný Překladačem Google](https://cloud.google.com/translate/docs/languages)!**

 Jsem si jistý, že to není dokonalé, ale doufám, že je to lepší než nic!

 [🇸🇦 arabština](../ar/README.md)
 [🇧🇩 bengálština](../bn/README.md)
 [🇩🇪 němčina](../de/README.md)
 [🇺🇸 angličtina](../en/README.md)
 [🇪🇸 španělština](../es/README.md)
 [🇫🇷 francouzština](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindština](../hi/README.md)
 [🇮🇩 indonéština](../id/README.md)
 [🇮🇹 italština](../it/README.md)
 [🇯🇵 japonština](../ja/README.md)
 [🇰🇷 korejština](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polština](../pl/README.md)
 [🇧🇷 portugalština](../pt/README.md)
 [🇷🇺 ruština](../ru/README.md)
 [🇰🇪 svahilština](../sw/README.md)
 [🇵🇭 tagalština](../tl/README.md)
 [🇹🇷 turečtina](../tr/README.md)
 [🇵🇰 urdština](../ur/README.md)
 [🇻🇳 vietnamština](../vi/README.md)
 [🇨🇳 čínština](../zh/README.md)


 **[📚 ... Všechny jazyky ...](../README.md)**
 ----

 ### Je problém s tímto překladem souboru README?
 Tento konkrétní překlad originálu [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 může být chyba -- *opravy jsou velmi vítány!* Odešlete [žádost o stažení na GitHubu](https://github.com/cobbzilla/mobiletto-cli/pulls),
 nebo pokud se vám to nelíbí, [otevřete problém](https://github.com/cobbzilla/mobiletto-cli/issues)

 Když vytvoříte nový problém na GitHubu o překladu, proveďte prosím:
 * zahrňte adresu URL stránky (zkopírujte/vložte z adresního řádku prohlížeče)
 * uveďte přesný text, který je nesprávný (zkopírujte/vložte z prohlížeče)
 * popište prosím, co je špatně - je překlad nesprávný? je formátování nějak narušené?
 * laskavě nabídněte návrh lepšího překladu nebo jak by měl být text správně naformátován
 * **Děkuji!**

 # Obsah
 * [Zdroj](#Source)
 * [Support and Funding](#Support-and-Funding)
 * [Instalace a použití](#Installation-and-usage)
 * [balíček npm](#npm-balíček)
 * [Ze zdroje](#Ze zdroje)
 * [Connections](#Connections)
 * [Vytvořit připojení](#Create-a-connection)
 * [Seznam připojení](#List-connections)
 * [Vypsat konfiguraci JSON připojení](#Dump-connection-JSON-config)
 * [Odebrat připojení](#Remove-a-connection)
 * [Odebrat všechna připojení](#Remove-all-connections)
 * [Práce s úložištěm](#Working-with-storage)
 * [Seznam souborů](#List-files)
 * [Zapsat soubor do stdout](#Write-a-file-to-stdout)
 * [Kopírovat soubory](#Copy-files)
 * [Smazat soubory](#Delete-files)
 * [Zobrazit metadata](#View-metadata)
 * [Zrcadlové adresáře](#Mirror-directories)

 ### Zdroj
 * [mobiletto-cli na GitHubu](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli na npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Podpora a financování
 Snažím se být profesionálním vývojářem open source softwaru. Pracoval jsem v
 v softwarovém průmyslu jsem zakládal úspěšné společnosti a prodal je veřejným společnostem.
 Nedávno jsem přišel o práci a vlastně žádnou jinou práci nemám

 Takže zkusím napsat užitečný software a uvidím, jestli to funguje

 Pokud rádi používáte tento software, byl bych vám upřímně vděčný i za to
 nejmenší [měsíční příspěvek přes Patreon](https://www.patreon.com/cobbzilla)

 *Děkuji!*

 ## Instalace a použití
 Můžete nainstalovat a spustit `mobiletto-cli` přes npm nebo přímo ze zdroje.

 ### balíček npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ze zdroje
 Ke spuštění ze zdroje budete potřebovat nodejs v16+ a přízi

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Připojení
 Veškeré úložiště mobiletto je přístupné prostřednictvím připojení.

 Mobiletto v současné době podporuje připojení k místnímu úložišti souborového systému a bucketům Amazon S3.

 Připojení jsou určena objektem JSON, který vypadá takto:

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

 Úplné podrobnosti o všech možnostech a jejich hodnotách a významech viz
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Vytvořte spojení
 K vytvoření nového připojení potřebujeme jeden z těchto objektů JSON.

 Můžeme ji vytvořit interaktivně nebo ji dodat prostřednictvím souboru nebo literálu JSON:

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

 ### Seznam připojení
 Seznam dostupných připojení:

    mo connect -l
    mo connect --list

 ### Vypsat konfiguraci JSON připojení
 Zobrazit úplnou konfiguraci JSON pro připojení. **UPOZORNĚNÍ** toto vytiskne klíče a tajné informace do stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Odebrat připojení
 Odebrat jedno připojení:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Odstraňte všechna připojení
 Odeberte VŠECHNA připojení:

    mo connect -R
    mo connect --remove-all

 ## Práce s úložištěm
 Jakmile vytvoříte některá připojení, použijte `ls` , `cp` , `rm` , `meta` a `mirror`
 pracovat s nimi.

 Každá cesta k souboru, kterou zadáte příkazu, musí mít předponu s názvem připojení
 odkazuje to na. V příkladech níže předpokládáme, že existují dvě připojení pojmenovaná `conn1` a `conn2`

 ### Seznam souborů
 Výstupem příkazu list je řada objektů JSON, jeden na řádek, představující soubory
 nalezeno. Tyto objekty budou mít `name` a `type` typ` a případně další pole.

    mo ls conn1/some/path

 Seznam souborů rekurzivně:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Poznámka k šifrovanému úložišti**: Rekurzivní výpis zatím není podporován pro šifrovaná připojení.
 Najednou můžete vypsat pouze jeden adresář souborů.

 Seznam souborů podrobně (pěkně vytištěný JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Seznam souborů rekurzivně a podrobně:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Zobrazit nápovědu pro příkaz `ls` , popisuje všechny možnosti:

    mo ls -h
    mo ls --help

 ### Napište soubor do stdout
 Příkaz `cat` vytiskne soubor na stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ve skutečném UNIXovém duchu *(ale určitě ne praxe!)* příkaz `cat` **nebere žádné možnosti**
 jiné než `-h` / `--help` k zobrazení užitečných informací.

 ### Kopírovat soubory
 Zkopírujte jeden soubor z jednoho mobiletto do druhého:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Zkopírujte jeden soubor z jednoho mobiletto do druhého a v cílovém umístění jej přejmenujte:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekurzivně zkopírujte adresář:

    mo cp -r conn1/some/directory conn2/some/dest/

 Zobrazit nápovědu pro příkaz `cp` , popisuje všechny možnosti:

    mo cp -h
    mo cp --help

 Poznámka: Kopírování souborů není příliš rychlé, protože aktuálně vyžaduje přechodný dočasný soubor.

 ### Vymazat soubory
 Smazat jeden soubor:

    mo rm conn1/some/file.txt

 Smažte jeden soubor a nestěžujte si na žádné chyby:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Smazat adresář:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Smažte adresář a nestěžujte si na žádné chyby:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Zobrazit metadata
 Často je užitečné znát metadata souboru, aniž byste museli stahovat celý soubor.

 Mobiletto dokáže kromě názvu a typu hlásit velikost souboru a čas poslední změny.

 Chcete-li zobrazit metadata:

    mo meta conn1/some/file.txt

 ### Zrcadlit adresáře
 Zrcadlení je více než speciální případ `cp` , je to samostatný příkaz mobiletto, který obaluje
 operace kopírování; pokračuje, i když se vyskytnou chyby, a sleduje počet úspěchů a chyb.

 Chcete-li zrcadlit vše od conn1 do conn2:

    mo mirror conn1 conn2

 Chcete-li zrcadlit podadresář:

    mo mirror conn1/some/subdir conn2

 Chcete-li zrcadlit podadresář do jiného podadresáře:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
