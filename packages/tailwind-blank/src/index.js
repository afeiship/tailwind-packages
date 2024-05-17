const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ matchUtilities, theme }) {
    matchUtilities(
      {
        blank: (value) => ({
          height: value,
          fontSize: 0,
          lineHeight: 0,
          clean: 'both'
        })
      },
      { values: theme('spacing') }
    );
  }
);
