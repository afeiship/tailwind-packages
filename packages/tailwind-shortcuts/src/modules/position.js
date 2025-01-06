module.exports = function(pluginConfig) {
  const { addComponents } = pluginConfig;
  return addComponents({
    '.rel': {
      position: 'relative'
    },
    '.abs': {
      position: 'absolute'
    },
    '.t0': {
      top: 0
    },
    '.r0': {
      right: 0
    },
    '.b0': {
      bottom: 0
    },
    '.l0': {
      left: 0
    },
    '.lr0': {
      left: 0,
      right: 0
    },
    '.tb0': {
      top: 0,
      bottom: 0
    },
    '.tr0': {
      right: 0,
      top: 0
    },
    '.rb0': {
      right: 0,
      bottom: 0
    },
    '.bl0': {
      left: 0,
      bottom: 0
    },
    '.lt0': {
      left: 0,
      top: 0
    },
    '.trbl0': {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    '.lt5': {
      left: '50%',
      top: '50%'
    },
    '.t375': {
      top: '37.5%'
    },
    '.t125': {
      top: '12.5%'
    },
    '.t50': {
      top: '50%'
    },
    '.r50': {
      right: '50%'
    },
    '.b50': {
      bottom: '50%'
    },
    '.l50': {
      left: '50%'
    },
    '.t100': {
      top: '100%'
    },
    '.r100': {
      right: '100%'
    },
    '.b100': {
      bottom: '100%'
    },
    '.l100': {
      left: '100%'
    },
    '.abs-top': {
      top: 0,
      left: 0,
      right: 0
    },
    '.abs-right': {
      top: 0,
      right: 0,
      bottom: 0
    },
    '.abs-bottom': {
      bottom: 0,
      left: 0,
      right: 0
    },
    '.abs-left': {
      top: 0,
      left: 0,
      bottom: 0
    },
    '.abs-center': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    '.abs-gold-center': {
      top: '37.5%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    '.sticky-top': {
      position: 'sticky',
      top: 0
    },
    '.sticky-bottom': {
      position: 'sticky',
      bottom: 0
    }
  });
};
