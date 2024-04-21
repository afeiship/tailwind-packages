module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.opacity-text': {
      color: 'transparent'
    },
    '.opacity-bg': {
      background: 'transparent'
    },
    '.vis-v': {
      visibility: 'visible'
    },
    '.vis-h': {
      visibility: 'hidden'
    }
  })
}
