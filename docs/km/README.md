mobiletto-cli
 =============
 ចំណុចប្រទាក់បន្ទាត់ពាក្យបញ្ជា (CLI) សម្រាប់ [mobiletto](https://www.npmjs.com/package/mobiletto)
 ការផ្ទុក។

 Mobiletto គាំទ្រការភ្ជាប់ទៅ Amazon S3, Backblaze B2 និងប្រព័ន្ធឯកសារក្នុងស្រុក។

 # អាននេះជាភាសាផ្សេង
 ឯកសារ README.md នេះត្រូវបានបកប្រែតាមរយៈ [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) ទៅជា
 **[គ្រប់ភាសាដែលគាំទ្រដោយ Google Translate](https://cloud.google.com/translate/docs/languages)!**

 ខ្ញុំប្រាកដថាវាមិនល្អឥតខ្ចោះ ប៉ុន្តែខ្ញុំសង្ឃឹមថាវាប្រសើរជាងគ្មានអ្វីសោះ!

 [🇸🇦 អារ៉ាប់](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 អាឡឺម៉ង់](../de/README.md)
 [🇺🇸 ភាសាអង់គ្លេស](../en/README.md)
 [🇪🇸 អេស្ប៉ាញ](../es/README.md)
 [🇫🇷 បារាំង](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 ហិណ្ឌូ](../hi/README.md)
 [🇮🇩 ឥណ្ឌូនេស៊ី](../id/README.md)
 [🇮🇹 អ៊ីតាលី](../it/README.md)
 [🇯🇵ជប៉ុន](../ja/README.md)
 [🇰🇷កូរ៉េ](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 ប៉ូឡូញ](../pl/README.md)
 [🇧🇷 ព័រទុយហ្គាល់](../pt/README.md)
 [🇷🇺 រុស្ស៊ី](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷ទួរគី](../tr/README.md)
 [🇵🇰 អ៊ូឌូ](../ur/README.md)
 [🇻🇳 វៀតណាម](../vi/README.md)
 [🇨🇳 ចិន](../zh/README.md)


 **[📚...គ្រប់ភាសា...](../README.md)**
 ----

 ### មានបញ្ហាជាមួយការបកប្រែ README នេះទេ?
 ការបកប្រែពិសេសនេះនៃ [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 ប្រហែលជាមានកំហុស -- *ការកែតម្រូវត្រូវបានស្វាគមន៍យ៉ាងខ្លាំង!* សូមផ្ញើ [សំណើទាញនៅលើ GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ឬប្រសិនបើអ្នកមិនសុខចិត្តធ្វើបែបនោះ [បើកបញ្ហា](https://github.com/cobbzilla/mobiletto-cli/issues)

 នៅពេលអ្នកបង្កើតបញ្ហា GitHub ថ្មីអំពីការបកប្រែ សូមធ្វើ៖
 * រួមបញ្ចូល URL ទំព័រ (ចម្លង/បិទភ្ជាប់ពីរបារអាសយដ្ឋានកម្មវិធីរុករក)
 * រួមបញ្ចូលអត្ថបទពិតប្រាកដដែលខុស (ចម្លង/បិទភ្ជាប់ពីកម្មវិធីរុករក)
 * សូមពណ៌នាអំពីអ្វីដែលខុស -- តើការបកប្រែមិនត្រឹមត្រូវទេ? តើទម្រង់ខូចដោយរបៀបណា?
 * សូម​ផ្តល់​ជា​យោបល់​អំពី​ការ​បក​ប្រែ​ដ៏​ល្អ​ប្រសើរ​មួយ ឬ​របៀប​ដែល​អត្ថបទ​គួរ​ត្រូវ​បាន​ធ្វើ​ទ្រង់ទ្រាយ​ត្រឹមត្រូវ។
 **សូមអរគុណ!**

 ### ប្រភព
 * [mobiletto-cli នៅលើ GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli នៅលើ npm](https://www.npmjs.com/package/mobiletto-cli)

 # ខ្លឹមសារ
 * [ការដំឡើង និងការប្រើប្រាស់](#ការដំឡើង និងការប្រើប្រាស់)
 * [កញ្ចប់ npm](#npm-កញ្ចប់)
 * [ប្រភព](#ប្រភព)
 * [ការតភ្ជាប់](#ការតភ្ជាប់)
 * [បង្កើតការតភ្ជាប់](#Create-a-connection)
 * [ការ​តភ្ជាប់​បញ្ជី​](#ការ​តភ្ជាប់​បញ្ជី​)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [លុបការតភ្ជាប់](#Remove-a-connection)
 * [លុបការភ្ជាប់ទាំងអស់](#Remove-all-connections)
 * [ធ្វើការជាមួយការផ្ទុក](#Working-with-storage)
 * [ឯកសារបញ្ជី](#បញ្ជីឯកសារ)
 * [សរសេរឯកសារទៅ stdout](#Write-a-file-to-stdout)
 * [ចម្លងឯកសារ](#ចម្លងឯកសារ)
 * [លុបឯកសារ](#លុបឯកសារ)
 * [មើលទិន្នន័យមេតា](#មើល-ទិន្នន័យមេតា)
 * [ថតកញ្ចក់](#Mirror-directories)

 ## ការដំឡើងនិងការប្រើប្រាស់
 អ្នកអាចដំឡើង និងដំណើរការ `mobiletto-cli` តាមរយៈ npm ឬដោយផ្ទាល់ពីប្រភព។

 ### កញ្ចប់ npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ប្រភព
 ដើម្បីដំណើរការពីប្រភព អ្នកនឹងត្រូវការ nodejs v16+ និង yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## ការតភ្ជាប់
 ឧបករណ៍ផ្ទុក mobiletto ទាំងអស់ត្រូវបានចូលប្រើតាមរយៈការតភ្ជាប់។

 បច្ចុប្បន្ន Mobiletto គាំទ្រការភ្ជាប់ទៅប្រព័ន្ធផ្ទុកឯកសារក្នុងតំបន់ និងធុង Amazon S3 ។

 ការតភ្ជាប់ត្រូវបានបញ្ជាក់ដោយវត្ថុ JSON ដែលមើលទៅដូចនេះ៖

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

 សម្រាប់ព័ត៌មានលម្អិតអំពីជម្រើសទាំងអស់ និងតម្លៃ និងអត្ថន័យរបស់វា សូមមើលទំព័រ
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage)។

 ### បង្កើតការតភ្ជាប់
 ដើម្បីបង្កើតការតភ្ជាប់ថ្មី យើងត្រូវការវត្ថុ JSON មួយក្នុងចំណោមវត្ថុទាំងនេះ។

 យើងអាចបង្កើតអន្តរកម្មមួយ ឬផ្គត់ផ្គង់តាមរយៈឯកសារ ឬអក្សរ JSON៖

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

 ### បញ្ជីទំនាក់ទំនង
 រាយបញ្ជីទំនាក់ទំនងដែលមាន៖

    mo connect -l
    mo connect --list

 ### ការកំណត់រចនាសម្ព័ន្ធ JSON
 បង្ហាញការកំណត់រចនាសម្ព័ន្ធ JSON ពេញលេញសម្រាប់ការតភ្ជាប់។ **ការព្រមាន** វានឹងបោះពុម្ពកូនសោ និងអាថ៌កំបាំងដើម្បី stdout ។

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### លុបការតភ្ជាប់
 លុបការភ្ជាប់តែមួយ៖

    mo connect -r my-conn
    mo connect --remove my-conn

 ### លុបការភ្ជាប់ទាំងអស់។
 លុបការភ្ជាប់ទាំងអស់៖

    mo connect -R
    mo connect --remove-all

 ## ធ្វើការជាមួយការផ្ទុក
 នៅពេលដែលអ្នកបានបង្កើតការតភ្ជាប់មួយចំនួន សូមប្រើប្រតិបត្តិការ `ls` , `cp` , `rm` , `meta` និង `mirror`
 ដើម្បីធ្វើការជាមួយពួកគេ។

 រាល់ផ្លូវឯកសារដែលអ្នកផ្តល់ទៅពាក្យបញ្ជាត្រូវតែមានបុព្វបទជាមួយឈ្មោះនៃការតភ្ជាប់
 វាសំដៅទៅលើ។ នៅក្នុងឧទាហរណ៍ខាងក្រោម យើងសន្មត់ថាមានការតភ្ជាប់ពីរដែលមានឈ្មោះថា `conn1` និង `conn2`

 ### បញ្ជីឯកសារ
 លទ្ធផលនៃពាក្យបញ្ជាបញ្ជីគឺជាស៊េរីនៃវត្ថុ JSON ដែលមួយក្នុងមួយជួរតំណាងឱ្យឯកសារ
 បានរកឃើញ។ វត្ថុទាំងនេះនឹងមាន `name` និង `type` និងអាចជាវាលផ្សេងទៀត។

    mo ls conn1/some/path

 រាយបញ្ជីឯកសារឡើងវិញ៖

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **កំណត់ចំណាំទំហំផ្ទុកដែលបានអ៊ិនគ្រីប**៖ បញ្ជីដដែលៗមិនទាន់ត្រូវបានគាំទ្រសម្រាប់ការតភ្ជាប់ដែលបានអ៊ិនគ្រីបនៅឡើយទេ។
 អ្នកអាចរាយបញ្ជីឯកសារតែមួយក្នុងពេលតែមួយ។

 រាយបញ្ជីឯកសារដោយពាក្យសំដី (JSON បោះពុម្ពស្អាត)៖

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 រាយបញ្ជីឯកសារឡើងវិញ និងពាក្យសំដី៖

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 មើលជំនួយសម្រាប់ពាក្យបញ្ជា `ls` ពិពណ៌នាអំពីជម្រើសទាំងអស់៖

    mo ls -h
    mo ls --help

 ### សរសេរឯកសារទៅ stdout
 ពាក្យបញ្ជា `cat` នឹងបោះពុម្ពឯកសារទៅ stdout៖

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 នៅក្នុងស្មារតីយូនីកពិត *(ពិតជាមិនមែនជាការអនុវត្តទេ!)* ពាក្យបញ្ជា 'ឆ្មា' របស់ `cat` ** មិនប្រើជម្រើស **
 ក្រៅពី `-h` / `--help` ដើម្បីបង្ហាញព័ត៌មានមានប្រយោជន៍។

 ### ចម្លងឯកសារ
 ចម្លងឯកសារមួយពី mobiletto មួយទៅមួយទៀត៖

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ចម្លងឯកសារតែមួយពី mobiletto មួយទៅមួយទៀត ដោយប្តូរឈ្មោះវានៅគោលដៅ៖

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 ចម្លង​ថត​ដដែលៗ៖

    mo cp -r conn1/some/directory conn2/some/dest/

 មើលជំនួយសម្រាប់ពាក្យបញ្ជា `cp` ពិពណ៌នាអំពីជម្រើសទាំងអស់៖

    mo cp -h
    mo cp --help

 ចំណាំ៖ ការចម្លងឯកសារមិនលឿនទេ ព្រោះបច្ចុប្បន្នវាត្រូវការឯកសារ temp អន្តរការី។

 ### លុបឯកសារ
 លុបឯកសារតែមួយ៖

    mo rm conn1/some/file.txt

 លុបឯកសារតែមួយ ហើយកុំត្អូញត្អែរអំពីកំហុសណាមួយ៖

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 លុបថតឯកសារ៖

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 លុបថតហើយកុំត្អូញត្អែរអំពីកំហុសណាមួយ៖

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### មើលទិន្នន័យមេតា
 ជាញឹកញាប់វាមានប្រយោជន៍ក្នុងការដឹងពីទិន្នន័យមេតាសម្រាប់ឯកសារ ដោយមិនចាំបាច់ទាញយកឯកសារទាំងមូល។

 Mobiletto អាចរាយការណ៍អំពីទំហំឯកសារ និងពេលវេលាដែលបានកែប្រែចុងក្រោយ បន្ថែមពីលើឈ្មោះ និងប្រភេទ។

 ដើម្បីមើលទិន្នន័យមេតា៖

    mo meta conn1/some/file.txt

 ### ថតកញ្ចក់
 ការឆ្លុះគឺច្រើនជាងករណីពិសេសនៃ `cp` វាគឺជាពាក្យបញ្ជា mobiletto ដាច់ដោយឡែកដែលរុំ
 ប្រតិបត្តិការចម្លង; វាបន្តសូម្បីតែនៅពេលដែលមានកំហុសកើតឡើង និងតាមដានចំនួនជោគជ័យ និងកំហុសមួយចំនួន។

 ដើម្បីឆ្លុះបញ្ចាំងអ្វីគ្រប់យ៉ាងពី conn1 ទៅជា conn2:

    mo mirror conn1 conn2

 ដើម្បីឆ្លុះថតរង៖

    mo mirror conn1/some/subdir conn2

 ដើម្បីឆ្លុះថតរងមួយទៅក្នុងថតរងផ្សេងទៀត៖

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
