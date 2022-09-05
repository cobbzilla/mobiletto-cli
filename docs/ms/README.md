mobiletto-cli
 =============
 Antara muka baris perintah (CLI) untuk [mobiletto](https://www.npmjs.com/package/mobiletto)
 penyimpanan.

 Mobiletto menyokong sambungan ke Amazon S3, Backblaze B2 dan sistem fail tempatan.

 # Baca ini dalam bahasa lain
 Dokumen README.md ini telah diterjemahkan, melalui [hokeylization](https://github.com/cobbzilla/hokeylization), ke dalam
 **[setiap bahasa disokong oleh Terjemahan Google](https://cloud.google.com/translate/docs/languages)!**

 Saya pasti ia tidak sempurna, tetapi saya harap ia lebih baik daripada tiada!

 [🇸🇦 Bahasa Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Bahasa Jerman](../de/README.md)
 [🇺🇸 Bahasa Inggeris](../ms/README.md)
 [🇪🇸 Bahasa Sepanyol](../es/README.md)
 [🇫🇷 Perancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Itali](../it/README.md)
 [🇯🇵 Bahasa Jepun](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Poland](../pl/README.md)
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

 ### Adakah terdapat masalah dengan terjemahan README ini?
 Terjemahan khusus [README] asal ini (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 mungkin cacat -- *pembetulan sangat dialu-alukan!* Sila hantar [permintaan tarik pada GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 atau jika anda tidak selesa berbuat demikian, [buka isu](https://github.com/cobbzilla/mobiletto-cli/issues)

 Apabila anda membuat isu GitHub baharu tentang terjemahan, sila lakukan:
 * sertakan URL halaman (salin/tampal dari bar alamat penyemak imbas)
 * sertakan teks tepat yang salah (salin/tampal dari penyemak imbas)
 * sila terangkan apa yang salah -- adakah terjemahan itu salah? adakah pemformatan rosak entah bagaimana?
 * sila tawarkan cadangan terjemahan yang lebih baik, atau cara teks harus diformat dengan betul
 * **Terima kasih!**

 # Kandungan
 * [Sumber](#Source)
 * [Sokongan dan Pembiayaan](#Sokongan-dan-Pembiayaan)
 * [Pemasangan dan penggunaan](#Pemasangan-dan-penggunaan)
 * [pakej npm](pakej #npm)
 * [Dari sumber](#Daripada-sumber)
 * [Sambungan](#Sambungan)
 * [Buat sambungan](#Create-a-connection)
 * [Sambungan senarai](#sambungan senarai)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Remove a connection](#Remove-a-connection)
 * [Alih keluar semua sambungan](#Alih keluar-semua-sambungan)
 * [Bekerja dengan storan](#Bekerja-dengan-storan)
 * [Senarai fail](#List-files)
 * [Tulis fail ke stdout](#Write-a-file-to-stdout)
 * [Salin fail](#Salin-fail)
 * [Padam fail](#Padam fail)
 * [Lihat metadata](#Lihat-metadata)
 * [Direktori cermin](#Mirror-directories)

 ### Sumber
 * [mobiletto-cli di GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli pada npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Sokongan dan Pembiayaan
 Saya cuba menjadi pembangun perisian sumber terbuka profesional. Saya telah bekerja di
 industri perisian selama bertahun-tahun, saya telah memulakan syarikat yang berjaya dan menjualnya kepada syarikat awam.
 Baru-baru ini saya kehilangan pekerjaan, dan saya tidak mempunyai sebarang kerja lain yang disediakan

 Jadi saya akan cuba menulis perisian yang berguna dan melihat sama ada ia berfungsi

 Jika anda gemar menggunakan perisian ini, saya akan sangat berterima kasih kerana
 terkecil [sumbangan bulanan melalui Patreon](https://www.patreon.com/cobbzilla)

 *Terima kasih!*

 ## Pemasangan dan penggunaan
 Anda boleh memasang dan menjalankan `mobiletto-cli` melalui npm atau terus daripada sumber.

 ### pakej npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Daripada sumber
 Untuk menjalankan dari sumber, anda memerlukan nodejs v16+ dan benang

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Sambungan
 Semua storan mobiletto diakses melalui sambungan.

 Mobiletto kini menyokong sambungan ke storan sistem fail tempatan dan baldi Amazon S3.

 Sambungan ditentukan oleh objek JSON yang kelihatan seperti ini:

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

 Untuk butiran penuh tentang semua pilihan serta nilai dan maknanya, lihat bahagian
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Buat sambungan
 Untuk membuat sambungan baharu, kami memerlukan salah satu daripada objek JSON ini.

 Kami boleh mencipta satu secara interaktif, atau membekalkannya melalui fail atau literal JSON:

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

 ### Senaraikan sambungan
 Senaraikan sambungan yang tersedia:

    mo connect -l
    mo connect --list

 ### Buang konfigurasi JSON sambungan
 Tunjukkan konfigurasi JSON penuh untuk sambungan. **AMARAN** ini akan mencetak kunci dan rahsia untuk stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Alih keluar sambungan
 Alih keluar satu sambungan:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Alih keluar semua sambungan
 Alih keluar SEMUA sambungan:

    mo connect -R
    mo connect --remove-all

 ## Bekerja dengan storan
 Setelah anda membuat beberapa sambungan, gunakan operasi `ls` , `cp` , `rm` , `meta` dan `mirror`
 untuk bekerja dengan mereka.

 Setiap laluan fail yang anda berikan kepada arahan mesti diawali dengan nama sambungan
 ia merujuk kepada. Dalam contoh di bawah, kami menganggap dua sambungan wujud bernama `conn1` dan `conn2`

 ### Senaraikan fail
 Output arahan senarai ialah satu siri objek JSON, satu setiap baris, mewakili fail
 dijumpai. Objek ini akan mempunyai `name` dan `type` , dan mungkin medan lain.

    mo ls conn1/some/path

 Senaraikan fail secara rekursif:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota storan yang disulitkan**: Penyenaraian rekursif belum lagi disokong untuk sambungan yang disulitkan.
 Anda hanya boleh menyenaraikan satu direktori fail pada satu masa.

 Senaraikan fail secara lisan (cantik-cetak JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Senaraikan fail secara rekursif dan lisan:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Lihat bantuan untuk arahan `ls` , menerangkan semua pilihan:

    mo ls -h
    mo ls --help

 ### Tulis fail ke stdout
 Perintah `cat` akan mencetak fail ke stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Dalam semangat UNIX yang sebenar *(namun pastinya bukan amalan!)* arahan `cat` **tidak mengambil pilihan**
 selain `-h` / `--help` untuk memaparkan maklumat yang berguna.

 ### Salin fail
 Salin satu fail dari satu mobiletto ke yang lain:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Salin satu fail dari satu mobiletto ke yang lain, menamakannya semula di destinasi:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Salin direktori secara rekursif:

    mo cp -r conn1/some/directory conn2/some/dest/

 Lihat bantuan untuk arahan `cp` , menerangkan semua pilihan:

    mo cp -h
    mo cp --help

 Nota: Penyalinan fail tidak begitu pantas, kerana pada masa ini memerlukan fail temp perantara.

 ### Padam fail
 Padamkan satu fail:

    mo rm conn1/some/file.txt

 Padamkan satu fail dan jangan mengeluh tentang sebarang ralat:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Padamkan direktori:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Padamkan direktori dan jangan mengeluh tentang sebarang ralat:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Lihat metadata
 Selalunya berguna untuk mengetahui metadata untuk fail, tanpa memuat turun keseluruhan fail.

 Mobiletto dapat melaporkan saiz fail dan masa terakhir diubah suai, sebagai tambahan kepada nama dan jenis.

 Untuk melihat metadata:

    mo meta conn1/some/file.txt

 ### Cermin direktori
 Pencerminan adalah lebih daripada kes khas `cp` , ia adalah perintah mobiletto berasingan yang membungkus
 operasi salinan; ia berterusan walaupun ralat berlaku, dan menjejaki kiraan kejayaan dan ralat.

 Untuk mencerminkan segala-galanya daripada conn1 ke conn2:

    mo mirror conn1 conn2

 Untuk mencerminkan subdirektori:

    mo mirror conn1/some/subdir conn2

 Untuk mencerminkan subdirektori ke dalam subdirektori lain:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
