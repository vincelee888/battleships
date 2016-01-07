// Include gulp
var gulp = require('gulp') 

// Include Our Plugins
var jshint = require('gulp-jshint')

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})
var jasmine = require('gulp-jasmine');
 
gulp.task('jasmine', function () {
    return gulp.src('spec/**/*[Ss]pec.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it 
        .pipe(jasmine())
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('**/*.js', ['lint', 'jasmine'])
})

// Default Task
gulp.task('default', ['jasmine', 'lint', 'watch'])
