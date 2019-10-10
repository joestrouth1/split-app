/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef, AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Preset variant to use e.g. links.default or buttons.primary
   * @default links.default
   */
  //  Defaults should be annotated for now,
  //  see: https://github.com/styleguidist/react-docgen-typescript/pull/205
  variant?: string
  children: ReactNode
}

export type LinkRef = HTMLAnchorElement

/**
 * What users tap to go to a different page.
 *
 * Renders a standard `<a>` element - you may prefer Gatsby's `Link`, or similar from your router.
 * Apply a theme variant to those components in order to match this one.
 */
export const Link = forwardRef<LinkRef, LinkProps>(
  /* TODO: figure out why next line isn't covered in test(s) */
  ({ variant = 'links.default', children, ...props }, ref) => {
    return (
      <a
        {...props}
        ref={ref}
        sx={{
          // pass variant prop to sx
          variant,
        }}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
