const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ matchUtilities, theme }) {
  matchUtilities({
    f: (value) => ({
      fontSize: value
    }),
    'f-px': (value) => {
      return {
        fontSize: parseFloat(value) / 4 + 'rem'
      };
    }
  }, { values: theme('spacing') });
});
