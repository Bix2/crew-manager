const _ = require('lodash');

module.exports = function({ addUtilities, theme }) {
    const padding = {
        paddingLeft: `calc(${theme('grid.gaps.wrap')} * 2)`,
        paddingRight: `calc(${theme('grid.gaps.wrap')} * 2)`
    };

    addUtilities([
        {
            '.wrap': {
                width: '100%',
                margin: `0 auto`,
                paddingLeft: `calc(${theme('grid.gaps.wrap')})`,
                paddingRight: `calc(${theme('grid.gaps.wrap')})`
            }
        },
        {
            [`@media (min-width: ${theme('screens.md')})`]: {
                '.wrap': {
                    'max-width': `${theme('grid.maxWidth')}`,
                    ...padding
                }
            }
        },
        {
            '.wrap-full': {
                'max-width': 'none',
                paddingLeft: `calc(${theme('grid.gaps.wrap')})`,
                paddingRight: `calc(${theme('grid.gaps.wrap')})`
            }
        },
        {
            [`@media (min-width: ${theme('screens.md')})`]: {
                '.wrap-full': {
                    'max-width': 'none',
                    ...padding
                }
            }
        }
    ]);
};
