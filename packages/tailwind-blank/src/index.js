const plugin = require('tailwindcss/plugin');
const generateBlanks = (value, callback) => {
  const vals = value.split(',');
  const result = {};
  vals.forEach((val, index) => {
    result[`> *:nth-child(` + (index + 1) + ')'] = callback(val, index);
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
        return generateBlanks(value, (val) => ({ marginRight: `${val * 0.25}rem` }));
      },
      'blanks-l': (value) => {
        return generateBlanks(value, (val) => ({ marginLeft: `${val * 0.25}rem` }));
      },
      'blanks-t': (value) => {
        return generateBlanks(value, (val) => ({ marginTop: `${val * 0.25}rem` }));
      },
      'blanks-b': (value) => {
        return generateBlanks(value, (val) => ({ marginBottom: `${val * 0.25}rem` }));
      },
    },
    { values: theme('spacing') },
  );
});
