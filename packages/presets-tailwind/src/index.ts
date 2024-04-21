const nxPresets = () => {
  return {
    plugins: [
      require('@jswork/tailwind-heading'),
      require('@jswork/tailwind-font-size'),
      require('@jswork/tailwind-lc'),
      require('@jswork/tailwind-shortcuts'),
      require('@jswork/tailwind-width')
    ],
  };
};

export default nxPresets;
