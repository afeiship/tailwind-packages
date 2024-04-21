module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.x': {
      display: 'flex',
      flexDirection: 'row',
    },
    '.y': {
      display: 'flex',
      flexDirection: 'column',
    },
    '.fc': {
      display: 'flex',
      alignItems: 'center',
    },
    '.fca': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    '.fcb': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '.fce': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    '.fcv': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  })
}
