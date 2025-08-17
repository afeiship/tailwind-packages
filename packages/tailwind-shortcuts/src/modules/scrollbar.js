module.exports = function (pluginConfig) {
  const { addComponents } = pluginConfig;
  return addComponents({
    '.wkit-scrollbar-none': {
      '&::-webkit-scrollbar': {
        display: 'none',
      }
    }
  });
};
