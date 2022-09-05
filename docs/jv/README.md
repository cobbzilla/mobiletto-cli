mobiletto-cli
 =============
 Antarmuka baris perintah (CLI) kanggo [mobiletto](https://www.npmjs.com/package/mobiletto)
 Lumbung.

 Mobiletto ndhukung sambungan menyang Amazon S3, Backblaze B2, lan sistem file lokal.

 # Waca iki ing basa liya
 Dokumen README.md iki wis diterjemahake, liwat [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), menyang
 **[saben basa didhukung Google Terjemahan](https://cloud.google.com/translate/docs/languages)!**

 Aku yakin ora sampurna, nanging muga-muga luwih apik tinimbang ora ana!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Inggris](../id/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Prancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Jepang](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polandia](../pl/README.md)
 [🇧🇷 Portugis](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnam](../vi/README.md)
 [🇨🇳 Cina](../zh/README.md)


 **[📚 ... Kabeh Basa ...](../README.md)**
 ----

 ### Apa ana masalah karo terjemahan README iki?
 Iki terjemahan khusus saka [README] asli (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 bisa uga ana cacat -- *koreksi banget ditampa!* Kirimi [panyuwunan tarik ing GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 utawa yen sampeyan ora kepenak nglakoni, [mbukak masalah](https://github.com/cobbzilla/mobiletto-cli/issues)

 Nalika sampeyan nggawe masalah GitHub anyar babagan terjemahan, mangga tindakake:
 * kalebu URL kaca (salinan / tempel saka bilah alamat browser)
 * Lebokna teks pas sing salah (salin/tempel saka browser)
 * monggo katrangan apa sing salah -- apa terjemahane salah? format rusak piye wae?
 * nyuwun saran terjemahan sing luwih apik, utawa carane teks kudu diformat kanthi bener
 **Matur nuwun!**

 ### Sumber
 * [mobiletto-cli ing GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli ing npm](https://www.npmjs.com/package/mobiletto-cli)

 # Isi
 * [Pasang lan panggunaan](#Installation-and-usage)
 * [paket npm](paket #npm)
 * [Saka sumber](#Saka-sumber)
 * [Sambungan](#Sambungan)
 * [Gawe sambungan](#Create-a-connection)
 * [Daftar sambungan](#Daftar-sambungan)
 * [Konfigurasi JSON sambungan dump](#Konfigurasi-JSON-Konfigurasi Dump)
 * [Busak sambungan](#Remove-a-connection)
 * [Busak kabeh sambungan](#Remove-all-connections)
 * [Nggawe karo panyimpenan](#Nggawe-karo-simpenan)
 * [Dhaptar file](#Daftar-file)
 * [Tulis file menyang stdout](#Write-a-file-to-stdout)
 * [Salin file](#Copy-files)
 * [Busak file](#Busak-berkas)
 * [Deleng metadata](#View-metadata)
 * [Direktori pangilon](#Direktori-Mirror)

 ## Instalasi lan panggunaan
 Sampeyan bisa nginstal lan mbukak `mobiletto-cli` liwat npm utawa langsung saka sumber.

 ### paket npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Saka sumber
 Kanggo mbukak saka sumber, sampeyan butuh nodejs v16+ lan benang

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Sambungan
 Kabeh panyimpenan mobiletto diakses liwat sambungan.

 Mobiletto saiki ndhukung sambungan menyang panyimpenan sistem file lokal lan ember Amazon S3.

 Sambungan ditemtokake dening obyek JSON sing katon kaya iki:

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

 Kanggo katrangan lengkap babagan kabeh opsi lan nilai lan maknane, waca ing
 [docs mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Gawe sambungan
 Kanggo nggawe sambungan anyar, kita butuh salah siji obyek JSON iki.

 Kita bisa nggawe siji kanthi interaktif, utawa nyedhiyakake siji liwat file utawa JSON literal:

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

 ### Dhaptar sambungan
 Dhaptar sambungan sing kasedhiya:

    mo connect -l
    mo connect --list

 ### Mbuwang sambungan JSON config
 Tampilake konfigurasi JSON lengkap kanggo sambungan. ** PÈNGET ** iki bakal print tombol lan rahasia kanggo stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Mbusak sambungan
 Mbusak sambungan siji:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Mbusak kabeh sambungan
 Mbusak ALL sambungan:

    mo connect -R
    mo connect --remove-all

 ## Nggarap panyimpenan
 Sawise sampeyan nggawe sawetara sambungan, gunakake operasi `ls` , `cp` , `rm` , `meta` lan `mirror`
 kanggo bisa karo wong-wong mau.

 Saben path file sing sampeyan nyedhiyani kanggo printah kudu prefixed karo jeneng sambungan
 iku nuduhake. Ing conto ing ngisor iki, kita nganggep rong sambungan ana jenenge `conn1` lan `conn2`

 ### Dhaptar file
 Output saka printah dhaptar minangka seri obyek JSON, siji saben baris, makili file
 ketemu. Objek kasebut bakal duwe `name` lan `type` , lan bisa uga kolom liyane.

    mo ls conn1/some/path

 Dhaptar file kanthi rekursif:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Cathetan panyimpenan sing dienkripsi**: Daftar rekursif durung didhukung kanggo sambungan sing dienkripsi.
 Sampeyan mung bisa dhaptar siji direktori file ing siji wektu.

 Dhaptar file kanthi lisan (JSON sing dicithak apik):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Dhaptar file kanthi rekursif lan verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Deleng bantuan kanggo printah `ls` , nerangake kabeh opsi:

    mo ls -h
    mo ls --help

 ### Tulis file menyang stdout
 `cat` bakal nyithak file kanggo stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ing semangat UNIX sing sejati *(nanging mesthi dudu praktik kasebut!)* printah `cat` **ora njupuk pilihan**
 liyane saka `-h` / `--help` kanggo nampilake informasi mbiyantu.

 ### Nyalin file
 Nyalin file siji saka siji mobiletto menyang liyane:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Nyalin file siji saka siji mobiletto menyang liyane, ganti jeneng ing panggonan sing dituju:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Salin direktori kanthi rekursif:

    mo cp -r conn1/some/directory conn2/some/dest/

 Deleng bantuan kanggo printah `cp` , nerangake kabeh opsi:

    mo cp -h
    mo cp --help

 Cathetan: Nyalin file ora cepet banget, amarga saiki mbutuhake file temp perantara.

 ### Mbusak file
 Mbusak file siji:

    mo rm conn1/some/file.txt

 Mbusak file siji lan aja sambat babagan kesalahan:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Mbusak direktori:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Mbusak direktori lan aja sambat babagan kesalahan:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Deleng metadata
 Asring migunani kanggo ngerti metadata kanggo file, tanpa ngundhuh kabeh file.

 Mobiletto bisa nglaporake ukuran file lan wektu sing diowahi pungkasan, saliyane jeneng lan jinis.

 Kanggo ndeleng metadata:

    mo meta conn1/some/file.txt

 ### Direktori pangilon
 Mirroring luwih saka kasus khusus `cp` , iku printah mobiletto kapisah sing mbungkus
 operasi salinan; iku terus malah nalika kasalahan dumadi, lan trek count sukses lan kasalahan.

 Kanggo kaca kabeh saka conn1 menyang conn2:

    mo mirror conn1 conn2

 Kanggo kaca subdirektori:

    mo mirror conn1/some/subdir conn2

 Kanggo kaca subdirektori menyang subdirektori liyane:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
