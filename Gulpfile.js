'use strict';

var babelify = require('babelify');
var browserify = require('browserify');
var connect = require('gulp-connect');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyify = require('minifyify');
var path = require('path');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var config = {
  out: 'dist',
  html: path.join('app', 'index.html'),
  js: path.join('app', 'scripts', 'client.jsx'),
  data: path.join('data', 'recipes.json')
};

function getBundler () {
  var browserifySettings = {
    entries: [ config.js ],
    extensions: [ '.js', '.jsx' ],
    transform: [
      [
        babelify,
        {
          sourceMaps: true,
          sourceMapsAbsolute: true,
          plugins: ['transform-class-properties'],
          presets: [ 'es2015', 'react' ]
        }
      ]
    ],
    debug: false,
    cache: {},
    packageCache: {},
    plugin: [
      [
        minifyify, {
          map: false
        }
      ]
    ]
  };

  return browserify(browserifySettings);
}

function bundle (bundler) {
  gutil.log('Update JavaScript bundle');

  return bundler
    .bundle()
      .on('error', gutil.log)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.out));
}

gulp.task('bundle:html', function () {
  return gulp.src(config.html)
    .pipe(gulp.dest(config.out));
});

gulp.task('bundle:data', function () {
  return gulp.src(config.data)
    .pipe(gulp.dest(config.out));
});

gulp.task('clean', function () {
  return del.sync([
    config.out + '/**'
  ]);
});

gulp.task('bundle:js', function () {
  var bundler = getBundler();

  return bundle(bundler);
});

gulp.task('watch:js', function () {
  var bundler = getBundler();
  // start JS file watching and rebundling with watchify
  var watcher = watchify(bundler, {
    // To run on VM mounted volume
    poll: true
  })
    .on('log', gutil.log)
    .on('update', function () {
      console.log('Updating ...');
      bundle(bundler);
    });

  return bundle(watcher);
});

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch',
  function (callback) {
    runSequence(
      ['clean', 'connect'],
      ['bundle:js', 'bundle:html', 'bundle:data'],
      ['watch:js'],
      callback
    );
  }
);
gulp.task('default', ['bundle:js']);
