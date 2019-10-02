/** @jsx jsx */
import { jsx, Header as BaseHeader } from 'theme-ui'
import { useState, ReactNode } from 'react'
import { Button } from '../Button'

interface HeaderProps {
  /**
   * Logo that will always be rendered
   */
  logo: ReactNode
  /**
   * Content to render inside of the toggle menu
   * If no children are passed, the menu and its button will not be rendered.
   */
  children?: ReactNode
}

/**
 * The site header. Shared across all pages.
 */
export const Header = ({ children, logo }: HeaderProps) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!isNavOpen)

  return (
    <BaseHeader
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {logo}
      {children && (
        <nav
          aria-expanded={isNavOpen}
          aria-label="Main Navigation"
          role="navigation"
          sx={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <Button onClick={toggleNav} variant="nav">
            Menu
          </Button>
          <div hidden={!isNavOpen}>{children}</div>
        </nav>
      )}
    </BaseHeader>
  )
}
