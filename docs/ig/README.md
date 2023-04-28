mobiletto-cli
 ===========
 Akara akara iwu (CLI) maka [mobiletto](https://www.npmjs.com/package/mobiletto)
 nchekwa.

 Mobiletto na-akwado njikọ Amazon S3, Backblaze B2 na sistemụ faịlụ mpaghara.

 # Gụọ nke a n'asụsụ ọzọ
 Atụgharịrị asụsụ README.md akwụkwọ a, site na [hokeylization](https://github.com/cobbzilla/hokeylization), ka ọ bụrụ
 **[Google Translate na-akwado asụsụ ọ bụla](https://cloud.google.com/translate/docs/languages)!**

 Eji m n'aka na ọ zughị oke, mana enwere m olileanya na ọ ka mma karịa ihe ọ bụla!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 Bekee](../en/README.md)
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
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Asụsụ niile ...](../README.md)**
 ----

 ### Enwere nsogbu na ntụgharị asụsụ README a?
 Ntụgharị asụsụ a nke izizi [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 nwere ike nwee ntụpọ -- * A nabatara mgbazi!* Biko ziga arịrịọ [pull arịrịọ na GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ma ọ bụ ọ bụrụ na ahụ adịghị gị mma ime nke ahụ, [mepee mbipụta](https://github.com/cobbzilla/mobiletto-cli/issues)

 Mgbe ị mepụtara mbipụta GitHub ọhụrụ gbasara ntụgharị asụsụ, biko mee:
 * tinye URL ibe (detuo / mado site na ebe adreesị ihe nchọgharị)
 * tinye ederede ezighi ezi (detuo / mado site na ihe nchọgharị)
 * biko kọwaa ihe adịghị mma -- ntụgharị asụsụ ezighi ezi? Agbajiri usoro nhazi ahụ n'ụzọ ụfọdụ?
 * jiri obiọma nye ntụnye nke ntụgharị asụsụ ka mma, ma ọ bụ ka esi ahazi ederede nke ọma
 * **Daalụ!**

 # ọdịnaya
 * [Isi Iyi](#Isi Iyi)
 * [Nkwado na Ego](#Nkwado-na Ego)
 * [Nwụnye na ojiji](#Installation-and-usage)
 * [npm](#npm-ngwugwu)
 * [Site na isi mmalite](#Site na isi mmalite)
 * [njikọ](#njikọ)
 * [Mepụta njikọ](#Mepụta-a-njikọ)
 * [njikọ ndepụta](#Ndepụta-njikọ)
 * [Kwụfu njikọ JSON](#Dump-connection-JSON-config)
 * [Wepu njikọ](#Wepụ-a-njikọ)
 * [Wepu njikọ niile](#Wepụ-njikọ niile)
 * [Na-arụ ọrụ na nchekwa](#Na-arụ ọrụ na nchekwa)
 * [Ndepụta faịlụ](#Ndepụta faịlụ)
 * [Dee faịlụ na stdout](#Dee-a-file-to-stdout)
 * [Detuo faịlụ](#Copy-files)
 * [Hichapụ faịlụ](#Hichapụ-faịlụ)
 * [Lelee metadata](#View-metadata)
 * [akwụkwọ ndekọ aha](#Mirror-directories)

 ### Isi mmalite
 * [mobiletto-cli na GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli na npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Nkwado na ego
 Ana m agbali ịbụ ọkachamara mmepe ngwanrọ mepere emepe. Anọ m na-arụ ọrụ
 ụlọ ọrụ ngwanrọ ruo ọtụtụ afọ, amalitela m ụlọ ọrụ na-aga nke ọma ma ree ha ụlọ ọrụ ọha.
 N’oge na-adịbeghị anya, a chụrụ m n’ọrụ, enweghịkwa m ọrụ ọ bụla e debere n’ahịrị

 Ya mere, m ga-agbalị ide software na-enyere aka hụ ma ọ na-arụ ọrụ

 Ọ bụrụ na ị na-enwe mmasị iji nke a software, M ga-ezi obi ekele maka ọbụna
 kacha nta [onyinye kwa ọnwa site na Patreon](https://www.patreon.com/cobbzilla)

 *Daalụ!*

 ## Nwụnye na ojiji
 Ị nwere ike iwunye ma mee `mobiletto-cli` site na npm ma ọ bụ ozugbo site na isi mmalite.

 ### npm ngwugwu
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Site na isi iyi
 Iji si na isi iyi, ị ga-achọ nodejs v16+ na yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Njikọ
 A na-enweta ebe nchekwa mobiletto niile site na njikọ.

 Mobiletto na-akwado ugbu a njikọ na nchekwa sistemụ faịlụ mpaghara yana bọket Amazon S3.

 Eji ihe JSON kọwaa njikọ dị ka nke a:

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

 Maka nkọwa zuru ezu na nhọrọ niile na ụkpụrụ ha na nkọwa ha, lee
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Mepụta njikọ
 Iji mepụta njikọ ọhụrụ, anyị chọrọ otu n'ime ihe JSON ndị a.

 Anyị nwere ike ịmepụta otu na mmekọrịta, ma ọ bụ nye otu site na faịlụ ma ọ bụ JSON nkịtị:

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

 ### Njikọ njikọ
 Depụta njikọ dị:

    mo connect -l
    mo connect --list

 ### kpofuo njikọ JSON nhazi
 Gosi nhazi JSON zuru ezu maka njikọ. ** ịdọ aka ná ntị *** nke a ga-ebipụta igodo na ihe nzuzo maka stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Wepu njikọ
 Wepu otu njikọ:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Wepu njikọ niile
 Wepu njikọ niile:

    mo connect -R
    mo connect --remove-all

 ## Na-arụ ọrụ na nchekwa
 Ozugbo ịmechara njikọ ụfọdụ, jiri ọrụ `ls` , `cp` , `rm` , `meta` na `mirror`
 iso ha na-arụkọ ọrụ.

 Ụzọ faịlụ ọ bụla ị na-enye na iwu ga-enwerịrị aha njikọ ahụ
 ọ na-ezo aka. N'ihe atụ dị n'okpuru, anyị chere na njikọ abụọ dị aha ya bụ `conn1` ' na `conn2`

 ### faịlụ ndekọ
 Mpụta nke iwu ndepụta bụ usoro ihe JSON, otu n'ahịrị, na-anọchite anya faịlụ
 hụrụ. Ihe ndị a ga-enwe `name` ' na `type` , yana ikekwe ubi ndị ọzọ.

    mo ls conn1/some/path

 Depụta faịlụ ugboro ugboro:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Ederede nchekwa ezoro ezo ***: akwadobeghị ndepụta ndetu maka njikọ ezoro ezo.
 Ị nwere ike ịdepụta naanị otu ndekọ aha faịlụ n'otu oge.

 Depụta faịlụ n'ezoghị ọnụ (bipụta JSON mara mma):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Depụta faịlụ ugboro ugboro na ọnụ:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Lelee enyemaka maka iwu `ls` , na-akọwa nhọrọ niile:

    mo ls -h
    mo ls --help

 ### Dee faịlụ ka stdout
 Iwu `cat` ga-ebipụta faịlụ na stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 N'ime mmụọ UNIX n'ezie * (ma ọ bụghị omume ahụ!)* iwu `cat` ** enweghị nhọrọ ọ bụla ***
 ndị ọzọ karịa `-h` / `--help` igosi ozi na-enyere aka.

 ### Detuo faịlụ
 Detuo otu faịlụ site na otu mobiletto gaa na nke ọzọ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Detuo otu faịlụ site na otu mobiletto gaa na nke ọzọ, nyegharịa ya aha na ebe ị na-aga:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Detuo akwụkwọ ndekọ aha ugboro ugboro:

    mo cp -r conn1/some/directory conn2/some/dest/

 Lelee enyemaka maka iwu `cp` , na-akọwa nhọrọ niile:

    mo cp -h
    mo cp --help

 Mara: Ntugharị faịlụ anaghị adị ngwa ngwa, n'ihi na ọ na-achọ ugbu a faịlụ temp faịlụ etiti.

 ### Hichapụ faịlụ
 Hichapụ otu faịlụ:

    mo rm conn1/some/file.txt

 Hichapụ otu faịlụ ma emekwala mkpesa maka mperi ọ bụla:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Hichapụ ndekọ:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Hichapụ ndekọ ma emekwala mkpesa maka mperi ọ bụla:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Lelee metadata
 Ọ na-abakarị uru ịmara metadata maka faịlụ, na-enweghị nbudata faịlụ niile.

 Mobiletto nwere ike ịkọ nha faịlụ na oge gbanwetụrụ ikpeazụ, na mgbakwunye na aha na ụdị.

 Ka ilele metadata:

    mo meta conn1/some/file.txt

 ### akwụkwọ ndekọ aha
 Mirroring karịrị a pụrụ iche ikpe nke `cp` , ọ bụ iche iche mobiletto iwu na kechie na
 ọrụ oyiri; ọ na-aga n'ihu ọbụlagodi mgbe njehie mere, wee soro ọnụọgụ nke ihe ịga nke ọma na mperi.

 Iji gosipụta ihe niile site na conn1 ruo conn2:

    mo mirror conn1 conn2

 Iji enyo enyo subdirectory:

    mo mirror conn1/some/subdir conn2

 Iji gosipụta subdirectory n'ime akwụkwọ ndekọ aha ọzọ:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
