"use strict"

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss');


gulp.task('css', function () {
    gulp.src('./css/**/*.css')
      .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });