import { colors } from './colors'
import * as variants from './variants'

export const defaultTheme = {
  breakpoints: ['40em', '48em', '64em', '80em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    base: '0 1px 3px 0 rgba(4, 4, 46, 0.1), 0 1px 2px 0 rgba(4, 4, 46, 0.06)',
    medium:
      '0 4px 6px -1px rgba(4, 4, 46, 0.1), 0 2px 4px -1px rgba(4, 4, 46, 0.06)',
    large:
      '0 10px 15px -3px rgba(4, 4, 46, 0.1), 0 4px 6px -2px rgba(4, 4, 46, 0.05)',
    extraLarge:
      '0 20px 25px -5px rgba(4, 4, 46, 0.1), 0 10px 10px -5px rgba(4, 4, 46, 0.04)',
    extraExtraLarge: '0 25px 50px -12px rgba(4, 4, 46, 0.25)',
    outline: '0 0 0 3px rgba(6, 112, 107, 0.75)',

    primary:
      '0 5px 15px -2px rgba(0, 65, 66, 0.1), 0 4px 6px -2px rgba(0, 65, 66, 0.5)',
  },
  fonts: {
    body:
      '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96].map(px => `${px / 16}rem`),
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  letterSpacings: {
    body: 'normal',
    heading: '-0.03em',
    button: '-0.03em',
    caps: '0.2em',
  },
  colors,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      letterSpacing: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  ...variants,
}
