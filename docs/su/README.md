mobiletto-cli
 =============
 Antarmuka garis paréntah (CLI) pikeun [mobiletto](https://www.npmjs.com/package/mobiletto)
 neundeun.

 Mobiletto ngadukung sambungan ka Amazon S3, Backblaze B2, sareng sistem file lokal.

 # Baca ieu dina basa sanés
 Dokumén README.md ieu parantos ditarjamahkeun, ngalangkungan [hokeylization](https://github.com/cobbzilla/hokeylization), kana
 **[sagala basa dirojong ku Google Tarjamah](https://cloud.google.com/translate/docs/languages)!**

 Kuring yakin éta teu sampurna, tapi kuring miharep éta leuwih hade tinimbang nanaon!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Basa Sunda](../en/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Perancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonésia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Basa Jepang](../ja/README.md)
 [🇰🇷 Koréa](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polandia](../pl/README.md)
 [🇧🇷 Portugis](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnam](../vi/README.md)
 [🇨🇳 Cina](../zh/README.md)


 **[📚 ... Sadaya Basa ...](../README.md)**
 ----

 ### Naha aya masalah sareng tarjamahan README ieu?
 Tarjamahan khusus ieu tina [README] asli (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 meureun cacad -- *koreksi pisan wilujeng sumping!* Punten kirimkeun [permintaan tarik dina GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 atanapi upami anjeun teu nyaman ngalakukeun éta, [buka masalah](https://github.com/cobbzilla/mobiletto-cli/issues)

 Lamun anjeun nyieun masalah GitHub anyar ngeunaan tarjamahan, mangga ngalakukeun:
 * kalebet URL halaman (salinan/témpél tina bar alamat browser)
 * kalebet téks anu leres anu salah (salin/témpél tina browser)
 * Punten terangkeun naon anu lepat -- naha tarjamahanna lepat? formatna rusak kumaha bae?
 * punten nawiskeun usulan tarjamahan anu langkung saé, atanapi kumaha téks kedah diformat leres
 * **Hatur nuhun!**

 # Eusi
 * [Sumber](#Sumber)
 * [Rojongan sareng Pembiayaan](#Rojongan-sareng-Dana)
 * [Pamasangan sareng panggunaan](#Instal-and-use)
 * [pakét npm](pakét #npm)
 * [Ti sumber](#Ti-sumber)
 * [Sambungan](#Sambungan)
 * [Jieun sambungan](#Create-a-connection)
 * [Daptar sambungan](#Daptar-sambungan)
 * [Dump sambungan JSON config](#Dump-konéksi-JSON-config)
 * [Hapus sambungan](#Remove-a-connection)
 * [Hapus sadaya sambungan](#Remove-all-connections)
 * [Gawe sareng neundeun](#Gawe-sareng-gudang)
 * [Daptar file](#Daptar-file)
 * [Tulis file ka stdout](#Write-a-file-to-stdout)
 * [Salin file](#Salin-file)
 * [Hapus file](#Hapus-file)
 * [Témbongkeun metadata](#Témbongkeun-metadata)
 * [Diréktori Eunteung](#Diréktori-Eunteung)

 ### Sumber
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Rojongan sareng Pembiayaan
 Kuring nyobian janten pamekar software open source profésional. Kuring geus digawé di
 industri software salila sababaraha taun, Kuring geus dimimitian pausahaan suksés jeung dijual ka pausahaan umum.
 Anyar-anyar ieu kuring kaleungitan padamelan, sareng kuring henteu ngagaduhan padamelan anu sanés

 Janten kuring badé nyobian nyerat parangkat lunak anu mangpaat sareng ningali upami éta jalanna

 Upami anjeun resep ngagunakeun parangkat lunak ieu, kuring bakal nganuhunkeun tulus pikeun malah
 pangleutikna [kontribusi bulanan via Patreon](https://www.patreon.com/cobbzilla)

 *Hatur nuhun!*

 ## Pamasangan sareng panggunaan
 Anjeun tiasa masang sareng ngajalankeun `mobiletto-cli` via npm atanapi langsung ti sumberna.

 ### pakét npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ti sumber
 Pikeun ngajalankeun tina sumber, anjeun peryogi nodejs v16+ sareng benang

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Sambungan
 Sadaya panyimpenan mobiletto diaksés ngaliwatan sambungan.

 Mobiletto ayeuna ngadukung sambungan kana panyimpenan sistem file lokal sareng ember Amazon S3.

 Sambungan anu dieusian ku objék JSON nu Sigana mah ieu:

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

 Pikeun detil lengkep ngeunaan sadaya pilihan sareng nilai sareng hartosna, tingali éta
 [docs mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Jieun sambungan
 Pikeun nyieun sambungan anyar, urang peryogi salah sahiji objék JSON ieu.

 Urang bisa nyieun hiji interaktif, atawa nyadiakeun hiji via file atawa JSON literal:

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

 ### Daptar sambungan
 Daptar sambungan anu sayogi:

    mo connect -l
    mo connect --list

 ### Dump sambungan JSON config
 Témbongkeun config JSON pinuh pikeun sambungan. ** PERHATOSAN ** ieu bakal nyitak konci na Rahasia pikeun stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Cabut sambungan
 Pupus hiji sambungan:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Cabut sadaya sambungan
 Pupus ALL sambungan:

    mo connect -R
    mo connect --remove-all

 ## Gawe sareng neundeun
 Sakali anjeun parantos nyiptakeun sababaraha sambungan, paké `ls` , `cp` , `rm` , `meta` sareng `mirror` .
 pikeun digawe sareng maranehna.

 Unggal jalur file anu anjeun nyayogikeun kana paréntah kedah diapit ku nami sambungan
 eta nujul kana. Dina conto di handap, urang nganggap dua sambungan aya ngaranna `conn1` jeung `conn2`

 ### Daptar file
 Kaluaran paréntah daptar nyaéta runtuyan objék JSON, hiji per baris, ngagambarkeun file
 kapanggih. Objék ieu bakal ngagaduhan `name` sareng `type` , sareng kamungkinan widang anu sanés.

    mo ls conn1/some/path

 Daptar file sacara rekursif:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Catatan neundeun énkripsi**: Listing rekursif teu acan dirojong pikeun sambungan énkripsi.
 Anjeun ngan bisa daptar hiji diréktori file dina hiji waktu.

 Daptar file verbosely (cantik-print JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Daptar file sacara rekursif sareng verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Tingali pitulung pikeun paréntah `ls` , ngajelaskeun sadaya pilihan:

    mo ls -h
    mo ls --help

 ### Tulis file ka stdout
 Paréntah `cat` bakal nyitak file pikeun stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Dina sumanget UNIX leres *(acan tangtosna sanes prakna!)* paréntah `cat` **teu nyandak pilihan**
 lian ti `-h` / `--help` pikeun mintonkeun informasi mantuan.

 ### Nyalin file
 Nyalin hiji file tina hiji mobiletto ka nu sejen:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Nyalin hiji file tina hiji mobiletto ka nu sejen, ngaganti ngaran eta dina tujuan:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Salin diréktori sacara rekursif:

    mo cp -r conn1/some/directory conn2/some/dest/

 Tingali pitulung pikeun paréntah `cp` , ngajelaskeun sadaya pilihan:

    mo cp -h
    mo cp --help

 Catetan: Nyalin file henteu gancang pisan, sabab ayeuna butuh file temp perantara.

 ### Pupus file
 Pupus hiji file:

    mo rm conn1/some/file.txt

 Pupus hiji file sareng entong ngawadul ngeunaan kasalahan:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Pupus hiji diréktori:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Pupus diréktori sareng entong ngawadul ngeunaan kasalahan:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Témbongkeun metadata
 Ieu sering mangpaat uninga metadata pikeun file, tanpa ngundeur sakabeh file.

 Mobiletto tiasa ngalaporkeun ukuran file sareng waktos anu terakhir dirobih, salian nami sareng jinisna.

 Pikeun nempo metadata:

    mo meta conn1/some/file.txt

 ### Diréktori eunteung
 Mirroring leuwih ti hiji kasus husus `cp` , éta téh paréntah mobiletto misah nu wraps
 operasi salinan; eta terus sanajan kasalahan lumangsung, sarta lagu a count sukses jeung kasalahan.

 Pikeun ngeunteung sagalana ti conn1 kana conn2:

    mo mirror conn1 conn2

 Pikeun eunteung subdirektori:

    mo mirror conn1/some/subdir conn2

 Pikeun eunteung subdirectory kana subdirectory sejen:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
