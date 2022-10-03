const {dest, gulp, src, watch, series} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const babel    = require('gulp-babel');
const minify   = require('gulp-minify');
const concat   = require('gulp-concat');



// Compress CSS file 
function css() {
  return src('src/*.css')
   .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: Было  : ${details.stats.originalSize}`);
      console.log(`${details.name}: Стало : ${details.stats.minifiedSize}`);
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist'));
}

// Приведение к стандарту
function js() {
  return src(['src/*.js', 'mainjs/*.js', 'baselib/*.js'])
    .pipe(babel())
    .pipe(dest('distprep'));
}

// Concationation  all files JS файлы
// 
function concatall() {
  return src(['distprep/*.js', 'distprep/*.js', 'distprep/*.js'])
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(dest('dist'));
}


// Base function
exports.default = function() {

  console.log("Base module for Js and CSS compressions")
  // You can use a single task
  watch('src/*.css', css);

  watch(['src/*.js', 'mainjs/*.js', 'baselib/*.js'], js);

  // слияние всех файлов в один в дирр dist
  watch('distprep/*.js', concatall);

  // Or a composed task
  // watch('src/*.js', series(clean, javascript));
};

