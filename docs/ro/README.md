mobiletto-cli
 ==============
 O interfață de linie de comandă (CLI) pentru [mobiletto](https://www.npmjs.com/package/mobiletto)
 depozitare.

 Mobiletto acceptă conexiuni la Amazon S3, Backblaze B2 și sistemele de fișiere locale.

 # Citiți asta într-o altă limbă
 Acest document README.md a fost tradus, prin [hokeylization](https://github.com/cobbzilla/hokeylization), în
 **[fiecare limbă acceptată de Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sunt sigur că nu este perfect, dar sper că este mai bine decât nimic!

 [🇸🇦 Arabă](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Germană](../de/README.md)
 [🇺🇸 engleză](../en/README.md)
 [🇪🇸 Spaniolă](../es/README.md)
 [🇫🇷 Franceză](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indoneziană](../id/README.md)
 [🇮🇹 italiană](../it/README.md)
 [🇯🇵 japoneză](../ja/README.md)
 [🇰🇷 coreeană](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poloneză](../pl/README.md)
 [🇧🇷 portugheză](../pt/README.md)
 [🇷🇺 rusă](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcă](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnameză](../vi/README.md)
 [🇨🇳 Chineză](../zh/README.md)


 **[📚 ... Toate limbile ...](../README.md)**
 ----

 ### Există o problemă cu această traducere a fișierului README?
 Această traducere specială a originalului [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 poate fi defecte -- *corecțiile sunt foarte binevenite!* Vă rugăm să trimiteți o [pull request pe GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 sau dacă nu ești confortabil să faci asta, [deschide o problemă](https://github.com/cobbzilla/mobiletto-cli/issues)

 Când creați o nouă problemă GitHub despre o traducere, faceți:
 * includeți adresa URL a paginii (copiați/lipiți din bara de adrese a browserului)
 * includeți textul exact care este greșit (copiați/lipiți din browser)
 * vă rugăm să descrieți ce este greșit -- traducerea este incorectă? formatarea este stricata cumva?
 * Vă rugăm să oferiți o sugestie pentru o traducere mai bună sau cum ar trebui să fie formatat corect textul
 * **Mulțumesc!**

 # Cuprins
 * [Sursa](#Sursa)
 * [Suport și finanțare](#Support-and-Funding)
 * [Instalare și utilizare](#Instalare-și-utilizare)
 * [pachet npm](#npm-pachet)
 * [De la sursă](#From-source)
 * [Conexiuni](#Conexiuni)
 * [Creați o conexiune](#Creați-o conexiune)
 * [List connections](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Eliminați o conexiune](#Remove-a-connection)
 * [Eliminați toate conexiunile](#Remove-all-connections)
 * [Lucrul cu stocarea](#Working-with-storage)
 * [Fișiere Listă](#Fișiere Listă)
 * [Scrieți un fișier în stdout](#Write-a-file-to-stdout)
 * [Copiați fișierele](#Copiați fișierele)
 * [Șterge fișiere](#Delete-files)
 * [Vedeți metadatele](#View-metadata)
 * [Directoare în oglindă](#Directoare în oglindă)

 ### Sursă
 * [mobiletto-cli pe GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli pe npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Sprijin și finanțare
 Încerc să fiu un dezvoltator profesionist de software open source. Am lucrat în
 industria software de mulți ani, am început companii de succes și le-am vândut companiilor publice.
 Recent mi-am pierdut locul de muncă și nu prea am nicio altă lucrare la rând

 Așa că voi încerca să scriu un software util și să văd dacă funcționează

 Dacă vă place să utilizați acest software, v-aș fi sincer recunoscător chiar și pentru
 cea mai mică [contribuție lunară prin Patreon](https://www.patreon.com/cobbzilla)

 *Mulțumesc!*

 ## Instalare și utilizare
 Puteți instala și rula `mobiletto-cli` prin npm sau direct din sursă.

 ### pachet npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### De la sursă
 Pentru a rula de la sursă, veți avea nevoie de nodejs v16+ și yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Conexiuni
 Toată stocarea mobiletto este accesată printr-o conexiune.

 Mobiletto acceptă în prezent conexiuni la sistemul de fișiere de stocare local și la compartimentele Amazon S3.

 Conexiunile sunt specificate de un obiect JSON care arată astfel:

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

 Pentru detalii complete despre toate opțiunile și despre valorile și semnificațiile acestora, consultați
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Creați o conexiune
 Pentru a crea o nouă conexiune, avem nevoie de unul dintre aceste obiecte JSON.

 Putem crea unul interactiv sau putem furniza unul printr-un fișier sau JSON literal:

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

 ### Listează conexiunile
 Listați conexiunile disponibile:

    mo connect -l
    mo connect --list

 ### Dump conexiune JSON config
 Afișați configurația completă JSON pentru o conexiune. **ATENȚIE** acest lucru va imprima cheile și secretele pentru stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Eliminați o conexiune
 Eliminați o singură conexiune:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Eliminați toate conexiunile
 Eliminați TOATE conexiunile:

    mo connect -R
    mo connect --remove-all

 ## Lucrul cu stocarea
 Odată ce ați creat unele conexiuni, utilizați operațiunile `ls` , `cp` , `rm` , `meta` și `mirror` mirror`
 a lucra cu ei.

 Fiecare cale de fișier pe care o furnizați unei comenzi trebuie să fie prefixată cu numele conexiunii
 se referă la. În exemplele de mai jos, presupunem că există două conexiuni numite `conn1` și `conn2`

 ### Listează fișierele
 Ieșirea unei comenzi listă este o serie de obiecte JSON, unul pe linie, reprezentând fișierele
 găsite. Aceste obiecte vor avea un `name` și un `type` și, eventual, alte câmpuri.

    mo ls conn1/some/path

 Listează fișierele în mod recursiv:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Notă de stocare criptată**: Lista recursive nu este încă acceptată pentru conexiunile criptate.
 Puteți enumera un singur director de fișiere odată.

 Enumerați fișierele în mod verbos (JSON destul de imprimat):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Listează fișierele în mod recursiv și verbos:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Vizualizați ajutorul pentru comanda `ls` , descrie toate opțiunile:

    mo ls -h
    mo ls --help

 ### Scrieți un fișier în stdout
 Comanda `cat` va imprima un fișier în stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 În adevăratul spirit UNIX *(dar cu siguranță nu este practica!)* comanda `cat` **nu acceptă opțiuni**
 altele decât `-h` / `--help` pentru a afișa informații utile.

 ### Copiați fișierele
 Copiați un singur fișier de pe un mobiletto în altul:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copiați un singur fișier de pe un mobiletto în altul, redenumindu-l la destinație:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copiați recursiv un director:

    mo cp -r conn1/some/directory conn2/some/dest/

 Vizualizați ajutorul pentru comanda `cp` , descrie toate opțiunile:

    mo cp -h
    mo cp --help

 Notă: Copierea fișierelor nu este foarte rapidă, deoarece în prezent necesită un fișier temporar intermediar.

 ### Sterge fisierele
 Ștergeți un singur fișier:

    mo rm conn1/some/file.txt

 Ștergeți un singur fișier și nu vă plângeți de erori:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Ștergeți un director:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Ștergeți un director și nu vă plângeți de erori:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Vizualizați metadatele
 Este adesea util să cunoașteți metadatele pentru un fișier, fără a descărca întregul fișier.

 Mobiletto poate raporta dimensiunea fișierului și ora ultimei modificări, pe lângă nume și tip.

 Pentru a vizualiza metadatele:

    mo meta conn1/some/file.txt

 ### Oglindă directoare
 Oglindirea este mai mult decât un caz special de `cp` , este o comandă mobiltto separată care include
 operațiune de copiere; continuă chiar și atunci când apar erori și urmărește un număr de succese și erori.

 Pentru a oglindi totul de la conn1 la conn2:

    mo mirror conn1 conn2

 Pentru a oglindi un subdirector:

    mo mirror conn1/some/subdir conn2

 Pentru a oglindi un subdirector într-un alt subdirector:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
