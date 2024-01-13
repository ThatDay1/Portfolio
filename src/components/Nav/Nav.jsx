import React, { useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navLinks } from '../../data/Data'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const MenuHandler = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav>
      <ul className={`${showMenu ? 'navlinks navlinks-show' : 'navlinks'}`}>
        {navLinks.map(({ id, name, path, icon }) => {
          return (
            <li className="nav-item" key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'nav-link navLinksActive' : 'nav-link'
                }
              >
                <span>
                  <FontAwesomeIcon icon={icon} />
                </span>
                <h3>{name}</h3>
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div
        className={`${showMenu ? 'nav-toggle nav-close' : 'nav-toggle'}`}
        onClick={MenuHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Nav
