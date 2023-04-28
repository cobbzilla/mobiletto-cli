mobiletto-cli
 ==============
 Interface tal-linja tal-kmand (CLI) għal [mobiletto](https://www.npmjs.com/package/mobiletto)
 ħażna.

 Mobiletto jappoġġja konnessjonijiet ma 'Amazon S3, Backblaze B2, u sistemi ta' fajls lokali.

 # Aqra dan b'lingwa oħra
 Dan id-dokument README.md ġie tradott, permezz ta’ [hokeylization](https://github.com/cobbzilla/hokeylization), fi
 **[kull lingwa appoġġjata minn Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jien ċert li mhuwiex perfett, imma nispera li huwa aħjar minn xejn!

 [🇸🇦 Għarbi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Ġermaniż](../de/README.md)
 [🇺🇸 Ingliż](../en/README.md)
 [🇪🇸 Spanjol](../es/README.md)
 [🇫🇷 Franċiż](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Ħindi](../hi/README.md)
 [🇮🇩 Indoneżjan](../id/README.md)
 [🇮🇹 Taljan](../it/README.md)
 [🇯🇵 Ġappuniż](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pollakk](../pl/README.md)
 [🇧🇷 Portugiż](../pt/README.md)
 [🇷🇺 Russu](../ru/README.md)
 [🇰🇪 Swaħili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tork](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vjetnamiż](../vi/README.md)
 [🇨🇳 Ċiniż](../zh/README.md)


 **[📚 ... Il-Lingwi kollha ...](../README.md)**
 ----

 ### Hemm problema b'din it-traduzzjoni tar-README?
 Din it-traduzzjoni partikolari tal-oriġinal [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 jista 'jkun difettuż -- *korrezzjonijiet huma milqugħa ħafna!* Jekk jogħġbok ibgħat [pull request fuq GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 jew jekk m'intix komdu tagħmel dan, [iftaħ kwistjoni](https://github.com/cobbzilla/mobiletto-cli/issues)

 Meta toħloq kwistjoni ġdida ta' GitHub dwar traduzzjoni, jekk jogħġbok agħmel:
 * inkludi l-URL tal-paġna (kopja/pejst mill-bar tal-indirizz tal-browser)
 * inkludi t-test eżatt li huwa ħażin (ikkopja/pejst mill-browser)
 * jekk jogħġbok iddeskrivi x'inhu ħażin -- it-traduzzjoni hija żbaljata? l-ifformattjar huwa miksur b'xi?
 * ġentilment toffri suġġeriment għal traduzzjoni aħjar, jew kif it-test għandu jkun ifformattjat kif suppost
 * **Grazzi!**

 # Kontenut
 * [Sors](#Sors)
 * [Appoġġ u Finanzjament](#Appoġġ-u-Finanzjament)
 * [Installazzjoni u użu](#Installazzjoni-u-użu)
 * [pakkett npm](#npm-pakkett)
 * [Mis-sors](#Mis-sors)
 * [Konnessjonijiet](#Konnessjonijiet)
 * [Oħloq konnessjoni](#Oħloq konnessjoni)
 * [Lista konnessjonijiet](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Neħħi konnessjoni](#Neħħi konnessjoni)
 * [Neħħi l-konnessjonijiet kollha](#Neħħi l-konnessjonijiet kollha)
 * [Ħidma mal-ħażna](#Working-with-storage)
 * [Lista fajls](#List-files)
 * [Ikteb fajl lil stdout](#Write-a-file-to-stdout)
 * [Kopja fajls](#Kopja-fajls)
 * [Ħassar fajls](#Ħassar-fajls)
 * [Ara l-metadejta](#Ara l-metadejta)
 * [Directorji tal-mera](#Direttorji-mera)

 ### Sors
 * [mobiletto-cli fuq GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli fuq npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Appoġġ u Finanzjament
 Qed nipprova nkun żviluppatur professjonali ta' software open source. Ilni naħdem fiha
 l-industrija tas-softwer għal ħafna snin, bdejt kumpaniji ta 'suċċess u biegħhom lil kumpaniji pubbliċi.
 Dan l-aħħar tlift ix-xogħol tiegħi, u ma tantx għandi xogħol ieħor imħejji

 Allura jien ser nipprova nikteb softwer utli u nara jekk dan jaħdem

 Jekk inti tgawdi tuża dan is-software, inkun sinċerament grat anke għall-
 l-iżgħar [kontribuzzjoni ta' kull xahar permezz ta' Patreon](https://www.patreon.com/cobbzilla)

 *Grazzi!*

 ## Installazzjoni u użu
 Tista' tinstalla u tħaddem `mobiletto-cli` permezz ta' npm jew direttament mis-sors.

 ### pakkett npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Mis-sors
 Biex taħdem mis-sors, ikollok bżonn nodejs v16+ u ħjut

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Konnessjonijiet
 Il-ħażna kollha tal-mobiletto hija aċċessata permezz ta 'konnessjoni.

 Mobiletto bħalissa jappoġġja konnessjonijiet mal-ħażna tas-sistema tal-fajls lokali u l-bramel Amazon S3.

 Il-konnessjonijiet huma speċifikati minn oġġett JSON li jidher bħal dan:

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

 Għal dettalji sħaħ dwar l-għażliet kollha u l-valuri u t-tifsiriet tagħhom, ara l-
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Oħloq konnessjoni
 Biex noħolqu konnessjoni ġdida, għandna bżonn wieħed minn dawn l-oġġetti JSON.

 Nistgħu noħolqu waħda b'mod interattiv, jew nipprovdu waħda permezz ta' fajl jew JSON litterali:

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

 ### Lista konnessjonijiet
 Elenka l-konnessjonijiet disponibbli:

    mo connect -l
    mo connect --list

 ### Konfigurazzjoni tad-dump JSON tal-konnessjoni
 Uri l-konfigurazzjoni JSON sħiħa għal konnessjoni. **TWISSIJA** dan se jistampa ċwievet u sigrieti għal stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Neħħi konnessjoni
 Neħħi konnessjoni waħda:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Neħħi l-konnessjonijiet kollha
 Neħħi l-konnessjonijiet KOLLHA:

    mo connect -R
    mo connect --remove-all

 ## Ħidma mal-ħażna
 Ladarba tkun ħoloq xi konnessjonijiet, uża l- `ls` , `cp` , `rm` , `meta` u `mirror` mirror`
 biex jaħdmu magħhom.

 Kull mogħdija tal-fajl li tipprovdi lil kmand għandha tkun prefissa bl-isem tal-konnessjoni
 tirreferi għal. Fl-eżempji hawn taħt, nassumu li jeżistu żewġ konnessjonijiet bl-isem `conn1` " u `conn2`

 ### Lista fajls
 L-output ta 'kmand tal-lista huwa serje ta' oġġetti JSON, wieħed għal kull linja, li jirrappreżentaw il-fajls
 misjuba. Dawn l-oġġetti se jkollhom `name` isem" u `type` , u possibbilment oqsma oħra.

    mo ls conn1/some/path

 Elenka l-fajls b'mod rikorsiv:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota dwar il-ħażna kkodifikata**: Elenkar rikursiv għadu mhux appoġġat għal konnessjonijiet kriptati.
 Tista' telenka direttorju wieħed biss ta' fajls kull darba.

 Elenka l-fajls b'mod verbose (JSON stampat pjuttost):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Elenka l-fajls b'mod rikorsiv u verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Ara l-għajnuna għall-kmand `ls` , jiddeskrivi l-għażliet kollha:

    mo ls -h
    mo ls --help

 ### Ikteb fajl lil stdout
 Il-kmand `cat` se jistampa fajl għal stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Fl-ispirtu UNIX veru *(iżda żgur mhux il-prattika!)* il-kmand `cat` ta' mobiletto **ma jieħu l-ebda għażla**
 minbarra `-h` / `--help` biex turi informazzjoni utli.

 ### Ikkopja fajls
 Ikkopja fajl wieħed minn mobiletto għal ieħor:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Ikkopja fajl wieħed minn mobiletto għal ieħor, semmielu mill-ġdid fid-destinazzjoni:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Ikkopja direttorju b'mod rikorsiv:

    mo cp -r conn1/some/directory conn2/some/dest/

 Ara l-għajnuna għall-kmand `cp` , tiddeskrivi l-għażliet kollha:

    mo cp -h
    mo cp --help

 Nota: L-ikkupjar tal-fajls mhuwiex mgħaġġel ħafna, għax bħalissa jeħtieġ fajl temp intermedjarju.

 ### Ħassar il-fajls
 Ħassar fajl wieħed:

    mo rm conn1/some/file.txt

 Ħassar fajl wieħed u ma tilmenta dwar xi żbalji:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Ħassar direttorju:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Ħassar direttorju u ma tilmenta dwar xi żbalji:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Ara l-metadata
 Ħafna drabi jkun utli li tkun taf il-metadata għal fajl, mingħajr ma tniżżel il-fajl kollu.

 Mobiletto huwa kapaċi jirrapporta d-daqs tal-fajl u l-aħħar ħin modifikat, minbarra l-isem u t-tip.

 Biex tara l-metadejta:

    mo meta conn1/some/file.txt

 ### Direttorji mera
 Mirroring huwa aktar minn każ speċjali ta `cp` , huwa kmand tal-mobiletto separat li jgeżwer il-
 operazzjoni ta' kopja; tkompli anke meta jseħħu żbalji, u jsegwu għadd ta 'suċċessi u żbalji.

 Biex tirrifletti kollox minn conn1 għal conn2:

    mo mirror conn1 conn2

 Biex tirrifletti sottodirettorju:

    mo mirror conn1/some/subdir conn2

 Biex tirrifletti sottodirettorju f'subdirettorju ieħor:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
