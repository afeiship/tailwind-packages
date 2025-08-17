// .wkit-scrollbar-w-1::-webkit-scrollbar { width: 0.25rem; }
// .wkit-scrollbar-w-4::-webkit-scrollbar { width: 1rem; }
// .wkit-scrollbar-w-8::-webkit-scrollbar { width: 2rem; }

module.exports = function (pluginConfig) {
  const { addComponents, matchUtilities, theme } = pluginConfig;
  addComponents({
    '.wkit-scrollbar-none': {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '.wkit-scrollbar-block': {
      '&::-webkit-scrollbar': {
        display: 'block',
      },
    },
  });
};
