మొబైల్టో-క్లి
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) కోసం కమాండ్-లైన్ ఇంటర్‌ఫేస్ (CLI)
 నిల్వ.

 Mobiletto Amazon S3, Backblaze B2 మరియు స్థానిక ఫైల్‌సిస్టమ్‌లకు కనెక్షన్‌లకు మద్దతు ఇస్తుంది.

 # దీన్ని వేరే భాషలో చదవండి
 ఈ README.md పత్రం [hokeylization](https://github.com/cobbzilla/hokeylization) ద్వారా అనువాదం చేయబడింది
 **[Google Translate ద్వారా మద్దతిచ్చే ప్రతి భాష](https://cloud.google.com/translate/docs/languages)!**

 ఇది ఖచ్చితమైనది కాదని నేను ఖచ్చితంగా అనుకుంటున్నాను, కానీ ఇది ఏమీ కంటే మెరుగైనదని నేను ఆశిస్తున్నాను!

 [🇸🇦 అరబిక్](../ar/README.md)
 [🇧🇩 బెంగాలీ](../bn/README.md)
 [🇩🇪 జర్మన్](../de/README.md)
 [🇺🇸 ఇంగ్లీష్](../en/README.md)
 [🇪🇸 స్పానిష్](../es/README.md)
 [🇫🇷 ఫ్రెంచ్](../fr/README.md)
 [🇹🇩 హౌసా](../ha/README.md)
 [🇮🇳 హిందీ](../hi/README.md)
 [🇮🇩 ఇండోనేషియన్](../id/README.md)
 [🇮🇹 ఇటాలియన్](../it/README.md)
 [🇯🇵 జపనీస్](../ja/README.md)
 [🇰🇷 కొరియన్](../ko/README.md)
 [🇮🇳 మరాంతి](../mr/README.md)
 [🇵🇱 పోలిష్](../pl/README.md)
 [🇧🇷 పోర్చుగీస్](../pt/README.md)
 [🇷🇺 రష్యన్](../ru/README.md)
 [🇰🇪 స్వాహిలి](../sw/README.md)
 [🇵🇭 తగలాగ్](../tl/README.md)
 [🇹🇷 టర్కిష్](../tr/README.md)
 [🇵🇰 ఉర్దూ](../ur/README.md)
 [🇻🇳 వియత్నామీస్](../vi/README.md)
 [🇨🇳 చైనీస్](../zh/README.md)


 **[📚 ... అన్ని భాషలు ...](../README.md)**
 ----

 ### README యొక్క ఈ అనువాదంలో సమస్య ఉందా?
 అసలు [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) యొక్క ఈ ప్రత్యేక అనువాదం
 లోపభూయిష్టంగా ఉండవచ్చు -- *దిద్దుబాట్లు చాలా స్వాగతం!* దయచేసి [GitHubలో పుల్ అభ్యర్థన](https://github.com/cobbzilla/mobiletto-cli/pulls),
 లేదా మీరు అలా చేయడం సౌకర్యంగా లేకుంటే, [సమస్యను తెరవండి](https://github.com/cobbzilla/mobiletto-cli/issues)

 మీరు అనువాదం గురించి కొత్త GitHub సమస్యను సృష్టించినప్పుడు, దయచేసి ఇలా చేయండి:
 * పేజీ URLని చేర్చండి (బ్రౌజర్ అడ్రస్ బార్ నుండి కాపీ/పేస్ట్ చేయండి)
 * తప్పుగా ఉన్న ఖచ్చితమైన వచనాన్ని చేర్చండి (బ్రౌజర్ నుండి కాపీ/పేస్ట్ చేయండి)
 * దయచేసి తప్పు ఏమిటో వివరించండి -- అనువాదం తప్పుగా ఉందా? ఫార్మాటింగ్ ఏదో విధంగా విచ్ఛిన్నమైందా?
 * దయచేసి మెరుగైన అనువాదం లేదా వచనాన్ని ఎలా సరిగ్గా ఫార్మాట్ చేయాలి అనే సూచనను అందించండి
 * **ధన్యవాదాలు!**

 # కంటెంట్‌లు
 * [మూలం](#మూలం)
 * [మద్దతు మరియు నిధులు](#మద్దతు మరియు నిధులు)
 * [ఇన్‌స్టాలేషన్ మరియు వినియోగం](#ఇన్‌స్టాలేషన్-అండ్-యూసేజ్)
 * [npm ప్యాకేజీ](#npm-ప్యాకేజీ)
 * [మూలం నుండి](#మూలం నుండి)
 * [కనెక్షన్లు](#కనెక్షన్లు)
 * [కనెక్షన్‌ని సృష్టించండి](#Create-a-connection)
 * [జాబితా కనెక్షన్లు](#జాబితా-కనెక్షన్లు)
 * [డంప్ కనెక్షన్ JSON కాన్ఫిగరేషన్](#డంప్-కనెక్షన్-JSON-config)
 * [కనెక్షన్‌ని తీసివేయండి](#Remove-a-connection)
 * [అన్ని కనెక్షన్‌లను తీసివేయండి](#అన్ని కనెక్షన్‌లను తీసివేయండి)
 * [నిల్వతో పని చేయడం](#నిల్వతో పని చేయడం)
 * [జాబితా ఫైల్‌లు](#జాబితా-ఫైళ్లు)
 * [stdoutకి ఫైల్‌ను వ్రాయండి](#Write-a-file-to-stdout)
 * [ఫైళ్లను కాపీ చేయండి](#కాపీ-ఫైల్స్)
 * [ఫైళ్లను తొలగించండి](#Delete-files)
 * [మెటాడేటాను వీక్షించండి](#వ్యూ-మెటాడేటా)
 * [మిర్రర్ డైరెక్టరీలు](#మిర్రర్-డైరెక్టరీలు)

 ### మూలం
 * [మొబిలెట్టో-క్లి ఆన్ గిట్‌హబ్](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## మద్దతు మరియు నిధులు
 నేను ప్రొఫెషనల్ ఓపెన్ సోర్స్ సాఫ్ట్‌వేర్ డెవలపర్‌గా ఉండటానికి ప్రయత్నిస్తున్నాను. నేను పని చేస్తున్నాను
 చాలా సంవత్సరాలుగా సాఫ్ట్‌వేర్ పరిశ్రమలో, నేను విజయవంతమైన కంపెనీలను ప్రారంభించాను మరియు వాటిని పబ్లిక్ కంపెనీలకు విక్రయించాను.
 ఇటీవల నేను నా ఉద్యోగాన్ని కోల్పోయాను మరియు నాకు వేరే పని లేదు

 కాబట్టి నేను సహాయకరమైన సాఫ్ట్‌వేర్‌ను వ్రాయడానికి ప్రయత్నిస్తాను మరియు అది పనిచేస్తుందో లేదో చూస్తాను

 మీరు ఈ సాఫ్ట్‌వేర్‌ని ఉపయోగించడం ఆనందించినట్లయితే, దానికి కూడా నేను హృదయపూర్వకంగా కృతజ్ఞుడను
 అతిచిన్న [పాట్రియన్ ద్వారా నెలవారీ సహకారం](https://www.patreon.com/cobbzilla)

 *ధన్యవాదాలు!*

 ## సంస్థాపన మరియు వినియోగం
 మీరు npm ద్వారా లేదా నేరుగా సోర్స్ నుండి `mobiletto-cli` ఇన్‌స్టాల్ చేసి, అమలు చేయవచ్చు.

 ### npm ప్యాకేజీ
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### మూలం నుండి
 మూలం నుండి అమలు చేయడానికి, మీకు nodejs v16+ మరియు నూలు అవసరం

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## కనెక్షన్లు
 మొబైల్‌టో స్టోరేజ్ మొత్తం కనెక్షన్ ద్వారా యాక్సెస్ చేయబడుతుంది.

 Mobiletto ప్రస్తుతం స్థానిక ఫైల్‌సిస్టమ్ నిల్వ మరియు Amazon S3 బకెట్‌లకు కనెక్షన్‌లకు మద్దతు ఇస్తుంది.

 కనెక్షన్లు JSON ఆబ్జెక్ట్ ద్వారా పేర్కొనబడ్డాయి, అది ఇలా కనిపిస్తుంది:

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

 అన్ని ఎంపికలు మరియు వాటి విలువలు మరియు అర్థాలపై పూర్తి వివరాల కోసం, చూడండి
 [మొబిలెట్టో డాక్స్](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### కనెక్షన్‌ని సృష్టించండి
 కొత్త కనెక్షన్‌ని సృష్టించడానికి, మాకు ఈ JSON ఆబ్జెక్ట్‌లలో ఒకటి అవసరం.

 మేము ఇంటరాక్టివ్‌గా ఒకదానిని సృష్టించవచ్చు లేదా ఫైల్ లేదా JSON లిటరల్ ద్వారా సరఫరా చేయవచ్చు:

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

 ### జాబితా కనెక్షన్లు
 అందుబాటులో ఉన్న కనెక్షన్‌లను జాబితా చేయండి:

    mo connect -l
    mo connect --list

 ### డంప్ కనెక్షన్ JSON కాన్ఫిగరేషన్
 కనెక్షన్ కోసం పూర్తి JSON కాన్ఫిగరేషన్‌ను చూపండి. **హెచ్చరిక** ఇది stdoutకి కీలు మరియు రహస్యాలను ప్రింట్ చేస్తుంది.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### కనెక్షన్‌ని తీసివేయండి
 ఒకే కనెక్షన్‌ని తీసివేయండి:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### అన్ని కనెక్షన్లను తీసివేయండి
 అన్ని కనెక్షన్లను తీసివేయండి:

    mo connect -R
    mo connect --remove-all

 ## నిల్వతో పని చేస్తోంది
 మీరు కొన్ని కనెక్షన్‌లను సృష్టించిన తర్వాత, ` `ls` , `cp` , `rm` , `meta` మరియు `mirror` కార్యకలాపాలను ఉపయోగించండి
 వారితో కలిసి పనిచేయడానికి.

 మీరు కమాండ్‌కి అందించే ప్రతి ఫైల్ పాత్ తప్పనిసరిగా కనెక్షన్ పేరుతో ముందుగా ఉండాలి
 అది సూచిస్తుంది. దిగువ ఉదాహరణలలో, `conn1` మరియు `conn2` అనే రెండు కనెక్షన్‌లు ఉన్నాయని మేము ఊహిస్తాము

 ### జాబితా ఫైల్స్
 జాబితా కమాండ్ యొక్క అవుట్‌పుట్ అనేది JSON ఆబ్జెక్ట్‌ల శ్రేణి, ఒక్కో పంక్తికి ఒకటి, ఫైల్‌లను సూచిస్తుంది
 కనుగొన్నారు. ఈ వస్తువులు `name` మరియు `type` రకం` మరియు బహుశా ఇతర ఫీల్డ్‌లను కలిగి ఉంటాయి.

    mo ls conn1/some/path

 ఫైల్‌లను పునరావృతంగా జాబితా చేయండి:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **ఎన్‌క్రిప్టెడ్ స్టోరేజ్ నోట్**: ఎన్‌క్రిప్టెడ్ కనెక్షన్‌ల కోసం రికర్సివ్ లిస్టింగ్‌కి ఇంకా మద్దతు లేదు.
 మీరు ఒకేసారి ఒక ఫైల్ డైరెక్టరీని మాత్రమే జాబితా చేయగలరు.

 ఫైళ్లను పదజాలంగా జాబితా చేయండి (అందంగా-ప్రింట్ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ఫైల్‌లను పునరావృతంగా మరియు మాటలతో జాబితా చేయండి:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` కమాండ్ కోసం సహాయాన్ని వీక్షించండి, అన్ని ఎంపికలను వివరిస్తుంది:

    mo ls -h
    mo ls --help

 ### stdoutకి ఫైల్‌ను వ్రాయండి
 `cat` ఆదేశం stdoutకి ఫైల్‌ను ప్రింట్ చేస్తుంది:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 నిజమైన UNIX స్ఫూర్తితో *(ఇంకా ఖచ్చితంగా అభ్యాసం కాదు!)* mobiletto యొక్క `cat` ఆదేశం **ఏ ఎంపికలను తీసుకోదు**
 సహాయక సమాచారాన్ని ప్రదర్శించడానికి `-h` / `--help` కాకుండా.

 ### ఫైల్‌లను కాపీ చేయండి
 ఒకే ఫైల్‌ని ఒక మొబైల్‌ నుండి మరొక మొబైల్‌కి కాపీ చేయండి:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ఒకే ఫైల్‌ని ఒక మొబైల్‌ నుండి మరొక మొబైల్‌కి కాపీ చేసి, గమ్యస్థానంలో పేరు మార్చండి:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 డైరెక్టరీని పునరావృతంగా కాపీ చేయండి:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` కమాండ్ కోసం సహాయాన్ని వీక్షించండి, అన్ని ఎంపికలను వివరిస్తుంది:

    mo cp -h
    mo cp --help

 గమనిక: ఫైల్ కాపీ చేయడం చాలా వేగంగా లేదు, ఎందుకంటే దీనికి ప్రస్తుతం మధ్యవర్తి టెంప్ ఫైల్ అవసరం.

 ### ఫైల్‌లను తొలగించండి
 ఒకే ఫైల్‌ను తొలగించండి:

    mo rm conn1/some/file.txt

 ఒకే ఫైల్‌ను తొలగించండి మరియు ఎలాంటి లోపాల గురించి ఫిర్యాదు చేయవద్దు:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 డైరెక్టరీని తొలగించండి:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 డైరెక్టరీని తొలగించండి మరియు ఏదైనా లోపాల గురించి ఫిర్యాదు చేయవద్దు:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### మెటాడేటాను వీక్షించండి
 మొత్తం ఫైల్‌ను డౌన్‌లోడ్ చేయకుండా, ఫైల్ కోసం మెటాడేటాను తెలుసుకోవడం తరచుగా ఉపయోగపడుతుంది.

 Mobiletto పేరు మరియు రకానికి అదనంగా ఫైల్ పరిమాణాన్ని మరియు చివరిగా సవరించిన సమయాన్ని నివేదించగలదు.

 మెటాడేటాను వీక్షించడానికి:

    mo meta conn1/some/file.txt

 ### మిర్రర్ డైరెక్టరీలు
 మిర్రరింగ్ అనేది `cp` యొక్క ప్రత్యేక సందర్భం కంటే ఎక్కువ, ఇది ఒక ప్రత్యేక mobiletto ఆదేశం
 కాపీ ఆపరేషన్; లోపాలు సంభవించినప్పుడు కూడా ఇది కొనసాగుతుంది మరియు విజయాలు మరియు లోపాల గణనను ట్రాక్ చేస్తుంది.

 conn1 నుండి conn2కి అన్నింటినీ ప్రతిబింబించడానికి:

    mo mirror conn1 conn2

 ఉప డైరెక్టరీని ప్రతిబింబించడానికి:

    mo mirror conn1/some/subdir conn2

 సబ్ డైరెక్టరీని మరొక సబ్ డైరెక్టరీకి ప్రతిబింబించడానికి:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
