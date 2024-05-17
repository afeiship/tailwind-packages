const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function({ addUtilities }) {
    addUtilities(
      (() => {
        let utilities = {};
        Array.from({ length: 100 }, (_, i) => i + 1).forEach((i) => {
          utilities[`.f${i}`] = { fontSize: `${i} * 0.25rem` };
        });
        return utilities;
      })(),
      ['responsive']
    )
  }
)
