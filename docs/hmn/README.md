mobiletto-cli
 ========
 Ib tug hais kom ua-line interface (CLI) rau [mobiletto](https://www.npmjs.com/package/mobiletto)
 khaws cia.

 Mobiletto txhawb kev sib txuas rau Amazon S3, Backblaze B2, thiab cov ntaub ntawv hauv zos.

 # Nyeem qhov no ua lwm hom lus
 Cov ntaub ntawv README.md no tau raug muab txhais, ntawm [hokeylization](https://github.com/cobbzilla/hokeylization), rau hauv
 **[txhua hom lus txhawb nqa los ntawm Google Txhais](https://cloud.google.com/translate/docs/languages)!**

 Kuv paub tseeb tias nws tsis zoo tag nrho, tab sis kuv vam tias nws zoo dua tsis muaj dab tsi!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 Fab Kis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Nyiv](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Nyab Laj](../vi/README.md)
 [🇨🇳 Suav](../zh/README.md)


 **[📚...Txhua Yam Lus...](../README.md)**
 ----

 ### Puas muaj teeb meem nrog qhov kev txhais lus ntawm README?
 Qhov kev txhais lus tshwj xeeb ntawm tus thawj [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 tej zaum yuav muaj qhov tsis txaus ntseeg -- * kho tau zoo siab txais tos!* Thov xa [rub thov ntawm GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 lossis yog tias koj tsis xis nyob ua qhov ntawd, [qhib qhov teeb meem](https://github.com/cobbzilla/mobiletto-cli/issues)

 Thaum koj tsim qhov teeb meem tshiab GitHub txog kev txhais lus, thov ua:
 * suav nrog nplooj URL (copy / paste los ntawm browser chaw nyob bar)
 * suav nrog cov ntawv tseeb uas tsis yog (copy / paste los ntawm browser)
 * thov piav qhia qhov tsis raug - puas yog kev txhais lus tsis raug? yog formatting puas lawm?
 * Ua siab zoo muab cov lus pom zoo ntawm kev txhais lus zoo dua, lossis yuav ua li cas cov ntawv yuav tsum raug formatted kom raug
 ** Ua tsaug!**

 # Cov ntsiab lus
 * [Source](#Source)
 * [Support thiab Funding](#Support-and-Funding)
 * [Kev teeb tsa thiab kev siv](#Installation-and-usage)
 * [npm pob](#npm-pob)
 * [Los ntawm qhov chaw](#From-source)
 * [Kev sib txuas](#Kev sib txuas)
 * [Tsim kev sib txuas](#Create-a-kev sib txuas)
 * [Lus npe sib txuas](#Lus-kev sib txuas)
 * [Dump kev twb kev txuas JSON config](#Dump-kev twb kev txuas-JSON-config)
 * [Tshem tawm kev sib txuas](#Tshem tawm-ib-kev sib txuas)
 * [Tshem tawm tag nrho cov kev sib txuas](#Tshem tawm-tag nrho-kev sib txuas)
 * [Ua haujlwm nrog kev cia](# Ua haujlwm-nrog- khaws cia)
 * [Cov ntaub ntawv teev npe](#List-files)
 * [Sau ib cov ntaub ntawv rau stdout](#Write-a-file-to-stdout)
 * [Cov ntaub ntawv theej](#Copy-files)
 * [Delete files](#Delete-files)
 * [Saib metadata](#Saib-metadata)
 * [Daim iav directories](#Daim iav-directories)

 ### Source
 * [mobiletto-cli ntawm GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli ntawm npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Kev them nyiaj yug thiab nyiaj txiag
 Kuv tab tom sim ua tus kws tshaj lij qhib qhov software tsim tawm. Kuv tau ua haujlwm hauv
 kev lag luam software tau ntau xyoo, kuv tau pib cov tuam txhab ua tiav thiab muag rau cov tuam txhab pej xeem.
 Tsis ntev los no kuv poob kuv txoj haujlwm, thiab kuv tsis muaj lwm txoj haujlwm ua haujlwm

 Yog li kuv yuav sim sau cov software pab tau thiab saib seb qhov ntawd ua haujlwm

 Yog tias koj txaus siab rau siv cov software no, kuv yuav ua tsaug rau qhov txawm tias
 tsawg tshaj plaws [kev pab nyiaj hli ntawm Patreon](https://www.patreon.com/cobbzilla)

 * Ua tsaug!*

 ## Kev teeb tsa thiab kev siv
 Koj tuaj yeem nruab thiab khiav `mobiletto-cli` ntawm npm lossis ncaj qha los ntawm qhov chaw.

 ### npm package
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Los ntawm qhov chaw
 Txhawm rau khiav ntawm qhov chaw, koj yuav xav tau nodejs v16+ thiab xov paj

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Kev sib txuas
 Txhua mobiletto cia yog nkag los ntawm kev sib txuas.

 Mobiletto tam sim no txhawb kev sib txuas rau cov ntaub ntawv hauv zos thiab Amazon S3 thoob.

 Kev sib txuas tau teev tseg los ntawm JSON cov khoom uas zoo li no:

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

 Rau cov ntsiab lus tag nrho ntawm txhua qhov kev xaiv thiab lawv cov txiaj ntsig thiab lub ntsiab lus, saib cov
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Tsim kev sib txuas
 Txhawm rau tsim kev sib txuas tshiab, peb xav tau ib qho ntawm cov khoom JSON no.

 Peb tuaj yeem tsim ib qho kev sib tham, lossis muab ib qho ntawm cov ntaub ntawv lossis JSON cov ntawv:

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

 ### Sau cov kev sib txuas
 Sau cov kev sib txuas muaj:

    mo connect -l
    mo connect --list

 ### Pob tseg kev twb kev txuas JSON config
 Qhia tag nrho JSON config rau kev sib txuas. ** CEEB TOOM ** qhov no yuav luam cov yuam sij thiab zais cia rau stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Tshem tawm kev sib txuas
 Tshem tawm ib qho kev sib txuas:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Tshem tag nrho cov kev sib txuas
 Tshem tag nrho cov kev sib txuas:

    mo connect -R
    mo connect --remove-all

 ## Ua haujlwm nrog kev khaws cia
 Thaum koj tau tsim qee qhov kev sib txuas, siv `ls` ', `cp` , `rm` , `meta` thiab `mirror` ua haujlwm
 mus ua hauj lwm nrog lawv.

 Txhua txoj hauv kev uas koj muab rau cov lus txib yuav tsum tau ua ntej nrog lub npe ntawm kev sib txuas
 nws hais txog. Hauv cov piv txwv hauv qab no, peb xav tias ob qhov kev sib txuas muaj npe hu ua `conn1` thiab `conn2`

 ### Sau cov ntaub ntawv
 Cov zis ntawm cov npe hais kom ua yog cov khoom ntawm JSON, ib kab ib kab, sawv cev rau cov ntaub ntawv
 pom. Cov khoom no yuav muaj `name` lub npe' thiab `type` , thiab tejzaum nws yog lwm qhov chaw.

    mo ls conn1/some/path

 Sau cov ntaub ntawv recursively:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Encrypted storage note**: Recursive listing tseem tsis tau txais kev txhawb nqa rau kev sib txuas encrypted.
 Koj tsuas tuaj yeem sau ib daim ntawv teev npe ntawm cov ntaub ntawv ib zaug.

 Sau cov ntaub ntawv verbosely (zoo nkauj-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Sau cov ntaub ntawv recursively thiab verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Saib kev pab rau `ls` hais kom ua, piav qhia txhua yam kev xaiv:

    mo ls -h
    mo ls --help

 ### Sau ib daim ntawv rau stdout
 Cov lus txib `cat` yuav luam ib cov ntaub ntawv rau stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Hauv qhov tseeb UNIX tus ntsuj plig * (tsis tau yog qhov kev xyaum!)* mobiletto'cat `cat` hais kom ua ** tsis muaj kev xaiv **
 lwm yam tshaj li `-h` / `--help` los tso saib cov ntaub ntawv muaj txiaj ntsig.

 ### Luam cov ntaub ntawv
 Luam ib cov ntaub ntawv los ntawm ib qho mobiletto mus rau lwm tus:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Luam ib cov ntaub ntawv los ntawm ib qho mobiletto mus rau lwm qhov, renaming nws ntawm lo lus uas peb:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Recursively luam ib daim ntawv teev npe:

    mo cp -r conn1/some/directory conn2/some/dest/

 Saib kev pab rau `cp` hais kom ua, piav qhia txhua yam kev xaiv:

    mo cp -h
    mo cp --help

 Nco tseg: Kev luam cov ntaub ntawv tsis ceev heev, vim tias tam sim no nws xav tau cov ntaub ntawv temp intermediary.

 ### Rho tawm cov ntaub ntawv
 Rho tawm ib cov ntaub ntawv:

    mo rm conn1/some/file.txt

 Rho tawm ib cov ntaub ntawv thiab tsis txhob yws txog tej yam tsis raug:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Rho tawm cov directory:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Rho tawm ib daim ntawv teev npe thiab tsis txhob yws txog qhov yuam kev:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Saib metadata
 Nws yog feem ntau pab tau kom paub cov metadata rau cov ntaub ntawv, tsis tas rub tawm tag nrho cov ntaub ntawv.

 Mobiletto muaj peev xwm tshaj tawm cov ntaub ntawv loj thiab lub sijhawm hloov kho kawg, ntxiv rau lub npe thiab hom.

 Mus saib metadata:

    mo meta conn1/some/file.txt

 ### Daim iav directory
 Mirroring yog ntau tshaj li qhov tshwj xeeb ntawm `cp` , nws yog ib qho kev sib cais mobiletto hais kom qhwv lub
 luam ntawv ua haujlwm; nws txuas ntxiv txawm tias thaum muaj teeb meem tshwm sim, thiab taug qab cov suav ntawm kev ua tiav thiab qhov tsis raug.

 Kom mirror txhua yam ntawm conn1 rau conn2:

    mo mirror conn1 conn2

 Mus mirror ib subdirectory:

    mo mirror conn1/some/subdir conn2

 Mus mirror ib subdirectory mus rau lwm subdirectory:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
