const val = (value) => {
  if (!value) return '';
  return value?.includes('px') ? value : `${value / 4}rem`;
};

module.exports = function(pluginApi) {
  const { addComponents, matchComponents } = pluginApi;

  addComponents({
    '[class*="layout-float-list"]': { overflow: 'hidden' },
    '[class*="layout-float-list"] > *': { float: 'left', boxSizing: 'border-box' }
  });

  // list - 2/3/4/5/6/7/8/9/10/11/12
  // .layout-float-list-[columns,gap-x,gap-y]
  // .layout-float-list-[2,2]
  matchComponents({
    'layout-float-list': (value) => {
      const [n, x, y] = value.split(',');
      const xValue = val(x);
      const yValue = val(y);
      const result = {};
      result['> *'] = {
        marginLeft: xValue,
        marginBottom: yValue,
        width: `calc((100% - ${xValue} - ${n} * ${xValue})/${n})`
      };

      // last row to margin-bottom: 0
      const first = `&>*:nth-child(${n}n + 1):nth-last-child(-n + ${n})`;
      const selectorName = `${first},${first} ~ *`;
      result[selectorName] = { marginBottom: 0 };
      return result;
    }
  });
};
