var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var exec = require('child_process').exec;
var clean = require('gulp-clean');
 
gulp.task('clean', function () {
    return gulp.src('www', {read: false})
        .pipe(clean());
});

gulp.task('injetadep', function() {
    console.log('executando a tarefa injetadep');

    return gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./src'));
});

gulp.task('whatch_minhaapp', function() {
    gulp.watch('bower.json', ['injetadep']);
    gulp.watch(["src/**/*",
        "!src/lib/**/*"], ['reload']);
});

gulp.task('deployfiles', function() {
    setTimeout(function() {
        return gulp.src('src/**/*')
            .pipe(gulp.dest('www'));
    }, 1500);
});

gulp.task('startIonicServer', function(){
    setTimeout(function() {
        exec('ionic serve', function (err, stdout, stderr) {});
    }, 2500);
});

gulp.task('default', ['clean', 'deployfiles', 'startIonicServer']);

gulp.task('reload', ['clean', 'deployfiles']);