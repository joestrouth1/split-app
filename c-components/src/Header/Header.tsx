/** @jsx jsx */
import { jsx, Header as BaseHeader } from 'theme-ui'
import { useState } from 'react'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Link } from '../Link'

/**
 * The site header.
 */
export const Header = () => {
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
        }}
      />
      <Link>Click me I'm a link</Link>
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
        <ul hidden={!isNavOpen}>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </nav>
    </BaseHeader>
  )
}
