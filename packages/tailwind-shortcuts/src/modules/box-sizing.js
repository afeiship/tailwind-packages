module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.bsb': {
      'box-sizing': 'border-box',
    },
    '.bsc': {
      'box-sizing': 'content-box',
    },
  })
}
