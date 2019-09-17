const base = {
  borderRadius: 4,
  padding: 2,
}

const alerts = {
  positive: {
    ...base,
    backgroundColor: 'greens.0',
    color: 'greens.6',
  },
  negative: {
    ...base,
    backgroundColor: 'reds.1',
    color: 'red',
  },
}

export { alerts }
