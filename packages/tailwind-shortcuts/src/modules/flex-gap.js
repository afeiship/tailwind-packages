module.exports = function(pluginConfig) {
  const { matchUtilities, theme } = pluginConfig;
  const values = theme('spacing');
  matchUtilities({
    x: (value) => ({
      display: 'flex',
      gap: value
    }),
    y: (value) => ({
      display: 'flex',
      flexDirection: 'column',
      gap: value
    })
  }, { values });
};
