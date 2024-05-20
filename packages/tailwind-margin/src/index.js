const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ matchUtilities, theme }) {
    // Add custom utilities here
    matchUtilities({
      'margin': (value) => {
        const vals = value.split(',');
        const tws = vals.map(v => `${v * 0.25}rem`);
        return {
          margin: tws.join(' ')
        };
      },
      'margin-px': (value) => {
        const vals = value.split(',');
        const tws = vals.map(v => `${v / 16}rem`);
        return {
          margin: tws.join(' ')
        };
      }
    });
  }
);
