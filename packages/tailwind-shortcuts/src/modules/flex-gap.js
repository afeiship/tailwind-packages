module.exports = function(pluginConfig) {
  const { matchUtilities, theme } = pluginConfig;
  const values = theme('spacing');
  matchUtilities({
    x: (value) => ({
      display: 'flex',
      gap: `${value}rem`
    }),
    y: (value) => ({
      display: 'flex',
      flexDirection: 'column',
      gap: `${value}rem`
    })
  }, { values });
};
