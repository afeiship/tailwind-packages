const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ matchUtilities, theme }) {
    // Add custom utilities here
    matchUtilities({
      'padding': (value) => {
        const vals = value.split(',');
        const tws = vals.map(v => `${v * 0.25}rem`);
        return {
          padding: tws.join(' ')
        };
      },
      'padding-px': (value) => {
        const vals = value.split(',');
        const tws = vals.map(v => `${v / 16}rem`);
        return {
          padding: tws.join(' ')
        };
      }
    });
  }
);
