module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.mt_': {
      '> *:last-child': {
        marginTop: 0,
      },
    },
    '.mr_': {
      '> *:last-child': {
        marginRight: 0,
      },
    },
    '.mb_': {
      '> *:last-child': {
        marginBottom: 0,
      },
    },
    '.ml_': {
      '> *:last-child': {
        marginLeft: 0,
      },
    },
  })
}
