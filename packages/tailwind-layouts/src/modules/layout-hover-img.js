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

  return addComponents({
    '.layout-hover-img': {
      overflow: 'hidden',
      '&>img, .is-hover-img': {
        width: '100%',
        height: '100%',
        verticalAlign: 'middle',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
        willChange: 'transform',
        '&:hover': {
          transform: 'scale(1.0.5)',
        },
      },
    },
  })
}
