const plugin = require('tailwindcss/plugin');
const basicStyles = {
  'overflow': 'hidden',
  'text-overflow': 'ellipsis',
  'display': 'flex',
  'display': '-webkit-box',
  '-webkit-box-orient': 'vertical',
};

module.exports = plugin(
  function ({ matchUtilities, addUtilities, theme, variants, e }) {
    const values = theme('lineClamp');

    matchUtilities(
      {
        lc: (value) => ({
          ...basicStyles,
          '-webkit-line-clamp': `${value}`,
        }),
      },
      { values }
    );

    addUtilities(
      [
        {
          '.line-clamp-none': {
            '-webkit-line-clamp': 'unset',
          },
        },
      ],
      variants('lineClamp')
    );
  },
  {
    theme: {
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
    },
    variants: {
      lineClamp: ['responsive'],
    },
  }
);
