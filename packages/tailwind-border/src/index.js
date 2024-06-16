const plugin = require('tailwindcss/plugin');

const generateColors = (e, colors, prefix, style) => {
  return Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === 'string') {
      return {
        ...acc,
        [`${prefix}-${e(key)}`]: {
          'border': `${style} ${colors[key]}`
        }
      };
    }

    const genColors = generateColors(e, colors[key], `${prefix}-${(key)}`, style);
    return { ...acc, ...genColors };
  }, {});
};

module.exports = plugin(function({ addComponents, theme, e }) {
  const colors = theme('colors');
  const kvs = [
    { key: 'bds', value: 'solid' },
    { key: 'bdd', value: 'dashed' },
    { key: 'bdt', value: 'dotted' },
    { key: 'bdb', value: 'double' }
  ];

  kvs.forEach(({ key, value }) => {
    const components = generateColors(e, colors, `.${key}`, value);
    addComponents(components);
  });
});
