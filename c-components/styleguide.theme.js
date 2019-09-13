// Theme is written in typescript, so it must be built first.
const { defaultTheme: theme } = require('./dist')

module.exports = {
  color: {
    base: theme.colors.grays[9],
    light: theme.colors.grays[8],
    lightest: theme.colors.grays[7],
    link: theme.colors.primary,
    linkHover: theme.colors.greens[5],
    border: theme.colors.grays[2],
    name: theme.colors.greens[6],
    type: theme.colors.red,
    errors: theme.colors.red,
    baseBackground: theme.colors.grays[0],
    codeBackground: theme.colors.grays[1],
    sidebarBackground: theme.colors.grays[1],
    ribbonBackground: theme.colors.greens[0],
    ribbonText: theme.colors.green,
  },
  fontFamily: {
    base: theme.fonts.body,
    monospace: [
      '"FuraCode NF"',
      'Fira Code',
      '"Operator Mono"',
      'Dank Mono',
      'Menlo',
      'Consolas',
      '"Liberation Mono"',
      'monospace',
    ],
  },
  borderRadius: 4,
}
