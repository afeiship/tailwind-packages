const plugin = require('tailwindcss/plugin');

const moduleOpacityBg = require('./modules/opacity-bg');

module.exports = plugin(function (pluginConfig) {
  moduleOpacityBg(pluginConfig);
});
