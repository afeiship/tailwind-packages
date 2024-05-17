const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ addUtilities, theme }) {
    // const remBaseSize = theme('fontSize.base') || 16;
    const separator = theme('separator') || '-';
    addUtilities(
      (() => {
        let utilities = {};
        Array.from({ length: 100 }, (_, i) => i + 1).forEach((i) => {
          utilities[`.f${separator}${i}`] = { fontSize: `${i / 16}rem` };
        });
        return utilities;
      })(),
      ['responsive']
    );
  }
);
