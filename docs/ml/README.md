mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) എന്നതിനായുള്ള ഒരു കമാൻഡ്-ലൈൻ ഇന്റർഫേസ് (CLI)
 സംഭരണം.

 Mobiletto, Amazon S3, Backblaze B2, ലോക്കൽ ഫയൽസിസ്റ്റം എന്നിവയിലേക്കുള്ള കണക്ഷനുകളെ പിന്തുണയ്ക്കുന്നു.

 # ഇത് മറ്റൊരു ഭാഷയിൽ വായിക്കുക
 ഈ README.md പ്രമാണം [hokeylization](https://github.com/cobbzilla/hokeylization) വഴി വിവർത്തനം ചെയ്‌തു
 **[Google Translate പിന്തുണയ്ക്കുന്ന എല്ലാ ഭാഷകളും](https://cloud.google.com/translate/docs/languages)!**

 ഇത് തികഞ്ഞതല്ലെന്ന് എനിക്ക് ഉറപ്പുണ്ട്, പക്ഷേ ഇത് ഒന്നിനും കൊള്ളാത്തതായിരിക്കുമെന്ന് ഞാൻ പ്രതീക്ഷിക്കുന്നു!

 [🇸🇦 അറബിക്](../ar/README.md)
 [🇧🇩 ബംഗാളി](../bn/README.md)
 [🇩🇪 ജർമ്മൻ](../de/README.md)
 [🇺🇸 ഇംഗ്ലീഷ്](../en/README.md)
 [🇪🇸 സ്പാനിഷ്](../es/README.md)
 [🇫🇷 ഫ്രഞ്ച്](../fr/README.md)
 [🇹🇩 ഹൗസ](ഡോക്‌സ്/ഹ/README.md)
 [🇮🇳 ഹിന്ദി](../hi/README.md)
 [🇮🇩 ഇന്തോനേഷ്യൻ](../id/README.md)
 [🇮🇹 ഇറ്റാലിയൻ](../it/README.md)
 [🇯🇵 ജാപ്പനീസ്](../ja/README.md)
 [🇰🇷 കൊറിയൻ](../ko/README.md)
 [🇮🇳 മറന്തി](../mr/README.md)
 [🇵🇱 പോളിഷ്](../pl/README.md)
 [🇧🇷 പോർച്ചുഗീസ്](../pt/README.md)
 [🇷🇺 റഷ്യൻ](../ru/README.md)
 [🇰🇪 സ്വാഹിലി](../sw/README.md)
 [🇵🇭 ടാഗലോഗ്](../tl/README.md)
 [🇹🇷 ടർക്കിഷ്](../tr/README.md)
 [🇵🇰 ഉറുദു](../ur/README.md)
 [🇻🇳 വിയറ്റ്നാമീസ്](../vi/README.md)
 [🇨🇳 ചൈനീസ്](../zh/README.md)


 **[📚 ... എല്ലാ ഭാഷകളും ...](../README.md)**
 ----

 ### README-ന്റെ ഈ വിവർത്തനത്തിൽ എന്തെങ്കിലും പ്രശ്നമുണ്ടോ?
 യഥാർത്ഥ [README]ന്റെ ഈ പ്രത്യേക വിവർത്തനം (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 പിഴവുകളുണ്ടാകാം -- *തിരുത്തലുകൾ വളരെ സ്വാഗതം ചെയ്യുന്നു!* ദയവായി ഒരു [GitHub-ൽ പുൾ അഭ്യർത്ഥന](https://github.com/cobbzilla/mobiletto-cli/pulls),
 അല്ലെങ്കിൽ നിങ്ങൾക്ക് അത് ചെയ്യാൻ താൽപ്പര്യമില്ലെങ്കിൽ, [ഒരു പ്രശ്നം തുറക്കുക](https://github.com/cobbzilla/mobiletto-cli/issues)

 ഒരു വിവർത്തനത്തെക്കുറിച്ച് നിങ്ങൾ ഒരു പുതിയ GitHub പ്രശ്നം സൃഷ്ടിക്കുമ്പോൾ, ദയവായി ചെയ്യുക:
 * പേജ് URL ഉൾപ്പെടുത്തുക (ബ്രൗസർ വിലാസ ബാറിൽ നിന്ന് പകർത്തുക/ഒട്ടിക്കുക)
 * തെറ്റായ വാചകം ഉൾപ്പെടുത്തുക (ബ്രൗസറിൽ നിന്ന് പകർത്തുക/ഒട്ടിക്കുക)
 * എന്താണ് തെറ്റെന്ന് ദയവായി വിവരിക്കുക -- വിവർത്തനം തെറ്റാണോ? ഫോർമാറ്റിംഗ് എങ്ങനെയെങ്കിലും തകർന്നോ?
 * ഒരു മികച്ച വിവർത്തനത്തിനുള്ള നിർദ്ദേശം അല്ലെങ്കിൽ വാചകം എങ്ങനെ ശരിയായി ഫോർമാറ്റ് ചെയ്യണം എന്ന നിർദ്ദേശം ദയവായി വാഗ്ദാനം ചെയ്യുക
 * **നന്ദി!**

 # ഉള്ളടക്കം
 * [ഉറവിടം](#ഉറവിടം)
 * [പിന്തുണയും ധനസഹായവും](#പിന്തുണയും ധനസഹായവും)
 * [ഇൻസ്റ്റാളേഷനും ഉപയോഗവും](#ഇൻസ്റ്റാളേഷനും ഉപയോഗവും)
 * [npm പാക്കേജ്](#npm-പാക്കേജ്)
 * [ഉറവിടത്തിൽ നിന്ന്](#ഉറവിടത്തിൽ നിന്ന്)
 * [കണക്ഷനുകൾ](#കണക്ഷനുകൾ)
 * [ഒരു കണക്ഷൻ സൃഷ്‌ടിക്കുക](#ക്രിയേറ്റ്-എ-കണക്ഷൻ)
 * [ലിസ്‌റ്റ് കണക്ഷനുകൾ](#ലിസ്റ്റ്-കണക്ഷനുകൾ)
 * [ഡമ്പ് കണക്ഷൻ JSON കോൺഫിഗറേഷൻ](#Dump-connection-JSON-config)
 * [ഒരു കണക്ഷൻ നീക്കം ചെയ്യുക](#Remove-a-connection)
 * [എല്ലാ കണക്ഷനുകളും നീക്കം ചെയ്യുക](#Remove-all-connections)
 * [സ്‌റ്റോറേജിനൊപ്പം പ്രവർത്തിക്കുന്നു](#സ്‌റ്റോറേജിനൊപ്പം പ്രവർത്തിക്കുന്നു)
 * [ലിസ്റ്റ് ഫയലുകൾ](#ലിസ്റ്റ് ഫയലുകൾ)
 * [stdout-ലേക്ക് ഒരു ഫയൽ എഴുതുക](#Write-a-file-to-stdout)
 * [ഫയലുകൾ പകർത്തുക](#പകർപ്പ്-ഫയലുകൾ)
 * [ഫയലുകൾ ഇല്ലാതാക്കുക](#Delete-files)
 * [മെറ്റാഡാറ്റ കാണുക](#വ്യൂ-മെറ്റാഡാറ്റ)
 * [മിറർ ഡയറക്ടറികൾ](#മിറർ-ഡയറക്‌ടറികൾ)

 ### ഉറവിടം
 * [Mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## പിന്തുണയും ധനസഹായവും
 ഞാൻ ഒരു പ്രൊഫഷണൽ ഓപ്പൺ സോഴ്‌സ് സോഫ്റ്റ്‌വെയർ ഡെവലപ്പർ ആകാൻ ശ്രമിക്കുന്നു. ഞാൻ ജോലി ചെയ്തിട്ടുണ്ട്
 വർഷങ്ങളോളം സോഫ്‌റ്റ്‌വെയർ വ്യവസായത്തിൽ, ഞാൻ വിജയകരമായ കമ്പനികൾ ആരംഭിക്കുകയും അവ പൊതു കമ്പനികൾക്ക് വിൽക്കുകയും ചെയ്തു.
 അടുത്തിടെ എനിക്ക് ജോലി നഷ്‌ടപ്പെട്ടു, എനിക്ക് മറ്റ് ജോലികളൊന്നും നിരത്തിയിട്ടില്ല

 അതിനാൽ ഞാൻ സഹായകരമായ സോഫ്‌റ്റ്‌വെയർ എഴുതാൻ ശ്രമിക്കുകയും അത് പ്രവർത്തിക്കുന്നുണ്ടോയെന്ന് നോക്കുകയും ചെയ്യും

 ഈ സോഫ്‌റ്റ്‌വെയർ ഉപയോഗിക്കുന്നത് നിങ്ങൾ ആസ്വദിക്കുന്നുവെങ്കിൽ, അതിനോട് പോലും ഞാൻ ആത്മാർത്ഥമായി നന്ദിയുള്ളവനായിരിക്കും
 ഏറ്റവും ചെറിയ [Patreon വഴിയുള്ള പ്രതിമാസ സംഭാവന](https://www.patreon.com/cobbzilla)

 *നന്ദി!*

 ## ഇൻസ്റ്റലേഷനും ഉപയോഗവും
 നിങ്ങൾക്ക് npm വഴിയോ ഉറവിടത്തിൽ നിന്ന് നേരിട്ടോ `mobiletto-cli` ഇൻസ്റ്റാൾ ചെയ്യാനും പ്രവർത്തിപ്പിക്കാനും കഴിയും.

 ### npm പാക്കേജ്
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### ഉറവിടത്തിൽ നിന്ന്
 ഉറവിടത്തിൽ നിന്ന് പ്രവർത്തിപ്പിക്കാൻ, നിങ്ങൾക്ക് nodejs v16+ ഉം നൂലും ആവശ്യമാണ്

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## കണക്ഷനുകൾ
 എല്ലാ mobiletto സംഭരണവും ഒരു കണക്ഷനിലൂടെ ആക്സസ് ചെയ്യപ്പെടുന്നു.

 Mobiletto നിലവിൽ ലോക്കൽ ഫയൽസിസ്റ്റം സ്റ്റോറേജിലേക്കും Amazon S3 ബക്കറ്റുകളിലേക്കുമുള്ള കണക്ഷനുകളെ പിന്തുണയ്ക്കുന്നു.

 ഇതുപോലെ കാണപ്പെടുന്ന ഒരു JSON ഒബ്‌ജക്‌റ്റാണ് കണക്ഷനുകൾ വ്യക്തമാക്കുന്നത്:

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

 എല്ലാ ഓപ്ഷനുകളെക്കുറിച്ചും അവയുടെ മൂല്യങ്ങളെയും അർത്ഥങ്ങളെയും കുറിച്ചുള്ള പൂർണ്ണ വിവരങ്ങൾക്ക്, കാണുക
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### ഒരു കണക്ഷൻ സൃഷ്ടിക്കുക
 ഒരു പുതിയ കണക്ഷൻ സൃഷ്ടിക്കാൻ, ഞങ്ങൾക്ക് ഈ JSON ഒബ്‌ജക്‌റ്റുകളിലൊന്ന് ആവശ്യമാണ്.

 ഞങ്ങൾക്ക് സംവേദനാത്മകമായി ഒരെണ്ണം സൃഷ്‌ടിക്കാം, അല്ലെങ്കിൽ ഒരു ഫയൽ മുഖേന അല്ലെങ്കിൽ JSON അക്ഷരാർത്ഥത്തിൽ ഒന്ന് വിതരണം ചെയ്യാം:

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

 ### കണക്ഷനുകൾ ലിസ്റ്റ് ചെയ്യുക
 ലഭ്യമായ കണക്ഷനുകൾ ലിസ്റ്റ് ചെയ്യുക:

    mo connect -l
    mo connect --list

 ### ഡംപ് കണക്ഷൻ JSON കോൺഫിഗറേഷൻ
 ഒരു കണക്ഷനുള്ള മുഴുവൻ JSON കോൺഫിഗറേഷനും കാണിക്കുക. **മുന്നറിയിപ്പ്** ഇത് stdout-ലേക്ക് കീകളും രഹസ്യങ്ങളും പ്രിന്റ് ചെയ്യും.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ഒരു കണക്ഷൻ നീക്കം ചെയ്യുക
 ഒരൊറ്റ കണക്ഷൻ നീക്കം ചെയ്യുക:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### എല്ലാ കണക്ഷനുകളും നീക്കം ചെയ്യുക
 എല്ലാ കണക്ഷനുകളും നീക്കം ചെയ്യുക:

    mo connect -R
    mo connect --remove-all

 ## സംഭരണവുമായി പ്രവർത്തിക്കുന്നു
 നിങ്ങൾ ചില കണക്ഷനുകൾ സൃഷ്ടിച്ചുകഴിഞ്ഞാൽ, ` `ls` , `cp` , `rm` , `meta` , `mirror` പ്രവർത്തനങ്ങൾ ഉപയോഗിക്കുക
 അവരോടൊപ്പം പ്രവർത്തിക്കാൻ.

 ഒരു കമാൻഡിലേക്ക് നിങ്ങൾ നൽകുന്ന എല്ലാ ഫയൽ പാതയും കണക്ഷന്റെ പേരിനൊപ്പം പ്രിഫിക്സ് ചെയ്തിരിക്കണം
 അത് സൂചിപ്പിക്കുന്നു. ചുവടെയുള്ള ഉദാഹരണങ്ങളിൽ, `conn1` , `conn2` എന്നിങ്ങനെ രണ്ട് കണക്ഷനുകൾ നിലവിലുണ്ടെന്ന് ഞങ്ങൾ അനുമാനിക്കുന്നു

 ### ഫയലുകൾ ലിസ്റ്റ് ചെയ്യുക
 ഒരു ലിസ്റ്റ് കമാൻഡിന്റെ ഔട്ട്‌പുട്ട് JSON ഒബ്‌ജക്‌റ്റുകളുടെ ഒരു ശ്രേണിയാണ്, ഓരോ വരിയിലും ഒന്ന്, ഫയലുകളെ പ്രതിനിധീകരിക്കുന്നു
 കണ്ടെത്തി. ഈ ഒബ്‌ജക്റ്റുകൾക്ക് ഒരു `name` `type` , കൂടാതെ മറ്റ് ഫീൽഡുകളും.

    mo ls conn1/some/path

 ഫയലുകൾ ആവർത്തിച്ച് ലിസ്റ്റ് ചെയ്യുക:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **എൻക്രിപ്റ്റ് ചെയ്ത സ്റ്റോറേജ് നോട്ട്**: എൻക്രിപ്റ്റ് ചെയ്ത കണക്ഷനുകൾക്കായി ആവർത്തന ലിസ്റ്റിംഗ് ഇതുവരെ പിന്തുണയ്ക്കുന്നില്ല.
 നിങ്ങൾക്ക് ഒരു സമയം ഫയലുകളുടെ ഒരു ഡയറക്ടറി മാത്രമേ ലിസ്റ്റുചെയ്യാനാകൂ.

 ഫയലുകൾ വാചാലമായി ലിസ്റ്റ് ചെയ്യുക (പ്രെറ്റി-പ്രിന്റ് JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ഫയലുകൾ ആവർത്തനപരമായും വാചാലമായും പട്ടികപ്പെടുത്തുക:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` കമാൻഡിനായുള്ള സഹായം കാണുക, എല്ലാ ഓപ്ഷനുകളും വിവരിക്കുന്നു:

    mo ls -h
    mo ls --help

 ### stdout-ലേക്ക് ഒരു ഫയൽ എഴുതുക
 `cat` കമാൻഡ് ഒരു ഫയൽ stdout-ലേക്ക് പ്രിന്റ് ചെയ്യും:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 യഥാർത്ഥ UNIX സ്പിരിറ്റിൽ *(എന്നിട്ടും തീർച്ചയായും പരിശീലനമല്ല!)* mobiletto-യുടെ `cat` കമാൻഡ് **ഓപ്‌ഷനുകളൊന്നും എടുക്കുന്നില്ല**
 സഹായകരമായ വിവരങ്ങൾ പ്രദർശിപ്പിക്കുന്നതിന് `-h` / `--help` ഒഴികെ.

 ### ഫയലുകൾ പകർത്തുക
 ഒരൊറ്റ ഫയൽ ഒരു മൊബൈലിൽ നിന്ന് മറ്റൊന്നിലേക്ക് പകർത്തുക:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ഒരൊറ്റ ഫയൽ ഒരു മൊബൈലിൽ നിന്ന് മറ്റൊന്നിലേക്ക് പകർത്തുക, ലക്ഷ്യസ്ഥാനത്ത് അതിന്റെ പേര് മാറ്റുക:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 ഒരു ഡയറക്‌ടറി ആവർത്തിച്ച് പകർത്തുക:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` കമാൻഡിനായുള്ള സഹായം കാണുക, എല്ലാ ഓപ്ഷനുകളും വിവരിക്കുന്നു:

    mo cp -h
    mo cp --help

 ശ്രദ്ധിക്കുക: ഫയൽ പകർത്തൽ വളരെ വേഗത്തിലല്ല, കാരണം ഇതിന് നിലവിൽ ഒരു ഇടനില താൽക്കാലിക ഫയൽ ആവശ്യമാണ്.

 ### ഫയലുകൾ ഇല്ലാതാക്കുക
 ഒരൊറ്റ ഫയൽ ഇല്ലാതാക്കുക:

    mo rm conn1/some/file.txt

 ഒരൊറ്റ ഫയൽ ഇല്ലാതാക്കുക, പിശകുകളെക്കുറിച്ച് പരാതിപ്പെടരുത്:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ഒരു ഡയറക്ടറി ഇല്ലാതാക്കുക:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ഒരു ഡയറക്‌ടറി ഇല്ലാതാക്കുക, എന്തെങ്കിലും പിശകുകളെക്കുറിച്ച് പരാതിപ്പെടരുത്:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### മെറ്റാഡാറ്റ കാണുക
 മുഴുവൻ ഫയലും ഡൗൺലോഡ് ചെയ്യാതെ തന്നെ ഒരു ഫയലിന്റെ മെറ്റാഡാറ്റ അറിയുന്നത് പലപ്പോഴും ഉപയോഗപ്രദമാണ്.

 പേരും തരവും കൂടാതെ, ഫയൽ വലുപ്പവും അവസാനം പരിഷ്കരിച്ച സമയവും റിപ്പോർട്ടുചെയ്യാൻ Mobiletto-യ്ക്ക് കഴിയും.

 മെറ്റാഡാറ്റ കാണുന്നതിന്:

    mo meta conn1/some/file.txt

 ### മിറർ ഡയറക്ടറികൾ
 മിററിംഗ് എന്നത് `cp` യുടെ ഒരു പ്രത്യേക കേസിനേക്കാൾ കൂടുതലാണ്, ഇത് ഒരു പ്രത്യേക mobiletto കമാൻഡ് ആണ്.
 പകർപ്പ് പ്രവർത്തനം; പിശകുകൾ സംഭവിക്കുമ്പോഴും അത് തുടരുകയും വിജയങ്ങളുടെയും പിശകുകളുടെയും എണ്ണം ട്രാക്കുചെയ്യുകയും ചെയ്യുന്നു.

 conn1 മുതൽ conn2 വരെ എല്ലാം മിറർ ചെയ്യാൻ:

    mo mirror conn1 conn2

 ഒരു ഉപഡയറക്‌ടറി മിറർ ചെയ്യാൻ:

    mo mirror conn1/some/subdir conn2

 ഒരു ഉപഡയറക്‌ടറി മറ്റൊരു ഉപഡയറക്‌ടറിയിലേക്ക് മിറർ ചെയ്യാൻ:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
