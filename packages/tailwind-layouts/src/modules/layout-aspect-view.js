const baseViewStyles = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}

const baseAspectContentStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

const baseAspectImageStyles = {
  ...baseAspectContentStyles,
  objectFit: 'cover',
}

module.exports = function (pluginApi) {
  const { matchComponents, addBase } = pluginApi

  addBase({ '[class*="layout-aspect-view-"]': { ...baseViewStyles } })
  addBase({ '[class*="is-aspect-content"]': { ...baseAspectContentStyles } })
  addBase({ '[class*="is-aspect-img"]': { ...baseAspectImageStyles } })

  matchComponents({
    'layout-aspect-view': (value) => {
      return {
        paddingTop: `${value}%`,
      }
    },
  })
}
