mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) için bir komut satırı arayüzü (CLI)
 depolamak.

 Mobiletto, Amazon S3, Backblaze B2 ve yerel dosya sistemlerine bağlantıları destekler.

 # Bunu başka bir dilde oku
 Bu README.md belgesi [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) aracılığıyla şu dile çevrildi:
 **[Google Çeviri tarafından desteklenen her dil](https://cloud.google.com/translate/docs/languages)!**

 Mükemmel olmadığına eminim ama umarım hiç yoktan iyidir!

 [🇸🇦 Arapça](../ar/README.md)
 [🇧🇩 Bengalce](../bn/README.md)
 [🇩🇪 Almanca](../de/README.md)
 [🇺🇸 İngilizce](../en/README.md)
 [🇪🇸 İspanyolca](../es/README.md)
 [🇫🇷 Fransızca](../fr/README.md)
 [çiçek](../ha/README.md)
 [🇮🇳 Hintçe](../hi/README.md)
 [🇮🇩 Endonezyaca](../id/README.md)
 [🇮🇷 İtalyanca](../it/README.md)
 [🇯🇵 Japonca](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Lehçe](../pl/README.md)
 [🇧🇷 Portekizce](../pt/README.md)
 [🇷🇺 Rusça](../ru/README.md)
 [🇰🇪 Svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urduca](../ur/README.md)
 [🇻🇳 Vietnamca](../vi/README.md)
 [🇨🇳 Çince](../zh/README.md)


 **[📚 ... Tüm Diller ...](../README.md)**
 ----

 ### README'nin bu çevirisiyle ilgili bir sorun mu var?
 Orijinal [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)'nin bu özel çevirisi
 kusurlu olabilir -- *düzeltmelere açığız!* Lütfen bir [GitHub üzerinden çekme isteği gönderin](https://github.com/cobbzilla/mobiletto-cli/pulls),
 veya bunu yapmaktan çekiniyorsanız [bir sorun açın](https://github.com/cobbzilla/mobiletto-cli/issues)

 Bir çeviriyle ilgili yeni bir GitHub sorunu oluşturduğunuzda lütfen şunları yapın:
 * sayfa URL'sini ekleyin (tarayıcı adres çubuğundan kopyala/yapıştır)
 * yanlış olan metni tam olarak ekleyin (tarayıcıdan kopyala/yapıştır)
 * lütfen neyin yanlış olduğunu açıklayın -- çeviri yanlış mı? biçimlendirme bir şekilde bozuk mu?
 * lütfen daha iyi bir çeviri veya metnin nasıl düzgün biçimlendirilmesi gerektiği konusunda bir öneride bulunun
 * **Teşekkürler!**

 ### Kaynak
 * [GitHub'da mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm'de mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 # İçindekiler
 * [Kurulum ve kullanım](#Kurulum ve kullanım)
 * [npm paketi](#npm paketi)
 * [Kaynaktan](#Kaynaktan)
 * [Bağlantılar](#Bağlantılar)
 * [Bağlantı oluştur](#bağlantı oluştur)
 * [Bağlantıları listele](#Liste bağlantıları)
 * [Dump bağlantı JSON yapılandırması](#Dump-connection-JSON-config)
 * [Bağlantıyı kaldır](#Bağlantıyı kaldır)
 * [Tüm bağlantıları kaldır](#Tüm bağlantıları kaldır)
 * [Depolama ile çalışma](#Depolama ile çalışma)
 * [Liste dosyaları](#List-files)
 * [stdout'a bir dosya yaz](#stdout'a bir dosya yaz)
 * [Dosyaları kopyala](#Dosyaları kopyala)
 * [Dosyaları sil](#Dosyaları sil)
 * [Meta verileri görüntüle](#Meta verileri görüntüle)
 * [Yansıtma dizinleri](#Ayna dizinleri)

 ## Kurulum ve kullanım
 `mobiletto-cli` aracılığıyla veya doğrudan kaynaktan yükleyebilir ve çalıştırabilirsiniz.

 ### npm paketi
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Kaynaktan
 Kaynaktan çalıştırmak için nodejs v16+ ve ipliğe ihtiyacınız olacak

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Bağlantılar
 Tüm mobiletto depolama alanına bir bağlantı üzerinden erişilir.

 Mobiletto şu anda yerel dosya sistemi depolamasına ve Amazon S3 kovalarına bağlantıları desteklemektedir.

 Bağlantılar, şuna benzeyen bir JSON nesnesi tarafından belirtilir:

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

 Tüm seçenekler ve bunların değerleri ve anlamları hakkında tüm ayrıntılar için bkz.
 [mobiletto belgeleri](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Bağlantı oluştur
 Yeni bir bağlantı oluşturmak için bu JSON nesnelerinden birine ihtiyacımız var.

 Etkileşimli olarak bir tane oluşturabilir veya bir dosya veya JSON değişmezi aracılığıyla bir tane sağlayabiliriz:

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

 ### Bağlantıları listele
 Kullanılabilir bağlantıları listeleyin:

    mo connect -l
    mo connect --list

 ### Döküm bağlantısı JSON yapılandırması
 Bir bağlantı için tam JSON yapılandırmasını gösterin. **UYARI** bu, anahtarları ve sırları stdout'a yazdıracaktır.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Bağlantıyı kaldırın
 Tek bir bağlantıyı kaldırın:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Tüm bağlantıları kaldırın
 TÜM bağlantıları kaldırın:

    mo connect -R
    mo connect --remove-all

 ## Depolamayla çalışma
 Bazı bağlantılar oluşturduktan sonra `ls` ' , `cp` ' , `rm` , `meta` ve `mirror` işlemlerini kullanın.
 onlarla çalışmak için.

 Bir komuta sağladığınız her dosya yolunun önüne bağlantının adının eklenmesi gerekir.
 atıfta bulunur. Aşağıdaki örneklerde, `conn1` ve `conn2` adında iki bağlantı olduğunu varsayıyoruz.

 ### Liste dosyaları
 Bir liste komutunun çıktısı, dosyaları temsil eden her satırda bir tane olacak şekilde bir dizi JSON nesnesidir.
 bulundu. Bu nesnelerin bir `name` ve `type` ve muhtemelen başka alanları olacaktır.

    mo ls conn1/some/path

 Dosyaları yinelemeli olarak listeleyin:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Şifreli depolama notu**: Yinelemeli listeleme, şifreli bağlantılar için henüz desteklenmemektedir.
 Bir seferde yalnızca bir dosya dizini listeleyebilirsiniz.

 Dosyaları ayrıntılı olarak listeleyin (oldukça yazdırılmış JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Dosyaları özyinelemeli ve ayrıntılı olarak listeleyin:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` komutu için yardımı görüntüleyin, tüm seçenekleri açıklar:

    mo ls -h
    mo ls --help

 ### stdout'a bir dosya yazın
 `cat` komutu bir dosyayı stdout'a yazdıracaktır:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Gerçek UNIX ruhuyla *(ama kesinlikle pratik değil!)* mobiletto'nun `cat` komutu **seçenek kabul etmez**
 yararlı bilgileri görüntülemek için `-h` / `--help` dışında.

 ### Dosyaları kopyala
 Tek bir dosyayı bir mobilettodan diğerine kopyalayın:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Hedefte yeniden adlandırarak tek bir dosyayı bir mobilettodan diğerine kopyalayın:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Bir dizini tekrar tekrar kopyalayın:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` komutu için yardımı görüntüleyin, tüm seçenekleri açıklar:

    mo cp -h
    mo cp --help

 Not: Dosya kopyalama, şu anda bir ara geçici dosya gerektirdiğinden çok hızlı değildir.

 ### Dosyaları sil
 Tek bir dosyayı silin:

    mo rm conn1/some/file.txt

 Tek bir dosyayı silin ve herhangi bir hatadan şikayet etmeyin:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Bir dizini silin:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Bir dizini silin ve herhangi bir hatadan şikayet etmeyin:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Meta verileri görüntüle
 Dosyanın tamamını indirmeden bir dosyanın meta verilerini bilmek genellikle yararlıdır.

 Mobiletto, isim ve türe ek olarak dosya boyutunu ve son değiştirilme zamanını rapor edebilir.

 Meta verileri görüntülemek için:

    mo meta conn1/some/file.txt

 ### Ayna dizinleri
 Yansıtma, `cp` özel bir durumundan daha fazlasıdır;
 kopyalama işlemi; hatalar oluştuğunda bile devam eder ve başarıların ve hataların sayısını takip eder.

 Her şeyi conn1'den conn2'ye yansıtmak için:

    mo mirror conn1 conn2

 Bir alt dizini yansıtmak için:

    mo mirror conn1/some/subdir conn2

 Bir alt dizini başka bir alt dizine yansıtmak için:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
