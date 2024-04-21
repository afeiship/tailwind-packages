module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.mt_': {
      '> *:first-child': {
        'margin-top': 0,
      },
    },
    '.mr_': {
      '> *:last-child': {
        'margin-right': 0,
      },
    },
    '.mb_': {
      '> *:last-child': {
        'margin-bottom': 0,
      },
    },
    '.ml_': {
      '> *:first-child': {
        'margin-left': 0,
      },
    },
  })
}
