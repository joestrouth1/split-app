/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { buttons } from '../theme/variants'

type ButtonVariant = keyof typeof buttons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Preset variant to use, defined in theme.buttons
   * @default 'primary'
   */
  variant: ButtonVariant
}
const defaultProps: Partial<ButtonProps> = {
  variant: 'primary',
}
export type ButtonRef = HTMLButtonElement

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant, ...props }, ref) => {
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

Button.defaultProps = defaultProps

Button.displayName = 'Button'
