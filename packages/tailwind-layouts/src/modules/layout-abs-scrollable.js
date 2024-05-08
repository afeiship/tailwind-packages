module.exports = function (pluginApi) {
  const { addComponents } = pluginApi

  return addComponents({
    '.layout-abs-scrollable': {
      position: 'relative',
      height: '100%',
      '.is-scrollable': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
        scrollBehavior: 'smooth',
      },
    },
  })
}
