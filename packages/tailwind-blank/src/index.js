const plugin = require('tailwindcss/plugin');
const generateBlanks = (value, callback) => {
  const vals = value.split(',');
  const result = {};
  vals.forEach((val, index) => {
    result[`> *:nth-child(` + (index + 1) + ')'] = callback(val, index);
  });
  return result;
};

module.exports = plugin(function({ matchUtilities, theme }) {
  matchUtilities(
    {
      '[class*="blank-"]': {
        fontSize: 0,
        lineHeight: 0,
        clean: 'both'
      },
      'blank-x': (value) => ({
        width: value
      }),
      'blank-y': (value) => ({
        height: value
      }),
      'blank-px-x': (value) => ({
        width: parseFloat(value) * 0.25 + 'rem'
      }),
      'blank-px-y': (value) => ({
        height: parseFloat(value) * 0.25 + 'rem'
      })
    },
    { values: theme('spacing') }
  );

  matchUtilities(
    {
      // tailwind spacing
      'blanks-r': (value) => {
        return generateBlanks(value, (val) => ({ marginRight: val }));
      },
      'blanks-l': (value) => {
        return generateBlanks(value, (val) => ({ marginLeft: val }));
      },
      'blanks-t': (value) => {
        return generateBlanks(value, (val) => ({ marginTop: val }));
      },
      'blanks-b': (value) => {
        return generateBlanks(value, (val) => ({ marginBottom: val }));
      },
      // blanks-px
      'blanks-px-r': (value) => {
        return generateBlanks(value, (val) => ({ marginRight: `${parseFloat(val) * 0.25}rem` }));
      },
      'blanks-px-l': (value) => {
        return generateBlanks(value, (val) => ({ marginLeft: `${parseFloat(val) * 0.25}rem` }));
      },
      'blanks-px-t': (value) => {
        return generateBlanks(value, (val) => ({ marginTop: `${parseFloat(val) * 0.25}rem` }));
      },
      'blanks-px-b': (value) => {
        return generateBlanks(value, (val) => ({ marginBottom: `${parseFloat(val) * 0.25}rem` }));
      }
    },
    { values: theme('spacing') }
  );
});
