# welovestarwars - branch 4 - Ionic Resources
Curso Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

Nessa branch vimos que é fácil adicionar um **ícone** legal na home screen e uma **_splashscreen_** maneira no nosso app. Percebemos que o Cordova adiciona um ícone padrão e que basta alterar esse ícone com o nosso design e deixar ele registrado no `config.xml`.

Instalamos o plugin `cordova-plugin-splashscreen` e percebemos que ao rodar novamente nosso app, aparece uma _splashscren_ padrão do Cordova e que para customizar ela basta criar uma imagem do tamanho da tela, exportar e registrar uma referência para a imagem no `config.xml`. Mas qual tamanho te tela?

Não é tão fácil assim né. Precisamos **criar e exportar** nossa **_splashscreen_** e nosso **ícone** em diversas **dimensões e resoluções**, apenas para o Android são 6 ícones e 12 _splashscreens_. Para o iPhone são muito mais arquivos a exportar. E além disso precisamos **registrar** cada um dos arquivos no `config.xml` usando as tags `<icon \>` e `<splash \>` e especificar as dimensões exatas e resoluções de cada uma.

**É um baita trabalho!** Por isso aprendemos a usar o **Ionic Resources**. Um **serviço do Ionic** que a partir de um **arquivo base** gera todas as imagens necessárias pra cada plataforma instalada no nosso projeto e ainda cria o registro de cada uma no `config.xml`. O que demoraríamos horas pra fazer, ele faz em segundos.

Aprendemos que devemos colocar esses arquivos base, **icon.png para o ícone** e **splash.psd para a splashscreen**, em um diretório chamado `resources` criado na raiz do projeto e após isso executar o comando `ionic resources` do **CLI do Ionic**. Vimos que, para usar este serviço, precisamos do arquivo `ionic.config.json` para converter o nosso projeto como um **Projeto Ionic** e aprendemos também que os arquivos devem ter as respectivas extensões (**png** e **psd**) e que precisamos ter as **plataforsmas instaladas** (Android, ios, WP, etc) e registradas no `config.xml`.

Vimos também como configurar as preferências da _splashscreen_ como tempo de exibição, fade e preloader no `config.xml` e também como emular essas preferências no `browser`.

###Plugin Cordova Splashscreen
https://www.npmjs.com/package/cordova-plugin-splashscreen

###Documentação do Ionic Resources
http://ionicframework.com/docs/cli/icon-splashscreen.html

###Documentação do Cordova Splasscreen
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

###Imagens Base
- `splash`: http://code.ionicframework.com/resources/splash.psd
- `ícone`: http://code.ionicframework.com/resources/icon.psd

###Usar o Ionic Resources
No console, na pasta raiz do projeto, com os arquivos base adicionados na pasta `resources` com as devidas extensões, execute: `$ ionic resources`

O Ionic fará o upload dos arquivos base para os servidores remotos dele, redimensionar e nos devolver todas as imagens necessárias, além de criar um registro pra cada no `config.xml`. 

###Emular Splashscreen no Browser
- Adicione uma imagem `logo.png` (padrão), ou qualquer outro nome de imagem dentro de uma pasta `/img` (padrão) ou qualuquer outra de sua preferência
- A diferença nos nomes das pastas é que escolhendo o padrão `/img_/logo.png` o Cordova vai identificar essa como sendo a imagem da _splashscreen_ na plataforma `browser`
- No `config.xml` adicione:
```xml
<platform name="browser">
      <preference name="SplashScreen" value="img/splash-browser.png" /> <!-- ou use "" caso o arquivo /img_/logo.png -->
      <preference name="SplashScreenDelay" value="3000" />
      <preference name="SplashScreenBackgroundColor" value="black" />
      <preference name="ShowSplashScreen" value="true" />
      <preference name="SplashScreenWidth" value="320" />
      <preference name="SplashScreenHeight" value="480" />
  </platform>
```

##Rodar essa Branch
Continuamos usanddo o servidor do **PhoneGap**. Na raiz do projeto, execute: `_$ phonegap serve_`

