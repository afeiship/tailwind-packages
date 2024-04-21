module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.flip-x': {
      transform: 'rotateY(180deg)',
    },
    '.flip-y': {
      transform: 'rotateX(180deg)',
    },
  })
}
