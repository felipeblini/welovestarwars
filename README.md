# welovestarwars
Curso Desenvolvimento de Aplicativos Híbridos com PhoneGap/Cordova, e Ionic

Nessa branch estudamos Angular com UI Router e como trabalhar com Gulp e Bower já que o Ionic usa esses por padrão.
Estudamos também uma arquitetura de software moderno separando nosso código entre os ambientes de Desenvolvimento e Produção, 'compilação' do projeto com uglify e concat e deploy apenas dos arquivos necessários para produção, eliminando gotrdura na hora que nosso usuário for fazer o dowload da nossa app nas lojas de aplicativos.

##Para Rodar e Alterar Código
Rode no Console:

###Alterações no código 
_$ gulp watch-dev_

Isso vai assistir as mudanças no código e compilar para a pasta www, necessária para o Ionic livereload

###Rodar o projeto no ambiente de Desenvolvimento
_$ cd src_ 
_$ http-server_ (instalar o http-server pelo npm)

###Visualizar projeto no ambiente de Produção
_$ gulp_

##http-server
_$ npm install -g http-server_

##Angular
https://angularjs.org/

##UI Router
- https://ui-router.github.io/

##AngularUI Router (UI Router para o Angular)
- https://angular-ui.github.io/ui-router/ (Site)
- https://angular-ui.github.io/ui-router/site/#/api/ui.router (API)
- https://github.com/angular-ui/ui-router/wiki (Documentação)


##Jhon Papa Style Guide para o Angular
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

####Full Modular Angular App (Jhon Papa)
https://github.com/johnpapa/ng-demos/tree/master/modular

##ngAnimate
https://docs.angularjs.org/api/ngAnimate
- Exemplo: http://www.w3schools.com/angular/angular_animations.asp

##Bower
http://bower.io

##Gulp
http://gulpjs.com/

####gulp-clean
https://www.npmjs.com/package/gulp-clean

####wiredep
https://www.npmjs.com/package/wiredep

####gulp-ng-annotate
https://www.npmjs.com/package/gulp-ng-annotate

####gulp-uglify
https://www.npmjs.com/search?q=gulp-uglify

####gulp-usemin
https://www.npmjs.com/package/gulp-usemin
