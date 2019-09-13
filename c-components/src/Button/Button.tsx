/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { buttons } from '../theme/variants'

type ButtonVariant = keyof typeof buttons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Preset variant to use, defined in theme.buttons
   */
  variant: ButtonVariant
}

export type ButtonRef = HTMLButtonElement

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

Button.defaultProps = {
  variant: 'primary',
}
