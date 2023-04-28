mobiletto-cli
 ==============
 Komandrindas saskarne (CLI) vietnei [mobiletto](https://www.npmjs.com/package/mobiletto)
 uzglabāšana.

 Mobiletto atbalsta savienojumus ar Amazon S3, Backblaze B2 un vietējām failu sistēmām.

 # Lasiet to citā valodā
 Šis README.md dokuments ir tulkots, izmantojot [hokeylization](https://github.com/cobbzilla/hokeylization)
 **[Visas valodas, ko atbalsta Google tulkotājs](https://cloud.google.com/translate/docs/languages)!**

 Esmu pārliecināts, ka tas nav ideāls, bet es ceru, ka tas ir labāk nekā nekas!

 [🇸🇦 arābu](../ar/README.md)
 [🇧🇩 bengāļu](../bn/README.md)
 [🇩🇪 vācu valodā](../de/README.md)
 [🇺🇸 angļu valodā](../en/README.md)
 [🇪🇸 spāņu](../es/README.md)
 [🇫🇷 franču valoda](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonēziešu](../id/README.md)
 [🇮🇹 itāļu valoda](../it/README.md)
 [🇯🇵 japāņu](../ja/README.md)
 [🇰🇷 korejiešu](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poļu](../pl/README.md)
 [🇧🇷 portugāļu](../pt/README.md)
 [🇷🇺 krievu valodā](../ru/README.md)
 [🇰🇪 Svahili](../sw/README.md)
 [🇵🇭 Tagalogs](../tl/README.md)
 [🇹🇷 turku](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vjetnamiešu](../vi/README.md)
 [🇨🇳 ķīniešu](../zh/README.md)


 **[📚 ... Visas valodas ...](../README.md)**
 ----

 ### Vai ir problēma ar šo README tulkojumu?
 Šis konkrētais oriģināla [README] tulkojums (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 var būt kļūdains — *labojumi ir ļoti apsveicami!* Lūdzu, nosūtiet [izvilkšanas pieprasījumu vietnē GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 vai, ja nevēlaties to darīt, [atveriet problēmu](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kad veidojat jaunu GitHub problēmu par tulkojumu, lūdzu, rīkojieties šādi:
 * iekļaujiet lapas URL (kopējiet/ielīmējiet no pārlūkprogrammas adreses joslas)
 * iekļaujiet precīzu nepareizo tekstu (kopējiet/ielīmējiet no pārlūkprogrammas)
 * Lūdzu, aprakstiet, kas ir nepareizi — vai tulkojums ir nepareizs? vai formatējums ir kaut kā bojāts?
 * laipni piedāvājiet ieteikumu par labāku tulkojumu vai kā pareizi formatēt tekstu
 * **Paldies!**

 # Saturs
 * [Avots](#Avots)
 * [Atbalsts un finansējums](#Support-and-Funding)
 * [Instalēšana un lietošana](#Installation-and-usage)
 * [npm pakotne](#npm-package)
 * [No avota](#No avota)
 * [Savienojumi](#Savienojumi)
 * [Izveidot savienojumu](#Create-a-connection)
 * [Sarakstu savienojumi](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Noņemt savienojumu](#Remove-a-connection)
 * [Noņemt visus savienojumus](#Remove-all-connections)
 * [Darbs ar krātuvi](#Working-with-storage)
 * [Saraksta faili](#List-files)
 * [Rakstīt failu standartam](#Write-a-file-to-stdout)
 * [Kopēt failus](#Copy-files)
 * [Dzēst failus](#Delete-files)
 * [Skatīt metadatus](#View-metadata)
 * [Spoguļot direktorijus](#Mirror-directories)

 ### Avots
 * [mobiletto-cli vietnē GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Atbalsts un finansējums
 Es cenšos būt profesionāls atvērtā pirmkoda programmatūras izstrādātājs. Esmu strādājis
 programmatūras industrijā jau daudzus gadus esmu dibinājis veiksmīgus uzņēmumus un pārdevis tos valsts uzņēmumiem.
 Nesen es zaudēju darbu, un man īsti nav citu darbu

 Tāpēc es mēģināšu uzrakstīt noderīgu programmatūru un pārbaudīt, vai tā darbojas

 Ja jums patīk izmantot šo programmatūru, es būtu patiesi pateicīgs pat par
 mazākais [ikmēneša ieguldījums, izmantojot Patreon](https://www.patreon.com/cobbzilla)

 *Paldies!*

 ## Uzstādīšana un lietošana
 Varat instalēt un palaist `mobiletto-cli` izmantojot npm vai tieši no avota.

 ### npm pakotne
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### No avota
 Lai palaistu no avota, jums būs nepieciešams nodejs v16+ un dzija

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Savienojumi
 Visai Mobiletto krātuvei var piekļūt, izmantojot savienojumu.

 Mobiletto pašlaik atbalsta savienojumus ar vietējo failu sistēmas krātuvi un Amazon S3 spaiņiem.

 Savienojumus nosaka JSON objekts, kas izskatās šādi:

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

 Lai iegūtu pilnu informāciju par visām opcijām un to vērtībām un nozīmi, skatiet
 [mobiletto dokumenti](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Izveidojiet savienojumu
 Lai izveidotu jaunu savienojumu, mums ir nepieciešams viens no šiem JSON objektiem.

 Mēs varam to izveidot interaktīvi vai piegādāt, izmantojot failu vai JSON burtu:

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

 ### Savienojumu saraksts
 Pieejamo savienojumu saraksts:

    mo connect -l
    mo connect --list

 ### Dump savienojuma JSON konfigurācija
 Rādīt visu savienojuma JSON konfigurāciju. **BRĪDINĀJUMS** tiks izdrukātas standarta atslēgas un noslēpumi.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Noņemiet savienojumu
 Noņemiet vienu savienojumu:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Noņemiet visus savienojumus
 Noņemiet VISUS savienojumus:

    mo connect -R
    mo connect --remove-all

 ## Darbs ar krātuvi
 Kad esat izveidojis dažus savienojumus, izmantojiet darbības `ls` ", `cp` ", `rm` , `meta` un `mirror` spogulis".
 strādāt ar viņiem.

 Katram faila ceļam, ko norādāt komandai, ir jāpievieno savienojuma nosaukums
 tas attiecas uz. Tālāk sniegtajos piemēros mēs pieņemam, ka pastāv divi savienojumi ar nosaukumu `conn1` " un `conn2`

 ### Failu saraksts
 Saraksta komandas izvade ir JSON objektu sērija, pa vienam katrā rindā, kas attēlo failus
 atrasts. Šiem objektiem būs `name` un `type` un, iespējams, arī citi lauki.

    mo ls conn1/some/path

 Failu saraksts rekursīvi:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Piezīme par šifrētu krātuvi**: rekursīvais saraksts vēl netiek atbalstīts šifrētiem savienojumiem.
 Vienlaikus varat uzskaitīt tikai vienu failu direktoriju.

 Detalizēti uzskaitiet failus (diezgan izdrukāts JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Sarakstiet failus rekursīvi un izteikti:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Skatīt komandas `ls` palīdzību, apraksta visas opcijas:

    mo ls -h
    mo ls --help

 ### Ierakstiet failu stdout
 Komanda `cat` izdrukās failu stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Īstā UNIX garā * (tomēr noteikti ne praksē!)* mobiletto komanda `cat` **neizmanto nekādas opcijas**
 izņemot `-h` / `--help` , lai parādītu noderīgu informāciju.

 ### Kopējiet failus
 Kopējiet vienu failu no viena mobilā tālruņa uz citu:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopējiet vienu failu no viena mobilā tālruņa uz citu, pārdēvējot to galamērķī:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekursīvi kopējiet direktoriju:

    mo cp -r conn1/some/directory conn2/some/dest/

 Skatīt komandas `cp` palīdzību, kurā ir aprakstītas visas opcijas:

    mo cp -h
    mo cp --help

 Piezīme: Failu kopēšana nav ļoti ātra, jo pašlaik ir nepieciešams pagaidu pagaidu fails.

 ### Dzēst failus
 Dzēst vienu failu:

    mo rm conn1/some/file.txt

 Izdzēsiet vienu failu un nesūdzieties par kļūdām:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Dzēst direktoriju:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Izdzēsiet direktoriju un nesūdzieties par kļūdām:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Skatīt metadatus
 Bieži vien ir noderīgi zināt faila metadatus, nelejupielādējot visu failu.

 Mobiletto var ziņot par faila lielumu un pēdējo modificēšanas laiku, papildus nosaukumam un veidam.

 Lai skatītu metadatus:

    mo meta conn1/some/file.txt

 ### Spoguļattēlu katalogi
 Spoguļošana ir kas vairāk nekā īpašs cp gadījums, tā ir atsevišķa `cp` komanda, kas iesaiņo
 kopēšanas darbība; tas turpinās pat tad, ja rodas kļūdas, un izseko panākumu un kļūdu skaitu.

 Lai atspoguļotu visu no conn1 uz conn2:

    mo mirror conn1 conn2

 Lai atspoguļotu apakšdirektoriju:

    mo mirror conn1/some/subdir conn2

 Lai atspoguļotu apakšdirektoriju citā apakšdirektorijā:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
