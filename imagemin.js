var Imagemin = require('imagemin');
var pngquant = require('imagemin-pngquant');

new Imagemin()
    .src('assets/img/**/*.{gif,jpg,jpeg,,png,svg}')
    .dest('assets/dist/img')
    .use(Imagemin.jpegtran({progressive: true}))
    .use(pngquant({quality: '65-80', speed: 4}))
    .run(function (err, files) {
        console.log(err, files);
        // => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
    });
