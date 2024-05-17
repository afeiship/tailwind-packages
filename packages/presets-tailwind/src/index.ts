const nxPresets = () => {
  return {
    plugins: [
      require('@jswork/tailwind-blank'),
      require('@jswork/tailwind-font-size'),
      require('@jswork/tailwind-heading'),
      require('@jswork/tailwind-layouts'),
      require('@jswork/tailwind-lc'),
      require('@jswork/tailwind-shortcuts'),
      require('@jswork/tailwind-width')
    ],
  };
};

export default nxPresets;
