mobiletto-cli
 ==============
 Unha interface de liña de comandos (CLI) para [mobiletto](https://www.npmjs.com/package/mobiletto)
 almacenamento.

 Mobiletto admite conexións a Amazon S3, Backblaze B2 e sistemas de ficheiros locais.

 # Le isto noutro idioma
 Este documento README.md foi traducido, a través de [hokeylization](https://github.com/cobbzilla/hokeylization), a
 **[todos os idiomas admitidos por Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estou seguro de que non é perfecto, pero espero que sexa mellor que nada!

 [🇸🇦 árabe](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemán](../de/README.md)
 [🇺🇸 inglés](../en/README.md)
 [🇪🇸 Español](../es/README.md)
 [🇫🇷 Francés](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesio](../id/README.md)
 [🇮🇹 italiano](../it/README.md)
 [🇯🇵 xaponés](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polaco](../pl/README.md)
 [🇧🇷 Portugués](../pt/README.md)
 [🇷🇺 Ruso](../ru/README.md)
 [🇰🇪 suahili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamita](../vi/README.md)
 [🇨🇳 Chinés](../zh/README.md)


 **[📚 ... Todos os idiomas ...](../README.md)**
 ----

 ### Hai algún problema con esta tradución do README?
 Esta tradución particular do orixinal [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 pode ser defectuoso -- *¡As correccións son moi ben recibidas!* Envía unha [solicitude de extracción en GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ou se non estás cómodo facendo iso, [abre un problema](https://github.com/cobbzilla/mobiletto-cli/issues)

 Cando crees un novo problema de GitHub sobre unha tradución, fai:
 * inclúa o URL da páxina (copiar/pegar da barra de enderezos do navegador)
 * inclúa o texto exacto incorrecto (copiar/pegar desde o navegador)
 * Describe o que está mal: a tradución é incorrecta? o formato está roto dalgún xeito?
 * Ofrecer amablemente unha suxestión dunha mellor tradución, ou como o texto debe estar formateado correctamente
 * **Grazas!**

 # Contidos
 * [Fonte](#Fonte)
 * [Apoio e financiamento](#Support-and-Funding)
 * [Instalación e uso](#Instalación-e-uso)
 * [paquete npm](#npm-package)
 * [Da fonte](#From-source)
 * [Conexións](#Conexións)
 * [Crear unha conexión](#Crear unha conexión)
 * [Lista de conexións](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Eliminar unha conexión](#Remove-a-connection)
 * [Eliminar todas as conexións](#Remove-all-connections)
 * [Traballar con almacenamento](#Working-with-storage)
 * [Ficheiros de lista](#Ficheiros de lista)
 * [Escribir un ficheiro en stdout](#Write-a-file-to-stdout)
 * [Copiar ficheiros](#Copiar ficheiros)
 * [Borrar ficheiros](#Delete-files)
 * [Ver metadatos](#Ver-metadatos)
 * [Directorios de espello](#directorios de espello)

 ### Fonte
 * [mobiletto-cli en GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli en npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Apoio e financiamento
 Estou tentando ser un programador profesional de software de código aberto. Estiven traballando
 da industria do software durante moitos anos, comecei empresas exitosas e vendínllas a empresas públicas.
 Recentemente perdín o meu traballo, e realmente non teño ningún outro traballo preparado

 Entón, vou tentar escribir un software útil e ver se funciona

 Se che gusta usar este software, estaríalle sinceramente agradecido
 máis pequena [contribución mensual a través de Patreon](https://www.patreon.com/cobbzilla)

 *Grazas!*

 ## Instalación e uso
 Pode instalar e executar `mobiletto-cli` a través de npm ou directamente desde a fonte.

 ### paquete npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### De orixe
 Para executar desde a fonte, necesitarás nodejs v16+ e yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Conexións
 Accédese a todo o almacenamento de mobiletto mediante unha conexión.

 Actualmente Mobiletto admite conexións ao almacenamento do sistema de ficheiros local e aos buckets de Amazon S3.

 As conexións son especificadas por un obxecto JSON que se ve así:

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

 Para obter máis información sobre todas as opcións e os seus valores e significados, consulte o
 [documentos de mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Crea unha conexión
 Para crear unha nova conexión, necesitamos un destes obxectos JSON.

 Podemos crear un de forma interactiva ou proporcionar un mediante un ficheiro ou un literal JSON:

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

 ### Lista de conexións
 Lista de conexións dispoñibles:

    mo connect -l
    mo connect --list

 ### Conexión de volcado de configuración JSON
 Mostra a configuración JSON completa para unha conexión. **AVISO** isto imprimirá as claves e os segredos en stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Eliminar unha conexión
 Eliminar unha única conexión:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Elimina todas as conexións
 Elimina TODAS as conexións:

    mo connect -R
    mo connect --remove-all

 ## Traballando co almacenamento
 Unha vez creadas algunhas conexións, use as `ls` , `cp` , `rm` , `meta` e `mirror`
 para traballar con eles.

 Cada ruta de ficheiro que fornece a un comando debe levar o nome da conexión como prefixo
 fai referencia. Nos exemplos seguintes, supoñemos que existen dúas conexións chamadas `conn1` e `conn2`

 ### Lista de ficheiros
 A saída dun comando de lista é unha serie de obxectos JSON, un por liña, que representan os ficheiros
 atopado. Estes obxectos terán un `name` nome` e un `type` , e posiblemente outros campos.

    mo ls conn1/some/path

 Lista de ficheiros recursivamente:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota de almacenamento cifrado**: a lista recursiva aínda non é compatible con conexións cifradas.
 Só pode listar un directorio de ficheiros á vez.

 Enumere os ficheiros detalladamente (JSON moi impreso):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Lista de ficheiros de forma recursiva e detallada:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Ver axuda para o comando `ls` , describe todas as opcións:

    mo ls -h
    mo ls --help

 ### Escribe un ficheiro en stdout
 O comando `cat` imprimirá un ficheiro en stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 No verdadeiro espírito UNIX *(aínda que non é a práctica!)* o comando `cat` cat` de mobiletto **non leva opcións**
 distinto de `-h` / `--help` para mostrar información útil.

 ### Copiar ficheiros
 Copia un único ficheiro dun móbil a outro:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copie un único ficheiro dun móbil a outro, renomeándoo no destino:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copiar recursivamente un directorio:

    mo cp -r conn1/some/directory conn2/some/dest/

 Ver axuda para o comando `cp` , describe todas as opcións:

    mo cp -h
    mo cp --help

 Nota: a copia de ficheiros non é moi rápida, porque actualmente require un ficheiro temporal intermediario.

 ### Eliminar ficheiros
 Eliminar un único ficheiro:

    mo rm conn1/some/file.txt

 Elimina un único ficheiro e non te queixes de ningún erro:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Eliminar un directorio:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Elimina un directorio e non te queixes de ningún erro:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Ver metadatos
 Moitas veces é útil coñecer os metadatos dun ficheiro, sen descargar o ficheiro completo.

 Mobiletto pode informar o tamaño do ficheiro e a hora da última modificación, ademais do nome e o tipo.

 Para ver metadatos:

    mo meta conn1/some/file.txt

 ### Espello de directorios
 A duplicación é máis que un caso especial de `cp` , é un comando mobiletto separado que envolve o
 operación de copia; continúa incluso cando se producen erros e fai un seguimento dun reconto de éxitos e erros.

 Para reflectir todo desde conn1 a conn2:

    mo mirror conn1 conn2

 Para reflectir un subdirectorio:

    mo mirror conn1/some/subdir conn2

 Para reflectir un subdirectorio noutro subdirectorio:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
