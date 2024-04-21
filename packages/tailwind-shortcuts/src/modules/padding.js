module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.pt_': {
      '> *:first-child': {
        paddingTop: 0,
      },
    },
    '.pr_': {
      '> *:last-child': {
        paddingRight: 0,
      },
    },
    '.pb_': {
      '> *:last-child': {
        paddingBottom: 0,
      },
    },
    '.pl_': {
      '> *:first-child': {
        paddingLeft: 0,
      },
    },
  })
}
