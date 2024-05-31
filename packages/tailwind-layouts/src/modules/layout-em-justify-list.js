const defaults = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  12: '12'
};

module.exports = function(pluginApi) {
  const { addBase, matchUtilities, theme } = pluginApi;
  const values = theme('justifyItems', defaults);

  addBase({
    '[class^="layout-em-justify-list"]': {
      margin: '-0.5em',
      overflow: 'hidden',
      '> .is-item': {
        'box-sizing': 'border-box',
        'float': 'left',
        'margin': '0.5em'
      }
    }
  });

  // 1-24 'width': `calc(${(100 / value)}% - 1em)`
  matchUtilities(
    {
      'layout-em-justify-list': (value) => {
        return {
          '> .is-item': {
            'width': `calc(${(100 / value)}% - 1em)`
          }
        };
      }
    },
    { values }
  );
};
