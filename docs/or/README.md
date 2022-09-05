mobiletto-cli
 =============
 [Mobiletto] ପାଇଁ ଏକ ନିର୍ଦ୍ଦେଶନାମା ଇଣ୍ଟରଫେସ୍ (CLI) (https://www.npmjs.com/package/mobiletto)
 ସଂରକ୍ଷଣ

 ମୋବାଇଲଟୋ ଆମାଜନ S3, ବ୍ୟାକବ୍ଲେଜ୍ B2 ଏବଂ ସ୍ଥାନୀୟ ଫାଇଲତନ୍ତ୍ର ସହିତ ସଂଯୋଗକୁ ସମର୍ଥନ କରେ |

 # ଏହାକୁ ଅନ୍ୟ ଭାଷାରେ ପ Read ନ୍ତୁ |
 ଏହି README.md ଡକ୍ୟୁମେଣ୍ଟକୁ [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) ମାଧ୍ୟମରେ ଅନୁବାଦ କରାଯାଇଛି |
 ** [ଗୁଗୁଲ୍ ଅନୁବାଦ ଦ୍ୱାରା ସମର୍ଥିତ ପ୍ରତ୍ୟେକ ଭାଷା](https://cloud.google.com/translate/docs/languages)! **

 ମୁଁ ନିଶ୍ଚିତ ଯେ ଏହା ସିଦ୍ଧ ନୁହେଁ, କିନ୍ତୁ ମୁଁ ଆଶା କରେ ଏହା କିଛି ନୁହେଁ!

 [🇸🇦 ଆରବୀ](ଡକସ୍ / ଆର / README.md)
 [🇧🇩 ବଙ୍ଗାଳୀ](ଡକସ୍ / bn / README.md)
 [🇩🇪 ଜର୍ମାନ](ଡକସ୍ / ଡି / README.md)
 [🇺🇸 ଇଂରାଜୀ](ଡକସ୍ / en / README.md)
 [🇪🇸 ସ୍ପାନିସ୍](ଡକସ୍ / ଏସ୍ / README.md)
 [🇫🇷 ଫରାସୀ](ଡକସ୍ / fr / README.md)
 [🇹🇩 ହାଉସା](ଡକସ୍ / ହା / README.md)
 [🇮🇳 ହିନ୍ଦୀ](ଡକସ୍ / ହାଏ / README.md)
 [🇮🇩 ଇଣ୍ଡୋନେସିଆ](ଡକସ୍ / id / README.md)
 [🇮🇹 ଇଟାଲୀୟ](ଡକସ୍ / ଏହା / README.md)
 [🇯🇵 ଜାପାନିଜ୍](ଡକସ୍ / ja / README.md)
 [🇰🇷 କୋରିଆନ୍](ଡକସ୍ / କୋ / README.md)
 [🇮🇳 ମାରନ୍ତୀ](ଡକସ୍ / mr / README.md)
 [🇵🇱 ପୋଲାଣ୍ଡ](ଡକସ୍ / pl / README.md)
 [🇧🇷 ପର୍ତ୍ତୁଗୀଜ୍](ଡକସ୍ / pt / README.md)
 [🇷🇺 Russian ଷିୟ](ଡକସ୍ / ru / README.md)
 [Wa ସ୍ Swahili ାହିଲୀ](ଡକସ୍ / sw / README.md)
 [Ag ଟ୍ୟାଗଲଗ୍](ଡକସ୍ / tl / README.md)
 [🇹🇷 ତୁର୍କୀ](ଡକସ୍ / ଟ୍ର / README.md)
 [🇵🇰 ଉର୍ଦ୍ଦୁ](ଡକସ୍ / ur / README.md)
 [🇻🇳 ଭିଏତନାମ](ଡକସ୍ / vi / README.md)
 [🇨🇳 ଚାଇନିଜ୍](ଡକସ୍ / zh / README.md)


 ** [📚 ... ସମସ୍ତ ଭାଷା ...](ଡକସ୍ / README.md) **
 ----

 ### README ର ଏହି ଅନୁବାଦରେ କିଛି ଅସୁବିଧା ଅଛି କି?
 ମୂଳ [README] ର ଏହି ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁବାଦ (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 ତ୍ରୁଟିପୂର୍ଣ୍ଣ ହୋଇପାରେ - * ସଂଶୋଧନଗୁଡିକ ବହୁତ ସ୍ୱାଗତଯୋଗ୍ୟ! * ଦୟାକରି [GitHub ରେ ଏକ ଟାଣ ଅନୁରୋଧ] ପଠାନ୍ତୁ (https://github.com/cobbzilla/mobiletto-cli/pulls),
 କିମ୍ବା ଯଦି ଆପଣ ତାହା କରିବାକୁ ଆରାମଦାୟକ ନୁହଁନ୍ତି, [ଏକ ସମସ୍ୟା ଖୋଲନ୍ତୁ](https://github.com/cobbzilla/mobiletto-cli/issues)

 ଯେତେବେଳେ ଆପଣ ଏକ ଅନୁବାଦ ବିଷୟରେ ଏକ ନୂତନ GitHub ଇସୁ ସୃଷ୍ଟି କରନ୍ତି, ଦୟାକରି କରନ୍ତୁ:
 * ପୃଷ୍ଠା URL ଅନ୍ତର୍ଭୂକ୍ତ କରନ୍ତୁ (ବ୍ରାଉଜର୍ ଠିକଣା ଦଣ୍ଡିକାରୁ କପି / ଲେପନ କରନ୍ତୁ)
 * ଭୁଲ ସଠିକ୍ ପାଠ୍ୟ ଅନ୍ତର୍ଭୂକ୍ତ କରନ୍ତୁ (ବ୍ରାଉଜରରୁ କପି / ଲେପନ କରନ୍ତୁ)
 * ଦୟାକରି କ’ଣ ଭୁଲ୍ ବର୍ଣ୍ଣନା କର - ଅନୁବାଦ ଭୁଲ୍ କି? ଫର୍ମାଟିଂ କ h ଣସି ପ୍ରକାରେ ଭାଙ୍ଗିଗଲା କି?
 * ଦୟାକରି ଏକ ଉତ୍ତମ ଅନୁବାଦର ଏକ ପ୍ରସ୍ତାବ ପ୍ରଦାନ କରନ୍ତୁ, କିମ୍ବା ପାଠ କିପରି ସଠିକ୍ ଭାବରେ ଫର୍ମାଟ୍ ହେବା ଉଚିତ |
 * **ଧନ୍ୟବାଦ!**

 ### ଉତ୍ସ |
 * [GitHub ରେ mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm ରେ mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 # ବିଷୟବସ୍ତୁ
 * [ସ୍ଥାପନ ଏବଂ ବ୍ୟବହାର](# ସ୍ଥାପନ-ଏବଂ-ବ୍ୟବହାର)
 * [npm ପ୍ୟାକେଜ୍](# npm- ପ୍ୟାକେଜ୍)
 * [ଉତ୍ସରୁ](# ଉତ୍ସରୁ)
 * [ସଂଯୋଗ](# ସଂଯୋଗ)
 * [ଏକ ସଂଯୋଗ ସୃଷ୍ଟି କରନ୍ତୁ](# ସୃଷ୍ଟି-ଏକ-ସଂଯୋଗ)
 * [ତାଲିକା ସଂଯୋଗଗୁଡ଼ିକ](# ତାଲିକା-ସଂଯୋଗ)
 * [ଡମ୍ପିଂ ସଂଯୋଗ JSON ବିନ୍ୟାସ](# ଡମ୍ପ-ସଂଯୋଗ- JSON- ବିନ୍ୟାସ)
 * [ଏକ ସଂଯୋଗ ଅପସାରଣ କରନ୍ତୁ](# ଅପସାରଣ-ଏକ-ସଂଯୋଗ)
 * [ସମସ୍ତ ସଂଯୋଗ ଅପସାରଣ କରନ୍ତୁ](# ଅପସାରଣ-ସମସ୍ତ-ସଂଯୋଗ)
 * [ଷ୍ଟୋରେଜ୍ ସହିତ କାମ କରିବା](# ୱାର୍କିଂ-ଷ୍ଟୋରେଜ୍)
 * [ତାଲିକା ତାଲିକା](# ତାଲିକା-ଫାଇଲଗୁଡିକ)
 * [Stdout କୁ ଏକ ଫାଇଲ୍ ଲେଖନ୍ତୁ](# ଲେଖନ୍ତୁ- a-file-to-stdout)
 * [ଫାଇଲଗୁଡିକ କପି କରନ୍ତୁ](# କପି-ଫାଇଲଗୁଡିକ)
 * [ଫାଇଲ୍ ଡିଲିଟ୍ କରନ୍ତୁ](# ଫାଇଲ୍ ଡିଲିଟ୍ କରନ୍ତୁ)
 * [ମେଟାଡାଟା ଦେଖନ୍ତୁ](# ଭ୍ୟୁ-ମେଟାଡାଟା)
 * [ଦର୍ପଣ ଡିରେକ୍ଟୋରୀଗୁଡିକ](# ଦର୍ପଣ-ଡିରେକ୍ଟୋରୀଗୁଡିକ)

 ## ସ୍ଥାପନ ଏବଂ ବ୍ୟବହାର
 ଆପଣ npm ମାଧ୍ୟମରେ କିମ୍ବା ସିଧାସଳଖ ଉତ୍ସରୁ `mobiletto-cli` ସଂସ୍ଥାପନ ଏବଂ ଚଲାଇପାରିବେ |

 ### npm ପ୍ୟାକେଜ୍ |
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ଉତ୍ସରୁ
 ଉତ୍ସରୁ ଚଲାଇବାକୁ, ଆପଣଙ୍କୁ nodejs v16 + ଏବଂ ସୂତା ଆବଶ୍ୟକ |

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## ସଂଯୋଗଗୁଡ଼ିକ
 ସମସ୍ତ ମୋବାଇଲ୍ ଷ୍ଟୋରେଜ୍ ଏକ ସଂଯୋଗ ମାଧ୍ୟମରେ ଆକ୍ସେସ୍ ହୋଇଛି |

 ମୋବାଇଲଟୋ ବର୍ତ୍ତମାନ ସ୍ଥାନୀୟ ଫାଇଲ୍ ସିଷ୍ଟମ୍ ଷ୍ଟୋରେଜ୍ ଏବଂ ଆମାଜନ S3 ବାଲ୍ଟି ସହିତ ସଂଯୋଗକୁ ସମର୍ଥନ କରେ |

 ସଂଯୋଗଗୁଡିକ ଏକ JSON ବସ୍ତୁ ଦ୍ୱାରା ନିର୍ଦ୍ଦିଷ୍ଟ ହୋଇଛି ଯାହା ଏହିପରି ଦେଖାଯାଏ:

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

 ସମସ୍ତ ବିକଳ୍ପ ଏବଂ ସେମାନଙ୍କର ମୂଲ୍ୟ ଏବଂ ଅର୍ଥ ଉପରେ ସମ୍ପୂର୍ଣ୍ଣ ବିବରଣୀ ପାଇଁ, ଦେଖନ୍ତୁ |
 [mobiletto ଡକସ୍](https://www.npmjs.com/package/mobiletto#Basic-usage) |

 ### ଏକ ସଂଯୋଗ ସୃଷ୍ଟି କରନ୍ତୁ |
 ଏକ ନୂତନ ସଂଯୋଗ ସୃଷ୍ଟି କରିବାକୁ, ଆମକୁ ଏହି JSON ବସ୍ତୁଗୁଡ଼ିକ ମଧ୍ୟରୁ ଗୋଟିଏ ଦରକାର |

 ଆମେ ପାରସ୍ପରିକ ଭାବରେ ଗୋଟିଏ ସୃଷ୍ଟି କରିପାରିବା, କିମ୍ବା ଗୋଟିଏ ଫାଇଲ୍ କିମ୍ବା JSON ଆକ୍ଷରିକ ମାଧ୍ୟମରେ ଗୋଟିଏ ଯୋଗାଇ ପାରିବା:

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

 ### ସଂଯୋଗଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କର |
 ଉପଲବ୍ଧ ସଂଯୋଗଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ:

    mo connect -l
    mo connect --list

 ### ସଂଯୋଗ JSON ବିନ୍ୟାସକୁ ପକାନ୍ତୁ |
 ଏକ ସଂଯୋଗ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ JSON ବିନ୍ୟାସ ଦେଖାନ୍ତୁ | ** ଚେତାବନୀ ** ଏହା stdout କୁ କି ଏବଂ ରହସ୍ୟ ପ୍ରିଣ୍ଟ କରିବ |

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ଏକ ସଂଯୋଗ ଅପସାରଣ କରନ୍ତୁ |
 ଗୋଟିଏ ସଂଯୋଗ ଅପସାରଣ କରନ୍ତୁ:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### ସମସ୍ତ ସଂଯୋଗ ଅପସାରଣ କରନ୍ତୁ |
 ସମସ୍ତ ସଂଯୋଗ ଅପସାରଣ କରନ୍ତୁ:

    mo connect -R
    mo connect --remove-all

 ## ଷ୍ଟୋରେଜ୍ ସହିତ କାମ କରିବା |
 ଥରେ ଆପଣ କିଛି ସଂଯୋଗ ସୃଷ୍ଟି କରିସାରିବା ପରେ, "ls", "cp", `rm` , `cp` `ls` `meta` ଏବଂ `mirror` ଅପରେସନ୍ ବ୍ୟବହାର କରନ୍ତୁ |
 ସେମାନଙ୍କ ସହିତ କାମ କରିବାକୁ |

 ଆପଣ ଏକ ନିର୍ଦ୍ଦେଶକୁ ପ୍ରଦାନ କରୁଥିବା ପ୍ରତ୍ୟେକ ଫାଇଲ୍ ପଥ ନିଶ୍ଚିତ ଭାବରେ ସଂଯୋଗର ନାମ ସହିତ ଉପସର୍ଗ ହେବା ଆବଶ୍ୟକ |
 ଏହା ସୂଚିତ କରେ | ନିମ୍ନରେ ଥିବା ଉଦାହରଣଗୁଡିକରେ, ଆମେ ଅନୁମାନ କରୁ ଯେ “ସଂଯୋଗ 1” ଏବଂ `conn2` ସଂଯୋଗ `conn1` ନାମକ ଦୁଇଟି ସଂଯୋଗ ବିଦ୍ୟମାନ |

 ### ଫାଇଲ୍ ତାଲିକା କର |
 ଏକ ତାଲିକା କମାଣ୍ଡର ଆଉଟପୁଟ୍ ହେଉଛି JSON ବସ୍ତୁର ଏକ କ୍ରମ, ପ୍ରତି ଧାଡିରେ, ଫାଇଲଗୁଡ଼ିକୁ ପ୍ରତିନିଧିତ୍ୱ କରେ |
 ମିଳିଲା ଏହି ବସ୍ତୁଗୁଡ଼ିକର ଏକ `name` ” ଏବଂ `type` , ଏବଂ ସମ୍ଭବତ other ଅନ୍ୟାନ୍ୟ କ୍ଷେତ୍ର ରହିବ |

    mo ls conn1/some/path

 ବାରମ୍ବାର ଫାଇଲଗୁଡିକ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ଷ୍ଟୋରେଜ୍ ନୋଟ୍ **: ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ସଂଯୋଗଗୁଡ଼ିକ ପାଇଁ ବାରମ୍ବାର ତାଲିକା ସମର୍ଥିତ ନୁହେଁ |
 ଆପଣ ଏକ ସମୟରେ କେବଳ ଫାଇଲ୍ ର ଗୋଟିଏ ଡିରେକ୍ଟୋରୀ ତାଲିକାଭୁକ୍ତ କରିପାରିବେ |

 ଫାଇଲଗୁଡ଼ିକୁ ଉଚ୍ଚାରଣ କରନ୍ତୁ (ସୁନ୍ଦର-ମୁଦ୍ରଣ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ବାରମ୍ବାର ଏବଂ ଶବ୍ଦଗୁଡ଼ିକ ଫାଇଲଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କର:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` ନିର୍ଦ୍ଦେଶ ପାଇଁ ସହାୟତା ଦେଖନ୍ତୁ, ସମସ୍ତ ବିକଳ୍ପଗୁଡ଼ିକୁ ବର୍ଣ୍ଣନା କରେ:

    mo ls -h
    mo ls --help

 ### stdout କୁ ଏକ ଫାଇଲ୍ ଲେଖ |
 `cat` କମାଣ୍ଡ୍ stdout କୁ ଏକ ଫାଇଲ୍ ପ୍ରିଣ୍ଟ୍ କରିବ:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 ପ୍ରକୃତ UNIX ଆତ୍ମା * (ତଥାପି ନିଶ୍ଚିତ ଭାବରେ ଅଭ୍ୟାସ ନୁହେଁ!) * ମୋବାଇଲଟୋ ର `cat` ନିର୍ଦ୍ଦେଶ ** କ options ଣସି ବିକଳ୍ପ ଗ୍ରହଣ କରେ ନାହିଁ **
 ସାହାଯ୍ୟକାରୀ ସୂଚନା ପ୍ରଦର୍ଶନ କରିବାକୁ `-h` / `--help` ବ୍ୟତୀତ |

 ### ଫାଇଲଗୁଡିକ କପି କରନ୍ତୁ |
 ଗୋଟିଏ ମୋବାଇଲ୍ ରୁ ଅନ୍ୟ ଏକ ଫାଇଲ୍ କୁ କପି କରନ୍ତୁ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ଗୋଟିଏ ମୋବାଇଲଟୋରୁ ଅନ୍ୟ ଏକ ଫାଇଲକୁ କପି କରନ୍ତୁ, ଗନ୍ତବ୍ୟ ସ୍ଥଳରେ ଏହାର ନାମ ପରିବର୍ତ୍ତନ କରନ୍ତୁ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 ବାରମ୍ବାର ଏକ ଡିରେକ୍ଟୋରୀକୁ କପି କରନ୍ତୁ:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` ନିର୍ଦ୍ଦେଶ ପାଇଁ ସହାୟତା ଦେଖନ୍ତୁ, ସମସ୍ତ ବିକଳ୍ପଗୁଡ଼ିକୁ ବର୍ଣ୍ଣନା କରେ:

    mo cp -h
    mo cp --help

 ଟିପନ୍ତୁ: ଫାଇଲ୍ କପି କରିବା ଅତ୍ୟନ୍ତ ଦ୍ରୁତ ନୁହେଁ, କାରଣ ଏହା ବର୍ତ୍ତମାନ ଏକ ମଧ୍ୟସ୍ଥି ଟେମ୍ପ ଫାଇଲ୍ ଆବଶ୍ୟକ କରେ |

 ### ଫାଇଲ୍ ଡିଲିଟ୍ କରନ୍ତୁ |
 ଗୋଟିଏ ଫାଇଲ୍ ଡିଲିଟ୍ କରନ୍ତୁ:

    mo rm conn1/some/file.txt

 ଗୋଟିଏ ଫାଇଲ୍ ଡିଲିଟ୍ କରନ୍ତୁ ଏବଂ କ er ଣସି ତ୍ରୁଟି ବିଷୟରେ ଅଭିଯୋଗ କରନ୍ତୁ ନାହିଁ:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ଏକ ଡିରେକ୍ଟୋରୀ ଡିଲିଟ୍ କରନ୍ତୁ:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ଏକ ଡିରେକ୍ଟୋରୀ ଡିଲିଟ୍ କରନ୍ତୁ ଏବଂ କ any ଣସି ତ୍ରୁଟି ବିଷୟରେ ଅଭିଯୋଗ କରନ୍ତୁ ନାହିଁ:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### ମେଟାଡାଟା ଦେଖନ୍ତୁ |
 ପୁରା ଫାଇଲ୍ ଡାଉନଲୋଡ୍ ନକରି ଏକ ଫାଇଲ୍ ପାଇଁ ମେଟାଡାଟା ଜାଣିବା ପ୍ରାୟତ useful ଉପଯୋଗୀ |

 ମୋବାଇଲ୍ ଏବଂ ନାମ ଏବଂ ପ୍ରକାର ବ୍ୟତୀତ ଫାଇଲ୍ ଆକାର ଏବଂ ଶେଷ ସଂଶୋଧିତ ସମୟ ରିପୋର୍ଟ କରିବାକୁ ସକ୍ଷମ ଅଟେ |

 ମେଟାଡାଟା ଦେଖିବା ପାଇଁ:

    mo meta conn1/some/file.txt

 ### ଦର୍ପଣ ଡିରେକ୍ଟୋରୀଗୁଡିକ |
 ଦର୍ପଣ ହେଉଛି `cp` ର ଏକ ସ୍ case ତନ୍ତ୍ର କେସ୍ ଠାରୁ ଅଧିକ, ଏହା ଏକ ଅଲଗା ମୋବାଇଲଟୋ କମାଣ୍ଡ ଯାହା ଏହାକୁ ଗୁଡ଼ାଏ |
 କପି ଅପରେସନ୍; ତ୍ରୁଟି ଘଟିଲେ ମଧ୍ୟ ଏହା ଜାରି ରହିଥାଏ, ଏବଂ ସଫଳତା ଏବଂ ତ୍ରୁଟିର ଗଣନାକୁ ଟ୍ରାକ୍ କରେ |

 Conn1 ରୁ conn2 ପର୍ଯ୍ୟନ୍ତ ସବୁକିଛି ଦର୍ପଣ କରିବାକୁ:

    mo mirror conn1 conn2

 ଏକ ଉପଡିରେକ୍ଟୋରୀକୁ ଦର୍ପଣ କରିବାକୁ:

    mo mirror conn1/some/subdir conn2

 ଅନ୍ୟ ଏକ ସବ୍ ଡିରେକ୍ଟୋରୀରେ ଏକ ସବ୍ ଡିରେକ୍ଟୋରୀକୁ ଦର୍ପଣ କରିବାକୁ:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
