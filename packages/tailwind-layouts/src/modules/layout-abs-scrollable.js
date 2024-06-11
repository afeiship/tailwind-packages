const baseStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  scrollBehavior: 'smooth',
}

module.exports = function (pluginApi) {
  const { addComponents } = pluginApi
  addComponents('[class*="is-scrollable"]', baseStyles)

  return addComponents({
    '.layout-abs-scrollable': {
      position: 'relative',
      height: '100%',
      '.is-scrollable-xy': {
        overflow: 'auto',
      },
      '.is-scrollable-x': {
        overflowX: 'auto',
      },
      '.is-scrollable-y': {
        overflowY: 'auto',
      },
    },
  })
}
