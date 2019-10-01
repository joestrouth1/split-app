/**@jsx jsx */
import { jsx } from 'theme-ui'
import { cards } from '../theme/variants'
import { forwardRef, ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Preset variant to use, defined in `theme.cards`
   * */
  variant?: keyof typeof cards
  /**
   * Element(s) to render inside
   */
  children: ReactNode
}

export type CardRef = HTMLDivElement

const Card = forwardRef<CardRef, CardProps>(({ variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      sx={{
        variant: `cards.${variant}`,
      }}
      {...props}
    />
  )
})
Card.displayName = 'Card'

Card.defaultProps = {
  variant: 'default',
}

export { Card }
