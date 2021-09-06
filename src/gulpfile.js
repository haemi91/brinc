const { src, dest } = require('gulp');

const sass = require('gulp-sass');

const paths = {
    css: {
        src: './src/components/header/*.scss',
        dest: './src/components/header/dist/css'
    }
}

const options = {
    scss: {
        outputStyle: 'expanded',
        sourceComments: false
    }
}

function styles(){
    return src(paths.css.src, { surcemaps: true })
        .pipe(sass(options.scss).on('error',sass.logError))
        .pipe(dest(paths.css.dest, { sourcemaps: true }))
}

exports.style = styles;