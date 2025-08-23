const baseStyles = {
  'background-size': 'cover',
  'background-repeat': 'no-repeat',
  'background-position': 'center',
};

module.exports = function (pluginConfig) {
  const { matchUtilities, theme } = pluginConfig;
  const basePath = theme('backgroundImage.basePath', '/images'); // 可配置根路径
  // 公共函数：生成 URL
  const buildUrl = (path) => {
    return `${basePath}/${path}`.replace(/\/+/g, '/');
  };

  // 公共函数：生成 background-image 规则
  const bgImageRule = (value) => {
    const url = buildUrl(value);
    return { 'background-image': `url('${url}')` };
  };

  matchUtilities({
    bgi: (value) => {
      return {
        ...bgImageRule(value),
        ...baseStyles,
      };
    },
    bgix: (value) => {
      return bgImageRule(value);
    },
  });
};
