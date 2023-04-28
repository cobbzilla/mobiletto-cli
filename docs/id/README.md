mobiletto-cli
 ===============
 Antarmuka baris perintah (CLI) untuk [mobileto](https://www.npmjs.com/package/mobileto)
 penyimpanan.

 Mobiletto mendukung koneksi ke Amazon S3, Backblaze B2, dan sistem file lokal.

 # Baca ini dalam bahasa lain
 Dokumen README.md ini telah diterjemahkan, melalui [hokeylization](https://github.com/cobbzilla/hokeylization), ke
 **[setiap bahasa didukung oleh Google Terjemahan](https://cloud.google.com/translate/docs/languages)!**

 Saya yakin itu tidak sempurna, tapi saya harap ini lebih baik daripada tidak sama sekali!

 [🇸🇦 Bahasa Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Bahasa Inggris](../id/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Prancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Bahasa Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Bahasa Jepang](../ja/README.md)
 [🇰🇷 Bahasa Korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Bahasa Polandia](../pl/README.md)
 [🇧🇷 Portugis](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnam](../vi/README.md)
 [🇨🇳 Cina](../zh/README.md)


 **[📚 ... Semua Bahasa ...](../README.md)**
 ----

 ### Apakah ada masalah dengan terjemahan README ini?
 Terjemahan khusus dari [README] asli ini(https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 mungkin salah -- *koreksi sangat diharapkan!* Silakan kirim [permintaan tarik di GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 atau jika Anda tidak nyaman melakukannya, [buka masalah](https://github.com/cobbzilla/mobileto-cli/issues)

 Saat Anda membuat masalah GitHub baru tentang terjemahan, lakukan:
 * sertakan URL halaman (salin/tempel dari bilah alamat browser)
 * sertakan teks persis yang salah (salin/tempel dari browser)
 * tolong jelaskan apa yang salah -- apakah terjemahannya salah? apakah formatnya rusak entah bagaimana?
 * mohon menawarkan saran terjemahan yang lebih baik, atau bagaimana teks harus diformat dengan benar
 * **Terima kasih!**

 # Isi
 * [Sumber](#Sumber)
 * [Dukungan dan Pendanaan](#Dukungan-dan-Pendanaan)
 * [Pemasangan dan penggunaan](#Pemasangan-dan-penggunaan)
 * [paket npm](#npm-paket)
 * [Dari sumber](#Dari-sumber)
 * [Koneksi](#Koneksi)
 * [Buat koneksi](#Buat-koneksi)
 * [Koneksi daftar](#Koneksi daftar)
 * [Konfigurasi JSON buang koneksi](#Konfigurasi-koneksi-Dump-konfigurasi JSON)
 * [Hapus koneksi](#Hapus-koneksi)
 * [Hapus semua koneksi](#Hapus-semua-koneksi)
 * [Bekerja dengan penyimpanan](#Bekerja-dengan-penyimpanan)
 * [Daftar file](#Daftar-file)
 * [Tulis file ke stdout](#Write-a-file-to-stdout)
 * [Salin file](#Salin file)
 * [Hapus file](#Hapus-file)
 * [Lihat metadata](#Lihat-metadata)
 * [Direktori cermin](#Direktori-cermin)

 ### Sumber
 * [mobiletto-cli di GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli di npm](https://www.npmjs.com/package/mobileto-cli)

 ## Dukungan dan Pendanaan
 Saya mencoba menjadi pengembang perangkat lunak sumber terbuka profesional. Saya telah bekerja di
 industri perangkat lunak selama bertahun-tahun, saya telah memulai perusahaan yang sukses dan menjualnya ke perusahaan publik.
 Baru-baru ini saya kehilangan pekerjaan saya, dan saya tidak memiliki pekerjaan lain yang menunggu

 Jadi saya akan mencoba menulis perangkat lunak yang bermanfaat dan melihat apakah itu berhasil

 Jika Anda menikmati menggunakan perangkat lunak ini, saya akan sangat berterima kasih bahkan untuk
 terkecil [kontribusi bulanan melalui Patreon](https://www.patreon.com/cobbzilla)

 *Terima kasih!*

 ## Instalasi dan penggunaan
 Anda dapat menginstal dan menjalankan `mobiletto-cli` melalui npm atau langsung dari sumber.

 ### paket npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Dari sumber
 Untuk menjalankan dari sumber, Anda memerlukan nodejs v16+ dan yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Koneksi
 Semua penyimpanan mobiletto diakses melalui koneksi.

 Mobiletto saat ini mendukung koneksi ke penyimpanan sistem file lokal dan bucket Amazon S3.

 Koneksi ditentukan oleh objek JSON yang terlihat seperti ini:

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

 Untuk detail lengkap tentang semua opsi dan nilai serta artinya, lihat
 [mobiletto docs](https://www.npmjs.com/package/mobileto#Basic-usage).

 ### Buat koneksi
 Untuk membuat koneksi baru, kita memerlukan salah satu objek JSON ini.

 Kami dapat membuatnya secara interaktif, atau menyediakannya melalui file atau literal JSON:

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

 ### Daftar koneksi
 Daftar koneksi yang tersedia:

    mo connect -l
    mo connect --list

 ### Buang konfigurasi JSON koneksi
 Tampilkan konfigurasi JSON lengkap untuk koneksi. **PERINGATAN** ini akan mencetak kunci dan rahasia ke stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Hapus koneksi
 Hapus satu koneksi:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Hapus semua koneksi
 Hapus SEMUA koneksi:

    mo connect -R
    mo connect --remove-all

 ## Bekerja dengan penyimpanan
 Setelah Anda membuat beberapa koneksi, gunakan operasi `ls` , `cp` , `rm` , `meta` dan `mirror`
 untuk bekerja dengan mereka.

 Setiap jalur file yang Anda berikan ke perintah harus diawali dengan nama koneksi
 itu mengacu. Dalam contoh di bawah ini, kami menganggap ada dua koneksi bernama `conn1` dan `conn2`

 ### Daftar file
 Output dari perintah daftar adalah serangkaian objek JSON, satu per baris, mewakili file
 ditemukan. Objek ini akan memiliki `name` dan `type` , dan mungkin bidang lainnya.

    mo ls conn1/some/path

 Daftar file secara rekursif:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Catatan penyimpanan terenkripsi**: Daftar rekursif belum didukung untuk koneksi terenkripsi.
 Anda hanya dapat membuat daftar satu direktori file dalam satu waktu.

 Daftar file secara verbose (JSON cetak cantik):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Daftar file secara rekursif dan verbosely:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Lihat bantuan untuk perintah `ls` , menjelaskan semua opsi:

    mo ls -h
    mo ls --help

 ### Tulis file ke stdout
 Perintah `cat` akan mencetak file ke stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Dalam semangat UNIX yang sebenarnya *(namun tentu saja bukan praktiknya!)* perintah `cat` **tidak mengambil pilihan**
 selain `-h` / `--help` untuk menampilkan informasi yang berguna.

 ### Salin file
 Salin satu file dari satu mobileto ke yang lain:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Salin satu file dari satu mobiletto ke yang lain, ganti namanya di tempat tujuan:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Salin direktori secara rekursif:

    mo cp -r conn1/some/directory conn2/some/dest/

 Lihat bantuan untuk perintah `cp` , menjelaskan semua opsi:

    mo cp -h
    mo cp --help

 Catatan: Penyalinan file tidak terlalu cepat, karena saat ini memerlukan file sementara perantara.

 ### Hapus file
 Hapus satu file:

    mo rm conn1/some/file.txt

 Hapus satu file dan jangan mengeluh tentang kesalahan apa pun:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Hapus direktori:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Hapus direktori dan jangan mengeluh tentang kesalahan apa pun:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Lihat metadata
 Mengetahui metadata suatu file sering kali berguna, tanpa mengunduh seluruh file.

 Mobiletto dapat melaporkan ukuran file dan waktu modifikasi terakhir, selain nama dan jenis.

 Untuk melihat metadata:

    mo meta conn1/some/file.txt

 ### Direktori cermin
 Pencerminan lebih dari kasus khusus `cp` , ini adalah perintah mobiletto terpisah yang membungkus
 operasi penyalinan; itu berlanjut bahkan ketika kesalahan terjadi, dan melacak jumlah keberhasilan dan kesalahan.

 Untuk mencerminkan semuanya dari conn1 ke conn2:

    mo mirror conn1 conn2

 Untuk mencerminkan subdirektori:

    mo mirror conn1/some/subdir conn2

 Untuk mencerminkan subdirektori ke subdirektori lain:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
