const gulp = require('gulp'),
    run = require('run-sequence');

gulp.task('start-demo', (done) => {
    run(
        'build-web',
        'build-mobile-ios',
        [
            'start-desktop', 'start-mobile-ios', 'watch-web'
        ]
        , done);
});
