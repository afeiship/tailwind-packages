const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities, theme }) {
  let utilities = {};
  for (let i = 1; i <= 9; i++) {
    utilities[`.fw-${i}`] = {
      fontWeight: i * 100,
    };
  }
  // Add utilities without specifying 'variants' since it is no longer a valid argument
  addUtilities(utilities);
});
