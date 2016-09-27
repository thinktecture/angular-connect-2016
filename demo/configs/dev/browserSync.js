module.exports = {
    port: 8000,
    files: ['./build/web/**/*.{html,css,js,map}'],
    server: {
        baseDir: './build/web',
        middleware: { 0: null }
    },
    open: true,
    injectChanges: true
};
