const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
        components: `${__dirname}/resources/js/components`,
        },
    },
});

mix.js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css');
    .postCss('resources/css/main.css', 'public/css/app.css')
    .options({
        // Our own set of PostCSS plugins.

        postCss: [
            require('postcss-easy-import')(),
            require('postcss-mixins')(),
            require('postcss-simple-vars')(),
            require('postcss-custom-selectors')(),
            require('postcss-calc')(),
            require('tailwindcss')(),
            require('postcss-color-function')(),
            require('postcss-nested')(),
            require('postcss-preset-env')()
        ],

        // Preset-env already processes our css with Autoprefixer, so we don't
        // need mix to do it twice.
        autoprefixer: false,

        // Since we don't do any image preprocessing and write url's that are
        // relative to the site root, we don't want the css loader to try to
        // follow paths in `url()` functions.
        processCssUrls: false,

        hmrOptions: {
            // host: process.env.DEFAULT_SITE_URL,
            port: process.env.DEFAULT_SITE_PORT
        }
    })

    .browserSync({
        proxy: process.env.APP_URL,
        port: process.env.DEFAULT_SITE_PORT,
        files: [
            'public/assets/css/app.css', // Generated .css file
            'public/assets/js/app.js', // Generated .js file
        ]
    });

mix.browserSync(process.env.APP_URL);

mix.copyDirectory('resources/assets', 'public/assets');

if (mix.inProduction()) {
    mix.version();
}
