mobiletto-cli
 =============
 Mawonekedwe a mzere wolamula (CLI) wa [mobiletto](https://www.npmjs.com/package/mobiletto)
 yosungirako.

 Mobiletto imathandizira kulumikizana ndi Amazon S3, Backblaze B2, ndi mafayilo am'deralo.

 # Werengani izi muchilankhulo china
 Chikalata cha README.md chamasuliridwa, kudzera pa [hokeylization](https://github.com/cobbzilla/hokeylization), ku
 **[chinenero chilichonse chimathandizidwa ndi Zomasulira za Google](https://cloud.google.com/translate/docs/languages)!**

 Ndikutsimikiza kuti sizabwino, koma ndikukhulupirira kuti nzabwino kuposa chilichonse!

 [🇸🇦 Chiarabu](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Chijeremani](../de/README.md)
 [🇺🇸 Chingerezi](../en/README.md)
 [🇪🇸 Chisipanishi](../es/README.md)
 [🇫🇷 Chifulenchi](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Chihindi](../hi/README.md)
 [🇮🇩 Chiindoneziya](../id/README.md)
 [🇮🇹 Chiitaliya](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Chikorea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Chipolishi](../pl/README.md)
 [🇧🇷 Chipwitikizi](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Zinenero Zonse ...](../README.md)**
 ----

 ### Kodi pali vuto ndi kumasulira kumeneku kwa README?
 Kumasulira kwenikweniku [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 zitha kukhala zolakwika -- *zokonza ndizolandilidwa kwambiri!* Chonde tumizani [kukoka pempho pa GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 kapena ngati simumasuka kuchita zimenezo, [tsegulani nkhani](https://github.com/cobbzilla/mobiletto-cli/issues)

 Mukapanga nkhani yatsopano ya GitHub yokhudza kumasulira, chonde chitani:
 * Phatikizani ulalo watsamba (koperani / kumata kuchokera pa adilesi ya msakatuli)
 * Phatikizani zomwe zili zolakwika (koperani/mata kuchokera pa msakatuli)
 * chonde fotokozani chomwe chalakwika -- kodi kumasulira kwake ndikolakwika? Kodi masanjidwewo awonongeka mwanjira ina?
 * perekani mokoma mtima lingaliro la kumasulira kwabwinoko, kapena mmene malembawo ayenera kusanjidwira bwino
 * **Zikomo!**

 # Zamkatimu
 * [Gwero](#Source)
 * [Thandizo ndi Ndalama](#Thandizo-ndi-ndandalama)
 * [Kuyika ndi kugwiritsa ntchito](#Kuyika-ndi kugwiritsa ntchito)
 * [npm phukusi](#npm-phukusi)
 * [Kuchokera kugwero](#Kuchokera-gwero)
 * [Malumikizidwe](#Malumikizidwe)
 * [Pangani cholumikizira](#Pangani-malumikizidwe)
 * [Mndandanda wamalumikizidwe](#Zolumikizira-mndandanda)
 * [Sinthani kulumikiza kwa JSON](#Dump-connection-JSON-config)
 * [Chotsani cholumikizira](#Chotsani-kulumikiza)
 * [Chotsani zolumikizira zonse](#Chotsani-zolumikizira-zonse)
 * [Kugwira ntchito posungira](#Kugwira ntchito ndi posungira)
 * [Mndandanda wamafayilo](#Mndandanda-mafayilo)
 * [Lembani fayilo kuti stdout](#Lembani-fayilo-kuti-stdout)
 * [Koperani mafayilo](#Mafayilo-Matulani)
 * [Chotsani mafayilo](#Chotsani-mafayilo)
 * [Onani metadata](#Onani-metadata)
 * [Kalozera wagalasi](#Mirror-directories)

 ### Gwero
 * [mobiletto-cli pa GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli pa npm](https://www.npmjs.com/package/mobiletto-cli)

 # Thandizo ndi Ndalama
 Ndikuyesera kukhala katswiri wopanga mapulogalamu otseguka. Ndakhala ndikugwira ntchito ku
 makampani opanga mapulogalamu kwa zaka zambiri, ndayambitsa makampani opambana ndikugulitsa kumakampani aboma.
 Posachedwapa ndinachotsedwa ntchito, ndipo ndilibe ntchito ina iliyonse yotsatizana

 Chifukwa chake ndiyesera kulemba mapulogalamu othandiza ndikuwona ngati izi zikugwira ntchito

 Ngati mumakonda kugwiritsa ntchito pulogalamuyo, ndingayamikire kwambiri ngakhale
 zing'onozing'ono [zopereka pamwezi kudzera pa Patreon](https://www.patreon.com/cobbzilla)

 *Zikomo!*

 ## Kuyika ndi kugwiritsa ntchito
 Mutha kukhazikitsa ndikuyendetsa `mobiletto-cli` kudzera npm kapena mwachindunji kuchokera kugwero.

 ### npm phukusi
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Kuchokera kugwero
 Kuti muthane ndi gwero, mufunika ma nodejs v16+ ndi ulusi

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 # # Zogwirizana
 Zosungira zonse za mobiletto zimafikiridwa kudzera pa intaneti.

 Mobiletto pakadali pano imathandizira kulumikizana ndi malo osungira mafayilo akumaloko ndi ndowa za Amazon S3.

 Malumikizidwe amafotokozedwa ndi chinthu cha JSON chomwe chikuwoneka motere:

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

 Kuti mumve zambiri pazosankha zonse ndi zikhulupiriro ndi matanthauzo awo, onani
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Pangani mgwirizano
 Kuti mupange kulumikizana kwatsopano, tikufuna chimodzi mwazinthu za JSON.

 Titha kupanga imodzi molumikizana, kapena kupereka imodzi kudzera pa fayilo kapena JSON yeniyeni:

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

 ### Lembani zolumikizira
 Lembani maulalo omwe alipo:

    mo connect -l
    mo connect --list

 ### Chotsani kulumikizana kwa JSON config
 Onetsani masinthidwe athunthu a JSON kuti mulumikizane. **CHENJEZO** izi zisindikiza makiyi ndi zinsinsi kuti stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Chotsani kulumikizana
 Chotsani kulumikizana kumodzi:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Chotsani zolumikizira zonse
 Chotsani malumikizidwe ONSE:

    mo connect -R
    mo connect --remove-all

 ## Kugwira ntchito ndi yosungirako
 Mukangopanga zolumikizira, gwiritsani ntchito `ls` , `cp` , `rm` , `meta` ndi `mirror` ntchito.
 kugwira nawo ntchito.

 Njira iliyonse yamafayilo yomwe mumapereka ku lamulo iyenera kukhala ndi dzina la kulumikizana
 imanena za. M'zitsanzo zomwe zili pansipa, tikuganiza kuti kulumikizana kuwiri kulipo otchedwa `conn1` ndi `conn2`

 ### Lembani mafayilo
 Zotsatira za mndandanda wa mndandanda ndi mndandanda wa zinthu za JSON, chimodzi pamzere, kuyimira mafayilo
 anapeza. Zinthu izi zidzakhala ndi `name` ndi `type` , ndipo mwina madera ena.

    mo ls conn1/some/path

 Lembani mafayilo mobwerezabwereza:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Chidziwitso chosungirako encrypted**: Mndandanda wobwereza sunagwiritsidwebe pamalumikizidwe obisika.
 Mutha kungolemba chikwatu chimodzi cha mafayilo nthawi imodzi.

 Lembani mafayilo amtundu wa verbosely (yosindikiza bwino JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lembani mafayilo mobwerezabwereza komanso mwamawu:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Onani thandizo la lamulo la `ls` , limafotokoza zosankha zonse:

    mo ls -h
    mo ls --help

 ### Lembani fayilo ku stdout
 Lamulo la `cat` lidzasindikiza fayilo kuti stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Mumzimu woona wa UNIX *(koma sizomwe zimachitika!)* lamulo la mobiletto la `cat` ** silimatengera zosankha**
 kupatula `-h` / `--help` kuti muwonetse zambiri zothandiza.

 ### Koperani mafayilo
 Koperani fayilo imodzi kuchokera pa mobiletto kupita ku ina:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Lembani fayilo imodzi kuchokera pa mobiletto kupita ku ina, ndikuyitchanso komwe mukupita:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Koperani chikwatu mobwerezabwereza:

    mo cp -r conn1/some/directory conn2/some/dest/

 Onani thandizo la lamulo la `cp` , limafotokoza zosankha zonse:

    mo cp -h
    mo cp --help

 Chidziwitso: Kukopera mafayilo sikothamanga kwambiri, chifukwa pamafunika fayilo yanthawi yayitali.

 ### Chotsani mafayilo
 Chotsani fayilo imodzi:

    mo rm conn1/some/file.txt

 Chotsani fayilo imodzi ndipo musadandaule za zolakwika zilizonse:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Chotsani chikwatu:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Chotsani chikwatu ndipo musadandaule za zolakwika zilizonse:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Onani metadata
 Nthawi zambiri zimakhala zothandiza kudziwa metadata ya fayilo, osatsitsa fayilo yonse.

 Mobiletto amatha kufotokoza kukula kwa fayilo ndi nthawi yosinthidwa, kuwonjezera pa dzina ndi mtundu.

 Kuti muwone metadata:

    mo meta conn1/some/file.txt

 ### Magalasi akalozera
 Mirroring ndi yoposa vuto lapadera la `cp` , ndi lamulo lapadera la mobiletto lomwe limakulunga
 ntchito kukopera; imapitilirabe ngakhale zolakwika zikuchitika, ndikutsata kuchuluka kwa zopambana ndi zolakwika.

 Kuwonetsa chilichonse kuchokera ku conn1 kupita ku conn2:

    mo mirror conn1 conn2

 Kuwonetsa subdirectory:

    mo mirror conn1/some/subdir conn2

 Kuwonetsera kagawo kakang'ono mu subdirectory ina:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
