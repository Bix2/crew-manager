// https://tailwindcss.com/docs/configuration

const pxToRem = (px, base = 16) => `${px / base}rem`;

const custumSizes = {
    '0': '0',
    '2': pxToRem(2),
    '4': pxToRem(4),
    '8': pxToRem(8),
    '10': pxToRem(10),
    '12': pxToRem(12),
    '16': pxToRem(16),
    '18': pxToRem(18),
    '20': pxToRem(20),
    '24': pxToRem(24),
    '32': pxToRem(32),
    '40': pxToRem(40),
    '48': pxToRem(48),
    '56': pxToRem(56),
    '64': pxToRem(64),
    '72': pxToRem(72),
    '80': pxToRem(80),
    '88': pxToRem(88),
    '96': pxToRem(96),
    '120': pxToRem(120),
    '136': pxToRem(136),
    '160': pxToRem(160),
    '180': pxToRem(180),
    '200': pxToRem(200),
    '240': pxToRem(240),
    '280': pxToRem(280),
    '320': pxToRem(320),
    '400': pxToRem(400),
    '420': pxToRem(420),
    '480': pxToRem(480),
    '560': pxToRem(560),
};

module.exports = {
    theme: {
        grid: {
            maxWidth: pxToRem(1200),
            gaps: {
                default: pxToRem(16),
                wrap: pxToRem(24),
                small: pxToRem(8)
            }
        },

        ratio: {
            '2:1': '50%',
            '4:3': '75%',
            '7:8': '115%',
            '10:8': '80%',
            '16:9': '56.25%',
            '13:10': '76.92%',
            '20:17': '117.64%'
        },

        screens: {
            xs: '400px',
            sm: '700px',
            md: '850px',
            lg: '1200px',
            xl: '1450px',
            mobile: { max: '849px' }
        },

        borderColor: theme => ({
            ...theme('colors'),
            default: theme('colors.gray.200', 'currentColor')
        }),

        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            black: '#000000',
            white: '#fff',
            blue: '#1f75fe',
            purple: 'violet',
            green: {
                100: '#f0fff4',
                200: '#c6f6d5',
                300: '#9ae6b4',
                400: '#68d391',
                500: '#48bb78',
                600: '#38a169',
                700: '#2f855a',
                800: '#276749',
                900: '#22543d'
            },
            red: {
                100: '#ffeded',
                200: '#FED7D7',
                300: '#FEB2B2',
                400: '#FC8181',
                500: '#F56565',
                600: '#E53E3E',
                700: '#C53030',
                800: '#9B2C2C',
                900: '#742A2A'
            },
            orange: {
                100: '#FFEEE6',
                200: '#FFD5BF',
                300: '#FFBB99',
                400: '#FF884D',
                500: '#FF5500',
                600: '#E64D00',
                700: '#993300',
                800: '#732600',
                900: '#4D1A00'
            },
            gray: {
                100: '#fafbfb',
                200: '#f6f7f6',
                300: '#989c9a',
                400: '#a0aec0',
                500: '#cacccb',
                600: '#cacccb',
                700: '#272727',
                800: '#010509',
                900: '#010306'
            }
        },

        fontFamily: {
            poppins: ['Poppins', 'Georgia', 'Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif', 'Times New Roman', 'Times'],
            chivo: ['Chivo', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
        },
        animation: {
            soft: 'cubic-bezier(.5,.1,0,.99)',
            hard: 'cubic-bezier(0.23, 1, 0.32, 1)'
        },
        height: {
            base: '16px',
            px: '1px',
            full: '100%',
            screen: '100vh',
            ...custumSizes
        },
        spacing: {
            auto: 'auto',
            ...custumSizes
        },
        fontSize: {
            base: '16px',
            '14': pxToRem(14),
            ...custumSizes
        },
        lineHeight: {
            title: 0.85,
            none: 1,
            tight: 1.125,
            normal: 1.7,
            loose: 2,
            button: 1.5,
        },
        width: {
            auto: 'auto',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/7': '14.2857143%',
            '2/7': '28.5714286%',
            '3/7': '42.8571429%',
            '4/7': '57.1428571%',
            '5/7': '71.4285714%',
            '6/7': '85.7142857%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw',
            ...custumSizes
        },
    },
    variants: ['responsive'],
    plugins: [
        require('./resources/css/utilities/plugins/center'),
        require('./resources/css/utilities/plugins/block'),
        require('./resources/css/utilities/plugins/grid'),
        require('./resources/css/utilities/plugins/ratio'),
        require('./resources/css/utilities/plugins/wrap'),
        require('./resources/css/utilities/plugins/hidden')
    ]
};
