const plugin = require('tailwindcss/plugin');
const generateBlanks = (value, callback) => {
  const vals = value.split(',');
  const result = {};
  vals.forEach((val, index) => {
    result[`> *:nth-child(` + (index + 1) + ')'] = callback(val, index);
  });
  return result;
};

const baseBlankStyles = {
  fontSize: 0,
  lineHeight: 0,
  clear: 'both',
};

module.exports = plugin(function ({ addBase, matchUtilities, theme }) {
  addBase({ '[class^="blank-"]': baseBlankStyles });
  matchUtilities(
    {
      'blank-x': (value) => ({
        width: value,
      }),
      'blank-y': (value) => ({
        height: value,
      }),
      'blank-px-x': (value) => ({
        width: parseFloat(value) * 0.25 + 'rem',
      }),
      'blank-px-y': (value) => ({
        height: parseFloat(value) * 0.25 + 'rem',
      }),
    },
    { values: theme('spacing') },
  );

  matchUtilities(
    {
      // tailwind spacing
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
      // blanks-px
      'blanks-px-r': (value) => {
        return generateBlanks(value, (val) => ({ marginRight: `${val / 16}rem` }));
      },
      'blanks-px-l': (value) => {
        return generateBlanks(value, (val) => ({ marginLeft: `${val / 16}rem` }));
      },
      'blanks-px-t': (value) => {
        return generateBlanks(value, (val) => ({ marginTop: `${val / 16}rem` }));
      },
      'blanks-px-b': (value) => {
        return generateBlanks(value, (val) => ({ marginBottom: `${val / 16}rem` }));
      },
    },
    { values: theme('spacing') },
  );
});
