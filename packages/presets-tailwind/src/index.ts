import { generateSpacings } from './utils';

const spacing = generateSpacings(1, 100);

const nxPresets = () => {
  return {
    theme: {
      extend: {
        spacing
      }
    },
    plugins: [
      require('@jswork/tailwind-blank'),
      require('@jswork/tailwind-font-size'),
      require('@jswork/tailwind-font-weight'),
      require('@jswork/tailwind-heading'),
      require('@jswork/tailwind-layouts'),
      require('@jswork/tailwind-lc'),
      require('@jswork/tailwind-line-height'),
      require('@jswork/tailwind-margin'),
      require('@jswork/tailwind-padding'),
      require('@jswork/tailwind-shortcuts'),
      require('@jswork/tailwind-width')
    ]
  };
};

export default nxPresets;
