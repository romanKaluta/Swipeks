var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('jade', function() {
  gulp.src('./index.jade')
    .pipe(jade({
    	pretty: true
    }))
    .pipe(gulp.dest('.'))
});
 
gulp.task('default', function () {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.jade', ['jade']);
});
