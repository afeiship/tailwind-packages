module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig;
  return addComponents({
    '.debug': {
      border: '1px solid #f30',
    },
    '.debug-red': {
      border: '1px solid #f00',
    },
    '.debug-green': {
      border: '1px solid #0f0',
    },
    '.debug-blue': {
      border: '1px solid #00f',
    },
    // use outline
    '.debug-outline-red': {
      outline: '1px solid #f00',
    },
    '.debug-outline-green': {
      outline: '1px solid #0f0',
    },
    '.debug-outline-blue': {
      outline: '1px solid #00f',
    },
  });
};
