import { Link } from 'gatsby'
import React from 'react'

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header className="bg-blue-900">
    <div className="px-4 md:px-8 py-4">
      <h1 className="font-serif text-3xl">
        <Link to="/" className="text-orange-100">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
