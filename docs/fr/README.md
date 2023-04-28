mobiletto-cli
 =============
 Une interface de ligne de commande (CLI) pour [mobiletto](https://www.npmjs.com/package/mobiletto)
 stockage.

 Mobileto prend en charge les connexions à Amazon S3, Backblaze B2 et aux systèmes de fichiers locaux.

 # Lire ceci dans une autre langue
 Ce document README.md a été traduit, via [hokeylization](https://github.com/cobbzilla/hokeylization), en
 **[toutes les langues prises en charge par Google Translate](https://cloud.google.com/translate/docs/languages) !**

 Je suis certain que ce n'est pas parfait, mais j'espère que c'est mieux que rien !

 [🇸🇦 Arabe](../ar/README.md)
 [🇧🇩 bengali](../bn/README.md)
 [🇩🇪 allemand](../de/README.md)
 [🇺🇸 Anglais](../en/README.md)
 [🇪🇸 Espagnol](../es/README.md)
 [🇫🇷 Français](../fr/README.md)
 [🇹🇩 Haoussa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonésien](../id/README.md)
 [🇮🇹 Italien](../it/README.md)
 [🇯🇵 japonais](../ja/README.md)
 [🇰🇷 coréen](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polonais](../pl/README.md)
 [🇧🇷 portugais](../pt/README.md)
 [🇷🇺 russe](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turc](../tr/README.md)
 [🇵🇰 Ourdou](../ur/README.md)
 [🇻🇳 Vietnamien](../vi/README.md)
 [🇨🇳 chinois](../zh/README.md)


 **[📚 ... Toutes les langues ...](../README.md)**
 ----

 ### Y a-t-il un problème avec cette traduction du README ?
 Cette traduction particulière de l'original [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 peut être défectueux -- *les corrections sont les bienvenues !* Veuillez envoyer une [pull request on GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ou si vous n'êtes pas à l'aise pour le faire, [ouvrez un problème](https://github.com/cobbzilla/mobiletto-cli/issues)

 Lorsque vous créez un nouveau ticket GitHub à propos d'une traduction, veuillez faire :
 * inclure l'URL de la page (copier/coller depuis la barre d'adresse du navigateur)
 * inclure le texte exact qui est erroné (copier/coller depuis le navigateur)
 * veuillez décrire ce qui ne va pas -- la traduction est-elle incorrecte ? le formatage est-il cassé d'une manière ou d'une autre ?
 * veuillez suggérer une meilleure traduction, ou comment le texte doit être correctement formaté
 * **Merci!**

 # Contenu
 * [Source](#Source)
 * [Soutien et financement](#Soutien-et-Financement)
 * [Installation et utilisation](#Installation-and-usage)
 * [paquet npm](#paquet-npm)
 * [Depuis la source](#Depuis la source)
 * [Connexions](#Connexions)
 * [Créer une connexion](#Créer-une-connexion)
 * [Liste des connexions](#Liste-connexions)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Supprimer une connexion](#Remove-a-connection)
 * [Supprimer toutes les connexions](#Remove-all-connections)
 * [Travailler avec le stockage](#Travailler-avec-le-stockage)
 * [Liste des fichiers](#Liste-fichiers)
 * [Écrire un fichier sur stdout](#Write-a-file-to-stdout)
 * [Copier des fichiers](#Copier-fichiers)
 * [Supprimer les fichiers](#Delete-fichiers)
 * [Voir les métadonnées](#View-metadata)
 * [Répertoires miroir](#Mirror-directories)

 ### La source
 * [mobiletto-cli sur GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli sur npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Soutien et financement
 J'essaie d'être un développeur professionnel de logiciels open source. j'ai travaillé dans
 l'industrie du logiciel depuis de nombreuses années, j'ai lancé des entreprises prospères et les ai vendues à des sociétés ouvertes.
 Récemment, j'ai perdu mon emploi et je n'ai pas vraiment d'autre travail en vue

 Je vais donc essayer d'écrire un logiciel utile et voir si cela fonctionne

 Si vous aimez utiliser ce logiciel, je serais sincèrement reconnaissant même pour
 la plus petite [contribution mensuelle via Patreon](https://www.patreon.com/cobbzilla)

 *Merci!*

 ## Installation et utilisation
 Vous pouvez installer et exécuter `mobiletto-cli` via npm ou directement depuis la source.

 ### paquet npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### De la source
 Pour exécuter à partir de la source, vous aurez besoin de nodejs v16 + et de fil

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Connexions
 Tout le stockage mobiletto est accessible via une connexion.

 Mobileto prend actuellement en charge les connexions au stockage du système de fichiers local et aux compartiments Amazon S3.

 Les connexions sont spécifiées par un objet JSON qui ressemble à ceci :

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

 Pour plus de détails sur toutes les options et leurs valeurs et significations, voir le
 [docs mobileto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Créer une connexion
 Pour créer une nouvelle connexion, nous avons besoin de l'un de ces objets JSON.

 Nous pouvons en créer un de manière interactive, ou en fournir un via un fichier ou un littéral JSON :

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

 ### Lister les connexions
 Lister les connexions disponibles :

    mo connect -l
    mo connect --list

 ### Vidage de la configuration JSON de la connexion
 Afficher la configuration JSON complète pour une connexion. **ATTENTION** cela imprimera les clés et les secrets sur stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Supprimer une connexion
 Supprimer une seule connexion :

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Supprimer toutes les connexions
 Supprimez TOUTES les connexions :

    mo connect -R
    mo connect --remove-all

 ## Travailler avec le stockage
 Une fois que vous avez créé des connexions, utilisez les opérations `ls` , `cp` , `rm` , `meta` et `mirror`
 travailler avec eux.

 Chaque chemin de fichier que vous fournissez à une commande doit être précédé du nom de la connexion
 ça fait référence à. Dans les exemples ci-dessous, nous supposons qu'il existe deux connexions nommées `conn1` et `conn2`

 ### Lister les fichiers
 La sortie d'une commande list est une série d'objets JSON, un par ligne, représentant les fichiers
 trouvé. Ces objets auront un `name` et un `type` , et éventuellement d'autres champs.

    mo ls conn1/some/path

 Lister les fichiers de manière récursive :

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Remarque sur le stockage crypté** : la liste récursive n'est pas encore prise en charge pour les connexions cryptées.
 Vous ne pouvez lister qu'un seul répertoire de fichiers à la fois.

 Répertorier les fichiers de manière détaillée (JSON en jolis caractères) :

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lister les fichiers de manière récursive et détaillée :

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Afficher l'aide pour la commande `ls` , décrit toutes les options :

    mo ls -h
    mo ls --help

 ### Écrire un fichier sur stdout
 La commande `cat` imprimera un fichier sur stdout :

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Dans le véritable esprit UNIX *(mais certainement pas la pratique !)* la commande `cat` de mobiletto **ne prend aucune option**
 autre que `-h` / `--help` pour afficher des informations utiles.

 ### Copier des fichiers
 Copiez un seul fichier d'un mobiletto à un autre :

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copiez un seul fichier d'un mobiletto à un autre, en le renommant à la destination :

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copiez récursivement un répertoire :

    mo cp -r conn1/some/directory conn2/some/dest/

 Afficher l'aide pour la commande `cp` , décrit toutes les options :

    mo cp -h
    mo cp --help

 Remarque : La copie de fichiers n'est pas très rapide, car elle nécessite actuellement un fichier temporaire intermédiaire.

 ### Supprimer les fichiers
 Supprimer un seul fichier :

    mo rm conn1/some/file.txt

 Supprimez un seul fichier et ne vous plaignez pas des erreurs :

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Supprimer un répertoire :

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Supprimez un répertoire et ne vous plaignez pas des erreurs :

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Afficher les métadonnées
 Il est souvent utile de connaître les métadonnées d'un fichier, sans télécharger l'intégralité du fichier.

 Mobileto est capable de signaler la taille du fichier et l'heure de la dernière modification, en plus du nom et du type.

 Pour afficher les métadonnées :

    mo meta conn1/some/file.txt

 ### Répertoires miroirs
 La mise en miroir est plus qu'un cas particulier de `cp` , c'est une commande mobiletto distincte qui encapsule le
 opération de copie ; il continue même lorsque des erreurs se produisent et suit un nombre de réussites et d'erreurs.

 Pour tout mettre en miroir de conn1 à conn2 :

    mo mirror conn1 conn2

 Pour mettre en miroir un sous-répertoire :

    mo mirror conn1/some/subdir conn2

 Pour mettre en miroir un sous-répertoire dans un autre sous-répertoire :

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
