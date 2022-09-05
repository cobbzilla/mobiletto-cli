mobiletto-müşderi
 =============
 [Mobiletto](https://www.npmjs.com/package/mobiletto) üçin buýruk setiri interfeýsi (CLI)
 saklamak.

 Mobiletto Amazon S3, Backblaze B2 we ýerli faýl ulgamlaryna birikmeleri goldaýar.

 # Muny başga dilde okaň
 Bu README.md resminamasy [" `hokeylization` "](https://github.com/cobbzilla/hokeylization) üsti bilen terjime edildi
 ** [Google Translate tarapyndan goldanýan her dil](https://cloud.google.com/translate/docs/languages)! **

 Kämil däldigine ynanýaryn, ýöne hiç zatdan gowudyr diýip umyt edýärin!

 [🇸🇦 Arapça](docs / ar / README.md)
 [Ali Bengali](docs / bn / README.md)
 [🇩🇪 Nemesçe](docs / de / README.md)
 [🇺🇸 Iňlis](docs / en / README.md)
 [🇪🇸 Ispança](docs / es / README.md)
 [🇫🇷 Fransuzça](docs / fr / README.md)
 [🇹🇩 Hausa](docs / ha / README.md)
 [🇮🇳 Hindi](docs / hi / README.md)
 [🇮🇩 Indoneziýa](docs / id / README.md)
 [🇮🇹 Italýança](docs / it / README.md)
 [🇯🇵 Japaneseaponça](docs / ja / README.md)
 [🇰🇷 Koreýçe](docs / ko / README.md)
 [🇮🇳 Maranthi](docs / mr / README.md)
 [🇵🇱 Polýakça](docs / pl / README.md)
 [🇧🇷 Portugaliýa](docs / pt / README.md)
 [🇷🇺 Rusça](docs / ru / README.md)
 [Wa Suwaýili](docs / sw / README.md)
 [Ag Tagalog](docs / tl / README.md)
 [🇹🇷 Türkçe](docs / tr / README.md)
 [🇵🇰 urdu](docs / ur / README.md)
 [🇻🇳 Wýetnamly](docs / vi / README.md)
 [🇨🇳 Hytaý](docs / zh / README.md)


 ** [📚 ... Languageshli diller ...](resminamalar / README.md) **
 ----

 ### README-iň bu terjimesinde näsazlyk barmy?
 Asyl [README] bu aýratyn terjimesi (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 kemçilikli bolup biler - * düzedişler gaty hoş geldiňiz! * GitHub-a çekmek haýyşyny iberiň (https://github.com/cobbzilla/mobiletto-cli/pulls),
 ýa-da muny etmek üçin amatly däl bolsaňyz, [bir meseläni açyň](https://github.com/cobbzilla/mobiletto-cli/issues)

 Terjime hakda täze GitHub meselesini döredeniňizde, haýyş edýärin:
 * sahypa URL-ni goşuň (brauzeriň salgy setirinden göçüriň / göçüriň)
 * nädogry teksti goşuň (brauzerden göçüriň / göçüriň)
 * nämäniň nädogrydygyny düşündirmegiňizi haýyş edýäris - terjime nädogrymy? formatlamak nädip bozuldy?
 * has gowy terjime ýa-da tekstiň nädip formatlanmalydygy barada teklip hödürläň
 * **Sagbol!**

 ### Çeşme
 * [GitHub-da mobiletto-müşderi](https://github.com/cobbzilla/mobiletto-cli)
 * [npm-de mobiletto-müşderi](https://www.npmjs.com/package/mobiletto-cli)

 # Mazmuny
 * [Gurmak we ulanmak](# Gurmak we ulanmak)
 * [npm paket](# npm-paket)
 * [Çeşmeden](# Çeşmeden)
 * [Baglanyşyklar](# Baglanyşyklar)
 * [Baglanyşyk dörediň](# Create-a-connection)
 * [Sanaw baglanyşyklary](# Sanaw-baglanyşyklar)
 * [JSON konfigurasiýasyny taşlaň](# Dump-connection-JSON-config)
 * [Baglanyşygy aýyryň](# aýyrmak-aýyrmak)
 * [Connectionhli birikmeleri aýyryň](# Hemme birikmeleri aýyryň)
 * [Saklamak bilen işlemek](# Saklamak bilen işlemek)
 * [Faýllary sanaň](# Sanaw faýllary)
 * [Stdout-a faýl ýazyň](# Write-a-file-to-stdout)
 * [Faýllary göçüriň](# Faýllary göçüriň)
 * [Faýllary öçürmek](# Faýllary öçürmek)
 * [Metadatalary görmek](# View-metadata)
 * [Aýna kataloglary](# Aýna-kataloglar)

 ## Gurmak we ulanmak
 " `mobiletto-cli` " -ni npm ýa-da göni çeşmeden gurup we işledip bilersiňiz.

 ### npm paket
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Çeşmeden
 Çeşmeden işlemek üçin size nodejs v16 + we ýüplük gerek bolar

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Baglanyşyklar
 Mobilehli mobtto ammaryna birikme arkaly girip bolýar.

 Mobiletto häzirki wagtda ýerli faýl ulgamy we Amazon S3 çeleklerine birikmegi goldaýar.

 Baglanyşyklar şuňa meňzeýän JSON obýekti bilen kesgitlenýär:

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

 Thehli wariantlar we olaryň gymmatlyklary we manylary barada doly maglumat üçin serediň
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Baglanyşyk dörediň
 Täze baglanyşyk döretmek üçin bize JSON obýektleriniň biri gerek.

 Biri interaktiw döredip ýa-da birini faýl ýa-da JSON arkaly üpjün edip bileris:

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

 ### Baglanyşyklary sanaň
 Elýeterli baglanyşyklary sanaň:

    mo connect -l
    mo connect --list

 ### JSON konfigurasiýasyny taşlaň
 Birikdirmek üçin doly JSON konfigurasiýasyny görkeziň. ** DUNDURYŞ ** bu stdout-a açarlary we syrlary çap eder.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Baglanyşygy aýyryň
 Bir baglanyşygy aýyryň:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### allhli baglanyşyklary aýyryň
 ALhli baglanyşyklary aýyryň:

    mo connect -R
    mo connect --remove-all

 ## Saklamak bilen işlemek
 Käbir baglanyşyk döredeniňizden soň, " `ls` ", " `cp` ", " `rm` ", " `meta` " we `mirror` amallaryny ulanyň.
 bilen işlemek.

 Buýruk berýän her bir faýl ýoluňyz, birikmäniň ady bilen goşulmalydyr
 degişlidir. Aşakdaky mysallarda " `conn1` we " `conn2` " atly iki baglanyşygyň bardygyny çaklaýarys

 ### Faýllary sanaň
 Sanaw buýrugynyň çykyşy, faýllary görkezýän JSON obýektleriniň hatarydyr
 tapyldy Bu obýektleriň " `name` " we `type` ", we beýleki meýdanlary bolar.

    mo ls conn1/some/path

 Faýllary yzygiderli sanaň:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Şifrlenen ammar belligi **: Şifrlenen birikmeler üçin gaýtalanýan sanaw entek goldanylmaýar.
 Bir gezekde diňe bir faýl katalogyny sanap bilersiňiz.

 Faýllary dilden sanaň (JSON-y gaty gowy çap ediň):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Faýllary yzygiderli we söz bilen sanaň:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 " `ls` buýrugy üçin kömegi görüň, ähli wariantlary düşündirýär:

    mo ls -h
    mo ls --help

 ### stdout-a faýl ýazyň
 " `cat` " buýrugy stdout-a bir faýl çap eder:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Hakyky UNIX ruhunda * (ýöne elbetde amal däl!) * `cat` -nyň "pişik" buýrugy ** hiç hili mümkinçilik almaýar **
 peýdaly maglumatlary görkezmek üçin " `--help` `-h` -den başga.

 ### Faýllary göçüriň
 Bir faýly bir mobtto-dan beýlekisine göçüriň:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Fileekeje faýly bir mobtto-dan beýlekisine göçüriň we barmaly ýerinde üýtgediň:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Katalogy yzygiderli göçüriň:

    mo cp -r conn1/some/directory conn2/some/dest/

 " `cp` buýrugy üçin kömegi görüň, ähli wariantlary suratlandyrýar:

    mo cp -h
    mo cp --help

 Bellik: Faýly göçürmek gaty çalt däl, sebäbi häzirki wagtda araçy temp faýly talap edilýär.

 ### Faýllary poz
 Fileeke faýly pozuň:

    mo rm conn1/some/file.txt

 Fileeke faýly pozuň we ýalňyşlyklardan zeýrenmäň:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Katalogy pozuň:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Katalogy pozuň we ýalňyşlyklardan zeýrenmäň:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Metadatalary görüň
 Faýl üçin meta-maglumaty tutuş faýly göçürip almazdan bilmek köplenç peýdalydyr.

 Mobiletto, adyna we görnüşine goşmaça faýlyň ululygyny we soňky üýtgedilen wagtyny habar berip bilýär.

 Metadatalary görmek üçin:

    mo meta conn1/some/file.txt

 ### Aýna kataloglary
 Aýna aýlamak "cp" -iň aýratyn ýagdaýyndan başga-da, bu aýratyn bir `cp` buýrugy
 göçürmek; ýalňyşlyklar ýüze çykanda-da dowam edýär we üstünlikleriň we ýalňyşlyklaryň sanyny yzarlaýar.

 “Conn1” -den “con2” -e çenli hemme zady aýna etmek üçin:

    mo mirror conn1 conn2

 Bir bukjany aýna etmek üçin:

    mo mirror conn1/some/subdir conn2

 Bir kiçi bukjany başga bir bukja aýna etmek üçin:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
