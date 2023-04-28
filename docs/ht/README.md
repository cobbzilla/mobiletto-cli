mobiletto-cli
 ==============
 Yon koòdone liy kòmand (CLI) pou [mobiletto](https://www.npmjs.com/package/mobiletto)
 depo.

 Mobiletto sipòte koneksyon ak Amazon S3, Backblaze B2, ak sistèm fichye lokal yo.

 # Li sa nan yon lòt lang
 Dokiman README.md sa a te tradui, atravè [hokeylization](https://github.com/cobbzilla/hokeylization), nan
 **[chak lang Google Translate sipòte](https://cloud.google.com/translate/docs/languages)!**

 Mwen sèten li pa pafè, men mwen espere ke li pi bon pase anyen!

 [🇸🇦 Arabe](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alman](../de/README.md)
 [🇺🇸 Angle](../en/README.md)
 [🇪🇸 Panyòl](../es/README.md)
 [🇫🇷 Franse](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Endonezyen](../id/README.md)
 [🇮🇹 Italyen](../it/README.md)
 [🇯🇵 Japonè](../ja/README.md)
 [🇰🇷 Koreyen](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonè](../pl/README.md)
 [🇧🇷 Pòtigè](../pt/README.md)
 [🇷🇺 Ris](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tik](../tr/README.md)
 [🇵🇰 Oudou](../ur/README.md)
 [🇻🇳 Vyetnamyen](../vi/README.md)
 [🇨🇳 Chinwa](../zh/README.md)


 **[📚 ... Tout Lang ...](../README.md)**
 ----

 ### Èske gen yon pwoblèm ak tradiksyon README sa a?
 Tradiksyon an patikilye [README] orijinal sa a (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 ka gen defo -- *koreksyon yo trè akeyi!* Tanpri voye yon [pull demand sou GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 oswa si w pa konfòtab pou w fè sa, [louvri yon pwoblèm](https://github.com/cobbzilla/mobiletto-cli/issues)

 Lè ou kreye yon nouvo pwoblèm GitHub sou yon tradiksyon, tanpri fè:
 * enkli URL paj la (kopi/kole nan ba adrès navigatè a)
 * enkli tèks egzak ki mal (kopi/kole nan navigatè a)
 * Tanpri dekri sa ki mal -- èske tradiksyon an pa kòrèk? se fòma a kase yon jan kanmenm?
 * Tanpri ofri yon sijesyon pou yon pi bon tradiksyon, oswa ki jan tèks la ta dwe byen fòma
 * **Mèsi!**

 # Kontni
 * [Sous](#Sous)
 * [Sipò ak Finansman](#Sipò-ak-Finansman)
 * [Enstalasyon ak itilizasyon](#Enstalasyon ak itilizasyon)
 * [npm package](#npm-package)
 * [Soti nan sous](#Soti nan sous)
 * [Koneksyon](#Koneksyon)
 * [Kreye yon koneksyon](#Kreye-yon-koneksyon)
 * [Lis koneksyon](#Lis-koneksyon)
 * [Dump koneksyon JSON konfigirasyon](#Dump-connection-JSON-config)
 * [Retire yon koneksyon](#Retire-yon-koneksyon)
 * [Retire tout koneksyon](#Retire-tout-koneksyon)
 * [Travay ak depo](#Working-with-storage)
 * [Lis fichye](#Lis-fichye)
 * [Ekri yon fichye nan stdout](#Write-a-file-to-stdout)
 * [Kopi fichye](#Kopi fichye)
 * [Efase fichye](#Efase-fichye)
 * [View metadata](#View-metadata)
 * [Anyè glas](#Anyè glas)

 ### Sous
 * [mobiletto-cli sou GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli sou npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Sipò ak Finansman
 Mwen eseye vin yon pwofesyonèl devlopè lojisyèl sous louvri. Mwen te travay nan
 endistri a lojisyèl pou anpil ane, mwen te kòmanse konpayi siksè ak vann yo bay konpayi piblik yo.
 Dènyèman mwen pèdi travay mwen, e mwen pa vrèman gen okenn lòt travay ki aliye

 Se konsa, mwen pral eseye ekri lojisyèl itil epi wè si sa ap travay

 Si ou renmen itilize lojisyèl sa a, mwen ta dwe sensèman rekonesan pou menm a
 pi piti [kontribisyon chak mwa atravè Patreon](https://www.patreon.com/cobbzilla)

 *Mèsi!*

 ## Enstalasyon ak itilizasyon
 Ou ka enstale epi kouri `mobiletto-cli` atravè npm oswa dirèkteman nan sous.

 ### npm pake
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Soti nan sous
 Pou kouri soti nan sous, ou pral bezwen nodejs v16 + ak fil

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Koneksyon
 Tout depo mobiletto jwenn aksè atravè yon koneksyon.

 Kounye a Mobiletto sipòte koneksyon ak depo sistèm fichye lokal yo ak bokit Amazon S3.

 Koneksyon yo espesifye pa yon objè JSON ki sanble sa a:

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

 Pou tout detay sou tout opsyon yo ak valè ak siyifikasyon yo, gade nan
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Kreye yon koneksyon
 Pou kreye yon nouvo koneksyon, nou bezwen youn nan objè JSON sa yo.

 Nou ka kreye youn entèaktif, oswa bay youn atravè yon dosye oswa JSON literal:

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

 ### Lis koneksyon yo
 Lis koneksyon ki disponib:

    mo connect -l
    mo connect --list

 ### pil fatra koneksyon JSON konfigirasyon
 Montre konfigirasyon JSON konplè a pou yon koneksyon. **AVÈTISMAN** sa a pral enprime kle ak sekrè nan stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Retire yon koneksyon
 Retire yon sèl koneksyon:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Retire tout koneksyon
 Retire TOUT koneksyon:

    mo connect -R
    mo connect --remove-all

 ## Travay ak depo
 Yon fwa w fin kreye kèk koneksyon, sèvi ak `ls` , `cp` , `rm` , `meta` ak `mirror`
 pou travay avèk yo.

 Chak chemen fichye ke ou bay yon kòmand dwe gen prefiks ak non koneksyon an
 li refere a. Nan egzanp ki anba yo, nou sipoze genyen de koneksyon ki rele `conn1` ak `conn2`

 ### Lis fichye yo
 Pwodiksyon yon lòd lis se yon seri objè JSON, youn pou chak liy, ki reprezante dosye yo
 jwenn. Objè sa yo pral gen yon `name` ak `type` , epi pètèt lòt jaden.

    mo ls conn1/some/path

 Lis fichye yo rekursif:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nòt depo chifreman**: Lis rekursif poko sipòte pou koneksyon chiffres.
 Ou ka sèlman lis yon sèl anyè nan dosye nan yon moman.

 Lis fichye yo an detay (JSON trè enprime):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lis fichye yo rekursif ak vèbal:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Gade èd pou `ls` , dekri tout opsyon:

    mo ls -h
    mo ls --help

 ### Ekri yon fichye sou stdout
 Kòmand `cat` la pral enprime yon dosye sou stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Nan vrè lespri UNIX la *(men sètènman pa pratik la!)* lòd `cat` mobiletto a **pa pran okenn opsyon**
 lòt pase `-h` / `--help` pou montre enfòmasyon itil.

 ### Kopi fichye yo
 Kopi yon sèl fichye soti nan yon mobiletto nan yon lòt:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Kopi yon sèl fichye soti nan yon mobiletto nan yon lòt, chanje non li nan destinasyon an:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Kopi yon anyè rekursif:

    mo cp -r conn1/some/directory conn2/some/dest/

 Gade èd pou `cp` , ki dekri tout opsyon:

    mo cp -h
    mo cp --help

 Remak: Kopi fichye a pa trè vit, paske kounye a li mande pou yon fichye temp entèmedyè.

 ### Efase fichye yo
 Efase yon sèl fichye:

    mo rm conn1/some/file.txt

 Efase yon sèl fichye epi pa pote plent sou okenn erè:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Efase yon anyè:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Efase yon anyè epi pa pote plent sou okenn erè:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Gade metadata
 Li souvan itil pou konnen metadata pou yon fichye, san w pa telechaje tout fichye a.

 Mobiletto kapab rapòte gwosè fichye a ak dènye tan modifye, anplis non ak kalite.

 Pou wè metadata:

    mo meta conn1/some/file.txt

 ### Anyè glas
 Mirroring se pi plis pase yon ka espesyal nan `cp` , li se yon lòd separe mobiltto ki vlope la.
 operasyon kopi; li kontinye menm lè erè rive, epi swiv yon kantite siksè ak erè.

 Pou reflete tout bagay soti nan conn1 nan conn2:

    mo mirror conn1 conn2

 Pou reflete yon sous-anyè:

    mo mirror conn1/some/subdir conn2

 Pou reflete yon sous-répertoire nan yon lòt sous-répertoire:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
