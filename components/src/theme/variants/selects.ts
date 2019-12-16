const base = {
  appearance: 'none',
  display: 'block',
  fontSize: 2,
  fontWeight: 'body',
  fontFamily: 'body',
  color: 'text',
  lineHeight: 'body',
  py: 3,
  px: 3,
  width: '100%',
  maxWidth: '100%',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 2,
  borderLeftWidth: 0,
  borderBottomColor: 'grays.7',
  borderBottomStyle: 'solid',
  backgroundColor: 'white',
  outlineColor: 'transparent',
  transitionProperty: 'outline-color',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-out',
  '&:focus, &:active': {
    outlineWidth: 2,
    outlineColor: 'grays.7',
  },
  boxShadow: 'medium',
  '&::-ms-expand': {
    display: 'none',
  },
}

export const selects = {
  default: {
    ...base,
  },
}
