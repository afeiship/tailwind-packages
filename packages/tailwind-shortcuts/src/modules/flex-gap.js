module.exports = function (pluginConfig) {
  const { addUtilities, theme } = pluginConfig
  const { start, end } = theme('flexGapRange')

  for (let i = start; i <= end; i++) {
    const rem = i / 4
    addUtilities({
      [`.x-${i}`]: {
        display: 'flex',
        gap: `${rem}rem`,
      },
      [`.y-${i}`]: {
        display: 'flex',
        flexDirection: 'column',
        gap: `${rem}rem`,
      },
    })
  }
}
