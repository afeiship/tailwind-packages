const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ matchUtilities, theme }) {
    // match color utilities
    matchUtilities({
      'bds': (value) => {
        return {
          'border': `solid ${value}`
        };
      },
      'bdd': (value) => {
        return {
          'border': `dashed ${value}`
        };
      },
      'bdo': (value) => {
        return {
          'border': `dotted ${value}`
        };
      }
    }, { values: theme('colors') });
  }
);
