const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ matchUtilities, theme }) {
    const values = theme('widths')

    matchUtilities(
      {
        wp: (value) => ({
          width: `${value * 10}%`,
        }),
        w1: (value) => ({
          width: `${100 / value}%`,
        }),
      },
      { values }
    )
  },
  {
    theme: {
      widths: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
    variants: {
      widths: ['responsive'],
    },
  }
)
