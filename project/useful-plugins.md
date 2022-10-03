# Самые нужные плагины для Gulp

[Разработка веб-сайтов \*](https://habr.com/ru/hub/webdev/)[CSS \*](https://habr.com/ru/hub/css/)[JavaScript \*](https://habr.com/ru/hub/javascript/)[HTML \*](https://habr.com/ru/hub/html5/)[Node.JS \*](https://habr.com/ru/hub/nodejs/)

[![](https://habrastorage.org/r/w1560/files/703/58a/8b1/70358a8b154f4ed292dc66ec66c8a581.jpg)](https://github.com/Pestov/essential-gulp-plugins)

*Это пост можно сказать является дубликатом моей предыдущей подборки [“Самые нужные плагины для Grunt”](http://habrahabr.ru/post/251157/). Дело в том, что спустя много часов поиска я не нашел крутых плагинов для Gulp, которых нет для Grunt за исключением пары весьма специфичных утилит. Всё как раз наоборот, но проигнорировать множество пользователей Gulp я не мог. Все недостающие плагины я выделил, потому что Gulp умеет использовать их из Grunt, как и Grunt из Gulp.
*
Доброго времени суток, всем! Кто-то умный, не помню в какой статье именно на Хабре, буквально недавно размышлял о процессе разработки с явным призывом автоматизировать все, что только можно автоматизировать. И лучше один раз потратить время на автоматизацию, чтобы потом экономить его на протяжении всего проекта.

У веб-разработчиков есть прекрасный инструмент для автоматизации массы задач, который называется Gulp. И моя страсть к таксономии заставила себя собрать огромную коллекцию почти из 100 ценных плагинов для этого сборщика. Думаю многие кто уже использует Gulp найдут для себя что-то нужное, а кто нет, глядя на возможности, получит хорошую мотивацию установить его и понять как эта штука работает.

А еще я выложил [подборку на GitHub](https://github.com/Pestov/essential-gulp-plugins), чтобы каждый мог пополнить коллекцию.

#### HTML&CSS

[autoprefixer](https://github.com/postcss/autoprefixer) — один из самых полезных плагинов, который автоматически расставляет префиксы к CSS свойствам, исходя из статистики [caniuse](http://caniuse.com/). Важно сказать, что Автопрефиксер это лишь один из множества дополнений в рамках проекта [PostCSS](https://github.com/postcss/postcss) от Злых Марсиан.

[gulp-browser-sync](https://github.com/BrowserSync/gulp-browser-sync) — вероятно, самый нужный инструмент, с точки зрения повышения продуктивности веб-разработчиков. BrowserSync создает подключение, после чего производит автообновление страницы во всех браузерах на всех устройствах при изменениями не только клиентских или даже серверных файлов. А плюс ко всему синхронизирует позицию скроллинга и заполненные данные в формах.

[gulp-useref](https://github.com/jonkemp/gulp-useref) — парсит специфичные блоки и конкатенирует описанные в них стили и скрипты.

[gulp-email-design](https://github.com/alexshk/gulp-email-design) — бесценный инструмент при верстки писем, который переводит все CSS стили в инлайновые, автоматически изменяя все пути к файлам, опционально умеет загружать изображения на CDN и даже отсылать письма на почту.

[gulp-uncss](https://github.com/ben-eb/gulp-uncss) — лучшее решение для оптимизации CSS файлов. Плагин анализирует HTML код и находит все неиспользуемые и продублированные стили.

[gulp-csso](https://github.com/ben-eb/gulp-csso) — отличный CSS минификатор. На сегодняшний день существует целый ряд CSS компрессоров и сравнительная таблица (GitHub) по ним. Но недавно я увидел лучшую [Shorthand](https://github.com/frankmarineau/shorthand) утилиту без Gulp, которая делает приблизительно следующее:

```
a {
    font-family: Arial;
    font-style: italic;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    background-image: url('example.png');
    background-color: red;
    background-size: cover;
    background-repeat: no-repeat;
}

=>

a {
  font: italic bold 14px/18px Arial;
  background: red url('example.png') no-repeat / cover;
}

```

[gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) — простой HTML минификатор.

[gulp-csscomb](https://github.com/koistya/gulp-csscomb) — облагораживает структуру ваших CSS.

[gulp-csslint](https://www.npmjs.com/package/gulp-csslint) — CSS линтер.

[gulp-htmlhint](https://github.com/bezoerb/gulp-htmlhint) — HTML валидатор.

#### JavaScript

[gulp-autopolyfiller](https://github.com/azproduction/gulp-autopolyfiller) — мега крутой плагин, который похож на Autoprefixer и подбирает все необходимые полифилы для JavaScript, чтобы вы могли использовать последние стандарты ECMAScript уже сегодня. Еще рекомендую [gulp-babel](https://github.com/babel/gulp-babel), который конвертирует ES6/ES7 в ES5.

[gulp-jsfmt](https://www.npmjs.com/package/gulp-jsfmt) — полезнейший плагин для работы с JavaScript от команды Rdio, который позволяет искать конкретные фрагменты, форматировать и производить массовые изменения в коде. Также существует [gulp-jsbeautifier](https://github.com/tarunc/gulp-jsbeautifier).

[gulp-jscs](https://github.com/jscs-dev/gulp-jscs) — JavaScript Code Style. Замечательный инструмент со множеством конфигураций для проверки вашего кода в соответствии с существующими стайлгайдами от jQuery, Яндекса, Google, Airbnb и других.

[gulp-modernizr](https://github.com/doctyper/gulp-modernizr) — помогает составить правильную архитектуру проекта на основе Modernizr.js в зависимости от возможностей браузера.

[gulp-express](https://github.com/gimm/gulp-express) — запускает Express.js веб-сервер.

[gulp-requirejs](https://github.com/robinthrift/gulp-requirejs) и [gulp-browserify](https://github.com/deepak1556/gulp-browserify) — оптимизируют работу RequireJS и Browserify соответственно.

[gulp-plato](https://github.com/sindresorhus/gulp-plato) — предоставляет аналитику по вашему коду с разными метриками в виде красивых графиков.

[gulp-complexity](https://github.com/alexeyraspopov/gulp-complexity) — проверка на качество кода основанная на алгоритмах Halstead и Cyclomatic.

[fixmyjs](https://github.com/kirjs/gulp-fixmyjs) — автоматически исправляет простые ошибки в коде после линта выполненного на основе [JSHint](http://jshint.com/) ([gulp-jshint](https://github.com/spalger/gulp-jshint)).

[gulp-jscpd](https://github.com/yannickcr/gulp-jscpd) — для поиска дубликатов в коде.

[gulp-jsonlint](https://github.com/rogeriopvl/gulp-jsonlint) — валидатор JSON файлов.

[gulp-uglify](https://github.com/terinjokes/gulp-uglify) — JavaScript компрессор.

[gulp-concat](https://github.com/wearefractal/gulp-concat) — конкатенация файлов.

### Unit тесты

*   [gulp-nodeunit](https://github.com/kjvalencik/gulp-nodeunit)
*   [gulp-jasmine](https://github.com/sindresorhus/gulp-jasmine)
*   [gulp-qunit](https://github.com/jonkemp/gulp-qunit)
*   [gulp-mocha](https://github.com/sindresorhus/gulp-mocha)
*   [gulp-karma](https://github.com/karma-runner/gulp-karma)

#### Графика

[gulpicon](https://github.com/wakayama-io/gulpicon/) — ценный плагин, который позволяет генерировать спрайты из SVG, переводить их в PNG, записывать все Data URI и подключать нужный формат в зависимости от возможностей браузера.

[gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) — великолепный плагин для работы с веб-шрифтами. Умеет создавать WOFF, WOFF2, EOT, TTF файлы из SVG.

[gulp-responsive](https://github.com/mahnunchik/gulp-responsive) — простой способ сгенерировать адаптивные изображения под требуемые разрешения устройств с указанием соответствующих префиксов в наименовании.

[gulp-sharp](https://github.com/rizalp/gulp-sharp) — самый быстрый модуль для работы с JPEG, PNG, WebP и TIFF изображениями. Плагин умеет изменять размер, ориентацию, фон, альфа-канал и многое другое.

[gulp-svgstore](https://github.com/w0rm/gulp-svgstore) — объединяет все подключаемые SVG файлы и записывает их в HTML как `<symbol>` для дальнейшего использования.

[gulp-imacss](https://github.com/akoenig/imacss) — очень удобная утилита, которая автоматически преобразовывает подключенные в CSS изображения PNG, JPG, SVG в Data URI.

[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) и [gulp-tinypng](https://github.com/creativeaura/gulp-tinypng) для сжатия изображений.

[gulp-spritesmith](https://github.com/otouto/gulp-spritesmith) — автоматическая генерация спрайтов.

#### Разное

[gulp-grunt](https://github.com/gratimax/gulp-grunt) — позволяет запускать Grunt плагины для Gulp.

##### **Некоторые из отсутствующих:**

> [grunt-html-build](https://github.com/spatools/grunt-html-build) — универсальный помощник в верстке. Плагин умеет объединять исходные файлы и создавать полноценные шаблоны/блоки для вашего HTML. Еще для похожих задач очень хорош [grunt-include-replace](https://github.com/alanshaw/grunt-include-replace).
>
> [grunt-penthouse](https://github.com/fatso83/grunt-penthouse) и [grunt-criticalcss](https://github.com/filamentgroup/grunt-criticalcss) — автоматически находят Critical Path в вашем проекте. Важный момент с точки зрения производительность, о чем подробнее написано [тут](http://www.phpied.com/css-and-the-critical-path/).
>
> [grunt-shipit](https://github.com/shipitjs/grunt-shipit) — автоматизирует deploy с помощью Shipit.
>
> [grunt-githooks](https://github.com/wecodemore/grunt-githooks) — привязывает [Git Hooks](http://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) к Grunt таскам.
>
> [grunt-gitbook](https://github.com/GitbookIO/grunt-gitbook) — создавайте документацию с помощью потрясающей утилиты GitBook.
>
> [grunt-conventional-changelog](https://github.com/btford/grunt-conventional-changelog) — генерирует список изменений на основе коммитов в Git.
>
> [grunt-proxy](https://github.com/tutukin/grunt-proxy) and [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy) — connect support for proxying API calls during development.
>
> [grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas) — превосходный инструмент для измерения производительности проекта.
>
> [grunt-usebanner](https://github.com/mattstyles/grunt-banner) — добавляет баннеры (копирайт или ASCII заголовки) в исходных файлах и [grunt-figlet](https://github.com/patorjk/grunt-figlet) для помощи работы с этим.

[gulp-watch](https://github.com/floatdrop/gulp-watch) — краеугольный камень в плагинной системе Gulp. Следит за всеми указанными файлами или целыми директориями и в случае каких-либо изменений выполняет описанные в конфигурациях таски.

[gulp-notify](https://github.com/mikaelbr/gulp-notify) — выводит ошибки при сборке Gulp в виде системных сообщений, а главное то, что работает для разных операционных систем.

[gulp-git](https://github.com/stevelacy/gulp-git) — позволяет использовать Git команды.

[gulp-jsdoc](https://github.com/jsBoot/gulp-jsdoc) — генератор документации, работает на основе JSDoc3.

[gulp-rev](https://github.com/sindresorhus/gulp-rev) — полезный плагин для работы с ревизиями.

[gulp-release](https://github.com/pasangsherpa/gulp-release) — позволяет управлять версиями в вашем проекте.

[gulp-bump](https://github.com/stevelacy/gulp-bump) — следит за репозиторием и обновляет package.json и [gulp-update](https://github.com/tounano/gulp-update), который обновляет сами пакеты.

[gulp-bower-files](https://github.com/ck86/gulp-bower-files) — подключает все необходимые Bower компоненты.

[gulp-removelogs](https://github.com/hemanth/gulp-removelogs) — автоматически удаляет логи.

[gulp-preprocess](https://github.com/jas/gulp-preprocess) — препроцессор, ссылающийся на установленные конфигурации.

[gulp-duration](https://github.com/hughsk/gulp-duration) — отображает время выполнения тасков.

[gulp-changed](https://github.com/sindresorhus/gulp-changed) и [gulp-newer](https://www.npmjs.com/package/gulp-newer) — запускают таски только для изменившихся файлов.

[gulp-connect](https://github.com/avevlad/gulp-connect) — простой веб-сервер для статических сайтов.

[gulp-shell](https://github.com/sun-zheng-an/gulp-shell) — позволяет запускать Shell команды.

[gulp-ssh](https://github.com/teambition/gulp-ssh) — обеспечивает возможность подключения по SSH и SFTP.

[gulp-zip](https://www.npmjs.com/package/gulp-zip) — архивирует папки и файлы.

[gulp-clean](https://github.com/peter-vilja/gulp-clean) и [gulp-copy](https://github.com/klaascuvelier/gulp-copy) — соответственно очищают и копируют указанные исходники.

[gulp-filesize](https://github.com/Metrime/gulp-filesize) — отображает размеры файлов в удобном для чтения формате.

[gulp-util](https://github.com/gulpjs/gulp-util) — различные утилиты для разработки Gulp плагинов.

#### Компиляторы

[gulp-less](https://github.com/plus3network/gulp-less) — LESS в CSS.
[gulp-sass](https://github.com/dlmanning/gulp-sass) — SASS/SCSS в СSS.
[gulp-compass](https://github.com/appleboy/gulp-compass) — SASS с Compass в CSS.
[gulp-stylus](https://github.com/LearnBoost/stylus) — Stylus в CSS.
[gulp-coffee](https://github.com/wearefractal/gulp-coffee) — CoffeeScript в JavaScript.
[gulp-jade](https://github.com/phated/gulp-jade) — Jade в HTML.
[gulp-handlebars](https://github.com/lazd/gulp-handlebars) — Handlebars шаблоны в JST.
[gulp-jst](https://github.com/rdmurphy/gulp-jst) — Underscore шаблоны в JST.
[gulp-react](https://github.com/sindresorhus/gulp-react) — Facebook React’s JSX шаблоны в JST.
[gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks) — Nunjucks шаблоны в JST.
[gulp-dustjs](https://github.com/sindresorhus/gulp-dust) — Dust шаблоны в JST.
[gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) — AngularJS шаблоны в JST.

#### Напоследок

[psi](https://github.com/addyosmani/psi) — PageSpeed Insights with reporting.
[tmi](https://github.com/addyosmani/tmi) — TMI (Too Many Images) — discover your image weight on the web.
[ngrok](https://ngrok.com/) — Introspected tunnels to localhost.
[pageres](https://github.com/sindresorhus/pageres) — удобная утилита для создания скриншотов сайтов в разных разрешениях.
Возможно, некоторые методы автоматизации вам будет удобнее использовать прямо в редакторе — Лучшие плагины для SublimeText.
[matchdep](https://github.com/tkellen/node-matchdep) — помогает правильно описать зависимости.
