mobiletto-cli
 ===========
 Ni wiwo laini aṣẹ (CLI) fun [mobiletto](https://www.npmjs.com/package/mobiletto)
 ibi ipamọ.

 Mobiletto ṣe atilẹyin awọn asopọ si Amazon S3, Backblaze B2, ati awọn eto faili agbegbe.

 # Ka eyi ni ede miiran
 Iwe README.md yii ti jẹ itumọ, nipasẹ [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), sinu
 **[gbogbo ede ni atilẹyin nipasẹ Google Tumọ](https://cloud.google.com/translate/docs/languages)!**

 Mo ni idaniloju pe ko pe, ṣugbọn Mo nireti pe o dara ju ohunkohun lọ!

 [🇸🇦 Larubawa](../ar/README.md)
 [🇧🇩 Ede Bengali](../bn/README.md)
 [🇩🇪 Jẹmánì](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spani](../es/README.md)
 [🇫🇷 Faranse](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Itali](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tọki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Kannada](../zh/README.md)


 **[📚 ... Gbogbo Ede ...](../README.md)**
 ----

 ### Njẹ iṣoro kan wa pẹlu itumọ README yii?
 Itumọ ni pato ti atilẹba [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 le jẹ abawọn - * awọn atunṣe ṣe itẹwọgba pupọ!* Jọwọ fi ibeere kan ranṣẹ si GitHub (https://github.com/cobbzilla/mobiletto-cli/pulls),
 tabi ti o ko ba ni itunu lati ṣe iyẹn, [ṣii ọrọ kan](https://github.com/cobbzilla/mobiletto-cli/issues)

 Nigbati o ba ṣẹda ọrọ GitHub tuntun nipa itumọ kan, jọwọ ṣe:
 * pẹlu URL oju-iwe naa (daakọ/lẹẹmọ lati ọpa adirẹsi aṣawakiri)
 * pẹlu ọrọ gangan ti o jẹ aṣiṣe (daakọ/lẹẹmọ lati ẹrọ aṣawakiri)
 * Jọwọ ṣapejuwe ohun ti ko tọ -- ṣe itumọ naa ko tọ? ti wa ni awọn kika baje bakan?
 * Fi inurere funni ni imọran itumọ ti o dara julọ, tabi bi o ṣe yẹ ki ọrọ naa ṣe tito daradara
 * **E dupe!**

 ### Orisun
 * [mobiletto-cli lori GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli lori npm](https://www.npmjs.com/package/mobiletto-cli)

 # Awọn akoonu
 * [Fifi sori ẹrọ ati lilo](#Fifi sori-ati-lilo)
 * [npm package](#npm-package)
 * [Lati orisun](#Lati orisun)
 * [Awọn isopọ](#Awọn isopọ)
 * [Ṣẹda asopọ](#Ṣẹda-asopọ kan)
 * [Awọn asopọ atokọ](#Akojọ-awọn asopọ)
 * [Dasilẹ asopọ JSON atunto](#Dump-connection-JSON-konfigi)
 * [Yọ asopọ kan kuro](#Yọ-asopọ-asopọ kuro)
 * [Yọ gbogbo awọn asopọ kuro](#Yọ-gbogbo-awọn asopọ kuro)
 * [Nṣiṣẹ pẹlu ibi ipamọ](#Nṣiṣẹ pẹlu ibi ipamọ)
 * [Awọn faili atokọ](#Akojọ-faili)
 * [Kọ faili kan si stdout](#Kọ-file-si-stdout)
 * [Daakọ awọn faili](#Daakọ-faili)
 * [Paarẹ awọn faili](#Parẹ-faili)
 * [Wo metadata](#Wo-metadata)
 * [Awọn ilana digi](#Digi-directories)

 ## Fifi sori ẹrọ ati lilo
 O le fi sori ẹrọ ati ṣiṣe `mobiletto-cli` nipasẹ npm tabi taara lati orisun.

 ### npm package
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Lati orisun
 Lati ṣiṣẹ lati orisun, iwọ yoo nilo nodejs v16+ ati yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Awọn isopọ
 Gbogbo ibi ipamọ mobiletto ni wiwọle nipasẹ asopọ kan.

 Mobiletto Lọwọlọwọ ṣe atilẹyin awọn asopọ si ibi ipamọ faili faili agbegbe ati awọn buckets S3 Amazon.

 Awọn asopọ jẹ pato nipasẹ ohun JSON kan ti o dabi eleyi:

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

 Fun awọn alaye ni kikun lori gbogbo awọn aṣayan ati awọn iye wọn ati awọn itumọ, wo
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Ṣẹda asopọ kan
 Lati ṣẹda asopọ tuntun, a nilo ọkan ninu awọn nkan JSON wọnyi.

 A le ṣẹda ọkan ni ibaraenisepo, tabi pese ọkan nipasẹ faili kan tabi gangan JSON:

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

 ### Akojọ awọn isopọ
 Ṣe atokọ awọn asopọ ti o wa:

    mo connect -l
    mo connect --list

 ### Idasonu asopọ JSON konfigi
 Ṣe afihan atunto JSON ni kikun fun asopọ kan. ** IKILO *** eyi yoo tẹjade awọn bọtini ati awọn aṣiri si stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Yọ asopọ kan kuro
 Yọ asopọ kan kuro:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Yọ gbogbo awọn asopọ
 Yọ GBOGBO awọn asopọ kuro:

    mo connect -R
    mo connect --remove-all

 # Nṣiṣẹ pẹlu ibi ipamọ
 Ni kete ti o ba ti ṣẹda awọn isopọ diẹ, lo awọn iṣẹ `ls` , `cp` , `rm` , `meta` ati `mirror`
 lati ṣiṣẹ pẹlu wọn.

 Gbogbo ọna faili ti o pese si aṣẹ gbọdọ wa ni iṣaaju pẹlu orukọ asopọ
 o ntokasi si. Ninu awọn apẹẹrẹ ni isalẹ, a ro pe awọn asopọ meji wa ti a npè ni `conn1` ati `conn2`

 ### Awọn faili Akojọ
 Ijade ti aṣẹ atokọ jẹ lẹsẹsẹ awọn nkan JSON, ọkan fun laini, ti o nsoju awọn faili
 ri. Awọn nkan wọnyi yoo ni `name` ati `type` , ati boya awọn aaye miiran.

    mo ls conn1/some/path

 Ṣe atokọ awọn faili leralera:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Akọsilẹ ibi ipamọ ti paroko ***: Atokọ atunṣe ko ti ni atilẹyin fun awọn asopọ ti paroko.
 O le ṣe atokọ ọkan liana ti awọn faili ni akoko kan.

 Ṣe atokọ awọn faili lọrọ ẹnu (JSON-titẹ lẹwa):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Ṣe atokọ awọn faili leralera ati ni ẹnu:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Wo iranlọwọ fun aṣẹ `ls` , ṣapejuwe gbogbo awọn aṣayan:

    mo ls -h
    mo ls --help

 ### Kọ faili kan si stdout
 Aṣẹ `cat` yoo tẹ faili kan sita si stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ni otitọ UNIX ẹmi * (sibẹsibẹ esan kii ṣe iṣe naa!) * pipaṣẹ `cat` ** ko gba awọn aṣayan ***
 yatọ si `-h` / `--help` lati ṣe afihan alaye iranlọwọ.

 ### Da awọn faili
 Daakọ faili kan lati mobiletto kan si omiran:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Daakọ faili kan lati alagbekatto kan si omiran, fun lorukọmii ni ibi ti o nlo:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Daakọ itọsọna kan leralera:

    mo cp -r conn1/some/directory conn2/some/dest/

 Wo iranlọwọ fun aṣẹ `cp` , ṣapejuwe gbogbo awọn aṣayan:

    mo cp -h
    mo cp --help

 Akiyesi: Didaakọ faili ko yara pupọ, nitori lọwọlọwọ o nilo faili iwọn otutu agbedemeji.

 ### Pa awọn faili rẹ
 Pa faili kan rẹ kuro:

    mo rm conn1/some/file.txt

 Pa faili kan rẹ ki o ma ṣe kerora nipa awọn aṣiṣe eyikeyi:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Pa ilana kan rẹ:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Pa ilana kan rẹ ki o ma ṣe kerora nipa awọn aṣiṣe eyikeyi:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Wo metadata
 Nigbagbogbo o wulo lati mọ metadata fun faili kan, laisi igbasilẹ gbogbo faili naa.

 Mobiletto ni anfani lati jabo iwọn faili ati akoko atunṣe to kẹhin, ni afikun si orukọ ati iru.

 Lati wo metadata:

    mo meta conn1/some/file.txt

 ### Awọn ilana Digi
 Mirroring jẹ diẹ sii ju kan pataki nla ti `cp` , o jẹ kan lọtọ mobiletto pipaṣẹ ti o murasilẹ awọn
 iṣẹ daakọ; o tẹsiwaju paapaa nigbati awọn aṣiṣe ba waye, ati orin kika awọn aṣeyọri ati awọn aṣiṣe.

 Lati digi ohun gbogbo lati conn1 sinu conn2:

    mo mirror conn1 conn2

 Lati ṣe afihan iwe-ipamọ abẹlẹ kan:

    mo mirror conn1/some/subdir conn2

 Lati ṣe afihan iwe-ipamọ abẹlẹ kan sinu iwe-itọnisọna miiran:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
