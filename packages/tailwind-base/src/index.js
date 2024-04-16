const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function({ addBase, theme }) {
    addBase({
      h1: { fontSize: theme('headings.1') },
      h2: { fontSize: theme('headings.2') },
      h3: { fontSize: theme('headings.3') },
      h4: { fontSize: theme('headings.4') },
      h5: { fontSize: theme('headings.5') },
      h6: { fontSize: theme('headings.6') },
    })
  },
  {
    theme: {
      headings: {
        1: '28px',
        2: '24px',
        3: '20px',
        4: '18px',
        5: '16px',
        6: '14px',
      },
    },
  }
)
