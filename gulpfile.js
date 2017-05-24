'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  cleanCSS  = require('gulp-clean-css');

gulp.task('concatScripts', function() {
  gulp.src([
    'js/jquery.js',
    'js/fastclick.js',
    'js/foundation.js',
    'js/foundation.equalizer.js',
    'js/foundation.reveal.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('js'))
});

gulp.task('concatCSS', function() {
  gulp.src([
    'css/normalize.css',
    'css/foundation.css',
    'css/basics.css',
    'css/menu.css',
    'css/hero.css',
    'css/photo-grid.css',
    'css/modals.css',
    'css/footer.css'
  ])
  .pipe(concat('style.css'))
  .pipe(gulp.dest('css'))
})

gulp.task('minifyScripts', function(){
  gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'))
});

gulp.task('cleanStyles', function() {
  gulp.src('css/style.css')
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('default', ['concatScripts', 'concatCSS', 'minifyScripts', 'cleanStyles'], function() {
  console.log("Default has delivered all dependancies!");
});
