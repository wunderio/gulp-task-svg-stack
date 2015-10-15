'use strict';

var path = require('path');
var defaultsDeep = require('lodash.defaultsdeep');
var svgSprite = require('gulp-svg-sprite');

module.exports = function (gulp, gulpConfig) {

  gulpConfig = gulpConfig || { basePath: '.' };

  // Merge default config with gulp config.
  var defaultConfig = {
    svgStack: {
      src: path.join('icons', '*.svg'),
      dest: 'images',
      filename: 'iconstack',
      svgSpriteOptions: {}
    }
  };

  var config = defaultsDeep(gulpConfig, defaultConfig).svgStack;

  // Default watch task.
  gulp.task('svg-stack-watch', ['svg-stack'], function () {
    gulp.watch(path.join(gulpConfig.basePath, config.src), ['svg-stack'])
  });

  gulp.task('svg-stack', function () {
    return gulp.src(path.join(gulpConfig.basePath, config.src))
      .pipe(svgSprite({
        mode: {
          defs: {
            dest: '.',
            sprite: config.filename + '.svg'
          }
        },
        svg: config.svgSpriteOptions
      }))
      .pipe(gulp.dest(path.join(gulpConfig.basePath, config.dest)));
  });
};
