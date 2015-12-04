// Imports
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var image = require('gulp-image');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var clean = require('gulp-clean');

// Variables
var sURL = 'test.dev/contador/build';
var sURLResources = 'src/'
var sURLRelease = 'build/'

var aCore = [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/underscore/underscore-min.js',
    './bower_components/backbone/backbone-min.js',
    './bower_components/requirejs/require.js',
    './bower_components/text/text.js',
];

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: sURL
    });
});

gulp.task('del', function() {
    return gulp.src(sURLRelease + '**/*')
        .pipe(clean({
            force: true
        }));
});

gulp.task('html', function() {
    return gulp.src([
            sURLResources + 'html/**/*.html',
        ])
        .pipe(htmlmin({
            collapseWhitespace: true

        }))
        .pipe(gulp.dest(sURLRelease));
});

gulp.task('sass', function() {
    return sass(sURLResources + 'sass/*.scss')
        .on('error', function(err) {
            notify.onError({
                title: 'Sass',
                message: '<%= error.message %>',
            })(err);
            this.emit('end');
            console.error('Sass: ', err.message);
        })
        .pipe(gulp.dest(sURLResources + 'css'));
});

gulp.task('css', ['sass'], function() {
    return gulp.src([
            sURLResources + 'css/bootstrap.min.css',
            sURLResources + 'css/!(bootstrap.min)*.css',
        ])
        .pipe(concat('all.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest(sURLRelease + 'css'))
        .pipe(browserSync.stream());

});

gulp.task('bower', function() {
    return gulp.src(aCore)
        .pipe(gulp.dest(sURLResources + 'js/core'));
});

gulp.task('jsCore', ['bower'], function() {
    return gulp.src([
            sURLResources + 'js/core/*.js',

        ])
        .pipe(gulp.dest(sURLRelease + 'js/core'));
});

gulp.task('js', function() {
    return gulp.src([
            sURLResources + 'js/*.js',
            sURLResources + 'js/**/*.js'
        ])
        .pipe(react())
        .on('error', function(err) {
            notify.onError({
                title: 'React',
                message: '<%= error.message %>'
            })(err);
            this.emit('end');
            console.error('React: ', err.message);
        })
        .pipe(babel())
        .on('error', function(err) {
            notify.onError({
                title: 'Babel',
                message: '<%= error.message %>'

            })(err);
            this.emit('end');
            console.error('Babel: ', err.message);
        })
        .pipe(uglify())
        .pipe(gulp.dest(sURLRelease + 'js'))
        .pipe(browserSync.stream());
});

gulp.task('imageDev', function() {
    return gulp.src([
            sURLResources + 'img/*',
            sURLResources + 'img/**/*'
        ])
        .pipe(gulp.dest(sURLRelease + 'img'));
});

gulp.task('fonts', function() {
    return gulp.src([
            sURLResources + 'fonts/*',
            sURLResources + 'fonts/**/*'
        ])
        .pipe(gulp.dest(sURLRelease + 'fonts'))
        .pipe(browserSync.stream());
});

gulp.task('imagePro', function() {
    return gulp.src([
            sURLResources + 'img/*',
            sURLResources + 'img/**/*'
        ])
        .pipe(image())
        .pipe(gulp.dest(sURLRelease + 'img'));
});

gulp.task('watch', function() {
    gulp.watch(sURLResources + 'html/**/*.html', ['html']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'html/*.html', ['html']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'sass/*.scss', ['css']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'css/*.css', ['css']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'js/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'js/**/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'js/core/*.js', ['jsCore']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'img/**/*', ['imageDev']).on('change', browserSync.reload);
    gulp.watch(sURLResources + 'fonts/**/*', ['fonts']).on('change', browserSync.reload);
});

gulp.task('del', ['del']);
gulp.task('production', ['html', 'css', 'js', 'jsCore', 'fonts', 'imagePro']);
gulp.task('default', ['browser-sync', 'html', 'js', 'fonts', 'imageDev', 'css', 'watch']);
