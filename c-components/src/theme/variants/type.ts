const heading = {
  fontFamily: 'heading',
  letterSpacing: 'heading',
  lineHeight: 'heading',
  margin: 0,
  color: 'greens.8',
}

const body = {
  fontFamily: 'body',
  letterSpacing: 'body',
  lineHeight: 'body',
  color: 'text',
}

export const type = {
  title: {
    ...heading,
    fontWeight: 'bold',
    fontSize: [5],
  },
  subtitle: {
    ...heading,
    fontWeight: 'body',
    fontSize: [4],
  },
  body: {
    ...body,
    fontWeight: 'body',
    fontSize: [2],
    m: 0,
    '& + &': {
      mt: 3,
    },
  },
  label: {
    ...body,
    fontSize: [2],
    fontWeight: 'body',
    color: 'greens.7',
  },
  hint: {
    ...body,
    fontSize: [1],
    lineHeight: 16 / 14,
  },
  disclaimer: {
    ...body,
    fontSize: [0],
    lineHeight: 1,
  },
}
