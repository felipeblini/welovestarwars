# welovestarwars

## Projeto do Curso de Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

[![Join the chat at https://gitter.im/welovestarwars/Lobby](https://badges.gitter.im/welovestarwars/Lobby.svg)](https://gitter.im/welovestarwars/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Nesse projeto vamos ver que um **aplicativo híbrido é uma página HTML como qualquer outra** tendo apenas que ser otimizada para caber em telas pequenas de maneira responsiva e com componentes otimizados para _Touch Screen_, para isso usamos bibliotecas CSS e JS como o Materialize, Bootstrap, entre várias outras.

A nossa página HTML também **deve se comportar como um aplicativo móvel**, para isso o nosso 'site' deve ser um SPA (Single Page Application), ou seja, uma única página HTML com uma área reservada para a renderização das views que serão injetadas via AJAX, para isso podemos usar bibliotecas como JQuery para nos ajudar com o AJAX e a manipulação do DOM, mas é preferível usar **frameworks front-end como AngularJS, ReactJS, entre outros** que nos entregam uma sistema de SPA pronto e organizam nosso código com o _pattern_ MVC, eliminando o código spaghetti.

Veremos tbm que essa página precisa ter as _views_ injetadas com **transições animadas entre telas** que devem ser feitas feitas CSS que usa aceleração da CPU por questões de performance.

Além de tudo isso, precisamos ter **acesso às APIs nativas** dos devices, pra isso precisamos integrar nossa página HTML com o **Cordova**, adicionar plugins e usar os eventos que ele emite pra nos ajudar no ciclo-de-vida da nossa aplicação. Vamos entender a diferença entre **PhoneGap** e **Cordova** e que o nosso aplicativo vai rodar embarcado em uma **_WebView_**, o que realmente é uma _WebView_ e que essa é apenas uma _Activity_ e que segue o mesmo ciclo-de-vida de qualquer outra _Activity_.

Veremos também que essa página HTML precisa ter elementos UI mínimos e obrigatórios para qualquer aplicativo móvel. Todo aplicativo deve ter uma **barra de status** que combine com o design utilizado, uma **barra de navegação** fixa com um título e um **botão voltar**, a área do **conteúdo** e um **rodapé** (opcional) e que para fazermos isso contamos com a ajuda de bibliotecas com o Materialize, Bootstrap, JQuery Mobile, etc...

Antes de terminar vamos ver com um bom **ícone** e uma **_splash screen_** são importantes para um aplicativo móvel e que temos dezenas de tamanhos e resoluções de arquivos para criar, exportar e registrar no nosso XML de configurações e como podemos usar o **Ionic Resources** pra fazer esse trabalho pesado pra nós.

E depois como **emular** tudo isso, como fazer **_Debug_** e identificar erros, como visualizar nos devices e depois fazer o **_Build_** do aplicativo e **publicar nas lojas** de aplicativos móveis

Como se não bastasse temos que levar em consideração a **experiência do usuário em cada plataforma**, veremos como o usuário do **iPhone** espera que os elementos do UI sejam e como o aplicativo deve se comportar e como os dos **Android** e **Windows Phone** esperam, e entenderemos que o Material Design jamais deve ser entregue no IOS e que precisamos de um **UI agnóstico de plataforma**.  

Veremos como tudo isso fica muito fácil e simples com o **Ionic Framework** que toma o controle de tudo isso e nos permite ser muito mais produtivo

Durante o curso iremos caminhar de um projeto HTML simples, com JQuery e Material Design até um projeto _Cross-Platform_ completo com **Ionic**, **Gulp**, **Bower** e seremos capaz de entender **onde o Ionic se encaixa em tudo isso** e como ele se integra muito bem com o **Angular** e o **Cordova**. Passaremos pelas seguintes etapas:

1. **Protótipo**: entenderemos que um app híbrido é uma página HTML como qualquer outra e conheceremos o **_Work Flow_** de desenvolvimento de aplicativos móveis. Desenvolveremos um **protótipo** com dados estáticos em uma página HTML responsiva nos moldes do SPA com transições animadas em CSS e com ajuda do JQuery para manipular o DOM e o Materialize para estilizarmos nossos elementos UI nos moldes do Material Design, otimizando-os para _Touch Screen_  e telas pequenas - disponível na branch b1 (http://goo.gl/MBzt5T);
2. **PhoneGap**: Converteremos nosso protótipo (que é nada mais que um "site responsivo") em um **Projeto PhoneGap**, e usaremos o **Build online do PhoneGap** para entregarmos o app para o nosso cliente - disponível na branch b2 (http://goo.gl/etCpEV);
3. **Cordova e PhoneGap CLI**: Converteremos o nosso projeto PhoneGap em um projeto Cordova. Integraremos com a WEB API do cliente e exibiremos os dados nas nossas _views_. Adicionaremos e entederemos o plugin _white-list_ do **Cordova**. Entederemos o que é uma _Activity_ e integraremos o **Cordova** no nosso projeto para recebermos os **eventos do ciclo-de-vida** de uma **_Embedded WebView_** emitidos por ele e usaremos o **PhonGap CLI** e o **Cordova CLI** para seguirmos o **Workflow de testes de um aplicativo móvel** - disponível na branch b3 (http://goo.gl/O1E9su);
4. **Ionic Resources, Ícones e Splash Screen**: Instalaremos o Ionic e entenderemos o **Ionic Resources**. Vamos usar os arquivos base de **_splash screen_ e ícone** (especificados pelo time do Ionic) para gerar todos os arquivos necessários para cada plataforma e entenderemos a importância de uma boa _splash screen_ e um bom ícone na _home screen_ do usuário. Adicionaremos também o plugin do Cordova para controlarmos o **comportamento da _splash screen_** e o **plugin _device_** para termos estatísticas de quais devices estão usando nosso app - disponível na branch b4 (http://goo.gl/yR6Rfg)
5. **Angular, Bower e Gulp**: Entenderemos como o nosso código está spaghetti, pouco coeso e altamente acoplado e como isso prejudica a manutenção, evolução e nossa produtividade, vamos estudar a **Teoria das Responsabilidades Únicas**, **Separação de Interesses** e **Injeção de Dependências**. Estudaremos o básico do **Angular** retirando todo o sistema SPA que criamos na mão e aplicando o **SPA do Angular** e o seu **_Design Pattern_ MVC** pra organizarmos o nosso código e seu sistema de Injeção de Dependências para deixar nosso código com **alta coesão e baixo acoplamento**. Injetaremos também as dependências de UI no nosso HTML usando o **Bower e Gulp** e pra finalizar vamos fazer o **deploy** do nosso código para posterior **Build --release** - disponível na branch b5 ()
6. **Ionic Framework**: Criaremos um passo-a-passo do zero nosso **projeto em Ionic** - disponível na branch b6 ()

===

Em cada fase será aplicada uma tarefa para fixar o aprendizado

Em cada Branch está descrito todos programas e comandos necessários para rodar cada fase do projeto

Slides: http://goo.gl/hTNCmh
