module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig
  return addComponents({
    '.ell': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      verticalAlign:'middle',
      overflow: 'hidden',
    },
  })
}
