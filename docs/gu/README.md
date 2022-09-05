mobiletto-cli
 ==============
 [mobiletto](https://www.npmjs.com/package/mobiletto) માટે કમાન્ડ-લાઇન ઇન્ટરફેસ (CLI)
 સંગ્રહ

 Mobiletto એમેઝોન S3, બેકબ્લેઝ B2 અને સ્થાનિક ફાઇલસિસ્ટમના કનેક્શન્સને સપોર્ટ કરે છે.

 # આને બીજી ભાષામાં વાંચો
 આ README.md દસ્તાવેજનો અનુવાદ [hokeylization](https://github.com/cobbzilla/hokeylization) દ્વારા કરવામાં આવ્યો છે,
 **[Google અનુવાદ દ્વારા સમર્થિત દરેક ભાષા](https://cloud.google.com/translate/docs/languages)!**

 મને ખાતરી છે કે તે સંપૂર્ણ નથી, પરંતુ હું આશા રાખું છું કે તે કંઈ કરતાં વધુ સારું છે!

 [🇸🇦 અરબી](../ar/README.md)
 [🇧🇩 બંગાળી](../bn/README.md)
 [🇩🇪 જર્મન](../de/README.md)
 [🇺🇸 અંગ્રેજી](../en/README.md)
 [🇪🇸 સ્પેનિશ](../es/README.md)
 [🇫🇷 ફ્રેન્ચ](../fr/README.md)
 [🇹🇩 હૌસા](../ha/README.md)
 [🇮🇳 હિન્દી](../hi/README.md)
 [🇮🇩 ઇન્ડોનેશિયન](../id/README.md)
 [🇮🇹 ઇટાલિયન](../it/README.md)
 [🇯🇵 જાપાનીઝ](../ja/README.md)
 [🇰🇷 કોરિયન](../ko/README.md)
 [🇮🇳 મરાંઠી](../mr/README.md)
 [🇵🇱 પોલિશ](../pl/README.md)
 [🇧🇷 પોર્ટુગીઝ](../pt/README.md)
 [🇷🇺 રશિયન](../ru/README.md)
 [🇰🇪 સ્વાહિલી](../sw/README.md)
 [🇵🇭 ટાગાલોગ](../tl/README.md)
 [🇹🇷 ટર્કિશ](../tr/README.md)
 [🇵🇰 ઉર્દુ](../ur/README.md)
 [🇻🇳 વિયેતનામીસ](../vi/README.md)
 [🇨🇳 ચાઇનીઝ](../zh/README.md)


 **[📚 ... બધી ભાષાઓ ...](../README.md)**
 ----

 ### શું README ના આ અનુવાદમાં કોઈ સમસ્યા છે?
 મૂળ [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) નો આ વિશિષ્ટ અનુવાદ
 ખામી હોઈ શકે છે -- *સુધારાઓ ખૂબ આવકાર્ય છે!* કૃપા કરીને [GitHub પર પુલ વિનંતી](https://github.com/cobbzilla/mobiletto-cli/pulls) મોકલો,
 અથવા જો તમને તે કરવામાં આરામદાયક ન હોય, તો [સમસ્યા ખોલો](https://github.com/cobbzilla/mobiletto-cli/issues)

 જ્યારે તમે અનુવાદ વિશે નવો GitHub મુદ્દો બનાવો છો, ત્યારે કૃપા કરીને આ કરો:
 * પૃષ્ઠ URL શામેલ કરો (બ્રાઉઝર સરનામાં બારમાંથી કૉપિ/પેસ્ટ કરો)
 * ખોટો લખાણ શામેલ કરો (બ્રાઉઝરમાંથી કૉપિ/પેસ્ટ કરો)
 * કૃપયા શું ખોટું છે તેનું વર્ણન કરો -- શું અનુવાદ ખોટો છે? શું ફોર્મેટિંગ કોઈક રીતે તૂટી ગયું છે?
 * કૃપા કરીને વધુ સારા અનુવાદનું સૂચન આપો, અથવા ટેક્સ્ટ કેવી રીતે યોગ્ય રીતે ફોર્મેટ થવો જોઈએ
 * **આભાર!**

 # સામગ્રી
 * [સ્રોત](#સ્રોત)
 * [સપોર્ટ અને ફંડિંગ](#સપોર્ટ-એન્ડ-ફંડિંગ)
 * [ઇન્સ્ટોલેશન અને ઉપયોગ](#ઇન્સ્ટોલેશન-અને-ઉપયોગ)
 * [npm પેકેજ](#npm-પેકેજ)
 * [સ્રોતમાંથી](#સ્ત્રોતમાંથી)
 * [જોડાણો](#જોડાણો)
 * [એક જોડાણ બનાવો](#કનેક્શન બનાવો)
 * [સૂચિ જોડાણો](#સૂચિ-જોડાણો)
 * [ડમ્પ કનેક્શન JSON રૂપરેખા](#Dump-connection-JSON-config)
 * [કનેક્શન દૂર કરો](#કનેક્શન દૂર કરો)
 * [બધા જોડાણો દૂર કરો](#બધા જોડાણો દૂર કરો)
 * [સ્ટોરેજ સાથે કામ કરવું](#સ્ટોરેજ સાથે કામ કરવું)
 * [ફાઇલોની સૂચિ](#લિસ્ટ-ફાઇલો)
 * [stdout પર ફાઇલ લખો](#Write-a-file-to-stdout)
 * [કોપી ફાઇલો](#કોપી-ફાઇલો)
 * [ફાઈલો કાઢી નાખો](#ડિલીટ-ફાઈલો)
 * [મેટાડેટા જુઓ](#વ્યૂ-મેટાડેટા)
 * [મિરર ડિરેક્ટરીઓ](#મિરર-ડિરેક્ટરીઝ)

 ### સ્ત્રોત
 * [ગીથહબ પર મોબાઈલેટો-ક્લી](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## સમર્થન અને ભંડોળ
 હું પ્રોફેશનલ ઓપન સોર્સ સોફ્ટવેર ડેવલપર બનવાનો પ્રયાસ કરી રહ્યો છું. માં કામ કરી રહ્યો છું
 ઘણા વર્ષોથી સોફ્ટવેર ઉદ્યોગમાં, મેં સફળ કંપનીઓ શરૂ કરી છે અને તેમને જાહેર કંપનીઓને વેચી છે.
 તાજેતરમાં મેં મારી નોકરી ગુમાવી દીધી છે, અને મારી પાસે ખરેખર બીજું કોઈ કામ નથી

 તેથી હું મદદરૂપ સોફ્ટવેર લખવાનો પ્રયાસ કરીશ અને જોઉં છું કે તે કામ કરે છે કે નહીં

 જો તમે આ સૉફ્ટવેરનો ઉપયોગ કરીને આનંદ માણો છો, તો હું તેના માટે પણ નિષ્ઠાપૂર્વક આભારી રહીશ
 સૌથી નાનું [પેટ્રિઓન દ્વારા માસિક યોગદાન](https://www.patreon.com/cobbzilla)

 *આભાર!*

 ## ઇન્સ્ટોલેશન અને ઉપયોગ
 તમે npm દ્વારા અથવા સીધા `mobiletto-cli` ઇન્સ્ટોલ અને ચલાવી શકો છો.

 ### npm પેકેજ
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### સ્ત્રોતમાંથી
 સ્ત્રોતમાંથી ચલાવવા માટે, તમારે nodejs v16+ અને યાર્નની જરૂર પડશે

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## જોડાણો
 તમામ મોબાઈલ સ્ટોરેજને કનેક્શન દ્વારા એક્સેસ કરવામાં આવે છે.

 Mobiletto હાલમાં સ્થાનિક ફાઇલસિસ્ટમ સ્ટોરેજ અને એમેઝોન S3 બકેટના કનેક્શન્સને સપોર્ટ કરે છે.

 જોડાણો JSON ઑબ્જેક્ટ દ્વારા નિર્દિષ્ટ કરવામાં આવે છે જે આના જેવો દેખાય છે:

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

 બધા વિકલ્પો અને તેમના મૂલ્યો અને અર્થો પર સંપૂર્ણ વિગતો માટે, જુઓ
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### કનેક્શન બનાવો
 નવું કનેક્શન બનાવવા માટે, અમને આમાંથી એક JSON ઑબ્જેક્ટની જરૂર છે.

 અમે એક અરસપરસ બનાવી શકીએ છીએ, અથવા ફાઇલ અથવા JSON શાબ્દિક દ્વારા સપ્લાય કરી શકીએ છીએ:

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

 ### જોડાણોની સૂચિ બનાવો
 ઉપલબ્ધ કનેક્શન્સની સૂચિ બનાવો:

    mo connect -l
    mo connect --list

 ### ડમ્પ કનેક્શન JSON રૂપરેખા
 કનેક્શન માટે સંપૂર્ણ JSON રૂપરેખા બતાવો. **ચેતવણી** આ કી અને રહસ્યો stdout પર છાપશે.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### કનેક્શન દૂર કરો
 એક કનેક્શન દૂર કરો:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### બધા જોડાણો દૂર કરો
 બધા જોડાણો દૂર કરો:

    mo connect -R
    mo connect --remove-all

 ## સ્ટોરેજ સાથે કામ કરવું
 એકવાર તમે કેટલાક જોડાણો બનાવી લો તે પછી, ` `ls` , ` `cp` , `rm` , `meta` અને `mirror` ઓપરેશન્સનો ઉપયોગ કરો.
 તેમની સાથે કામ કરવા માટે.

 દરેક ફાઇલ પાથ કે જે તમે આદેશને પ્રદાન કરો છો તે જોડાણના નામ સાથે ઉપસર્ગ હોવું આવશ્યક છે
 તે સંદર્ભ આપે છે. નીચેના ઉદાહરણોમાં, અમે ધારીએ છીએ કે `conn1` અને `conn2` નામના બે જોડાણો અસ્તિત્વમાં છે

 ### ફાઇલોની સૂચિ બનાવો
 લિસ્ટ કમાન્ડનું આઉટપુટ JSON ઑબ્જેક્ટ્સની શ્રેણી છે, લાઇન દીઠ એક, ફાઇલોનું પ્રતિનિધિત્વ કરે છે
 મળી. આ ઑબ્જેક્ટ્સમાં `name` અને `type` ટાઇપ` અને સંભવતઃ અન્ય ફીલ્ડ્સ હશે.

    mo ls conn1/some/path

 પુનરાવર્તિત રીતે ફાઇલોની સૂચિ બનાવો:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **એનક્રિપ્ટેડ સ્ટોરેજ નોંધ**: એન્ક્રિપ્ટેડ કનેક્શન્સ માટે પુનરાવર્તિત સૂચિ હજી સુધી સમર્થિત નથી.
 તમે એક સમયે ફાઇલોની માત્ર એક ડિરેક્ટરી સૂચિબદ્ધ કરી શકો છો.

 ફાઇલોને વર્બોઝલી સૂચિબદ્ધ કરો (પ્રીટી-પ્રિન્ટ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 પુનરાવર્તિત અને વર્બોઝલી ફાઇલોની સૂચિ બનાવો:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` આદેશ માટે મદદ જુઓ, બધા વિકલ્પોનું વર્ણન કરે છે:

    mo ls -h
    mo ls --help

 ### stdout પર ફાઇલ લખો
 `cat` આદેશ stdout પર ફાઇલને છાપશે:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 સાચી યુનિક્સ ભાવનામાં *(હજી સુધી ચોક્કસપણે પ્રેક્ટિસ નથી!)* મોબાઇલટોનો `cat` આદેશ **કોઈ વિકલ્પ લેતો નથી**
 મદદરૂપ માહિતી પ્રદર્શિત કરવા માટે `-h` / `--help` .

 ### ફાઇલોની નકલ કરો
 એક જ ફાઇલને એક મોબાઇલમાંથી બીજા મોબાઇલ પર કૉપિ કરો:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 એક જ ફાઇલને એક મોબાઇલમાંથી બીજા મોબાઇલ પર કૉપિ કરો, ગંતવ્ય સ્થાન પર તેનું નામ બદલીને:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 નિર્દેશિકાની પુનરાવર્તિત નકલ કરો:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` આદેશ માટે મદદ જુઓ, બધા વિકલ્પોનું વર્ણન કરે છે:

    mo cp -h
    mo cp --help

 નોંધ: ફાઇલની નકલ કરવી ખૂબ ઝડપી નથી, કારણ કે તેને હાલમાં મધ્યસ્થી ટેમ્પ ફાઇલની જરૂર છે.

 ### ફાઇલો કાઢી નાખો
 એક ફાઇલ કાઢી નાખો:

    mo rm conn1/some/file.txt

 એક ફાઇલ કાઢી નાખો અને કોઈપણ ભૂલો વિશે ફરિયાદ કરશો નહીં:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ડિરેક્ટરી કાઢી નાખો:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ડિરેક્ટરી કાઢી નાખો અને કોઈપણ ભૂલો વિશે ફરિયાદ કરશો નહીં:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### મેટાડેટા જુઓ
 આખી ફાઇલ ડાઉનલોડ કર્યા વિના, ફાઇલ માટેના મેટાડેટાને જાણવું ઘણીવાર ઉપયોગી છે.

 Mobiletto નામ અને પ્રકાર ઉપરાંત ફાઈલના કદ અને છેલ્લા ફેરફારના સમયની જાણ કરવામાં સક્ષમ છે.

 મેટાડેટા જોવા માટે:

    mo meta conn1/some/file.txt

 ### મિરર ડિરેક્ટરીઓ
 મિરરિંગ એ `cp` ના વિશેષ કેસ કરતાં વધુ છે, તે એક અલગ મોબાઇલટો કમાન્ડ છે જે
 નકલ કામગીરી; જ્યારે ભૂલો થાય ત્યારે પણ તે ચાલુ રહે છે, અને સફળતાઓ અને ભૂલોની ગણતરીને ટ્રૅક કરે છે.

 conn1 થી conn2 માં બધું પ્રતિબિંબિત કરવા માટે:

    mo mirror conn1 conn2

 સબડિરેક્ટરીને પ્રતિબિંબિત કરવા માટે:

    mo mirror conn1/some/subdir conn2

 સબડિરેક્ટરીને બીજી સબડિરેક્ટરીમાં મિરર કરવા માટે:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
