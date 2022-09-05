soghluaistetto-cli
 ============
 Comhéadan líne ordaithe (CLI) le haghaidh [mobiletto](https://www.npmjs.com/package/mobiletto)
 stórála.

 Tacaíonn Mobiletto le naisc le Amazon S3, Backblaze B2, agus córais comhaid áitiúla.

 # Léigh é seo i dteanga eile
 Aistríodh an doiciméad README.md seo, trí [ `hokeylization` ](https://github.com/cobbzilla/hokeylization), go
 **[gach teanga a dtacaíonn Google Translate léi]( https://cloud.google.com/translate/docs/languages)!**

 Tá mé cinnte nach bhfuil sé foirfe, ach tá súil agam go bhfuil sé níos fearr ná rud ar bith!

 [🇸🇦 Araibis](../ar/README.md)
 [🇧🇩 Beangáilis](../bn/README.md)
 [🇩🇪 Gearmáinis](../de/README.md)
 [🇺🇸 Béarla](../ga/README.md)
 [🇪🇸 Spáinnis](../es/README.md)
 [🇫🇷 Fraincis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hiondúis](../hi/README.md)
 [🇮🇩 Indinéisis](../id/README.md)
 [🇮🇹 Iodáilis](../it/README.md)
 [🇯🇵 Seapáinis](../ja/README.md)
 [🇰🇷 Cóiréis](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polainnis](../pl/README.md)
 [🇧🇷 Portaingéilis](../pt/README.md)
 [🇷🇺 Rúisis](../ru/README.md)
 [🇰🇪 Svahaílis](../sw/README.md)
 [🇵🇭 Tagálaigis](../tl/README.md)
 [🇹🇷 Tuircis](../tr/README.md)
 [🇵🇰 Urdais](../ur/README.md)
 [🇻🇳 Vítneamais](../vi/README.md)
 [🇨🇳 Sínis](../zh/README.md)


 **[📚 ... Gach Teanga ...](../README.md)**
 ----

 ### An bhfuil fadhb leis an aistriúchán seo ar an README?
 An t-aistriúchán áirithe seo ar an mbunleagan [README]( https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 seans go bhfuil sé lochtach -- *tá fáilte mhór roimh cheartúcháin!* Seol [iarratas tarraingthe ar GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 nó mura bhfuil tú compordach é sin a dhéanamh, [oscail ceist]( https://github.com/cobbzilla/mobiletto-cli/issues)

 Nuair a chruthaíonn tú saincheist nua GitHub faoi aistriúchán, déan:
 * cuir isteach URL an leathanaigh (cóipeáil/greamaigh ó bharra seoltaí an bhrabhsálaí)
 * cuir isteach an téacs cruinn atá mícheart (cóipeáil/greamaigh ón mbrabhsálaí)
 * Déan cur síos le do thoil ar a bhfuil mícheart -- an bhfuil an t-aistriúchán mícheart? an bhfuil an fhormáidiú briste ar bhealach éigin?
 * go cineálta moladh a thabhairt faoi aistriúchán níos fearr, nó conas is ceart an téacs a fhormáidiú i gceart
 * **Go raibh maith agat!**

 ### Foinse
 * [mobiletto-cli ar GitHub]( https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli ar npm]( https://www.npmjs.com/package/mobiletto-cli)

 # Ábhar
 * [Suiteáil agus úsáid](#Suiteáil-agus-úsáid)
 * [pacáiste npm](#npm-package)
 * [Ón bhfoinse](#Ón bhfoinse)
 * [Naisc](# Nasc)
 * [Cruthaigh nasc](#Cruthaigh-nasc)
 * [Naisc liosta](# nasc-liosta)
 * [Ceangal dumpála cumraíocht JSON](# Dump-connection-JSON-config)
 * [Bain nasc](#Remove-a-connect)
 * [Bain gach nasc](#Bain-uile-nasc)
 * [Ag obair le stóras](#Working-with-storage)
 * [Liosta comhaid](#List-comhaid)
 * [Scríobh comhad chuig stdout](#Write-a-file-to-stdout)
 * [Cóipeáil comhaid](#Copy-files)
 * [Scrios comhaid](#Scrios-comhaid)
 * [Féach ar mheiteashonraí](#View-metadata)
 * [Eolairí scáthán](#Mirror-directories)

 ## Suiteáil agus úsáid
 Is féidir leat `mobiletto-cli` a shuiteáil agus a rith trí npm nó go díreach ón bhfoinse.

 ### pacáiste npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Ón bhfoinse
 Chun rith ón bhfoinse, beidh nódejs v16+ agus snáth uait

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Naisc
 Tá rochtain ar gach stóras mobiletto trí nasc.

 Faoi láthair tacaíonn Mobiletto le naisc leis an gcóras comhad stórála áitiúil agus le buicéid Amazon S3.

 Sonraítear naisc ag réad JSON a bhfuil cuma mar seo air:

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

 Chun sonraí iomlána a fháil ar na roghanna go léir agus a gcuid luachanna agus bríonna, féach ar an
 [mobiletto docs]( https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Cruthaigh nasc
 Chun nasc nua a chruthú, teastaíonn ceann de na oibiachtaí JSON seo uainn.

 Is féidir linn ceann a chruthú go hidirghníomhach, nó ceann a sholáthar trí chomhad nó JSON litriúil:

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

 ### Liostaigh naisc
 Liostaigh naisc atá ar fáil:

    mo connect -l
    mo connect --list

 ### Nasc dumpála cumraíocht JSON
 Taispeáin an chumraíocht JSON iomlán le haghaidh nasc. **RABHADH** priontálfaidh sé seo eochracha agus rúin chuig stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Bain nasc
 Bain nasc amháin:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Bain gach nasc
 Bain GACH nasc:

    mo connect -R
    mo connect --remove-all

 ## Ag obair le stóras
 Nuair a bheidh roinnt nasc cruthaithe agat, úsáid na `ls` , `cp` , `rm` , `meta` agus `mirror`
 a bheith ag obair leo.

 Ní mór ainm an naisc a réamhshocrú do gach conair comhaid a sholáthraíonn tú don ordú
 tagraíonn sé do. Sna samplaí thíos, glacaimid leis go bhfuil dhá nasc ann darb ainm `conn1` agus `conn2`

 ### Liostaigh comhaid
 Is é aschur ordú liosta ná sraith réad JSON, ceann in aghaidh an líne, a léiríonn na comhaid
 fuarthas. Beidh `name` agus `type` ag na réada seo, agus b'fhéidir réimsí eile.

    mo ls conn1/some/path

 Liostaigh na comhaid go hathchúrsach:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nóta stórála criptithe**: Ní thacaítear fós le liostú athchúrsach do naisc criptithe.
 Ní féidir leat ach eolaire comhad amháin a liostú ag an am.

 Liostaigh comhaid go briathra (JSON an-chlóite):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Liostaigh comhaid go hathchúrsach agus go briathartha:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Féach ar chabhair le haghaidh ordú `ls` , cuireann sé síos ar na roghanna go léir:

    mo ls -h
    mo ls --help

 ### Scríobh comhad chuig stdout
 Priontálfaidh an t-ordú `cat` comhad chuig stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 I bhfíor-spiorad UNIX *(ach is cinnte nach bhfuil an cleachtas!)* ní ghlacann ordú `cat` cat` mobiletto **aon roghanna**
 seachas `-h` / `--help` chun eolas cabhrach a thaispeáint.

 ### Cóipeáil comhaid
 Cóipeáil comhad amháin ó mobileto amháin go ceann eile:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Cóipeáil comhad amháin ó mobiletto amháin go ceann eile, agus é a athainmniú ag an gceann scríbe:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Cóipeáil eolaire go hathchúrsach:

    mo cp -r conn1/some/directory conn2/some/dest/

 Féach ar chabhair le haghaidh ordú `cp` , cuireann sé síos ar na roghanna go léir:

    mo cp -h
    mo cp --help

 Nóta: Níl cóipeáil comhaid an-tapa, toisc go dteastaíonn comhad ama idirghabhálaí faoi láthair.

 ### Scrios comhaid
 Scrios comhad amháin:

    mo rm conn1/some/file.txt

 Scrios comhad amháin agus ná déan gearán faoi aon earráidí:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Scrios eolaire:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Scrios eolaire agus ná gearán faoi aon earráidí:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Féach ar mheiteashonraí
 Is minic a bhíonn sé úsáideach meiteashonraí an chomhaid a bheith ar eolas agat, gan an comhad iomlán a íoslódáil.

 Tá Mobiletto in ann méid an chomhaid agus an t-am athraithe dheireanach a thuairisciú, chomh maith le hainm agus cineál.

 Chun meiteashonraí a fheiceáil:

    mo meta conn1/some/file.txt

 ### Eolairí scátháin
 Is éard atá i gceist le scáthánú ná cás speisialta `cp` , is ordú mobiletto ar leith é a chumhdaíonn an
 oibriú cóip; leanann sé ar aghaidh fiú nuair a tharlaíonn earráidí, agus rianaítear comhaireamh rathúlachta agus earráidí.

 Chun gach rud a scáthánú ó conn1 go conn2:

    mo mirror conn1 conn2

 Chun fochomhadlann a scáthánú:

    mo mirror conn1/some/subdir conn2

 Chun fochomhadlann a scáthánú isteach i bhfochomhadlann eile:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
