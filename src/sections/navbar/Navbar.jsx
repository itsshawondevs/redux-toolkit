import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
          <div className="container">
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/blog'>Blog</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>contact</NavLink>
              </li>
            </ul>
          </div>
      </nav>

      <hr />
    </>
  )
}

export default Navbar