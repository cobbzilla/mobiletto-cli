mobiletto-cli
 =============
 Fandefasana baiko (CLI) ho an'ny [mobiletto](https://www.npmjs.com/package/mobiletto)
 fitahirizana.

 Mobiletto dia manohana fifandraisana amin'ny Amazon S3, Backblaze B2, ary ny rafi-drakitra eo an-toerana.

 # Vakio amin'ny fiteny hafa ity
 Ity antontan-taratasy README.md ity dia nadika, tamin'ny alàlan'ny [hokeylization](https://github.com/cobbzilla/hokeylization), ho amin'ny
 **[ny fiteny rehetra tohanan'ny Google Translate](https://cloud.google.com/translate/docs/languages)!**

 azoko antoka fa tsy tonga lafatra izany fa manantena aho fa tsara noho ny tsy misy!

 [🇸🇦 Arabo](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alemana](../de/README.md)
 [🇺🇸 anglisy](../en/README.md)
 [🇪🇸 Espaniola](../es/README.md)
 [🇫🇷 frantsay](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziana](../id/README.md)
 [🇮🇹 Italiana](../it/README.md)
 [🇯🇵 Japoney](../ja/README.md)
 [🇰🇷 Koreana](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poloney](../pl/README.md)
 [🇧🇷 Portiogey](../pt/README.md)
 [🇷🇺 Rosiana](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tiorka](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamiana](../vi/README.md)
 [🇨🇳 Sinoa](../zh/README.md)


 **[📚 ... Teny Rehetra ...](../README.md)**
 ----

 ### Misy olana ve amin'ity fandikana ny README ity?
 Ity dikanteny manokana amin'ny [README] tany am-boalohany (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 mety misy lesoka -- *tena raisina an-tanana ny fanitsiana!* Alefaso azafady [fangatahana fisarihana ao amin'ny GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 na raha tsy mahazo aina amin'izany ianao dia [manokatra olana](https://github.com/cobbzilla/mobiletto-cli/issues)

 Rehefa mamorona olana GitHub vaovao momba ny fandikan-teny ianao, azafady:
 * Ampidiro ny URL pejy (adikao / apetaho amin'ny bara adiresy navigateur)
 * Ampidiro ny lahatsoratra marina izay diso (kodikao / apetaho amin'ny navigateur)
 * farito azafady izay tsy mety - diso ve ny dikanteny? simba ve ny format?
 * Manomeza soso-kevitra amin-katsaram-panahy momba ny fandikan-teny tsara kokoa, na ny fomba tokony handrafetana ny lahatsoratra
 * **Misaotra anao!**

 # Votoaty
 * [Loharano](#Source)
 * [Fanohanana sy Famatsiam-bola](#Fanohanana-sy-Famatsiam-bola)
 * [Fametrahana sy fampiasana](#Fametrahana-sy-fampiasana)
 * [fonosana npm](fonosana #npm)
 * [Avy amin'ny loharano](#From-source)
 * [Connections](#Connections)
 * [Mamorona fifandraisana](#Create-a-connection)
 * [Lisitra fifandraisana](#Lisitra-fifandraisana)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Esory ny fifandraisana](#Remove-a-connection)
 * [Esory ny fifandraisana rehetra](#Remove-all-connections)
 * [Miasa miaraka amin'ny fitahirizana](#Miasa miaraka amin'ny fitahirizana)
 * [Lisitra rakitra](#List-rakitra)
 * [Manoratra rakitra amin'ny stdout](#Write-a-file-to-stdout)
 * [Mandika rakitra](#Mandika rakitra)
 * [Delete files](#Delete-files)
 * [Jereo ny metadata](#View-metadata)
 * [Diritory fitaratra](#Directories-Mirror)

 ### Loharano
 * [mobiletto-cli amin'ny GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli amin'ny npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Fanohanana sy famatsiam-bola
 Miezaka ny ho matihanina mpamorona rindrambaiko open source aho. Niasa tao aho
 ny indostrian'ny rindrambaiko nandritra ny taona maro, nanomboka orinasa nahomby aho ary nivarotra azy ireo tamin'ny orinasam-panjakana.
 Vao haingana aho no very asa, ary tsy manana asa hafa milahatra

 Noho izany dia hanandrana manoratra rindrambaiko mahasoa aho ary hijery raha mety izany

 Raha tianao ny mampiasa an'ity rindrambaiko ity, dia ho feno fankasitrahana aho na dia ny
 kely indrindra [fanomezana isam-bolana amin'ny alàlan'ny Patreon](https://www.patreon.com/cobbzilla)

 *Misaotra anao!*

 ## Fametrahana sy fampiasana
 Azonao atao ny mametraka sy mampandeha `mobiletto-cli` amin'ny alalan'ny npm na mivantana avy amin'ny loharano.

 ### fonosana npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Avy amin'ny loharano
 Raha te hihazakazaka avy amin'ny loharano ianao dia mila nodejs v16+ sy kofehy

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Fifandraisana
 Ny fitahirizana mobiletto rehetra dia idirana amin'ny alalan'ny fifandraisana.

 Mobiletto amin'izao fotoana izao dia manohana fifandraisana amin'ny fitehirizana ny rafi-drakitra eo an-toerana sy ny siny Amazon S3.

 Ny fifandraisana dia voafaritry ny zavatra JSON izay toa izao:

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

 Raha mila antsipiriany feno momba ny safidy rehetra sy ny sandany ary ny dikany dia jereo ny
 [docs mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Mamorona fifandraisana
 Mba hamoronana fifandraisana vaovao dia mila iray amin'ireo zavatra JSON ireo isika.

 Afaka mamorona iray amin'ny interactive isika, na manome iray amin'ny alàlan'ny rakitra na JSON literal:

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

 ### Lisitry ny fifandraisana
 Tanisao ny fifandraisana misy:

    mo connect -l
    mo connect --list

 ### Manary fifandraisana JSON config
 Asehoy ny config JSON feno ho an'ny fifandraisana. **FAMPITANDREMANA** ity dia hanonta fanalahidy sy tsiambaratelo ho an'ny stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Esory fifandraisana
 Esory fifandraisana tokana:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Esory ny fifandraisana rehetra
 Esory ny fifandraisana REHETRA:

    mo connect -R
    mo connect --remove-all

 ## Miasa miaraka amin'ny fitahirizana
 Rehefa avy namorona fifandraisana ianao dia ampiasao ny hetsika `ls` , `cp` , `rm` , `meta` ary `mirror`
 hiara-miasa amin’izy ireo.

 Ny lalan'ny rakitra rehetra omenao amin'ny baiko iray dia tsy maintsy apetraka amin'ny anaran'ny fifandraisana
 izy io dia manondro. Ao amin'ireo ohatra etsy ambany, dia mihevitra isika fa misy fifandraisana roa antsoina hoe `conn1` sy `conn2`

 ### Lisitra rakitra
 Ny vokatra avy amin'ny baiko lisitra dia andiana zavatra JSON, iray isaky ny andalana, maneho ny rakitra
 hita. Ireo zavatra ireo dia hanana `name` sy `type` , ary mety ho saha hafa.

    mo ls conn1/some/path

 Mitanisà rakitra miverimberina:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Naoty fitahirizana voasivana**: Ny lisitra miverimberina dia tsy mbola tohanana ho an'ny fifandraisana misy miafina.
 Tsy afaka mitanisa lahatahiry iray amin'ny rakitra fotsiny ianao.

 Tanisao ny rakitra amin'ny fomba fiteny (JSON tsara pirinty):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Mitanisà rakitra miverimberina sy miverimberina:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Jereo ny fanampiana ho an'ny baiko `ls` , mamaritra ny safidy rehetra:

    mo ls -h
    mo ls --help

 ### Manorata rakitra ho stdout
 Ny baiko `cat` dia hanonta rakitra ho an'ny stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Amin'ny toe-tsaina UNIX marina *(nefa azo antoka fa tsy fanao izany!)* ny baikon'ny `cat` **tsy maka safidy**
 ankoatra ny `-h` / `--help` hanehoana fampahalalana mahasoa.

 ### Mandika rakitra
 Adikao ny rakitra iray avy amin'ny mobiletto iray mankany amin'ny iray hafa:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Adikao ny rakitra iray avy amin'ny mobiletto iray mankany amin'ny iray hafa, ary avereno anarana any amin'ny toerana haleha:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Mandika lahatahiry iray miverimberina:

    mo cp -r conn1/some/directory conn2/some/dest/

 Jereo ny fanampiana ho an'ny baiko `cp` , mamaritra ny safidy rehetra:

    mo cp -h
    mo cp --help

 Fanamarihana: Tsy dia haingana ny fanaovana kopia rakitra, satria mitaky fisie temp mpanelanelana.

 ### Fafao ny rakitra
 Famafana rakitra tokana:

    mo rm conn1/some/file.txt

 Fafao ny rakitra iray ary aza mitaraina momba ny fahadisoana:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Fafao lahatahiry:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Fafao lahatahiry iray ary aza mitaraina momba ny fahadisoana:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Jereo ny metadata
 Tena ilaina matetika ny mahafantatra ny metadata ho an'ny rakitra iray, nefa tsy misintona ny rakitra manontolo.

 Mobiletto dia afaka mitatitra ny haben'ny rakitra sy ny fotoana novaina farany, ankoatra ny anarana sy ny karazana.

 Hijery metadata:

    mo meta conn1/some/file.txt

 ### lahatahiry fitaratra
 Mirroring dia mihoatra noho ny tranga manokana amin'ny `cp` , izany dia baiko mobiletto misaraka izay mandrakotra ny
 asa kopia; mitohy izany na dia misy lesoka aza, ary manara-maso ny isan'ny fahombiazana sy ny lesoka.

 Mba hijerena ny zava-drehetra manomboka amin'ny conn1 mankany conn2:

    mo mirror conn1 conn2

 Mba hitaratra ny subdirectory:

    mo mirror conn1/some/subdir conn2

 Raha ampitahaina amin'ny subdirectory iray amin'ny subdirectory hafa:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
