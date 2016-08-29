// Load plugins
var gulp = require('gulp');

gulp.task('minhatask', function() {
    return gulp.src('www/js/index.js')
        .pipe(gulp.dest('./www'));
})