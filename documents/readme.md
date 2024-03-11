## Work with Gulp

1. Install Gulp
2. Install used packages
3. Create gulpfule.js
4. Start gulp


## 1. Install gulp in your project devDependencies:
```sh
npm install --global gulp
npm install --save-dev gulp
```


## 2. Install package
```
npm install gulp-clean-css --save-dev
npm install gulp-babel     --save-dev
npm install gulp-minify    --save-dev
npm install gulp-concat    --save-dev
npm audit fix --force
```


## 3. Watching gulp file
```js
console.log("Start Gulp...");

const {dest, gulp, src, watch, series} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const babel    = require('gulp-babel');
const minify   = require('gulp-minify');
const concat   = require('gulp-concat');


// .pipe(uglify())

// Compress CSS file 
function css() {
  console.log("CSS process...");
  return src('src/*.css')
   .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: Было  : ${details.stats.originalSize}`);
      console.log(`${details.name}: Стало : ${details.stats.minifiedSize}`);
    }))
    .pipe(cleanCSS( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } ))
    .pipe(dest('dist'));
}

// Приведение к стандарту
function js() {
  console.log("JS process...");
  return src(['src/*.js', 'mainjs/*.js', 'baselib/*.js'])
    .pipe(babel())
    .pipe(dest('distprep'));
}

// Concationation  all files JS файлы
function concatall() {
  console.log("JS dist process...");
  return src(['distprep/*.js', 'distprep/*.js', 'distprep/*.js'])
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(dest('dist'));
}


function concatgo() {
  console.log("GO concat...")
  return src(['go/*.go'])
        .pipe(concat('main.go'))
        .pipe(minify())
        .pipe(dest('dist'));
}

// Base function
exports.default = function() {

  console.log("Base module for Js and CSS compressions")
  // css()

  // You can use a single task
  watch('src/*.css', css);
  watch(['src/*.js', 'mainjs/*.js', 'baselib/*.js'], js);

  // слияние всех файлов в один в дирр dist
  watch('distprep/*.js', concatall);
  watch('go/*.go', concatgo);
  
};
```

## 3 Start gulp
```bat
gulp
```

## 4  Watch
```bat
gulp watch
gulp infy
gulp minijs
```

 
