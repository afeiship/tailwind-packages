const plugin = require('tailwindcss/plugin')
const moduleDebug = require('./modules/debug')
const moduleFlex = require('./modules/flex')

module.exports = plugin(function (pluginConfig) {
  moduleDebug(pluginConfig)
  moduleFlex(pluginConfig)
})
