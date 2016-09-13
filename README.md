# welovestarwars - branch 2 - Protótipo
Curso Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

###Essa é a branch 2 - Integração com o PhoneGap e Build do Protótipo

Nessa branch nós apenas transferimos os arquivos para dentro de uma pasta chamada _www_ (padrão do PhoneGap) e criamos o arquivo _config.xml_.

Fizemos isso instalando o **PhoneGap** através do **PhoneGap Desktop** e criando um novo projeto PhoneGap. Vimos a estrutura de arquivos e pastas do _scaffolding_ que ele faz e excluímos os arquivos de dentro da pasta _www_ criada e colocamos os nossos arquivos criados na _branch_ anterior.

Vimos as **pastas plugins e plataforms** que o PhoneGap cria automaticamente e estudamos o arquchrivo **config.xml**.

Aprendemos como **levantar o servidor local do PhoneGap** para visualizar nosso app no navegador e como usar o **Developer Tools do Chrome** para fazer o Debug.

Vimos também como usar o **PhoneGap Developer** para visualizarmos o app no nosso device de maneira bem rápida e depois como fazer o build do app e entregar para o nosso cliente instalar e dar feedback usando a estrutura do PhoneGap nas nuvens - o **PhoneGap Build**, para fazermos esse build sem precisarmos ter o ambiente configurado localmente.

Vimos que precisamos enviar apenas a pasta _www_ e opcionalmente o _config.xml_ em um arquivo _zip_ ou usando um repositório do Git na web.

###PhoneGap
http://phonegap.com/

#####PhoneGap Desktop e PhoneGap Developer
http://phonegap.com/getstarted/

#####PhoneGap Build
http://build.phonegap.com/

#####Documentação do PhoneGap
http://docs.phonegap.com/

###Rodar o Projeto
Você ainda pode abrir diretamente o arquivo _www/index.html_ no navegador e o app vai rodar normalmente, porém pra poder visualizar o PhoneGap funcionando, instale o PhoneGap Desktop na sua máquina, adicione o pasta do projeto dentro dele e suba o servidor clicando no botão ">" que irá aparecer na lista de projetos adicionados. Isso vai te dar uma lista de IPs e portas da sua máquina que o app tá rodando, apenas digite um desses endereços no navegador (ex: http://192.177.2.2:8080).

Instale o PhoneGap Developer no seu device (IOS, Android ou WP) e conectado na mesma rede Wi-fi digite o IP e porta que o app tá rodando e ele vai fazer o download e abrir o app no seu device.

###Debug

Com o app rodando no device, acesse o _inspect_ do Chrome digitando chrome://inspect/ e você vai poder fazer o **debug** do app que está rodando no seu celular.

