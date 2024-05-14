// This file is used to add the corner classes to the tailwind config.

module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig;
  return addComponents({
    '[class*="corner-"]': {
      position: 'absolute',
    },
    '.corner-top-left, .corner-t': {
      top: 0,
      left: 0,
    },
    '.corner-top-right, .corner-r': {
      top: 0,
      right: 0,
    },
    '.corner-bottom-right, .corner-b': {
      bottom: 0,
    },
    '.corner-bottom-left, .corner-l': {
      bottom: 0,
      left: 0,
    },
  });
};
