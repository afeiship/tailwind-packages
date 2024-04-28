/**
 * 适合场景: 使元素在父元素中居中，适用于绝对定位元素。
 * @param pluginApi
 * @returns {*}
 */
module.exports = function (pluginApi) {
  const { addComponents } = pluginApi

  return addComponents({
    '.layout-translate-center': {
      top: '37.5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '.layout-translate-center-xy': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '.layout-translate-center-x': {
      left: '50%',
      transform: 'translateX(-50%)',
    },
    '.layout-translate-center-y': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
  })
}
