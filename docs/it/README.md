mobiletto-cli
 ==============
 Un'interfaccia a riga di comando (CLI) per [mobiletto](https://www.npmjs.com/package/mobiletto)
 Conservazione.

 Mobiletto supporta connessioni ad Amazon S3, Backblaze B2 e filesystem locali.

 # Leggi questo in un'altra lingua
 Questo documento README.md è stato tradotto, tramite [hokeylization](https://github.com/cobbzilla/hokeylization), in
 **[ogni lingua supportata da Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sono certa che non sia perfetto, ma spero sia meglio di niente!

 [🇸🇦 Arabo](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tedesco](../de/README.md)
 [🇺🇸 Inglese](../en/README.md)
 [🇪🇸 Spagnolo](../es/README.md)
 [🇫🇷 Francese](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesiano](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Giapponese](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polacco](../pl/README.md)
 [🇧🇷 Portoghese](../pt/README.md)
 [🇷🇺 Russo](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Cinese](../zh/README.md)


 **[📚 ... Tutte le lingue ...](../README.md)**
 ----

 ### C'è un problema con questa traduzione del README?
 Questa particolare traduzione dell'originale [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 potrebbe essere difettoso -- *le correzioni sono molto gradite!* Si prega di inviare una [richiesta pull su GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 o se non ti senti a tuo agio nel farlo, [apri un problema](https://github.com/cobbzilla/mobiletto-cli/issues)

 Quando crei un nuovo problema GitHub su una traduzione, esegui:
 * includi l'URL della pagina (copia/incolla dalla barra degli indirizzi del browser)
 * includi il testo esatto che è sbagliato (copia/incolla dal browser)
 * per favore descrivi cosa c'è che non va -- la traduzione è errata? la formattazione è rotta in qualche modo?
 * offrire gentilmente un suggerimento per una traduzione migliore o come formattare correttamente il testo
 * **Grazie!**

 # Contenuti
 * [Fonte](#Fonte)
 * [Supporto e finanziamento](#Supporto e finanziamento)
 * [Installazione e utilizzo](#Installazione e utilizzo)
 * [pacchetto npm](pacchetto #npm)
 * [Da fonte](#Da-fonte)
 * [Connessioni](#Connessioni)
 * [Crea una connessione](#Crea-una-connessione)
 * [Elenco connessioni](#Elenco-connessioni)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Rimuovi una connessione](#Rimuovi-una-connessione)
 * [Rimuovi tutte le connessioni](#Rimuovi tutte le connessioni)
 * [Lavorare con lo storage](#Lavorare con lo storage)
 * [Elenco file](#Elenco-file)
 * [Scrivi un file su stdout](#Scrivi-un-file-su-stdout)
 * [Copia file](#Copia-file)
 * [Elimina file](#Elimina-file)
 * [Visualizza metadati](#Visualizza-metadati)
 * [directory mirror](#directory mirror)

 ### Fonte
 * [mobiletto-cli su GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli su npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Supporto e finanziamento
 Sto cercando di essere uno sviluppatore di software open source professionista. Ci ho lavorato
 nell'industria del software per molti anni, ho avviato società di successo e le ho vendute a società pubbliche.
 Recentemente ho perso il lavoro, e non ho altro in programma

 Quindi proverò a scrivere un software utile e vedere se funziona

 Se ti piace usare questo software, ti sarei sinceramente grato anche per il
 il più piccolo [contributo mensile tramite Patreon](https://www.patreon.com/cobbzilla)

 *Grazie!*

 ## Installazione e utilizzo
 Puoi installare ed eseguire `mobiletto-cli` tramite npm o direttamente dal sorgente.

 Pacchetto ### npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Dalla fonte
 Per eseguire dal sorgente, avrai bisogno di nodejs v16+ e yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Connessioni
 Tutto lo spazio di archiviazione mobiletto è accessibile tramite una connessione.

 Mobiletto attualmente supporta le connessioni allo storage del filesystem locale e ai bucket Amazon S3.

 Le connessioni sono specificate da un oggetto JSON che assomiglia a questo:

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

 Per i dettagli completi su tutte le opzioni e sui loro valori e significati, vedere il
 [documenti mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Crea una connessione
 Per creare una nuova connessione, abbiamo bisogno di uno di questi oggetti JSON.

 Possiamo crearne uno in modo interattivo o fornirne uno tramite un file o un letterale JSON:

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

 ### Elenca le connessioni
 Elenca le connessioni disponibili:

    mo connect -l
    mo connect --list

 ### Dump connessione JSON config
 Mostra la configurazione JSON completa per una connessione. **AVVERTENZA** questo stamperà chiavi e segreti su stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Rimuovere una connessione
 Rimuovere una singola connessione:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Rimuovi tutte le connessioni
 Rimuovi TUTTE le connessioni:

    mo connect -R
    mo connect --remove-all

 ## Lavorare con l'archiviazione
 Dopo aver creato alcune connessioni, usa le `ls` , `cp` , `rm` , `meta` e `mirror`
 per lavorare con loro.

 Ogni percorso di file fornito a un comando deve essere preceduto dal nome della connessione
 si riferisce a. Negli esempi seguenti, assumiamo che esistano due connessioni denominate `conn1` e `conn2`

 ### Elenca i file
 L'output di un comando list è una serie di oggetti JSON, uno per riga, che rappresentano i file
 fondare. Questi oggetti avranno un `name` e un `type` e possibilmente altri campi.

    mo ls conn1/some/path

 Elenca i file in modo ricorsivo:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota sull'archiviazione crittografata**: l'elenco ricorsivo non è ancora supportato per le connessioni crittografate.
 Puoi elencare solo una directory di file alla volta.

 Elenca i file in modo dettagliato (JSON piuttosto stampato):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Elenca i file in modo ricorsivo e dettagliato:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Visualizza la guida per il comando `ls` , descrive tutte le opzioni:

    mo ls -h
    mo ls --help

 ### Scrivi un file su stdout
 Il comando `cat` stamperà un file su stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Nel vero spirito UNIX *(ma non certo la pratica!)* il comando `cat` di mobiletto **non accetta opzioni**
 diverso da `-h` / `--help` per visualizzare informazioni utili.

 ### Copia i file
 Copia un singolo file da un mobiletto all'altro:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copia un singolo file da un mobiletto all'altro, rinominandolo a destinazione:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copia ricorsivamente una directory:

    mo cp -r conn1/some/directory conn2/some/dest/

 Visualizza la guida per il comando `cp` , descrive tutte le opzioni:

    mo cp -h
    mo cp --help

 Nota: la copia dei file non è molto veloce, perché attualmente richiede un file temporaneo intermedio.

 ### Cancella file
 Elimina un singolo file:

    mo rm conn1/some/file.txt

 Elimina un singolo file e non lamentarti di eventuali errori:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Elimina una directory:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Elimina una directory e non lamentarti di eventuali errori:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Visualizza i metadati
 Spesso è utile conoscere i metadati di un file, senza scaricare l'intero file.

 Mobiletto è in grado di riportare la dimensione del file e l'ora dell'ultima modifica, oltre al nome e al tipo.

 Per visualizzare i metadati:

    mo meta conn1/some/file.txt

 ### Directory di mirroring
 Il mirroring è più di un caso speciale di `cp` , è un comando mobiletto separato che avvolge il file
 operazione di copia; continua anche quando si verificano errori e tiene traccia di un conteggio di successi ed errori.

 Per eseguire il mirroring di tutto da conn1 a conn2:

    mo mirror conn1 conn2

 Per eseguire il mirroring di una sottodirectory:

    mo mirror conn1/some/subdir conn2

 Per eseguire il mirroring di una sottodirectory in un'altra sottodirectory:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
