const nxPresets = () => {
  return {
    plugins: [
      require('@jswork/tailwind-base'),
      require('@jswork/tailwind-lc'),
      require('@jswork/tailwind-width'),
      require('@jswork/tailwind-font-size'),
    ],
  };
};

export default nxPresets;
