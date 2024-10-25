const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'hlh': (value) => ({
        lineHeight: value,
        height: value,
      }),
      'lh': (value) => ({
        lineHeight: value,
      }),
      'lh-px': (value) => ({
        lineHeight: `${parseFloat(value) / 4}rem`,
      }),
      // percentage line height
      // lhp-1.5 = line height: 150%;
      'lhp': (value) => ({
        lineHeight: `${(100 * parseFloat(value)) * 4}%`,
      }),
      // number(unitless) line height
      // lhn-1.5 = line height: 1.5;
      'lhn': (value) => ({
        lineHeight: `${parseFloat(value) * 4}`,
      }),
    },
    { values: theme('spacing') }
  )
})
