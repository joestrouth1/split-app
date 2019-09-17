/**@jsx jsx */
import { jsx } from 'theme-ui'
import { alerts } from '../theme/variants/alerts'
import { ReactNode, BaseHTMLAttributes } from 'react'

interface AlertProps extends BaseHTMLAttributes<HTMLDivElement> {
  /** Preset variant to use, defined in theme.alerts */
  variant: keyof typeof alerts
  /** Content to render */
  children: ReactNode
}

/**
 * Colored callout for informational/advisory purposes
 */
export const Alert = ({
  variant = 'positive',
  children,
  ...props
}: AlertProps) => {
  return (
    <div
      sx={{
        variant: `alerts.${variant}`,
        display: 'flex',
        alignItems: 'center',
      }}
      {...props}
    >
      {children}
    </div>
  )
}
