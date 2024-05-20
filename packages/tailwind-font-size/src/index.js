const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ matchUtilities, theme }) {
  matchUtilities(
    {
      f: (value) => ({
        fontSize: value
      }),
      'f-px': (value) => {
        return {
          fontSize: parseFloat(value) * 0.25 + 'rem'
        };
      }
    },
    { values: theme('spacing') }
  );
});
