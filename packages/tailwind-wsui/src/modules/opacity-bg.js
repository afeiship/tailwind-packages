const baseStyles = {
  position: 'absolute',
  color: 'white',
  borderRadius: '100rem', // 默认圆角,
  fontSize: '0.75rem',
  height: '1.25rem',
  minWidth: '5rem',
  textAlign: 'center'
};

module.exports = function (pluginConfig) {
  const { matchComponents, addBase } = pluginConfig;
  addBase({ '[class*="wsui-opacity-bg-"]': { ...baseStyles } });

  // wsui-opacity-bg-40
  matchComponents({
    'wsui-opacity-bg': (value) => {
      const alpha = parseFloat(value / 100);
      return {
        backgroundColor: `rgba(0, 0, 0, ${alpha})`
      };
    }
  });
};
