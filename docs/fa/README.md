mobiletto-cli
 ==============
 یک رابط خط فرمان (CLI) برای [mobiletto](https://www.npmjs.com/package/mobiletto)
 ذخیره سازی.

 Mobiletto از اتصال به Amazon S3، Backblaze B2 و فایل سیستم های محلی پشتیبانی می کند.

 # این را به زبان دیگری بخوانید
 این سند README.md از طریق [hokeylization](https://github.com/cobbzilla/hokeylization) به
 **[هر زبانی که توسط Google Translate پشتیبانی می‌شود](https://cloud.google.com/translate/docs/languages)!**

 من مطمئنم که کامل نیست، اما امیدوارم از هیچی بهتر باشد!

 [🇸🇦 عربی](../ar/README.md)
 [🇧🇩 بنگالی](../bn/README.md)
 [🇩🇪 آلمانی](../de/README.md)
 [🇺🇸 انگلیسی](../en/README.md)
 [🇪🇸 اسپانیایی](../es/README.md)
 [🇫🇷 فرانسوی](../fr/README.md)
 [🇹🇩 هاوسا](../ha/README.md)
 [🇮🇳 هندی](../hi/README.md)
 [🇮🇩 اندونزیایی](../id/README.md)
 [🇮🇹 ایتالیایی](../it/README.md)
 [🇯🇵 ژاپنی](../ja/README.md)
 [🇰🇷 کره ای](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 لهستانی](../pl/README.md)
 [🇧🇷 پرتغالی](../pt/README.md)
 [🇷🇺 روسی](../ru/README.md)
 [🇰🇪 سواحیلی](../sw/README.md)
 [🇵🇭 تاگالوگ](../tl/README.md)
 [🇹🇷 ترکی](../tr/README.md)
 [🇵🇰 اردو](../ur/README.md)
 [🇻🇳 ویتنامی](../vi/README.md)
 [🇨🇳 چینی](../zh/README.md)


 **[📚 ... همه زبان ها ...](../README.md)**
 ----

 ### آیا این ترجمه README مشکلی دارد؟
 این ترجمه خاص از [README] اصلی (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 ممکن است ناقص باشد -- *اصلاحات بسیار خوش آمدید!* لطفاً [درخواست کشش در GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls) را ارسال کنید.
 یا اگر از انجام آن راحت نیستید، [مشکلی را باز کنید](https://github.com/cobbzilla/mobiletto-cli/issues)

 هنگامی که یک مشکل جدید GitHub در مورد ترجمه ایجاد می کنید، لطفاً این کار را انجام دهید:
 * شامل URL صفحه (کپی/پیست از نوار آدرس مرورگر)
 * متن دقیق اشتباه را شامل شود (کپی/پیست از مرورگر)
 * لطفاً توضیح دهید که چه چیزی اشتباه است -- آیا ترجمه صحیح نیست؟ آیا قالب بندی به نوعی خراب است؟
 * لطفاً پیشنهادی برای ترجمه بهتر یا نحوه قالب بندی صحیح متن ارائه دهید
 * **متشکرم!**

 # فهرست
 * [منبع](#منبع)
 * [Support and Funding](#Support-and-Funding)
 * [نصب و استفاده](#نصب-و-استفاده)
 * [بسته npm](#npm-package)
 * [از منبع](#از منبع)
 * [اتصالات](# اتصالات)
 * [ایجاد یک اتصال](#Create-a-connection)
 * [لیست اتصالات](#List-connections)
 * [پیکربندی JSON اتصال حذف](# Dump-connection-JSON-config)
 * [حذف اتصال](#Remove-a-connection)
 * [حذف همه اتصالات](#Remove-all-connections)
 * [کار با ذخیره‌سازی](#کار با ذخیره‌سازی)
 * [فهرست فایل ها](#List-Files)
 * [یک فایل در stdout بنویسید](#Write-a-file-to-stdout)
 * [کپی فایل ها](#Copy-files)
 * [حذف فایل ها](#Delete-files)
 * [مشاهده فراداده](#View-metadata)
 * [Mirror Directories](#Mirror-directories)

 ### منبع
 * [mobiletto-cli در GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli در npm](https://www.npmjs.com/package/mobiletto-cli)

 ## پشتیبانی و تامین مالی
 من سعی می کنم یک توسعه دهنده نرم افزار متن باز حرفه ای باشم. من در حال کار بوده ام
 در صنعت نرم افزار سال هاست که شرکت های موفقی راه اندازی کرده ام و آنها را به شرکت های دولتی فروخته ام.
 اخیراً کارم را از دست داده‌ام و واقعاً کار دیگری ندارم

 بنابراین من سعی می کنم نرم افزار مفید بنویسم و ببینم آیا کار می کند یا خیر

 اگر از استفاده از این نرم افزار لذت می برید، من از صمیم قلب سپاسگزار خواهم بود
 کوچکترین [کمک مالی ماهانه از طریق Patreon](https://www.patreon.com/cobbzilla)

 *متشکرم!*

 ## نصب و استفاده
 می‌توانید `mobiletto-cli` از طریق npm یا مستقیماً از منبع نصب و اجرا کنید.

 ### بسته npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### از منبع
 برای اجرا از منبع، به nodejs v16+ و yarn نیاز دارید

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## اتصالات
 تمام فضای ذخیره سازی موبایل از طریق یک اتصال قابل دسترسی است.

 Mobiletto در حال حاضر از اتصالات به ذخیره سازی سیستم فایل محلی و سطل های Amazon S3 پشتیبانی می کند.

 اتصالات توسط یک شی JSON که به شکل زیر است مشخص می شوند:

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

 برای جزئیات کامل در مورد همه گزینه ها و مقادیر و معانی آنها، به ادامه مطلب مراجعه کنید
 [موبایلتو اسناد](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### یک اتصال ایجاد کنید
 برای ایجاد یک اتصال جدید، به یکی از این اشیاء JSON نیاز داریم.

 ما می توانیم به صورت تعاملی یک مورد ایجاد کنیم یا از طریق یک فایل یا JSON به معنای واقعی کلمه عرضه کنیم:

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

 ### اتصالات را فهرست کنید
 لیست اتصالات موجود:

    mo connect -l
    mo connect --list

 ### تنظیمات JSON را تخلیه کنید
 نمایش پیکربندی کامل JSON برای اتصال. **اخطار** این کلیدها و اسرار را برای stdout چاپ می کند.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### یک اتصال را حذف کنید
 یک اتصال را حذف کنید:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### همه اتصالات را حذف کنید
 تمام اتصالات را حذف کنید:

    mo connect -R
    mo connect --remove-all

 ## کار با ذخیره سازی
 پس از ایجاد برخی از اتصالات، از عملیات `ls` »، `cp` »، `rm` ، `meta` و `mirror` استفاده کنید.
 تا با آنها کار کند.

 هر مسیر فایلی که به یک فرمان ارائه می کنید باید با نام اتصال پیشوند باشد
 اشاره دارد به. در مثال‌های زیر، فرض می‌کنیم دو اتصال به نام‌های `conn1` » و `conn2`

 ### لیست فایل ها
 خروجی یک دستور لیست یک سری از اشیاء JSON است، یکی در هر خط، که فایل ها را نشان می دهد
 یافت. این اشیاء `name` و `type` و احتمالاً فیلدهای دیگری خواهند داشت.

    mo ls conn1/some/path

 فهرست کردن فایل ها به صورت بازگشتی:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **یادداشت ذخیره سازی رمزگذاری شده**: فهرست بازگشتی هنوز برای اتصالات رمزگذاری شده پشتیبانی نمی شود.
 شما می توانید تنها یک فهرست از فایل ها را در یک زمان فهرست کنید.

 فایل‌ها را به‌طور کامل فهرست کنید (JSON با چاپ زیبا):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 فهرست کردن فایل ها به صورت بازگشتی و کلامی:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 مشاهده کمک برای دستور `ls` ، همه گزینه ها را شرح می دهد:

    mo ls -h
    mo ls --help

 ### یک فایل برای stdout بنویسید
 دستور `cat` یک فایل را در stdout چاپ می کند:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 در روح واقعی یونیکس *(اما مطمئناً عملی نیست!)* دستور `cat` ** هیچ گزینه ای ندارد**
 به غیر از `-h` / `--help` برای نمایش اطلاعات مفید.

 ### فایل ها را کپی کنید
 یک فایل واحد را از یک موبایلتو به دیگری کپی کنید:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 یک فایل را از یک موبایل به دیگری کپی کنید و نام آن را در مقصد تغییر دهید:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 به صورت بازگشتی یک دایرکتوری را کپی کنید:

    mo cp -r conn1/some/directory conn2/some/dest/

 مشاهده کمک برای دستور `cp` ، همه گزینه‌ها را توصیف می‌کند:

    mo cp -h
    mo cp --help

 توجه: کپی کردن فایل خیلی سریع نیست، زیرا در حال حاضر به یک فایل موقت میانی نیاز دارد.

 ### فایلهاروحذف کن
 حذف یک فایل:

    mo rm conn1/some/file.txt

 یک فایل را حذف کنید و از هیچ خطایی شکایت نکنید:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 حذف یک دایرکتوری:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 دایرکتوری را حذف کنید و از هیچ خطایی شکایت نکنید:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### مشاهده ابرداده
 دانستن فراداده یک فایل، بدون دانلود کل فایل، اغلب مفید است.

 Mobiletto قادر است علاوه بر نام و نوع، اندازه فایل و زمان آخرین تغییر را گزارش کند.

 برای مشاهده متادیتا:

    mo meta conn1/some/file.txt

 ### دایرکتوری های آینه ای
 Mirroring بیش از یک مورد خاص از `cp` است، این یک فرمان جداگانه موبایل است که
 عملیات کپی؛ حتی زمانی که خطا رخ می دهد، ادامه می یابد و تعداد موفقیت ها و خطاها را دنبال می کند.

 برای انعکاس همه چیز از conn1 به conn2:

    mo mirror conn1 conn2

 برای انعکاس یک زیر شاخه:

    mo mirror conn1/some/subdir conn2

 برای انعکاس یک زیرشاخه به زیر شاخه دیگر:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
