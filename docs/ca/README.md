mobiletto-cli
 ==============
 Una interfície de línia d'ordres (CLI) per a [mobiletto](https://www.npmjs.com/package/mobiletto)
 emmagatzematge.

 Mobiletto admet connexions a Amazon S3, Backblaze B2 i sistemes de fitxers locals.

 # Llegeix això en un altre idioma
 Aquest document README.md s'ha traduït, mitjançant [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), a
 **[cada idioma compatible amb Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estic segur que no és perfecte, però espero que sigui millor que res!

 [🇸🇦 Àrab](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemany](../de/README.md)
 [🇺🇸 Anglès](../en/README.md)
 [🇪🇸 Espanyol](../es/README.md)
 [🇫🇷 Francès](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesi](../id/README.md)
 [🇮🇹 italià](../it/README.md)
 [🇯🇵 Japonès](../ja/README.md)
 [🇰🇷 coreà](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polonès](../pl/README.md)
 [🇧🇷 portuguès](../pt/README.md)
 [🇷🇺 Rus](../ru/README.md)
 [🇰🇪 suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turc](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamita](../vi/README.md)
 [🇨🇳 Xinès](../zh/README.md)


 **[📚 ... Tots els idiomes ...](../README.md)**
 ----

 ### Hi ha algun problema amb aquesta traducció del README?
 Aquesta traducció en particular de l'original [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 pot ser defectuós -- *les correccions són molt benvingudes!* Envieu una [sol·licitud d'extracció a GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 o si no et sents còmode fent-ho, [obre un problema](https://github.com/cobbzilla/mobiletto-cli/issues)

 Quan creeu un nou problema de GitHub sobre una traducció, feu el següent:
 * incloure l'URL de la pàgina (copiar/enganxar des de la barra d'adreces del navegador)
 * inclou el text exacte que és incorrecte (copiar/enganxar des del navegador)
 * si us plau, descriu què està malament: la traducció és incorrecta? el format està trencat d'alguna manera?
 * Oferiu amablement un suggeriment d'una millor traducció o com s'hauria de formatar correctament el text
 * **Gràcies!**

 ### Font
 * [mobiletto-cli a GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli a npm](https://www.npmjs.com/package/mobiletto-cli)

 # Continguts
 * [Instal·lació i ús](#Instal·lació-i-ús)
 * [paquet npm](#npm-package)
 * [De la font](#From-source)
 * [Connexions](#Connexions)
 * [Crea una connexió](#Crea-a-connection)
 * [Llista de connexions](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Eliminar una connexió](#Remove-a-connection)
 * [Eliminar totes les connexions](#Remove-all-connections)
 * [Treballar amb emmagatzematge](#Working-with-storage)
 * [Fitxers de llista](#Fitxers de llista)
 * [Escriu un fitxer a stdout](#Write-a-file-to-stdout)
 * [Copiar fitxers](#Copy-files)
 * [Suprimeix fitxers](#Delete-files)
 * [Veure metadades](#View-metadata)
 * [Directoris mirall](#directoris mirall)

 ## Instal·lació i ús
 Podeu instal·lar i executar `mobiletto-cli` mitjançant npm o directament des de la font.

 ### paquet npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### De la font
 Per executar-se des de la font, necessitareu nodejs v16+ i yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Connexions
 S'accedeix a tot l'emmagatzematge de mobiletto mitjançant una connexió.

 Actualment, Mobiletto admet connexions a l'emmagatzematge del sistema de fitxers local i als cubs d'Amazon S3.

 Les connexions les especifiquen un objecte JSON que té aquest aspecte:

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

 Per obtenir detalls complets sobre totes les opcions i els seus valors i significats, consulteu el
 [documents de mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Crea una connexió
 Per crear una connexió nova, necessitem un d'aquests objectes JSON.

 Podem crear-ne un de manera interactiva o proporcionar-ne un mitjançant un fitxer o un literal JSON:

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

 ### Llista les connexions
 Llista de connexions disponibles:

    mo connect -l
    mo connect --list

 ### Connexió d'abocament de configuració JSON
 Mostra la configuració JSON completa per a una connexió. **ADVERTIMENT** això imprimirà claus i secrets a stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Eliminar una connexió
 Eliminar una única connexió:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Elimina totes les connexions
 Elimina TOTES les connexions:

    mo connect -R
    mo connect --remove-all

 ## Treballant amb emmagatzematge
 Un cop hàgiu creat algunes connexions, utilitzeu les `ls` , `cp` , `rm` , `meta` i `mirror`
 per treballar amb ells.

 Cada camí de fitxer que proporcioneu a una ordre ha d'anar prefixat amb el nom de la connexió
 fa referència. En els exemples següents, suposem que existeixen dues connexions anomenades `conn1` " i `conn2`

 ### Llista de fitxers
 La sortida d'una ordre de llista és una sèrie d'objectes JSON, un per línia, que representen els fitxers
 trobat. Aquests objectes tindran un `name` " i un `type` i possiblement altres camps.

    mo ls conn1/some/path

 Llista els fitxers de forma recursiva:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota d'emmagatzematge xifrat**: la llista recursiva encara no és compatible amb les connexions xifrades.
 Només podeu llistar un directori de fitxers alhora.

 Llista els fitxers de forma detallada (JSON molt ben impressió):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Llista els fitxers de forma recursiva i detallada:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Veure ajuda per a l'ordre `ls` , descriu totes les opcions:

    mo ls -h
    mo ls --help

 ### Escriu un fitxer a stdout
 L'ordre `cat` imprimirà un fitxer a stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 En el veritable esperit UNIX *(però no és la pràctica!)* l'ordre `cat` de mobiletto **no pren cap opció**
 que no sigui `-h` / `--help` per mostrar informació útil.

 ### Copia fitxers
 Copieu un sol fitxer d'un mòbiltto a un altre:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copieu un únic fitxer d'un mòbiltto a un altre, canviant el nom a la destinació:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copieu recursivament un directori:

    mo cp -r conn1/some/directory conn2/some/dest/

 Veure ajuda per a l'ordre `cp` , descriu totes les opcions:

    mo cp -h
    mo cp --help

 Nota: la còpia de fitxers no és molt ràpida, perquè actualment requereix un fitxer temporal intermediari.

 ### Esborra fitxers
 Eliminar un sol fitxer:

    mo rm conn1/some/file.txt

 Suprimeix un únic fitxer i no et queixes de cap error:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Eliminar un directori:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Suprimeix un directori i no et queixes de cap error:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Visualitza les metadades
 Sovint és útil conèixer les metadades d'un fitxer, sense descarregar tot el fitxer.

 Mobiletto pot informar de la mida del fitxer i l'hora de la darrera modificació, a més del nom i el tipus.

 Per veure les metadades:

    mo meta conn1/some/file.txt

 ### Mirror directoris
 La duplicació és més que un cas especial de `cp` , és una ordre independent de mobiletto que embolcalla el
 operació de còpia; continua fins i tot quan es produeixen errors i fa un seguiment d'un recompte d'èxits i errors.

 Per reflectir tot, des de conn1 a conn2:

    mo mirror conn1 conn2

 Per reflectir un subdirectori:

    mo mirror conn1/some/subdir conn2

 Per reflectir un subdirectori a un altre subdirectori:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
