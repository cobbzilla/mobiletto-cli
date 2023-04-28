mobiletto-cli
 =============
 Isang command-line interface (CLI) para sa [mobiletto](https://www.npmjs.com/package/mobiletto)
 imbakan.

 Sinusuportahan ng Mobiletto ang mga koneksyon sa Amazon S3, Backblaze B2, at mga lokal na filesystem.

 # Basahin ito sa ibang wika
 Itong README.md na dokumento ay isinalin, sa pamamagitan ng [hokeylization](https://github.com/cobbzilla/hokeylization), sa
 **[bawat wikang sinusuportahan ng Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Natitiyak kong hindi ito perpekto, ngunit umaasa ako na ito ay mas mahusay kaysa sa wala!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italyano](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Lahat ng Wika ...](../README.md)**
 ----

 ### May problema ba sa pagsasaling ito ng README?
 Ang partikular na pagsasaling ito ng orihinal na [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 maaaring may depekto -- *malugod na tinatanggap ang mga pagwawasto!* Mangyaring magpadala ng [pull request sa GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 o kung hindi ka komportableng gawin iyon, [magbukas ng isyu](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kapag gumawa ka ng bagong isyu sa GitHub tungkol sa isang pagsasalin, mangyaring gawin ang:
 * isama ang URL ng pahina (kopyahin/i-paste mula sa address bar ng browser)
 * isama ang eksaktong text na mali (kopyahin/i-paste mula sa browser)
 * mangyaring ilarawan kung ano ang mali -- mali ba ang pagsasalin? sira ba ang formatting kahit papaano?
 * mabait na mag-alok ng isang mungkahi ng isang mas mahusay na pagsasalin, o kung paano ang teksto ay dapat na maayos na na-format
 * **Salamat!**

 # Nilalaman
 * [Source](#Source)
 * [Suporta at Pagpopondo](#Support-and-Funding)
 * [Pag-install at paggamit](#Installation-and-usage)
 * [npm package](#npm-package)
 * [Mula sa pinagmulan](#From-source)
 * [Connections](#Connections)
 * [Gumawa ng koneksyon](#Create-a-connection)
 * [Mga koneksyon sa listahan](#Mga koneksyon sa listahan)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Remove a connection](#Remove-a-connection)
 * [Alisin ang lahat ng koneksyon](#Remove-all-connections)
 * [Paggawa gamit ang storage](#Working-with-storage)
 * [List file](#List-files)
 * [Sumulat ng file sa stdout](#Write-a-file-to-stdout)
 * [Kopyahin ang mga file](#Copy-files)
 * [Delete files](#Delete-files)
 * [Tingnan ang metadata](#View-metadata)
 * [Mirror directories](#Mirror-directories)

 ### Pinagmulan
 * [mobiletto-cli sa GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli sa npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Suporta at Pagpopondo
 Sinusubukan kong maging isang propesyonal na open source software developer. Ako ay nagtatrabaho sa
 sa industriya ng software sa loob ng maraming taon, sinimulan ko ang mga matagumpay na kumpanya at ibinenta ang mga ito sa mga pampublikong kumpanya.
 Kamakailan ay nawalan ako ng trabaho, at wala talaga akong ibang trabahong naka-line up

 Kaya't susubukan kong magsulat ng kapaki-pakinabang na software at tingnan kung gumagana iyon

 Kung masiyahan ka sa paggamit ng software na ito, taos-puso akong nagpapasalamat kahit na ang
 pinakamaliit [buwanang kontribusyon sa pamamagitan ng Patreon](https://www.patreon.com/cobbzilla)

 *Salamat!*

 ## Pag-install at paggamit
 Maaari mong i-install at patakbuhin `mobiletto-cli` pamamagitan ng npm o direkta mula sa pinagmulan.

 ### npm package
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Mula sa pinagmulan
 Upang tumakbo mula sa pinagmulan, kakailanganin mo ng mga nodejs v16+ at sinulid

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Mga koneksyon
 Ang lahat ng mobiletto storage ay ina-access sa pamamagitan ng isang koneksyon.

 Kasalukuyang sinusuportahan ng Mobiletto ang mga koneksyon sa lokal na imbakan ng filesystem at Amazon S3 bucket.

 Ang mga koneksyon ay tinukoy ng isang JSON object na ganito ang hitsura:

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

 Para sa buong detalye sa lahat ng mga opsyon at ang kanilang mga halaga at kahulugan, tingnan ang
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Lumikha ng koneksyon
 Para gumawa ng bagong koneksyon, kailangan namin ng isa sa mga JSON object na ito.

 Maaari kaming lumikha ng isa nang interactive, o magbigay ng isa sa pamamagitan ng isang file o literal ng JSON:

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

 ### Listahan ng mga koneksyon
 Ilista ang mga magagamit na koneksyon:

    mo connect -l
    mo connect --list

 ### Dump connection JSON config
 Ipakita ang buong JSON config para sa isang koneksyon. **BABALA** ito ay magpi-print ng mga susi at sikreto sa stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Mag-alis ng koneksyon
 Alisin ang isang koneksyon:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Alisin ang lahat ng koneksyon
 Alisin ang LAHAT ng koneksyon:

    mo connect -R
    mo connect --remove-all

 ## Gumagana sa storage
 Kapag nakagawa ka na ng ilang koneksyon, gamitin ang mga `ls` , `cp` , `rm` , `meta` at `mirror`
 upang makipagtulungan sa kanila.

 Ang bawat path ng file na ibibigay mo sa isang command ay dapat na may prefix na pangalan ng koneksyon
 ito ay tumutukoy sa. Sa mga halimbawa sa ibaba, ipinapalagay namin na mayroong dalawang koneksyon na pinangalanang `conn1` at `conn2`

 ### Listahan ng mga file
 Ang output ng isang list command ay isang serye ng mga JSON object, isa sa bawat linya, na kumakatawan sa mga file
 natagpuan. Ang mga bagay na ito ay magkakaroon ng `name` at `type` , at posibleng iba pang mga field.

    mo ls conn1/some/path

 Ilista ang mga file nang paulit-ulit:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Naka-encrypt na tala ng storage**: Ang recursive na listahan ay hindi pa sinusuportahan para sa mga naka-encrypt na koneksyon.
 Maaari ka lamang maglista ng isang direktoryo ng mga file sa isang pagkakataon.

 Maglista ng mga file nang pasalita (pretty-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Ilista ang mga file nang paulit-ulit at verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Tingnan ang tulong para sa utos `ls` , inilalarawan ang lahat ng opsyon:

    mo ls -h
    mo ls --help

 ### Sumulat ng file sa stdout
 Ang utos `cat` ay magpi-print ng isang file sa stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Sa tunay na UNIX spirit *(gayunpaman, tiyak na hindi ang pagsasanay!)* `cat` command ng mobiletto **walang mga pagpipilian**
 maliban sa `-h` / `--help` upang magpakita ng kapaki-pakinabang na impormasyon.

 ### Kopyahin ang mga file
 Kopyahin ang isang file mula sa isang mobiletto papunta sa isa pa:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopyahin ang isang file mula sa isang mobiletto patungo sa isa pa, palitan ang pangalan nito sa patutunguhan:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Paulit-ulit na kopyahin ang isang direktoryo:

    mo cp -r conn1/some/directory conn2/some/dest/

 Tingnan ang tulong para sa command `cp` , inilalarawan ang lahat ng opsyon:

    mo cp -h
    mo cp --help

 Tandaan: Ang pagkopya ng file ay hindi masyadong mabilis, dahil kasalukuyan itong nangangailangan ng isang intermediary temp file.

 ### Tanggalin ang mga file
 Tanggalin ang isang file:

    mo rm conn1/some/file.txt

 Magtanggal ng isang file at huwag magreklamo tungkol sa anumang mga error:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Tanggalin ang isang direktoryo:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Tanggalin ang isang direktoryo at huwag magreklamo tungkol sa anumang mga error:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Tingnan ang metadata
 Madalas na kapaki-pakinabang na malaman ang metadata para sa isang file, nang hindi dina-download ang buong file.

 Nagagawa ng Mobiletto na iulat ang laki ng file at huling binagong oras, bilang karagdagan sa pangalan at uri.

 Upang tingnan ang metadata:

    mo meta conn1/some/file.txt

 ### Mga direktoryo ng salamin
 Ang pag-mirror ay higit pa sa isang espesyal na kaso ng `cp` , ito ay isang hiwalay na utos ng mobiletto na bumabalot sa
 operasyon ng kopya; nagpapatuloy ito kahit na may mga error, at sinusubaybayan ang bilang ng mga tagumpay at error.

 Upang i-mirror ang lahat mula sa conn1 hanggang conn2:

    mo mirror conn1 conn2

 Upang i-mirror ang isang subdirectory:

    mo mirror conn1/some/subdir conn2

 Upang i-mirror ang isang subdirectory sa isa pang subdirectory:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
