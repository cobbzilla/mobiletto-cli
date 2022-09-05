symudoltto-cli
 ============
 Rhyngwyneb llinell orchymyn (CLI) ar gyfer [mobiletto](https://www.npmjs.com/package/mobiletto)
 storfa.

 Mae Mobiletto yn cefnogi cysylltiadau ag Amazon S3, Backblaze B2, a systemau ffeiliau lleol.

 # Darllenwch hwn mewn iaith arall
 Mae'r ddogfen README.md hon wedi'i chyfieithu, trwy [ `hokeylization` ]( https://github.com/cobbzilla/hokeylization ), i mewn i
 **[pob iaith a gefnogir gan Google Translate]( https://cloud.google.com/translate/docs/languages)!**

 Rwy'n sicr nad yw'n berffaith, ond gobeithio ei fod yn well na dim!

 [🇸🇦 Arabeg](../ar/README.md)
 [🇧🇩 Bengaleg](../bn/README.md)
 [🇩🇪 Almaeneg](../de/README.md)
 [🇺🇸 Saesneg](../cy/README.md)
 [🇪🇸 Sbaeneg](../es/README.md)
 [🇫🇷 Ffrangeg](../fr/README.md)
 [🇹🇩 Hawsa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneseg](../id/README.md)
 [🇮🇹 Eidaleg](../it/README.md)
 [🇯🇵 Japaneaidd](../ja/README.md)
 [🇰🇷 Corea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pwyleg](../pl/README.md)
 [🇧🇷 Portiwgaleg](../pt/README.md)
 [🇷🇺 Rwsieg](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Twrceg](../tr/README.md)
 [🇵🇰 Wrdw](../ur/README.md)
 [🇻🇳 Fietnameg](../vi/README.md)
 [🇨🇳 Tsieinëeg](../zh/README.md)


 **[📚 ... Pob Iaith ...](../README.md)**
 ----

 ### A oes problem gyda'r cyfieithiad hwn o'r README?
 Mae'r cyfieithiad penodol hwn o'r [README] gwreiddiol ( https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 gall fod yn ddiffygiol -- *mae croeso mawr i gywiriadau!* Anfonwch [cais tynnu ar GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 neu os nad ydych yn gyfforddus yn gwneud hynny, [agorwch broblem]( https://github.com/cobbzilla/mobiletto-cli/issues)

 Pan fyddwch chi'n creu rhifyn GitHub newydd am gyfieithiad, gwnewch y canlynol:
 * cynnwys URL y dudalen (copïo / pastio o far cyfeiriad y porwr)
 * cynnwys yr union destun sy'n anghywir (copïo / pastio o'r porwr)
 * disgrifiwch beth sy'n bod -- ydy'r cyfieithiad yn anghywir? a yw'r fformatio wedi torri rhywsut?
 * cynigiwch yn garedig awgrym o well cyfieithiad, neu sut y dylid fformatio'r testun yn gywir
 * **Diolch!**

 ### Ffynhonnell
 * [mobiletto-cli ar GitHub]( https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli ar npm]( https://www.npmjs.com/package/mobiletto-cli)

 # Cynnwys
 * [Gosod a defnyddio](# Gosod-a-defnydd)
 * [pecyn npm](#npm-pecyn)
 * [O'r ffynhonnell](#O'r ffynhonnell)
 * [Cysylltiadau](#Cysylltiadau)
 * [Creu cysylltiad](#Creu-cysylltiad)
 * [Rhestr o gysylltiadau](#cysylltiadau rhestr)
 * [Cyfluniad dympio cysylltiad JSON](#Dump-connection-JSON-config)
 * [Dileu cysylltiad](#Remove-a-connection)
 * [Dileu pob cysylltiad](#Remove-all-connections)
 * [Gweithio gyda storfa](# Gweithio gyda storfa)
 * [Rhestrwch ffeiliau](# Ffeil-rhestr)
 * [Ysgrifennwch ffeil i stdout](#Write-a-file-to-stdout)
 * [Copi ffeiliau](#Copy-files)
 * [Dileu ffeiliau](# Dileu-ffeiliau)
 * [Gweld metadata](#View-metadata)
 * [cyfeirlyfrau drych](#Mirror-directories)

 ## Gosod a defnyddio
 Gallwch osod a rhedeg `mobiletto-cli` trwy npm neu'n uniongyrchol o'r ffynhonnell.

 ### pecyn npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### O'r ffynhonnell
 I redeg o'r ffynhonnell, bydd angen nodejs v16+ ac edafedd arnoch

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Cysylltiadau
 Ceir mynediad i'r holl storfa mobiletto trwy gysylltiad.

 Ar hyn o bryd mae Mobiletto yn cefnogi cysylltiadau â'r storfa system ffeiliau leol a bwcedi Amazon S3.

 Pennir cysylltiadau gan wrthrych JSON sy'n edrych fel hyn:

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

 I gael manylion llawn am yr holl opsiynau a'u gwerthoedd a'u hystyron, gweler y
 [dogfennau mobiletto]( https://www.npmjs.com/package/mobiletto#Basic-usage ).

 ### Creu cysylltiad
 I greu cysylltiad newydd, mae angen un o'r gwrthrychau JSON hyn.

 Gallwn greu un yn rhyngweithiol, neu gyflenwi un trwy ffeil neu JSON llythrennol:

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

 ### Rhestru cysylltiadau
 Rhestrwch y cysylltiadau sydd ar gael:

    mo connect -l
    mo connect --list

 ### Cyfluniad dadlwytho cysylltiad JSON
 Dangoswch y cyfluniad JSON llawn ar gyfer cysylltiad. **RHYBUDD** bydd hwn yn argraffu allweddi a chyfrinachau i stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Dileu cysylltiad
 Dileu cysylltiad sengl:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Dileu pob cysylltiad
 Dileu POB cysylltiad:

    mo connect -R
    mo connect --remove-all

 ## Gweithio gyda storfa
 Unwaith y byddwch wedi creu rhai cysylltiadau, defnyddiwch y `ls` , `cp` , `rm` , `meta` a `mirror`
 i weithio gyda nhw.

 Rhaid i bob llwybr ffeil a roddwch i orchymyn gael ei ragnodi ag enw'r cysylltiad
 mae'n cyfeirio at. Yn yr enghreifftiau isod, tybiwn fod dau gysylltiad o'r enw `conn1` a `conn2`

 ### Rhestrwch ffeiliau
 Allbwn gorchymyn rhestr yw cyfres o wrthrychau JSON, un fesul llinell, sy'n cynrychioli'r ffeiliau
 dod o hyd. Bydd gan y gwrthrychau hyn `name` a `type` , ac efallai meysydd eraill.

    mo ls conn1/some/path

 Rhestrwch ffeiliau yn gyson:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nodyn storio wedi'i amgryptio**: Nid yw rhestru ailadroddus wedi'i gefnogi eto ar gyfer cysylltiadau wedi'u hamgryptio.
 Dim ond un cyfeiriadur o ffeiliau y gallwch chi ei restru ar y tro.

 Rhestrwch y ffeiliau ar lafar (JSON wedi'i argraffu'n bert):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Rhestrwch ffeiliau yn ailadroddus ac ar lafar:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Gweld cymorth ar gyfer gorchymyn `ls` , yn disgrifio'r holl opsiynau:

    mo ls -h
    mo ls --help

 ### Ysgrifennwch ffeil i stdout
 Bydd y gorchymyn `cat` yn argraffu ffeil i stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Yng ngwir ysbryd UNIX *(ond yn sicr nid yw'r arfer!)* nid yw gorchymyn `cat` ** yn cymryd unrhyw opsiynau**
 heblaw `-h` / `--help` i ddangos gwybodaeth ddefnyddiol.

 ### Copïo ffeiliau
 Copïwch ffeil sengl o un ffôn symudol i un arall:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copïwch ffeil sengl o un mobileto i un arall, gan ei hailenwi yn y gyrchfan:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copïwch gyfeiriadur yn rheolaidd:

    mo cp -r conn1/some/directory conn2/some/dest/

 Gweld help ar gyfer gorchymyn `cp` , yn disgrifio'r holl opsiynau:

    mo cp -h
    mo cp --help

 Nodyn: Nid yw copïo ffeil yn gyflym iawn, oherwydd mae angen ffeil dros dro cyfryngwr ar hyn o bryd.

 ### Dileu ffeiliau
 Dileu ffeil sengl:

    mo rm conn1/some/file.txt

 Dileu ffeil sengl a pheidiwch â chwyno am unrhyw wallau:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Dileu cyfeiriadur:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Dileu cyfeiriadur a pheidiwch â chwyno am unrhyw wallau:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Gweld metadata
 Yn aml mae'n ddefnyddiol gwybod y metadata ar gyfer ffeil, heb lawrlwytho'r ffeil gyfan.

 Mae Mobiletto yn gallu adrodd am faint y ffeil a'r amser a addaswyd ddiwethaf, yn ogystal ag enw a math.

 I weld metadata:

    mo meta conn1/some/file.txt

 ### Cyfeiriaduron drych
 Mae adlewyrchu yn fwy nag achos arbennig o `cp` , mae'n orchymyn mobiletto ar wahân sy'n lapio'r
 gweithrediad copi; mae'n parhau hyd yn oed pan fydd gwallau'n digwydd, ac yn olrhain nifer o lwyddiannau a gwallau.

 I adlewyrchu popeth o conn1 i conn2:

    mo mirror conn1 conn2

 I adlewyrchu is-gyfeiriadur:

    mo mirror conn1/some/subdir conn2

 I adlewyrchu is-gyfeiriadur yn is-gyfeiriadur arall:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
