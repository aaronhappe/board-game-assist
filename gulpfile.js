var
  // modules
  gulp = require('gulp'),
  fs = require('fs'),
  path = require('path'),
  createFile = require('create-file'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  assets = require('postcss-assets'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano'),
  notify = require('gulp-notify'),
  deporder = require('gulp-deporder'),
  concat = require('gulp-concat'),
  stripdebug = require('strip-debug'),
  uglify = require('uglify-js'),
  webpackStream = require('webpack-stream'),
  webpack = require('webpack');
  browserSync = require('browser-sync').create(),
  nodemon = require('nodemon'),
  webpackCongif = require('./webpack.config.server.js'),
  webpackCongifClient = require('./webpack.config.client.js'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'dist/'
  }
;

gulp.task('build', ['serve'], function() {

  console.log('build');

  var jsbuild = gulp.src(folder.src + 'server/index.js')
    .pipe(webpackStream( webpackCongif, webpack ));
    
  if (!devBuild) {
    jsbuild = jsbuildbul
      .pipe(stripdebug())
      .pipe(uglify());
  }

  return jsbuild.pipe(gulp.dest(folder.build));
});

gulp.task('serve', function () {

  fs.stat(folder.build + 'server.js', function(err, stat) { 
    if (err !== null) { 
      createFile(folder.build + 'server.js', '', function (err) {
        // file either already exists or is now created (including non existing directories) 
      });
    } 
  });

  nodemon({
    script: folder.build + 'server.js'
  , watch: folder.build + 'server.js'
  })
    .on('restart', function onRestart() {
        // Also reload the browsers after a slight delay
        setTimeout(function reload() {
            browserSync.reload({
                stream: false
            });
        }, 500);
    });
});

gulp.task('browser-sync', function() {

    var files = ['./src/client/index.js', './src/client/scss/*.scss', './src/server/*.js', './src/shared/*.js'];

    browserSync.init(files, {
        proxy: "localhost:8080"
    });
});

gulp.task('jsclient', function() {

  console.log('WHAT THE FUCK');

  var jsbuild = gulp.src(folder.src + 'client/index.js')
    .pipe(deporder())
    .pipe(concat('client.js'))
    .pipe(webpackStream( webpackCongifClient, webpack ));
    

  if (!devBuild) {
    jsbuild = jsbuild
      .pipe(stripdebug())
      .pipe(uglify());
  }

  return jsbuild.pipe(gulp.dest(folder.build));

});

// CSS processing
gulp.task('css', ['images'], function() {

  var postCssOpts = [
  assets({ loadPaths: ['client/images/'] }),
  autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
  mqpacker
  ];

  if (!devBuild) {
    postCssOpts.push(cssnano);
  }

  return gulp.src(folder.src + 'client/scss/main.scss')
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest(folder.build + 'css/'));
});

gulp.task('images', function() {
  var out = folder.build + 'images/';
  return gulp.src(folder.src + 'client/images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});

gulp.task('watch', function() {

  // server changes
  gulp.watch(folder.src + 'server/**/*', ['serve']);

  // javscript module changes
  gulp.watch(folder.src + 'client/scss/*.scss', ['css']);

  // javscript module changes
  gulp.watch(folder.src + 'shared/**/*.js', ['jsclient']);

  // javscript client index changes
  gulp.watch(folder.src + 'client/**/*.js', ['jsclient']);

});

gulp.task('default', ['build', 'jsclient', 'css', 'browser-sync', 'watch']);