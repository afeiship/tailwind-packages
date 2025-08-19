module.exports = function (pluginConfig) {
  const { matchComponents } = pluginConfig;
  // wsui-opacity-bg-40
  matchComponents({
    'wsui-opacity-bg': (value) => {
      const alpha = parseFloat(value / 100);
      return {
        backgroundColor: `rgba(0, 0, 0, ${alpha})`,
        borderRadius: '100rem', // 默认圆角,
        fontSize: '0.75rem',
        height: '1.25rem',
        minWidth: '5rem',
        textAlign: 'center'
      };
    }
  });
};
