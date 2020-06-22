// Примеры и обучение
// https://webref.ru/dev/automate-with-gulp/watch
// https://riptutorial.com/gulp/example/24018/minify-html-using-gulp-htmlmin
// https://webref.ru/dev/automate-with-gulp/plugins

var gulp            = require('gulp'),                      // Gulp   
    htmlmin         = require('gulp-htmlmin'),              // Сжатие html 
    compress_images = require('compress-images'),           // Уменьшение изображений 
    concat          = require('gulp-concat'),               // Объединяет все файлы js в один 
    minifyCss       = require('gulp-clean-css');            // old  'gulp-minify-css'


// Cжатие JS соde
// Подключаем gulp-uglify-es
// https://www.npmjs.com/package/gulp-uglify
const uglify         = require('gulp-uglify-es').default;


// Task to minify HTML
// Настройка сжатия - опции
// https://github.com/kangax/html-minifier
gulp.task('minify', function() {
     return gulp.src('source/*.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('public/'));
});


// Сжимаем JavaScript
gulp.task('minijs', function() {
     return gulp.src('source/js/*.js')
            .pipe(uglify())             
            .pipe(gulp.dest('public/js'));
});


// Minify CSS
gulp.task('mincss', function(){
  return gulp.src('source/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'));
});


// Объединяет все JS в один
gulp.task('scripts', function() {
  return gulp.src('source/js/*.js')
    .pipe(concat('all.js'))                       // Объединение 
    .pipe(uglify())                               // Сжать  
    .pipe(gulp.dest('public/js/all'));
});


// Cжатие картинок
// https://www.npmjs.com/package/gulp-image
// Combine compressing images [jpg] with two different algorithms, [jpegtran] and [mozjpeg];
// gulp compress_images
gulp.task('compress_images', function() {
    
    //[jpg] ---to---> [jpg(jpegtran)]
    compress_images('source/pic/**/*.{jpg,JPG,jpeg,JPEG}', 'build/img/', {compress_force: false, statistic: true, autoupdate: true}, false,
                                                // {jpg: {engine: 'jpegtran', command: ['-trim', '-progressive', '-copy', 'none', '-optimize']}},
                                                {jpg: {engine: 'jpegRecompress', command: ['--quality', '35', '--min', '60']}},
                                                {png: {engine: false, command: false}},
                                                {svg: {engine: false, command: false}},
                                                {gif: {engine: false, command: false}}, function(){
                                                	
    // [jpg(jpegtran)] ---to---> [jpg(mozjpeg)] WARNING!!! autoupdate  - recommended to turn this off, it's not needed here - autoupdate: false
    compress_images('source/pic/**/*.{jpg,JPG,jpeg,JPEG}', 'public/pic/', {compress_force: false, statistic: true, autoupdate: true}, false,
                                                    {jpg: {engine: 'mozjpeg', command: ['-quality', '35']}},
                                                    {png: {engine: false, command: false}},
                                                    {svg: {engine: false, command: false}},
                                                    {gif: {engine: false, command: false}}, function(){
        });        
    });
});


// Cлежение 
// за дирректориями - html, js, css
// Для 4 версии Gulp
gulp.task('watch', function () {
     gulp.watch('source/*.html',    gulp.series('minify'));
     gulp.watch('source/js/*.js',   gulp.series('minijs'));
     gulp.watch('source/css/*.css', gulp.series('mincss'));
     gulp.watch('source/pic/*.{jpg,JPG,jpeg,JPEG}', gulp.series('compress_images'));
    // gulp.watch('./app/js/**/*.js', gulp.series('js'));
});


// Добавление всех функций в загрузку
// Без этого работать не будет
gulp.task('default', gulp.series('minify', 'watch', 'minijs', 'compress_images','mincss'));
















