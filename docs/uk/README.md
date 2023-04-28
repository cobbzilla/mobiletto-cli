mobiletto-cli
 ==============
 Інтерфейс командного рядка (CLI) для [mobiletto](https://www.npmjs.com/package/mobiletto)
 зберігання.

 Mobiletto підтримує підключення до Amazon S3, Backblaze B2 і локальних файлових систем.

 # Прочитайте це іншою мовою
 Цей документ README.md було перекладено за допомогою [hokeylization](https://github.com/cobbzilla/hokeylization) на
 **[усі мови, які підтримує Перекладач Google](https://cloud.google.com/translate/docs/languages)!**

 Я впевнений, що це не ідеально, але я сподіваюся, що це краще, ніж нічого!

 [🇸🇦 арабською](../ar/README.md)
 [🇧🇩 Бенгальська](../bn/README.md)
 [🇩🇪 німецька](../de/README.md)
 [🇺🇸 англійською](../en/README.md)
 [🇪🇸 іспанська](../es/README.md)
 [🇫🇷 французька](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Хінді](../hi/README.md)
 [🇮🇩 індонезійська](../id/README.md)
 [🇮🇹 італійська](../it/README.md)
 [🇯🇵 японська](../ja/README.md)
 [🇰🇷 Корейська](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 польською](../pl/README.md)
 [🇧🇷 португальською](../pt/README.md)
 [🇷🇺 російська](../ru/README.md)
 [🇰🇪 суахілі](../sw/README.md)
 [🇵🇭 Тагальська](../tl/README.md)
 [🇹🇷 турецька](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 в'єтнамська](../vi/README.md)
 [🇨🇳 китайська](../zh/README.md)


 **[📚 ... Усі мови ...](../README.md)**
 ----

 ### Чи є проблема з цим перекладом README?
 Цей конкретний переклад оригіналу [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 може мати недоліки -- *виправлення дуже вітаються!* Надішліть [запит на витягування на GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 або якщо вам не зручно це робити, [відкрийте проблему](https://github.com/cobbzilla/mobiletto-cli/issues)

 Коли ви створюєте нову проблему GitHub щодо перекладу, виконайте:
 * включити URL-адресу сторінки (скопіювати/вставити з адресного рядка браузера)
 * включити точний неправильний текст (скопіювати/вставити з браузера)
 * опишіть, будь ласка, що не так -- переклад невірний? форматування якось порушено?
 * люб'язно запропонуйте кращий переклад або те, як правильно оформити текст
 * **Дякую!**

 # Вміст
 * [Джерело](#Джерело)
 * [Підтримка та фінансування](#Support-and-Funding)
 * [Встановлення та використання](#Installation-and-usage)
 * [пакет npm](#npm-пакет)
 * [З джерела](#З джерела)
 * [Підключення](#Підключення)
 * [Створити підключення](#Create-a-connection)
 * [Список підключень](#List-connections)
 * [Дамп конфігурації підключення JSON](#Dump-connection-JSON-config)
 * [Видалити підключення](#Remove-a-connection)
 * [Видалити всі підключення](#Remove-all-connections)
 * [Робота зі сховищем](#Working-with-storage)
 * [Список файлів](#Список-файлів)
 * [Записати файл у stdout](#Write-a-file-to-stdout)
 * [Копіювати файли](#Copy-files)
 * [Видалити файли](#Delete-files)
 * [Переглянути метадані](#View-metadata)
 * [Дзеркальні каталоги](#Mirror-directories)

 ### Джерело
 * [mobiletto-cli на GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli на npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Підтримка та фінансування
 Я намагаюся бути професійним розробником програмного забезпечення з відкритим кодом. Я працював у
 У індустрії програмного забезпечення протягом багатьох років я створював успішні компанії та продавав їх державним компаніям.
 Нещодавно я втратив роботу, і в мене насправді немає іншої роботи

 Тож я спробую написати корисне програмне забезпечення та перевірю, чи це спрацює

 Якщо вам подобається користуватися цією програмою, я буду щиро вдячний навіть за
 найменший [щомісячний внесок через Patreon](https://www.patreon.com/cobbzilla)

 *Дякую!*

 ## Встановлення та використання
 Ви можете встановити та запустити `mobiletto-cli` через npm або безпосередньо з джерела.

 ### пакет npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### З джерела
 Для запуску з джерела вам знадобляться nodejs v16+ і yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Підключення
 Доступ до сховища mobiletto здійснюється через підключення.

 Наразі Mobiletto підтримує підключення до локального сховища файлової системи та сегментів Amazon S3.

 З’єднання визначаються об’єктом JSON, який виглядає так:

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

 Щоб отримати повну інформацію про всі параметри, їх значення та значення, див
 [документи mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Створіть з'єднання
 Щоб створити нове підключення, нам потрібен один із цих об’єктів JSON.

 Ми можемо створити його в інтерактивному режимі або надати його через файл або літерал JSON:

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

 ### Список з'єднань
 Список доступних підключень:

    mo connect -l
    mo connect --list

 ### Дамп конфігурації JSON підключення
 Показати повну конфігурацію JSON для підключення. **УВАГА** це виведе ключі та секрети на stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Видаліть з'єднання
 Видаліть одне з'єднання:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Видалити всі підключення
 Видалити ВСІ підключення:

    mo connect -R
    mo connect --remove-all

 ## Робота зі сховищем
 Створивши кілька з’єднань, використовуйте `ls` , `cp` , `rm` , `meta` і `mirror`
 працювати з ними.

 Перед кожним шляхом до файлу, який ви надаєте команді, має бути ім’я з’єднання
 це стосується. У наведених нижче прикладах ми припускаємо, що існують два з’єднання з назвами `conn1` і `conn2`

 ### Список файлів
 Результатом команди списку є серія об’єктів JSON, по одному на рядок, що представляють файли
 знайдено. Ці об’єкти матимуть `name` і `type` , а також, можливо, інші поля.

    mo ls conn1/some/path

 Рекурсивний список файлів:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Примітка щодо зашифрованого сховища**: рекурсивний список ще не підтримується для зашифрованих з’єднань.
 Одночасно можна перерахувати лише один каталог файлів.

 Дослівний список файлів (JSON з красивим друком):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Список файлів рекурсивно та докладно:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Переглянути довідку для команди `ls` , описує всі параметри:

    mo ls -h
    mo ls --help

 ### Записати файл у stdout
 Команда `cat` виведе файл на stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 У справжньому дусі UNIX *(проте, звичайно, це не практика!)* команда mobiletto `cat` **не приймає жодних опцій**
 крім `-h` / `--help` для відображення корисної інформації.

 ### Копіювати файли
 Скопіюйте один файл з одного мобільного на інший:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Скопіюйте один файл з одного mobiletto на інший, перейменувавши його в місці призначення:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Рекурсивне копіювання каталогу:

    mo cp -r conn1/some/directory conn2/some/dest/

 Переглянути довідку для команди `cp` , описує всі параметри:

    mo cp -h
    mo cp --help

 Примітка. Копіювання файлів не надто швидке, оскільки наразі для цього потрібен проміжний тимчасовий файл.

 ### Видалити файли
 Видалити один файл:

    mo rm conn1/some/file.txt

 Видаліть один файл і не скаржтеся на помилки:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Видалити каталог:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Видаліть каталог і не скаржтеся на помилки:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Переглянути метадані
 Часто буває корисно знати метадані файлу, не завантажуючи весь файл.

 Mobiletto може повідомити розмір файлу та час останньої зміни, крім імені та типу.

 Щоб переглянути метадані:

    mo meta conn1/some/file.txt

 ### Дзеркальні каталоги
 Дзеркалювання — це більше, ніж окремий випадок `cp` , це окрема команда mobiletto, яка обертає
 операція копіювання; він продовжується, навіть якщо виникають помилки, і відстежує кількість успіхів і помилок.

 Щоб відобразити все від conn1 до conn2:

    mo mirror conn1 conn2

 Щоб віддзеркалити підкаталог:

    mo mirror conn1/some/subdir conn2

 Щоб віддзеркалити підкаталог в інший підкаталог:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
