/**@jsx jsx */
import { jsx } from 'theme-ui'
import { cards } from '../theme/variants'
import { forwardRef, ReactNode, HTMLAttributes } from 'react'

type CardVariant = keyof typeof cards

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Preset variant to use, defined in `theme.cards`
   * @default default
   * */
  variant?: CardVariant
  /**
   * Element(s) to render inside
   */
  children: ReactNode
}

export type CardRef = HTMLDivElement

/**
 * A small to medium sized content container that stands out from the background.
 *
 * Can represent a small number of options instead of radio buttons or a short list.
 */
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

Card.displayName = 'Card'
