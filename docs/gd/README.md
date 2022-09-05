mobiletto-cli
 ============
 Eadar-aghaidh loidhne-àithne (CLI) airson [mobiletto](https://www.npmjs.com/package/mobiletto)
 stòradh.

 Bidh Mobiletto a’ toirt taic do cheanglaichean ri Amazon S3, Backblaze B2, agus siostaman faidhle ionadail.

 # Leugh seo ann an cànan eile
 Chaidh an sgrìobhainn README.md seo eadar-theangachadh, tro [hokeylization](https://github.com/cobbzilla/hokeylization), gu
 **[a h-uile cànan le taic bho Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Tha mi cinnteach nach eil e foirfe, ach tha mi an dòchas gu bheil e nas fheàrr na dad!

 [🇸🇦 Arabais](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Gearmailtis](../de/README.md)
 [🇺🇸 Beurla](../ga/README.md)
 [🇪🇸 Spàinntis](../es/README.md)
 [🇫🇷 Fraingis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Eadailtis](../it/README.md)
 [🇯🇵 Seapanais](../ja/README.md)
 [🇰🇷 Coirèanais](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pòlainnis](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Ruisis](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcais](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Bhietnam](../vi/README.md)
 [🇨🇳 Sìnis](../zh/README.md)


 **[📚 ... a h-uile cànan ...](../README.md)**
 ----

 ### A bheil duilgheadas ann leis an eadar-theangachadh seo den README?
 An eadar-theangachadh sònraichte seo den fhear thùsail [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 faodaidh gu bheil e lochtach -- * tha fàilte mhòr air ceartachaidhean!* Feuch an cuir thu [iarrtas tarraing air GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 no mura h-eil thu comhfhurtail a’ dèanamh sin, [fosgail cùis](https://github.com/cobbzilla/mobiletto-cli/issues)

 Nuair a chruthaicheas tu cùis GitHub ùr mu eadar-theangachadh, feuch an dèan thu:
 * cuir a-steach URL na duilleige (lethbhreac / pasg bho bhàr seòlaidh a’ bhrobhsair)
 * cuir a-steach an dearbh theacsa a tha ceàrr (lethbhreac / pasgain bhon bhrobhsair)
 * thoir cunntas air dè tha ceàrr -- a bheil an t-eadar-theangachadh ceàrr? A bheil an cruth briste ann an dòigh air choreigin?
 * thoir gu coibhneil moladh air eadar-theangachadh nas fheàrr, no mar a bu chòir an teacsa a bhith air a chruth ceart
 * **Tapadh leat!**

 # Susbaint
 * [Stòr](#Stòr)
 * [Taic is Maoineachadh](#Taic-is-Maoineachadh)
 * [Stàladh agus cleachdadh](# Installation-and-use)
 * [pasgan npm](#npm-package)
 * [Bhon stòr](#From-source)
 * [Ceanglaichean](#Ceanglaichean)
 * [Cruthaich ceangal](#Create-a-connection)
 * [Ceanglaichean liosta](#List-connections)
 * [Dump ceangal JSON config](# Dump-connection-JSON-config)
 * [Thoir air falbh ceangal](#Remove-a-connection)
 * [Thoir air falbh a h-uile ceangal](#Remove-all-connections)
 * [Ag obair le stòradh](#Working-with-storage)
 * [Faidhlichean liosta](#List-files)
 * [Sgrìobh faidhle gu stdout](#Write-a-file-to-stdout)
 * [Dèan lethbhreac de fhaidhlichean](#Copy-files)
 * [Sguab às na faidhlichean](#Delete-files)
 * [Seall meata-dàta](#View-metadata)
 * [clàran sgàthan](#Mirror-directories)

 ### Stòr
 * [mobiletto-cli air GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli air npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Taic agus Maoineachadh
 Tha mi a’ feuchainn ri bhith nam leasaiche bathar-bog còd fosgailte proifeasanta. Tha mi air a bhith ag obair ann
 ann an gnìomhachas bathar-bog airson grunn bhliadhnaichean, tha mi air companaidhean soirbheachail a thòiseachadh agus air an reic ri companaidhean poblach.
 O chionn ghoirid chaill mi an obair agam, agus gu dearbh chan eil obair sam bith eile agam

 Mar sin tha mi a’ dol a dh’fheuchainn ri bathar-bog feumail a sgrìobhadh agus faicinn a bheil sin ag obair

 Ma tha e a’ còrdadh riut a bhith a’ cleachdadh a’ bhathar-bog seo, bhithinn fada nur comain airson eadhon an
 as lugha [tabhartas mìosail tro Patreon](https://www.patreon.com/cobbzilla)

 *Tapadh leat!*

 ## Stàladh agus cleachdadh
 Faodaidh tu `mobiletto-cli` a stàladh agus a ruith tro npm no gu dìreach bhon stòr.

 ### npm pacaid
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Bhon stòr
 Gus ruith bhon stòr, bidh feum agad air nodejs v16+ agus snàth

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Ceanglaichean
 Gheibhear a-steach don stòradh mobiletto gu lèir tro cheangal.

 Tha Mobiletto an-dràsta a’ toirt taic do cheanglaichean ri stòradh siostam faidhle ionadail agus bucaidean Amazon S3.

 Tha ceanglaichean air an sònrachadh le nì JSON a tha coltach ri seo:

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

 Airson làn fhiosrachadh mu na roghainnean uile agus na luachan agus an ciall, faic an
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Cruthaich ceangal
 Gus ceangal ùr a chruthachadh, feumaidh sinn aon de na stuthan JSON sin.

 Is urrainn dhuinn fear a chruthachadh gu h-eadar-ghnìomhach, no fear a thoirt seachad tro fhaidhle no JSON literal:

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

 ### Dèan liosta de cheanglaichean
 Liosta de na ceanglaichean a tha rim faighinn:

    mo connect -l
    mo connect --list

 ### Dump connection JSON config
 Seall an rèiteachadh JSON slàn airson ceangal. ** RABHADH ** clò-bhuailidh seo iuchraichean agus dìomhaireachdan gu stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Thoir air falbh ceangal
 Thoir air falbh aon cheangal:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Thoir air falbh a h-uile ceangal
 Thoir air falbh A H-UILE ceangal:

    mo connect -R
    mo connect --remove-all

 ## Ag obair le stòradh
 Aon uair 's gu bheil thu air cuid de cheanglaichean a chruthachadh, cleachd na h- `ls` , `cp` , `rm` , `meta` `mirror`
 a bhith ag obair còmhla riutha.

 Feumaidh gach slighe faidhle a bheir thu gu àithne a bhith air a ro-leasachan le ainm a’ cheangail
 tha e a’ toirt iomradh. Anns na h-eisimpleirean gu h-ìosal, tha sinn a’ gabhail ris gu bheil dà cheangal ann leis an ainm `conn1` agus `conn2`

 ### Dèan liosta de na faidhlichean
 Is e toradh òrdugh liosta sreath de nithean JSON, aon airson gach loidhne, a’ riochdachadh nam faidhlichean
 fhuaradh. Bidh ' `name` agus 'seòrsa' aig na nithean sin, agus 's `type` raointean eile.

    mo ls conn1/some/path

 Dèan liosta de na faidhlichean a-rithist:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Nòta stòraidh crioptaichte **: Chan eil taic ri liostadh ath-chuairteach fhathast airson ceanglaichean crioptaichte.
 Chan urrainn dhut ach aon eòlaire fhaidhlichean a liostadh aig aon àm.

 Dèan liosta de na faidhlichean gu cainnteach (JSON air a dheagh chlò-bhualadh):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Dèan liosta de na faidhlichean gu ath-chuairteach agus gu cainnteach:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Thoir sùil air cuideachadh airson àithne `ls` , a’ toirt cunntas air a h-uile roghainn:

    mo ls -h
    mo ls --help

 ### Sgrìobh faidhle gu stdout
 Clò-bhuail an àithne `cat` faidhle gu stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Ann am fìor spiorad UNIX * (ach gu cinnteach chan e an cleachdadh!) * chan eil òrdugh `cat` ** a’ gabhail roghainnean **
 a bharrachd air `-h` / `--help` gus fiosrachadh feumail a thaisbeanadh.

 ### Dèan lethbhreac de na faidhlichean
 Dèan lethbhreac de fhaidhle singilte bho aon mobiletto gu fear eile:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Dèan lethbhreac de fhaidhle singilte bho aon mobiletto gu fear eile, ag ath-ainmeachadh aig a’ cheann-uidhe:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Dèan lethbhreac ath-chuairteach de eòlaire:

    mo cp -r conn1/some/directory conn2/some/dest/

 Thoir sùil air cuideachadh airson àithne `cp` , a’ toirt cunntas air a h-uile roghainn:

    mo cp -h
    mo cp --help

 Nota: Chan eil lethbhreacadh faidhle glè luath, oir tha feum air faidhle temp eadar-mheadhanach an-dràsta.

 ### Sguab às na faidhlichean
 Sguab às aon fhaidhle:

    mo rm conn1/some/file.txt

 Sguab às aon fhaidhle agus na dèan gearan mu mhearachdan sam bith:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Sguab às eòlaire:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Sguab às eòlaire agus na gearan mu mhearachdan sam bith:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Seall meata-dàta
 Gu tric tha e feumail fios a bhith agad air meata-dàta faidhle, gun a bhith a’ luchdachadh sìos am faidhle gu lèir.

 Is urrainn dha Mobiletto cunntas a thoirt air meud an fhaidhle agus an ùine atharraichte mu dheireadh, a bharrachd air ainm is seòrsa.

 Gus meata-dàta fhaicinn:

    mo meta conn1/some/file.txt

 ### Clàran sgàthan
 Tha sgàthan nas motha na cùis shònraichte de `cp` , is e òrdugh mobiletto air leth a tha a’ cuairteachadh an
 obrachadh lethbhreac; bidh e a’ leantainn eadhon nuair a tha mearachdan a’ tachairt, agus a’ cumail sùil air soirbheasan is mearachdan.

 Gus sgàthan a h-uile càil bho conn1 gu conn2:

    mo mirror conn1 conn2

 Gus fo-eòlaire a nochdadh:

    mo mirror conn1/some/subdir conn2

 Gus fo-eòlaire a nochdadh gu fo-eòlaire eile:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
