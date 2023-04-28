mobiletto-cli
 =============
 Eine Befehlszeilenschnittstelle (CLI) für [mobiletto](https://www.npmjs.com/package/mobiletto)
 Lagerung.

 Mobiletto unterstützt Verbindungen zu Amazon S3, Backblaze B2 und lokalen Dateisystemen.

 # Lesen Sie dies in einer anderen Sprache
 Dieses README.md-Dokument wurde über [hokeylization](https://github.com/cobbzilla/hokeylization) übersetzt in
 **[jede von Google Übersetzer unterstützte Sprache](https://cloud.google.com/translate/docs/languages)!**

 Ich bin sicher, es ist nicht perfekt, aber ich hoffe, es ist besser als nichts!

 [🇸🇦 Arabisch](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Deutsch](../de/README.md)
 [🇺🇸 Englisch](../en/README.md)
 [🇪🇸 Spanisch](../es/README.md)
 [🇫🇷 Französisch](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesisch](../id/README.md)
 [🇮🇹 Italienisch](../it/README.md)
 [🇯🇵 Japanisch](../ja/README.md)
 [🇰🇷 Koreanisch](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polnisch](../pl/README.md)
 [🇧🇷 Portugiesisch](../pt/README.md)
 [🇷🇺 Russisch](../ru/README.md)
 [🇰🇪 Suaheli](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Türkisch](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamesisch](../vi/README.md)
 [🇨🇳 Chinesisch](../zh/README.md)


 **[📚 ... Alle Sprachen ...](../README.md)**
 ----

 ### Gibt es ein Problem mit dieser Übersetzung der README?
 Diese spezielle Übersetzung der ursprünglichen [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kann fehlerhaft sein -- *Korrekturen sind sehr willkommen!* Bitte senden Sie eine [Pull-Anfrage auf GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 oder wenn Sie sich dabei nicht wohlfühlen, [öffnen Sie ein Problem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Wenn Sie ein neues GitHub-Problem zu einer Übersetzung erstellen, gehen Sie bitte wie folgt vor:
 * Fügen Sie die Seiten-URL hinzu (Kopieren/Einfügen aus der Adressleiste des Browsers)
 * Geben Sie genau den falschen Text ein (Kopieren/Einfügen aus dem Browser)
 * Bitte beschreiben Sie, was falsch ist -- ist die Übersetzung falsch? ist die Formatierung irgendwie kaputt?
 * Machen Sie bitte einen Vorschlag für eine bessere Übersetzung oder wie der Text richtig formatiert werden sollte
 * **Vielen Dank!**

 # Inhalt
 * [Quelle](#Quelle)
 * [Unterstützung und Finanzierung](#Unterstützung-und-Finanzierung)
 * [Installation und Nutzung](#Installation-and-use)
 * [npm-Paket](#npm-Paket)
 * [Von Quelle](#Von-Quelle)
 * [Verbindungen](#Verbindungen)
 * [Verbindung erstellen](#Create-a-connection)
 * [Verbindungen auflisten](#Verbindungen auflisten)
 * [Dump-Verbindung JSON-Konfiguration](#Dump-connection-JSON-config)
 * [Verbindung entfernen](#Remove-a-connection)
 * [Alle Verbindungen entfernen](#Remove-all-connections)
 * [Arbeiten mit Speicher](#Working-with-storage)
 * [Listendateien](#Listendateien)
 * [Datei in stdout schreiben](#Write-a-file-to-stdout)
 * [Dateien kopieren](#Copy-Dateien)
 * [Dateien löschen](#Delete-files)
 * [Metadaten anzeigen](#View-metadata)
 * [Spiegelverzeichnisse](#Spiegelverzeichnisse)

 ### Quelle
 * [mobiletto-cli auf GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli auf npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Unterstützung und Finanzierung
 Ich versuche, ein professioneller Open-Source-Softwareentwickler zu werden. Ich habe in gearbeitet
 Ich arbeite seit vielen Jahren in der Softwarebranche, habe erfolgreiche Unternehmen gegründet und an Aktiengesellschaften verkauft.
 Kürzlich habe ich meinen Job verloren, und ich habe eigentlich keine andere Arbeit vor mir

 Also werde ich versuchen, hilfreiche Software zu schreiben und sehen, ob das funktioniert

 Wenn Sie diese Software gerne verwenden, wäre ich Ihnen sogar dafür aufrichtig dankbar
 kleinster [monatlicher Beitrag über Patreon](https://www.patreon.com/cobbzilla)

 *Vielen Dank!*

 ## Installation und Verwendung
 Sie können `mobiletto-cli` über npm oder direkt aus den Quellen installieren und ausführen.

 ### npm-Paket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Von der Quelle
 Um von der Quelle auszuführen, benötigen Sie nodejs v16+ und Garn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Verbindungen
 Auf den gesamten mobiletto-Speicher wird über eine Verbindung zugegriffen.

 Mobiletto unterstützt derzeit Verbindungen zum lokalen Dateisystemspeicher und zu Amazon S3-Buckets.

 Verbindungen werden durch ein JSON-Objekt angegeben, das wie folgt aussieht:

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

 Ausführliche Informationen zu allen Optionen und ihren Werten und Bedeutungen finden Sie unter
 [Mobiletto-Dokumentation](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Verbindung herstellen
 Um eine neue Verbindung herzustellen, benötigen wir eines dieser JSON-Objekte.

 Wir können eines interaktiv erstellen oder eines über eine Datei oder ein JSON-Literal bereitstellen:

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

 ### Verbindungen auflisten
 Verfügbare Verbindungen auflisten:

    mo connect -l
    mo connect --list

 ### Dump-Verbindung JSON-Konfiguration
 Zeigt die vollständige JSON-Konfiguration für eine Verbindung an. **WARNUNG** Dadurch werden Schlüssel und Geheimnisse auf stdout ausgegeben.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Eine Verbindung entfernen
 Einzelne Verbindung entfernen:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Alle Verbindungen entfernen
 ALLE Verbindungen entfernen:

    mo connect -R
    mo connect --remove-all

 ## Arbeiten mit Speicher
 Sobald Sie einige Verbindungen erstellt haben, verwenden Sie die `ls` , `cp` , `rm` , `meta` und `mirror`
 mit ihnen zu arbeiten.

 Jedem Dateipfad, den Sie für einen Befehl angeben, muss der Name der Verbindung vorangestellt werden
 es bezieht sich auf. In den folgenden Beispielen gehen wir davon aus, dass zwei Verbindungen mit den Namen `conn1` und `conn2`

 ### Dateien auflisten
 Die Ausgabe eines Listenbefehls ist eine Reihe von JSON-Objekten, eines pro Zeile, die die Dateien darstellen
 gefunden. Diese Objekte haben einen "Namen" und einen `name` `type` und möglicherweise andere Felder.

    mo ls conn1/some/path

 Dateien rekursiv auflisten:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Hinweis zur verschlüsselten Speicherung**: Rekursive Auflistung wird für verschlüsselte Verbindungen noch nicht unterstützt.
 Sie können jeweils nur ein Dateiverzeichnis auflisten.

 Dateien ausführlich auflisten (schön gedrucktes JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Dateien rekursiv und ausführlich auflisten:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Siehe Hilfe für den Befehl `ls` , beschreibt alle Optionen:

    mo ls -h
    mo ls --help

 ### Schreiben Sie eine Datei nach stdout
 Der Befehl `cat` “ druckt eine Datei auf stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Im wahren UNIX-Geist *(jedoch sicherlich nicht die Praxis!)* Der `cat` -Befehl von mobiletto **nimmt keine Optionen an**
 außer `-h` / `--help` , um hilfreiche Informationen anzuzeigen.

 ### Dateien kopieren
 Kopieren Sie eine einzelne Datei von einem Mobiletto auf ein anderes:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopieren Sie eine einzelne Datei von einem Mobiletto auf ein anderes und benennen Sie sie am Zielort um:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Verzeichnis rekursiv kopieren:

    mo cp -r conn1/some/directory conn2/some/dest/

 Siehe Hilfe für den `cp` Befehl, beschreibt alle Optionen:

    mo cp -h
    mo cp --help

 Hinweis: Das Kopieren von Dateien ist nicht sehr schnell, da derzeit eine zwischengeschaltete temporäre Datei erforderlich ist.

 ### Dateien löschen
 Einzelne Datei löschen:

    mo rm conn1/some/file.txt

 Löschen Sie eine einzelne Datei und beschweren Sie sich nicht über Fehler:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Verzeichnis löschen:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Löschen Sie ein Verzeichnis und beschweren Sie sich nicht über Fehler:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Metadaten anzeigen
 Oft ist es hilfreich, die Metadaten einer Datei zu kennen, ohne die gesamte Datei herunterladen zu müssen.

 Mobiletto kann neben Name und Typ auch die Dateigröße und die Uhrzeit der letzten Änderung melden.

 So zeigen Sie Metadaten an:

    mo meta conn1/some/file.txt

 ### Verzeichnisse spiegeln
 Mirroring ist mehr als ein Sonderfall von `cp` , es ist ein separater Mobiletto-Befehl, der die
 Kopiervorgang; Es wird auch dann fortgesetzt, wenn Fehler auftreten, und eine Anzahl von Erfolgen und Fehlern nachverfolgt.

 So spiegeln Sie alles von conn1 in conn2:

    mo mirror conn1 conn2

 So spiegeln Sie ein Unterverzeichnis:

    mo mirror conn1/some/subdir conn2

 So spiegeln Sie ein Unterverzeichnis in ein anderes Unterverzeichnis:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
