const plugin = require('tailwindcss/plugin');
// This plugin will add a new class called "blank-x" and "blank-y" to your HTML elements.
// You can use these classes to create a blank space of a certain width or height.
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
