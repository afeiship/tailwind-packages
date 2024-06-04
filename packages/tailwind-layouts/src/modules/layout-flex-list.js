const val = (value) => {
  if (!value) return '';
  return value?.includes('px') ? value : `${value / 4}rem`;
};

const compact = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) acc[key] = value;
    return acc;
  }, {});
};

module.exports = function(pluginApi) {
  const { addComponents, matchComponents } = pluginApi;

  addComponents({ '[class*="layout-flex-list"]': { display: 'flex', flexWrap: 'wrap' } });

  // list - 2/3/4/5/6/7/8/9/10/11/12
  // .layout-flex-list-[columns,gap-x,gap-y]
  // .layout-flex-list-[2,2]
  // .layout-flex-list-[2,2,4]
  matchComponents({
    'layout-flex-list': (value) => {
      const [n, x, y] = value.split(',');
      const xValue = val(x);
      const yValue = val(y);
      const result = {};
      result['&'] = compact({ 'column-gap': `${xValue}`, 'row-gap': `${yValue}` });
      result['> *'] = { flex: `0 0 calc(100% / ${n} - (${n - 1} * ${xValue}) / ${n})` };
      return result;
    }
  });
};
