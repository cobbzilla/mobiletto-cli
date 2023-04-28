mobiletto-cli
 ==============
 Komandlinia interfaco (CLI) por [mobiletto](https://www.npmjs.com/package/mobiletto)
 stokado.

 Mobiletto subtenas ligojn al Amazon S3, Backblaze B2 kaj lokaj dosiersistemoj.

 # Legu ĉi tion en alia lingvo
 Ĉi tiu dokumento README.md estis tradukita, per [hokeylization](https://github.com/cobbzilla/hokeylization), en
 **[ĉiu lingvo subtenata de Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Mi certas, ke ĝi ne estas perfekta, sed mi esperas, ke ĝi estas pli bona ol nenio!

 [🇸🇦 araba](../ar/README.md)
 [🇧🇩 bengala](../bn/README.md)
 [🇩🇪 germana](../de/README.md)
 [🇺🇸 angla](../eo/README.md)
 [🇪🇸 Hispana](../es/README.md)
 [🇫🇷 Franca](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindia](../hi/README.md)
 [🇮🇩 indonezia](../id/README.md)
 [🇮🇹 itala](../it/README.md)
 [🇯🇵 japana](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Pola](../pl/README.md)
 [🇧🇷 portugala](../pt/README.md)
 [🇷🇺 Rusa](../ru/README.md)
 [🇰🇪 Svahila](../sw/README.md)
 [🇵🇭 Tagaloga](../tl/README.md)
 [🇹🇷 Turka](../tr/README.md)
 [🇵🇰 Urdua](../ur/README.md)
 [🇻🇳 vjetnama](../vi/README.md)
 [🇨🇳 Ĉina](../zh/README.md)


 **[📚 ... Ĉiuj lingvoj ...](../README.md)**
 ----

 ### Ĉu estas problemo kun ĉi tiu traduko de la README?
 Ĉi tiu aparta traduko de la originalo [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 eble misfunkcias -- *korektoj estas tre bonvenaj!* Bonvolu sendi [tiran peton sur GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 aŭ se vi ne komfortas fari tion, [malfermu temon](https://github.com/cobbzilla/mobiletto-cli/issues)

 Kiam vi kreas novan GitHub-an numeron pri traduko, bonvolu fari:
 * inkluzivu la paĝon URL (kopiu/gluu el retumila adresbreto)
 * inkluzivu la ĝustan tekston malĝustan (kopiu/gluu el retumilo)
 * bonvolu priskribi kio estas malĝusta -- ĉu la traduko estas malĝusta? ĉu la formatado estas rompita iel?
 * bonvolu proponi sugeston pri pli bona traduko, aŭ kiel la teksto estu taŭge formatita
 * **Dankon!**

 # Enhavo
 * [Fonto](#Fonto)
 * [Subteno kaj Financado](#Subteno-kaj-Fincado)
 * [Instalado kaj uzado](#Instalado-kaj-uzado)
 * [npm-pakaĵo](#npm-pakaĵo)
 * [El fonto](#De-fonto)
 * [Konektoj](#Konektoj)
 * [Krei konekton](#Create-a-connection)
 * [Listo-konektoj](#Listo-konektoj)
 * [Dump-konekto JSON-agordo](#Dump-connection-JSON-config)
 * [Forigi konekton](#Forigi-a-konekton)
 * [Forigi ĉiujn ligojn](#Forigi-ĉiujn-konektojn)
 * [Laborante kun stokado](#Working-with-storage)
 * [Listo-dosieroj](#Listo-dosieroj)
 * [Skribu dosieron al stdout](#Write-a-file-to-stdout)
 * [Kopii dosierojn](#Kopii-dosieroj)
 * [Forigi dosierojn](#Delete-dosieroj)
 * [Vidi metadatumojn](#Vidi-metadatumoj)
 * [Spegulaj dosierujoj](#Mirror-dosierujoj)

 ### Fonto
 * [mobiletto-cli sur GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli sur npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Subteno kaj Financado
 Mi provas esti profesia liberkoda programisto. Mi laboris en
 la programara industrio dum multaj jaroj, mi komencis sukcesajn kompaniojn kaj vendis ilin al publikaj kompanioj.
 Lastatempe mi perdis mian laboron, kaj mi vere ne havas alian laboron vicigita

 Do mi provos verki helpeman programaron kaj vidi ĉu tio funkcias

 Se vi ĝuas uzi ĉi tiun programaron, mi estus sincere dankema eĉ pro la
 plej malgranda [monata kontribuo per Patreon](https://www.patreon.com/cobbzilla)

 *Dankon!*

 ## Instalado kaj uzado
 Vi povas instali kaj ruli `mobiletto-cli` per npm aŭ rekte de fonto.

 ### npm-pakaĵo
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### El fonto
 Por kuri de fonto, vi bezonos nodejs v16+ kaj fadenon

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Konektoj
 Ĉiu mobiletto-stokado estas alirebla per konekto.

 Mobiletto nuntempe subtenas konektojn al la loka dosiersistemstokado kaj Amazon S3 siteloj.

 Konektoj estas specifitaj per JSON-objekto, kiu aspektas jene:

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

 Por plenaj detaloj pri ĉiuj opcioj kaj iliaj valoroj kaj signifoj, vidu la
 [mobiletto-dokumentoj](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Kreu konekton
 Por krei novan konekton, ni bezonas unu el ĉi tiuj JSON-objektoj.

 Ni povas krei unu interage, aŭ provizi per dosiero aŭ JSON laŭvorta:

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

 ### Listo de konektoj
 Listo de disponeblaj konektoj:

    mo connect -l
    mo connect --list

 ### Forĵeta konekto JSON-agordo
 Montru la plenan JSON-agordon por konekto. **AVERTO** ĉi tio presas ŝlosilojn kaj sekretojn al stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Forigi konekton
 Forigi ununuran konekton:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Forigu ĉiujn ligojn
 Forigu ĈIUJN konektojn:

    mo connect -R
    mo connect --remove-all

 ## Laborante kun stokado
 Post kiam vi kreis iujn konektojn, uzu la `ls` , `cp` , `rm` , `meta` kaj `mirror`
 labori kun ili.

 Ĉiu dosiervojo kiun vi provizas al komando devas esti antaŭfiksita kun la nomo de la konekto
 ĝi rilatas al. En la malsupraj ekzemploj, ni supozas ke ekzistas du ligoj nomitaj `conn1` kaj `conn2`

 ### Listo dosierojn
 La eligo de listkomando estas serio de JSON-objektoj, unu per linio, reprezentante la dosierojn
 trovita. Ĉi tiuj objektoj havos `name` kaj `tipo `type` , kaj eble aliajn kampojn.

    mo ls conn1/some/path

 Listigu dosierojn rekursie:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Noto pri ĉifrita konservado**: Rekursiva listo ankoraŭ ne estas subtenata por ĉifritaj konektoj.
 Vi povas listigi nur unu dosierujon de dosieroj samtempe.

 Listigu dosierojn laŭvorte (bele presita JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Listigu dosierojn rekursie kaj vorte:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Rigardu helpon por komando `ls` , priskribas ĉiujn opciojn:

    mo ls -h
    mo ls --help

 ### Skribu dosieron al stdout
 La komando `cat` presas dosieron al stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 En la vera UNIX-spirito *(tamen certe ne la praktiko!)* la komando `cat` de mobiletto **ne prenas elektojn**
 krom `-h` / `--help` por montri helpajn informojn.

 ### Kopiu dosierojn
 Kopiu ununuran dosieron de unu mobiletto al alia:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopiu ununuran dosieron de unu mobiletto al alia, renomante ĝin ĉe la celloko:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Rekursie kopiu dosierujon:

    mo cp -r conn1/some/directory conn2/some/dest/

 Rigardu helpon por komando `cp` , priskribas ĉiujn opciojn:

    mo cp -h
    mo cp --help

 Noto: Dosierkopiado ne estas tre rapida, ĉar ĝi nuntempe postulas peran tempdosieron.

 ### Forigi dosierojn
 Forigu ununuran dosieron:

    mo rm conn1/some/file.txt

 Forigu ununuran dosieron kaj ne plendu pri iuj eraroj:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Forigi dosierujon:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Forigu dosierujon kaj ne plendu pri iuj eraroj:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Vidi metadatumojn
 Ofte utilas scii la metadatenojn por dosiero, sen elŝuti la tutan dosieron.

 Mobiletto kapablas raporti la dosiergrandecon kaj la lastan modifitan tempon, krom nomo kaj tipo.

 Por vidi metadatenojn:

    mo meta conn1/some/file.txt

 ### Spegula dosierujoj
 Spegulo estas pli ol speciala kazo de `cp` , ĝi estas aparta mobiletto-komando kiu envolvas la
 kopia operacio; ĝi daŭras eĉ kiam okazas eraroj, kaj spuru kalkulon de sukcesoj kaj eraroj.

 Por speguli ĉion de conn1 al conn2:

    mo mirror conn1 conn2

 Por speguli subdosierujon:

    mo mirror conn1/some/subdir conn2

 Por speguli subdosierujon en alian subdosierujon:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
