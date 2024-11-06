module.exports = function (pluginApi) {
  const { addComponents } = pluginApi
  addComponents({
    '[class*="is-flex-scrollable"]': {
      flex: 1,
      overscrollBehavior: 'contain',
    },
  })

  return addComponents({
    '.layout-flex-scrollable': {
      display: 'flex',
      flexDirection: 'column',
      '.is-flex-scrollable-y': {
        overflow: 'hidden scroll',
      },
      '.is-flex-scrollable-x': {
        overflow: 'scroll hidden',
      },
    },
  })
}
