const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ matchUtilities, theme }) {
  matchUtilities(
    {
      'lh': (value) => ({
        lineHeight: value
      }),
      'lh-px': (value) => ({
        lineHeight: `${parseFloat(value) / 4}rem`
      })
    },
    { values: theme('spacing') }
  );
});
