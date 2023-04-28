mobiletto-cli
 ==============
 Komandinės eilutės sąsaja (CLI), skirta [mobiletto](https://www.npmjs.com/package/mobiletto)
 saugykla.

 Mobiletto palaiko ryšius su Amazon S3, Backblaze B2 ir vietinėmis failų sistemomis.

 # Skaitykite tai kita kalba
 Šis README.md dokumentas per [hokeylization](https://github.com/cobbzilla/hokeylization) buvo išverstas į
 **[Visos kalbos palaikomos „Google“ vertėjo](https://cloud.google.com/translate/docs/languages)!**

 Esu tikras, kad tai nėra tobula, bet tikiuosi, kad tai geriau nei nieko!

 [🇸🇦 arabų kalba](../ar/README.md)
 [🇧🇩 Bengalų kalba](../bn/README.md)
 [🇩🇪 Vokiečių kalba](../de/README.md)
 [🇺🇸 Anglų kalba](../en/README.md)
 [🇪🇸 ispanų kalba](../es/README.md)
 [🇫🇷 prancūzų kalba](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziečių](../id/README.md)
 [🇮🇹 italų kalba](../it/README.md)
 [🇯🇵 japonų kalba](../ja/README.md)
 [🇰🇷 korėjiečių](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 lenkų kalba](../pl/README.md)
 [🇧🇷 portugalų](../pt/README.md)
 [🇷🇺 rusų kalba](../ru/README.md)
 [🇰🇪 Svahilių kalba](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkų](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnamiečių](../vi/README.md)
 [🇨🇳 kinų](../zh/README.md)


 **[📚 ... Visos kalbos ...](../README.md)**
 ----

 ### Ar yra problemų dėl šio README vertimo?
 Šis konkretus originalo [README] vertimas (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 gali būti su trūkumais – *labai laukiami pataisymai!* Nusiųskite [ištraukimo užklausą „GitHub“](https://github.com/cobbzilla/mobiletto-cli/pulls),
 arba jei nenorite to daryti, [atidarykite problemą](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kai kuriate naują „GitHub“ problemą apie vertimą, atlikite toliau nurodytus veiksmus.
 * įtraukite puslapio URL (nukopijuokite / įklijuokite iš naršyklės adreso juostos)
 * įtraukite tikslų tekstą, kuris neteisingas (nukopijuokite / įklijuokite iš naršyklės)
 * aprašykite, kas negerai – ar vertimas neteisingas? ar formatavimas kažkaip sugedęs?
 * maloniai pasiūlykite geresnio vertimo pasiūlymą arba kaip tinkamai suformatuoti tekstą
 * **Ačiū!**

 # Turinys
 * [Šaltinis](#Šaltinis)
 * [Parama ir finansavimas](#Support-and-Funding)
 * [Įdiegimas ir naudojimas](#Installation-and-usage)
 * [npm paketas](#npm-package)
 * [Iš šaltinio](#Iš šaltinio)
 * [Ryšiai](#Connections)
 * [Sukurti ryšį](#Create-a-connection)
 * [Sąrašas jungtys](#List-connections)
 * [Išvesti ryšio JSON konfigūraciją](#Dump-connection-JSON-config)
 * [Pašalinti ryšį](#Remove-a-connection)
 * [Pašalinti visus ryšius](#Pašalinti visus ryšius)
 * [Darbas su saugykla](#Working-with-storage)
 * [Sąrašo failai](#List-files)
 * [Rašykite failą į stdout](#Write-a-file-to-stdout)
 * [Kopijuoti failus](#Copy-files)
 * [Ištrinti failus](#Delete-files)
 * [Peržiūrėti metaduomenis](#View-metadata)
 * [Mirror directories](#Mirror-directories)

 ### Šaltinis
 * [mobiletto-cli „GitHub“](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Parama ir finansavimas
 Stengiuosi būti profesionali atvirojo kodo programinės įrangos kūrėja. Esu dirbęs
 programinės įrangos pramonėje daugelį metų įkūriau sėkmingas įmones ir pardaviau jas valstybinėms įmonėms.
 Neseniai netekau darbo, o kitų darbų tikrai neturiu

 Taigi aš pabandysiu parašyti naudingą programinę įrangą ir pažiūrėti, ar ji veikia

 Jei jums patinka naudotis šia programine įranga, būčiau nuoširdžiai dėkingas net už
 mažiausias [mėnesinis įnašas per Patreon](https://www.patreon.com/cobbzilla)

 *Ačiū!*

 ## Diegimas ir naudojimas
 Galite įdiegti ir paleisti `mobiletto-cli` naudodami npm arba tiesiai iš šaltinio.

 ### npm paketą
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Iš šaltinio
 Jei norite paleisti iš šaltinio, jums reikės nodejs v16+ ir verpalų

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Ryšiai
 Visa „mobiletto“ saugykla pasiekiama per ryšį.

 Šiuo metu Mobiletto palaiko ryšius su vietine failų sistemos saugykla ir Amazon S3 kibirais.

 Ryšiai nurodomi JSON objektu, kuris atrodo taip:

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

 Išsamios informacijos apie visas parinktis ir jų vertes bei reikšmes žr
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Sukurkite ryšį
 Norėdami sukurti naują ryšį, mums reikia vieno iš šių JSON objektų.

 Galime jį sukurti interaktyviai arba pateikti naudodami failą arba JSON literalą:

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

 ### Išvardykite ryšius
 Galimų jungčių sąrašas:

    mo connect -l
    mo connect --list

 ### Iškelti ryšio JSON konfig
 Rodyti visą ryšio JSON konfigūraciją. **ĮSPĖJIMAS** bus išspausdinti stdout raktai ir paslaptys.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Pašalinkite ryšį
 Pašalinkite vieną jungtį:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Pašalinkite visas jungtis
 Pašalinkite VISAS jungtis:

    mo connect -R
    mo connect --remove-all

 ## Darbas su saugykla
 Sukūrę tam tikrus ryšius, naudokite operacijas `ls` ", `cp` ", `rm` , `meta` ir `mirror` .
 dirbti su jais.

 Kiekvienas failo kelias, kurį pateikiate komandai, turi būti su ryšio pavadinimu
 tai nurodo. Toliau pateiktuose pavyzdžiuose darome prielaidą, kad egzistuoja du ryšiai, pavadinti `conn1` “ ir `conn2`

 ### Failų sąrašas
 Sąrašo komandos išvestis yra JSON objektų serija, viena eilutėje, vaizduojanti failus
 rasta. Šie objektai turės `name` ir `type` tipą" ir galbūt kitus laukus.

    mo ls conn1/some/path

 Failų sąrašas rekursyviai:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Šifruotos saugyklos pastaba**: rekursyvus sąrašas dar nepalaikomas šifruotuose ryšiuose.
 Vienu metu galite išvardyti tik vieną failų katalogą.

 Išvardykite failus žodiškai (gražiai atspausdintas JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Išvardykite failus rekursyviai ir žodiškai:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Peržiūrėkite komandos `ls` , aprašo visas parinktis:

    mo ls -h
    mo ls --help

 ### Parašykite failą į stdout
 Komanda `cat` “ išspausdins failą į stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Tikra UNIX dvasia *(bet tikrai ne praktika!)* mobiletto komanda `cat` **neatima jokių parinkčių**
 išskyrus `-h` / `--help` , kad būtų rodoma naudinga informacija.

 ### Kopijuoti failus
 Nukopijuokite vieną failą iš vieno mobiliojo telefono į kitą:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Nukopijuokite vieną failą iš vieno mobiliojo telefono į kitą, pervardydami jį paskirties vietoje:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekursyviai nukopijuokite katalogą:

    mo cp -r conn1/some/directory conn2/some/dest/

 Peržiūrėkite komandos `cp` , aprašomos visos parinktys:

    mo cp -h
    mo cp --help

 Pastaba: Failų kopijavimas nėra labai greitas, nes šiuo metu tam reikia tarpinio laikinojo failo.

 ### Ištrinkite failus
 Ištrinti vieną failą:

    mo rm conn1/some/file.txt

 Ištrinkite vieną failą ir nesiskųskite jokiomis klaidomis:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Ištrinkite katalogą:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Ištrinkite katalogą ir nesiskųskite jokiomis klaidomis:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Peržiūrėkite metaduomenis
 Dažnai naudinga žinoti failo metaduomenis neatsisiunčiant viso failo.

 Mobiletto gali pranešti apie failo dydį ir paskutinio modifikavimo laiką, be pavadinimo ir tipo.

 Norėdami peržiūrėti metaduomenis:

    mo meta conn1/some/file.txt

 ### Veidrodiniai katalogai
 Veidrodis yra daugiau nei specialus `cp` , tai yra atskira mobiletto komanda, kuri apvynioja
 kopijavimo operacija; jis tęsiasi net tada, kai įvyksta klaidų, ir stebi sėkmių ir klaidų skaičių.

 Norėdami atspindėti viską nuo conn1 iki conn2:

    mo mirror conn1 conn2

 Norėdami atspindėti pakatalogį:

    mo mirror conn1/some/subdir conn2

 Norėdami atspindėti pakatalogį į kitą pakatalogį:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
