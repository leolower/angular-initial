var concat = require('gulp-concat-util');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var filter = require('gulp-filter');
var config = require('./gulp.conf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var rimraf = require('rimraf');
var mainBowerFiles = require('main-bower-files');
var spawn = require('child_process').spawn;
var templateCache = require('gulp-angular-templatecache');

var gulp = require('gulp-help')(require('gulp'));



gulp.task('default', 'DEFAULT TASK: dev.', ['dev']);

gulp.task('dev', 'Builds, runs the server and watches for changes to rebuild.', [
    // 'auto-reload',
    'watch',
    'serve'
]);

gulp.task('serve', 'Runs the server with sync between browsers.', function() {
    browserSync({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.task('watch', 'Watches for changes on the source and runs the build task.', ['build'], function() {
    return gulp
        .watch('src/**', ['build']);
});


gulp.task('build', 'Builds the application on the build directory.', ['clean'], function() {

    gulp.src(config.app.partials)
        .pipe(templateCache({
            module: 'angular-initial'
        }))
        .pipe(gulp.dest('build/js/'));

    var bower_files = mainBowerFiles();

    gulp.src(bower_files)
        .pipe(filter('*.js'))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build/js/'));

    gulp.src(config.app.js)
        .pipe(concat('angular-initial.js'))
        .pipe(ngAnnotate())
        // .pipe(uglify())

        .pipe(concat.header('(function(window, document, undefined) {\n\'use strict\';\n'))
        .pipe(concat.footer('\n})(window, document);\n'))
        .pipe(gulp.dest('build/js/'));

    gulp.src(config.app.index)
        .pipe(gulp.dest('build'));

    gulp.src(config.app.less)
        .pipe(less())
        .pipe(concat('angular-initial.css'))
        .pipe(gulp.dest('build/css'));

    gulp.src(config.img)
        .pipe(gulp.dest('build/'));

    return gulp.src('*', {
            read: false
        })
        .pipe(reload({
            stream: true
        }));

});
gulp.task('clean', 'Cleans the build directory.', function(cb) {
    rimraf('./build', cb);
});

gulp.task('auto-reload', 'Reloads the default task when the gulpfile is updated.', function() {
    var process;

    function restart() {
        if (process) {
            process.kill();
        }

        process = spawn('gulp', ['default'], {
            stdio: 'inherit'
        });
    }

    gulp.watch(['gulpfile.js', 'gulp.conf.json'], restart);
    // restart();
});
