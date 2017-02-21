var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const image = require('gulp-image');
var cssmin = require('gulp-cssmin');

gulp.task('images', [], function () {
  return gulp.src('./public-src/images/**/*')
    .pipe(image({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      jpegRecompress: true,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./public/images/'));
});

gulp.task('html', [], function () {
  return gulp.src('./public-src/views/**/*')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/views/'));
});

gulp.task('css', [], function () {
  return gulp.src('./public-src/styles/**/*')
    .pipe(cssmin())
    .pipe(gulp.dest('./public/styles/'));
})

gulp.task('default', ['images', 'html','css']);