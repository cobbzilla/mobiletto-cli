mobiletto-cli
 =======
 Interfejs wiersza poleceń (CLI) dla [mobiletto](https://www.npmjs.com/package/mobiletto)
 magazynowanie.

 Mobiletto obsługuje połączenia z Amazon S3, Backblaze B2 i lokalnymi systemami plików.

 # Przeczytaj to w innym języku
 Ten dokument README.md został przetłumaczony przez [hokeylization](https://github.com/cobbzilla/hokeylization) na
 **[każdy język obsługiwany przez Tłumacza Google](https://cloud.google.com/translate/docs/languages)!**

 Jestem pewien, że nie jest idealny, ale mam nadzieję, że to lepsze niż nic!

 [🇸🇦 Arabski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 Niemiecki](../de/README.md)
 [🇺🇸 Polski](../en/README.md)
 [🇪🇸 Hiszpański](../es/README.md)
 [🇫🇷 Francuski](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 Indonezyjski](../id/README.md)
 [🇮🇹 Włoski](../it/README.md)
 [🇯🇵 Japoński](../ja/README.md)
 [🇰🇷 Koreański](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polski](../pl/README.md)
 [🇧🇷 Portugalski](../pt/README.md)
 [🇷🇺 Rosyjski](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turecki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Wietnamski](../vi/README.md)
 [🇨🇳 chiński](../zh/README.md)


 **[📚 ... Wszystkie języki ...](../README.md)**
 ----

 ### Czy jest jakiś problem z tym tłumaczeniem README?
 To konkretne tłumaczenie oryginału [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 może być błędny -- *poprawki są bardzo mile widziane!* Wyślij [proszę o ściągnięcie na GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 lub jeśli nie czujesz się z tym komfortowo, [otwórz zgłoszenie](https://github.com/cobbzilla/mobiletto-cli/issues)

 Tworząc nowy problem na GitHubie dotyczący tłumaczenia, wykonaj następujące czynności:
 * dołącz adres URL strony (skopiuj/wklej z paska adresu przeglądarki)
 * dołącz dokładny tekst, który jest błędny (skopiuj/wklej z przeglądarki)
 * proszę opisać, co jest nie tak – czy tłumaczenie jest niepoprawne? czy formatowanie jest jakoś zepsute?
 * uprzejmie zasugeruj lepsze tłumaczenie, czyli jak tekst powinien być odpowiednio sformatowany
 * **Dziękuję Ci!**

 # Zawartość
 * [Źródło](#Źródło)
 * [Wsparcie i finansowanie](#Wsparcie i finansowanie)
 * [Instalacja i użytkowanie](#Instalacja-i-użytkowanie)
 * [pakiet npm](#pakiet-npm)
 * [Od źródła](#Od-źródła)
 * [Połączenia](#Połączenia)
 * [Utwórz połączenie](#Utwórz połączenie)
 * [Wyświetl listę połączeń](#Lista połączeń)
 * [Zrzut konfiguracji JSON połączenia](#Dump-connection-JSON-config)
 * [Usuń połączenie](#Usuń połączenie)
 * [Usuń wszystkie połączenia](#Usuń wszystkie połączenia)
 * [Praca z pamięcią](#Praca z pamięcią)
 * [Lista plików](#Lista plików)
 * [Zapisz plik na standardowe wyjście](#Zapisz-plik-do-stdout)
 * [Kopiuj pliki](#Kopiuj pliki)
 * [Usuń pliki](#Usuń-pliki)
 * [Wyświetl metadane](#Wyświetl metadane)
 * [Katalogi lustrzane](#Katalogi lustrzane)

 ### Źródło
 * [mobiletto-cli na GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli na npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Wsparcie i finansowanie
 Próbuję zostać profesjonalnym programistą open source. pracowałem w
 od wielu lat w branży oprogramowania, zakładałem odnoszące sukcesy firmy i sprzedawałem je spółkom publicznym.
 Ostatnio straciłam pracę i właściwie nie mam żadnej innej pracy w kolejce

 Więc spróbuję napisać pomocne oprogramowanie i zobaczę, czy to działa

 Jeśli lubisz korzystać z tego oprogramowania, będę szczerze wdzięczny nawet za
 najmniejsza [miesięczna składka przez Patreon](https://www.patreon.com/cobbzilla)

 *Dziękuję Ci!*

 ## Instalacja i użytkowanie
 Możesz zainstalować i uruchomić `mobiletto-cli` przez npm lub bezpośrednio ze źródeł.

 ### pakiet npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ze źródła
 Aby uruchomić ze źródła, potrzebujesz nodejs v16+ i przędzy

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Połączenia
 Cała pamięć mobiletto jest dostępna za pośrednictwem połączenia.

 Mobiletto obecnie obsługuje połączenia z lokalnym magazynem systemu plików i zasobnikami Amazon S3.

 Połączenia są określane przez obiekt JSON, który wygląda tak:

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

 Aby uzyskać szczegółowe informacje na temat wszystkich opcji oraz ich wartości i znaczenia, zobacz
 [dokumentacja mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Utwórz połączenie
 Aby utworzyć nowe połączenie, potrzebujemy jednego z tych obiektów JSON.

 Możemy stworzyć go interaktywnie lub dostarczyć poprzez plik lub literał JSON:

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

 ### Lista połączeń
 Lista dostępnych połączeń:

    mo connect -l
    mo connect --list

 ### Zrzuć konfigurację JSON połączenia
 Pokaż pełną konfigurację JSON dla połączenia. **OSTRZEŻENIE** spowoduje to wydrukowanie kluczy i kluczy tajnych na standardowe wyjście.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Usuń połączenie
 Usuń pojedyncze połączenie:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Usuń wszystkie połączenia
 Usuń WSZYSTKIE połączenia:

    mo connect -R
    mo connect --remove-all

 ## Praca z pamięcią masową
 Po utworzeniu kilku połączeń użyj operacji `ls` , `cp` , `rm` , `meta` i `mirror`
 pracować z nimi.

 Każda ścieżka pliku, którą podajesz do polecenia, musi być poprzedzona nazwą połączenia
 odnosi się do. W poniższych przykładach zakładamy, że istnieją dwa połączenia o nazwach `conn1` i `conn2`

 ### Lista plików
 Wynikiem polecenia list jest seria obiektów JSON, po jednym w wierszu, reprezentujących pliki
 znaleziony. Obiekty te będą miały `name` i `type` i ewentualnie inne pola.

    mo ls conn1/some/path

 Lista plików rekurencyjnie:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Uwaga dotycząca zaszyfrowanego przechowywania**: Lista cykliczna nie jest jeszcze obsługiwana w przypadku połączeń szyfrowanych.
 Jednocześnie można wyświetlić tylko jeden katalog plików.

 Szczegółowa lista plików (ładnie wydrukowany JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lista plików rekursywnie i szczegółowo:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Zobacz pomoc do polecenia `ls` , opisuje wszystkie opcje:

    mo ls -h
    mo ls --help

 ### Zapisz plik na standardowe wyjście
 Polecenie `cat` wypisze plik na standardowe wyjście:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 W prawdziwym duchu UNIXa *(ale na pewno nie jest to praktyka!)* Polecenie `cat` **nie przyjmuje żadnych opcji**
 inne niż `-h` / `--help` , aby wyświetlić pomocne informacje.

 ### Kopiuj pliki
 Skopiuj pojedynczy plik z jednego telefonu komórkowego na drugi:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Skopiuj pojedynczy plik z jednego telefonu komórkowego do drugiego, zmieniając jego nazwę w miejscu docelowym:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekurencyjnie skopiuj katalog:

    mo cp -r conn1/some/directory conn2/some/dest/

 Zobacz pomoc do polecenia `cp` , opisuje wszystkie opcje:

    mo cp -h
    mo cp --help

 Uwaga: Kopiowanie plików nie jest zbyt szybkie, ponieważ obecnie wymaga pośredniego pliku tymczasowego.

 ### Usuń pliki
 Usuń pojedynczy plik:

    mo rm conn1/some/file.txt

 Usuń pojedynczy plik i nie narzekaj na żadne błędy:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Usuń katalog:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Usuń katalog i nie narzekaj na żadne błędy:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Wyświetl metadane
 Często warto znać metadane pliku bez pobierania całego pliku.

 Mobiletto jest w stanie zgłosić rozmiar pliku i czas ostatniej modyfikacji, a także nazwę i typ.

 Aby wyświetlić metadane:

    mo meta conn1/some/file.txt

 ### Katalogi lustrzane
 Odbicie lustrzane jest czymś więcej niż specjalnym przypadkiem `cp` , jest to osobne polecenie mobiletto, które otacza
 operacja kopiowania; działa nawet w przypadku wystąpienia błędów i śledzi liczbę sukcesów i błędów.

 Aby odzwierciedlić wszystko od conn1 do conn2:

    mo mirror conn1 conn2

 Aby wykonać kopię lustrzaną podkatalogu:

    mo mirror conn1/some/subdir conn2

 Aby wykonać kopię lustrzaną podkatalogu do innego podkatalogu:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
