var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

gulp.task('BS', function (){
  browserSync.init({
    server:{
      baseDir: './dist/'
    }
  })
  gulp.watch('./srcdist/index.html', ['html']);
  gulp.watch('./srcdist/style.scss', ['sass']);
})

//sass
gulp.task('sass', ['html', 'sass'], function(){
    return gulp.src('./srcdist/style.scss')
      .pipe(sass({outputStyle:"compressed"}))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream())
});


//html
gulp.task('html', function(){
    return gulp.src('./srcdist/index.html')
      .pipe(html({collapseWhitespace:true}))
      .pipe(gulp.dest('./dist/'))
      .pipe(browserSync.stream())
});


//DEFAULT
gulp.task('default',['BS']);