const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ addUtilities, theme }) {
    const remBaseSize = theme('fontSize.base') || 16;
    addUtilities(
      (() => {
        let utilities = {};
        Array.from({ length: 100 }, (_, i) => i + 1).forEach((i) => {
          utilities[`.f${i}`] = { fontSize: `${i / remBaseSize}rem` };
        });
        return utilities;
      })(),
      ['responsive']
    );
  }
);
