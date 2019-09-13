/**@jsx jsx */
import { jsx } from 'theme-ui'
import { cards } from '../theme/variants'
import { forwardRef, ReactNode, HTMLAttributes } from 'react'

type CardVariant = keyof typeof cards

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Preset variant to use, defined in `theme.cards`
   * */
  variant: CardVariant
  /**
   * Element(s) to render inside
   */
  children: ReactNode
}

export type CardRef = HTMLDivElement

export const Card = forwardRef<CardRef, CardProps>(
  ({ variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        sx={{
          variant: `cards.${variant}`,
        }}
        {...props}
      />
    )
  }
)
