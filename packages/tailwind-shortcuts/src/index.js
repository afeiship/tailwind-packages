const plugin = require('tailwindcss/plugin')
const moduleBoxSizing = require('./modules/box-sizing')
const moduleDebug = require('./modules/debug')
const moduleFlex = require('./modules/flex')
const moduleMargin = require('./modules/margin')

module.exports = plugin(function (pluginConfig) {
  moduleBoxSizing(pluginConfig)
  moduleDebug(pluginConfig)
  moduleFlex(pluginConfig)
  moduleMargin(pluginConfig)
})
