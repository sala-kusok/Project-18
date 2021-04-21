// Выполняет таски и собирает папку build

module.exports = function () {
    $.gulp.task('default', $.gulp.series('clean', 'fonts', 'images', 'webp', 'svg', 'css', 'html', $.config.style, 'scripts', 'serve'));
};