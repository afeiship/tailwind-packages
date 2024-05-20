const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities, theme }) {
  addUtilities(() => {
    let utilities = {};
    for (let i = 1; i <= 9; i++) {
      utilities[`.fw-${i}`] = {
        fontWeight: i * 100
      };
    }
    return utilities;
  });
});
