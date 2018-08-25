'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-goacoin');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
