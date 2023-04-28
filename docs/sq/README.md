mobiletto-cli
 ==============
 Një ndërfaqe e linjës së komandës (CLI) për [mobiletto](https://www.npmjs.com/package/mobiletto)
 magazinimit.

 Mobiletto mbështet lidhjet me Amazon S3, Backblaze B2 dhe sistemet e skedarëve lokalë.

 # Lexojeni këtë në një gjuhë tjetër
 Ky dokument README.md është përkthyer, nëpërmjet [hokeylization](https://github.com/cobbzilla/hokeylization), në
 **[çdo gjuhë e mbështetur nga Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jam i sigurt se nuk është perfekt, por shpresoj të jetë më mirë se asgjë!

 [🇸🇦 Arabisht](../ar/README.md)
 [🇧🇩 Bengalisht](../bn/README.md)
 [🇩🇪 gjermanisht](../de/README.md)
 [🇺🇸 Anglisht](../en/README.md)
 [🇪🇸 spanjisht](../es/README.md)
 [🇫🇷 Frengjisht](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonezisht](../id/README.md)
 [🇮🇹 Italisht](../it/README.md)
 [🇯🇵 Japonisht](../ja/README.md)
 [🇰🇷 Koreane](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonisht](../pl/README.md)
 [🇧🇷 Portugeze](../pt/README.md)
 [🇷🇺 Rusisht](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turqisht](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamisht](../vi/README.md)
 [🇨🇳 Kinezisht](../zh/README.md)


 **[📚 ... Të gjitha gjuhët ...](../README.md)**
 ----

 ### A ka ndonjë problem me këtë përkthim të README?
 Ky përkthim i veçantë i origjinalit [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 mund të jetë me të meta -- *korrigjimet janë shumë të mirëseardhura!* Ju lutemi dërgoni një [kërkesë për tërheqje në GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ose nëse nuk jeni të kënaqur ta bëni këtë, [hapni një çështje](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kur krijoni një problem të ri të GitHub në lidhje me një përkthim, ju lutemi bëni:
 * përfshini URL-në e faqes (kopjoni/ngjisni nga shiriti i adresave të shfletuesit)
 * përfshini tekstin e saktë që është i gabuar (kopjoni/ngjisni nga shfletuesi)
 * ju lutemi përshkruani se çfarë nuk shkon -- a është përkthimi i gabuar? a është thyer disi formatimi?
 * me mirësi ofroni një sugjerim për një përkthim më të mirë, ose se si teksti duhet të formatohet siç duhet
 * **Faleminderit!**

 # Përmbajtje
 * [Burimi](#Burimi)
 * [Mbështetje dhe financim](#Support-and-Funding)
 * [Instalimi dhe përdorimi](#Instalimi-dhe-përdorimi)
 * [paketë npm](#npm-paketë)
 * [Nga burimi](#Nga burimi)
 * [Lidhjet](#Connections)
 * [Krijo një lidhje](#Create-a-connection)
 * [Lista e lidhjeve](#Lista-lidhjet)
 * [Dump Connection JSON config](#Dump-connection-JSON-config)
 * [Hiq një lidhje](#Remove-a-connection)
 * [Hiq të gjitha lidhjet](#Remove-all-connections)
 * [Puna me hapësirën ruajtëse](#Working-with-storage)
 * [Lista e skedarëve](#Lista-skedarët)
 * [Shkruani një skedar në stdout](#Write-a-file-to-stdout)
 * [Kopjo skedarë](#Copy-files)
 * [Fshi skedarët](#Fshi skedarët)
 * [Shiko metadatat](#View-metadata)
 * [Direktoritë e pasqyrave](#Mirror-directories)

 ### Burimi
 * [mobiletto-cli në GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli në npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Mbështetje dhe financim
 Po përpiqem të jem një zhvillues profesionist i softuerit me burim të hapur. Unë kam punuar në
 në industrinë e softuerit për shumë vite, kam krijuar kompani të suksesshme dhe ua kam shitur kompanive publike.
 Kohët e fundit kam humbur punën time dhe nuk kam asnjë punë tjetër të rreshtuar

 Kështu që unë do të përpiqem të shkruaj softuer të dobishëm dhe të shikoj nëse funksionon

 Nëse ju pëlqen të përdorni këtë softuer, do t'ju isha sinqerisht mirënjohës edhe për këtë
 më i vogël [kontributi mujor nëpërmjet Patreon](https://www.patreon.com/cobbzilla)

 *Faleminderit!*

 ## Instalimi dhe përdorimi
 Mund të instaloni dhe ekzekutoni `mobiletto-cli` nëpërmjet npm ose direkt nga burimi.

 ### paketë npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Nga burimi
 Për të ekzekutuar nga burimi, do t'ju duhet nodejs v16+ dhe fije

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Lidhje
 E gjithë ruajtja e celularit arrihet përmes një lidhjeje.

 Mobiletto aktualisht mbështet lidhjet me ruajtjen lokale të sistemit të skedarëve dhe kovat Amazon S3.

 Lidhjet janë specifikuar nga një objekt JSON që duket si ky:

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

 Për detaje të plota mbi të gjitha opsionet, vlerat dhe kuptimet e tyre, shihni
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Krijo një lidhje
 Për të krijuar një lidhje të re, na duhet një nga këto objekte JSON.

 Ne mund të krijojmë një në mënyrë interaktive, ose ta ofrojmë një përmes një skedari ose JSON fjalë për fjalë:

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

 ### Listoni lidhjet
 Lista e lidhjeve të disponueshme:

    mo connect -l
    mo connect --list

 ### Hidh konfigurimin e lidhjes JSON
 Shfaq konfigurimin e plotë JSON për një lidhje. **PARALAJMËRIM** kjo do të printojë çelësat dhe sekretet për stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Hiq një lidhje
 Hiqni një lidhje të vetme:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Hiq të gjitha lidhjet
 Hiq të gjitha lidhjet:

    mo connect -R
    mo connect --remove-all

 ## Duke punuar me ruajtjen
 Pasi të keni krijuar disa lidhje, përdorni `ls` , `cp` , `rm` , `meta` dhe `mirror`
 për të punuar me ta.

 Çdo shteg skedari që i jepni një komande duhet të prefiksohet me emrin e lidhjes
 i referohet. Në shembujt e mëposhtëm, supozojmë se ekzistojnë dy lidhje të quajtura `conn1` ' dhe `conn2`

 ### Listoni skedarët
 Dalja e një komande liste është një seri objektesh JSON, një për rresht, që përfaqëson skedarët
 gjetur. Këto objekte do të kenë një `name` ' dhe `type` , dhe mundësisht fusha të tjera.

    mo ls conn1/some/path

 Listoni skedarët në mënyrë rekursive:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Shënim i ruajtjes së koduar**: Lista rekursive nuk mbështetet ende për lidhjet e koduara.
 Ju mund të listoni vetëm një dosje skedarësh në të njëjtën kohë.

 Listoni skedarët me fjalë (JSON me printim të bukur):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Listoni skedarët në mënyrë rekursive dhe me fjalë:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Shiko ndihmën për komandën `ls` , përshkruan të gjitha opsionet:

    mo ls -h
    mo ls --help

 ### Shkruani një skedar për të stdout
 `cat` do të printojë një skedar në stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Në frymën e vërtetë UNIX *(por sigurisht jo praktikë!)* komanda `cat` **nuk merr opsione**
 përveç `-h` / `--help` për të shfaqur informacione të dobishme.

 ### Kopjoni skedarët
 Kopjoni një skedar të vetëm nga një celular në tjetrin:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopjoni një skedar të vetëm nga një celular në tjetrin, duke e riemërtuar në destinacion:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopjoni në mënyrë rekursive një direktori:

    mo cp -r conn1/some/directory conn2/some/dest/

 Shiko ndihmën për komandën `cp` , përshkruan të gjitha opsionet:

    mo cp -h
    mo cp --help

 Shënim: Kopjimi i skedarit nuk është shumë i shpejtë, sepse aktualisht kërkon një skedar temp ndërmjetës.

 ### Fshi skedarët
 Fshini një skedar të vetëm:

    mo rm conn1/some/file.txt

 Fshini një skedar të vetëm dhe mos u ankoni për ndonjë gabim:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Fshi një drejtori:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Fshini një drejtori dhe mos u ankoni për ndonjë gabim:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Shiko të dhënat meta
 Shpesh është e dobishme të njihni meta të dhënat për një skedar, pa e shkarkuar të gjithë skedarin.

 Mobiletto është në gjendje të raportojë madhësinë e skedarit dhe kohën e fundit të modifikuar, përveç emrit dhe llojit.

 Për të parë të dhënat meta:

    mo meta conn1/some/file.txt

 ### Drejtoritë pasqyruese
 Pasqyrimi është më shumë se një rast i veçantë i `cp` , është një komandë e veçantë celulare që mbështjell
 funksionimi i kopjimit; ai vazhdon edhe kur ndodhin gabime, dhe gjurmoni një numër suksesesh dhe gabimesh.

 Për të pasqyruar gjithçka nga conn1 në conn2:

    mo mirror conn1 conn2

 Për të pasqyruar një nëndrejtori:

    mo mirror conn1/some/subdir conn2

 Për të pasqyruar një nëndrejtori në një nëndrejtori tjetër:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
