mobiletto-cli
 ==============
 Μια διεπαφή γραμμής εντολών (CLI) για [mobiletto](https://www.npmjs.com/package/mobiletto)
 αποθήκευση.

 Το Mobiletto υποστηρίζει συνδέσεις με το Amazon S3, το Backblaze B2 και τα τοπικά συστήματα αρχείων.

 # Διαβάστε αυτό σε άλλη γλώσσα
 Αυτό το έγγραφο README.md έχει μεταφραστεί, μέσω [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), σε
 **[κάθε γλώσσα που υποστηρίζεται από τη Μετάφραση Google](https://cloud.google.com/translate/docs/languages)!**

 Είμαι σίγουρος ότι δεν είναι τέλειο, αλλά ελπίζω να είναι καλύτερο από το τίποτα!

 [🇸🇦 Αραβικά](../ar/README.md)
 [🇧🇩 Μπενγκάλι](../bn/README.md)
 [🇩🇪 Γερμανικά](../de/README.md)
 [🇺🇸 Αγγλικά](../en/README.md)
 [🇪🇸 Ισπανικά](../es/README.md)
 [🇫🇷 Γαλλικά](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Χίντι](../hi/README.md)
 [🇮🇩 Ινδονησιακά](../id/README.md)
 [🇮🇹 Ιταλικά](../it/README.md)
 [🇯🇵 Ιαπωνικά](../ja/README.md)
 [🇰🇷 Κορεάτικα](../ko/README.md)
 [🇮🇳 Μαράνθη](../mr/README.md)
 [🇵🇱 Πολωνικά](../pl/README.md)
 [🇧🇷 Πορτογαλικά](../pt/README.md)
 [🇷🇺 Ρωσικά](../ru/README.md)
 [🇰🇪 Σουαχίλι](../sw/README.md)
 [🇵🇭 Ταγκαλόγκ](../tl/README.md)
 [🇹🇷 Τουρκικά](../tr/README.md)
 [🇵🇰 Ουρντού](../ur/README.md)
 [🇻🇳 Βιετναμέζικα](../vi/README.md)
 [🇨🇳 Κινέζικα](../zh/README.md)


 **[📚 ... Όλες οι γλώσσες ...](../README.md)**
 ----

 ### Υπάρχει πρόβλημα με αυτή τη μετάφραση του README;
 Αυτή η συγκεκριμένη μετάφραση του πρωτότυπου [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 μπορεί να είναι ελαττωματικά -- *οι διορθώσεις είναι πολύ ευπρόσδεκτες!* Στείλτε ένα [αίτημα έλξης στο GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ή αν δεν αισθάνεστε άνετα να το κάνετε, [ανοίξτε ένα θέμα](https://github.com/cobbzilla/mobiletto-cli/issues)

 Όταν δημιουργείτε ένα νέο ζήτημα GitHub σχετικά με μια μετάφραση, κάντε τα εξής:
 * συμπεριλάβετε τη διεύθυνση URL της σελίδας (αντιγραφή/επικόλληση από τη γραμμή διευθύνσεων του προγράμματος περιήγησης)
 * συμπεριλάβετε το ακριβές κείμενο που είναι λάθος (αντιγραφή/επικόλληση από το πρόγραμμα περιήγησης)
 * παρακαλώ περιγράψτε τι είναι λάθος -- είναι λάθος η μετάφραση; είναι κάπως χαλασμένη η μορφοποίηση;
 * Προσφέρετε ευγενικά μια πρόταση για καλύτερη μετάφραση ή πώς το κείμενο πρέπει να μορφοποιηθεί σωστά
 * **Ευχαριστώ!**

 ### Πηγή
 * [mobiletto-cli στο GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli σε npm](https://www.npmjs.com/package/mobiletto-cli)

 # Περιεχόμενα
 * [Εγκατάσταση και χρήση](#Installation-and-usage)
 * [πακέτο npm](#npm-πακέτο)
 * [Από πηγή](#Από-πηγή)
 * [Συνδέσεις](#Συνδέσεις)
 * [Δημιουργία σύνδεσης](#Create-a-connection)
 * [Λίστα συνδέσεων](#Λίστα-συνδέσεις)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Κατάργηση σύνδεσης](#Remove-a-connection)
 * [Κατάργηση όλων των συνδέσεων](#Remove-all-connections)
 * [Εργασία με αποθήκευση](#Working-with-storage)
 * [Λίστα αρχείων](#Λίστα-αρχεία)
 * [Γράψτε ένα αρχείο στο stdout](#Write-a-file-to-stdout)
 * [Αντιγραφή αρχείων](#Copy-files)
 * [Διαγραφή αρχείων](#Delete-files)
 * [Προβολή μεταδεδομένων](#View-metadata)
 * [Mirror Directories](#Mirror-directories)

 ## Εγκατάσταση και χρήση
 Μπορείτε να εγκαταστήσετε και να εκτελέσετε το `mobiletto-cli` μέσω npm ή απευθείας από την πηγή.

 ### πακέτο npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Από πηγή
 Για να τρέξετε από την πηγή, θα χρειαστείτε nodejs v16+ και νήμα

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Συνδέσεις
 Η πρόσβαση σε όλο τον χώρο αποθήκευσης mobiletto γίνεται μέσω σύνδεσης.

 Το Mobiletto υποστηρίζει αυτήν τη στιγμή συνδέσεις με την τοπική αποθήκευση του συστήματος αρχείων και τους κάδους Amazon S3.

 Οι συνδέσεις καθορίζονται από ένα αντικείμενο JSON που μοιάζει με αυτό:

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

 Για πλήρεις λεπτομέρειες σχετικά με όλες τις επιλογές, τις αξίες και τις έννοιές τους, ανατρέξτε στο
 [έγγραφα mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Δημιουργήστε μια σύνδεση
 Για να δημιουργήσουμε μια νέα σύνδεση, χρειαζόμαστε ένα από αυτά τα αντικείμενα JSON.

 Μπορούμε να δημιουργήσουμε ένα διαδραστικά ή να το παρέχουμε μέσω αρχείου ή JSON literal:

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

 ### Λίστα συνδέσεων
 Κατάλογος διαθέσιμων συνδέσεων:

    mo connect -l
    mo connect --list

 ### Αποτύπωση σύνδεσης JSON config
 Εμφάνιση της πλήρους διαμόρφωσης JSON για μια σύνδεση. **ΠΡΟΕΙΔΟΠΟΙΗΣΗ** αυτό θα εκτυπώσει κλειδιά και μυστικά στο stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Καταργήστε μια σύνδεση
 Καταργήστε μία μόνο σύνδεση:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Καταργήστε όλες τις συνδέσεις
 Καταργήστε ΟΛΕΣ τις συνδέσεις:

    mo connect -R
    mo connect --remove-all

 ## Εργασία με χώρο αποθήκευσης
 Αφού δημιουργήσετε κάποιες συνδέσεις, χρησιμοποιήστε τις λειτουργίες `ls` , `cp` , `rm` , `meta` και `mirror` mirror`
 να συνεργαστεί μαζί τους.

 Κάθε διαδρομή αρχείου που παρέχετε σε μια εντολή πρέπει να έχει πρόθεμα το όνομα της σύνδεσης
 αναφέρεται σε. Στα παρακάτω παραδείγματα, υποθέτουμε ότι υπάρχουν δύο συνδέσεις που ονομάζονται `conn1` » και `conn2`

 ### Λίστα αρχείων
 Η έξοδος μιας εντολής λίστας είναι μια σειρά αντικειμένων JSON, ένα ανά γραμμή, που αντιπροσωπεύει τα αρχεία
 βρέθηκαν. Αυτά τα αντικείμενα θα έχουν `name` και `type` " και πιθανώς άλλα πεδία.

    mo ls conn1/some/path

 Αναδρομική λίστα αρχείων:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Σημείωση κρυπτογραφημένης αποθήκευσης**: Η αναδρομική λίστα δεν υποστηρίζεται ακόμη για κρυπτογραφημένες συνδέσεις.
 Μπορείτε να αναφέρετε μόνο έναν κατάλογο αρχείων κάθε φορά.

 Λίστα αρχείων αναλυτικά (όμορφη εκτύπωση JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Λίστα αρχείων αναδρομικά και αναλυτικά:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Προβολή βοήθειας για την εντολή `ls` , περιγράφει όλες τις επιλογές:

    mo ls -h
    mo ls --help

 ### Γράψτε ένα αρχείο στο stdout
 Η εντολή `cat` " θα εκτυπώσει ένα αρχείο στο stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Στο αληθινό πνεύμα του UNIX *(αλλά σίγουρα όχι στην πρακτική!)* η εντολή "cat" του `cat` **δεν παίρνει επιλογές**
 εκτός από `-h` / `--help` για εμφάνιση χρήσιμων πληροφοριών.

 ### Αντιγραφή αρχείων
 Αντιγράψτε ένα μόνο αρχείο από το ένα mobiletto στο άλλο:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Αντιγράψτε ένα μεμονωμένο αρχείο από το ένα mobiletto στο άλλο, μετονομάζοντάς το στον προορισμό:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Αντιγράψτε αναδρομικά έναν κατάλογο:

    mo cp -r conn1/some/directory conn2/some/dest/

 Προβολή βοήθειας για την εντολή `cp` ", περιγράφει όλες τις επιλογές:

    mo cp -h
    mo cp --help

 Σημείωση: Η αντιγραφή αρχείων δεν είναι πολύ γρήγορη, επειδή αυτή τη στιγμή απαιτεί ένα ενδιάμεσο προσωρινό αρχείο.

 ### Διαγραφή αρχείων
 Διαγραφή ενός μόνο αρχείου:

    mo rm conn1/some/file.txt

 Διαγράψτε ένα μόνο αρχείο και μην παραπονεθείτε για τυχόν σφάλματα:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Διαγραφή καταλόγου:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Διαγράψτε έναν κατάλογο και μην παραπονιέστε για τυχόν σφάλματα:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Προβολή μεταδεδομένων
 Είναι συχνά χρήσιμο να γνωρίζετε τα μεταδεδομένα για ένα αρχείο, χωρίς να κάνετε λήψη ολόκληρου του αρχείου.

 Το Mobiletto μπορεί να αναφέρει το μέγεθος του αρχείου και τον χρόνο τελευταίας τροποποίησης, εκτός από το όνομα και τον τύπο.

 Για να δείτε μεταδεδομένα:

    mo meta conn1/some/file.txt

 ### Mirror καταλόγους
 Το mirroring είναι κάτι περισσότερο από μια ειδική περίπτωση `cp` , είναι μια ξεχωριστή εντολή mobiletto που αναδιπλώνει το
 λειτουργία αντιγραφής? συνεχίζει ακόμα και όταν συμβαίνουν σφάλματα και παρακολουθεί έναν αριθμό επιτυχιών και λαθών.

 Για να αντικατοπτρίσετε τα πάντα από το conn1 στο conn2:

    mo mirror conn1 conn2

 Για να αντικατοπτρίσετε έναν υποκατάλογο:

    mo mirror conn1/some/subdir conn2

 Για να αντικατοπτρίσετε έναν υποκατάλογο σε έναν άλλο υποκατάλογο:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
