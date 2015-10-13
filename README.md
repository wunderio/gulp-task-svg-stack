Gulp task svg stack
=================

> A gulp task for proper svg stack generation via [svg-sprite](https://github.com/jkphl/svg-sprite).

## Installation
```sh
npm install --save-dev wunderkraut/gulp-task-svg-stack
```

## Usage

### Basic usage

```js
// Require gulp.
var gulp = require('gulp')

// Require task module and pass gulp to provide the gulp tasks.
require('gulp-task-svg-stack')(gulp)
```

### Advanced usage
You can also pass a configuration to the task. This allows you to overwrite the default configuration and provide other configuration like a base path for your files.

#### gulpfile.js
```js
var gulp = require('gulp')
var gulpConfig = require('./gulpconfig')

// Just pass the configuration object as second parameter.
require('gulp-task-svg-stack')(gulp, gulpConfig)
```

#### gulpconfig.js
```js
var path = require('path');

module.exports = {
  // Basic configuration.
  basePath: '.',

  // Overwrite default configurations.
  svgStack: {
    src: path.join('images', 'icons', '*.svg'),
    dest: 'images',
    filename: 'iconstack'
  }
}
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/wunderkraut/gulp-task-svg-stack/issues/new).
