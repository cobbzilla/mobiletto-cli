mobiletto-cli
 =============
 Una interfaz de línea de comandos (CLI) para [mobiletto](https://www.npmjs.com/package/mobiletto)
 almacenamiento.

 Mobiletto admite conexiones a Amazon S3, Backblaze B2 y sistemas de archivos locales.

 # Leer esto en otro idioma
 Este documento README.md ha sido traducido, a través de [hokeylization](https://github.com/cobbzilla/hokeylization), a
 **[¡todos los idiomas admitidos por Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estoy seguro de que no es perfecto, ¡pero espero que sea mejor que nada!

 [🇸🇦 Árabe](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemán](../de/README.md)
 [🇺🇸 Español](../es/README.md)
 [🇪🇸 Español](../es/README.md)
 [🇫🇷 Francés](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 Indonesio](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Japonés](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polaco](../pl/README.md)
 [🇧🇷 Portugués](../pt/README.md)
 [🇷🇺 Ruso](../ru/README.md)
 [🇰🇪 Suajili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Chino](../zh/README.md)


 **[📚 ... Todos los idiomas ...](../README.md)**
 ----

 ### ¿Hay algún problema con esta traducción del LÉAME?
 Esta traducción particular del [README] original (https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 puede tener fallas -- * ¡las correcciones son muy bienvenidas! * Envíe una [solicitud de extracción en GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 o si no se siente cómodo haciendo eso, [abra un problema](https://github.com/cobbzilla/mobiletto-cli/issues)

 Cuando cree un nuevo problema de GitHub sobre una traducción, haga lo siguiente:
 * incluir la URL de la página (copiar/pegar desde la barra de direcciones del navegador)
 * incluir el texto exacto que está mal (copiar/pegar desde el navegador)
 * por favor describa lo que está mal -- ¿la traducción es incorrecta? ¿El formato está roto de alguna manera?
 * ofrezca amablemente una sugerencia de una mejor traducción, o cómo el texto debe formatearse correctamente
 * **¡Gracias!**

 # Contenidos
 * [Fuente](#Fuente)
 * [Apoyo y Financiamiento](#Apoyo-y-Financiamiento)
 * [Instalación y uso](#Instalación-y-uso)
 * [paquete npm](#paquete npm)
 * [De la fuente](#De-la-fuente)
 * [Conexiones](#Conexiones)
 * [Crear una conexión](#Crear-una-conexión)
 * [Lista de conexiones](#Lista-de-conexiones)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Eliminar una conexión](#Eliminar-una-conexión)
 * [Eliminar todas las conexiones](#Eliminar-todas-las-conexiones)
 * [Trabajando con almacenamiento](#Trabajando-con-almacenamiento)
 * [Lista de archivos](#Lista-archivos)
 * [Escribir un archivo en la salida estándar](#Escribir-un-archivo-en-la-salida estándar)
 * [Copiar archivos](#Copiar-archivos)
 * [Borrar archivos](#Borrar-archivos)
 * [Ver metadatos](#Ver-metadatos)
 * [Directorios espejo](#Directorios-espejo)

 ### Fuente
 * [mobiletto-cli en GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli en npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Apoyo y Financiamiento
 Estoy tratando de ser un desarrollador profesional de software de código abierto. he estado trabajando en
 la industria del software durante muchos años, comencé empresas exitosas y las vendí a empresas públicas.
 Recientemente perdí mi trabajo, y realmente no tengo ningún otro trabajo en fila

 Así que voy a intentar escribir un software útil y ver si funciona.

 Si disfruta usando este software, estaría sinceramente agradecido incluso por la
 la [contribución mensual más pequeña a través de Patreon](https://www.patreon.com/cobbzilla)

 *¡Gracias!*

 ## Instalación y uso
 Puede instalar y ejecutar `mobiletto-cli` través de npm o directamente desde la fuente.

 Paquete ### npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Desde la fuente
 Para ejecutar desde la fuente, necesitará nodejs v16+ e yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Conexiones
 Se accede a todo el almacenamiento de mobiletto a través de una conexión.

 Mobiletto actualmente admite conexiones al almacenamiento del sistema de archivos local y depósitos de Amazon S3.

 Las conexiones se especifican mediante un objeto JSON que se ve así:

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

 Para obtener detalles completos sobre todas las opciones y sus valores y significados, consulte la
 [documentos de mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Crear una conexión
 Para crear una nueva conexión, necesitamos uno de estos objetos JSON.

 Podemos crear uno de forma interactiva o proporcionar uno a través de un archivo o un literal JSON:

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

 ### Lista de conexiones
 Lista de conexiones disponibles:

    mo connect -l
    mo connect --list

 ### Volcado de configuración JSON de conexión
 Muestra la configuración JSON completa para una conexión. **ADVERTENCIA** esto imprimirá claves y secretos en la salida estándar.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Eliminar una conexión
 Eliminar una sola conexión:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Eliminar todas las conexiones
 Eliminar TODAS las conexiones:

    mo connect -R
    mo connect --remove-all

 ## Trabajar con almacenamiento
 Una vez que haya creado algunas conexiones, use las `ls` , `cp` , `rm` , `meta` y `mirror` mirror`
 para trabajar con ellos.

 Cada ruta de archivo que proporcione a un comando debe tener el prefijo del nombre de la conexión
 se refiere a. En los ejemplos a continuación, asumimos que existen dos conexiones llamadas `conn1` y `conn2`

 ### Lista de archivos
 El resultado de un comando de lista es una serie de objetos JSON, uno por línea, que representan los archivos
 fundar. Estos objetos tendrán un `name` y `type` , y posiblemente otros campos.

    mo ls conn1/some/path

 Listar archivos recursivamente:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota de almacenamiento cifrado**: la lista recursiva aún no es compatible con conexiones cifradas.
 Solo puede enumerar un directorio de archivos a la vez.

 Enumere los archivos detalladamente (JSON con letra bonita):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Enumere los archivos de forma recursiva y detallada:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Ver ayuda para el comando `ls` , describe todas las opciones:

    mo ls -h
    mo ls --help

 ### Escribir un archivo en la salida estándar
 El comando `cat` imprimirá un archivo en la salida estándar:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 En el verdadero espíritu UNIX *(¡aunque ciertamente no es la práctica!)* el comando `cat` de mobiletto **no acepta opciones**
 que no sea `-h` / `--help` para mostrar información útil.

 ### Copiar archivos
 Copie un solo archivo de un mobiletto a otro:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copie un solo archivo de un mobiletto a otro, renombrándolo en el destino:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copie recursivamente un directorio:

    mo cp -r conn1/some/directory conn2/some/dest/

 Ver ayuda para el comando `cp` , describe todas las opciones:

    mo cp -h
    mo cp --help

 Nota: la copia de archivos no es muy rápida, ya que actualmente requiere un archivo temporal intermediario.

 ### Borrar archivos
 Eliminar un solo archivo:

    mo rm conn1/some/file.txt

 Elimine un solo archivo y no se queje de ningún error:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Eliminar un directorio:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Elimine un directorio y no se queje de ningún error:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Ver metadatos
 Suele ser útil conocer los metadatos de un archivo, sin descargar todo el archivo.

 Mobiletto puede informar el tamaño del archivo y la hora de la última modificación, además del nombre y el tipo.

 Para ver los metadatos:

    mo meta conn1/some/file.txt

 ### Directorios espejo
 La duplicación es más que un caso especial de `cp` , es un comando mobiletto separado que envuelve el
 operación de copia; continúa incluso cuando se producen errores y realiza un seguimiento de los éxitos y errores.

 Para reflejar todo, desde conn1 a conn2:

    mo mirror conn1 conn2

 Para duplicar un subdirectorio:

    mo mirror conn1/some/subdir conn2

 Para duplicar un subdirectorio en otro subdirectorio:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
