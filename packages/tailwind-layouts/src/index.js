const plugin = require('tailwindcss/plugin')
const moduleLayoutAbsCenter = require('./modules/layout-abs-center')
const moduleTransCenter = require('./modules/layout-trans-center')
const moduleLayoutTrbla = require('./modules/layout-trbla')

module.exports = plugin(function (pluginApi) {
  // Add custom utilities here
  moduleLayoutAbsCenter(pluginApi)
  moduleTransCenter(pluginApi)
  moduleLayoutTrbla(pluginApi)
})
