mobiletto-cli
 =============
 He atanga raina-whakahau (CLI) mo [mobiletto](https://www.npmjs.com/package/mobiletto)
 rokiroki.

 Ka tautoko a Mobiletto i nga hononga ki Amazon S3, Backblaze B2, me nga punaha konae a rohe.

 # Panuitia tenei ki tetahi atu reo
 Kua whakamaoritia tenei tuhinga README.md, ma te [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), ki roto
 **[nga reo katoa e tautokohia ana e Google Translate](https://cloud.google.com/translate/docs/languages)!**

 E mohio ana ahau ehara i te mea tino tika, engari ko taku tumanako he pai ake i te kore!

 [🇸🇦 Arapi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tiamana](../de/README.md)
 [🇺🇸 Ingarihi](../en/README.md)
 [🇪🇸 Paniora](../es/README.md)
 [🇫🇷 Wīwī](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Itari](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Potiti](../pt/README.md)
 [🇷🇺 Ruhia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Hainamana](../zh/README.md)


 **[📚 ... Nga Reo Katoa ...](../README.md)**
 ----

 ### He raru kei tenei whakamaoritanga o te README?
 Ko tenei whakamaoritanga o te [README] taketake(https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kei te he -- *e tino manakohia nga whakatikatika!* Tukuna mai he [tono toia ki runga i GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ki te kore koe e pai ki te mahi i tera, [whakatuwhera i tetahi take](https://github.com/cobbzilla/mobiletto-cli/issues)

 Ina hanga e koe he take GitHub hou mo te whakamaoritanga, mahia:
 * whakauruhia te URL wharangi (kape/whakapiri mai i te pae wahitau tirotiro)
 * whakaurua te tuhinga tika e he ana (tārua/whakapiri mai i te kaitirotiro)
 * whakaahuatia mai he aha te he -- kei te he te whakamaoritanga? kua pakaru te whakatakotoranga?
 * tuku mai he whakaaro mo te whakamaoritanga pai ake, me pehea ranei te whakatakotoranga tika o te tuhinga
 * **Mauruuru!**

 ### Puna
 * [mobiletto-cli i GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli i runga npm](https://www.npmjs.com/package/mobiletto-cli)

 # Ihirangi
 * [Tāuta me te whakamahi](#Tāuta-me-whakamahi)
 * [npm package](#npm-package)
 * [Mai i te puna](#Mai-puna)
 * [Hononga](#Hononga)
 * [Waihanga hononga](#Waihanga-he-hononga)
 * [Rarangi hononga](#Rarangi-hononga)
 * [Tukuhia hononga JSON whirihora](#Dump-hononga-JSON-whirihora)
 * [Tangohia he hononga](#Tango-te-hononga)
 * [Tangohia nga hononga katoa](#Tango-katoa-hononga)
 * [Kei te mahi me te rokiroki](#Working-with-storage)
 * [Rārangi kōnae](#Rarangi-kōnae)
 * [Tuhia he konae ki te stdout](#Write-a-file-to-stdout)
 * [Tārua kōnae](#Tārua-kōnae)
 * [Muku kōnae](#Muku-kōnae)
 * [Tirohia nga raraungameta](#Tirohia-metadata)
 * [Whakaata Whaiaronga](#Mirror-directories)

 ## Te whakauru me te whakamahi
 Ka taea e koe te whakauru me te whakahaere `mobiletto-cli` ma te npm mai i te puna ranei.

 ### npm mōkihi
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Mai i te puna
 Hei rere mai i te puna, ka hiahia koe ki nga nodejs v16+ me te miro

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Hononga
 Ka uru katoa te rokiroki mobiletto ma te hononga.

 Kei te tautoko a Mobiletto i nga hononga ki te rokiroki punaha konae me nga peere Amazon S3.

 Ko nga hononga kua tohua e tetahi ahanoa JSON penei te ahua:

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

 Mo nga korero katoa mo nga whiringa katoa me o raatau uara me o raatau tikanga, tirohia te
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Waihanga hononga
 Hei hanga hononga hou, me hiahia tetahi o enei mea JSON.

 Ka taea e tatou te hanga i tetahi ma te pahekoheko, te tuku ranei i tetahi ma te konae JSON ranei:

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

 ### Rarangi hononga
 Whakarārangihia ngā hononga e wātea ana:

    mo connect -l
    mo connect --list

 ### Tuaki hononga JSON whirihora
 Whakaatuhia te whirihora JSON katoa mo tetahi hononga. **WARNING** ma tenei ka taa nga taviri me nga mea ngaro ki te stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Tango hononga
 Tango hononga kotahi:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Tango hononga katoa
 Tangohia nga hononga KATOA:

    mo connect -R
    mo connect --remove-all

 ## Mahi me te rokiroki
 Ina oti koe te hanga i etahi hononga, whakamahia nga mahi `ls` , `cp` , `rm` , `meta` me te `mirror`
 ki te mahi tahi me ratou.

 Ko nga ara konae katoa ka tukuna e koe ki tetahi tono me tohu ki te ingoa o te hononga
 e tohu ana. I roto i nga tauira i raro nei, e whakaaro ana matou e rua nga hononga kua tapaina ko `conn1` me `conn2`

 ### Rarangi kōnae
 Ko te putanga o te whakahau rarangi he raupapa o nga mea JSON, kotahi mo ia raina, e tohu ana i nga konae
 kitea. Ka whai `name` ingoa` me te `type` enei taonga, me etahi atu mara.

    mo ls conn1/some/path

 Whakarārangihia nga konae ki te recursively:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Tuhipoka rokiroki whakamuna**: Kare ano kia tautokohia te rarangi recursive mo nga hononga whakamunatia.
 Ka taea e koe te whakarārangi kotahi te whaiaronga o nga konae i te wa kotahi.

 Whakarārangihia nga konae (JSON tino-taahua):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Whakarārangihia nga konae me te korero korero:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Tirohia te awhina mo te tono `ls` , e whakaatu ana i nga whiringa katoa:

    mo ls -h
    mo ls --help

 ### Tuhia he konae hei stdout
 Ko te tono `cat` ka ta i tetahi konae ki te stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 I roto i te wairua UNIX pono *(engari ehara i te mahi!)* te tono `cat` a mobiletto **kaore he whiringa**
 i tua atu i te `-h` / `--help` hei whakaatu i nga korero awhina.

 ### Tārua ngā kōnae
 Tāruahia he kōnae kotahi mai i tetahi waea pūkoro ki tetahi atu:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Tāruahia te konae mai i tetahi waea pūkoro ki tetahi atu, whakaingoa ano ki te taunga:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Tāruahia te whaiaronga:

    mo cp -r conn1/some/directory conn2/some/dest/

 Tirohia te awhina mo te tono `cp` , e whakaahua ana i nga whiringa katoa:

    mo cp -h
    mo cp --help

 Tuhipoka: Ehara i te tino tere te kape i te konae, na te mea kei te hiahiatia he konae temp takawaenga.

 ### Mukua nga konae
 Mukua he kōnae kotahi:

    mo rm conn1/some/file.txt

 Mukua he kōnae kotahi, kaua e amuamu mo nga hapa:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Mukua he whaiaronga:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Mukua he whaiaronga, kaua hoki e amuamu mo nga hapa:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Tirohia metadata
 He pai tonu te mohio ki nga metadata mo tetahi konae, me te kore e tango i te konae katoa.

 Ka taea e Mobiletto te whakaatu i te rahi o te konae me te waa whakarereke whakamutunga, hei taapiri i te ingoa me te momo.

 Hei tiro metadata:

    mo meta conn1/some/file.txt

 ### Whaiaronga whakaata
 He nui ake te whakaata i te take motuhake o `cp` , he tono motokoto motuhake e takai ana i te
 mahi kape; ka haere tonu ahakoa ka puta he hapa, ka whai i nga tatauranga angitu me nga hapa.

 Hei whakaata i nga mea katoa mai i te conn1 ki te conn2:

    mo mirror conn1 conn2

 Hei whakaata i te whaiarongaroto:

    mo mirror conn1/some/subdir conn2

 Hei whakaata i tetahi raarangiroto ki tetahi atu raarangiroto:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
