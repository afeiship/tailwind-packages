module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.z1': { 'z-index': '1' },
    '.z2': { 'z-index': '2' },
    '.z3': { 'z-index': '3' },
    '.z4': { 'z-index': '4' },
    '.z5': { 'z-index': '5' },
    '.z6': { 'z-index': '6' },
    '.z7': { 'z-index': '7' },
    '.z8': { 'z-index': '8' },
    '.z9': { 'z-index': '9' },
  })
}
