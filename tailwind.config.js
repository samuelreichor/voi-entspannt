const breakpointSettings = require('./theme/breakpoints');
const colorSettings = require('./theme/colors');
const fontSettings = require('./theme/fonts');
const fontSizeSettings = require('./theme/fontSizes');

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './templates/**/*.{twig,html}',
        ],
        layers: [
            'base',
            'components',
            'utilities',
        ],
        mode: 'layers',
        options: {
            whitelist: [
                'web/static/css/*.css',
                './assets/css/*.css',
                './assets/css/*.css',
            ],
        }
    },
    theme: {
        colors: colorSettings,
        fontFamily: fontSettings,
        fontSize: fontSizeSettings,
        screens: breakpointSettings.pixel,
    },
    corePlugins: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};