import React from 'react'
import Link from 'gatsby-link'

const Header = ({ location }) => (
  <header className="header">
    <Link
      className={location.pathname === '/' ? 'header-item--active' : ''}
      to="/"
    >
      Anna Paterson
    </Link>
    <Link
      className={location.pathname === '/log' ? 'header-item--active' : ''}
      to="/log"
    >
      Log
    </Link>
    <Link
      className={location.pathname === '/info' ? 'header-item--active' : ''}
      to="/info"
    >
      Info
    </Link>
  </header>
)

export default Header
