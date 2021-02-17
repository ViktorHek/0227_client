import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>0227 official page</h1>
      <Link to="/">
        Home
      </Link>
      <Link data-cy="köp-header" to="/köp">
        Köp
      </Link>
    </div>
  )
}

export default Header
