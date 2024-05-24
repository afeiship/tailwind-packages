export const generateSpacings = (start = 1, end = 100, step = 0.5) => {
  const spacings = {};
  for (let i = start; i <= end; i += step) {
    spacings[`${i}`] = `${i * 0.25}rem`;
  }
  return spacings;
};
