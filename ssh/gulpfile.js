'use strict'

var fs = require('fs');
var gulp = require('gulp')
var GulpSSH = require('gulp-ssh')

var config = {
  host: '192.168.0.21',
  port: 22,
  username: 'node',
  privateKey: fs.readFileSync('/Users/zensh/.ssh/id_rsa')
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('exec', function () {
  return gulpSSH
    .exec(['uptime', 'ls -a', 'pwd'], {filePath: 'commands.log'})
    .pipe(gulp.dest('logs'))
})

gulp.task('dest', function () {
  return gulp
    .src(['./**/*.js', '!**/node_modules/**'])
    .pipe(gulpSSH.dest('/home/iojs/test/gulp-ssh/'))
})

gulp.task('sftp-read', function () {
  return gulpSSH.sftp('read', '/home/iojs/test/gulp-ssh/index.js', {filePath: 'index.js'})
    .pipe(gulp.dest('logs'))
})

gulp.task('sftp-write', function () {
  return gulp.src('index.js')
    .pipe(gulpSSH.sftp('write', '/home/iojs/test/gulp-ssh/test.js'))
})

gulp.task('shell', function () {
  return gulpSSH
    .shell(['cd /home/iojs/test/thunks', 'git pull', 'npm install', 'npm update', 'npm test'], {filePath: 'shell.log'})
    .pipe(gulp.dest('logs'))
})
