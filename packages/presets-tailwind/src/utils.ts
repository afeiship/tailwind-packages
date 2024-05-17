export const generateSpacings = (start = 1, end = 100) => {
  const spacings = {};
  for (let i = start; i <= end; i++) {
    spacings[`${i}`] = `${i * 0.25}rem`;
  }
  return spacings;
};
