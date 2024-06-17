const plugin = require('tailwindcss/plugin');

const generateColors = (colors, prefix, style) => {
  return Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === 'string') {
      return {
        ...acc,
        [`${prefix}-${(key)}`]: {
          'border': `${style} ${colors[key]}`
        }
      };
    }

    const genColors = generateColors(colors[key], `${prefix}-${(key)}`, style);
    return { ...acc, ...genColors };
  }, {});
};

module.exports = plugin(function({ addComponents, theme}) {
  const colors = theme('colors');
  const kvs = [
    { key: 'bds', value: 'solid' },
    { key: 'bdd', value: 'dashed' },
    { key: 'bdt', value: 'dotted' },
    { key: 'bdb', value: 'double' }
  ];

  kvs.forEach(({ key, value }) => {
    const components = generateColors(colors, `.${key}`, value);
    addComponents(components);
  });
});
