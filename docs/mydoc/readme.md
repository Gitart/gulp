## Gulp
1. Установить Gulp обязательно 4 версии 
2. Установить все используеме библиотеки 
3. Создать файл Gulpfile.js
4. Создать дирректории для входа и выхода информации



### Сначала опредление задачи  

```js
gulp.task('mincss', function(){
  return gulp.src('source/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'));
});
```

###  Cсылка на них в Watch процедуре
```js
gulp.task('watch', function () {
     gulp.watch('source/*.html',    gulp.series('minify'));
     gulp.watch('source/js/*.js',   gulp.series('minijs'));
     gulp.watch('source/css/*.css', gulp.series('mincss'));
     gulp.watch('source/pic/*.{jpg,JPG,jpeg,JPEG}', gulp.series('compress_images'));
    // gulp.watch('./app/js/**/*.js', gulp.series('js'));
});
```

### Потом описание используемых функций
```js
// Добавление всех функций в загрузку
// Без этого работать не будет
gulp.task('default', gulp.series('minify', 'watch', 'minijs', 'compress_images','mincss'));
```


### Запуск в консоли
Для просомтра watch или ('minify', 'watch', 'minijs', 'compress_images','mincss')

Примеры :

```
gulp watch  
gulp inify
gulp minijs 

```



