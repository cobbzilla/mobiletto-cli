mobiletto-cli
 =============
 Uma interface de linha de comando (CLI) para [mobiletto](https://www.npmjs.com/package/mobiletto)
 armazenar.

 O Mobiletto oferece suporte a conexões com Amazon S3, Backblaze B2 e sistemas de arquivos locais.

 # Leia isso em outro idioma
 Este documento README.md foi traduzido, via [hokeylization](https://github.com/cobbzilla/hokeylization), para
 **[todos os idiomas suportados pelo Google Tradutor](https://cloud.google.com/translate/docs/languages)!**

 Tenho certeza que não é perfeito, mas espero que seja melhor que nada!

 [🇸🇦 Árabe](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alemão](../de/README.md)
 [🇺🇸 Inglês](../en/README.md)
 [🇪🇸 Espanhol](../es/README.md)
 [🇫🇷 francês](../fr/README.md)
 [🇹🇩 Hauçá](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonésio](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Japonês](../ja/README.md)
 [🇰🇷 coreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polonês](../pl/README.md)
 [🇧🇷 Português](../pt/README.md)
 [🇷🇺 russo](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 chinês](../zh/README.md)


 **[📚 ... Todos os Idiomas ...](../README.md)**
 ----

 ### Existe algum problema com esta tradução do README?
 Esta tradução específica do original [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 pode estar com defeito -- *correções são muito bem-vindas!* Envie uma [solicitação de pull no GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 ou se você não se sentir à vontade para fazer isso, [abra um problema](https://github.com/cobbzilla/mobiletto-cli/issues)

 Ao criar um novo problema no GitHub sobre uma tradução, faça:
 * inclua o URL da página (copiar/colar da barra de endereços do navegador)
 * inclua o texto exato que está errado (copiar/colar do navegador)
 * por favor descreva o que está errado -- a tradução está incorreta? a formatação está quebrada de alguma forma?
 * gentilmente oferecer uma sugestão de uma tradução melhor, ou como o texto deve ser formatado corretamente
 * **Obrigada!**

 # Conteúdo
 * [Fonte](#Fonte)
 * [Suporte e Financiamento](#Suporte-e-Financiamento)
 * [Instalação e uso](#Instalação-e-uso)
 * [pacote npm](#npm-package)
 * [Da fonte](#From-source)
 * [Conexões](#Conexões)
 * [Criar uma conexão](#Create-a-connection)
 * [Listar conexões](#List-connections)
 * [Dump connection JSON config](#Dump-connection-JSON-config)
 * [Remover uma conexão](#Remove-a-connection)
 * [Remover todas as conexões](#Remove-all-connections)
 * [Trabalhando com armazenamento](#Trabalhando com armazenamento)
 * [List files](#List-files)
 * [Escrever um arquivo para stdout](#Write-a-file-to-stdout)
 * [Copiar arquivos](#Copy-files)
 * [Excluir arquivos](#Delete-files)
 * [Ver metadados](#View-metadata)
 * [Diretórios de espelho](#diretórios de espelho)

 ### Fonte
 * [mobiletto-cli no GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli no npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Apoio e Financiamento
 Estou tentando ser um desenvolvedor profissional de software de código aberto. eu tenho trabalhado em
 na indústria de software por muitos anos, criei empresas de sucesso e as vendi para empresas públicas.
 Recentemente eu perdi meu emprego, e eu realmente não tenho nenhum outro trabalho alinhado

 Então, vou tentar escrever um software útil e ver se isso funciona

 Se você gosta de usar este software, eu ficaria sinceramente grato até mesmo pelo
 menor [contribuição mensal via Patreon](https://www.patreon.com/cobbzilla)

 *Obrigada!*

 ## Instalação e uso
 Você pode instalar e executar o `mobiletto-cli` via npm ou diretamente da fonte.

 ### pacote npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Da fonte
 Para executar a partir da fonte, você precisará do nodejs v16+ e yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Conexões
 Todo o armazenamento do mobiletto é acessado por meio de uma conexão.

 Atualmente, o Mobiletto oferece suporte a conexões com o armazenamento do sistema de arquivos local e buckets do Amazon S3.

 As conexões são especificadas por um objeto JSON que se parece com isso:

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

 Para detalhes completos sobre todas as opções e seus valores e significados, consulte o
 [documentos mobiletto](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Criar uma conexão
 Para criar uma nova conexão, precisamos de um desses objetos JSON.

 Podemos criar um interativamente ou fornecer um por meio de um arquivo ou literal JSON:

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

 ### Listar conexões
 Listar conexões disponíveis:

    mo connect -l
    mo connect --list

 ### Despejar a configuração JSON da conexão
 Mostre a configuração JSON completa para uma conexão. **AVISO** isso imprimirá chaves e segredos para stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Remover uma conexão
 Remova uma única conexão:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Remova todas as conexões
 Remova TODAS as conexões:

    mo connect -R
    mo connect --remove-all

 ## Trabalhando com armazenamento
 Depois de criar algumas conexões, use as `ls` , `cp` , `rm` , `meta` e `mirror`
 para trabalhar com eles.

 Cada caminho de arquivo que você fornece a um comando deve ser prefixado com o nome da conexão
 isso se refere a. Nos exemplos abaixo, assumimos que existem duas conexões chamadas `conn1` e `conn2`

 ### Listar arquivos
 A saída de um comando de lista é uma série de objetos JSON, um por linha, representando os arquivos
 encontrado. Esses objetos terão um `name` e um `type` type` , e possivelmente outros campos.

    mo ls conn1/some/path

 Listar arquivos recursivamente:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **Nota de armazenamento criptografado**: a listagem recursiva ainda não é compatível com conexões criptografadas.
 Você só pode listar um diretório de arquivos por vez.

 Liste os arquivos detalhadamente (JSON de impressão bonita):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Liste os arquivos recursiva e detalhadamente:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Veja a ajuda para o comando `ls` , descreve todas as opções:

    mo ls -h
    mo ls --help

 ### Grava um arquivo em stdout
 O comando `cat` imprimirá um arquivo para stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 No verdadeiro espírito UNIX *(mas certamente não é a prática!)* o comando `cat` cat` do mobiletto **não tem opções**
 diferente de `-h` / `--help` para exibir informações úteis.

 ### Copiar arquivos
 Copie um único arquivo de um mobiletto para outro:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Copie um único arquivo de um mobiletto para outro, renomeando-o no destino:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Copie recursivamente um diretório:

    mo cp -r conn1/some/directory conn2/some/dest/

 Veja a ajuda para o comando `cp` , descreve todas as opções:

    mo cp -h
    mo cp --help

 Observação: a cópia de arquivos não é muito rápida, pois atualmente requer um arquivo temporário intermediário.

 ### Deletar arquivos
 Excluir um único arquivo:

    mo rm conn1/some/file.txt

 Exclua um único arquivo e não reclame de nenhum erro:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Excluir um diretório:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Exclua um diretório e não reclame de nenhum erro:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Ver metadados
 Muitas vezes é útil conhecer os metadados de um arquivo, sem baixar o arquivo inteiro.

 O Mobiletto é capaz de informar o tamanho do arquivo e a hora da última modificação, além de nome e tipo.

 Para visualizar metadados:

    mo meta conn1/some/file.txt

 ### Diretórios de espelho
 O espelhamento é mais do que um caso especial de `cp` , é um comando mobiletto separado que envolve o
 operação de cópia; ele continua mesmo quando ocorrem erros e rastreia uma contagem de sucessos e erros.

 Para espelhar tudo de conn1 para conn2:

    mo mirror conn1 conn2

 Para espelhar um subdiretório:

    mo mirror conn1/some/subdir conn2

 Para espelhar um subdiretório em outro subdiretório:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
