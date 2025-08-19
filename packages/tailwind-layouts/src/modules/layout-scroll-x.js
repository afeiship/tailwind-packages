/**
 * https://gist.github.com/supremeo/b66ef6e13aa13fb595600eff026d5d99
 * <nav class="layout-scroll-x">
 *   <a href="#1">日历最新版2024</a>
 *   <a href="#2">年的万年历全表日历安</a>
 *   <a href="#3">装2024正版中国日历万</a>
 *   <a href="#4">年历2024年最吉利</a>
 *   <a href="#5">的日子是哪一天</a>
 *   <a href="#6">今天的日子吉利吗</a>
 *   <a href="#7">万年日历显示的</a>
 *   <a href="#8">农历手机自带的</a>
 *   <a href="#9">日历怎么看黄历</a>
 * </nav>
 */
module.exports = function (pluginApi) {
  const { addComponents } = pluginApi


  return addComponents({
    '.layout-scroll-x': {
      display: 'flex',
      flexWrap: 'nowrap',
      scrollBehavior: 'smooth',
      width: '100%',
      maxWidth: '100%',
      overflowX: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      // show scrollbar when 'is-scrolling' class is added
      '> *': {
        flexShrink: 0,
      },
      '> :first-child': {
        marginLeft: 'auto',
      },
      '> :last-child': {
        marginRight: 'auto',
      },
    },
  })
}
