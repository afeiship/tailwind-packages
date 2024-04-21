module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.tsy5': {
      transform: 'translateY(-50%)',
    },
    '.tsx5': {
      transform: 'translateX(-50%)',
    },
    '.tsxy5': {
      transform: 'translate(-50%, -50%)',
    },
  })
}
