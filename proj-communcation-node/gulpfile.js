var gulp  = require('gulp');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});