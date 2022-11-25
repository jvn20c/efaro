"use strict"

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss');

gulp.task('css', watchFunction)

function compilarCSS() {
  return gulp
      .src('./css/**/*.css')
      .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
}

function watchFunction(){
  gulp.watch('./css/**/*.css', compilarCSS)
}