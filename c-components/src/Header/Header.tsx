/** @jsx jsx */
import { jsx, Header as BaseHeader } from 'theme-ui'
import { useState, ReactNode } from 'react'
import { Logo } from '../Logo'
import { Button } from '../Button'

interface HeaderProps {
  /**
   * Content to render inside of the toggle menu
   * If no children are passed, the menu and its button will not be rendered.
   * */
  children?: ReactNode
}

/**
 * The site header.
 */
export const Header = ({ children }: HeaderProps) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!isNavOpen)

  return (
    <BaseHeader
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Logo
        alt="Company Name"
        sx={{
          py: [2],
          maxWidth: 217,
          height: 'auto',
        }}
      />
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
