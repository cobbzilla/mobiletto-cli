mobiletto-cli
 ==============
 Una interfaccia di linea di cummanda (CLI) per [mobiletto](https://www.npmjs.com/package/mobiletto)
 almacenamiento.

 Mobiletto supporta e cunnessione à Amazon S3, Backblaze B2, è sistemi di fugliale lucali.

 # Leghjite questu in un'altra lingua
 Stu documentu README.md hè statu traduttu, via [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[tutte lingue supportate da Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sò sicuru chì ùn hè micca perfettu, ma spergu chì hè megliu cà nunda !

 [🇸🇦 Arabu](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tedesco](../de/README.md)
 [🇺🇸 Inglese](../en/README.md)
 [🇪🇸 Spagnolo](../es/README.md)
 [🇫🇷 Francese](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Giapponese](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polacco](../pl/README.md)
 [🇧🇷 Portoghese](../pt/README.md)
 [🇷🇺 Russu](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcu](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Cinese](../zh/README.md)


 **[📚 ... Tutte e lingue ...](../README.md)**
 ----

 ### Ci hè un prublema cù sta traduzzione di u README ?
 Questa traduzzione particulare di u [README] originale (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 pò esse difettu - * e currezzione sò assai benvenute! * Per piacè mandate una [pull request on GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 o se ùn site micca còmode di fà quessa, [apre un prublema](https://github.com/cobbzilla/mobiletto-cli/issues)

 Quandu create un novu prublema GitHub nantu à una traduzzione, fate:
 * include l'URL di a pagina (copia / incollà da a barra di indirizzu di u navigatore)
 * include u testu esatta chì hè sbagliatu (copia / incollà da u navigatore)
 * per piacè descrivi ciò chì hè sbagliatu -- a traduzzione hè sbagliata? a formattazione hè rotta in qualchì modu?
 * Per piacè offre un suggerimentu di una traduzzione megliu, o cumu u testu deve esse furmatu bè
 * **Grazie!**

 # Cuntinutu
 * [Source](#Source)
 * [Supportu è Finanziamentu](#Supportu-è-Fundamentu)
 * [Installazione è usu](#Installazione è usu)
 * [npm package](#npm-package)
 * [Da a fonte](#Da a fonte)
 * [Connessioni](#Connessioni)
 * [Crea una cunnessione](#Create-a-connection)
 * [Lista di cunnessione](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Eliminate una cunnessione](#Remove-a-connection)
 * [Eliminate tutte e cunnessione](#Eliminate tutte e cunnessione)
 * [U travagliu cù u almacenamentu](#Working-with-storage)
 * [File di lista](#List-files)
 * [Scrivi un schedariu à stdout](#Write-a-file-to-stdout)
 * [Copia i fugliali](#Copia i schedari)
 * [Elimina i schedari](#Delete-files)
 * [Vede i metadati](#Vedi-metadata)
 * [Cartulari specchiu](#Cartolari specchiu)

 ### Fonte
 * [mobiletto-cli su GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Supportu è Finanziamentu
 Aghju pruvatu à esse un sviluppatore prufessiunale di software open source. Aghju travagliatu in
 l'industria di u software per parechji anni, aghju principiatu cumpagnie di successu è li vende à cumpagnie publica.
 Recentemente aghju persu u mo travagliu, è ùn aghju micca veramente un altru travagliu in linea

 Dunque, aghju da pruvà à scrive un software utile è vede s'ellu funziona

 Se ti piace à utilizà stu software, saraghju sinceramente grati ancu per u
 più chjucu [cuntribuzione mensuale via Patreon](https://www.patreon.com/cobbzilla)

 *Grazie!*

 ## Installazione è usu
 Pudete installà è eseguisce `mobiletto-cli` via npm o direttamente da a fonte.

 ### pacchettu npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Da a fonte
 Per eseguisce da a fonte, avete bisognu di nodejs v16+ è filatu

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Cunnessioni
 Tutti l'almacenamiento di mobiletto hè accessu per una cunnessione.

 Mobiletto supporta attualmente e cunnessione à l'almacenamiento di u sistema di fugliale locale è i bucket Amazon S3.

 E cunnessione sò specificate da un oggettu JSON chì pare cusì:

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

 Per tutti i dettagli nantu à tutte l'opzioni è i so valori è significati, vede u
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Crea una cunnessione
 Per creà una nova cunnessione, avemu bisognu di unu di questi oggetti JSON.

 Pudemu creà unu in modu interattivu, o furnisce unu via un schedariu o JSON literal:

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

 ### Lista di cunnessione
 Lista di cunnessione dispunibili:

    mo connect -l
    mo connect --list

 ### Dump connection JSON config
 Mostra a cunfigurazione JSON completa per una cunnessione. ** ATTENZIONE ** questu stamperà chjavi è secreti à stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Eliminate una cunnessione
 Eliminate una sola cunnessione:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Elimina tutte e cunnessione
 Eliminate TUTTE i cunnessione:

    mo connect -R
    mo connect --remove-all

 ## U travagliu cù u almacenamentu
 Una volta chì avete creatu alcune cunnessione, utilizate l' `ls` , `cp` , `rm` , `meta` è `mirror`
 per travaglià cun elli.

 Ogni percorsu di u schedariu chì furnite à un cumandamentu deve esse prefissatu cù u nome di a cunnessione
 si riferisce à. In l'esempii sottu, assumemu chì esistenu duie cunnessione `conn1` è `conn2`

 ### Lista di i schedari
 L'output di un cumandamentu di lista hè una serie di oggetti JSON, unu per linea, chì rapprisentanu i schedari
 trovu. Questi ogetti anu un `name` è `type` , è possibbilmente altri campi.

    mo ls conn1/some/path

 Lista i fugliali ricursivamente:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota di almacenamiento criptata**: A lista recursiva ùn hè ancu supportata per e cunnessione criptate.
 Pudete solu listinu un cartulare di schedari à u tempu.

 Elencu i fugliali verbosely (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lista i fugliali ricursivamente è verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Vede l'aiutu per u cumandamentu `ls` , descrive tutte l'opzioni:

    mo ls -h
    mo ls --help

 ### Scrivite un schedariu à stdout
 U cumandimu `cat` un schedariu à stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 In u veru spiritu UNIX *(ma certamente micca a pratica!)* u cumandimu `cat` di mobiletto **ùn piglia micca opzioni**
 altru ch'è `-h` / `--help` per vede infurmazioni utili.

 ### Copia i schedari
 Copia un schedariu unicu da un mobiletto à l'altru:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copia un schedariu unicu da un mobiletto à l'altru, rinuminendulu à a destinazione:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copià ricursivamente un repertoriu:

    mo cp -r conn1/some/directory conn2/some/dest/

 Vede l'aiutu per u cumandimu `cp` , descrive tutte l'opzioni:

    mo cp -h
    mo cp --help

 Nota: A copia di u schedariu ùn hè micca assai veloce, perchè attualmente richiede un schedariu temp intermediariu.

 ### Sguassà i schedari
 Sguassà un unicu schedariu:

    mo rm conn1/some/file.txt

 Sguassate un unicu schedariu è ùn lagnate micca di alcunu errore:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Sguassà un annuariu:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Sguassate un repertoriu è ùn lagnate micca di l'errore:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Vede i metadati
 Hè spessu utile per cunnosce i metadati per un schedariu, senza scaricà tuttu u schedariu.

 Mobiletto hè capaci di riportà a dimensione di u schedariu è l'ultima ora mudificata, in più di u nome è u tipu.

 Per vede i metadati:

    mo meta conn1/some/file.txt

 ### Mirror directory
 Mirroring hè più cà un casu speciale di `cp` , hè un cumandamentu mobiletto separatu chì impacchetta u
 operazione di copia; cuntinueghja ancu quandu l'errori accadenu, è seguite un numeru di successi è errori.

 Per riflette tuttu da conn1 à conn2:

    mo mirror conn1 conn2

 Per speculare un subdirectory:

    mo mirror conn1/some/subdir conn2

 Per speculare un subdirectory in un altru subdirectory:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
