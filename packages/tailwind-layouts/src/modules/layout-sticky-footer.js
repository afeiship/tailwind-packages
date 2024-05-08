/**
 * <div id="page-container" class="layout-sticky-footer" style="--footer-height:80px;">
 *   <div id="content-wrap" class="is-content" style="background-color: lightgray;">
 *     <!-- all other page content -->
 *     Content
 *   </div>
 *   <footer id="footer" class="is-footer" style="background-color: lightgreen;">
 *     Footer
 *   </footer>
 * </div>
 * @param pluginApi
 * @returns {*}
 */
module.exports = function (pluginApi) {
  const { addComponents } = pluginApi

  // https://js.work/tryit/14dfe31d4ac79
  return addComponents({
    '.layout-sticky-footer': {
      position: 'relative',
      minHeight: '100vh',
      '.is-content': {
        paddingBottom: 'var(--footer-height, 100px)',
      },
      '.is-footer': {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        padding: 'inherit',
        height: 'var(--footer-height, 100px)',
      },
    },
  })
}
