module.exports = function (pluginConfig) {
  const { matchUtilities } = pluginConfig;
  // wsui-opacity-bg-*
  matchUtilities(
    {
      'wsui-opacity-bg': (value) => ({
        backgroundColor: value
      })
    },
    { values: theme('opacity') }
  );
};
