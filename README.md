# welovestarwars - branch 4 - Ionic Resources
Curso Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

Nessa branch vimos que é fácil adicionar um **ícone** legal na home screen e uma **_splashscreen_** maneira no nosso app. Percebemos que o Cordova adiciona um ícone padrão e que basta alterar esse ícone com o nosso design e deixar ele registrado no **_config.xml_**.

Instalamos o plugin **cordova-plugin-splashscreen** e percebemos que ao rodar novamente nosso app, aparece uma _splashscren_ padrão do Cordova e que para customizar ela basta criar uma imagem do tamanho da tela, exportar e registrar uma referência para a imagem no _config.xml_. Mas qual tamanho te tela?

Não é tão fácil assim né. Precisamos **criar e exportar** nossa **_splashscreen_** e nosso **ícone** em diversas **dimensões e resoluções**, apenas para o Android são 6 ícones e 12 _splashscreens_. Para o iPhone são muito mais arquivos a exportar. E além disso precisamos **registrar** cada um dos arquivos **no _config.xml_** usando as tags **_\<icon\>_** e **_\<splash\>_** e especificar as dimensões exatas e resoluções de cada uma.

É um baita trabalho! Por isso aprendemos a usar o **Ionic Resources**. Um **serviço do Ionic** que a partir de um **arquivo base** gera todas as imagens necessárias pra cada plataforma instalada no nosso projeto e ainda cria o registro de cada uma no _config.xml_. O que demoraríamos horas pra fazer, ele faz em segundos.

Aprendemos que devemos colocar esses arquivos base, **icon.png para o ícone** e **splash.psd para a splashscreen**, em um diretório chamado **_resources_** criado na raiz do projeto e após isso executar o comando _resources_ do **CLI do Ionic**. Vimos que, para usar o serviço, precisamos do arquivo **ionic.config.json** para configurar o nosso projeto como um **Projeto Ionic** e aprendemos também que os arquivos devem ter as respectivas extensões (**png** e **psd**) e que precisamos ter as **plataforsmas instaladas** (Android, ios, WP, etc) e registradas no _config.xml_.

Vimos também como configurar as preferências da splashscreen como tempo de exibição, fade e preloader no _config.xml_.

###Plugin Cordova Splashscreen
https://www.npmjs.com/package/cordova-plugin-splashscreen

###Documentação do Ionic Resources
http://ionicframework.com/docs/cli/icon-splashscreen.html

###Documentação do Cordova Splasscreen
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

###Imagens Base
- splash: http://code.ionicframework.com/resources/splash.psd
- ícone: http://code.ionicframework.com/resources/icon.psd

###Executar Comando
No console, na pasta do projeto, com os arquivos adicionados na pasta _resources_, execute: _$ ionic resources_

##Rodar essa Branch
Continuamos usanddo o servidor do PhoneGap.

Na raiz do projeto, execute: _$ phonegap serve_

