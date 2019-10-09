/**@jsx jsx */
import { jsx } from 'theme-ui'
import { ReactNode } from 'react'

interface TabBarProps {
  /**
   * Name distinguishing this nav from others on the page
   */
  label: string
  /**
   * Items to render
   */
  children: ReactNode
}

/**
 * Bottom navigation for mobile devices.
 */
export const TabBar = ({ label, children, ...props }: TabBarProps) => {
  return (
    <nav
      aria-label={label}
      sx={{
        borderTopColor: 'grays.2',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        maxWidth: '100%',
      }}
      {...props}
    >
      <div
        sx={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-around',
          py: 2,
          width: '100%',
          maxWidth: theme => theme.breakpoints[0],
          mx: 'auto',
          overflowX: 'hidden',
        }}
      >
        {children}
      </div>
    </nav>
  )
}
