mobiletto-cli
 ==============
 A command-line interface (CLI) ye [mobiletto](https://www.npmjs.com/package/mobiletto)
 storage.

 Mobiletto inotsigira zvinongedzo kuAmazon S3, Backblaze B2, uye emuno mafaera masisitimu.

 # Verenga izvi mune mumwe mutauro
 Gwaro iri README.md rakashandurwa, kuburikidza ne[hokeylization](https://github.com/cobbzilla/hokeylization), kupinda
 **[mitauro yese inotsigirwa neGoogle Translate](https://cloud.google.com/translate/docs/languages)!**

 Ndine chokwadi kuti haina kukwana, asi ndinovimba iri nani pane hapana!

 [🇸🇦 ChiArabic](../ar/README.md)
 [🇧🇩 Chibengali](../bn/README.md)
 [🇩🇪 ChiGerman](../de/README.md)
 [🇺🇸 Chirungu](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Chiputukezi](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Mitauro Yese ...](../README.md)**
 ----

 ### Pane dambudziko here neshanduro iyi yeREADME?
 Iyi chaiyo shanduro yepakutanga [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 inogona kunge isina kukanganisa -- *kugadzirisa kunogamuchirwa!* Ndokumbira utumire [kudhonza chikumbiro paGitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 kana kuti kana usina kusununguka kuita izvozvo, [vhura nyaya](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kana iwe ukagadzira itsva GitHub nyaya nezve dudziro, ndapota ita:
 * sanganisira iyo URL peji (kopi/namira kubva kubrowser kero bar)
 * sanganisira iwo chaiwo mameseji asiri iwo (kopi/namira kubva kubrowser)
 * ndapota tsanangura kuti chii chakaipa -- shanduro haina kururama here? iyo fomati yakatyoka neimwe nzira?
 * nemutsa ipa zano reshanduro iri nani, kana kuti mashoko acho anofanira kurongwa zvakanaka sei
 * **Ndatenda!**

 # Zviri mukati
 * [Kwakabva](#Mabviro)
 * [Kutsigira uye Mari](#Kutsigira-uye-Mari)
 * [Kuiswa uye kushandiswa](#Kuisa-uye-kushandisa)
 * [npm package](#npm-package)
 * [Kubva kunobva](#Kubva-kwakabva)
 * [Zvisungo](#Mabatanidza)
 * [Gadzira chinongedzo](#Gadzira-chibatanidza)
 * [Rondedzero zvinongedzo](#Rondedzero-makonesheni)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Bvisa chinongedzo](#Bvisa-kubatanidza)
 * [Bvisa zvese zvinongedzo](#Bvisa-zvese-zvinongedzo)
 * [Kushanda nekuchengetedza](#Kushanda-nekuchengeta)
 * [Nyora mafaera](#Rondedzero-mafaira)
 * [Nyora faira kuti stdout](#Nyora-faira-ku-stdout)
 * [Kopi mafaera](#Copy-mafaira)
 * [Bvisa mafaera](#Delete-mafaira)
 * [Ona metadata](#Tarisa-metadata)
 * [Mirror madhairekitori](#Mirror-dhairekitori)

 ### Source
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Tsigiro uye Mari
 Ndiri kuyedza kuve nyanzvi yakavhurika sosi software yekuvandudza. Ndanga ndichishanda mu
 indasitiri yemasoftware kwemakore mazhinji, ndakatanga makambani akabudirira uye ndikaatengesa kumakambani eruzhinji.
 Munguva ichangopfuura ndakarasikirwa nebasa rangu, uye handina chaizvoizvo rimwe basa ripi neripi rakarongwa

 Saka ndichaedza kunyora software inobatsira uye kuona kana izvo zvinoshanda

 Kana iwe uchinakidzwa nekushandisa iyi software, ndingazotenda nemoyo wese kunyangwe iyo
 diki [mupiro wepamwedzi nePatreon](https://www.patreon.com/cobbzilla)

 *Ndatenda!*

 ## Kuiswa uye kushandiswa
 Unogona kuisa uye kumhanya `mobiletto-cli` kuburikidza npm kana zvakananga kubva kunobva.

 ### npm package
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Kubva kutsime
 Kuti umhanye kubva kunobva, iwe uchada nodejs v16+ uye shinda

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Connections
 Yese mobiletto yekuchengetedza inowanikwa kuburikidza nekubatanidza.

 Mobiletto parizvino inotsigira zvinongedzo kune yemuno faira system kuchengetedza uye Amazon S3 mabhakiti.

 Kubatanidza kunotsanangurwa nechinhu cheJSON chinoita seizvi:

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

 Kuti uwane ruzivo rwakakwana pane zvese zvingasarudzwa uye kukosha kwavo uye zvazvinoreva, ona iyo
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Gadzira chinongedzo
 Kugadzira chinongedzo chitsva, tinoda chimwe cheizvi zvinhu zveJSON.

 Tinogona kugadzira imwe tichidyidzana, kana kupa imwe kuburikidza nefaira kana JSON chaiyo:

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

 ### Rondedzera zvinongedzo
 Rondedzera zvinongedzo zviripo:

    mo connect -l
    mo connect --list

 ### Dump yekubatanidza JSON config
 Ratidza yakazara JSON config yekubatanidza. ** YAMBIRO ** izvi zvichadhinda makiyi uye zvakavanzika kuti stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Bvisa chinongedzo
 Bvisa chinongedzo chimwe chete:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Bvisa zvese zvinongedzo
 Bvisa zvese zvinongedzo:

    mo connect -R
    mo connect --remove-all

 ## Kushanda nekuchengetedza
 Kana wangogadzira zvimwe zvinongedzo, shandisa `ls` , `cp` , `rm` , `meta` uye `mirror` mashandiro.
 kushanda navo.

 Yese faira nzira yaunopa kune rairo inofanirwa kuve yakagadziriswa nezita rekubatanidza
 zvinoreva. Mumienzaniso iri pazasi, tinofungidzira kuti maviri akabatana aripo anonzi `conn1` uye `conn2`

 ### Nyora mafaira
 Kubuda kwechinyorwa chekuraira nhevedzano yezvinhu zveJSON, imwe pamutsara, inomiririra mafaera
 akawana. Zvinhu izvi zvichava ne `name` uye `type` , uye pamwe nemamwe minda.

    mo ls conn1/some/path

 Nyora mafaera uchidzokororwa:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Encrypted storage note**: Recursive list haisati yatsigirwa kune encrypted connections.
 Unogona kunyora dhairekitori rimwe chete remafaira panguva.

 Nyora mafaira neverbosely (yakanaka-yakadhinda JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Nyora mafaira achidzokororwa uye nezwi:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Wona rubatsiro rwe `ls` command, inotsanangura zvese zvingasarudzwa:

    mo ls -h
    mo ls --help

 ### Nyora faira kustdout
 Iyo `cat` yekuraira ichadhinda faira kuti stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Mumweya wechokwadi weUNIX * (asi hausi iwo maitiro!)* mobiletto's `cat` murairo ** haitore sarudzo **
 kunze `-h` / `--help` kuratidza ruzivo runobatsira.

 ### Kopa mafaira
 Kopa faira rimwe kubva kune imwe mobiletto kuenda kune imwe:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopa faira rimwe chete kubva kune imwe mobiletto kuenda kune imwe, uchiitumidzazve kwairi kuenda:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopira zvekare dhairekitori:

    mo cp -r conn1/some/directory conn2/some/dest/

 Tarisa rubatsiro rwe `cp` murairo, inotsanangura zvese zvingasarudzwa:

    mo cp -h
    mo cp --help

 Ongorora: Kukopa faira hakusi kukurumidza, nekuti parizvino kunoda yepakati temp faira.

 ### Delete mafaira
 Bvisa faira rimwe chete:

    mo rm conn1/some/file.txt

 Bvisa faira rimwe chete uye usanyunyute nezve chero kukanganisa:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Delete dhairekitori:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Bvisa dhairekitori uye usanyunyute nezve chero kukanganisa:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Ona metadata
 Zvinowanzobatsira kuziva metadata yefaira, pasina kurodha faira rese.

 Mobiletto inokwanisa kushuma saizi yefaira uye yekupedzisira yakagadziridzwa nguva, kuwedzera kune zita uye mhando.

 Kuti uone metadata:

    mo meta conn1/some/file.txt

 ### Mirror madhairekitori
 Mirroring inopfuura nyaya yakakosha ye `cp` , iri yakaparadzana mobiletto command inoputira iyo
 kopi kushanda; inoenderera kunyange kana kukanganisa kukaitika, uye kuronda nhamba yekubudirira uye kukanganisa.

 Kuratidzira zvese kubva conn1 kuita conn2:

    mo mirror conn1 conn2

 Kuratidzira subdirectory:

    mo mirror conn1/some/subdir conn2

 Kuratidzira subdirectory mune imwe subdirectory:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
