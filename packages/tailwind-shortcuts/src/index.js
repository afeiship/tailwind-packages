const plugin = require('tailwindcss/plugin')
const moduleDebug = require('./modules/debug')
const moduleFlex = require('./modules/flex')
const moduleMargin = require('./modules/margin')

module.exports = plugin(function (pluginConfig) {
  moduleDebug(pluginConfig)
  moduleFlex(pluginConfig)
  moduleMargin(pluginConfig)
})
