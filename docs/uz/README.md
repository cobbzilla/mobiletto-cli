mobiletto-cli
 ==============
 [mobiletto](https://www.npmjs.com/package/mobiletto) uchun buyruq qatori interfeysi (CLI)
 saqlash.

 Mobiletto Amazon S3, Backblaze B2 va mahalliy fayl tizimlariga ulanishni qo'llab-quvvatlaydi.

 # Buni boshqa tilda o'qing
 Ushbu README.md hujjati [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) orqali tarjima qilingan
 **[Google Translate tomonidan qo‘llab-quvvatlanadigan barcha tillar](https://cloud.google.com/translate/docs/languages)!**

 Ishonchim komilki, bu mukammal emas, lekin umid qilamanki, bu hech narsadan yaxshiroq!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengal](../bn/README.md)
 [🇩🇪 Nemis](../de/README.md)
 [🇺🇸 Ingliz tili](../en/README.md)
 [🇪🇸 Ispancha](../es/README.md)
 [🇫🇷 Fransuzcha](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziya](../id/README.md)
 [🇮🇹 Italiancha](../it/README.md)
 [🇯🇵 Yapon](../ja/README.md)
 [🇰🇷 Koreys](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polsha](../pl/README.md)
 [🇧🇷 Portugalcha](../pt/README.md)
 [🇷🇺 Ruscha](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkcha](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vetnamcha](../vi/README.md)
 [🇨🇳 Xitoy](../zh/README.md)


 **[📚 ... Barcha tillar ...](../README.md)**
 ----

 ### README tarjimasida muammo bormi?
 Asl nusxaning ushbu maxsus tarjimasi [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 nuqsonli boʻlishi mumkin -- *tuzatishlar juda mamnuniyat bilan qabul qilinadi!* Iltimos, [GitHub’da tortish soʻrovi](https://github.com/cobbzilla/mobiletto-cli/pulls) yuboring.
 yoki buni qilish sizga mos kelmasa, [muammoni oching](https://github.com/cobbzilla/mobiletto-cli/issues)

 Tarjima haqida yangi GitHub muammosini yaratganingizda, iltimos:
 * sahifa URL manzilini qo'shing (brauzer manzil satridan nusxalash/joylashtirish)
 * noto'g'ri bo'lgan aniq matnni kiriting (brauzerdan nusxalash/joylashtirish)
 * nima noto'g'ri ekanligini tushuntirib bering -- tarjima noto'g'ri? formatlash qandaydir tarzda buzilganmi?
 * Yaxshiroq tarjima bo'yicha taklif yoki matnni qanday qilib to'g'ri formatlash kerakligini taklif qiling
 * **Rahmat!**

 ### Manba
 * [GitHub-da mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # Tarkib
 * [O'rnatish va foydalanish](#O'rnatish va foydalanish)
 * [npm paketi](#npm-paket)
 * [Manbadan](#Manbadan)
 * [Ulanishlar](#Ulanishlar)
 * [Ulanish yaratish](#Ulanishni yaratish)
 * [Ulanishlar roʻyxati](#Roʻyxat-bogʻlanishlar)
 * [Dump ulanishi JSON konfiguratsiyasi](#Dump-connection-JSON-config)
 * [Ulanishni o'chirish](#Ulanishni o'chirish)
 * [Barcha ulanishlarni o'chirish](#Remove-all-connections)
 * [Saqlash bilan ishlash](#Saqlash bilan ishlash)
 * [Fayllar roʻyxati](#Roʻyxat-fayllar)
 * [Stdout-ga fayl yozish](#Write-a-file-to-stdout)
 * [Fayllarni nusxalash](#Fayllarni nusxalash)
 * [Fayllarni o'chirish](#Delete-fayllar)
 * [Metamaʼlumotlarni koʻrish](#Metamaʼlumotlarni koʻrish)
 * [Oyna kataloglari](#Mirror-kataloglar)

 ## O'rnatish va foydalanish
 Siz " `mobiletto-cli` npm orqali yoki to'g'ridan-to'g'ri manbadan o'rnatishingiz va ishga tushirishingiz mumkin.

 ### npm paketi
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Manbadan
 Manbadan ishlash uchun sizga nodejs v16+ va ip kerak bo'ladi

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Ulanishlar
 Barcha mobiletto xotirasiga ulanish orqali kirish mumkin.

 Hozirda Mobiletto mahalliy fayl tizimini saqlash va Amazon S3 chelaklariga ulanishni qo'llab-quvvatlaydi.

 Ulanishlar JSON ob'ekti tomonidan belgilanadi, u quyidagicha ko'rinadi:

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

 Barcha variantlar va ularning qiymatlari va ma'nolari haqida to'liq ma'lumot olish uchun qarang
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Ulanish yarating
 Yangi ulanishni yaratish uchun bizga ushbu JSON obyektlaridan biri kerak.

 Biz interaktiv tarzda yaratishimiz yoki fayl yoki JSON literal orqali ta'minlashimiz mumkin:

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

 ### Ulanishlar roʻyxati
 Mavjud ulanishlar ro'yxati:

    mo connect -l
    mo connect --list

 ### JSON konfiguratsiyasini tashlab yuborish
 Ulanish uchun toʻliq JSON konfiguratsiyasini koʻrsating. **DIQQAT** bu kalitlar va sirlarni stdout uchun chop etadi.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Ulanishni olib tashlang
 Bitta ulanishni olib tashlang:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Barcha ulanishlarni olib tashlang
 BARCHA ulanishlarni olib tashlang:

    mo connect -R
    mo connect --remove-all

 ## Saqlash bilan ishlash
 Ba'zi ulanishlarni yaratganingizdan so'ng, " `ls` ", "cp", `rm` `cp` , " `meta` va `mirror` foydalaning.
 ular bilan ishlash.

 Buyruqga taqdim etgan har bir fayl yo'li ulanish nomi bilan oldindan belgilanishi kerak
 nazarda tutadi. Quyidagi misollarda " `conn1` `conn2` nomli ikkita ulanish mavjud deb taxmin qilamiz.

 ### Ro'yxat fayllari
 Ro'yxat buyrug'ining chiqishi fayllarni ifodalovchi har bir satrda bittadan JSON ob'ektlari seriyasidir
 topildi. Ushbu ob'ektlar " `name` " va " `type` " va boshqa maydonlarga ega bo'ladi.

    mo ls conn1/some/path

 Fayllarni rekursiv ro'yxatlash:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Shifrlangan xotira qaydnomasi**: shifrlangan ulanishlar uchun rekursiv ro‘yxat hali qo‘llab-quvvatlanmaydi.
 Bir vaqtning o'zida faqat bitta fayl katalogini ro'yxatga olishingiz mumkin.

 Fayllarni batafsil ro'yxatlash (juda yaxshi chop etilgan JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Fayllarni rekursiv va batafsil ro'yxatlash:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` buyrug'i uchun yordamni ko'rish, barcha variantlarni tavsiflaydi:

    mo ls -h
    mo ls --help

 ### stdout-ga fayl yozing
 " `cat` " buyrug'i faylni stdout-ga chop etadi:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Haqiqiy UNIX ruhida *(ammo bu amalda emas!)* mobiletto-ning “ `cat` ” buyrug'i **hech qanday variantni talab qilmaydi**
 foydali ma'lumotlarni ko'rsatish uchun `-h` / `--help` dan tashqari.

 ### Fayllarni nusxalash
 Bitta faylni bir mobil telefondan boshqasiga nusxalash:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Bitta faylni bir mobil telefondan boshqasiga nusxalash va uni manzilda qayta nomlash:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Katalogni takroriy nusxa ko'chirish:

    mo cp -r conn1/some/directory conn2/some/dest/

 " `cp` buyrug'i uchun yordamni ko'rish, barcha variantlarni tavsiflaydi:

    mo cp -h
    mo cp --help

 Eslatma: Faylni nusxalash unchalik tez emas, chunki u hozirda vositachi vaqtinchalik faylni talab qiladi.

 ### Fayllarni o'chirish
 Bitta faylni o'chirish:

    mo rm conn1/some/file.txt

 Bitta faylni o'chiring va xatolar haqida shikoyat qilmang:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Katalogni o'chirish:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Katalogni o'chiring va xatolar haqida shikoyat qilmang:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Metamaʼlumotlarni koʻrish
 Ko'pincha faylning metama'lumotlarini butun faylni yuklab olmasdan bilish foydalidir.

 Mobiletto nomi va turidan tashqari fayl hajmi va oxirgi o'zgartirilgan vaqt haqida xabar berishi mumkin.

 Metamaʼlumotlarni koʻrish uchun:

    mo meta conn1/some/file.txt

 ### Ko'zgu kataloglari
 Ko'zgu bu "cp" ning maxsus holatidan ko'ra ko'proq, bu alohida `cp` buyrug'i bo'lib, uni o'rab oladi.
 nusxa ko'chirish operatsiyasi; u xatolar yuzaga kelganda ham davom etadi va muvaffaqiyatlar va xatolar sonini kuzatib boradi.

 Hamma narsani conn1 dan conn2 ga aks ettirish uchun:

    mo mirror conn1 conn2

 Pastki katalogni aks ettirish uchun:

    mo mirror conn1/some/subdir conn2

 Kichik katalogni boshqa pastki katalogga aks ettirish uchun:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
