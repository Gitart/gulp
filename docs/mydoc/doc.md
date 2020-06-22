# Introduction to Gulp.js with practical examples

May 25, 2014

6 min read

[nodeJS](https://julienrenaux.fr/tags/nodejs/)[gulpJS](https://julienrenaux.fr/tags/gulpjs/)

> Gulp.js is what we call a JavaScript Task Runner, it is Open Source and available on GitHub. It helps you automate repetitive tasks such as minification, compilation, unit testing, linting, etc. Gulp.js does not revolutionize automation but simplifies it tremendously.

---

### Table of contents

*   *   [What is Gulp.js?](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#what-is-gulp-js)
    *   [How is it better than Grunt or Cakefile?](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#how-is-it-better-than-grunt-or-cakefile)
    *   [Installation](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#installation)
    *   [Practical examples](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#practical-examples)
    *   [HTML Minification](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#html-minification-a-name-html-minification-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [CSS Minification](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#css-minification-a-name-css-minification-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [JS Minification](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#js-minification-a-name-js-minification-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [CoffeeScript Compilation](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#coffeescript-compilation-a-name-coffeescript-compilation-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [Less Compilation](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#less-compilation-a-name-less-compilation-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [Sass Compilation](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#sass-compilation-a-name-sass-compilation-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [ECMAScript 6 Compilation](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#ecmascript-6-compilation-a-name-es6-compilation-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [JavaScript Linting](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#javascript-linting-a-name-js-linting-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [CoffeeScript Linting](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#coffeescript-linting-a-name-coffeescript-linting-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [Rename a file](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#rename-a-file-a-name-rename-a-file-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [Concatenate files](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#concatenate-files-a-name-concatenate-files-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
    *   [Add copyright](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#add-copyright-a-name-add-copyright-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
        *   [Copyright](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#copyright)
    *   [Add copyright with version](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#add-copyright-with-version-a-name-add-copyright-with-version-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
        *   [Copyright](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#copyright-1)
        *   [Version](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#version)
    *   [Mix them up (Lint, Concat, Compile, Minify etc.)](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#mix-them-up-lint-concat-compile-minify-etc-a-name-mix-them-up-lint-concat-compile-minify-etc-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)
        *   [Copyright](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#copyright-2)
        *   [Version](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#version-1)
    *   [Tasks automation](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#tasks-automation-a-name-watch-coffeescript-a)[](https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/null)

---

## What is Gulp.js?

[Gulp.js](http://gulpjs.com/) is what we call a JavaScript Task Runner, it is Open Source and available on GitHub. It helps you automate repetitive tasks such as minification, compilation, unit testing, linting, etc. Gulp.js does not revolutionize automation but simplifies it tremendously.

Today the Web automation ecosystem is dominated by [Grunt.js](https://github.com/gruntjs/grunt) (which is a great tool BTW) but lately Gulp.js is getting more trending and soon will be overtaking Grunt.js (according to the GitHub popularity, aka “stars”: 7900 for Grunt.js and 6250 for Gulp.js).

## How is it better than Grunt or Cakefile?

I would say it is no better nor worse than Grunt or Cakefile, it is different. While Cakefile or Grunt use files to execute tasks, Gulp.js uses streams. It means that a typical Cakefile or Grunt workflow would be to execute a task that dumps a temporary file, than based on this file to execute another task that dumps another temporary file an so on…

With Gulp.js everything happens on the fly using [Node’s stream](http://nodejs.org/api/stream.html), temporary files are not needed anymore which make it easy to learn, use and enjoy.

## Installation

Use the `-g` options to install Gulp globally on your machine.

```bash
sudo npm install -g gulp
```

## Practical examples

Now let’s use Gulp a little bit. Throughout those examples we will discover how to use plugins to create specific tasks such as minifying, concatenate or even linting your code.

[Source available on Github](https://github.com/shprink/gulp-examples)

## HTML Minification

Using [gulp\-minify\-html](https://www.npmjs.org/package/gulp-minify-html)

```bash
npm install --save-dev gulp-minify-html
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html");

// task
gulp.task('minify-html', function () {
	gulp.src('./Html/*.html') // path to your files
	.pipe(minifyHtml())
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp minify-html
```

---

## CSS Minification

Using [gulp\-minify\-css](https://www.npmjs.org/package/gulp-minify-css)

```bash
npm install --save-dev gulp-minify-css
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, minifyCss = require("gulp-minify-css");

// task
gulp.task('minify-css', function () {
	gulp.src('./Css/one.css') // path to your file
	.pipe(minifyCss())
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp minify-css
```

---

## JS Minification

Using [gulp\-uglify](https://www.npmjs.org/package/gulp-uglify)

```bash
npm install --save-dev gulp-uglify
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");

// task
gulp.task('minify-js', function () {
	gulp.src('./JavaScript/*.js') // path to your files
	.pipe(uglify())
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp minify-js
```

---

## CoffeeScript Compilation

Using [gulp\-coffee](https://www.npmjs.org/package/gulp-coffee)

```bash
npm install --save-dev gulp-coffee
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, coffee = require("gulp-coffee");

// task
gulp.task('compile-coffee', function () {
	gulp.src('./CoffeeScript/one.coffee') // path to your file
	.pipe(coffee())
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp compile-coffee
```

---

## Less Compilation

Using [gulp\-less](https://www.npmjs.org/package/gulp-less)

```bash
npm install --save-dev gulp-less
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, less = require("gulp-less");

// task
gulp.task('compile-less', function () {
	gulp.src('./Less/one.less') // path to your file
	.pipe(less())
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp compile-less
```

---

## Sass Compilation

Using [gulp\-sass](https://www.npmjs.org/package/gulp-sass)

```bash
npm install --save-dev gulp-sass
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, sass = require("gulp-sass");

// task
gulp.task('compile-sass', function () {
	gulp.src('./Sass/one.sass') // path to your file
	.pipe(sass())
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp compile-sass
```

---

## ECMAScript 6 Compilation

Using [gulp\-babel](https://www.npmjs.com/package/gulp-babel)

```bash
npm install --save-dev gulp-babel
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, babel = require("gulp-babel");

// task
gulp.task('compile-es6', function () {
	gulp.src('./ES6/one.es6.js')
        .pipe(babel())
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp compile-es6
```

---

## JavaScript Linting

Using [gulp\-jshint](https://www.npmjs.org/package/gulp-jshint)

```bash
npm install --save-dev gulp-jshint
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, jshint = require("gulp-jshint");

// task
gulp.task('jsLint', function () {
	gulp.src('./JavaScript/*.js') // path to your files
	.pipe(jshint())
	.pipe(jshint.reporter()); // Dump results
});

```

In case of success:

```shell
[gulp] Starting 'jsLint'...
[gulp] Finished 'jsLint' after 6.47 ms
```

In case of failure:

```shell
[gulp] Starting 'jsLint'...
[gulp] Finished 'jsLint' after 5.86 ms
/var/www/gulp-examples/JavaScript/two.js: line 3, col 15, Expected '}' to match '{' from line 3 and instead saw '['.
/var/www/gulp-examples/JavaScript/two.js: line 3, col 16, Missing semicolon.
/var/www/gulp-examples/JavaScript/two.js: line 3, col 154, Expected an assignment or function call and instead saw an expression.

3 errors
```

Run:

```bash
gulp jsLint
```

---

## CoffeeScript Linting

Using [gulp\-coffeelint](https://www.npmjs.org/package/gulp-coffeelint)

```bash
npm install --save-dev gulp-coffeelint
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, coffeelint = require("gulp-coffeelint");

// task
gulp.task('coffeeLint', function () {
	gulp.src('./CoffeeScript/*.coffee') // path to your files
	.pipe(coffeelint())
	.pipe(coffeelint.reporter());
});

```

In case of success:

```shell
[gulp] Starting 'coffeeLint'...
[gulp] Finished 'coffeeLint' after 7.37 ms
```

In case of failure:

```shell
[gulp] Starting 'coffeeLint'...
[gulp] Finished 'coffeeLint' after 6.25 ms

one.coffee
?  line 3  Line contains a trailing semicolon

? 1 error
```

Run:

```bash
gulp coffeeLint
```

---

## Rename a file

Using [gulp\-rename](https://www.npmjs.org/package/gulp-rename)

```bash
npm install --save-dev gulp-rename
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, rename = require('gulp-rename')
, coffee = require("gulp-coffee");

// task
gulp.task('rename', function () {
	gulp.src('./CoffeeScript/one.coffee') // path to your file
	.pipe(coffee())  // compile coffeeScript
	.pipe(rename('renamed.js')) // rename into "renamed.js" (original name "one.js")
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp rename
```

---

## Concatenate files

Using [gulp\-concat](https://www.npmjs.org/package/gulp-concat)

```bash
npm install --save-dev gulp-concat
```

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, concat = require("gulp-concat");

// task
gulp.task('concat', function () {
	gulp.src('./JavaScript/*.js') // path to your files
	.pipe(concat('concat.js'))  // concat and name it "concat.js"
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp concat
```

---

## Add copyright

Using [gulp\-header](https://www.npmjs.org/package/gulp-header)

```bash
npm install --save-dev gulp-header
```

### Copyright

\[text\] /\* Gulp Examples by @julienrenaux:

*   [https://github.com/shprink](https://github.com/shprink)
*   [https://twitter.com/julienrenaux](https://twitter.com/julienrenaux)
*   [https://www.facebook.com/julienrenauxblog](https://www.facebook.com/julienrenauxblog)

Full source at [https://github.com/shprink/gulp\-examples](https://github.com/shprink/gulp-examples)

MIT License, [https://github.com/shprink/gulp\-examples/blob/master/LICENSE](https://github.com/shprink/gulp-examples/blob/master/LICENSE) \*/ \[/text\]

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, fs = require('fs')
, concat = require("gulp-concat")
, header = require("gulp-header");

// functions

// Get copyright using NodeJs file system
var getCopyright = function () {
	return fs.readFileSync('Copyright');
};

// task
gulp.task('concat-copyright', function () {
	gulp.src('./JavaScript/*.js') // path to your files
	.pipe(concat('concat-copyright.js')) // concat and name it "concat-copyright.js"
	.pipe(header(getCopyright()))
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp concat-copyright
```

---

## Add copyright with version

Using [gulp\-header](https://www.npmjs.org/package/gulp-header) and [Node’s file system](http://nodejs.org/api/fs.html)

```bash
npm install --save-dev gulp-header
```

### Copyright

\[text\] /\* Gulp Examples by @julienrenaux:

*   [https://github.com/shprink](https://github.com/shprink)
*   [https://twitter.com/julienrenaux](https://twitter.com/julienrenaux)
*   [https://www.facebook.com/julienrenauxblog](https://www.facebook.com/julienrenauxblog)

Version: <%= version %> Full source at [https://github.com/shprink/gulp\-examples](https://github.com/shprink/gulp-examples)

MIT License, [https://github.com/shprink/gulp\-examples/blob/master/LICENSE](https://github.com/shprink/gulp-examples/blob/master/LICENSE) \*/ \[/text\]

### Version

\[text\] 1.0.0 \[/text\]

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, fs = require('fs')
, concat = require("gulp-concat")
, header = require("gulp-header");

// functions

// Get version using NodeJs file system
var getVersion = function () {
	return fs.readFileSync('Version');
};

// Get copyright using NodeJs file system
var getCopyright = function () {
	return fs.readFileSync('Copyright');
};

// task
gulp.task('concat-copyright-version', function () {
	gulp.src('./JavaScript/*.js')
	.pipe(concat('concat-copyright-version.js')) // concat and name it "concat-copyright-version.js"
	.pipe(header(getCopyrightVersion(), {version: getVersion()}))
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp concat-copyright-version
```

---

## Mix them up (Lint, Concat, Compile, Minify etc.)

The purpose of this task is to mix the previous tasks into just one.

### Copyright

\[text\] /\* Gulp Examples by @julienrenaux:

*   [https://github.com/shprink](https://github.com/shprink)
*   [https://twitter.com/julienrenaux](https://twitter.com/julienrenaux)
*   [https://www.facebook.com/julienrenauxblog](https://www.facebook.com/julienrenauxblog)

Version: <%= version %> Full source at [https://github.com/shprink/gulp\-examples](https://github.com/shprink/gulp-examples)

MIT License, [https://github.com/shprink/gulp\-examples/blob/master/LICENSE](https://github.com/shprink/gulp-examples/blob/master/LICENSE) \*/ \[/text\]

### Version

\[text\] 1.0.0 \[/text\]

gulpfile.js:

```js
// including plugins
var gulp = require('gulp')
, fs = require('fs')
, coffeelint = require("gulp-coffeelint")
, coffee = require("gulp-coffee")
, uglify = require("gulp-uglify")
, concat = require("gulp-concat")
, header = require("gulp-header");

// functions

// Get version using NodeJs file system
var getVersion = function () {
	return fs.readFileSync('Version');
};

// Get copyright using NodeJs file system
var getCopyright = function () {
	return fs.readFileSync('Copyright');
};

// task
gulp.task('bundle-one', function () {
	gulp.src('./CoffeeScript/*.coffee') // path to your files
	.pipe(coffeelint()) // lint files
	.pipe(coffeelint.reporter('fail')) // make sure the task fails if not compliant
	.pipe(concat('bundleOne.js')) // concat files
	.pipe(coffee()) // compile coffee
	.pipe(uglify()) // minify files
	.pipe(header(getCopyrightVersion(), {version: getVersion()})) // Add the copyright
	.pipe(gulp.dest('path/to/destination'));
});

```

Run:

```bash
gulp bundle-one
```

---

## Tasks automation

Using gulp.watch you can easily automate any tasks when files are modified. It is really convenient because you do not have to run single tasks by hand every time a file is modified, and therefore your code is always up to date.

```js
// including plugins
var gulp = require('gulp');

// task
gulp.task('watch-coffeescript', function () {
    gulp.watch(['./CoffeeScript/*.coffee'], ['compile-coffee']);
});

```

Run:

Now run the task:

```bash
gulp watch-coffeescript
```

and see what happens when you modify one of the source file.
