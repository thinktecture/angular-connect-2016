const gulp = require('gulp'),
    run = require('run-sequence');

gulp.task('start-demo', (done) => {
    run(
        'build-web',
        'mobile:build:copy-dev-config',
        [
            'start-desktop', 'start-mobile-ios', 'watch-web'
        ]
        , done);
});
