mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto) සඳහා විධාන රේඛා අතුරු මුහුණතක් (CLI)
 ගබඞා.

 Mobiletto Amazon S3, Backblaze B2 සහ දේශීය ගොනු පද්ධති වෙත සම්බන්ධතා සඳහා සහය දක්වයි.

 # මෙය වෙනත් භාෂාවකින් කියවන්න
 මෙම README.md ලේඛනය [hokeylization](https://github.com/cobbzilla/hokeylization) හරහා පරිවර්තනය කර ඇත.
 **[Google Translate මඟින් සහාය දක්වන සෑම භාෂාවක්ම](https://cloud.google.com/translate/docs/languages)!**

 එය පරිපූර්ණ නොවන බව මට විශ්වාසයි, නමුත් එය කිසිවකට වඩා හොඳ යැයි මම බලාපොරොත්තු වෙමි!

 [🇸🇦 අරාබි](../ar/README.md)
 [🇧🇩 බෙංගාලි](../bn/README.md)
 [🇩🇪 ජර්මානු](../de/README.md)
 [🇺🇸 ඉංග්‍රීසි](../en/README.md)
 [🇪🇸 ස්පාඤ්ඤ](../es/README.md)
 [🇫🇷 ප්‍රංශ](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 හින්දි](../hi/README.md)
 [🇮🇩 ඉන්දුනීසියානු](../id/README.md)
 [🇮🇹 ඉතාලි](../it/README.md)
 [🇯🇵 ජපන්](../ja/README.md)
 [🇰🇷 කොරියානු](../ko/README.md)
 [🇮🇳 මරන්ති](../mr/README.md)
 [🇵🇱 පෝලන්ත](../pl/README.md)
 [🇧🇷 පෘතුගීසි](../pt/README.md)
 [🇷🇺 රුසියානු](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 තුර්කි](../tr/README.md)
 [🇵🇰 උර්දු](../ur/README.md)
 [🇻🇳 වියට්නාම](../vi/README.md)
 [🇨🇳 චීන](../zh/README.md)


 **[📚 ... සියලුම භාෂා ...](../README.md)**
 ----

 ### README හි මෙම පරිවර්තනයේ ගැටලුවක් තිබේද?
 මුල් [README] හි මෙම විශේෂිත පරිවර්තනය (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 දෝෂ සහිත විය හැක -- *නිවැරදි කිරීම් ඉතා සාදරයෙන් පිළිගනිමු!* කරුණාකර [GitHub මත අදින්න ඉල්ලීමක්](https://github.com/cobbzilla/mobiletto-cli/pulls),
 හෝ ඔබට එය කිරීමට අපහසු නම්, [ගැටළුවක් විවෘත කරන්න](https://github.com/cobbzilla/mobiletto-cli/issues)

 ඔබ පරිවර්තනයක් පිළිබඳ නව GitHub ගැටලුවක් සාදන විට, කරුණාකර කරන්න:
 * පිටු URL ඇතුළත් කරන්න (බ්‍රවුසර ලිපින තීරුවෙන් පිටපත් කරන්න/අලවන්න)
 * වැරදි පෙළ ඇතුළත් කරන්න (බ්‍රවුසරයෙන් පිටපත් කරන්න/අලවන්න)
 * කරුණාකර වැරදි දේ විස්තර කරන්න -- පරිවර්තනය වැරදිද? හැඩතල ගැන්වීම කෙසේ හෝ කැඩී තිබේද?
 * වඩා හොඳ පරිවර්තනයක් පිළිබඳ යෝජනාවක් කාරුණිකව ඉදිරිපත් කරන්න, නැතහොත් පෙළ නිසි ලෙස හැඩසවිය යුතු ආකාරය
 * **ඔබට ස්තුතියි!**

 # අන්තර්ගතය
 * [මූලාශ්රය](#මූලාශ්රය)
 * [සහාය සහ අරමුදල්](#සහාය සහ අරමුදල්)
 * [ස්ථාපනය සහ භාවිතය](#ස්ථාපනය-සහ-භාවිතය)
 * [npm පැකේජය](#npm-පැකේජය)
 * [මූලාශ්‍රයෙන්](#මූලාශ්‍රයෙන්)
 * [සම්බන්ධතා](#සම්බන්ධතා)
 * [සම්බන්ධතාවයක් සාදන්න](#Create-a-connection)
 * [ලැයිස්තු සම්බන්ධතා](#List-සම්බන්ධතා)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [සම්බන්ධතාවයක් ඉවත් කරන්න](#සම්බන්ධතාව ඉවත් කරන්න)
 * [සියලු සම්බන්ධතා ඉවත් කරන්න](#Remove-all-connections)
 * [ගබඩා සමඟ වැඩ කිරීම](#වැඩ කිරීම-ගබඩාව සමඟ)
 * [ලැයිස්තු ගොනු](#List-files)
 * [stdout වෙත ගොනුවක් ලියන්න](#Write-a-file-to-stdout)
 * [ගොනු පිටපත් කරන්න](#පිටපත්-ගොනු)
 * [ගොනු මකන්න](#මකන්න-ගොනු)
 * [පාර-දත්ත බලන්න](#View-metadata)
 * [මිරර් නාමාවලි](#Mirror-directories)

 ### මූලාශ්රය
 * [mobiletto-cli on GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli on npm](https://www.npmjs.com/package/mobiletto-cli)

 ## ආධාර සහ අරමුදල්
 මම වෘත්තීය විවෘත කේත මෘදුකාංග සංවර්ධකයෙකු වීමට උත්සාහ කරමි. මම වැඩ කරලා තියෙනවා
 වසර ගණනාවක් තිස්සේ මෘදුකාංග කර්මාන්තය, මම සාර්ථක සමාගම් ආරම්භ කර ඒවා පොදු සමාගම්වලට විකුණා ඇත.
 මෑතකදී මට මගේ රැකියාව අහිමි වූ අතර, මට වෙනත් වැඩ පෙළගැසී නොමැත

 ඒ නිසා මම ප්‍රයෝජනවත් මෘදුකාංගයක් ලිවීමට උත්සාහ කර එය ක්‍රියාත්මක වේද බලන්න

 ඔබ මෙම මෘදුකාංගය භාවිතා කිරීමෙන් සතුටක් ලබන්නේ නම්, ඒ සඳහා පවා මම අවංකවම කෘතඥ වෙනවා
 කුඩාම [Patreon හරහා මාසික දායකත්වය](https://www.patreon.com/cobbzilla)

 *ඔබට ස්තුතියි!*

 ## ස්ථාපනය සහ භාවිතය
 ඔබට npm හරහා හෝ සෘජුවම මූලාශ්‍රයෙන් `mobiletto-cli` ස්ථාපනය කර ධාවනය කළ හැක.

 ### npm පැකේජය
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### මූලාශ්‍රයෙන්
 මූලාශ්‍රයෙන් ධාවනය කිරීමට, ඔබට nodejs v16+ සහ නූල් අවශ්‍ය වේ

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## සම්බන්ධතා
 සියලුම mobiletto ආචයනය සම්බන්ධතාවයක් හරහා ප්‍රවේශ වේ.

 Mobiletto දැනට දේශීය ගොනු පද්ධති ගබඩාව සහ Amazon S3 බාල්දි වෙත සම්බන්ධතා සඳහා සහය දක්වයි.

 සම්බන්ධතා මෙසේ පෙනෙන JSON වස්තුවක් මගින් නියම කර ඇත:

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

 සියලු විකල්ප සහ ඒවායේ වටිනාකම් සහ අර්ථයන් පිළිබඳ සම්පූර්ණ විස්තර සඳහා, බලන්න
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### සම්බන්ධතාවයක් සාදන්න
 නව සම්බන්ධතාවයක් සෑදීමට, අපට මෙම JSON වස්තු වලින් එකක් අවශ්‍ය වේ.

 අපට එකක් අන්තර්ක්‍රියාකාරීව නිර්මාණය කළ හැකිය, නැතහොත් ගොනුවක් හරහා එකක් සැපයිය හැකිය හෝ JSON වචනාර්ථයෙන්:

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

 ### සම්බන්ධතා ලැයිස්තුගත කරන්න
 පවතින සම්බන්ධතා ලැයිස්තුගත කරන්න:

    mo connect -l
    mo connect --list

 ### ඩම්ප් සම්බන්ධතාවය JSON වින්‍යාසය
 සම්බන්ධතාවයක් සඳහා සම්පූර්ණ JSON වින්‍යාසය පෙන්වන්න. **අවවාදයයි** මෙය යතුරු සහ රහස් stdout වෙත මුද්‍රණය කරයි.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### සම්බන්ධතාවයක් ඉවත් කරන්න
 තනි සම්බන්ධතාවයක් ඉවත් කරන්න:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### සියලු සම්බන්ධතා ඉවත් කරන්න
 සියලුම සම්බන්ධතා ඉවත් කරන්න:

    mo connect -R
    mo connect --remove-all

 ## ගබඩාව සමඟ වැඩ කිරීම
 ඔබ සම්බන්ධතා කිහිපයක් සෑදූ පසු, ` `ls` , `cp` , `rm` , `meta` සහ `mirror` මෙහෙයුම් භාවිතා කරන්න.
 ඔවුන් සමඟ වැඩ කිරීමට.

 ඔබ විධානයකට ලබා දෙන සෑම ගොනු මාර්ගයක්ම සම්බන්ධතාවයේ නම සමඟ උපසර්ග විය යුතුය
 එය යොමු කරයි. පහත උදාහරණ වලදී, අපි `conn1` ' සහ `conn2` නමින් සම්බන්ධතා දෙකක් පවතින බව උපකල්පනය කරමු

 ### ගොනු ලැයිස්තුගත කරන්න
 ලැයිස්තු විධානයක ප්‍රතිදානය යනු ලිපිගොනු නියෝජනය කරන පේළියකට එකක් වන JSON වස්තු මාලාවකි
 සොයාගත්තා. මෙම වස්තූන්ට `name` සහ `type` සහ සමහරවිට වෙනත් ක්ෂේත්‍ර ඇත.

    mo ls conn1/some/path

 පුනරාවර්තන ලෙස ගොනු ලැයිස්තුගත කරන්න:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **සංකේතනය කළ ගබඩා සටහන**: සංකේතාත්මක සම්බන්ධතා සඳහා පුනරාවර්තන ලැයිස්තුගත කිරීම තවමත් සහාය නොදක්වයි.
 ඔබට එක් වරකට ගොනු නාමාවලියක් පමණක් ලැයිස්තුගත කළ හැක.

 ලිපිගොනු වාචිකව ලැයිස්තුගත කරන්න (ලස්සන-මුද්‍රණය JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 පුනරාවර්තන හා වාචිකව ගොනු ලැයිස්තුගත කරන්න:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` විධානය සඳහා උපකාර බලන්න, සියලු විකල්ප විස්තර කරයි:

    mo ls -h
    mo ls --help

 ### stdout වෙත ගොනුවක් ලියන්න
 `cat` වෙත මුද්‍රණය කරයි:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 සැබෑ UNIX ආත්මය තුළ *(තවමත් නියත වශයෙන්ම භාවිතය නොවේ!)* mobiletto හි `cat` විධානය **කිසිදු විකල්පයක් ගන්නේ නැත**
 ප්‍රයෝජනවත් තොරතුරු සංදර්ශන කිරීමට `-h` / `--help` .

 ### ගොනු පිටපත් කරන්න
 තනි ගොනුවක් එක් ජංගම දුරකථනයකින් තවත් ජංගම දුරකථනයකට පිටපත් කරන්න:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 එක් ගොනුවක් එක් මොබයිල්ටෝ එකකින් තවත් එකකට පිටපත් කරන්න, ගමනාන්තයේදී එය නැවත නම් කරන්න:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 නාමාවලියක් පුනරාවර්තන ලෙස පිටපත් කරන්න:

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` විධානය සඳහා උපකාර බලන්න, සියලු විකල්ප විස්තර කරයි:

    mo cp -h
    mo cp --help

 සටහන: ගොනු පිටපත් කිරීම ඉතා වේගවත් නොවේ, මන්ද එයට දැනට අතරමැදි තාවකාලික ගොනුවක් අවශ්‍ය වේ.

 ### ගොනු මකන්න
 තනි ගොනුවක් මකන්න:

    mo rm conn1/some/file.txt

 තනි ගොනුවක් මකන්න සහ කිසිදු දෝෂයක් ගැන පැමිණිලි නොකරන්න:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 නාමාවලියක් මකන්න:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 නාමාවලියක් මකන්න සහ කිසිදු දෝෂයක් ගැන පැමිණිලි නොකරන්න:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### පාරදත්ත බලන්න
 සම්පූර්ණ ගොනුව බාගත නොකර ගොනුවක් සඳහා පාර-දත්ත දැන ගැනීම බොහෝ විට ප්‍රයෝජනවත් වේ.

 Mobiletto හට නම සහ වර්ගයට අමතරව ගොනු ප්‍රමාණය සහ අවසන් වරට වෙනස් කළ කාලය වාර්තා කිරීමට හැකි වේ.

 පාරදත්ත බැලීමට:

    mo meta conn1/some/file.txt

 ### දර්පණ නාමාවලි
 `cp` හි විශේෂ අවස්ථාවකට වඩා වැඩි ය, එය වෙනම mobiletto විධානයකි
 පිටපත් මෙහෙයුම; දෝෂ ඇති වූ විට පවා එය දිගටම පවතින අතර, සාර්ථකත්වයන් සහ දෝෂ ගණන නිරීක්ෂණය කරන්න.

 conn1 සිට conn2 දක්වා සියල්ල පිළිබිඹු කිරීමට:

    mo mirror conn1 conn2

 උප බහලුම පිළිබිඹු කිරීමට:

    mo mirror conn1/some/subdir conn2

 උප බහලුමක් වෙනත් උප බහලුමකට පිළිබිඹු කිරීමට:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
