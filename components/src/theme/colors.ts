const grays = [
  '#F8F9F9',
  '#EBEDED',
  '#DDE1E1',
  '#CDD4D3',
  '#BDC5C4',
  '#AAB5B4',
  '#95A2A1',
  '#7B8C8A',
  '#5B706E',
  '#334240',
]

const greens = [
  '#D9F0E8',
  '#a4d6c8',
  '#74bdad',
  '#49a898',
  '#0a7e76',
  '#06706b',
  '#036260',
  '#005050',
  '#004142',
  '#023537',
  '#042c2e',
]
const green = greens[4]

const reds = [
  '#f5eaeb',
  '#ebd3d6',
  '#deb8bd',
  '#d0989e',
  '#bc6d76',
  '#981e2c',
  '#881a27',
  '#761722',
  '#61131c',
  '#430d13',
]
const red = reds[5]

export const colors = {
  text: grays[8],
  background: grays[0],
  primary: green,
  secondary: greens[2],
  accent: '#044c8a',
  muted: greens[0],
  warning: '#996f2f',
  grays,
  greens,
  green,
  reds,
  red,
}
