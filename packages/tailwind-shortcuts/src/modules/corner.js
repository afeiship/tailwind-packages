// This file is used to add the corner classes to the tailwind config.

module.exports = function (pluginConfig) {
  const { addComponents, matchComponents, addBase, theme } = pluginConfig;

  addBase({
    '[class*="corner-"]': {
      position: 'absolute',
    },
  });

  addComponents({
    '.corner-top-left, .corner-t': {
      top: 0,
      left: 0,
    },
    '.corner-top-right, .corner-r': {
      top: 0,
      right: 0,
    },
    '.corner-bottom-right, .corner-b': {
      bottom: 0,
      right: 0,
    },
    '.corner-bottom-left, .corner-l': {
      bottom: 0,
      left: 0,
    },
  });

  matchComponents(
    {
      'corner-t': (value) => {
        return {
          top: value,
          left: value,
        };
      },
      'corner-r': (value) => {
        return {
          top: value,
          right: value,
        };
      },
      'corner-b': (value) => {
        return {
          bottom: value,
          right: value,
        };
      },
      'corner-l': (value) => {
        return {
          bottom: value,
          left: value,
        };
      },
    },
    {
      values: theme('spacing'),
    },
  );
};
