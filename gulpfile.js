var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var exec = require('child_process').exec;
var clean = require('gulp-clean');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
 
gulp.task('cleanWWW', function () {
    return gulp.src('www', {read: false})
        .pipe(clean());
});

gulp.task('cleanJS', ['compileFiles'], function () {
    //setTimeout(function() {
        return gulp.src(['www/js/**/*',
        'www/js', 'www/lib/**/*',
        'www/lib', 'www/components/custom-directives/**/*.js'], {read: false})
            .pipe(clean());
    //}, 1700);
});

gulp.task('injetaDep', function() {
    console.log('executando a tarefa injetadep');

    return gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./src'));
});

gulp.task('whatchSrc', function() {
    gulp.watch('bower.json', ['injetaDep']);
    gulp.watch(["src/**/*", "!src/lib/**/*"], ['deploy']);
});

gulp.task('copyFiles', ['cleanWWW'], function() {
    //setTimeout(function() {
        return gulp.src(['src/**/*',
            '!src/js/**/*.{js,css}',
            '!src/components/custom-directives/**/*.{js,css}'])
        .pipe(gulp.dest('www'));
    //}, 700);
});

gulp.task('copyJsFiles', ['copyFiles'], function() {
    //setTimeout(function() {
        return gulp.src('src/js/**/*.js')
            .pipe(ngAnnotate())
            .pipe(gulp.dest('www/js'));
    //}, 700);
});

gulp.task('copyCustomDirectivesJsFiles', ['copyJsFiles'], function() {
    //setTimeout(function() {
        return gulp.src('src/components/custom-directives/**/*.js')
            .pipe(ngAnnotate())
            .pipe(gulp.dest('www/components/custom-directives'));
    //}, 700);
});

gulp.task('startIonicServer', ['cleanJS'], function(){
    //setTimeout(function() {
        exec('ionic serve', function (err, stdout, stderr) {});
    //}, 2500);
});

gulp.task('compileFiles', ['copyAll'], function() {
   return gulp.src('src/index.html')
        .pipe(usemin({
            assetsDir: 'www',
            js: [uglify(), 'concat']
        }))
        .pipe(gulp.dest('www'));
});

gulp.task('copyAll', ['copyFiles', 'copyJsFiles', 'copyCustomDirectivesJsFiles'])

gulp.task('deploy', ['copyAll', 'compileFiles', 'cleanJS']);

gulp.task('default', ['deploy', 'startIonicServer']);