const plugin = require('tailwindcss/plugin');
const moduleLayoutAbsCenter = require('./modules/layout-abs-center');
const moduleLayoutAbsScrollable = require('./modules/layout-abs-scrollable');
const moduleLayoutInlineItems = require('./modules/layout-inline-items');
const moduleLayoutStickyFooter = require('./modules/layout-sticky-footer');
const moduleTransCenter = require('./modules/layout-trans-center');
const moduleLayoutTextJustify = require('./modules/layout-text-justify');
const moduleLayoutFlex = require('./modules/layout-flex');

module.exports = plugin(function(pluginApi) {
  // Add custom utilities here
  moduleLayoutAbsCenter(pluginApi);
  moduleLayoutAbsScrollable(pluginApi);
  moduleLayoutInlineItems(pluginApi);
  moduleLayoutStickyFooter(pluginApi);
  moduleTransCenter(pluginApi);
  moduleLayoutTextJustify(pluginApi);
  moduleLayoutFlex(pluginApi);
});
