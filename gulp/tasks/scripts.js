// Обьединяет js файлы в один и переносит файл в папку build/js

const jsFiles = [
    $.config.paths.arrayPathJs.jquery,
    $.config.paths.arrayPathJs.scrolloverflow,
    $.config.paths.arrayPathJs.fullpage,
    $.config.paths.js,
];

module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp.src(jsFiles)
            .pipe($.gp.plumber())
            // .pipe($.gulp.dest($.config.output.pathJs))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.babel({presets: ['@babel/preset-env']}))
            .pipe($.gp.concat('all.js'))
            .pipe($.gp.uglify())
            .pipe($.gp.rename('all.min.js'))
            .pipe($.gp.sourcemaps.write(''))
            .pipe($.gulp.dest($.config.output.pathJs))
            .pipe($.browserSync.reload({stream: true}));
    });
};