module.exports = function (pluginConfig) {
  const { addUtilities, theme } = pluginConfig
  const { start, end } = theme('flexGapRange')

  for (let i = start; i <= end; i++) {
    addUtilities({
      [`.gap-x-${i}`]: {
        display: 'flex',
        gap: `${i}rem 0`,
      },
      [`.gap-y-${i}`]: {
        display: 'flex',
        flexDirection: 'column',
        gap: `0 ${i}rem`,
      },
    })
  }
}
