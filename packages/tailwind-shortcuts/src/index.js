// ref: https://github.com/afeiship/wsui-shorty
const plugin = require('tailwindcss/plugin');
const moduleBgi = require('./modules/bgi');
const moduleBoxSizing = require('./modules/box-sizing');
const moduleCorner = require('./modules/corner');
const moduleDebug = require('./modules/debug');
const moduleFlex = require('./modules/flex');
const moduleFlexGap = require('./modules/flex-gap');
const moduleFlip = require('./modules/flip');
const moduleMargin = require('./modules/margin');
const modulePadding = require('./modules/padding');
const modulePosition = require('./modules/position');
const moduleRadius = require('./modules/radius');
const moduleScrollbar = require('./modules/scrollbar');
const moduleText = require('./modules/text');
const moduleTransform = require('./modules/transform');
const moduleZIndex = require('./modules/z-index');

module.exports = plugin(function (pluginConfig) {
  moduleBgi(pluginConfig);
  moduleBoxSizing(pluginConfig);
  moduleCorner(pluginConfig);
  moduleDebug(pluginConfig);
  moduleFlex(pluginConfig);
  moduleFlexGap(pluginConfig);
  moduleFlip(pluginConfig);
  moduleMargin(pluginConfig);
  modulePadding(pluginConfig);
  modulePosition(pluginConfig);
  moduleRadius(pluginConfig);
  moduleScrollbar(pluginConfig);
  moduleText(pluginConfig);
  moduleTransform(pluginConfig);
  moduleZIndex(pluginConfig);
});
