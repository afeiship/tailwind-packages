module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.wh-full': {
      'width': '100%',
      'height': '100%',
    }
  })
}
