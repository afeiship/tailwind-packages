const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const separator = theme('separator') || '-'
  addUtilities(() => {
    let utilities = {}
    for (let i = 1; i <= 100; i++) {
      utilities[`.lh-${separator}${i}`] = { 'line-height': `${i / 4}rem` }
      utilities[`.lh-px-${separator}${i}`] = { 'line-height': `${i / 16}rem` }
    }
    return utilities
  })
})
