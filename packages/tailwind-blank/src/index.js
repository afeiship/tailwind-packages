const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ matchUtilities, theme }) {
    matchUtilities(
      {
        '[class*="blank-"]': {
          fontSize: 0,
          lineHeight: 0,
          clean: 'both',
        },
        '.blank-x': (value) => ({
          width: value
        }),
        '.blank-y': (value) => ({
          height: value
        })
      },
      { values: theme('spacing') }
    );
  }
);
