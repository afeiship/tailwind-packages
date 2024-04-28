// https://github.com/afeiship/wsui-layout-trbla/blob/master/src/index.scss
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
    '.layout-trbla-sa': {
      '& > *': {
        '&:first-child': {
          'flex-shrink': 0,
        },
      },
    },
    '.layout-trbla-sae': {
      justifyContent: 'space-between',
      '& > *': {
        '&:first-child': {
          'flex-shrink': 0,
        },
        '&:last-child': {
          'flex-shrink': 0,
        },
      },
    },
    '.layout-trbla-ae': {
      '& > *': {
        '&:last-child': {
          'flex-shrink': 0,
        },
      },
    },
    '.layout-trbla-se': {
      justifyContent: 'space-between',
    },
  })
}