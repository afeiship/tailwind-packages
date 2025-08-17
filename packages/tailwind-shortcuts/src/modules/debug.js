module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig;
  return addComponents({
    '.debug': {
      border: '2px solid #f30',
    },
    '.debug-red': {
      border: '2px solid #f00',
    },
    '.debug-green': {
      border: '2px solid #0f0',
    },
    '.debug-blue': {
      border: '2px solid #00f',
    },
    // use outline
    '.debug-outline-red': {
      outline: '2px solid #f00',
    },
    '.debug-outline-green': {
      outline: '2px solid #0f0',
    },
    '.debug-outline-blue': {
      outline: '2px solid #00f',
    },
  });
};
