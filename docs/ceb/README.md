mobiletto-cli
 =============
 Usa ka command-line interface (CLI) para sa [mobiletto](https://www.npmjs.com/package/mobiletto)
 pagtipig.

 Gisuportahan sa Mobiletto ang mga koneksyon sa Amazon S3, Backblaze B2, ug mga lokal nga filesystem.

 # Basaha kini sa laing pinulongan
 Kining README.md nga dokumento gihubad, pinaagi sa [hokeylization](https://github.com/cobbzilla/hokeylization), ngadto sa
 **[matag pinulongan gisuportahan sa Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sigurado ko nga dili kini perpekto, apan nanghinaut ko nga kini mas maayo kaysa wala!

 [🇸🇦 Arabiko](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Kinatsila](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italyano](../it/README.md)
 [🇯🇵 Hapon](../ja/README.md)
 [🇰🇷 Koreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuges](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Tanang Pinulongan ...](../README.md)**
 ----

 ### Aduna bay problema sa kini nga paghubad sa README?
 Kining partikular nga hubad sa orihinal nga [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 mahimong depekto -- *ang mga pagkorihir kay abi-abi kaayo!* Palihog ipadala ug [pull request sa GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 o kung dili ka komportable nga buhaton kana, [ablihi ang usa ka isyu](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kung maghimo ka usa ka bag-ong isyu sa GitHub bahin sa usa ka paghubad, palihug buhata:
 * Ilakip ang URL sa panid (kopya / idikit gikan sa address bar sa browser)
 * Ilakip ang eksakto nga teksto nga sayup (kopya / idikit gikan sa browser)
 * palihug ihulagway kung unsa ang sayup -- sayop ba ang paghubad? naguba ba ang pag-format sa usa ka paagi?
 * malulotong maghatag ug sugyot sa mas maayong hubad, o kon sa unsang paagi ang teksto kinahanglang hustong maporma
 * **Salamat!**

 # Mga sulud
 * [Source](#Source)
 * [Pagsuporta ug Pagpondo](#Suporta-ug-Pagpondo)
 * [Pag-instalar ug paggamit](#Pag-instalar-ug-paggamit)
 * [npm package](#npm-package)
 * [Gikan sa gigikanan](#Gikan sa gigikanan)
 * [Mga Koneksyon](#Koneksyon)
 * [Paghimo ug koneksyon](#Create-a-koneksyon)
 * [Mga koneksyon sa lista](#Mga koneksyon sa listahan)
 * [Dump connection JSON config](#Dump-koneksyon-JSON-config)
 * [Kuhaa ang koneksyon](#Remove-a-koneksyon)
 * [Kuhaa ang tanang koneksyon](#Remove-all-connections)
 * [Pagtrabaho uban sa storage](#Pagtrabaho-uban-storage)
 * [Listahan nga mga file](#List-file)
 * [Pagsulat ug file sa stdout](#Write-a-file-to-stdout)
 * [Kopya sa mga file](#Copy-files)
 * [Delete files](#Delete-files)
 * [Tan-awa ang metadata](#View-metadata)
 * [Mga direktoryo sa salamin](#Mga direktoryo sa salamin)

 ### Tinubdan
 * [mobiletto-cli sa GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli sa npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Suporta ug Pagpundo
 Ako naningkamot nga mahimong usa ka propesyonal nga open source software developer. Nagtrabaho ko sa
 ang industriya sa software sulod sa daghang katuigan, nagsugod ko og malampusong mga kompanya ug gibaligya kini sa mga publikong kompanya.
 Bag-o lang nawad-an kog trabaho, ug wala na gyud koy laing trabaho nga nakalinya

 Mao nga sulayan nako ang pagsulat sa makatabang nga software ug tan-awon kung kini molihok

 Kung nalingaw ka sa paggamit niini nga software, ako kinasingkasing nga mapasalamaton bisan sa
 pinakagamay [binulan nga kontribusyon pinaagi sa Patreon](https://www.patreon.com/cobbzilla)

 *Salamat!*

 ## Pag-instalar ug paggamit
 Mahimo nimong i-install ug `mobiletto-cli` pinaagi sa npm o direkta gikan sa gigikanan.

 ### npm nga pakete
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Gikan sa tinubdan
 Aron makadagan gikan sa gigikanan, kinahanglan nimo ang mga nodejs v16+ ug hilo

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Mga koneksyon
 Ang tanan nga mobiletto storage ma-access pinaagi sa koneksyon.

 Gisuportahan karon sa Mobiletto ang mga koneksyon sa lokal nga pagtipig sa filesystem ug mga balde sa Amazon S3.

 Ang mga koneksyon gitino sa usa ka butang nga JSON nga ingon niini:

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

 Para sa bug-os nga mga detalye sa tanang mga opsyon ug sa ilang mga bili ug kahulogan, tan-awa ang
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Paghimo og koneksyon
 Aron makahimo usa ka bag-ong koneksyon, kinahanglan namon ang usa niini nga mga butang sa JSON.

 Makahimo kami usa nga interactive, o maghatag usa pinaagi sa usa ka file o literal nga JSON:

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

 ### Ilista ang mga koneksyon
 Ilista ang mga magamit nga koneksyon:

    mo connect -l
    mo connect --list

 ### Dump koneksyon JSON config
 Ipakita ang bug-os nga JSON config para sa usa ka koneksyon. **WARNING** kini mag-imprinta sa mga yawe ug mga sekreto sa stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Pagtangtang sa koneksyon
 Kuhaa ang usa ka koneksyon:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Kuhaa ang tanang koneksyon
 Kuhaa TANANG koneksyon:

    mo connect -R
    mo connect --remove-all

 ## Nagtrabaho uban sa pagtipig
 Sa higayon nga nakahimo ka og pipila ka koneksyon, gamita ang `ls` , `cp` , `rm` , `meta` ug `mirror` nga operasyon
 sa pagtrabaho uban kanila.

 Ang matag agianan sa file nga imong gihatag sa usa ka mando kinahanglan nga prefix sa ngalan sa koneksyon
 kini nagtumong sa. Sa mga pananglitan sa ubos, nagtuo kami nga adunay duha ka koneksyon nga ginganlag `conn1` ug `conn2`

 ### Ilista ang mga file
 Ang output sa usa ka list command usa ka serye sa JSON nga mga butang, usa matag linya, nga nagrepresentar sa mga file
 nakit-an. Kini nga mga butang adunay usa ka `name` ug `type` , ug posible nga uban pang mga natad.

    mo ls conn1/some/path

 Ilista ang mga file nga balikbalik:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Na-encrypt nga nota sa pagtipig**: Ang recursive nga listahan wala pa gisuportahan alang sa mga naka-encrypt nga koneksyon.
 Mahimo ka lang maglista usa ka direktoryo sa mga file matag higayon.

 Ilista ang mga file sa pulong (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Ilista ang mga file sa balikbalik nga paagi ug verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Tan-awa ang tabang alang sa `ls` sugo, naghulagway sa tanang mga kapilian:

    mo ls -h
    mo ls --help

 ### Pagsulat ug file aron stdout
 Ang `cat` sugo mag-imprinta sa usa ka file sa stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Sa tinuod nga UNIX nga espiritu *(apan siguradong dili ang praktis!)* ang `cat` sugo sa mobiletto **walay kapilian**
 gawas sa `-h` / `--help` aron ipakita ang makatabang nga impormasyon.

 ### Kopyaha ang mga file
 Kopyaha ang usa ka file gikan sa usa ka mobiletto ngadto sa lain:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopyaha ang usa ka file gikan sa usa ka mobiletto ngadto sa lain, pag-ilis sa ngalan sa destinasyon:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Balik-balik nga pagkopya sa usa ka direktoryo:

    mo cp -r conn1/some/directory conn2/some/dest/

 Tan-awa ang tabang para sa `cp` sugo, naghulagway sa tanang mga opsyon:

    mo cp -h
    mo cp --help

 Mubo nga sulat: Ang pagkopya sa file dili kaayo paspas, tungod kay sa pagkakaron nagkinahanglan kini og intermediary temp file.

 ### Pagtangtang sa mga file
 Pagtangtang sa usa ka file:

    mo rm conn1/some/file.txt

 Pagtangtang sa usa ka file ug ayaw pagreklamo bahin sa bisan unsang mga sayup:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Pagtangtang sa usa ka direktoryo:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Pagtangtang sa usa ka direktoryo ug ayaw pagreklamo bahin sa bisan unsang mga sayup:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Tan-awa ang metadata
 Kanunay nga mapuslanon nga mahibal-an ang metadata alang sa usa ka file, nga wala i-download ang tibuuk nga file.

 Ang Mobiletto makahimo sa pagreport sa gidak-on sa file ug sa katapusang giusab nga oras, dugang sa ngalan ug tipo.

 Aron tan-awon ang metadata:

    mo meta conn1/some/file.txt

 ### Mga direktoryo sa salamin
 Ang pagsalamin labaw pa sa usa ka espesyal nga kaso sa `cp` , kini usa ka bulag nga mando sa mobiletto nga nagputos sa
 operasyon sa kopya; nagpadayon kini bisan kung adunay mga sayup, ug pagsubay sa usa ka ihap sa mga kalampusan ug mga sayup.

 Aron i-mirror ang tanan gikan sa conn1 ngadto sa conn2:

    mo mirror conn1 conn2

 Sa pag-salamin sa usa ka subdirectory:

    mo mirror conn1/some/subdir conn2

 Aron i-mirror ang usa ka subdirectory ngadto sa laing subdirectory:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
