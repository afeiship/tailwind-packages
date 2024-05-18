const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  addUtilities(
    (() => {
      let utilities = {}
      Array.from({ length: 100 }, (_, i) => i + 1).forEach((i) => {
        utilities[`.f-${i}`] = { fontSize: `${i * 0.25}rem` }
        utilities[`.f-px-${i}`] = { fontSize: `${i / 16}rem` }
      })
      return utilities
    })(),
    ['responsive']
  )
})
