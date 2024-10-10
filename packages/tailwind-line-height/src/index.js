const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'lh': (value) => ({
        lineHeight: value,
      }),
      'lh-px': (value) => ({
        lineHeight: `${parseFloat(value) / 4}rem`,
      }),
      // percetage line height
      'lhp': (value) => ({
        lineHeight: `${value}%`,
      }),
      // number(unitless) line height
      'lhn': (value) => ({
        lineHeight: value,
      }),
    },
    { values: theme('spacing') }
  )
})
