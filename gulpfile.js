var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var exec = require('child_process').exec;
var clean = require('gulp-clean');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('cleanWWW', function () {
    console.log('excluindo todo o conteudo da pasta www');

    return gulp.src('www', { read: false })
        .pipe(clean());
});

gulp.task('cleanJS', ['compileFiles'], function () {
    console.log('executando a tarefa cleanJS que vai consequentemente fazer todo o deploy');

    setTimeout(function() {
        return gulp.src(['www/js/**/*',
            'www/js', 'www/lib/**/*',
            'www/lib', 'www/components/custom-directives/**/*.js'], { read: false })
            .pipe(clean());
    }, 4000);
});

gulp.task('copyFiles', ['cleanWWW'], function () {
    console.log('ecopiando os arquivos para pasta www, excluindo *.js e *.css');

    return gulp.src(['src/**/*',
        '!src/js/**/*.{js,css}',
        '!src/components/custom-directives/**/*.{js,css}'])
        .pipe(gulp.dest('www'));
});

gulp.task('copyJsFiles', ['copyFiles'], function () {
    console.log('copiando arquivos js, rodando o ngAnnotate antes');

    return gulp.src('src/js/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('www/js'));
});

gulp.task('copyCustomDirectivesJsFiles', ['copyJsFiles'], function () {
    console.log('copiando arquivos js da pasta custom-directives, rodando o ngAnnotate antes');

    return gulp.src('src/components/custom-directives/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('www/components/custom-directives'));
});

gulp.task('startIonicServer', function () {
    console.log('executando comando ionic serve...');

    setTimeout(function() {
        exec('ionic serve', function (err, stdout, stderr) { });
    }, 1000);
});

gulp.task('compileFiles', ['copyAll'], function () {
    console.log('identificando os js no src/index.html e compilando pra pasta www');

    return gulp.src('src/index.html')
        .pipe(usemin({
            assetsDir: 'www',
            js: [uglify(), 'concat']
        }))
        .pipe(gulp.dest('www'));
});

gulp.task('injetaDep', function () {
    console.log('executando a tarefa injetadep');

    return gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./src'));
});

gulp.task('copyAll', ['copyFiles', 'copyJsFiles', 'copyCustomDirectivesJsFiles'])


// ============================================================
// ======== tarefas para serem usadas diretamente: ===========
// ============================================================

// 1. rastreia mudanças no bower (pacotes instalados ou desinstalados)
// para atualizar as referências de js e css no HTML
// 2. rastreia mudanças na pasta src excluindo a pasta lib (pacotes do bower)
// para fazer o deploy das alterações na pasta www e ficar disponivel para o Ionic 
// atualizar no livereload de produção
gulp.task('watch-dev', function () {
    console.log('rastreando mudanças no bower.json e na src, ignorando a pasta lib');

    gulp.watch('bower.json', ['injetaDep']);
    gulp.watch(["src/**/*", "!src/lib/**/*"], ['deploy']);
});

// Monta a pasta www
// copia todos os arquivos da pasta src para www, excluindo arquivos .css, depois compila (uglify e concat),
// salva o resultado no arquivo bundle/app.concat.min.js apaga os arquivos js
// originais. PS: arquivos CSS são compilados pelo Ionic com a tarefa SASS dele
//PS2: a tarefa cleanJS depende de todas as outras, por isso ele executará todas as
// tarefas necessárias
gulp.task('deploy', ['cleanJS']);

// Tatrefa Default: executada com o comando gulp
// Executa o deploy acima e depois e roda o servidor Ionic com o comando ionic serve do Ionic
gulp.task('default', ['deploy', 'startIonicServer']);