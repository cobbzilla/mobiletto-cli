mobiletto-cli
 ===========
 የትእዛዝ መስመር በይነገጽ (CLI) ለ [mobiletto](https://www.npmjs.com/package/mobiletto)
 ማከማቻ.

 ሞባይልቶ ከአማዞን S3፣ Backblaze B2 እና አካባቢያዊ የፋይል ሲስተሞች ጋር ግንኙነቶችን ይደግፋል።

 # ይህንን በሌላ ቋንቋ ያንብቡ
 ይህ README.md ሰነድ በ[hokeylization](https://github.com/cobbzilla/hokeylization) በኩል ተተርጉሟል፣ ወደ
 **[ሁሉም ቋንቋ በGoogle ትርጉም ይደገፋል](https://cloud.google.com/translate/docs/languages)!**

 ፍጹም እንዳልሆነ እርግጠኛ ነኝ፣ ግን ከምንም የተሻለ እንደሚሆን ተስፋ አደርጋለሁ!

 [🇸🇦 አረብኛ](ሰነዶች/ar/README.md)
 [🇧🇩 ቤንጋሊ](ሰነዶች/bn/README.md)
 [🇩🇪 ጀርመንኛ](../de/README.md)
 [🇺🇸 እንግሊዝኛ](ሰነዶች/en/README.md)
 [🇪🇸 ስፓኒሽ](ሰነዶች/es/README.md)
 [🇫🇷 ፈረንሳይኛ](ሰነዶች/fr/README.md)
 [🇹🇩 ሃውሳ](../ha/README.md)
 [🇮🇳 ሂንዲ](ሰነዶች/hi/README.md)
 [🇮🇩 ኢንዶኔዥያ](ሰነዶች/መታወቂያ/README.md)
 [🇮🇹 ጣልያንኛ](ሰነዶች/it/README.md)
 [🇯🇵 ጃፓንኛ](../ja/README.md)
 [🇰🇷 ኮሪያኛ](../ko/README.md)
 [🇮🇳 ማራንቲ](ሰነዶች/ሚስተር/README.md)
 [🇵🇱 ፖላንድኛ](ሰነዶች/pl/README.md)
 [🇧🇷 ፖርቱጋልኛ](ሰነዶች/pt/README.md)
 [🇷🇺 ሩሲያኛ](../ru/README.md)
 [🇰🇪 ስዋሂሊ](ሰነዶች/sw/README.md)
 [🇵🇭 ታጋሎግ](../tl/README.md)
 [🇹🇷 ቱርክኛ](../tr/README.md)
 [🇵🇰 ኡርዱ](../ur/README.md)
 [🇻🇳 ቬትናምኛ](ሰነዶች/ቪ/README.md)
 [🇨🇳 ቻይንኛ](../zh/README.md)


 **[📚 ... ሁሉም ቋንቋዎች ...](ሰነዶች/README.md)**
 ----

 ### በዚህ የ README ትርጉም ላይ ችግር አለ?
 ይህ ልዩ የዋናው [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) ትርጉም
 ጉድለት ያለበት ሊሆን ይችላል -- *ማስተካከያዎች በጣም እንኳን ደህና መጡ!* እባክዎን [በGitHub ላይ የመጎተት ጥያቄ](https://github.com/cobbzilla/mobiletto-cli/pulls) ይላኩ
 ወይም ያንን ማድረግ ካልተመቸዎ፣ [ችግር ይክፈቱ](https://github.com/cobbzilla/mobiletto-cli/issues)

 ስለ አንድ ትርጉም አዲስ የ GitHub ጉዳይ ሲፈጥሩ፣ እባክዎን ያድርጉ፡
 * የገጹን ዩአርኤል ያካትቱ (ከአሳሽ አድራሻ አሞሌ ቅዳ/ለጥፍ)
 * የተሳሳተ ትክክለኛውን ጽሑፍ ያካትቱ (ከአሳሹ ይቅዱ / ይለጥፉ)
 * እባክዎን ስህተት የሆነውን ይግለጹ -- ትርጉሙ ትክክል አይደለም? ቅርጸቱ እንደምንም ተሰብሯል?
 * የተሻለ ትርጉም ያለው ወይም ጽሑፉ እንዴት በትክክል መቀረጽ እንዳለበት በደግነት አስተያየት ይስጡ
 * **አመሰግናለሁ!**

 # ይዘቶች
 * [ምንጭ](#ምንጭ)
 * [ድጋፍ እና የገንዘብ ድጋፍ](#ድጋፍ-እና-ገንዘብ)
 * [መጫን እና አጠቃቀም](#መጫኛ-እና-አጠቃቀም)
 * [npm ጥቅል](#npm-package)
 * [ከምንጭ](#ከምንጭ)
 * [ግንኙነቶች](#ግንኙነቶች)
 * [ግንኙነት ፍጠር](#ግንኙነት ፍጠር)
 * [ግንኙነቶችን ይዘርዝሩ](#ዝርዝር-ግንኙነቶች)
 * [ግንኙነቱን ጣል JSON config](# Dump-connection-JSON-config)
 * [ግንኙነቱን ያስወግዱ](#ግንኙነቱን ያስወግዱ)
 * [ሁሉንም ግንኙነቶች አስወግድ](#ሁሉም-ግንኙነቶችን አስወግድ)
 * [ከማከማቻ ጋር መስራት](#ከማከማቻ ጋር በመስራት ላይ)
 * [ዝርዝር ፋይሎች](#ዝርዝር-ፋይሎች)
 * [ለ stdout ፋይል ይፃፉ](#ፋይል-ወደ-stdout ይፃፉ)
 * [ፋይሎችን ቅዳ](#ኮፒ-ፋይሎች)
 * [ፋይሎችን ሰርዝ](#Delete-files)
 * [ሜታዳታ ይመልከቱ](#እይታ-ሜታዳታ)
 * [የመስታወት ማውጫዎች](#የመስታወት ማውጫዎች)

 ### ምንጭ
 * [ሞባይልቶ-ክሊ በ GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [ሞባይልቶ-ክሊ በ npm](https://www.npmjs.com/package/mobiletto-cli)

 ## ድጋፍ እና የገንዘብ ድጋፍ
 ፕሮፌሽናል ክፍት ምንጭ ሶፍትዌር ገንቢ ለመሆን እየሞከርኩ ነው። ውስጥ እየሠራሁ ነበር
 የሶፍትዌር ኢንዱስትሪው ለብዙ ዓመታት ስኬታማ ኩባንያዎችን ጀምሬ ለሕዝብ ኩባንያዎች ሸጫለሁ።
 በቅርቡ ሥራ አጣሁ፣ እና ሌላ የተሠለፍኩት ሥራ የለኝም

 ስለዚህ ጠቃሚ ሶፍትዌር ለመጻፍ እሞክራለሁ እና ያ እንደሚሰራ ለማየት እሞክራለሁ።

 ይህን ሶፍትዌር መጠቀም ከወደዳችሁ፣ ለነገሩ እንኳን ከልብ አመስጋኝ ነኝ
 ትንሹ [በፓትሪዮን በኩል ወርሃዊ መዋጮ](https://www.patreon.com/cobbzilla)

 *አመሰግናለሁ!*

 ## መጫን እና አጠቃቀም
 `mobiletto-cli` ን በ npm ወይም በቀጥታ ከምንጭ መጫን እና ማሄድ ይችላሉ።

 ### npm ጥቅል
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ከምንጩ
 ከምንጩ ለማሄድ nodejs v16+ እና yarn ያስፈልገዎታል

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## ግንኙነቶች
 ሁሉም የሞባይል ስልክ ማከማቻ የሚገኘው በግንኙነት ነው።

 ሞባይልቶ በአሁኑ ጊዜ ከአካባቢው የፋይል ስርዓት ማከማቻ እና Amazon S3 ባልዲዎች ጋር ግንኙነቶችን ይደግፋል።

 ግንኙነቶች የሚገለጹት በJSON ነገር በሚመስል ነገር ነው፡-

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

 ስለ ሁሉም አማራጮች እና እሴቶቻቸው እና ትርጉማቸው ሙሉ ዝርዝሮችን ይመልከቱ
 [mobiletto ሰነዶች](https://www.npmjs.com/package/mobiletto#Basic-usage)።

 ### ግንኙነት ይፍጠሩ
 አዲስ ግንኙነት ለመፍጠር ከእነዚህ የJSON ነገሮች ውስጥ አንዱን እንፈልጋለን።

 አንዱን በይነተገናኝ መፍጠር ወይም አንዱን በፋይል ወይም በJSON ቃል በቃል ማቅረብ እንችላለን፡-

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

 ### የግንኙነት ዝርዝር
 የሚገኙ ግንኙነቶችን ይዘርዝሩ፡

    mo connect -l
    mo connect --list

 ### ግኑኝነትን ይጥሉ JSON ውቅር
 ለግንኙነት ሙሉውን የJSON ውቅር አሳይ። ** ማስጠንቀቂያ *** ይህ የ stdout ቁልፎችን እና ሚስጥሮችን ያትማል።

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ግንኙነትን ያስወግዱ
 ነጠላ ግንኙነትን ያስወግዱ;

    mo connect -r my-conn
    mo connect --remove my-conn

 ### ሁሉንም ግንኙነቶች ያስወግዱ
 ሁሉንም ግንኙነቶች አስወግድ:

    mo connect -R
    mo connect --remove-all

 ## ከማከማቻ ጋር በመስራት ላይ
 አንዳንድ ግንኙነቶችን ከፈጠሩ በኋላ `ls` ፣ `cp` ፣ `rm` ፣ `meta` እና `mirror` ኦፕሬሽኖችን ይጠቀሙ
 ከእነሱ ጋር ለመስራት.

 ለትዕዛዝ የሚያቀርቡት እያንዳንዱ የፋይል መንገድ በግንኙነቱ ስም ቅድመ ቅጥያ መሆን አለበት።
 የሚለው ነው። ከታች ባሉት ምሳሌዎች ውስጥ `conn1` እና `conn2` የሚሉ ሁለት ግንኙነቶች እንዳሉ እንገምታለን።

 ### ፋይሎችን ይዘርዝሩ
 የዝርዝር ትዕዛዝ ውፅዓት ተከታታይ የJSON ነገሮች ነው፣ በአንድ መስመር አንድ፣ ፋይሎቹን ይወክላል
 ተገኝቷል. እነዚህ ነገሮች `name` እና `type` እና ምናልባትም ሌሎች መስኮች ይኖራቸዋል።

    mo ls conn1/some/path

 ፋይሎችን በተከታታይ ይዘርዝሩ፡-

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **የተመሰጠረ የማከማቻ ማስታወሻ**፡ ተደጋጋሚ ዝርዝር ለተመሰጠሩ ግንኙነቶች ገና አልተደገፈም።
 በአንድ ጊዜ አንድ የፋይል ማውጫ ብቻ መዘርዘር ይችላሉ።

 ፋይሎችን በቃላት ይዘርዝሩ (ቆንጆ-የታተመ JSON)፦

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ፋይሎችን በተደጋጋሚ እና በቃላት ይዘርዝሩ፡

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` ትዕዛዝ እገዛን ይመልከቱ፣ ሁሉንም አማራጮች ይገልፃል።

    mo ls -h
    mo ls --help

 ### ለ stdout ፋይል ይፃፉ
 `cat` ትዕዛዝ አንድ ፋይል ወደ stdout ያትማል፡-

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 በእውነተኛው UNIX መንፈስ *(ግን በተግባር ግን አይደለም!)* የሞባይል ቶ `cat` ትዕዛዝ **ምንም አማራጭ አይወስድም**
 ጠቃሚ መረጃን ለማሳየት `-h` / `--help` ሌላ።

 ### ፋይሎችን ይቅዱ
 ነጠላ ፋይል ከአንድ ሞባይል ወደ ሌላ ቅዳ፡-

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 አንድ ነጠላ ፋይል ከአንድ ሞባይል ወደ ሌላ ይቅዱ ፣ በመድረሻው ላይ ይሰይሙት፡-

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 ማውጫን በየጊዜው ይቅዱ፡-

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` ትዕዛዝ እገዛን ይመልከቱ፣ ሁሉንም አማራጮች ያብራራል

    mo cp -h
    mo cp --help

 ማስታወሻ፡ ፋይል መቅዳት በጣም ፈጣን አይደለም፣ ምክንያቱም በአሁኑ ጊዜ መካከለኛ ጊዜያዊ ፋይል ይፈልጋል።

 ### ፋይሎችን ሰርዝ
 ነጠላ ፋይል ሰርዝ፡-

    mo rm conn1/some/file.txt

 አንድ ነጠላ ፋይል ሰርዝ እና ስለማንኛውም ስህተቶች ቅሬታ አያቅርብ፡-

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ማውጫ ሰርዝ፡

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ማውጫ ይሰርዙ እና ስለማንኛውም ስህተቶች ቅሬታ አያቅርቡ፡

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### ሜታዳታ ይመልከቱ
 ሙሉውን ፋይል ሳያወርዱ የፋይሉን ሜታዳታ ማወቅ ብዙ ጊዜ ጠቃሚ ነው።

 Mobiletto ከስም እና ከአይነት በተጨማሪ የፋይሉን መጠን እና ለመጨረሻ ጊዜ የተሻሻለው ጊዜ ሪፖርት ማድረግ ይችላል።

 ዲበ ውሂብ ለማየት፡-

    mo meta conn1/some/file.txt

 ### የመስታወት ማውጫዎች
 ማንጸባረቅ `cp` ልዩ ጉዳይ በላይ ነው፣ እሱ የሚያጠቃልለው የተለየ የሞባይል ትእዛዝ ነው።
 የመገልበጥ አሠራር; ስህተቶች በሚከሰቱበት ጊዜም እንኳን ይቀጥላል, እና የስኬቶችን እና ስህተቶችን ቆጠራ ይከታተሉ.

 ሁሉንም ነገር ከኮን 1 ወደ ኮን 2 ለማንፀባረቅ፡-

    mo mirror conn1 conn2

 ንዑስ ማውጫን ለማንጸባረቅ፡-

    mo mirror conn1/some/subdir conn2

 ንዑስ ማውጫን ወደ ሌላ ንዑስ ማውጫ ለማንፀባረቅ፡-

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
