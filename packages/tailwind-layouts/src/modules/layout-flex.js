// https://github.com/afeiship/wsui-layout-flex/blob/master/src/index.scss
// https://tailwindcss.com/docs/flex-shrink
// left -> auto -> right[sae]
// 'la',
// 'lar',
// 'ar',
// 'lr',

// top -> auto -> bottom[sae]
// 'ta',
// 'tab',
// 'ab',
// 'tb'

module.exports = function (pluginApi) {
  const { addComponents } = pluginApi

  return addComponents({
    // class=^.layout-flex-.*$
    '.layout-flex-sa': {
      '& > *': {
        '&:first-child': {
          'flex-shrink': 0,
        },
        '&:nth-child(2)': {
          flex: 1,
        },
      },
    },
    '.layout-flex-sae': {
      justifyContent: 'space-between',
      '& > *': {
        '&:first-child': {
          'flex-shrink': 0,
        },
        '&:last-child': {
          'flex-shrink': 0,
        },
        '&:nth-child(2)': {
          flex: 1,
        },
      },
    },
    '.layout-flex-ae': {
      '& > *': {
        '&:last-child': {
          'flex-shrink': 0,
        },
        '&:nth-child(1)': {
          flex: 1,
        },
      },
    },
    '.layout-flex-se': {
      justifyContent: 'space-between',
    },
  })
}
