// Поднемает сервер и открывает слежку на файлами

module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            server: $.config.output.path
        });

        $.gulp.watch($.config.watch.html, $.gulp.series('html'));
        $.gulp.watch('#src/style/' + $.config.style + '/**/*.' + $.config.style, $.gulp.series($.config.style));
        $.gulp.watch($.config.watch.js, $.gulp.series('scripts'));
        $.gulp.watch($.config.watch.img, $.gulp.series('images'));
    });
};