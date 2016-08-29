// Load plugins
var gulp = require('gulp');
var wiredep = require('wiredep').stream;


gulp.task('wiredep', function() {
    console.log('injetando dependencias css e js gerenciadas pelo bower');

    return gulp.src('www/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('www'));
});

gulp.task('watch', function () {
    gulp.watch('bower.json', ['wiredep']);
})