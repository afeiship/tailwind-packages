module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.radius-t0': {
      'border-top-left-radius': 0,
      'border-top-right-radius': 0,
    },
    '.radius-r0': {
      'border-top-right-radius': 0,
    },
    '.radius-b0': {
      'border-bottom-left-radius': 0,
      'border-bottom-right-radius': 0,
    },
    '.radius-l0': {
      'border-bottom-left-radius': 0,
      'border-top-left-radius': 0,
    },
  })
}
