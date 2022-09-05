mobiletto-cli
 ============
 Interface-ka taliska (CLI) ee [mobiletto](https://www.npmjs.com/package/mobiletto)
 kaydinta.

 Mobiletto waxay taageertaa isku xirka Amazon S3, Backblaze B2, iyo nidaamyada faylalka maxalliga ah.

 # Ku akhri luqad kale
 Dukumeentigan README.md waxa lagu turjumay, iyada oo loo marayo [hokeylization](https://github.com/cobbzilla/hokeylization), galay
 **[Luqadda kasta oo ay taageerto Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Waan hubaa inaysan qummanayn, laakiin waxaan rajeynayaa inay ka fiican tahay waxba!

 [🇸🇦 Carabi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jarmal](../de/README.md)
 [🇺🇸 Ingiriis](../en/README.md)
 [🇪🇸 Isbaanish](../es/README.md)
 [🇫🇷 Faransiis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Talyaani](../it/README.md)
 [🇯🇵 Jabbaan](../ja/README.md)
 [🇰🇷 Kuuriyaan](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Boortaqiis](../pt/README.md)
 [🇷🇺 Ruush](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urduu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Shiine](../zh/README.md)


 **[📚 ... Dhammaan Luqadaha ...](../README.md)**
 ----

 ### Dhib ma ka jirtaa tarjumaada README?
 Turjumaaddan gaarka ah ee asalka ah [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 waxaa laga yaabaa in ay cilladaysan tahay -- *sixitaanku aad ayaa loo soo dhawaynayaa!* Fadlan u soo dir [codsi jiid GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ama haddii aadan ku qanacsanayn inaad taas samayso, [fur arrin](https://github.com/cobbzilla/mobiletto-cli/issues)

 Markaad abuurto arrin cusub oo GitHub ah oo ku saabsan tarjumaada, fadlan samee:
 * ku dar URL bogga (koobi/ku dheji barta ciwaanka browserka)
 * ku dar qoraalka saxda ah ee khaldan (koobi ka soo gal browserka)
 * fadlan sharax waxa khaldan -- turjumaada ma khaldan tahay? qaabaynta si uun ma u jabtay?
 * si naxariis leh u soo jeedi soo jeedin tarjumaad ka wanaagsan, ama sida qoraalka si habboon loo qaabeeyey
 * **Mahadsanid!**

 # Nuxurka
 * [Isha](#Isha)
 * [Taageerada iyo Maalgelinta](#Taageerada-iyo Maalgelinta)
 * [Rakibaadda iyo isticmaalka](#Rakibaadda-iyo-isticmaalka)
 * [xirmo npm](#npm-package)
 * [Isha](#Laga soo bilaabo-source)
 * [Xiriirka](#Xiriirka)
 * [Samee xiriir](#Create-a-connection)
 * [Liiska xidhidhka](#Liiska-isku xidhka)
 * [Ku xidh isku xidhka JSON config](#Dump-connection-JSON-config)
 * [Ka saar xidhiidhka](#Ka saar-ku xidhidhiyaha)
 * [Ka saar dhammaan xiriirada]
 * [La shaqaynta kaydinta](#La shaqaynta-kaydinta)
 * [Liiska faylasha](#Liiska-faylalka)
 * [U qor fayl si stdout](#Qor-a-file-to-stdout)
 * [Nuqli faylasha](#Koobi-faylalka)
 * [Tirtir faylasha](#Delete-files)
 * [Arag xogta badan](#View-metadata)
 * [Hagaha muraayadaha](#Muraayadaha-hagaha)

 ### Source
 * [mobiletto-cli ku yaal GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli onpm](https://www.npmjs.com/package/mobiletto-cli)

 ## Taageerada iyo Maalgelinta
 Waxaan isku dayayaa inaan noqdo horumariye il furan oo xirfad leh. waan ka shaqaynayay
 warshadaha software-ka sanado badan, waxaan bilaabay shirkado guuleysta waxaanan ka iibiyay shirkado dadweyne.
 Dhowaan shaqadeydii waa iga luntay, runtiina shaqo kale oo safan ma jirto

 Markaa waxaan isku dayi doonaa inaan qoro software waxtar leh oo aan eego inay taasi shaqaynayso

 Haddii aad ku raaxaysato isticmaalka software-kan, waxaan si daacad ah ugu mahadcelin lahaa xitaa kuwan
 ugu yar [wax ku darsiga billaha ah ee loo maro Patreon](https://www.patreon.com/cobbzilla)

 *Mahadsanid!*

 ## Rakibaadda iyo isticmaalka
 Waxaad ku rakibi kartaa oo ku socodsiin kartaa `mobiletto-cli` adigoo isticmaalaya npm ama si toos ah isha.

 xirmo ### npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Isha
 Si aad isha uga socoto, waxaad u baahan doontaa nodejs v16+ iyo dun

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Xiriirinta
 Dhammaan kaydinta mobiletto waxaa lagu galaa xiriir.

 Mobiletto hadda waxa ay taageertaa isku xidhka kaydinta nidaamka faylalka deegaanka iyo baaldiyada Amazon S3.

 Xidhiidhada waxa cayimay shay JSON u eeg sidan:

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

 Faahfaahin buuxda oo ku saabsan dhammaan xulashooyinka iyo qiyamkooda iyo macnahooda, eeg bogga
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Samee xiriir
 Si loo abuuro xidhiidh cusub, waxaan u baahanahay mid ka mid ah walxahan JSON.

 Waxaan u abuuri karnaa mid si is dhexgal ah, ama ku bixin karnaa mid fayl ama qoraal ahaan JSON:

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

 ### Liiska isku xirka
 Liis ku tax xidhidhiyaha la heli karo:

    mo connect -l
    mo connect --list

 ### Tuur isku xidhka JSON config
 Tus isku xidhka JSON oo buuxa **DIGNIIN *** tani waxay daabici doontaa furayaasha iyo siraha sirta.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Ka saar xidhiidhka
 Ka saar hal xiriir:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Ka saar dhammaan xiriirada
 Ka saar DHAMMAAN xirmooyinka:

    mo connect -R
    mo connect --remove-all

 ## Ku shaqaynta kaydinta
 Markaad abuurto qaar ka mid ah xidhiidhada, isticmaal `ls` , `cp` , `rm` , `meta` iyo `mirror` hawlgallada
 in lala shaqeeyo.

 Jid kasta oo fayl ah oo aad siiso amarka waa in lagu hormariyaa magaca isku xirka
 waxaa loola jeedaa. Tusaalooyinka hoose, waxaan u qaadaneynaa in laba xiriir ay jiraan oo lagu kala magacaabo `conn1` iyo `conn2`

 ### Liiska faylasha
 Soo saarida amarka liisku waa taxane walxaha JSON ah, hal xariiq kasta, oo matalaya faylalka
 helay. Walxahani waxay yeelan doonaan `name` iyo `type` , iyo suurtagal ahaan meelo kale.

    mo ls conn1/some/path

 U tax faylasha si isdaba joog ah:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Xusuusin kaydinta sir ah ***: Liiska soo noqnoqda weli laguma taageerayo xidhiidhada sir ah.
 Waxaad hal mar liis gareyn kartaa hal buug oo faylal ah.

 U tax faylasha si hadal ah (qurux-daabacan JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 U tax faylasha si isdaba joog ah oo odhaah ah:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Arag caawimada amarka `ls` , waxa uu qeexayaa dhammaan xulashooyinka:

    mo ls -h
    mo ls --help

 ### U qor fayl si aad u stdout
 Amarka `cat` wuxuu daabici doonaa fayl si uu u stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ruuxa UNIX ee runta ah *(wali ma ahan dhaqanku!)* Amarka ' `cat` ** wax doorasho ah ma qaadanayo**
 aan ka ahayn `-h` / `--help` si loo muujiyo macluumaadka waxtarka leh.

 ### nuqul ka samee
 Ka koobbi hal fayl mid mobiletto mid kale:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Ka koobbi hal fayl mid mobiletto una guuro mid kale, adoo magaca u beddelaya meesha loo socdo:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Si isdabajoog ah u koobiyee hagaha:

    mo cp -r conn1/some/directory conn2/some/dest/

 U fiirso caawimada amarka `cp` , waxay qeexaysaa dhammaan xulashooyinka:

    mo cp -h
    mo cp --help

 Fiiro gaar ah: koobiyeynta faylka aad uma degdegsana, sababtoo ah waxay hadda u baahan tahay fayl ku meel gaadh ah.

 ### Tirtir faylasha
 Tirtir hal fayl:

    mo rm conn1/some/file.txt

 Tirtir hal fayl oo ha ka caban wax khalad ah:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Tirtir hagaha:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Tirtir hagaha oo ha ka caban wax khalad ah:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Eeg xogta badan
 Badanaa waa faa'iido leh in la ogaado xogta badan ee faylka, iyada oo aan la soo dejin dhammaan faylka.

 Mobiletto waxa uu awoodaa in uu ka warbixiyo cabbirka faylka iyo wakhtiga ugu dambeeyay ee wax laga beddelay, marka lagu daro magaca iyo nooca.

 Si aad u aragto xogta badan:

    mo meta conn1/some/file.txt

 ### Hagaha muraayadda
 Muraayadda ayaa ka badan kiis gaar ah oo `cp` ah, waa amar mobiletto gaar ah oo soo duuba
 hawlgalka nuqul; way sii socotaa xitaa marka ay khaladaad dhacaan, oo lasoco tirinta guulaha iyo khaladaadka.

 Si aad u milicsato wax walba laga bilaabo conn1 ilaa conn2:

    mo mirror conn1 conn2

 Si aad u milicsato hage-hoosaad:

    mo mirror conn1/some/subdir conn2

 Si aad u milicsato hage-hoosaadyo loo geliyo haga-hoosaad kale:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
