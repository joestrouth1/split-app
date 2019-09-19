export const links = {
  default: {
    lineHeight: 'inherit',
    fontSize: 'inherit',
    color: 'inherit',
    textDecoration: 'underline',
    '&:focus': {
      outline: 'none',
      boxShadow: 'outline',
    },
    '&:visited': {
      color: 'accent',
    },
    '&.active': {
      color: 'primary',
      fontWeight: 'bold',
    },
  },
}
