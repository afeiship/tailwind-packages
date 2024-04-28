/**
 * 适合场景: 有 width 和 height 的元素，需要绝对居中
 * 效果: 元素居中，且不留空白
 * 使用: <div class="layout-abs-center"></div>
 * @param pluginApi
 * @returns {*}
 */
module.exports = function (pluginApi) {
  const { addComponents } = pluginApi

  return addComponents({
    '.layout-abs-center': {
      margin: 'auto',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
  })
}
