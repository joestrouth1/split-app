import { gradients } from '../gradients'

const base = {
  appearance: 'none',
  outline: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  fontSize: 'inherit',
  fontWeight: 'bold',
  fontFamily: 'body',
  letterSpacing: 'button',
  m: 0,
  px: 3,
  py: 2,
  border: 0,
  transitionProperty: 'opacity, box-shadow, transform',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-out',
  '&[disabled]': {
    opacity: 0.5,
    boxShadow: 'none',
    pointerEvents: 'none',
  },
  '&:focus': {
    boxShadow: 'outline',
  },
}

export const buttons = {
  nav: {
    ...base,
    backgroundColor: 'grays.9',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'body',
    lineHeight: 'body',
    letterSpacing: 'body',
    fontSize: 2,
    borderRadius: 0,
    '&:hover, &:active': {
      backgroundColor: 'grays.8',
    },
  },
  primary: {
    ...base,
    py: 3,
    px: 4,
    position: 'relative',
    background: `${gradients.primary}, ${gradients.light}`,
    backgroundOrigin: 'padding-box, border-box',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'padding-box, border-box',
    border: '3px solid transparent',
    boxShadow: 'medium',
    borderRadius: 9999,
    color: 'white',
    fontSize: 4,
    lineHeight: 1.3333333,
    '&:hover': {
      boxShadow: 'large',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
}
