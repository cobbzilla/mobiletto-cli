mobiletto-cli
 ==============
 ბრძანების ხაზის ინტერფეისი (CLI) [mobiletto]-ისთვის (https://www.npmjs.com/package/mobiletto)
 შენახვა.

 Mobiletto მხარს უჭერს კავშირებს Amazon S3-თან, Backblaze B2-თან და ადგილობრივ ფაილურ სისტემებთან.

 # წაიკითხეთ ეს სხვა ენაზე
 ეს README.md დოკუმენტი ითარგმნა [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) მეშვეობით
 **[Google Translate-ის მიერ მხარდაჭერილი ყველა ენა](https://cloud.google.com/translate/docs/languages)!**

 დარწმუნებული ვარ, რომ ეს არ არის სრულყოფილი, მაგრამ იმედი მაქვს, რომ ეს უკეთესია, ვიდრე არაფერი!

 [🇸🇦 არაბული](../ar/README.md)
 [🇧🇩 ბენგალური](../bn/README.md)
 [🇩🇪 გერმანული](../de/README.md)
 [🇺🇸 ინგლისური](../en/README.md)
 [🇪🇸 ესპანური](../es/README.md)
 [🇫🇷 ფრანგული](../fr/README.md)
 [🇹🇩 ჰაუსა](../ha/README.md)
 [🇮🇳 ჰინდი](../hi/README.md)
 [🇮🇩 ინდონეზიური](../id/README.md)
 [🇮🇹 იტალიური](../it/README.md)
 [🇯🇵 იაპონური](../ja/README.md)
 [🇰🇷 კორეული](../ko/README.md)
 [🇮🇳 მარანტი](../mr/README.md)
 [🇵🇱 პოლონური](../pl/README.md)
 [🇧🇷 პორტუგალიური](../pt/README.md)
 [🇷🇺 რუსული](../ru/README.md)
 [🇰🇪 სუაჰილი](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 თურქული](../tr/README.md)
 [🇵🇰 ურდუ](../ur/README.md)
 [🇻🇳 ვიეტნამური](../vi/README.md)
 [🇨🇳 ჩინური](../zh/README.md)


 **[📚 ... ყველა ენა ...](../README.md)**
 ----

 ### პრობლემაა README-ის ამ თარგმანში?
 ორიგინალის ეს კონკრეტული თარგმანი [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 შეიძლება იყოს ხარვეზები -- *შესწორებები ძალიან მისასალმებელია!* გთხოვთ, გამოაგზავნოთ [მოთხოვნა GitHub-ზე](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ან თუ არ გსიამოვნებთ ამის გაკეთება, [გახსენით საკითხი](https://github.com/cobbzilla/mobiletto-cli/issues)

 როდესაც შექმნით ახალ GitHub საკითხს თარგმანის შესახებ, გთხოვთ, გააკეთოთ:
 * ჩართეთ გვერდის URL (დააკოპირეთ/ჩასვით ბრაუზერის მისამართის ზოლიდან)
 * შეიტანეთ ზუსტი ტექსტი, რომელიც არასწორია (დააკოპირეთ/ჩასვით ბრაუზერიდან)
 * გთხოვთ აღწეროთ რა არის არასწორი -- არასწორია თარგმანი? ფორმატირება გატეხილია როგორმე?
 * გთხოვთ, შესთავაზოთ უკეთესი თარგმანის შეთავაზება, ან როგორ უნდა იყოს ტექსტის სწორად ფორმატირება
 * **Გმადლობთ!**

 ### წყარო
 * [mobiletto-cli GitHub-ზე](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli npm-ზე](https://www.npmjs.com/package/mobiletto-cli)

 # შიგთავსი
 * [ინსტალაცია და გამოყენება](#Installation-and-usage)
 * [npm პაკეტი](#npm-პაკეტი)
 * [წყაროდან](#წყაროდან)
 * [კავშირები](#Connections)
 * [შექმენით კავშირი](#Create-a-connection)
 * [სიის კავშირები](#List-connections)
 * [Dump Connection JSON config](#Dump-connection-JSON-config)
 * [კავშირის ამოღება](#Remove-a-connection)
 * [ამოშალე ყველა კავშირი](#Remove-all-connection)
 * [საწყობთან მუშაობა](#Working-with-storage)
 * [ფაილების სია](#List-files)
 * [ჩაწერეთ ფაილი stdout-ში](#Write-a-file-to-stdout)
 * [დააკოპირეთ ფაილები](#Copy-files)
 * [ფაილების წაშლა](#Delete-files)
 * [მეტამონაცემების ნახვა](#View-metadata)
 * [Mirror Directories](#Mirror-directories)

 ## ინსტალაცია და გამოყენება
 შეგიძლიათ დააინსტალიროთ და გაუშვათ `mobiletto-cli` ის საშუალებით ან პირდაპირ წყაროდან.

 ### npm პაკეტი
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### წყაროდან
 წყაროდან გასაშვებად დაგჭირდებათ nodejs v16+ და ნართი

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## კავშირები
 მობილურის ყველა საცავში წვდომა ხდება კავშირის საშუალებით.

 Mobiletto ამჟამად მხარს უჭერს კავშირებს ადგილობრივ ფაილურ სისტემასთან და Amazon S3 თაიგულებთან.

 კავშირები მითითებულია JSON ობიექტით, რომელიც ასე გამოიყურება:

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

 ყველა ვარიანტის და მათი მნიშვნელობებისა და მნიშვნელობების შესახებ სრული დეტალებისთვის იხილეთ
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### შექმენით კავშირი
 ახალი კავშირის შესაქმნელად, ჩვენ გვჭირდება ერთ-ერთი JSON ობიექტი.

 ჩვენ შეგვიძლია შევქმნათ ერთი ინტერაქტიულად, ან მივაწოდოთ ერთი ფაილის ან JSON ლიტერალურად:

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

 ### ჩამოთვალეთ კავშირები
 ჩამოთვალეთ ხელმისაწვდომი კავშირები:

    mo connect -l
    mo connect --list

 ### გადაყარეთ კავშირი JSON კონფიგურაცია
 აჩვენეთ სრული JSON კონფიგურაცია კავშირისთვის. **გაფრთხილება** ეს დაბეჭდავს გასაღებებს და საიდუმლოებებს stdout-ისთვის.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### კავშირის წაშლა
 ამოიღეთ ერთი კავშირი:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### წაშალეთ ყველა კავშირი
 ყველა კავშირის წაშლა:

    mo connect -R
    mo connect --remove-all

 ## საცავთან მუშაობა
 რამდენიმე კავშირის შექმნის შემდეგ გამოიყენეთ `ls` , `cp` , `rm` , `meta` და `mirror` ოპერაციები
 მათთან მუშაობა.

 ყველა ფაილის გზას, რომელსაც თქვენ აწვდით ბრძანებას, უნდა იყოს დატანილი კავშირის სახელით
 ეს ეხება. ქვემოთ მოცემულ მაგალითებში, ჩვენ ვვარაუდობთ, რომ არსებობს ორი კავშირი სახელად `conn1` და `conn2`

 ### ჩამოთვალეთ ფაილები
 სიის ბრძანების გამომავალი არის JSON ობიექტების სერია, თითო სტრიქონზე, რომელიც წარმოადგენს ფაილებს
 ნაპოვნია. ამ ობიექტებს ექნება `name` და `type` " და შესაძლოა სხვა ველები.

    mo ls conn1/some/path

 ჩამოთვალეთ ფაილები რეკურსიულად:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** დაშიფრული შენახვის შენიშვნა **: რეკურსიული ჩამონათვალი ჯერ არ არის მხარდაჭერილი დაშიფრული კავშირებისთვის.
 თქვენ შეგიძლიათ ჩამოთვალოთ ფაილების მხოლოდ ერთი დირექტორია ერთდროულად.

 ჩამოთვალეთ ფაილები სიტყვიერად (საკმაოდ დაბეჭდილი JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ჩამოთვალეთ ფაილები რეკურსიულად და სიტყვიერად:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 დახმარების ნახვა `ls` ბრძანებისთვის, აღწერს ყველა ვარიანტს:

    mo ls -h
    mo ls --help

 ### ჩაწერეთ ფაილი stdout-ისთვის
 `cat` ბრძანება დაბეჭდავს ფაილს stdout-ში:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 UNIX-ის ჭეშმარიტი სულისკვეთებით *(თუმცა რა თქმა უნდა არა პრაქტიკაში!)* mobiletto-ს `cat` ბრძანება **არ იღებს ვარიანტებს**
 გარდა `-h` / `--help` სასარგებლო ინფორმაციის ჩვენებისთვის.

 ### დააკოპირეთ ფაილები
 დააკოპირეთ ერთი ფაილი ერთი მობილურიდან მეორეზე:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 დააკოპირეთ ერთი ფაილი ერთი მობილურიდან მეორეზე, გადაარქვეთ სახელი დანიშნულების ადგილზე:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 რეკურსიულად დააკოპირეთ დირექტორია:

    mo cp -r conn1/some/directory conn2/some/dest/

 დახმარების ნახვა `cp` ბრძანებისთვის, აღწერს ყველა ვარიანტს:

    mo cp -h
    mo cp --help

 შენიშვნა: ფაილის კოპირება არ არის ძალიან სწრაფი, რადგან ის ამჟამად საჭიროებს შუამავალ ტემპ ფაილს.

 ### Წაშალე ფაილები
 წაშალეთ ერთი ფაილი:

    mo rm conn1/some/file.txt

 წაშალეთ ერთი ფაილი და ნუ უჩივით შეცდომებს:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 წაშალე დირექტორია:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 წაშალე დირექტორია და არ უჩიოდე შეცდომებს:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### მეტამონაცემების ნახვა
 ხშირად სასარგებლოა ფაილის მეტამონაცემების ცოდნა მთელი ფაილის ჩამოტვირთვის გარეშე.

 Mobiletto-ს შეუძლია მიუთითოს ფაილის ზომა და ბოლო შეცვლილი დრო, გარდა სახელისა და ტიპისა.

 მეტამონაცემების სანახავად:

    mo meta conn1/some/file.txt

 ### სარკის დირექტორიები
 Mirroring უფრო მეტია, ვიდრე `cp` ის განსაკუთრებული შემთხვევა, ეს არის ცალკე მობილური ბრძანება, რომელიც ახვევს
 კოპირების ოპერაცია; ის გრძელდება მაშინაც კი, როდესაც ხდება შეცდომები და თვალყური ადევნეთ წარმატებებისა და შეცდომების რაოდენობას.

 ყველაფრის ასახვა conn1-დან conn2-მდე:

    mo mirror conn1 conn2

 ქვედირექტორის ასახვა:

    mo mirror conn1/some/subdir conn2

 ქვედირექტორიის სხვა ქვედირექტორიაში ასახვა:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
