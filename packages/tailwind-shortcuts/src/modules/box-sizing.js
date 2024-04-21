module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.bsb': {
      boxSizing: 'border-box',
    },
    '.bsc': {
      boxSizing: 'content-box',
    },
  })
}
