# welovestarwars

## Projeto do Curso de Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

[![Join the chat at https://gitter.im/welovestarwars/Lobby](https://badges.gitter.im/welovestarwars/Lobby.svg)](https://gitter.im/welovestarwars/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Nesse projeto vamos ver que um aplicativo híbrido é uma página HTML como qualquer outra tendo apenas que ser otimizada para caber em telas pequenas de maneira responsiva e com conponentes otimizados para Touch Screen, para isso usamos bibliotecas CSS e JS como o Materialize, Bootstrap, entre várias outras.

A nossa página HTML também deve se comportar como um aplicativo móvel, para isso o nosso 'site' deve ser um SPA (Single Page Application), ou seja, uma única página HTML com uma área reservada para a renderização das views via AJAX, para isso podemos usar bibliotecas como JQuery para nos ajudar com o AJAX e a manipulação do DOM, mas é preferível que usamos frameworks front-end como Angular, React, entre outros que nos entregam uma sistema SPA e organizam nosso código, que geralmente vira um spaghetti, sob o pattern MVC.

Veremos tbm que essa página precisa ter as views injetadas com transições de telas animadas que devemos fazer usando propriedades CSS que usam aceleração da CPU por questões de performance.

Além de tudo isso, precisamos ter acesso às APIs nativas dos devices, pra isso precisamos integrar nossa página HTML com o *Cordova*, adicionar plugins e usar os eventos que ele emite pra nos ajudar no ciclo-de-vida da nossa aplicação. Vamos entender a diferença entre *PhoneGap* e *Cordova* e que o nosso aplicativo vai rodar embarcado em uma _WebView_, o que realmente é uma _WebView_ e que essa é apenas uma _Activity_ e que segue o mesmo ciclo-de-vida de qualquer outra _Activity_.

Veremos também que essa página HTML precisa ter elementos UI mínimos e obrigatórios para qualquer aplicativo móvel. Todo aplicativo deve ter uma barra de status que combine com o design utilizado, uma barra de navegação fixa com um título e um botão voltar, a área do conteúdo e um rodapé (opcional) e que para fazermos isso contamos com a ajuda de bibliotecas com o Materialize, Bootstrap, JQuery Mobile, etc...

Antes de terminar vamos ver com um bom ícone e uma splash screen são importantes para um aplicativo móvel e que temos dezenas de tamonhos e resoluções de arquivos para criar, exportar e registrar no nosso XML de configurações e como podemos usar o Ionic Resources pra fazer esse trabalho pesado pra nós.

E depois como emular tudo isso, como fazer Debug e identificar erros, como visualizar nos devices e depois fazer o Build e publicar nas lojas de aplicativos móveis

Como se não bastasse temos que levar em consideração a experiência do usuário em cada plataforma, veremos como o usuário do iPhone espera que o aplicativo se comporta e como o do Android deseja que o aplicativo seja, e entenderemos que o Material Design jamais deve ser entregue no IOS, precisamos de um design agnóstico de plataforma. 

Veremos como tudo isso fica muito fácil e simples com o Ionic Framework que toma o controle de tudo isso e nos permite focar nosso tempo no que realmente importa

Durante o curso iremos passar por um projeto HTML simples, com JQuery e Material Design até um projeto _Cross-Platform_ com Ionic, Gulp, Bower e vermos como o Ionic se intrega muito bem com o Angular e o Cordova. Passaremos pelas segiontes etapas:

- Protótipo, onde desenvolveremos uma página HTML nos moldes do SPA com transições aniadas em CSS e ajuda do JQuery para manipular o DOM e o Materialize para estilizarmos nossos elementos UI nos moldes do Material Design, otimizando-os para _Touch Screen_ (disponível na branch b1 (http://goo.gl/MBzt5T))
