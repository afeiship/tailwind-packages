const plugin = require('tailwindcss/plugin')
const moduleLayoutAbsCenter = require('./modules/layout-abs-center')
const moduleLayoutAbsScroll = require('./modules/layout-abs-scroll')
const moduleTransCenter = require('./modules/layout-trans-center')
const moduleLayoutTrbla = require('./modules/layout-trbla')

module.exports = plugin(function (pluginApi) {
  // Add custom utilities here
  moduleLayoutAbsCenter(pluginApi)
  moduleLayoutAbsScroll(pluginApi)
  moduleTransCenter(pluginApi)
  moduleLayoutTrbla(pluginApi)
})
