mobiletto-cli
 =============
 He kikowaena laina kauoha (CLI) no [mobiletto](https://www.npmjs.com/package/mobiletto)
 waihona.

 Kākoʻo ʻo Mobiletto i nā pilina me Amazon S3, Backblaze B2, a me nā ʻōnaehana faila kūloko.

 # E heluhelu i kēia ma ka ʻōlelo ʻē aʻe
 Ua unuhi ʻia kēia palapala README.md, ma o [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), i loko
 **[kākoʻo ʻia kēlā me kēia ʻōlelo e ka Unuhi Google](https://cloud.google.com/translate/docs/languages)!**

 Ua maopopo iaʻu ʻaʻole ia i hemolele, akā manaʻo wau ʻoi aku ka maikaʻi ma mua o ka ʻole!

 [🇸🇦 ʻAlapia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Kelemānia](../de/README.md)
 [🇺🇸 Pelekania](../en/README.md)
 [🇪🇸 Paniolo](../es/README.md)
 [🇫🇷 Palani](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Kepani](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polani](../pl/README.md)
 [🇧🇷 Pukiki](../pt/README.md)
 [🇷🇺 Lūkia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Pākē](../zh/README.md)


 **[📚 ... Nā ʻŌlelo a pau ...](../README.md)**
 ----

 ### Aia kekahi pilikia me kēia unuhi o ka README?
 ʻO kēia unuhi kikoʻī o ka [README] kumu (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 he hemahema paha -- * mahalo nui ʻia nā hoʻoponopono!* E ʻoluʻolu e hoʻouna i [noi huki ma GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 a inā ʻaʻole ʻoluʻolu ʻoe e hana i kēlā, [wehe i kahi pilikia](https://github.com/cobbzilla/mobiletto-cli/issues)

 Ke hana ʻoe i kahi pilikia GitHub hou e pili ana i kahi unuhi, e ʻoluʻolu e hana:
 * hoʻokomo i ka URL o ka ʻaoʻao (kope/paʻi mai ka ʻaoʻao ʻaoʻao pūnaewele)
 * hoʻokomo i ka kikokikona pololei i hewa (kope/paʻi mai ka polokalamu kele pūnaewele)
 * ʻoluʻolu e wehewehe i ka hewa -- hewa ka unuhi? Ua haki paha ke ʻano o ke ʻano?
 * ʻoluʻolu e hāʻawi i ka manaʻo o kahi unuhi ʻoi aku ka maikaʻi, a i ʻole pehea e hoʻopili pono ʻia ai ka kikokikona
 * **Mahalo!**

 ### Puna
 * [mobiletto-cli ma GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli ma npm](https://www.npmjs.com/package/mobiletto-cli)

 # Maʻiʻo
 * [Hoʻokomo a hoʻohana](#Hoʻokomo-a-hoʻohana)
 * [pūʻolo npm]( pūʻolo # npm)
 * [Mai kumu](#Mai-kumu)
 * [Nā Hoʻohui](#Hoʻohui)
 * [Hana i kahi pilina](#Hana-kahi-hui)
 * [List-connections](#List-connections)
 * [Hoʻokaʻawale hoʻohui JSON config](#Dump-connection-JSON-config)
 * [Wehe i kahi pilina](#Remove-a-connection)
 * [Wehe i nā pilina a pau](#Remove-all-connections)
 * [Ke hana nei me ka waiho ʻana](#Ke hana nei me ka mālama ʻana)
 * [Nā waihona papa inoa](#List-faila)
 * [Kākau i kahi faila i stdout](#Write-a-file-to-stdout)
 * [Kopi i nā faila](#Kopi-faila)
 * [Hoʻopau i nā faila](#Delete-faila)
 * [Nānā i ka metadata](#View-metadata)
 * [Mirror directories](#Mirror-directories)

 ## Hoʻokomo a hoʻohana
 Hiki iā ʻoe ke hoʻouka a holo `mobiletto-cli` ma o npm a i ʻole pololei mai ke kumu.

 ### npm pūʻolo
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Mai ke kumu
 No ka holo ʻana mai ke kumu, pono ʻoe i nā nodejs v16+ a me ka yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Nā pilina
 Loaʻa nā waihona mobiletto āpau ma o kahi pilina.

 Kākoʻo ʻo Mobiletto i kēia manawa i nā pilina i ka waihona waihona pūnaewele kūloko a me nā bākeke Amazon S3.

 Hōʻike ʻia nā pilina e kahi mea JSON e like me kēia:

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

 No nā kikoʻī piha i nā koho āpau a me ko lākou mau waiwai a me nā manaʻo, e ʻike i ka
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Hana i kahi pilina
 No ka hana ʻana i kahi pilina hou, pono mākou i kekahi o kēia mau mea JSON.

 Hiki iā mākou ke hana i hoʻokahi me ka launa pū ʻana, a i ʻole e hāʻawi i kekahi ma o kahi faila a i ʻole JSON literal:

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

 ### Papa inoa i nā pilina
 E papa inoa i nā pilina i loaʻa:

    mo connect -l
    mo connect --list

 ### Hoʻokuʻu i ka pilina JSON config
 Hōʻike i ka JSON config no kahi pilina. ** WARNING ** e paʻi kēia i nā kī a me nā mea huna i stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Wehe i kahi pilina
 Wehe i hoʻokahi pilina:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Wehe i nā pilina a pau
 Wehe i nā pilina a pau:

    mo connect -R
    mo connect --remove-all

 ## Ke hana nei me ka waiho ʻana
 Ke hana ʻoe i kekahi mau pilina, e hoʻohana i nā hana `ls` , `cp` , `rm` , `meta` a me `mirror` .
 e hana pū me lākou.

 Pono e kau mua ʻia kēlā me kēia ala faila āu e hāʻawi ai i kahi kauoha me ka inoa o ka pilina
 pili ia. Ma nā laʻana ma lalo nei, manaʻo mākou aia ʻelua mau pilina i kapa ʻia ʻo `conn1` a `conn2`

 ### Papa inoa i nā faila
 ʻO ka hoʻopuka o kahi kauoha papa inoa he pūʻulu o nā mea JSON, hoʻokahi i kēlā me kēia laina, e hōʻike ana i nā faila
 loaa. Loaʻa i kēia mau mea he `name` a `type` , a me nā kahua ʻē aʻe paha.

    mo ls conn1/some/path

 E papa inoa i nā faila me ka recursively:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Memo mālama hoʻopaʻa ʻia**: ʻAʻole i kākoʻo ʻia ka papa inoa recursive no nā pilina paʻa.
 Hiki iā ʻoe ke papa inoa i hoʻokahi papa kuhikuhi o nā faila i ka manawa.

 E papa inoa i nā faila me ka waha (JSON paʻi nani):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 E papa inoa i nā faila me ka hoʻopaʻa ʻana a me ka waha:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Nānā i ke kōkua no ke kauoha `ls` , wehewehe i nā koho a pau:

    mo ls -h
    mo ls --help

 ### Kākau i kahi faila e stdout
 Na ke kauoha `cat` e paʻi i kahi faila i stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ma ka manaʻo UNIX maoli *(ʻaʻole naʻe ʻo ka hoʻomaʻamaʻa!)* ʻo ke kauoha `cat` ** ʻaʻohe koho **
 ma waho aʻe o `-h` / `--help` e hōʻike i ka ʻike kōkua.

 ### E kope i nā faila
 E kope i hoʻokahi faila mai kekahi mobiletto i kekahi:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 E kope i hoʻokahi faila mai kekahi mobiletto i kekahi, e hoʻololi i ka inoa ma kahi e hele ai:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 E kope hou i kahi papa kuhikuhi:

    mo cp -r conn1/some/directory conn2/some/dest/

 Nānā i ke kōkua no ke kauoha `cp` , wehewehe i nā koho a pau:

    mo cp -h
    mo cp --help

 'Ōlelo Aʻo: ʻAʻole wikiwiki loa ke kope ʻana i nā faila, no ka mea, pono ia i kēia manawa i kahi faila temp intermediary.

 ### Holoi i nā faila
 Holoi i hoʻokahi faila:

    mo rm conn1/some/file.txt

 Holoi i hoʻokahi faila a ʻaʻole e hoʻopiʻi i nā hewa:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Holoi i kahi papa kuhikuhi:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Holoi i kahi papa kuhikuhi a mai hoʻopiʻi i kekahi hewa:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Nānā metadata
 Maikaʻi ka ʻike i ka metadata no kahi faila, me ka hoʻoiho ʻole ʻana i ka faila holoʻokoʻa.

 Hiki iā Mobiletto ke hōʻike i ka nui o ka faila a me ka manawa i hoʻololi hope ʻia, me ka inoa a me ke ʻano.

 No ka nānā 'ana i ka metadata:

    mo meta conn1/some/file.txt

 ### Nā papa kuhikuhi aniani
 ʻOi aku ka mirroring ma mua o kahi hihia kūikawā o `cp` , he kauoha mobiletto ʻokoʻa ia e hoʻopili ai i ka
 hana kope; Ke hoʻomau nei ʻo ia i ka wā e loaʻa ai nā hewa, a hahai i ka helu o nā kūleʻa a me nā hewa.

 E hoʻohālike i nā mea a pau mai conn1 a i conn2:

    mo mirror conn1 conn2

 E hoʻohālike i kahi papa kuhikuhi:

    mo mirror conn1/some/subdir conn2

 E hoʻohālike i kahi papa kuhikuhi i kahi papa kuhikuhi ʻē aʻe:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
