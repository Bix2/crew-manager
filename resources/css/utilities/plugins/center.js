module.exports = function({ addUtilities, variants }) {
    addUtilities([
        {
            '.center': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)'
            }
        },
        {
            '.center-horizontal': {
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
            }
        },
        {
            '.center-vertical': {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)'
            }
        }
    ], variants('center'));
};
