const plugin = require('tailwindcss/plugin');
const generateBlanks = (value, callback) => {
  const pairs = value.split(',');
  const result = {};
  pairs.forEach((pair, index) => {
    result[`> *:nth-child(` + (index + 1) + ')'] = callback(pair, index);
  });
  return result;
};

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      '[class*="blank-"]': {
        fontSize: 0,
        lineHeight: 0,
        clean: 'both',
      },
      'blank-x': (value) => ({
        width: value,
      }),
      'blank-y': (value) => ({
        height: value,
      }),
    },
    { values: theme('spacing') },
  );

  matchUtilities(
    {
      'blanks-r': (value) => {
        return generateBlanks(value, (pair) => ({ marginRight: `${pair * 0.25}rem` }));
      },
      'blanks-l': (value) => {
        return generateBlanks(value, (pair) => ({ marginLeft: `${pair * 0.25}rem` }));
      },
      'blanks-t': (value) => {
        return generateBlanks(value, (pair) => ({ marginTop: `${pair * 0.25}rem` }));
      },
      'blanks-b': (value) => {
        return generateBlanks(value, (pair) => ({ marginBottom: `${pair * 0.25}rem` }));
      },
    },
    { values: theme('spacing') },
  );
});
