/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { buttons } from '../theme/variants'

type ButtonVariant = keyof typeof buttons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Preset variant to use, defined in theme.buttons
   * @default primary
   */
  variant?: ButtonVariant
}

export type ButtonRef = HTMLButtonElement

/**
 * Represents a clickable action _on the current page_, e.g. not navigation.
 *
 * @see See [Link](./#/Link) for triggering navigation, or use an `<a>` with some variant
 */
export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        sx={{
          // pass variant prop to sx
          variant: `buttons.${variant}`,
        }}
      />
    )
  }
)

Button.displayName = 'Button'
