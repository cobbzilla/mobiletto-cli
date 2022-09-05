mobiletto-cli
 ==============
 Kiolesura cha mstari wa amri (CLI) cha [mobiletto](https://www.npmjs.com/package/mobiletto)
 hifadhi.

 Mobiletto inasaidia miunganisho kwa Amazon S3, Backblaze B2, na mifumo ya faili ya ndani.

 # Soma hii kwa lugha nyingine
 Hati hii ya README.md imetafsiriwa, kupitia [hokeylization](https://github.com/cobbzilla/hokeylization), hadi
 **[kila lugha inayotumika na Google Tafsiri](https://cloud.google.com/translate/docs/languages)!**

 Nina hakika sio kamili, lakini natumai ni bora kuliko chochote!

 [🇸🇦 Kiarabu](hati/ar/README.md)
 [🇧🇩 Kibengali](hati/bn/README.md)
 [🇩🇪 Kijerumani](../de/README.md)
 [🇺🇸 Kiingereza]( hati/sw/README.md)
 [🇪🇸 Kihispania](hati/es/README.md)
 [🇫🇷 Kifaransa](../fr/README.md)
 [🇹🇩 Kihausa](hati/ha/README.md)
 [🇮🇳 Kihindi](hati/hi/README.md)
 [🇮🇩 Kiindonesia](hati/id/README.md)
 [🇮🇹 Kiitaliano](hati/it/README.md)
 [🇯🇵 Kijapani](hati/ja/README.md)
 [🇰🇷 Kikorea](hati/ko/README.md)
 [🇮🇳 Maranthi](hati/mr/README.md)
 [🇵🇱 Kipolandi](hati/pl/README.md)
 [🇧🇷 Kireno](hati/pt/README.md)
 [🇷🇺 Kirusi](hati/ru/README.md)
 [🇰🇪 Kiswahili](hati/sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Kituruki](hati/tr/README.md)
 [🇵🇰 Kiurdu](hati/ur/README.md)
 [🇻🇳 Kivietinamu](hati/vi/README.md)
 [🇨🇳 Kichina](hati/zh/README.md)


 **[📚 ... Lugha Zote ...](hati/README.md)**
 ----

 ### Je, kuna tatizo katika tafsiri hii ya README?
 Tafsiri hii mahususi ya [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 inaweza kuwa na dosari -- *marekebisho yanakaribishwa sana!* Tafadhali tuma [ombi la kuvuta kwenye GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 au ikiwa huna raha kufanya hivyo, [fungua toleo](https://github.com/cobbzilla/mobiletto-cli/issues)

 Unapounda toleo jipya la GitHub kuhusu tafsiri, tafadhali fanya:
 * jumuisha URL ya ukurasa (nakili/bandika kutoka kwa upau wa anwani ya kivinjari)
 * jumuisha maandishi kamili ambayo sio sahihi (nakili/bandika kutoka kwa kivinjari)
 * tafadhali eleza kilicho kibaya -- je tafsiri si sahihi? umbizo limevunjika kwa namna fulani?
 * tafadhali toa pendekezo la tafsiri bora zaidi, au jinsi maandishi yanapaswa kupangwa vizuri
 * **Asante!**

 # Yaliyomo
 * [Chanzo](#Chanzo)
 * [Msaada na Ufadhili](#Msaada-na-Ufadhili)
 * [Usakinishaji na matumizi](#Usakinishaji-na-utumiaji)
 * [npm package](#npm-furushi)
 * [Kutoka chanzo](#Kutoka-chanzo)
 * [Miunganisho](#Miunganisho)
 * [Unda muunganisho](#Tengeneza-muunganisho)
 * [Orodhesha miunganisho](#Orodha-miunganisho)
 * [Tupa muunganisho wa JSON](#Tupa-muunganisho-JSON-config)
 * [Ondoa muunganisho](#Ondoa-muunganisho)
 * [Ondoa miunganisho yote](#Ondoa-miunganisho-yote)
 * [Inafanya kazi na hifadhi](#Inafanya kazi-na-hifadhi)
 * [Orodhesha faili](#Orodha-faili)
 * [Andika faili ili stdout](#Andika-faili-to-stdout)
 * [Nakili faili](#Nakili-faili)
 * [Futa faili](#Futa-faili)
 * [Angalia metadata](#Tazama-metadata)
 * [Daraja za kioo](#saraka za Kioo)

 ### Chanzo
 * [mobiletto-cli kwenye GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Msaada na Ufadhili
 Ninajaribu kuwa mtaalamu wa kuunda programu huria. Nimekuwa nikifanya kazi ndani
 tasnia ya programu kwa miaka mingi, nimeanzisha kampuni zilizofanikiwa na kuziuza kwa kampuni za umma.
 Hivi majuzi nilipoteza kazi yangu, na kwa kweli sina kazi nyingine yoyote iliyopangwa

 Kwa hivyo nitajaribu kuandika programu muhimu na kuona ikiwa hiyo inafanya kazi

 Ikiwa unafurahiya kutumia programu hii, ningeshukuru kwa dhati hata kwa
 ndogo zaidi [mchango wa kila mwezi kupitia Patreon](https://www.patreon.com/cobbzilla)

 *Asante!*

 ## Ufungaji na matumizi
 Unaweza kusakinisha na kuendesha `mobiletto-cli` kupitia npm au moja kwa moja kutoka kwa chanzo.

 ### npm kifurushi
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Kutoka kwa chanzo
 Ili kukimbia kutoka kwa chanzo, utahitaji nodejs v16+ na uzi

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ##Viunganisho
 Hifadhi yote ya mobiletto inapatikana kupitia muunganisho.

 Mobiletto kwa sasa inasaidia miunganisho kwenye hifadhi ya mfumo wa faili wa ndani na ndoo za Amazon S3.

 Viunganisho vimebainishwa na kitu cha JSON ambacho kinaonekana kama hii:

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

 Kwa maelezo kamili juu ya chaguzi zote na maadili na maana zao, angalia
 [hati-hati za rununu](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Unda muunganisho
 Ili kuunda muunganisho mpya, tunahitaji mojawapo ya vitu hivi vya JSON.

 Tunaweza kuunda moja kwa maingiliano, au kusambaza moja kupitia faili au JSON halisi:

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

 ### Orodhesha miunganisho
 Orodhesha miunganisho inayopatikana:

    mo connect -l
    mo connect --list

 ### Tupa muunganisho wa JSON
 Onyesha usanidi kamili wa JSON kwa muunganisho. **ONYO** hii itachapisha funguo na siri za stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Ondoa muunganisho
 Ondoa muunganisho mmoja:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Ondoa miunganisho yote
 Ondoa miunganisho YOTE:

    mo connect -R
    mo connect --remove-all

 ## Inafanya kazi na hifadhi
 Mara baada ya kuunda miunganisho kadhaa, tumia shughuli za `ls` , `cp` , `rm` , `meta` na `mirror` .
 kufanya kazi nao.

 Kila njia ya faili unayotoa kwa amri lazima iwe na jina la muunganisho
 inahusu. Katika mifano iliyo hapa chini, tunadhania miunganisho miwili ipo inayoitwa `conn1` na `conn2`

 ### Orodhesha faili
 Matokeo ya amri ya orodha ni mfululizo wa vitu vya JSON, moja kwa kila mstari, inayowakilisha faili
 kupatikana. Vipengee hivi vitakuwa na `name` na `type` , na ikiwezekana sehemu zingine.

    mo ls conn1/some/path

 Orodhesha faili kwa kujirudia:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Dokezo la hifadhi iliyosimbwa kwa njia fiche**: Uorodheshaji unaojirudia bado hautumiki kwa miunganisho iliyosimbwa kwa njia fiche.
 Unaweza tu kuorodhesha saraka moja ya faili kwa wakati mmoja.

 Orodhesha faili kitenzi (chapisha nzuri JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Orodhesha faili kwa kujirudia na kwa maneno:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Tazama usaidizi wa amri ya `ls` , inaelezea chaguzi zote:

    mo ls -h
    mo ls --help

 ### Andika faili kwa stdout
 Amri ya `cat` faili ili stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Katika roho ya kweli ya UNIX *(lakini hakika si mazoezi!)* amri ya `cat` ya mobiletto **haichukui chaguzi zozote**
 isipokuwa `-h` / `--help` ili kuonyesha taarifa muhimu.

 ### Nakili faili
 Nakili faili moja kutoka mobiletto moja hadi nyingine:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Nakili faili moja kutoka mobiletto moja hadi nyingine, ukibadilisha jina kwenye lengwa:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Nakili saraka kwa kujirudia:

    mo cp -r conn1/some/directory conn2/some/dest/

 Tazama usaidizi wa amri ya `cp` , inaelezea chaguzi zote:

    mo cp -h
    mo cp --help

 Kumbuka: Kunakili faili si haraka sana, kwa sababu kwa sasa kunahitaji faili ya muda wa kati.

 ### Futa faili
 Futa faili moja:

    mo rm conn1/some/file.txt

 Futa faili moja na usilalamike kuhusu makosa yoyote:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Futa saraka:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Futa saraka na usilalamike juu ya makosa yoyote:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Tazama metadata
 Mara nyingi ni muhimu kujua metadata ya faili, bila kupakua faili nzima.

 Mobiletto ina uwezo wa kuripoti saizi ya faili na wakati wa mwisho uliorekebishwa, pamoja na jina na aina.

 Ili kutazama metadata:

    mo meta conn1/some/file.txt

 ### Vioo saraka
 Kuakisi ni zaidi ya kisa maalum cha `cp` , ni amri tofauti ya mobiletto ambayo hufunika
 operesheni ya nakala; inaendelea hata makosa yanapotokea, na kufuatilia hesabu ya mafanikio na makosa.

 Kuakisi kila kitu kutoka kwa conn1 hadi conn2:

    mo mirror conn1 conn2

 Ili kuakisi saraka ndogo:

    mo mirror conn1/some/subdir conn2

 Ili kuakisi saraka ndogo katika saraka nyingine ndogo:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
