/**
 * 适合场景: 有 width 和 height 的元素，需要绝对居中
 * 效果: 元素居中，且不留空白
 * 使用: <div class="layout-abs-center"></div>
 * @param pluginApi
 * @returns {*}
 */
const baseStyles = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

module.exports = function(pluginApi) {
  const { addBase, addComponents } = pluginApi;
  addBase({ '[class^="layout-abs-center"]': { ...baseStyles } });
  return addComponents({
    '.layout-abs-center': {
      margin: 'auto'
    },
    '.layout-abs-center-x': {
      margin: '0 auto'
    },
    '.layout-abs-center-y': {
      margin: 'auto 0'
    }
  });
};
