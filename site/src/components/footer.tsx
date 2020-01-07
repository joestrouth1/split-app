/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Footer as BaseFooter } from 'components'
import { ComponentPropsWithoutRef } from 'react'

type FooterProps = ComponentPropsWithoutRef<typeof BaseFooter>

export const Footer = ({ children, ...props }: FooterProps) => (
  <BaseFooter {...props}>{children}</BaseFooter>
)
