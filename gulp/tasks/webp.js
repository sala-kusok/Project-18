// Конвертирует картинки jpg,png,gif в формат webp и переносит в папку build/img

module.exports = function () {
    $.gulp.task('webp', function () {
        return $.gulp.src($.config.paths.webp + '**/*.{jpg,png}')
            .pipe($.gp.tinypngCompress({
                key: 'lQQPChk3pl9KJSFhKl0nH4kWx5vkqptk'
                // parallel: false // асинхронная загрузка всех картинок (по умолчанию: true)
                // parallelMax: 2 // сколько за раз отправлять картинок на сервер (по умолчанию: 5)
            }))
            .pipe($.gulp.dest($.config.output.pathImg))
            .pipe($.gulp.src($.config.paths.webp + '**/*.{jpg,png,gif}'))
            .pipe($.gp.webp({quality: 85}))
            .pipe($.gulp.dest($.config.output.pathImg))
            .pipe($.browserSync.reload({stream: true}));
    });
};