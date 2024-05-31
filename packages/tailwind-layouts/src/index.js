const plugin = require('tailwindcss/plugin');
const moduleLayoutAbsCenter = require('./modules/layout-abs-center');
const moduleLayoutEmJustifyList = require('./modules/layout-em-justify-list');
const moduleLayoutAbsScrollable = require('./modules/layout-abs-scrollable');
const moduleLayoutInlineItems = require('./modules/layout-inline-items');
const moduleLayoutStickyFooter = require('./modules/layout-sticky-footer');
const moduleTransCenter = require('./modules/layout-trans-center');
const moduleLayoutFlex = require('./modules/layout-flex');

module.exports = plugin(function(pluginApi) {
  // Add custom utilities here
  moduleLayoutAbsCenter(pluginApi);
  moduleLayoutEmJustifyList(pluginApi);
  moduleLayoutAbsScrollable(pluginApi);
  moduleLayoutInlineItems(pluginApi);
  moduleLayoutStickyFooter(pluginApi);
  moduleTransCenter(pluginApi);
  moduleLayoutFlex(pluginApi);
});
