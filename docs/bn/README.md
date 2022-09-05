mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) এর জন্য একটি কমান্ড-লাইন ইন্টারফেস (CLI)
 স্টোরেজ

 Mobiletto Amazon S3, Backblaze B2 এবং স্থানীয় ফাইল সিস্টেমের সাথে সংযোগ সমর্থন করে।

 # এটি অন্য ভাষায় পড়ুন
 এই README.md নথিটি অনুবাদ করা হয়েছে, [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) এর মাধ্যমে, এতে
 **[Google অনুবাদ দ্বারা সমর্থিত প্রতিটি ভাষা](https://cloud.google.com/translate/docs/languages)!**

 আমি নিশ্চিত যে এটি নিখুঁত নয়, তবে আমি আশা করি এটি কিছুই না হওয়ার চেয়ে ভাল!

 [🇸🇦 আরবি](../ar/README.md)
 [🇧🇩 বাংলা](../bn/README.md)
 [🇩🇪 জার্মান](../de/README.md)
 [🇺🇸 ইংরেজি](../en/README.md)
 [🇪🇸 স্প্যানিশ](../es/README.md)
 [🇫🇷 ফরাসি](../fr/README.md)
 [🇹🇩 হাউসা](../ha/README.md)
 [🇮🇳 হিন্দি](../hi/README.md)
 [🇮🇩 ইন্দোনেশিয়ান](../id/README.md)
 [🇮🇹 ইতালীয়](../it/README.md)
 [🇯🇵 জাপানি](../ja/README.md)
 [🇰🇷 কোরিয়ান](../ko/README.md)
 [🇮🇳 মারান্থি](../mr/README.md)
 [🇵🇱 পোলিশ](../pl/README.md)
 [🇧🇷 পর্তুগিজ](../pt/README.md)
 [🇷🇺 রাশিয়ান](../ru/README.md)
 [🇰🇪 সোয়াহিলি](../sw/README.md)
 [🇵🇭 তাগালগ](../tl/README.md)
 [🇹🇷 তুর্কি](../tr/README.md)
 [🇵🇰 উর্দু](../ur/README.md)
 [🇻🇳 ভিয়েতনামী](../vi/README.md)
 [🇨🇳 চীনা](../zh/README.md)


 **[📚 ... সমস্ত ভাষা ...](../README.md)**
 ----

 ### এই README এর অনুবাদে কি কোন সমস্যা আছে?
 মূল [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md) এর এই বিশেষ অনুবাদ
 ত্রুটি থাকতে পারে -- *সংশোধনগুলিকে স্বাগত জানাই!* অনুগ্রহ করে একটি [GitHub-এ টেনে নেওয়ার অনুরোধ] পাঠান (https://github.com/cobbzilla/mobiletto-cli/pulls),
 অথবা আপনি যদি এটি করতে স্বাচ্ছন্দ্যবোধ না করেন, [একটি সমস্যা খুলুন](https://github.com/cobbzilla/mobiletto-cli/issues)

 যখন আপনি একটি অনুবাদ সম্পর্কে একটি নতুন GitHub সমস্যা তৈরি করেন, অনুগ্রহ করে করুন:
 * পৃষ্ঠার URL অন্তর্ভুক্ত করুন (ব্রাউজার ঠিকানা বার থেকে অনুলিপি/পেস্ট করুন)
 * সঠিক পাঠ্য অন্তর্ভুক্ত করুন যা ভুল (ব্রাউজার থেকে অনুলিপি/পেস্ট)
 * অনুগ্রহ করে বর্ণনা করুন কি ভুল -- অনুবাদ কি ভুল? বিন্যাস কি একরকম ভাঙ্গা?
 * অনুগ্রহ করে একটি ভাল অনুবাদের পরামর্শ দিন, বা কীভাবে পাঠ্যটি সঠিকভাবে বিন্যাস করা উচিত
 * **ধন্যবাদ!**

 ### সূত্র
 * [গিটহাবে মোবাইলেটো-ক্লি](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 # বিষয়বস্তু
 * [ইনস্টলেশন এবং ব্যবহার](#ইনস্টলেশন-এবং-ব্যবহার)
 * [npm প্যাকেজ](#npm-প্যাকেজ)
 * [উৎস থেকে](# উৎস থেকে)
 * [সংযোগ](#সংযোগ)
 * [একটি সংযোগ তৈরি করুন](#একটি সংযোগ তৈরি করুন)
 * [তালিকা সংযোগ](#তালিকা-সংযোগ)
 * [ডাম্প সংযোগ JSON কনফিগারেশন](#Dump-connection-JSON-config)
 * [একটি সংযোগ সরান](#একটি সংযোগ সরান)
 * [সমস্ত সংযোগ সরান](#অল-সংযোগ সরান)
 * [সঞ্চয়স্থানের সাথে কাজ করা](# স্টোরেজের সাথে কাজ করা)
 * [তালিকা ফাইল](#লিস্ট ফাইল)
 * [stdout-এ একটি ফাইল লিখুন](#লিখুন-এ-ফাইল-টু-স্টডাউট)
 * [কপি ফাইল](#কপি-ফাইল)
 * [ফাইল মুছুন](#ডিলিট-ফাইল)
 * [মেটাডেটা দেখুন](#ভিউ-মেটাডেটা)
 * [মিরর ডিরেক্টরি](#মিরর-ডিরেক্টরি)

 ## ইনস্টলেশন এবং ব্যবহার
 আপনি npm এর মাধ্যমে বা সরাসরি উৎস থেকে `mobiletto-cli` ইনস্টল এবং চালাতে পারেন।

 ### npm প্যাকেজ
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### সূত্র থেকে
 উৎস থেকে চালানোর জন্য, আপনার nodejs v16+ এবং সুতা লাগবে

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## সংযোগ
 একটি সংযোগের মাধ্যমে সমস্ত মোবাইল স্টোরেজ অ্যাক্সেস করা হয়।

 Mobiletto বর্তমানে স্থানীয় ফাইল সিস্টেম স্টোরেজ এবং Amazon S3 বাকেটের সাথে সংযোগ সমর্থন করে।

 সংযোগগুলি একটি JSON অবজেক্ট দ্বারা নির্দিষ্ট করা হয় যা দেখতে এইরকম:

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

 সমস্ত বিকল্প এবং তাদের মান এবং অর্থ সম্পর্কে সম্পূর্ণ বিবরণের জন্য, দেখুন
 [mobiletto ডক্স](https://www.npmjs.com/package/mobiletto#Basic-usage)।

 ### একটি সংযোগ তৈরি করুন
 একটি নতুন সংযোগ তৈরি করতে, আমাদের এই JSON অবজেক্টগুলির মধ্যে একটি প্রয়োজন।

 আমরা ইন্টারেক্টিভভাবে একটি তৈরি করতে পারি, বা একটি ফাইল বা JSON আক্ষরিক মাধ্যমে একটি সরবরাহ করতে পারি:

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

 ### সংযোগের তালিকা করুন
 উপলব্ধ সংযোগের তালিকা করুন:

    mo connect -l
    mo connect --list

 ### ডাম্প সংযোগ JSON কনফিগারেশন
 একটি সংযোগের জন্য সম্পূর্ণ JSON কনফিগারেশন দেখান। **সতর্কতা** এটি stdout এ কী এবং গোপনীয়তা প্রিন্ট করবে।

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### একটি সংযোগ সরান
 একটি একক সংযোগ সরান:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### সমস্ত সংযোগ সরান
 সমস্ত সংযোগ সরান:

    mo connect -R
    mo connect --remove-all

 ## স্টোরেজ নিয়ে কাজ করা
 একবার আপনি কিছু সংযোগ তৈরি করলে, ` `ls` , `cp` , `rm` , `meta` এবং `mirror` অপারেশন ব্যবহার করুন
 তাদের সাথে কাজ করতে।

 প্রতিটি ফাইল পাথ যা আপনি একটি কমান্ডে প্রদান করেন সংযোগের নামের সাথে প্রিফিক্স করা আবশ্যক
 এটা বোঝায়. নীচের উদাহরণগুলিতে, আমরা অনুমান করি যে দুটি সংযোগ রয়েছে যার নাম `conn1` ' এবং `conn2`

 ### ফাইলের তালিকা করুন
 একটি তালিকা কমান্ডের আউটপুট হল JSON অবজেক্টের একটি সিরিজ, প্রতি লাইনে একটি, ফাইলগুলিকে প্রতিনিধিত্ব করে
 পাওয়া গেছে এই বস্তুগুলির একটি `name` এবং `type` এবং সম্ভবত অন্যান্য ক্ষেত্র থাকবে।

    mo ls conn1/some/path

 ফাইলগুলি পুনরাবৃত্তভাবে তালিকাভুক্ত করুন:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **এনক্রিপ্ট করা স্টোরেজ নোট**: পুনরাবৃত্ত তালিকা এখনও এনক্রিপ্ট করা সংযোগের জন্য সমর্থিত নয়।
 আপনি একবারে শুধুমাত্র একটি ফাইলের ডিরেক্টরি তালিকাভুক্ত করতে পারেন।

 ফাইলগুলিকে মৌখিকভাবে তালিকাভুক্ত করুন (প্রিন্ট-প্রিন্ট JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 পুনরাবৃত্ত এবং শব্দগতভাবে ফাইলগুলি তালিকাভুক্ত করুন:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` কমান্ডের জন্য সহায়তা দেখুন, সমস্ত বিকল্প বর্ণনা করে:

    mo ls -h
    mo ls --help

 ### stdout এ একটি ফাইল লিখুন
 `cat` কমান্ড stdout এ একটি ফাইল প্রিন্ট করবে:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 সত্যিকারের ইউনিক্স চেতনায় *(এখনও অবশ্যই অনুশীলন নয়!)* mobiletto এর `cat` কমান্ড **কোন বিকল্প নেয় না**
 সহায়ক তথ্য প্রদর্শনের জন্য `-h` / `--help` ব্যতীত।

 ### ফাইল কপি করুন
 একটি মোবাইল থেকে অন্য মোবাইলে একটি একক ফাইল অনুলিপি করুন:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 একটি মোবাইল থেকে অন্য মোবাইলে একটি ফাইল কপি করুন, গন্তব্যে এটির নাম পরিবর্তন করুন:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 পুনরাবৃত্তিমূলকভাবে একটি ডিরেক্টরি অনুলিপি করুন:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` কমান্ডের জন্য সহায়তা দেখুন, সমস্ত বিকল্প বর্ণনা করে:

    mo cp -h
    mo cp --help

 দ্রষ্টব্য: ফাইল কপি করা খুব দ্রুত নয়, কারণ এটির জন্য বর্তমানে একটি মধ্যস্থতাকারী টেম্প ফাইল প্রয়োজন।

 ### ফাইল মুছে দিন
 একটি একক ফাইল মুছুন:

    mo rm conn1/some/file.txt

 একটি একক ফাইল মুছুন এবং কোনো ত্রুটি সম্পর্কে অভিযোগ করবেন না:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 একটি ডিরেক্টরি মুছুন:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 একটি ডিরেক্টরি মুছুন এবং কোনো ত্রুটি সম্পর্কে অভিযোগ করবেন না:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### মেটাডেটা দেখুন
 পুরো ফাইলটি ডাউনলোড না করে একটি ফাইলের মেটাডেটা জানা প্রায়ই দরকারী।

 Mobiletto নাম এবং প্রকার ছাড়াও ফাইলের আকার এবং শেষ পরিবর্তিত সময় রিপোর্ট করতে সক্ষম।

 মেটাডেটা দেখতে:

    mo meta conn1/some/file.txt

 ### মিরর ডিরেক্টরি
 মিররিং হল `cp` এর একটি বিশেষ ক্ষেত্রের চেয়ে বেশি, এটি একটি পৃথক মোবাইলটো কমান্ড যা মোড়ানো হয়
 কপি অপারেশন; ত্রুটি ঘটলেও এটি চলতে থাকে এবং সাফল্য এবং ত্রুটির সংখ্যা ট্র্যাক করে।

 conn1 থেকে conn2 তে সবকিছু মিরর করতে:

    mo mirror conn1 conn2

 একটি সাবডিরেক্টরি মিরর করতে:

    mo mirror conn1/some/subdir conn2

 একটি সাবডিরেক্টরিকে অন্য সাবডিরেক্টরিতে মিরর করতে:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
