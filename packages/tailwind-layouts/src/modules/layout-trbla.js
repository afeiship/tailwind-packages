// https://github.com/afeiship/wsui-layout-trbla/blob/master/src/index.scss
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

module.exports = function(pluginApi) {
  const { addComponents } = pluginApi;

  addComponents({
    // class=^.layout-trbla-.*$
    '[class^="layout-trbla-"]': {
      display: 'flex'
    },
    '.layout-trbla-sa': {
      '& > *': {
        '&:nth-child(2)': {
          flex: 1
        }
      }
    },
    '.layout-trbla-sae': {
      justifyContent: 'space-between',
      '& > *': {
        '&:nth-child(2)': {
          flex: 1
        }
      }
    },
    '.layout-trbla-ae': {
      '& > *': {
        '&:nth-child(1)': {
          flex: 1
        }
      }
    },
    '.layout-trbla-se': {
      justifyContent: 'space-between'
    }
  });
};
