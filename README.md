# welovestarwars - branch 2 - PhoneGap
Curso Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

###Essa é a branch 2 - Integração com o PhoneGap e Build do Protótipo

Nessa branch nós apenas instalamos o **PhoneGap** através do download do **PhoneGap Desktop** e criamos nosso primeiro projeto PhoneGap. Excluímos o conteúdo da pasta `www` criada pelo PhoneGap e transferimos nossos arquivos, criados na _branch_ anterior, para dentro dela, e estudamos o arquivo `config.xml` também criado pelo PhoneGap.

Vimos a estrutura de arquivos e pastas do _scaffolding_ que o PhoneGap faz e estudamos as pastas `plugins` e `plataforms` que o PhoneGap cria automaticamente.

Aprendemos como **levantar o servidor local do PhoneGap** para visualizar nosso app no navegador e como usar o **Developer Tools do Chrome** para fazer o **Debug** do nosso código e layout.

Vimos também como usar o **PhoneGap Developer** para visualizarmos o app no nosso device de maneira bem rápida e depois como fazer o **build** do app usando o ambiente configurado nas nuvens do PhoneGap - o **PhoneGap Build**, para fazermos esse **build** sem precisar inntalar e configurar nada no nosso computador. Depois vimos uma maneira de entregar o protótipo do app para o nosso cliente instalar, testar e dar _feedback_

Vimos que precisamos enviar apenas a pasta `www` e opcionalmente o arquivo `config.xml`, compactados em um arquivo `zip` ou usando um repositório do Git na web.

###PhoneGap
http://phonegap.com/

#####PhoneGap Desktop e PhoneGap Developer
http://phonegap.com/getstarted/

#####PhoneGap Build
http://build.phonegap.com/

#####Documentação do PhoneGap
http://docs.phonegap.com/

###Rodar o Projeto
Você ainda pode abrir diretamente o arquivo `www/index.html` no navegador e o app vai rodar normalmente, porém pra poder visualizar o PhoneGap funcionando, use o **PhoneGap Desktop** e rode o projeto criado por lá, você pode adicionar qualquer projeto PhoneGap nele e subir o servidor clicando no botão ">" que irá aparecer na lista de projetos adicionados. Isso vai te dar uma lista de `IPs` e portas da sua máquina onde o app está rodando, apenas escolha um entre eles e digite-o no navegador (ex: `http://192.177.2.2:8080`).

Instale o **PhoneGap Developer** no seu celular (IOS, Android ou WP) e, conectado na mesma rede `Wi-fi`, digite o mesmo `IP` e porta que o app tá rodando e ele vai fazer o _download_, o _buil_ e abrir o app no celular.

###Debug

Com o app rodando no elular, acesse o `inspect` do Chrome digitando `chrome://inspect/` no navegador, escolha o device na lista apresentada e você vai poder fazer o **debug** do app visualizando diretamente no seu celular.

