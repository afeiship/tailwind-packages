module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.mt_': {
      '> *:first-child': {
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
      '> *:first-child': {
        marginLeft: 0,
      },
    },
  })
}
