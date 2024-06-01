/**
 * @ref:
 * https://www.zhangxinxu.com/wordpress/2011/03/displayinline-blocktext-alignjustify下列表的两端对齐布局/
 * 1. fontSize:0; 为了防止最后一个元素的高度，所以，每个 `> item` 在实际项目中，必须指定 fontSize，否则fontSize 为 1rem;
 * 2. 另外: 每个子级元素后面必须有一个 `{' '}` 否则这个方案并不工作。
 * 3. 子元素最好有宽度，否则也无法分散对齐。
 * @param pluginApi
 * @returns {*}
 */
module.exports = function(pluginApi) {
  const { addComponents } = pluginApi;

  return addComponents({
    '.layout-text-justify': {
      textAlign: 'justify',
      fontSize: 0,
      '& > *': {
        display: 'inline-block',
        textAlign: 'left',
        verticalAlign: 'top',
        fontSize: '1rem'
      },
      '&:after': {
        content: '""',
        display: 'inline-block',
        width: '100%',
        height: 0,
        overflow: 'hidden'
      }
    }
  });
};
