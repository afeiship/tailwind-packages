const plugin = require('tailwindcss/plugin')
const moduleLayoutAbsCenter = require('./modules/layout-abs-center')
const moduleLayoutAbsScrollable = require('./modules/layout-abs-scrollable')
const moduleLayoutStickyFooter = require('./modules/layout-sticky-footer')
const moduleTransCenter = require('./modules/layout-trans-center')
const moduleLayoutTrbla = require('./modules/layout-trbla')

module.exports = plugin(function (pluginApi) {
  // Add custom utilities here
  moduleLayoutAbsCenter(pluginApi)
  moduleLayoutAbsScrollable(pluginApi)
  moduleLayoutStickyFooter(pluginApi)
  moduleTransCenter(pluginApi)
  moduleLayoutTrbla(pluginApi)
})
