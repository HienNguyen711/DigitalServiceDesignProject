/* file: gulpfile.js */

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass');


/* jshint task would be here */

gulp.task('default', function() {
  return gulp.src('app/public/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/public/css'));
});


/* updated watch task to include sass */

gulp.task('watch', function() {
  gulp.watch('app/public/js/**/*.js', ['jshint']);
  gulp.watch('app/public/sass/**/*.scss', ['build-css']);
});