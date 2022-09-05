mobiletto-cli
 ==============
 [mobiletto](https://www.npmjs.com/package/mobiletto) ਲਈ ਇੱਕ ਕਮਾਂਡ-ਲਾਈਨ ਇੰਟਰਫੇਸ (CLI)
 ਸਟੋਰੇਜ

 Mobiletto Amazon S3, Backblaze B2, ਅਤੇ ਸਥਾਨਕ ਫਾਈਲਸਿਸਟਮ ਨਾਲ ਕਨੈਕਸ਼ਨਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ।

 # ਇਸਨੂੰ ਕਿਸੇ ਹੋਰ ਭਾਸ਼ਾ ਵਿੱਚ ਪੜ੍ਹੋ
 ਇਸ README.md ਦਸਤਾਵੇਜ਼ ਦਾ ਅਨੁਵਾਦ [hokeylization](https://github.com/cobbzilla/hokeylization) ਰਾਹੀਂ ਕੀਤਾ ਗਿਆ ਹੈ, ਇਸ ਵਿੱਚ
 **[Google ਅਨੁਵਾਦ ਦੁਆਰਾ ਸਮਰਥਿਤ ਹਰ ਭਾਸ਼ਾ](https://cloud.google.com/translate/docs/languages)!**

 ਮੈਨੂੰ ਯਕੀਨ ਹੈ ਕਿ ਇਹ ਸੰਪੂਰਨ ਨਹੀਂ ਹੈ, ਪਰ ਮੈਨੂੰ ਉਮੀਦ ਹੈ ਕਿ ਇਹ ਕੁਝ ਵੀ ਨਹੀਂ ਹੈ!

 [🇸🇦 ਅਰਬੀ](../ar/README.md)
 [🇧🇩 ਬੰਗਾਲੀ](../bn/README.md)
 [🇩🇪 ਜਰਮਨ](../de/README.md)
 [🇺🇸 ਅੰਗਰੇਜ਼ੀ](../en/README.md)
 [🇪🇸 ਸਪੇਨੀ](../es/README.md)
 [🇫🇷 ਫ੍ਰੈਂਚ](../fr/README.md)
 [🇹🇩 ਹਾਉਸਾ](../ha/README.md)
 [🇮🇳 ਹਿੰਦੀ](../hi/README.md)
 [🇮🇩 ਇੰਡੋਨੇਸ਼ੀਆਈ](../id/README.md)
 [🇮🇹 ਇਤਾਲਵੀ](../it/README.md)
 [🇯🇵 ਜਪਾਨੀ](../ja/README.md)
 [🇰🇷 ਕੋਰੀਆਈ](../ko/README.md)
 [🇮🇳 ਮਰਾਂਥੀ](../mr/README.md)
 [🇵🇱 ਪੋਲਿਸ਼](../pl/README.md)
 [🇧🇷 ਪੁਰਤਗਾਲੀ](../pt/README.md)
 [🇷🇺 ਰੂਸੀ](../ru/README.md)
 [🇰🇪 ਸਵਾਹਿਲੀ](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 ਤੁਰਕੀ](../tr/README.md)
 [🇵🇰 ਉਰਦੂ](../ur/README.md)
 [🇻🇳 ਵੀਅਤਨਾਮੀ](../vi/README.md)
 [🇨🇳 ਚੀਨੀ](../zh/README.md)


 **[📚 ... ਸਾਰੀਆਂ ਭਾਸ਼ਾਵਾਂ ...](../README.md)**
 ----

 ### ਕੀ README ਦੇ ਇਸ ਅਨੁਵਾਦ ਵਿੱਚ ਕੋਈ ਸਮੱਸਿਆ ਹੈ?
 ਮੂਲ [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) ਦਾ ਇਹ ਵਿਸ਼ੇਸ਼ ਅਨੁਵਾਦ
 ਨੁਕਸ ਹੋ ਸਕਦੇ ਹਨ -- *ਸੁਧਾਰਾਂ ਦਾ ਬਹੁਤ ਸੁਆਗਤ ਹੈ!* ਕਿਰਪਾ ਕਰਕੇ [GitHub 'ਤੇ ਪੁੱਲ ਬੇਨਤੀ](https://github.com/cobbzilla/mobiletto-cli/pulls) ਭੇਜੋ,
 ਜਾਂ ਜੇਕਰ ਤੁਸੀਂ ਅਜਿਹਾ ਕਰਨ ਵਿੱਚ ਅਰਾਮਦੇਹ ਨਹੀਂ ਹੋ, [ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ](https://github.com/cobbzilla/mobiletto-cli/issues)

 ਜਦੋਂ ਤੁਸੀਂ ਅਨੁਵਾਦ ਬਾਰੇ ਇੱਕ ਨਵਾਂ GitHub ਮੁੱਦਾ ਬਣਾਉਂਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਇਹ ਕਰੋ:
 * ਪੰਨਾ URL ਸ਼ਾਮਲ ਕਰੋ (ਬ੍ਰਾਊਜ਼ਰ ਐਡਰੈੱਸ ਬਾਰ ਤੋਂ ਕਾਪੀ/ਪੇਸਟ ਕਰੋ)
 * ਸਹੀ ਟੈਕਸਟ ਸ਼ਾਮਲ ਕਰੋ ਜੋ ਗਲਤ ਹੈ (ਬ੍ਰਾਊਜ਼ਰ ਤੋਂ ਕਾਪੀ/ਪੇਸਟ ਕਰੋ)
 * ਕਿਰਪਾ ਕਰਕੇ ਦੱਸੋ ਕਿ ਕੀ ਗਲਤ ਹੈ -- ਕੀ ਅਨੁਵਾਦ ਗਲਤ ਹੈ? ਕੀ ਫਾਰਮੈਟਿੰਗ ਕਿਸੇ ਤਰ੍ਹਾਂ ਟੁੱਟ ਗਈ ਹੈ?
 * ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਬਿਹਤਰ ਅਨੁਵਾਦ ਦਾ ਸੁਝਾਅ ਪੇਸ਼ ਕਰੋ, ਜਾਂ ਟੈਕਸਟ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਕਿਵੇਂ ਫਾਰਮੈਟ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ
 * **ਤੁਹਾਡਾ ਧੰਨਵਾਦ!**

 # ਸਮੱਗਰੀ
 * [ਸਰੋਤ](#ਸਰੋਤ)
 * [ਸਹਾਇਤਾ ਅਤੇ ਫੰਡਿੰਗ](#ਸਹਾਇਤਾ-ਅਤੇ-ਫੰਡਿੰਗ)
 * [ਇੰਸਟਾਲੇਸ਼ਨ ਅਤੇ ਵਰਤੋਂ](#ਇੰਸਟਾਲੇਸ਼ਨ-ਅਤੇ-ਵਰਤੋਂ)
 * [npm ਪੈਕੇਜ](#npm-ਪੈਕੇਜ)
 * [ਸਰੋਤ ਤੋਂ](#ਸਰੋਤ ਤੋਂ)
 * [ਕੁਨੈਕਸ਼ਨ](#ਕਨੈਕਸ਼ਨ)
 * [ਇੱਕ ਕੁਨੈਕਸ਼ਨ ਬਣਾਓ](#Create-a-connection)
 * [ਸੂਚੀ ਕੁਨੈਕਸ਼ਨ](#ਸੂਚੀ-ਕੁਨੈਕਸ਼ਨ)
 * [ਡੰਪ ਕਨੈਕਸ਼ਨ JSON ਸੰਰਚਨਾ](#ਡੰਪ-ਕਨੈਕਸ਼ਨ-JSON-config)
 * [ਇੱਕ ਕੁਨੈਕਸ਼ਨ ਹਟਾਓ](#Remove-a-connection)
 * [ਸਾਰੇ ਕੁਨੈਕਸ਼ਨ ਹਟਾਓ](#Remove-all-connections)
 * [ਸਟੋਰੇਜ ਦੇ ਨਾਲ ਕੰਮ ਕਰਨਾ](#ਵਰਕਿੰਗ-ਵਿਦ-ਸਟੋਰੇਜ)
 * [ਲਿਸਟ ਫਾਈਲਾਂ](#ਲਿਸਟ ਫਾਈਲਾਂ)
 * [stdout ਲਈ ਇੱਕ ਫਾਈਲ ਲਿਖੋ](#Write-a-file-to-stdout)
 * [ਕਾਪੀ ਫਾਈਲਾਂ](#ਕਾਪੀ-ਫਾਇਲਾਂ)
 * [ਫਾਇਲਾਂ ਮਿਟਾਓ](#ਫਾਇਲਾਂ ਨੂੰ ਮਿਟਾਓ)
 * [ਮੇਟਾਡੇਟਾ ਦੇਖੋ](#ਵੇਖੋ-ਮੈਟਾਡੇਟਾ)
 * [ਮਿਰਰ ਡਾਇਰੈਕਟਰੀਆਂ](#Mirror-directories)

 ### ਸਰੋਤ
 * [ਗੀਟਹਬ 'ਤੇ ਮੋਬਾਈਲਟੋ-ਕਲੀ](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## ਸਹਾਇਤਾ ਅਤੇ ਫੰਡਿੰਗ
 ਮੈਂ ਇੱਕ ਪੇਸ਼ੇਵਰ ਓਪਨ ਸੋਰਸ ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਰ ਬਣਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ। ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਰਿਹਾ ਹਾਂ
 ਕਈ ਸਾਲਾਂ ਤੋਂ ਸਾਫਟਵੇਅਰ ਉਦਯੋਗ, ਮੈਂ ਸਫਲ ਕੰਪਨੀਆਂ ਸ਼ੁਰੂ ਕੀਤੀਆਂ ਹਨ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਜਨਤਕ ਕੰਪਨੀਆਂ ਨੂੰ ਵੇਚ ਦਿੱਤਾ ਹੈ।
 ਹਾਲ ਹੀ ਵਿੱਚ ਮੈਂ ਆਪਣੀ ਨੌਕਰੀ ਗੁਆ ਦਿੱਤੀ ਹੈ, ਅਤੇ ਮੇਰੇ ਕੋਲ ਅਸਲ ਵਿੱਚ ਕੋਈ ਹੋਰ ਕੰਮ ਨਹੀਂ ਹੈ

 ਇਸ ਲਈ ਮੈਂ ਮਦਦਗਾਰ ਸੌਫਟਵੇਅਰ ਲਿਖਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਨ ਜਾ ਰਿਹਾ ਹਾਂ ਅਤੇ ਦੇਖਾਂਗਾ ਕਿ ਕੀ ਇਹ ਕੰਮ ਕਰਦਾ ਹੈ

 ਜੇ ਤੁਸੀਂ ਇਸ ਸੌਫਟਵੇਅਰ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦਾ ਅਨੰਦ ਲੈਂਦੇ ਹੋ, ਤਾਂ ਮੈਂ ਇਸ ਲਈ ਵੀ ਦਿਲੋਂ ਧੰਨਵਾਦੀ ਹੋਵਾਂਗਾ
 ਸਭ ਤੋਂ ਛੋਟਾ [ਪੈਟਰੀਓਨ ਦੁਆਰਾ ਮਹੀਨਾਵਾਰ ਯੋਗਦਾਨ](https://www.patreon.com/cobbzilla)

 *ਤੁਹਾਡਾ ਧੰਨਵਾਦ!*

 ## ਸਥਾਪਨਾ ਅਤੇ ਵਰਤੋਂ
 ਤੁਸੀਂ npm ਦੁਆਰਾ ਜਾਂ ਸਿੱਧੇ ਸਰੋਤ ਤੋਂ `mobiletto-cli` ਨੂੰ ਸਥਾਪਿਤ ਅਤੇ ਚਲਾ ਸਕਦੇ ਹੋ।

 ### npm ਪੈਕੇਜ
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ਸਰੋਤ ਤੋਂ
 ਸਰੋਤ ਤੋਂ ਚਲਾਉਣ ਲਈ, ਤੁਹਾਨੂੰ nodejs v16+ ਅਤੇ ਧਾਗੇ ਦੀ ਲੋੜ ਪਵੇਗੀ

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## ਕੁਨੈਕਸ਼ਨ
 ਸਾਰੇ ਮੋਬਾਈਲਟੋ ਸਟੋਰੇਜ ਨੂੰ ਇੱਕ ਕਨੈਕਸ਼ਨ ਦੁਆਰਾ ਐਕਸੈਸ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

 Mobiletto ਵਰਤਮਾਨ ਵਿੱਚ ਸਥਾਨਕ ਫਾਇਲ ਸਿਸਟਮ ਸਟੋਰੇਜ਼ ਅਤੇ Amazon S3 ਬਾਲਟੀਆਂ ਨਾਲ ਕਨੈਕਸ਼ਨਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ।

 ਕਨੈਕਸ਼ਨਾਂ ਨੂੰ ਇੱਕ JSON ਵਸਤੂ ਦੁਆਰਾ ਨਿਰਦਿਸ਼ਟ ਕੀਤਾ ਗਿਆ ਹੈ ਜੋ ਇਸ ਤਰ੍ਹਾਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ:

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

 ਸਾਰੇ ਵਿਕਲਪਾਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਮੁੱਲਾਂ ਅਤੇ ਅਰਥਾਂ ਬਾਰੇ ਪੂਰੀ ਜਾਣਕਾਰੀ ਲਈ, ਵੇਖੋ
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage)।

 ### ਇੱਕ ਕਨੈਕਸ਼ਨ ਬਣਾਓ
 ਇੱਕ ਨਵਾਂ ਕਨੈਕਸ਼ਨ ਬਣਾਉਣ ਲਈ, ਸਾਨੂੰ ਇਹਨਾਂ ਵਿੱਚੋਂ ਇੱਕ JSON ਆਬਜੈਕਟ ਦੀ ਲੋੜ ਹੈ।

 ਅਸੀਂ ਇੱਕ ਇੰਟਰਐਕਟਿਵ ਤੌਰ 'ਤੇ ਬਣਾ ਸਕਦੇ ਹਾਂ, ਜਾਂ ਇੱਕ ਫਾਈਲ ਜਾਂ JSON ਸ਼ਾਬਦਿਕ ਦੁਆਰਾ ਸਪਲਾਈ ਕਰ ਸਕਦੇ ਹਾਂ:

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

 ### ਕਨੈਕਸ਼ਨਾਂ ਦੀ ਸੂਚੀ ਬਣਾਓ
 ਉਪਲਬਧ ਕਨੈਕਸ਼ਨਾਂ ਦੀ ਸੂਚੀ ਬਣਾਓ:

    mo connect -l
    mo connect --list

 ### ਡੰਪ ਕਨੈਕਸ਼ਨ JSON ਸੰਰਚਨਾ
 ਇੱਕ ਕੁਨੈਕਸ਼ਨ ਲਈ ਪੂਰੀ JSON ਸੰਰਚਨਾ ਦਿਖਾਓ। **ਚੇਤਾਵਨੀ** ਇਹ ਕੁੰਜੀਆਂ ਅਤੇ ਭੇਦ stdout ਲਈ ਪ੍ਰਿੰਟ ਕਰੇਗਾ।

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ਇੱਕ ਕਨੈਕਸ਼ਨ ਹਟਾਓ
 ਇੱਕ ਸਿੰਗਲ ਕਨੈਕਸ਼ਨ ਹਟਾਓ:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### ਸਾਰੇ ਕਨੈਕਸ਼ਨ ਹਟਾਓ
 ਸਾਰੇ ਕਨੈਕਸ਼ਨ ਹਟਾਓ:

    mo connect -R
    mo connect --remove-all

 ## ਸਟੋਰੇਜ ਨਾਲ ਕੰਮ ਕਰਨਾ
 ਇੱਕ ਵਾਰ ਜਦੋਂ ਤੁਸੀਂ ਕੁਝ ਕੁਨੈਕਸ਼ਨ ਬਣਾ ਲੈਂਦੇ ਹੋ, ਤਾਂ `ls` , `cp` , `rm` , `meta` ਅਤੇ `mirror` ਓਪਰੇਸ਼ਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।
 ਉਹਨਾਂ ਨਾਲ ਕੰਮ ਕਰਨ ਲਈ।

 ਹਰੇਕ ਫਾਈਲ ਮਾਰਗ ਜੋ ਤੁਸੀਂ ਕਮਾਂਡ ਨੂੰ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹੋ, ਕੁਨੈਕਸ਼ਨ ਦੇ ਨਾਮ ਨਾਲ ਅਗੇਤਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ
 ਇਹ ਦਾ ਹਵਾਲਾ ਦਿੰਦਾ ਹੈ. ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਉਦਾਹਰਨਾਂ ਵਿੱਚ, ਅਸੀਂ ਮੰਨਦੇ ਹਾਂ ਕਿ `conn1` ਅਤੇ `conn2` ਨਾਮ ਦੇ ਦੋ ਕਨੈਕਸ਼ਨ ਮੌਜੂਦ ਹਨ

 ### ਫਾਈਲਾਂ ਦੀ ਸੂਚੀ ਬਣਾਓ
 ਇੱਕ ਸੂਚੀ ਕਮਾਂਡ ਦਾ ਆਉਟਪੁੱਟ JSON ਵਸਤੂਆਂ ਦੀ ਇੱਕ ਲੜੀ ਹੈ, ਇੱਕ ਪ੍ਰਤੀ ਲਾਈਨ, ਫਾਈਲਾਂ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ
 ਪਾਇਆ। ਇਹਨਾਂ ਵਸਤੂਆਂ ਵਿੱਚ ਇੱਕ `name` ਅਤੇ `type` , ਅਤੇ ਸੰਭਵ ਤੌਰ 'ਤੇ ਹੋਰ ਖੇਤਰ ਹੋਣਗੇ।

    mo ls conn1/some/path

 ਫਾਈਲਾਂ ਨੂੰ ਵਾਰ-ਵਾਰ ਸੂਚੀਬੱਧ ਕਰੋ:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **ਏਨਕ੍ਰਿਪਟਡ ਸਟੋਰੇਜ ਨੋਟ**: ਏਨਕ੍ਰਿਪਟਡ ਕਨੈਕਸ਼ਨਾਂ ਲਈ ਮੁੜ-ਵਰਤੀ ਸੂਚੀਕਰਨ ਅਜੇ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ।
 ਤੁਸੀਂ ਇੱਕ ਸਮੇਂ ਵਿੱਚ ਫਾਈਲਾਂ ਦੀ ਸਿਰਫ਼ ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਨੂੰ ਸੂਚੀਬੱਧ ਕਰ ਸਕਦੇ ਹੋ।

 ਫਾਈਲਾਂ ਨੂੰ ਜ਼ੁਬਾਨੀ ਤੌਰ 'ਤੇ ਸੂਚੀਬੱਧ ਕਰੋ (ਪ੍ਰੀਟੀ-ਪ੍ਰਿੰਟ JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ਫਾਈਲਾਂ ਨੂੰ ਵਾਰ-ਵਾਰ ਅਤੇ ਜ਼ੁਬਾਨੀ ਤੌਰ 'ਤੇ ਸੂਚੀਬੱਧ ਕਰੋ:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` ਕਮਾਂਡ ਲਈ ਮਦਦ ਵੇਖੋ, ਸਾਰੇ ਵਿਕਲਪਾਂ ਦਾ ਵਰਣਨ ਕਰਦਾ ਹੈ:

    mo ls -h
    mo ls --help

 ### stdout ਲਈ ਇੱਕ ਫਾਈਲ ਲਿਖੋ
 `cat` ਕਮਾਂਡ ਇੱਕ ਫਾਈਲ ਨੂੰ stdout ਵਿੱਚ ਪ੍ਰਿੰਟ ਕਰੇਗੀ:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 ਸੱਚੀ UNIX ਭਾਵਨਾ ਵਿੱਚ *(ਫਿਰ ਵੀ ਨਿਸ਼ਚਤ ਤੌਰ 'ਤੇ ਅਭਿਆਸ ਨਹੀਂ!)* ਮੋਬਾਈਲਟੋ ਦੀ `cat` ਕਮਾਂਡ **ਕੋਈ ਵਿਕਲਪ ਨਹੀਂ ਲੈਂਦਾ**
 ਮਦਦਗਾਰ ਜਾਣਕਾਰੀ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਨ ਲਈ `-h` / `--help` ਤੋਂ ਇਲਾਵਾ।

 ### ਫਾਈਲਾਂ ਦੀ ਨਕਲ ਕਰੋ
 ਇੱਕ ਫਾਈਲ ਨੂੰ ਇੱਕ ਮੋਬਾਈਲ ਤੋਂ ਦੂਜੇ ਵਿੱਚ ਕਾਪੀ ਕਰੋ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ਇੱਕ ਸਿੰਗਲ ਫਾਈਲ ਨੂੰ ਇੱਕ ਮੋਬਾਈਲ ਤੋਂ ਦੂਜੀ ਵਿੱਚ ਕਾਪੀ ਕਰੋ, ਮੰਜ਼ਿਲ 'ਤੇ ਇਸਦਾ ਨਾਮ ਬਦਲੋ:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 ਵਾਰ-ਵਾਰ ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਦੀ ਨਕਲ ਕਰੋ:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` ਕਮਾਂਡ ਲਈ ਮਦਦ ਵੇਖੋ, ਸਾਰੇ ਵਿਕਲਪਾਂ ਦਾ ਵਰਣਨ ਕਰਦਾ ਹੈ:

    mo cp -h
    mo cp --help

 ਨੋਟ: ਫਾਈਲ ਕਾਪੀ ਕਰਨਾ ਬਹੁਤ ਤੇਜ਼ ਨਹੀਂ ਹੈ, ਕਿਉਂਕਿ ਇਸ ਨੂੰ ਵਰਤਮਾਨ ਵਿੱਚ ਇੱਕ ਵਿਚੋਲੇ ਅਸਥਾਈ ਫਾਈਲ ਦੀ ਲੋੜ ਹੈ।

 ### ਫਾਈਲਾਂ ਮਿਟਾਓ
 ਇੱਕ ਸਿੰਗਲ ਫਾਈਲ ਮਿਟਾਓ:

    mo rm conn1/some/file.txt

 ਇੱਕ ਸਿੰਗਲ ਫਾਈਲ ਨੂੰ ਮਿਟਾਓ ਅਤੇ ਕਿਸੇ ਵੀ ਗਲਤੀ ਬਾਰੇ ਸ਼ਿਕਾਇਤ ਨਾ ਕਰੋ:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਮਿਟਾਓ:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਮਿਟਾਓ ਅਤੇ ਕਿਸੇ ਵੀ ਤਰੁੱਟੀ ਬਾਰੇ ਸ਼ਿਕਾਇਤ ਨਾ ਕਰੋ:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### ਮੈਟਾਡੇਟਾ ਦੇਖੋ
 ਪੂਰੀ ਫ਼ਾਈਲ ਨੂੰ ਡਾਊਨਲੋਡ ਕੀਤੇ ਬਿਨਾਂ, ਕਿਸੇ ਫ਼ਾਈਲ ਲਈ ਮੈਟਾਡੇਟਾ ਜਾਣਨਾ ਅਕਸਰ ਲਾਭਦਾਇਕ ਹੁੰਦਾ ਹੈ।

 Mobiletto ਨਾਮ ਅਤੇ ਕਿਸਮ ਦੇ ਇਲਾਵਾ, ਫਾਈਲ ਦੇ ਆਕਾਰ ਅਤੇ ਆਖਰੀ ਸੋਧੇ ਹੋਏ ਸਮੇਂ ਦੀ ਰਿਪੋਰਟ ਕਰਨ ਦੇ ਯੋਗ ਹੈ।

 ਮੈਟਾਡੇਟਾ ਦੇਖਣ ਲਈ:

    mo meta conn1/some/file.txt

 ### ਮਿਰਰ ਡਾਇਰੈਕਟਰੀਆਂ
 ਮਿਰਰਿੰਗ `cp` ਦੇ ਇੱਕ ਵਿਸ਼ੇਸ਼ ਕੇਸ ਤੋਂ ਵੱਧ ਹੈ, ਇਹ ਇੱਕ ਵੱਖਰੀ ਮੋਬਾਈਲਟੋ ਕਮਾਂਡ ਹੈ ਜੋ ਸਮੇਟਦੀ ਹੈ
 ਕਾਪੀ ਕਾਰਵਾਈ; ਇਹ ਉਦੋਂ ਵੀ ਜਾਰੀ ਰਹਿੰਦਾ ਹੈ ਜਦੋਂ ਗਲਤੀਆਂ ਹੁੰਦੀਆਂ ਹਨ, ਅਤੇ ਸਫਲਤਾਵਾਂ ਅਤੇ ਗਲਤੀਆਂ ਦੀ ਗਿਣਤੀ ਨੂੰ ਟਰੈਕ ਕਰਦਾ ਹੈ।

 conn1 ਤੋਂ conn2 ਤੱਕ ਹਰ ਚੀਜ਼ ਨੂੰ ਪ੍ਰਤੀਬਿੰਬਤ ਕਰਨ ਲਈ:

    mo mirror conn1 conn2

 ਸਬ-ਡਾਇਰੈਕਟਰੀ ਨੂੰ ਪ੍ਰਤੀਬਿੰਬਤ ਕਰਨ ਲਈ:

    mo mirror conn1/some/subdir conn2

 ਇੱਕ ਸਬ-ਡਾਇਰੈਕਟਰੀ ਨੂੰ ਦੂਜੀ ਸਬ-ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਮਿਰਰ ਕਰਨ ਲਈ:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
