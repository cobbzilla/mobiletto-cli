mobiletto-cli
 ==============
 Интерфейс командной строки (CLI) для [mobiletto](https://www.npmjs.com/package/mobiletto)
 хранилище.

 Mobiletto поддерживает подключения к Amazon S3, Backblaze B2 и локальным файловым системам.

 # Прочтите это на другом языке
 Этот документ README.md был переведен с помощью [hokeylization](https://github.com/cobbzilla/hokeylization) на
 **[все языки, поддерживаемые Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Я уверен, что это не идеально, но я надеюсь, что это лучше, чем ничего!

 [🇸🇦 арабский](../ar/README.md)
 [🇧🇩 Бенгальский](../bn/README.md)
 [🇩🇪 Немецкий](../de/README.md)
 [🇺🇸 английский](../en/README.md)
 [🇪🇸 Испанский](../es/README.md)
 [🇫🇷 Французский](../fr/README.md)
 [🇹🇩 Хауса](../ha/README.md)
 [🇮🇳 Хинди](../hi/README.md)
 [🇮🇩 Индонезийский](../id/README.md)
 [🇮🇹 итальянский](../it/README.md)
 [🇯🇵 Японский](../ja/README.md)
 [🇰🇷 Корейский](../ko/README.md)
 [🇮🇳 Маранти](../mr/README.md)
 [🇵🇱 Польский](../pl/README.md)
 [🇧🇷 Португальский](../pt/README.md)
 [🇷🇺 Русский](../ru/README.md)
 [🇰🇪 Суахили](../sw/README.md)
 [🇵🇭 Тагальский](../tl/README.md)
 [🇹🇷 Турецкий](../tr/README.md)
 [🇵🇰 урду](../ur/README.md)
 [🇻🇳 Вьетнамский](../vi/README.md)
 [🇨🇳 Китайский](../zh/README.md)


 **[📚 ... Все языки ...](../README.md)**
 ----

 ### Есть ли проблема с этим переводом README?
 Этот конкретный перевод оригинального [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 может быть ошибочным -- *исправления очень приветствуются!* Пожалуйста, отправьте [запрос на извлечение на GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 или, если вам неудобно это делать, [откройте вопрос](https://github.com/cobbzilla/mobiletto-cli/issues)

 Когда вы создаете новый выпуск GitHub о переводе, сделайте следующее:
 * включить URL страницы (скопировать/вставить из адресной строки браузера)
 * включить точный текст, который неверен (скопировать/вставить из браузера)
 * пожалуйста, опишите, что не так -- перевод неверен? форматирование как-то нарушено?
 * любезно предложите лучший перевод или как текст должен быть правильно отформатирован
 * **Спасибо!**

 # Содержание
 * [Источник](#Источник)
 * [Поддержка и финансирование](#Поддержка-и-финансирование)
 * [Установка и использование](#Установка и использование)
 * [пакет npm](#npm-пакет)
 * [Из источника](#Из источника)
 * [Подключения](#Подключения)
 * [Создать соединение](#Создать соединение)
 * [Список соединений](#Список-соединений)
 * [Дамп конфигурации соединения JSON](#Dump-connection-JSON-config)
 * [Удалить соединение](#Удалить соединение)
 * [Удалить все подключения](#Удалить все подключения)
 * [Работа с хранилищем](#Working-with-storage)
 * [Список файлов](#Список-файлов)
 * [Записать файл в стандартный вывод](#Записать файл в стандартный вывод)
 * [Копировать файлы](#Копировать-файлы)
 * [Удалить файлы](#Удалить файлы)
 * [Просмотреть метаданные](#View-metadata)
 * [Зеркальные каталоги](#Зеркальные каталоги)

 ### Источник
 * [mobiletto-cli на GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli на npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Поддержка и финансирование
 Я пытаюсь стать профессиональным разработчиком программного обеспечения с открытым исходным кодом. я работаю в
 в индустрии программного обеспечения на протяжении многих лет, я основал успешные компании и продал их публичным компаниям.
 Недавно я потерял работу, и у меня действительно нет другой работы.

 Итак, я собираюсь попробовать написать полезное программное обеспечение и посмотреть, сработает ли оно.

 Если вам нравится использовать это программное обеспечение, я был бы искренне благодарен даже за
 наименьший [ежемесячный взнос через Patreon](https://www.patreon.com/cobbzilla)

 *Спасибо!*

 ## Установка и использование
 Вы можете установить и запустить `mobiletto-cli` через npm или напрямую из исходного кода.

 ### пакет npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Из источника
 Для запуска из исходников вам понадобятся nodejs v16+ и yarn.

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Соединения
 Доступ ко всему хранилищу mobiletto осуществляется через соединение.

 В настоящее время Mobiletto поддерживает подключения к локальному хранилищу файловой системы и корзинам Amazon S3.

 Соединения задаются объектом JSON, который выглядит следующим образом:

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

 Подробную информацию обо всех параметрах, их значениях и значениях см.
 [документы для мобильных устройств](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Создать соединение
 Чтобы создать новое соединение, нам нужен один из этих объектов JSON.

 Мы можем создать его в интерактивном режиме или предоставить через файл или литерал JSON:

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

 ### Список подключений
 Список доступных подключений:

    mo connect -l
    mo connect --list

 ### Дамп конфигурации соединения JSON
 Показать полную конфигурацию JSON для подключения. **ВНИМАНИЕ** ключи и секреты будут выводиться на стандартный вывод.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Удалить соединение
 Удалить одно соединение:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Удалить все подключения
 Удалить ВСЕ соединения:

    mo connect -R
    mo connect --remove-all

 ## Работа с хранилищем
 После того, как вы создали несколько подключений, используйте `ls` , `cp` , `rm` , `meta` и `mirror`
 работать с ними.

 Каждый путь к файлу, который вы предоставляете команде, должен иметь префикс имени соединения.
 это относится к. В приведенных ниже примерах мы предполагаем, что существуют два соединения с именами `conn1` и `conn2`

 ### Список файлов
 Вывод команды списка представляет собой серию объектов JSON, по одному в строке, представляющих файлы.
 найденный. Эти объекты будут иметь `name` и `type` и, возможно, другие поля.

    mo ls conn1/some/path

 Список файлов рекурсивно:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Примечание о зашифрованном хранилище**: рекурсивный список пока не поддерживается для зашифрованных соединений.
 Вы можете перечислить только один каталог файлов за раз.

 Подробный список файлов (красивый JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Список файлов рекурсивно и подробно:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Посмотреть справку по `ls` , описывает все параметры:

    mo ls -h
    mo ls --help

 ### Записать файл в стандартный вывод
 Команда `cat` напечатает файл на стандартный вывод:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 В истинном духе UNIX *(но, конечно, не на практике!)* команда mobiletto `cat` **не принимает никаких параметров**
 кроме `-h` / `--help` для отображения полезной информации.

 ### Копировать файлы
 Скопируйте один файл с одного мобильного телефона на другой:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Скопируйте один файл с одного мобильника на другой, переименовав его в месте назначения:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Рекурсивно скопировать каталог:

    mo cp -r conn1/some/directory conn2/some/dest/

 Посмотреть справку по `cp` , описывает все параметры:

    mo cp -h
    mo cp --help

 Примечание. Копирование файлов не очень быстрое, поскольку в настоящее время для этого требуется промежуточный временный файл.

 ### Удалить файлы
 Удалить один файл:

    mo rm conn1/some/file.txt

 Удалите один файл и не жалуйтесь ни на какие ошибки:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Удалить каталог:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Удалите каталог и не жалуйтесь на ошибки:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Просмотр метаданных
 Часто полезно знать метаданные файла, не загружая файл целиком.

 Mobiletto может сообщать размер файла и время последнего изменения, в дополнение к имени и типу.

 Чтобы просмотреть метаданные:

    mo meta conn1/some/file.txt

 ### Зеркальные каталоги
 Зеркалирование — это больше, чем частный случай `cp` , это отдельная команда mobiletto, обертывающая
 операция копирования; он продолжается даже при возникновении ошибок и отслеживает количество успехов и ошибок.

 Чтобы отразить все из conn1 в conn2:

    mo mirror conn1 conn2

 Чтобы отразить подкаталог:

    mo mirror conn1/some/subdir conn2

 Чтобы отразить подкаталог в другом подкаталоге:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
