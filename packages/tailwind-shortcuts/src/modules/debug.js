module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.debug-red': {
      border: '1px solid #f00',
    },
    '.debug-green': {
      border: '1px solid #0f0',
    },
    '.debug-blue': {
      border: '1px solid #00f',
    },
  })
}
