mobiletto-cli
 ==============
 Skipanalínuviðmót (CLI) fyrir [mobiletto](https://www.npmjs.com/package/mobiletto)
 geymsla.

 Mobiletto styður tengingar við Amazon S3, Backblaze B2 og staðbundin skráarkerfi.

 # Lestu þetta á öðru tungumáli
 Þetta README.md skjal hefur verið þýtt, með [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), yfir á
 **[öll tungumál studd af Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ég er viss um að það er ekki fullkomið, en ég vona að það sé betra en ekkert!

 [🇸🇦 arabíska](../ar/README.md)
 [🇧🇩 bengalska](../bn/README.md)
 [🇩🇪 þýska](../de/README.md)
 [🇺🇸 enska](../en/README.md)
 [🇪🇸 spænska](../es/README.md)
 [🇫🇷 franska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindí](../hi/README.md)
 [🇮🇩 indónesíska](../id/README.md)
 [🇮🇹 ítalska](../it/README.md)
 [🇯🇵 japanska](../ja/README.md)
 [🇰🇷 kóreska](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 pólska](../pl/README.md)
 [🇧🇷 portúgalska](../pt/README.md)
 [🇷🇺 rússneska](../ru/README.md)
 [🇰🇪 svahílí](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tyrkneska](../tr/README.md)
 [🇵🇰 Úrdú](../ur/README.md)
 [🇻🇳 víetnamska](../vi/README.md)
 [🇨🇳 kínverska](../zh/README.md)


 **[📚 ... Öll tungumál ...](../README.md)**
 ----

 ### Er vandamál með þessa þýðingu á README?
 Þessi tiltekna þýðing á upprunalegu [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 gæti verið gallað -- *leiðréttingar eru mjög vel þegnar!* Vinsamlegast sendu [pull beiðni á GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 eða ef þú ert ekki sátt við að gera það, [opnaðu mál](https://github.com/cobbzilla/mobiletto-cli/issues)

 Þegar þú býrð til nýtt GitHub tölublað um þýðingu, vinsamlegast gerðu:
 * láttu vefslóð síðunnar fylgja (afritaðu/límdu af veffangastiku vafrans)
 * láttu nákvæmlega texta sem er rangur fylgja með (afrita/líma úr vafra)
 * vinsamlegast lýstu hvað er rangt -- er þýðingin röng? er sniðið eitthvað bilað?
 * komdu með tillögu um betri þýðingu eða hvernig textinn ætti að vera rétt sniðinn
 * **Þakka þér fyrir!**

 ### Heimild
 * [mobiletto-cli á GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli á npm](https://www.npmjs.com/package/mobiletto-cli)

 # Innihald
 * [Uppsetning og notkun](#Uppsetning-og-notkun)
 * [npm pakki](#npm-pakki)
 * [Frá uppruna](#Frá uppruna)
 * [Connections](#Connections)
 * [Búa til tengingu](#Búa til tengingu)
 * [Lista tengingar](#List-tengingar)
 * [Sleppa tengingu JSON stillingar](#Dúmp-tenging-JSON-stilling)
 * [Fjarlægja tengingu](#Fjarlægja-tenging)
 * [Fjarlægja allar tengingar](#Fjarlægja-allar-tengingar)
 * [Vinnur með geymslu](#Vinnur með geymslu)
 * [List skrár](#List-files)
 * [Skrifaðu skrá í stdout](#Write-a-file-to-stdout)
 * [Afrita skrár](#Copy-files)
 * [Eyða skrám](#Delete-files)
 * [Skoða lýsigögn](#Skoða-lýsigögn)
 * [Speglaskrár](#Mirror-möppur)

 ## Uppsetning og notkun
 Þú getur sett upp og keyrt `mobiletto-cli` í gegnum npm eða beint frá uppruna.

 ### npm pakki
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Frá uppruna
 Til að keyra frá uppruna þarftu nodejs v16+ og garn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Tengingar
 Öll mobiletto geymsla er aðgengileg í gegnum tengingu.

 Mobiletto styður sem stendur tengingar við staðbundið skráarkerfisgeymslu og Amazon S3 fötu.

 Tengingar eru tilgreindar með JSON hlut sem lítur svona út:

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

 Fyrir allar upplýsingar um alla valkostina og gildi þeirra og merkingu, sjáðu
 [mobiletto skjöl](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Búðu til tengingu
 Til að búa til nýja tengingu þurfum við einn af þessum JSON hlutum.

 Við getum búið til einn gagnvirkt, eða útvegað einn í gegnum skrá eða JSON bókstaflega:

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

 ### Listaðu tengingar
 Listi yfir tiltækar tengingar:

    mo connect -l
    mo connect --list

 ### Afrita tengingu JSON stillingar
 Sýndu alla JSON stillingu fyrir tengingu. **VIÐVÖRUN** þetta mun prenta lykla og leyndarmál í stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Fjarlægðu tengingu
 Fjarlægðu eina tengingu:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Fjarlægðu allar tengingar
 Fjarlægðu ALLAR tengingar:

    mo connect -R
    mo connect --remove-all

 ## Að vinna með geymslu
 Þegar þú hefur búið til nokkrar tengingar skaltu nota `ls` , `cp` , `rm` , `meta` og `mirror` aðgerðirnar
 að vinna með þeim.

 Sérhver skráarslóð sem þú gefur upp fyrir skipun verður að vera með forskeyti með nafni tengingarinnar
 það vísar til. Í dæmunum hér að neðan gerum við ráð fyrir að tvær tengingar séu til sem heita `conn1` og `conn2`

 ### Listaðu skrár
 Úttak listaskipunar er röð af JSON hlutum, einn í hverri línu, sem táknar skrárnar
 Fundið. Þessir hlutir munu hafa `name` og `type` gerð' og hugsanlega aðra reiti.

    mo ls conn1/some/path

 Listaðu skrár endurkvæmt:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Athugasemd um dulkóðaða geymslu**: Endurtekin skráning er ekki enn studd fyrir dulkóðaðar tengingar.
 Þú getur aðeins skráð eina möppu af skrám í einu.

 Listaðu skrár orðrétt (fagurprentað JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Listaðu skrár endurkvæmt og orðrétt:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Skoða hjálp fyrir `ls` skipun, lýsir öllum valkostum:

    mo ls -h
    mo ls --help

 ### Skrifaðu skrá í stdout
 `cat` skipunin mun prenta skrá í stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Í sönnum UNIX anda *(en samt ekki æfingin!)* `cat` skipun mobiletto **tekur enga valkosti**
 annað en `-h` / `--help` til að birta gagnlegar upplýsingar.

 ### Afritaðu skrár
 Afritaðu eina skrá frá einum farsíma til annars:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Afritaðu eina skrá frá einum farsíma til annars og endurnefna hana á áfangastað:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Afritaðu afturvirkt möppu:

    mo cp -r conn1/some/directory conn2/some/dest/

 Skoða hjálp fyrir `cp` skipun, lýsir öllum valkostum:

    mo cp -h
    mo cp --help

 Athugið: Skráaafritun er ekki mjög hröð, vegna þess að það þarf bráðabirgðaskrá.

 ### Eyða skrám
 Eyða einni skrá:

    mo rm conn1/some/file.txt

 Eyddu einni skrá og kvartaðu ekki yfir neinum villum:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Eyða möppu:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Eyddu möppu og kvartaðu ekki yfir villum:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Skoða lýsigögn
 Oft er gagnlegt að þekkja lýsigögn fyrir skrá, án þess að hlaða niður allri skránni.

 Mobiletto er fær um að tilkynna skráarstærð og síðast breytta tíma, auk nafns og tegundar.

 Til að skoða lýsigögn:

    mo meta conn1/some/file.txt

 ### Speglaskrár
 Speglun er meira en sérstakt tilfelli af `cp` , það er sérstök mobiletto skipun sem umlykur
 afritunaraðgerð; það heldur áfram jafnvel þegar villur eiga sér stað og fylgist með fjölda árangurs og villna.

 Til að spegla allt frá conn1 í conn2:

    mo mirror conn1 conn2

 Til að spegla undirskrá:

    mo mirror conn1/some/subdir conn2

 Til að spegla undirmöppu í aðra undirmöppu:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
