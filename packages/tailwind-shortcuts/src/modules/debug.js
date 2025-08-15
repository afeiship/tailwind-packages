module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig;
  return addComponents({
    '.debug': {
      border: '1px solid #f30 !important',
    },
    '.debug-red': {
      border: '1px solid #f00 !important',
    },
    '.debug-green': {
      border: '1px solid #0f0 !important',
    },
    '.debug-blue': {
      border: '1px solid #00f !important',
    },
    // use outline
    '.debug-outline-red': {
      outline: '1px solid #f00 !important',
    },
    '.debug-outline-green': {
      outline: '1px solid #0f0 !important',
    },
    '.debug-outline-blue': {
      outline: '1px solid #00f !important',
    },
  });
};
