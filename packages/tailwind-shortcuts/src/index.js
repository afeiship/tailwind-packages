const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.x': {
      display: 'flex',
      'flex-direction': 'row',
    },
    '.y': {
      display: 'flex',
      'flex-direction': 'column',
    },
    '.fc': {
      display: 'flex',
      'align-items': 'center',
    },
    '.fca': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-around',
    },
    '.fcb': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
    },
    '.fce': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'flex-end',
    },
    '.fcv': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-evenly',
    },
  })
})
