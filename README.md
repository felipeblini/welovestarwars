# welovestarwars - branch 3 - Cordova
Curso Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

Nessa branch nós instalamos o **PhoneGap CLI** e o **Cordova CLI** e entendemos qual a diferença dos dois e que o PhoneGap engloba o Cordova e usa seus comandos.

Vimos a diferennça entre um projeto criado com PhoneGap e um projeto criado com Cordova, que basicamente é o _namespace_ utilizado no _config.xml_ e os arquivos a mais que o PhoneGap cria.

**Integramos o projeto ao Cordova**, ouvindo os **eventos que este emite** e adicionamos e usamos nosso **primeiro plugin**, o **_whitelist_** que libera nosso app a fazer requisições para as URLs externas que nós autorizarmos no _config.xml_. Adicionamos também a **plataforma _Browser_** que simula o Cordova no navegador e aprendemos a registrar isso para que futuros programadores sigam o nosso _workflow_ sem maiores problemas. Vimos também o objetivo da pasta _hooks_

Com o _whitelist_ configurado, integramos nosso código com a *Web API* do nosso cliente que expõe os dados do Banco de Dados dele e assim conseguimos acessar os dados que precisávamoa. Montamos um data factory com JavaScript e montamos a lista de todos os filmes, personagens, naves e planetas da franquia Star Wars sendo buscado via AJAX com ajudo do JQuery.

Aprendemos sobre o **Mundo Mobile** e a como **configurar o ambiente** de desenvolvimento pra esse mundo e como isso funciona no **Mundo Mobile Multiplataforma** e configuramos o **ambiente Java e Android**.

Com o ambiente Java e Android configurados, adicionamos a **Plataforma Android** no nosso projeto Cordova e aprendemos a emular no Android Studio, no Genymotion e no Device. Vimos que o debug no Chrome:inspect continua podendo ser usado e vimos como usar o ADB (Android Debug Bridge). E no final como fazer o buil local pelo Cordova CLI

###Node e NPM
Necessários para instalar o PhoneGap CLI e Cordova CLI

http://nodejs.org/ (ao instalar o NPM estará disponível)

###Instalar o PhoneGap CLI e o Cordova CLI
- $ npm install -g phonegap
- $ npm install -g cordova
- ou $ npm install -g phonegap cordova (pra instalar os dois com um único comando)

Nessa altura nós usamos o PhoneGap apenas pra rodar o seu servidor que tem o _livereload_ configurado e nos ajuda muito em nossa produtividade. Pra todos os outros comando podemos esquecer o PhoneGap e usar o Cordova diretamente.

###Download do Java
http://www.oracle.com/technetwork/java/javase/downloads/index.html

###Download do Genymotion
http://genymotion.com/download

###Configurar Variáveis de Ambiente
- ANDROID_HOME = caminho\para\Android\sdk
- JAVA_HOME = caminho\para\Java\jdk
- Path: %JAVA_HOME%\bin %ANDROID_HOME%\tools %ANDROID_HOME%\platform-tools

###Testar no Console
- $ javac -v
- $ java -version
- $ adb version

###Buscar Plugins do Cordova
https://www.npmjs.com/package/cordova-plugin-splashscreen

##Rodar essa Branch
No console, na pasta raiz do projeto: $ phonegap serve

Caso encontre algum erro use $ cordova serve

