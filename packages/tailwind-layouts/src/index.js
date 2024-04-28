const plugin = require('tailwindcss/plugin')
const moduleLayoutAbsCenter = require('./modules/layout-abs-center')
const moduleTranslateCenter = require('./modules/layout-translate-center')
const moduleLayoutTrbla = require('./modules/layout-trbla')

module.exports = plugin(function (pluginApi) {
  // Add custom utilities here
  moduleLayoutAbsCenter(pluginApi)
  moduleTranslateCenter(pluginApi)
  moduleLayoutTrbla(pluginApi)
})
