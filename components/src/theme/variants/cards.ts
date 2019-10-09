import { gradients } from '../gradients'

const base = {
  boxSizing: 'border-box',
  px: 3,
  py: 3,
  borderRadius: 4,
  boxShadow: 'medium',
}

export const cards = {
  default: {
    ...base,
  },
  radio: {
    ...base,
    py: 4,
    background: `linear-gradient(white, white), ${gradients.primary}`,
    backgroundOrigin: 'padding-box, border-box',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'padding-box, border-box',
    border: '1px solid transparent',
  },
}
