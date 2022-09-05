mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) အတွက် command-line interface (CLI)
 သိုလှောင်မှု။

 Mobiletto သည် Amazon S3၊ Backblaze B2 နှင့် ဒေသတွင်း ဖိုင်စနစ်များသို့ ချိတ်ဆက်မှုများကို ပံ့ပိုးပေးသည်။

 # ဤအရာကို အခြားဘာသာစကားဖြင့် ဖတ်ပါ။
 ဤ README.md စာတမ်းကို [hokeylization](https://github.com/cobbzilla/hokeylization) မှတဆင့် ဘာသာပြန်ပြီးပါပြီ၊
 **[Google Translate မှပံ့ပိုးထားသော ဘာသာစကားတိုင်း](https://cloud.google.com/translate/docs/languages)!**

 မပြည့်စုံဘူးဆိုတာ သေချာပါတယ်၊ ဒါပေမယ့် ဘာမှထက် ပိုကောင်းမယ်လို့ မျှော်လင့်ပါတယ်။

 [🇸🇦 အာရဗီ](../ar/README.md)
 [🇧🇩 ဘင်္ဂါလီ](../bn/README.md)
 [🇩🇪 ဂျာမန်](../de/README.md)
 [🇺🇸 အင်္ဂလိပ်](../en/README.md)
 [🇪🇸 စပိန်](../es/README.md)
 [🇫🇷 ပြင်သစ်](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 ဟိန္ဒီ](../hi/README.md)
 [🇮🇩 အင်ဒိုနီးရှား](../id/README.md)
 [🇮🇹 အီတလီ](../it/README.md)
 [🇯🇵 ဂျပန်](../ja/README.md)
 [🇰🇷 ကိုးရီးယား](../ko/README.md)
 [🇮🇳 မာရသီ](../mr/README.md)
 [🇵🇱 ပိုလန်](../pl/README.md)
 [🇧🇷 ပေါ်တူဂီ](../pt/README.md)
 [🇷🇺 ရုရှား](../ru/README.md)
 [🇰🇪 ဆွာဟီလီ](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 တူရကီ](../tr/README.md)
 [🇵🇰 အူရဒူ](../ur/README.md)
 [🇻🇳 ဗီယက်နမ်](../vi/README.md)
 [🇨🇳 တရုတ်](../zh/README.md)


 **[📚 ... ဘာသာစကားအားလုံး ...](../README.md)**
 ----

 ### ဤ README ဘာသာပြန်ဆိုရာတွင် ပြဿနာရှိပါသလား။
 မူရင်း [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md ၏ အထူးဘာသာပြန်)
 ချို့ယွင်းချက်ရှိနိုင်သည် -- *ပြင်ဆင်မှုများသည် အလွန်ကြိုဆိုပါသည်!* ကျေးဇူးပြု၍ [GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls) ကို ပေးပို့ပါ
 သို့မဟုတ် ထိုသို့လုပ်ရန် အဆင်မပြေပါက၊ [ပြဿနာတစ်ခုကို ဖွင့်ပါ](https://github.com/cobbzilla/mobiletto-cli/issues)

 ဘာသာပြန်ခြင်းဆိုင်ရာ GitHub ပြဿနာအသစ်တစ်ခုကို သင်ဖန်တီးသောအခါ၊ ကျေးဇူးပြု၍ လုပ်ဆောင်ပါ။
 * စာမျက်နှာ URL ကိုထည့်သွင်းပါ (ဘရောက်ဆာလိပ်စာဘားမှကူးယူ / ကူးထည့်ပါ)
 * မှားယွင်းသော စာသားအတိအကျကို ထည့်သွင်းပါ (ဘရောက်ဆာမှ ကော်ပီ/ကူးထည့်ပါ)
 * အမှားကို ဖော်ပြပါ- ဘာသာပြန်မှု မှားနေပါသလား။ formatting က တစ်နည်းနည်းနဲ့ ပျက်နေပါသလား။
 * ပိုမိုကောင်းမွန်သော ဘာသာပြန်ဆိုမှု သို့မဟုတ် စာသားကို မှန်ကန်စွာ ဖော်မတ်ထားသင့်ပုံကို ကျေးဇူးပြု၍ အကြံပြုတင်ပြပါ။
 * **ကျေးဇူးတင်ပါတယ်!**

 # မာတိကာ
 * [အရင်းအမြစ်](#အရင်းအမြစ်)
 * [ပံ့ပိုးမှုနှင့် ရန်ပုံငွေ](#ပံ့ပိုးမှုနှင့် ရန်ပုံငွေ)
 * [တပ်ဆင်ခြင်းနှင့် အသုံးပြုမှု](#ထည့်သွင်းခြင်းနှင့် အသုံးပြုခြင်း)
 * [npm ပက်ကေ့ဂျ်](#npm-ပက်ကေ့ဂျ်)
 * [အရင်းအမြစ်မှ](#From-ရင်းမြစ်)
 * [ချိတ်ဆက်မှုများ](#ချိတ်ဆက်မှုများ)
 * [ချိတ်ဆက်မှုတစ်ခုဖန်တီးပါ](#Create-a-connection)
 * [ချိတ်ဆက်မှုများစာရင်း](#စာရင်းချိတ်ဆက်မှုများ)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [ချိတ်ဆက်မှုကို ဖယ်ရှားရန်](#Remove-a-connection)
 * [ချိတ်ဆက်မှုအားလုံးကို ဖယ်ရှားရန်](#Remove-all-connections)
 * [သိုလှောင်မှုဖြင့်လုပ်ဆောင်ခြင်း](#အလုပ်-ဖြင့်-သိုလှောင်မှု)
 * [ဖိုင်များစာရင်း](#စာရင်းဖိုင်များ)
 * [stdout သို့ ဖိုင်တစ်ခုရေးပါ](#Write-a-file-to-stdout)
 * [ဖိုင်များကူးယူခြင်း](#Copy-files)
 * [ဖိုင်များကိုဖျက်ရန်](#Delete-files)
 * [မက်တာဒေတာကိုကြည့်ပါ](#View-metadata)
 * [Mirror directories](#Mirror-directories)

 ### အရင်းအမြစ်
 * [GitHub ရှိ mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm on mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 ## ပံ့ပိုးမှုနှင့် ရန်ပုံငွေ
 ပရော်ဖက်ရှင်နယ် open source software developer တစ်ယောက်ဖြစ်ဖို့ ကြိုးစားနေပါတယ်။ ကျွန်တော် အလုပ်လုပ်ဖူးပါတယ်။
 ဆော့ဖ်ဝဲလ်စက်မှုလုပ်ငန်းကို နှစ်အတော်ကြာအောင် အောင်မြင်တဲ့ ကုမ္ပဏီတွေကို စတင်ခဲ့ပြီး အများပိုင်ကုမ္ပဏီတွေကို ရောင်းချခဲ့ပါတယ်။
 မကြာသေးမီက ကျွန်တော် အလုပ်ပြုတ်သွားခဲ့ပြီး အခြားအလုပ်များ တန်းစီနေခြင်းမရှိပါ။

 ဒါကြောင့် အသုံးဝင်တဲ့ ဆော့ဖ်ဝဲလ်ကို ရေးပြီး စမ်းကြည့်မယ်။

 ဒီဆော့ဝဲလ်ကို သုံးရတာကို နှစ်သက်တယ်ဆိုရင်တော့ ဒီဆော့ဖ်ဝဲလ်လေးကိုတောင် ကျေးဇူးတင်မိမှာပါ။
 အသေးငယ်ဆုံး [Patreon မှတစ်ဆင့် လစဉ်ပံ့ပိုးကူညီမှု](https://www.patreon.com/cobbzilla)

 *ကျေးဇူးတင်ပါတယ်!*

 ## တပ်ဆင်ခြင်းနှင့်အသုံးပြုခြင်း။
 npm မှတဆင့် သို့မဟုတ် အရင်းအမြစ်မှ တိုက်ရိုက် `mobiletto-cli` ကို ထည့်သွင်းပြီး လုပ်ဆောင်နိုင်သည်။

 ### npm အထုပ်
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### အရင်းအမြစ်မှ
 အရင်းအမြစ်မှလည်ပတ်ရန်၊ nodejs v16+ နှင့် yarn လိုအပ်သည်။

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## ချိတ်ဆက်မှုများ
 mobiletto သိုလှောင်မှုအားလုံးကို ချိတ်ဆက်မှုမှတစ်ဆင့် ဝင်ရောက်ကြည့်ရှုသည်။

 Mobiletto သည် လက်ရှိတွင် ဒေသတွင်း ဖိုင်စနစ် သိုလှောင်မှုနှင့် Amazon S3 ပုံးများသို့ ချိတ်ဆက်မှုများကို ပံ့ပိုးပေးသည်။

 ချိတ်ဆက်မှုများကို ဤကဲ့သို့သော JSON အရာဝတ္ထုတစ်ခုက သတ်မှတ်ထားသည်-

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

 ရွေးချယ်စရာများအားလုံးနှင့် ၎င်းတို့၏တန်ဖိုးများနှင့် အဓိပ္ပါယ်များဆိုင်ရာ အသေးစိတ်အချက်အလက်အပြည့်အစုံကို ကြည့်ရှုပါ။
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage)။

 ### ချိတ်ဆက်မှုတစ်ခုဖန်တီးပါ။
 ချိတ်ဆက်မှုအသစ်တစ်ခုဖန်တီးရန်၊ ကျွန်ုပ်တို့သည် ဤ JSON အရာဝတ္ထုများထဲမှ တစ်ခုကို လိုအပ်ပါသည်။

 ကျွန်ုပ်တို့သည် တစ်ခုအား အပြန်အလှန်အကျိုးသက်ရောက်စွာ ဖန်တီးနိုင်သည် သို့မဟုတ် ဖိုင်တစ်ခု သို့မဟုတ် JSON စာသားမှတစ်ဆင့် တစ်စုံတစ်ခုကို ပေးဆောင်နိုင်သည်-

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

 ### ဆက်သွယ်မှုစာရင်း
 ရနိုင်သောချိတ်ဆက်မှုများစာရင်း-

    mo connect -l
    mo connect --list

 ### Dump connection JSON config
 ချိတ်ဆက်မှုအတွက် JSON config အပြည့်အစုံကို ပြပါ။ **သတိပေးချက်** ၎င်းသည် ဒေါသအတွက် သော့များနှင့် လျှို့ဝှက်ချက်များကို ရိုက်နှိပ်ပေးမည်ဖြစ်သည်။

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ချိတ်ဆက်မှုကို ဖယ်ရှားပါ။
 တစ်ခုတည်းသောချိတ်ဆက်မှုကို ဖယ်ရှားပါ-

    mo connect -r my-conn
    mo connect --remove my-conn

 ### ချိတ်ဆက်မှုအားလုံးကို ဖယ်ရှားပါ။
 ချိတ်ဆက်မှုအားလုံးကို ဖယ်ရှားပါ-

    mo connect -R
    mo connect --remove-all

 ## သိုလှောင်မှုဖြင့် လုပ်ဆောင်ခြင်း။
 ချိတ်ဆက်မှုအချို့ကို ဖန်တီးပြီးသည်နှင့် `ls` ၊ `cp` ၊ `rm` ၊ `meta` နှင့် `mirror` လုပ်ဆောင်ချက်များကို အသုံးပြုပါ။
 သူတို့နှင့်အတူအလုပ်လုပ်ရန်။

 အမိန့်ပေးသည့် ဖိုင်လမ်းကြောင်းတိုင်းသည် ချိတ်ဆက်မှု၏အမည်ဖြင့် ရှေ့သွားဖြစ်ရမည်။
 ရည်ညွှန်းသည်။ အောက်ဖော်ပြပါနမူနာများတွင် `conn1` နှင့် `conn2` ဟူ၍ ချိတ်ဆက်မှုနှစ်ခုရှိသည်ဟု ကျွန်ုပ်တို့ယူဆပါသည်။

 ### စာရင်းဖိုင်များ
 list command ၏ output သည် ဖိုင်များကို ကိုယ်စားပြုသည့် JSON objects များဖြစ်ပြီး တစ်ကြောင်းလျှင် တစ်ခုဖြစ်သည်။
 တွေ့တယ်။ ဤအရာဝတ္ထုများတွင် `name` ` နှင့် `type` နှင့် အခြားအကွက်များ ရှိပါမည်။

    mo ls conn1/some/path

 ဖိုင်များကို ထပ်ခါတလဲလဲ စာရင်းပြုစုပါ-

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **ကုဒ်ဝှက်ထားသော သိုလှောင်မှုမှတ်စု**- ကုဒ်ဝှက်ထားသော ချိတ်ဆက်မှုများအတွက် ထပ်ခါထပ်ခါ စာရင်းကို မပံ့ပိုးနိုင်သေးပါ။
 တစ်ကြိမ်လျှင် ဖိုင်လမ်းညွှန်တစ်ခုသာ စာရင်းသွင်းနိုင်ပါသည်။

 ဖိုင်များကို အတိုချုံးပြီး စာရင်းပြုစုပါ (တော်တော်လေး ပုံနှိပ် JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 ဖိုင်များကို ထပ်ခါတလဲလဲနှင့် စကားဖြင့် စာရင်းပြုစုပါ-

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` အမိန့်အတွက် အကူအညီကိုကြည့်ပါ၊ ရွေးချယ်စရာအားလုံးကို ဖော်ပြသည်-

    mo ls -h
    mo ls --help

 ### stdout သို့ ဖိုင်တစ်ခုရေးပါ။
 `cat` အမိန့်သည် stdout သို့ ဖိုင်တစ်ခုကို ပရင့်ထုတ်ပါမည်-

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 စစ်မှန်သော UNIX စိတ်ဓာတ်ဖြင့် *(အလေ့အကျင့်မဟုတ်သေးပါ။)* mobiletto ၏ `cat` အမိန့် ** ရွေးချယ်စရာမရှိပါ**
 အထောက်အကူဖြစ်စေသောအချက်အလက်များကိုပြသရန် `-h` / `--help` မှလွဲ၍ အခြား။

 ### ဖိုင်များကို ကူးယူပါ။
 mobiletto တစ်ခုမှ အခြားဖိုင်တစ်ခုသို့ ကူးယူပါ-

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 ဖိုင်တစ်ခုအား mobiletto တစ်ခုမှ အခြားဖိုင်တစ်ခုသို့ ကူးယူပြီး ဦးတည်ရာသို့ အမည်ပြောင်းပါ-

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 လမ်းညွှန်တစ်ခုကို ထပ်ခါတလဲလဲ ကူးယူပါ-

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` အမိန့်အတွက် အကူအညီကိုကြည့်ပါ၊ ရွေးချယ်စရာအားလုံးကို ဖော်ပြသည်-

    mo cp -h
    mo cp --help

 မှတ်ချက်- ဖိုင်ကူးယူခြင်းသည် လောလောဆယ်တွင် ကြားခံ temp ဖိုင်တစ်ခု လိုအပ်သောကြောင့် အလွန်မြန်ဆန်ပါသည်။

 ### ဖိုင်များကိုဖျက်ပါ။
 ဖိုင်တစ်ခုတည်းကို ဖျက်ပါ-

    mo rm conn1/some/file.txt

 ဖိုင်တစ်ခုတည်းကို ဖျက်ပြီး မည်သည့်အမှားအယွင်းများကိုမျှ မတိုင်ကြားပါနှင့်။

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 လမ်းညွှန်တစ်ခုကို ဖျက်ပါ-

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 လမ်းညွှန်တစ်ခုကို ဖျက်ပြီး မည်သည့်အမှားအယွင်းများကိုမျှ မတိုင်ကြားပါနှင့်။

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### မက်တာဒေတာကို ကြည့်ပါ။
 ဖိုင်တစ်ခုလုံးကို ဒေါင်းလုဒ်မလုပ်ဘဲ ဖိုင်တစ်ခုအတွက် မက်တာဒေတာကို သိရန် မကြာခဏ အသုံးဝင်သည်။

 Mobiletto သည် အမည်နှင့် အမျိုးအစားအပြင် ဖိုင်အရွယ်အစားနှင့် နောက်ဆုံးပြင်ဆင်ထားသောအချိန်ကို အစီရင်ခံနိုင်သည်။

 မက်တာဒေတာကြည့်ရှုရန်-

    mo meta conn1/some/file.txt

 ### ကြေးမုံလမ်းညွှန်များ
 Mirroring သည် `cp` ၏ အထူးကိစ္စတစ်ခုထက် ပိုသည်၊ ၎င်းသည် သီးခြား mobiletto command ဖြစ်သည်၊
 မိတ္တူလည်ပတ်မှု; အမှားအယွင်းများဖြစ်ပေါ်နေချိန်၌ပင် ဆက်လက်လုပ်ဆောင်ပြီး အောင်မြင်မှုများနှင့် အမှားအယွင်းများစွာကို ခြေရာခံသည်။

 အရာအားလုံးကို conn1 မှ conn2 သို့ပြောင်းရန်-

    mo mirror conn1 conn2

 လမ်းကြောင်းခွဲတစ်ခုကို ကူးယူဖော်ပြရန်-

    mo mirror conn1/some/subdir conn2

 လမ်းကြောင်းခွဲတစ်ခုကို အခြား လမ်းကြောင်းခွဲတစ်ခုသို့ ပြောင်းရန်-

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
