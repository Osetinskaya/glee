const { src, watch, dest, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const del = require('del');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    })
}

function svgSprites() {
    return src("app/images/svg/*.svg")
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg",
                    },
                },
            })
        )
        .pipe(dest("app/images"));
}


function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/mixitup/dist/mixitup.js',
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function images() {
    return src('app/images/**/*.*')
        .pipe(imagemin([imagemin.gifsicle({ interlaced: true }), imagemin.mozjpeg({ quality: 75, progressive: true }), imagemin.optipng({ optimizationLevel: 5 }), imagemin.svgo({
            plugins: [{
                removeViewBox: true
            }, { cleanupIDs: false }]
        })])).pipe(dest('dist/images'))
}



function build() {
    return src([
            'app/**/*.html',
            'app/css/style.min.css',
            'app/js/main.min.js'
        ], { base: 'app' })
        .pipe(dest('dist'))
}

function cleanDist() {
    return del('dist')
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.svgSprites = svgSprites;
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, styles, svgSprites, images, build);

exports.default = parallel(styles, svgSprites, scripts, browsersync, watching);