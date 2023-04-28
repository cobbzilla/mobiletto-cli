mobiletto-umukiriya
 =============
 Imigaragarire yumurongo (CLI) kuri [mobiletto](https://www.npmjs.com/package/mobiletto)
 ububiko.

 Mobiletto ishyigikira guhuza na Amazon S3, Backblaze B2, hamwe na sisitemu yaho.

 # Soma ibi mu rundi rurimi
 Iyi nyandiko README.md yarahinduwe, binyuze kuri [hokeylisation](https://github.com/cobbzilla/hokeylization), muri
 ** [ururimi rwose rushyigikiwe na Google Translate](https://cloud.google.com/translate/docs/ururimi)! **

 Nzi neza ko bidatunganye, ariko nizere ko biruta ubusa!

 [🇸🇦 Icyarabu](docs / ar / README.md)
 [🇧🇩 Ikibengali](docs / bn / README.md)
 [🇩🇪 Ikidage](docs / de / README.md)
 [🇺🇸 Icyongereza](docs / en / README.md)
 [🇪🇸 Icyesipanyoli](docs / es / README.md)
 [🇫🇷 Igifaransa](docs / fr / README.md)
 [🇹🇩 Hausa](docs / ha / README.md)
 [🇮🇳 Hindi](docs / hi / README.md)
 [🇮🇩 Indoneziya](docs / id / README.md)
 [🇮🇹 Umutaliyani](docs / it / README.md)
 [🇯🇵 Ikiyapani](docs / ja / README.md)
 [🇰🇷 Igikoreya](docs / ko / README.md)
 [🇮🇳 Marathi](docs / mr / README.md)
 [Ish Igipolonye](docs / pl / README.md)
 [🇧🇷 Igiporutugali](docs / pt / README.md)
 [🇷🇺 Ikirusiya](docs / ru / README.md)
 [Wa Igiswahiri](docs / sw / README.md)
 [🇵🇭 Tagalog](docs / tl / README.md)
 [🇹🇷 Turukiya](docs / tr / README.md)
 [🇵🇰 Urdu](docs / ur / README.md)
 [🇻🇳 Abanya Viyetinamu](docs / vi / README.md)
 [🇨🇳 Igishinwa](docs / zh / README.md)


 ** [📚 ... Indimi zose ...](docs / README.md) **
 ----

 ### Hari ikibazo cyubu busobanuro bwa README?
 Ubu busobanuro bwihariye bwumwimerere [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 irashobora kuba ifite inenge - * gukosora biremewe cyane! * Nyamuneka ohereza [gukurura icyifuzo kuri GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 cyangwa niba utishimiye gukora ibyo, [fungura ikibazo](https://github.com/cobbzilla/mobiletto-cli/issues)

 Mugihe uremye ikibazo gishya cya GitHub kubyerekeye ubusobanuro, nyamuneka kora:
 * shyiramo urupapuro rwa URL (kopi / komatanya uhereye kuri aderesi ya aderesi)
 * shyiramo inyandiko nyayo itariyo (kopi / komatanya kuri mushakisha)
 * nyamuneka sobanura ibitagenda neza - ubusobanuro ntabwo aribwo? imiterere yacitse kuburyo runaka?
 * mutange igitekerezo cyo gusobanura neza, cyangwa uburyo inyandiko igomba guhindurwa neza
 * ** Urakoze! **

 # Ibirimo
 * [Inkomoko](# Inkomoko)
 * [Inkunga n'inkunga](# Inkunga-na-Inkunga)
 * [Kwinjiza no gukoresha](# Kwinjiza-no-gukoresha)
 * [pake ya npm](# npm-pack)
 * [Biturutse ku isoko](# Kuva-Inkomoko)
 * [Ihuza](# Ihuza)
 * [Kora ihuriro](# Kurema-a-guhuza)
 * [Andika urutonde](# Urutonde-Ihuza)
 * [Kujugunya imiyoboro ya JSON]
 * [Kuraho ihuriro](# Kuraho-a-ihuza)
 * [Kuraho imiyoboro yose](# Kuraho-byose-bihuza)
 * [Gukorana nububiko](# Gukorana-kubika)
 * [Andika dosiye](# Urutonde-dosiye)
 * [Andika dosiye kuri stdout](# Andika-a-dosiye-kuri-stdout)
 * [Gukoporora dosiye](# Gukoporora-dosiye)
 * [Gusiba dosiye](# Gusiba-dosiye)
 * [Reba metadata](# Reba-metadata)
 * [Ububiko bw'indorerwamo](# Indorerwamo-Ububiko)

 ### Inkomoko
 * [mobiletto-umukiriya kuri GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-umukiriya kuri npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Inkunga ninkunga
 Ndagerageza kuba umuhanga ufungura isoko yumwuga. Nakoraga
 inganda za software imyaka myinshi, natangiye ibigo byatsinze ndabigurisha mubigo bya leta.
 Mperutse kubura akazi, kandi rwose nta kindi gikorwa mfite ku murongo

 Ngiye rero kugerageza kwandika software ifasha ndebe niba ibyo bikora

 Niba ukunda gukoresha iyi software, ndagushimira byimazeyo na
 ntoya [umusanzu wa buri kwezi ukoresheje Patreon](https://www.patreon.com/cobbzilla)

 * Urakoze! *

 ## Kwinjiza no gukoresha
 Urashobora kwinjizamo no gukoresha `mobiletto-cli` ukoresheje npm cyangwa biturutse kumasoko.

 ### npm paki
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Biturutse
 Kugirango ukore isoko, uzakenera nodejs v16 + nintambara

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Kwihuza
 Ububiko bwa mobiletto bwose bugerwaho binyuze mumihuza.

 Kugeza ubu Mobiletto ishyigikira guhuza ububiko bwa dosiye yububiko hamwe nindobo za Amazone S3.

 Ihuza ryerekanwe nikintu cya JSON gisa nki:

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

 Kubisobanuro birambuye kumahitamo yose nagaciro kabo nibisobanuro, reba
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Kora ihuza
 Kurema ihuza rishya, dukeneye kimwe muri ibyo bintu bya JSON.

 Turashobora gukora imwe muburyo bumwe, cyangwa gutanga imwe ikoresheje dosiye cyangwa JSON isanzwe:

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

 ### Andika amahuza
 Andika amahuza aboneka:

    mo connect -l
    mo connect --list

 ### Kujugunya imiyoboro ya JSON
 Erekana JSON yuzuye kugirango uhuze. ** UMUBURO ** ibi bizacapura urufunguzo namabanga kuri stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Kuraho ihuza
 Kuraho ihuza rimwe:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Kuraho amahuza yose
 Kuraho imiyoboro yose:

    mo connect -R
    mo connect --remove-all

 ## Gukorana nububiko
 Umaze gukora amahuza amwe, koresha ibikorwa bya ' `ls` , `cp` , `rm` , `meta` `mirror` ibikorwa
 gukorana nabo.

 Inzira yose ya dosiye utanga kubutegetsi igomba kubanzirizwa nizina ryihuza
 bivuga. Mu ngero zikurikira, twibwira ko amasano abiri abaho yitwa `conn1` `conn2`

 ### Andika dosiye
 Ibisohoka kurutonde rwurutonde ni urukurikirane rwibintu bya JSON, umwe kumurongo, uhagarariye dosiye
 byabonetse. Ibi bikoresho bizaba bifite " `name` " na `type` , kandi birashoboka nibindi bice.

    mo ls conn1/some/path

 Andika dosiye inshuro nyinshi:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Inyandiko zibitswe neza **: Urutonde rwisubiramo ntirurashyigikirwa kubanga.
 Urashobora gutondekanya gusa ububiko bumwe bwamadosiye icyarimwe.

 Andika dosiye mu magambo (nziza-icapa JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Andika dosiye inshuro nyinshi kandi mu magambo:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Reba ubufasha kuri `ls` command, asobanura inzira zose:

    mo ls -h
    mo ls --help

 ### Andika dosiye kuri stdout
 Itegeko rya `cat` dosiye kuri stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Mu mwuka nyawo wa UNIX * (nyamara rwose ntabwo ari imyitozo!) * Itegeko rya 'cat`` rya `cat` guhitamo **
 usibye `-h` / `--help` kwerekana amakuru yingirakamaro.

 Gukoporora dosiye
 Gukoporora dosiye imwe kuva kuri mobiletto kurindi:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Gukoporora dosiye imwe kuva mobiletto ujya kurindi, ukayihindura aho ujya:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Ongera usubiremo ububiko:

    mo cp -r conn1/some/directory conn2/some/dest/

 Reba ubufasha kuri `cp` itegeko, asobanura inzira zose:

    mo cp -h
    mo cp --help

 Icyitonderwa: Gukoporora dosiye ntabwo byihuta cyane, kuko kuri ubu bisaba dosiye yo hagati ya temp.

 ### Siba dosiye
 Siba dosiye imwe:

    mo rm conn1/some/file.txt

 Siba dosiye imwe kandi ntukinubira amakosa ayo ari yo yose:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Siba ububiko:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Siba ububiko kandi ntukinubira amakosa ayo ari yo yose:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Reba metadata
 Nibyiza cyane kumenya metadata ya dosiye, udakuyemo dosiye yose.

 Mobiletto ishoboye kumenyekanisha ingano ya dosiye nigihe cyanyuma cyahinduwe, hiyongereyeho izina nubwoko.

 Kureba metadata:

    mo meta conn1/some/file.txt

 ### Ububiko bw'indorerwamo
 Indorerwamo irenze ikibazo cyihariye cya `cp` , ni itegeko rya mobiletto ryihariye ripfunyika
 Gukoporora; birakomeza nubwo habaye amakosa, kandi ukurikirane kubara intsinzi namakosa.

 Kugaragaza ibintu byose kuva kuri con1 kugeza kuri con2:

    mo mirror conn1 conn2

 Kugaragaza indorerwamo:

    mo mirror conn1/some/subdir conn2

 Kugaragaza indorerezi mu bundi buyobozi:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
