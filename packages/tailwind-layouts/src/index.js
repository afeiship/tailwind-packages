const plugin = require('tailwindcss/plugin');
const moduleLayoutTrbla = require('./modules/layout-trbla');

module.exports = plugin(
  function(pluginApi) {
    // Add custom utilities here
    moduleLayoutTrbla(pluginApi);
  }
);
