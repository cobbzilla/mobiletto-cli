mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) ಗಾಗಿ ಕಮಾಂಡ್-ಲೈನ್ ಇಂಟರ್ಫೇಸ್ (CLI)
 ಸಂಗ್ರಹಣೆ.

 Mobiletto Amazon S3, Backblaze B2, ಮತ್ತು ಸ್ಥಳೀಯ ಫೈಲ್‌ಸಿಸ್ಟಮ್‌ಗಳಿಗೆ ಸಂಪರ್ಕಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

 # ಇದನ್ನು ಬೇರೆ ಭಾಷೆಯಲ್ಲಿ ಓದಿ
 ಈ README.md ಡಾಕ್ಯುಮೆಂಟ್ ಅನ್ನು [hokeylization](https://github.com/cobbzilla/hokeylization) ಮೂಲಕ ಅನುವಾದಿಸಲಾಗಿದೆ
 **[Google ಅನುವಾದದಿಂದ ಬೆಂಬಲಿತವಾದ ಪ್ರತಿಯೊಂದು ಭಾಷೆ](https://cloud.google.com/translate/docs/languages)!**

 ಇದು ಪರಿಪೂರ್ಣವಲ್ಲ ಎಂದು ನನಗೆ ಖಾತ್ರಿಯಿದೆ, ಆದರೆ ಇದು ಯಾವುದಕ್ಕಿಂತ ಉತ್ತಮವಾಗಿದೆ ಎಂದು ನಾನು ಭಾವಿಸುತ್ತೇನೆ!

 [🇸🇦 ಅರೇಬಿಕ್](../ar/README.md)
 [🇧🇩 ಬೆಂಗಾಲಿ](../bn/README.md)
 [🇩🇪 ಜರ್ಮನ್](../de/README.md)
 [🇺🇸 ಇಂಗ್ಲೀಷ್](../en/README.md)
 [🇪🇸 ಸ್ಪ್ಯಾನಿಷ್](../es/README.md)
 [🇫🇷 ಫ್ರೆಂಚ್](../fr/README.md)
 [🇹🇩 ಹೌಸಾ](../ha/README.md)
 [🇮🇳 ಹಿಂದಿ](../hi/README.md)
 [🇮🇩 ಇಂಡೋನೇಷಿಯನ್](../id/README.md)
 [🇮🇹 ಇಟಾಲಿಯನ್](../it/README.md)
 [🇯🇵 ಜಪಾನೀಸ್](../ja/README.md)
 [🇰🇷 ಕೊರಿಯನ್](../ko/README.md)
 [🇮🇳 ಮರಾಂತಿ](../mr/README.md)
 [🇵🇱 ಪೋಲಿಷ್](../pl/README.md)
 [🇧🇷 ಪೋರ್ಚುಗೀಸ್](../pt/README.md)
 [🇷🇺 ರಷ್ಯನ್](../ru/README.md)
 [🇰🇪 ಸ್ವಹಿಲಿ](../sw/README.md)
 [🇵🇭 ಟ್ಯಾಗಲೋಗ್](../tl/README.md)
 [🇹🇷 ಟರ್ಕಿಶ್](../tr/README.md)
 [🇵🇰 ಉರ್ದು](../ur/README.md)
 [🇻🇳 ವಿಯೆಟ್ನಾಮೀಸ್](../vi/README.md)
 [🇨🇳 ಚೈನೀಸ್](../zh/README.md)


 **[📚 ... ಎಲ್ಲಾ ಭಾಷೆಗಳು ...](../README.md)**
 ----

 ### README ನ ಈ ಅನುವಾದದಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆಯೇ?
 ಮೂಲ [README]ನ ಈ ನಿರ್ದಿಷ್ಟ ಅನುವಾದ (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 ದೋಷಪೂರಿತವಾಗಿರಬಹುದು -- *ತಿದ್ದುಪಡಿಗಳು ಬಹಳ ಸ್ವಾಗತಾರ್ಹ!* ದಯವಿಟ್ಟು [GitHub ನಲ್ಲಿ ಪುಲ್ ವಿನಂತಿಯನ್ನು](https://github.com/cobbzilla/mobiletto-cli/pulls) ಕಳುಹಿಸಿ,
 ಅಥವಾ ನೀವು ಅದನ್ನು ಮಾಡಲು ಆರಾಮದಾಯಕವಲ್ಲದಿದ್ದರೆ, [ಸಮಸ್ಯೆ ತೆರೆಯಿರಿ](https://github.com/cobbzilla/mobiletto-cli/issues)

 ಅನುವಾದದ ಕುರಿತು ನೀವು ಹೊಸ GitHub ಸಮಸ್ಯೆಯನ್ನು ರಚಿಸಿದಾಗ, ದಯವಿಟ್ಟು ಹೀಗೆ ಮಾಡಿ:
 * ಪುಟದ URL ಅನ್ನು ಸೇರಿಸಿ (ಬ್ರೌಸರ್ ವಿಳಾಸ ಪಟ್ಟಿಯಿಂದ ನಕಲಿಸಿ/ಅಂಟಿಸಿ)
 * ತಪ್ಪಾಗಿರುವ ನಿಖರವಾದ ಪಠ್ಯವನ್ನು ಸೇರಿಸಿ (ಬ್ರೌಸರ್‌ನಿಂದ ನಕಲಿಸಿ/ಅಂಟಿಸಿ)
 * ದಯವಿಟ್ಟು ಏನು ತಪ್ಪಾಗಿದೆ ಎಂಬುದನ್ನು ವಿವರಿಸಿ -- ಅನುವಾದವು ತಪ್ಪಾಗಿದೆಯೇ? ಫಾರ್ಮ್ಯಾಟಿಂಗ್ ಹೇಗಾದರೂ ಮುರಿದುಹೋಗಿದೆಯೇ?
 * ದಯೆಯಿಂದ ಉತ್ತಮ ಅನುವಾದದ ಸಲಹೆಯನ್ನು ನೀಡಿ, ಅಥವಾ ಪಠ್ಯವನ್ನು ಹೇಗೆ ಸರಿಯಾಗಿ ಫಾರ್ಮ್ಯಾಟ್ ಮಾಡಬೇಕು
 * **ಧನ್ಯವಾದಗಳು!**

 # ವಿಷಯಗಳು
 * [ಮೂಲ](#ಮೂಲ)
 * [ಬೆಂಬಲ ಮತ್ತು ನಿಧಿ](#ಬೆಂಬಲ-ಮತ್ತು-ನಿಧಿ)
 * [ಸ್ಥಾಪನೆ ಮತ್ತು ಬಳಕೆ](#ಸ್ಥಾಪನೆ ಮತ್ತು ಬಳಕೆ)
 * [npm ಪ್ಯಾಕೇಜ್](#npm-package)
 * [ಮೂಲದಿಂದ](#ಮೂಲದಿಂದ)
 * [ಸಂಪರ್ಕಗಳು](#ಸಂಪರ್ಕಗಳು)
 * [ಸಂಪರ್ಕವನ್ನು ರಚಿಸಿ](#Create-a-connection)
 * [ಪಟ್ಟಿ ಸಂಪರ್ಕಗಳು](#ಪಟ್ಟಿ-ಸಂಪರ್ಕಗಳು)
 * [ಡಂಪ್ ಸಂಪರ್ಕ JSON ಸಂರಚನೆ](#Dump-connection-JSON-config)
 * [ಸಂಪರ್ಕವನ್ನು ತೆಗೆದುಹಾಕಿ](#ಸಂಪರ್ಕವನ್ನು ತೆಗೆದುಹಾಕಿ)
 * [ಎಲ್ಲಾ ಸಂಪರ್ಕಗಳನ್ನು ತೆಗೆದುಹಾಕಿ](#ಎಲ್ಲ-ಸಂಪರ್ಕಗಳನ್ನು ತೆಗೆದುಹಾಕಿ)
 * [ಸಂಗ್ರಹಣೆಯೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವುದು](#ಸಂಗ್ರಹಣೆಯೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವುದು)
 * [ಪಟ್ಟಿ ಫೈಲ್‌ಗಳು](#ಪಟ್ಟಿ-ಫೈಲ್‌ಗಳು)
 * [stdout ಗೆ ಫೈಲ್ ಬರೆಯಿರಿ](#Write-a-file-to-stdout)
 * [ಫೈಲ್‌ಗಳನ್ನು ನಕಲಿಸಿ](#ನಕಲು-ಫೈಲ್‌ಗಳು)
 * [ಫೈಲ್‌ಗಳನ್ನು ಅಳಿಸಿ](#ಅಳಿಸು-ಫೈಲ್‌ಗಳು)
 * [ಮೆಟಾಡೇಟಾವನ್ನು ವೀಕ್ಷಿಸಿ](#ವೀಕ್ಷಿ-ಮೆಟಾಡೇಟಾ)
 * [ಕನ್ನಡಿ ಡೈರೆಕ್ಟರಿಗಳು](#ಮಿರರ್-ಡೈರೆಕ್ಟರಿಗಳು)

 ### ಮೂಲ
 * [GitHub ನಲ್ಲಿ ಮೊಬಿಲೆಟ್ಟೊ-ಕ್ಲೈ](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## ಬೆಂಬಲ ಮತ್ತು ಧನಸಹಾಯ
 ನಾನು ವೃತ್ತಿಪರ ಓಪನ್ ಸೋರ್ಸ್ ಸಾಫ್ಟ್‌ವೇರ್ ಡೆವಲಪರ್ ಆಗಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದೇನೆ. ನಾನು ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇನೆ
 ಹಲವು ವರ್ಷಗಳಿಂದ ಸಾಫ್ಟ್‌ವೇರ್ ಉದ್ಯಮದಲ್ಲಿ, ನಾನು ಯಶಸ್ವಿ ಕಂಪನಿಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದೇನೆ ಮತ್ತು ಅವುಗಳನ್ನು ಸಾರ್ವಜನಿಕ ಕಂಪನಿಗಳಿಗೆ ಮಾರಾಟ ಮಾಡಿದ್ದೇನೆ.
 ಇತ್ತೀಚಿಗೆ ನಾನು ನನ್ನ ಕೆಲಸವನ್ನು ಕಳೆದುಕೊಂಡಿದ್ದೇನೆ ಮತ್ತು ನನಗೆ ಬೇರೆ ಯಾವುದೇ ಕೆಲಸವಿಲ್ಲ

 ಹಾಗಾಗಿ ನಾನು ಸಹಾಯಕವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಬರೆಯಲು ಪ್ರಯತ್ನಿಸುತ್ತೇನೆ ಮತ್ತು ಅದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆಯೇ ಎಂದು ನೋಡುತ್ತೇನೆ

 ನೀವು ಈ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಬಳಸುವುದನ್ನು ಆನಂದಿಸಿದರೆ, ನಾನು ಸಹ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಕೃತಜ್ಞರಾಗಿರುತ್ತೇನೆ
 ಚಿಕ್ಕದಾದ [Patreon ಮೂಲಕ ಮಾಸಿಕ ಕೊಡುಗೆ](https://www.patreon.com/cobbzilla)

 *ಧನ್ಯವಾದಗಳು!*

 ## ಅನುಸ್ಥಾಪನೆ ಮತ್ತು ಬಳಕೆ
 ನೀವು npm ಮೂಲಕ ಅಥವಾ ನೇರವಾಗಿ ಮೂಲದಿಂದ `mobiletto-cli` ಅನ್ನು ಸ್ಥಾಪಿಸಬಹುದು ಮತ್ತು ರನ್ ಮಾಡಬಹುದು.

 ### npm ಪ್ಯಾಕೇಜ್
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ಮೂಲದಿಂದ
 ಮೂಲದಿಂದ ಚಲಾಯಿಸಲು, ನಿಮಗೆ nodejs v16+ ಮತ್ತು ನೂಲು ಅಗತ್ಯವಿದೆ

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## ಸಂಪರ್ಕಗಳು
 ಎಲ್ಲಾ mobiletto ಸಂಗ್ರಹಣೆಯನ್ನು ಸಂಪರ್ಕದ ಮೂಲಕ ಪ್ರವೇಶಿಸಲಾಗುತ್ತದೆ.

 Mobiletto ಪ್ರಸ್ತುತ ಸ್ಥಳೀಯ ಫೈಲ್‌ಸಿಸ್ಟಮ್ ಸಂಗ್ರಹಣೆ ಮತ್ತು Amazon S3 ಬಕೆಟ್‌ಗಳಿಗೆ ಸಂಪರ್ಕಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

 ಈ ರೀತಿ ಕಾಣುವ JSON ಆಬ್ಜೆಕ್ಟ್‌ನಿಂದ ಸಂಪರ್ಕಗಳನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ:

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

 ಎಲ್ಲಾ ಆಯ್ಕೆಗಳು ಮತ್ತು ಅವುಗಳ ಮೌಲ್ಯಗಳು ಮತ್ತು ಅರ್ಥಗಳ ಸಂಪೂರ್ಣ ವಿವರಗಳಿಗಾಗಿ, ನೋಡಿ
 [mobiletto ಡಾಕ್ಸ್](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### ಸಂಪರ್ಕವನ್ನು ರಚಿಸಿ
 ಹೊಸ ಸಂಪರ್ಕವನ್ನು ರಚಿಸಲು, ನಮಗೆ ಈ JSON ಆಬ್ಜೆಕ್ಟ್‌ಗಳಲ್ಲಿ ಒಂದು ಅಗತ್ಯವಿದೆ.

 ನಾವು ಒಂದನ್ನು ಸಂವಾದಾತ್ಮಕವಾಗಿ ರಚಿಸಬಹುದು ಅಥವಾ ಫೈಲ್ ಮೂಲಕ ಒಂದನ್ನು ಪೂರೈಸಬಹುದು ಅಥವಾ JSON ಅಕ್ಷರಶಃ:

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

 ### ಪಟ್ಟಿ ಸಂಪರ್ಕಗಳು
 ಲಭ್ಯವಿರುವ ಸಂಪರ್ಕಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿ:

    mo connect -l
    mo connect --list

 ### ಡಂಪ್ ಸಂಪರ್ಕ JSON ಸಂರಚನೆ
 ಸಂಪರ್ಕಕ್ಕಾಗಿ ಪೂರ್ಣ JSON ಸಂರಚನೆಯನ್ನು ತೋರಿಸಿ. **ಎಚ್ಚರಿಕೆ** ಇದು stdout ಗೆ ಕೀಗಳು ಮತ್ತು ರಹಸ್ಯಗಳನ್ನು ಮುದ್ರಿಸುತ್ತದೆ.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ಸಂಪರ್ಕವನ್ನು ತೆಗೆದುಹಾಕಿ
 ಒಂದೇ ಸಂಪರ್ಕವನ್ನು ತೆಗೆದುಹಾಕಿ:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### ಎಲ್ಲಾ ಸಂಪರ್ಕಗಳನ್ನು ತೆಗೆದುಹಾಕಿ
 ಎಲ್ಲಾ ಸಂಪರ್ಕಗಳನ್ನು ತೆಗೆದುಹಾಕಿ:

    mo connect -R
    mo connect --remove-all

 ## ಸಂಗ್ರಹಣೆಯೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ
 ಒಮ್ಮೆ ನೀವು ಕೆಲವು ಸಂಪರ್ಕಗಳನ್ನು ರಚಿಸಿದ ನಂತರ, ` `ls` , ` `cp` , `rm` , `meta` ಮತ್ತು `mirror` ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಬಳಸಿ
 ಅವರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಲು.

 ಆಜ್ಞೆಗೆ ನೀವು ಒದಗಿಸುವ ಪ್ರತಿಯೊಂದು ಫೈಲ್ ಮಾರ್ಗವು ಸಂಪರ್ಕದ ಹೆಸರಿನೊಂದಿಗೆ ಪೂರ್ವಪ್ರತ್ಯಯವನ್ನು ಹೊಂದಿರಬೇಕು
 ಇದು ಸೂಚಿಸುತ್ತದೆ. ಕೆಳಗಿನ ಉದಾಹರಣೆಗಳಲ್ಲಿ, `conn1` ಮತ್ತು `conn2` ಎಂಬ ಹೆಸರಿನ ಎರಡು ಸಂಪರ್ಕಗಳು ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಎಂದು ನಾವು ಭಾವಿಸುತ್ತೇವೆ

 ### ಪಟ್ಟಿ ಫೈಲ್‌ಗಳು
 ಪಟ್ಟಿ ಆಜ್ಞೆಯ ಔಟ್‌ಪುಟ್ JSON ಆಬ್ಜೆಕ್ಟ್‌ಗಳ ಸರಣಿಯಾಗಿದೆ, ಪ್ರತಿ ಸಾಲಿಗೆ ಒಂದರಂತೆ, ಫೈಲ್‌ಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ
 ಕಂಡು. ಈ ವಸ್ತುಗಳು `name` ಮತ್ತು `type` ಪ್ರಕಾರ` ಮತ್ತು ಪ್ರಾಯಶಃ ಇತರ ಕ್ಷೇತ್ರಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ.

    mo ls conn1/some/path

 ಫೈಲ್‌ಗಳನ್ನು ಪುನರಾವರ್ತಿತವಾಗಿ ಪಟ್ಟಿ ಮಾಡಿ:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಶೇಖರಣಾ ಟಿಪ್ಪಣಿ**: ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ಸಂಪರ್ಕಗಳಿಗೆ ಪುನರಾವರ್ತಿತ ಪಟ್ಟಿಯನ್ನು ಇನ್ನೂ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.
 ನೀವು ಒಂದು ಸಮಯದಲ್ಲಿ ಫೈಲ್‌ಗಳ ಒಂದು ಡೈರೆಕ್ಟರಿಯನ್ನು ಮಾತ್ರ ಪಟ್ಟಿ ಮಾಡಬಹುದು.

 ಮೌಖಿಕವಾಗಿ ಫೈಲ್‌ಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿ (ಸುಂದರ-ಮುದ್ರಣ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ಫೈಲ್‌ಗಳನ್ನು ಪುನರಾವರ್ತಿತವಾಗಿ ಮತ್ತು ಮಾತಿನಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಿ:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` ಆಜ್ಞೆಗಾಗಿ ಸಹಾಯವನ್ನು ವೀಕ್ಷಿಸಿ, ಎಲ್ಲಾ ಆಯ್ಕೆಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ:

    mo ls -h
    mo ls --help

 ### stdout ಗೆ ಫೈಲ್ ಅನ್ನು ಬರೆಯಿರಿ
 `cat` ಆಜ್ಞೆಯು ಫೈಲ್ ಅನ್ನು stdout ಗೆ ಮುದ್ರಿಸುತ್ತದೆ:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 ನಿಜವಾದ UNIX ಉತ್ಸಾಹದಲ್ಲಿ *(ಇನ್ನೂ ಖಂಡಿತವಾಗಿಯೂ ಅಭ್ಯಾಸವಲ್ಲ!)* mobiletto ನ `cat` ಆಜ್ಞೆಯು **ಯಾವುದೇ ಆಯ್ಕೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದಿಲ್ಲ**
 ಸಹಾಯಕವಾದ ಮಾಹಿತಿಯನ್ನು ಪ್ರದರ್ಶಿಸಲು `-h` / `--help` ಹೊರತುಪಡಿಸಿ.

 ### ಫೈಲ್‌ಗಳನ್ನು ನಕಲಿಸಿ
 ಒಂದೇ ಫೈಲ್ ಅನ್ನು ಒಂದು ಮೊಬೈಲ್‌ನಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ನಕಲಿಸಿ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ಒಂದೇ ಫೈಲ್ ಅನ್ನು ಒಂದು ಮೊಬೈಲ್‌ನಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ನಕಲಿಸಿ, ಅದನ್ನು ಗಮ್ಯಸ್ಥಾನದಲ್ಲಿ ಮರುಹೆಸರಿಸಿ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 ಡೈರೆಕ್ಟರಿಯನ್ನು ಪುನರಾವರ್ತಿತವಾಗಿ ನಕಲಿಸಿ:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` ಆಜ್ಞೆಗಾಗಿ ಸಹಾಯವನ್ನು ವೀಕ್ಷಿಸಿ, ಎಲ್ಲಾ ಆಯ್ಕೆಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ:

    mo cp -h
    mo cp --help

 ಗಮನಿಸಿ: ಫೈಲ್ ನಕಲು ಮಾಡುವುದು ತುಂಬಾ ವೇಗವಾಗಿಲ್ಲ, ಏಕೆಂದರೆ ಇದಕ್ಕೆ ಪ್ರಸ್ತುತ ಮಧ್ಯವರ್ತಿ ಟೆಂಪ್ ಫೈಲ್ ಅಗತ್ಯವಿದೆ.

 ### ಫೈಲ್‌ಗಳನ್ನು ಅಳಿಸಿ
 ಒಂದೇ ಫೈಲ್ ಅಳಿಸಿ:

    mo rm conn1/some/file.txt

 ಒಂದೇ ಫೈಲ್ ಅನ್ನು ಅಳಿಸಿ ಮತ್ತು ಯಾವುದೇ ದೋಷಗಳ ಬಗ್ಗೆ ದೂರು ನೀಡಬೇಡಿ:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ಡೈರೆಕ್ಟರಿಯನ್ನು ಅಳಿಸಿ:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ಡೈರೆಕ್ಟರಿಯನ್ನು ಅಳಿಸಿ ಮತ್ತು ಯಾವುದೇ ದೋಷಗಳ ಬಗ್ಗೆ ದೂರು ನೀಡಬೇಡಿ:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### ಮೆಟಾಡೇಟಾವನ್ನು ವೀಕ್ಷಿಸಿ
 ಸಂಪೂರ್ಣ ಫೈಲ್ ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡದೆಯೇ ಫೈಲ್‌ಗಾಗಿ ಮೆಟಾಡೇಟಾವನ್ನು ತಿಳಿದುಕೊಳ್ಳಲು ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಉಪಯುಕ್ತವಾಗಿದೆ.

 Mobiletto ಹೆಸರು ಮತ್ತು ಪ್ರಕಾರದ ಜೊತೆಗೆ ಫೈಲ್ ಗಾತ್ರ ಮತ್ತು ಕೊನೆಯ ಮಾರ್ಪಡಿಸಿದ ಸಮಯವನ್ನು ವರದಿ ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.

 ಮೆಟಾಡೇಟಾ ವೀಕ್ಷಿಸಲು:

    mo meta conn1/some/file.txt

 ### ಕನ್ನಡಿ ಡೈರೆಕ್ಟರಿಗಳು
 ಪ್ರತಿಬಿಂಬಿಸುವುದು `cp` ನ ವಿಶೇಷ ಪ್ರಕರಣಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ, ಇದು ಒಂದು ಪ್ರತ್ಯೇಕ mobiletto ಆಜ್ಞೆಯಾಗಿದೆ
 ನಕಲು ಕಾರ್ಯಾಚರಣೆ; ದೋಷಗಳು ಸಂಭವಿಸಿದಾಗಲೂ ಇದು ಮುಂದುವರಿಯುತ್ತದೆ ಮತ್ತು ಯಶಸ್ಸು ಮತ್ತು ದೋಷಗಳ ಎಣಿಕೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ.

 conn1 ನಿಂದ conn2 ಗೆ ಎಲ್ಲವನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸಲು:

    mo mirror conn1 conn2

 ಉಪ ಡೈರೆಕ್ಟರಿಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸಲು:

    mo mirror conn1/some/subdir conn2

 ಉಪ ಡೈರೆಕ್ಟರಿಯನ್ನು ಮತ್ತೊಂದು ಉಪಕೋಶಕ್ಕೆ ಪ್ರತಿಬಿಂಬಿಸಲು:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
