# Gulp: A Web Developer's Secret Weapon for Maximizing Site Speed

When dealing with web-based projects that run in the production environment, being able to build and deploy changes quickly is a top priority. However, repetitive processes such as building front-end assets, when not automated, can be prone to critical errors. In this article, Toptal Freelance Software Engineer Anton Kanevsky shows us how Gulp can solve various challenges of build automation through simple JavaScript routines.



Many of us have to handle web-based projects that are used in production, which provide various services to the public. When dealing with such projects, it is important to be able to build and deploy our code quickly. Doing something quickly often leads to errors, especially if a process is repetitive, therefore it’s a good practice to automate such a process as much as possible.


My fellow developers: There is no excuse for serving junk to your browser.

In this post, we will be looking at a tool that can be a part of what will allow us to achieve such automation. This tool is an npm package called Gulp.js. In order to become familiar with the basic Gulp.js terminology used in this post, please refer to “[An Introduction to JavaScript Automation with Gulp](https://www.toptal.com/nodejs/an-introduction-to-automation-with-gulp)” that was previously published on the blog by [Antonios Minas](https://www.toptal.com/resume/antonios-minas), one of our fellow Toptal developers. We will assume basic familiarity with the npm environment, as it is used extensively throughout this post to install packages.

## Serving Front-End Assets

Before we continue, let’s take a few steps back to get an overview of the problem that Gulp.js can solve for us. Many web-based projects feature front-end JavaScript files that are served to the client in order to provide various functionalities to the web page. Usually there’s also a set of CSS stylesheets that are served to the client as well. Sometimes when looking at the source code of a website or a web application, we can see code like this:

```html
<link href="css/main.css" rel="stylesheet">
<link href="css/custom.css" rel="stylesheet">
<script src="js/jquery.min.js"></script>
<script src="js/site.js"></script>
<script src="js/module1.js"></script>
<script src="js/module2.js"></script>

```

There are a few problems with this code. It has references to two separate CSS stylesheets and four separate JavaScript files. This means that the server has to make a total of six requests to the server, and each request has to separately load a resource before the page will be ready. This is less of an issue with HTTP/2 because HTTP/2 introduces parallelism and header compression, but it’s still an issue. It increases the total volume of traffic that is required to load this page and reduces the quality of user experience because it takes longer to load the files. In case of HTTP 1.1, it also hogs the network and reduces the number of request channels that are available. It would have been much better to combine the CSS and JavaScript files into a single bundle for each. That way, there would be only a total of two requests. It would also have been nice to serve minified versions of these files, which are usually much smaller than the originals. Our web application might also break if any of the assets are cached, and the client would receive an outdated version.

![Overload](https://uploads.toptal.io/blog/image/127815/toptal-blog-image-1545170804658-d392b934444ce755d3affb5ac31acf39.png)

One primitive approach to solving some of these problems is to manually combine each type of asset into a bundle using a text editor, and then run the result [through a minifier service](https://www.toptal.com/developers/javascript-minifier), such as [http://jscompress.com/](http://jscompress.com/). This proves to be very tedious to do continuously during the development process. A slight but questionable improvement would be to host our own minifier server, using one of the packages available on GitHub. Then we could do things that would look somewhat similar to the following:

```html
<script src="min/f=js/site.js,js/module1.js"></script>

```

This would serve minified files to our client, but it would not solve the problem of caching. It would also cause additional load on the server since our server would essentially have to concatenate and minify all the source files repetitively on every request.

## Automating with Gulp.js

Surely we can do better than either of these two approaches. What we really want is to automate bundling and include it in the build phase of our project. We want to end up with pre-built asset bundles that are already minified and are ready to serve. We also want to force the client to receive the most up to date versions of our bundled assets on every request, but we still want to leverage caching if possible. Luckily for us, Gulp.js can handle that. In the remainder of the article, we will be building a solution that will leverage the power of Gulp.js to concatenate and minify the files. We will also be using a plugin to bust the cache when there are updates.

We will be creating the following directory and file structure in our example:

```
public/
|- build/
   |- js/
      |- bundle-{hash}.js
   |- css/
      |- stylesheet-{hash}.css
assets/
|- js/
   |- vendor/
   |- jquery.js
   |- site.js
   |- module1.js
   |- module2.js
|- css/
   |- main.css
   |- custom.css
gulpfile.js
package.json

```

npm makes package management in Node.js projects a bliss. Gulp provides tremendous extensibility by taking advantage of npm’s simple packaging approach to deliver modular and powerful plugins.

The gulpfile.js file is where we will define the tasks that Gulp will perform for us. The `package.json` is used by npm to define our application’s package and track the dependencies that we will be installing. The public directory is what should be configured to face the web. The assets directory is where we will store our source files. To use Gulp in the project, we will need to install it via npm and save it as a developer dependency for the project. We will also want to start with the `concat` plugin for Gulp, which will allow us to concatenate multiple files into one.

To install these two items, we will run the following command:

```
npm install --save-dev gulp gulp-concat

```

Next, we will want to begin writing the content of gulpfile.js.

```js
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);

```

Here, we are loading the gulp library and its concat plugin. We then define three tasks.

![Loading the gulp library and its concat plugin](https://uploads.toptal.io/blog/image/127816/toptal-blog-image-1545170869623-65d19943835622e025c54342e81c3c16.png)

The first task (`pack-js`) defines a procedure to compress multiple JavaScript source files into one bundle. We list the source files, which will be globbed, read, and concatenated in the order specified. We pipe that into the concat plugin to get one final file called `bundle.js`. Finally, we tell gulp to write the file to `public/build/js`.

The second task (`pack-css`) does the same thing as above, but for the CSS stylesheets. It tells Gulp to store the concatenated output as `stylesheet.css` in `public/build/css`.

The third task (`default`) is the one Gulp runs when we invoke it with no arguments. In the second parameter, we pass the list of other tasks to execute when the default task is run.

Let’s paste this code into gulpfile.js using any source code editor that we normally use, and then save the file to the application root.

Next, we will open the command line and run:

```
gulp

```

If we look at our files after running this command, we will find two new files: `public/build/js/bundle.js` and `public/build/css/stylesheet.css`. They are concatenations of our source files, which solves part of the original problem. However, they are not minified, and there is no cache busting yet. Let’s add automated minification.

## Optimizing Built Assets

We will need two new plugins. To add them, we will run the following command:

```
npm install --save-dev gulp-clean-css gulp-minify

```

The first plugin is for minifying CSS, and the second one is for minifying JavaScript. The first one uses the clean-css package, and the second one uses the UglifyJS2 package. We will load these two packages in our gulpfile.js first:

```js
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

```

We will then need to use them in our tasks just before we write the output to disk:

```js
.pipe(minify())
.pipe(cleanCss())

```

The gulpfile.js should now look like this:

```js
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
   .pipe(gulp.dest('public/build/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);

```

Let’s run gulp again. We will see that the file `stylesheet.css` is saved in minified format, and the file `bundle.js` is still saved as is. We will notice that we now also have bundle-min.js, which is minified. We want only the minified file, and we want it saved as `bundle.js`, so we will modify our code with additional parameters:

```js
.pipe(minify({
    ext:{
        min:'.js'
    },
    noSource: true
}))

```

As per gulp-minify plugin documentation (https://www.npmjs.com/package/gulp-minify), this will set the desired name for the minified version, and tell the plugin not to create the version containing the original source. If we delete the content of the build directory and run gulp from the command line again, we will end up with just two minified files. We have just finished implementing the minification phase of our build process.

## Cache Busting

Next, we will want to add cache busting, and we will need to install a plugin for that:

```js
npm install --save-dev gulp-rev

```

And require it in our gulp file:

```js
var rev = require('gulp-rev');

```

Using the plugin is a bit tricky. We have to pipe the minified output through the plugin first. Then, we have to call the plugin again after we write the results to disk. The plugin renames the files so that they are tagged with a unique hash, and it also creates a manifest file. The manifest file is a map that can be used by our application to determine the latest filenames that we should refer to in our HTML code. After we modify the gulp file, it should end up looking like this:

```js
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('public/build/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('public/build'));
});

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(rev())
            .pipe(gulp.dest('public/build/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('public/build'));
});

gulp.task('default', ['pack-js', 'pack-css']);

```

With proper cache busting in place, you can go nuts with long expiry time for your JS and CSS files and reliably replace them still with newer versions whenever necessary.

Let’s delete the contents of our build directory and run gulp again. We will find that we now have two files with hashtags affixed to each of the filenames, and a manifest.json saved to `public/build`. If we open the manifest file, we will see that it only has a reference to one of our minified and tagged files. What is happening is that each task writes a separate manifest file, and one of them ends up overwriting the other. We will need to modify the tasks with additional parameters that will tell them to look for the existing manifest file and to merge the new data into it if it exists. The syntax for that is a bit complicated, so let’s look at what the code should look like and then go over it:

```js
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('public/build/js'))
        .pipe(rev.manifest('public/build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));
    });

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(rev())
        .pipe(gulp.dest('public/build/css'))
        .pipe(rev.manifest('public/build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['pack-js', 'pack-css']);

```

We are piping the output to `rev.manifest()` first. This creates tagged files instead of the files that we had before. We are providing the desired path of our `rev-manifest.json`, and telling `rev.manifest()` to merge into the existing file, if it exists. Then we are telling gulp to write the manifest to the current directory, which at that point will be public/build. The path issue is due to a bug that is discussed in more detail on GitHub.

We now have automated minification, tagged files, and a manifest file. All of this will allow us to deliver the files more quickly to the user, and bust their cache whenever we make our modifications. There are just two remaining problems though.

The first problem is that if we make any modifications to our source files, we will get newly tagged files, but the old ones will remain there as well. We need some way to automatically delete old minified files. Let’s solve this problem using a plugin that will allow us to delete files:

```
npm install --save-dev del

```

We will require it in our code and define two new tasks, one for each type of source file:

```js
var del = require('del');

gulp.task('clean-js', function () {
    return del([
        'public/build/js/*.js'
    ]);
});

gulp.task('clean-css', function () {
    return del([
        'public/build/css/*.css'
    ]);
});

```

We will then make sure that the new task finishes running before our two main tasks:

```js
gulp.task('pack-js', ['clean-js'], function () {
gulp.task('pack-css', ['clean-css'], function () {

```

If we run `gulp` again after this modification, we will have just the latest minified files.

The second problem is that we don’t want to keep running gulp every time we make a change. To solve this, we will need to define a watcher task:

```js
gulp.task('watch', function() {
 gulp.watch('assets/js/**/*.js', ['pack-js']);
 gulp.watch('assets/css/**/*.css', ['pack-css']);
});

```

We will also change the definition of our default task:

```js
gulp.task('default', ['watch']);

```

If we now run gulp from the command line, we will find that it no longer builds anything upon invocation. This is because it now calls the watcher task that will watch our source files for any changes, and build only when it detects a change. If we try changing any of our source files and then look at our console again, we will see that the `pack-js` and `pack-css` tasks run automatically along with their dependencies.

Now, all we have to do is load the manifest.json file in our application and get the tagged filenames from that. How we do that depends on our particular back-end language and technology stack, and would be quite trivial to implement, so we will not go over it in detail. However, the general idea is that we can load the manifest into an array or an object, and then define a helper function that will allow us to call versioned assets from our templates in a manner similar to the following:

```js
gulp(‘bundle.js’)

```

Once we do that, we will not have to worry about changed tags in our filenames ever again, and we will be able to focus on writing high-quality code.

The final source code for this article, along with a few sample assets, can be found in [this GitHub repository](https://github.com/akanevsky/toptal-blog).

## Conclusion

In this article, we went over how to implement Gulp based automation for our build process. I hope that this proves helpful to you and allows you to develop more sophisticated build processes in your own applications.

Please keep in mind that Gulp is just one of the tools that can be used for this purpose, and there are many others such as Grunt, Browserify, and Webpack. They vary in their purposes and in the scope of problems that they can solve. Some can solve problems that Gulp cannot, such as bundling [JavaScript](https://www.toptal.com/javascript) modules with dependencies that can be loaded on demand. This is referred to as “code splitting”, and it is an improvement over the idea of serving one big file with all parts of our program on every page. These tools are quite sophisticated but might be covered in the future. In a following post, we will go over how to automate the deployment of our application.
