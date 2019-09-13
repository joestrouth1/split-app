/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef, AnchorHTMLAttributes } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Preset variant to use e.g. links.default or buttons.primary
   * @default 'links.default'
   */
  //  Defaults should be annotated for now,
  //  see: https://github.com/styleguidist/react-docgen-typescript/pull/205
  variant?: string
}

export type LinkRef = HTMLAnchorElement

export const Link = forwardRef<LinkRef, LinkProps>(
  ({ variant = 'links.default', ...props }, ref) => {
    return (
      <a
        {...props}
        ref={ref}
        sx={{
          // pass variant prop to sx
          variant,
        }}
      />
    )
  }
)
