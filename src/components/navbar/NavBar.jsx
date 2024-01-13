import React, { useState } from 'react'
import { close, logo, menu } from '../../assets'
import { navLinks } from '../../constant'
import { Link } from 'react-scroll'
import './navbar.css'

const NavBar = () => {
  const [toggle, settoggle] = useState(false)

  return (
    <nav className='powerlift__navbar'>
      <a href="home" className='powerlift__navbar-logoLink'>
        <img src={logo} alt="powerlift_logo" className='powerlift__navbar-logo' />
      </a>

      <div className='powerlift__navbar-navlinks' id='navLinks'>
        <ul>
          {navLinks.map((navlink) => (
            <li key={navlink.id}>
              <Link to={navlink.href} smooth={true} duration={500}>
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='powerlift__navbar-navlinks__mobile'>
        <img 
          src={toggle? close : menu}
          alt="menu"
          className='powerlift__navbar-navlinks__mobile-toggle'
          onClick={
            () => settoggle((prev) => !prev)
          }
        />

        <div className={`${toggle ? 'toggle__flex' : 'toggle__hidden'}`}
        >
          <ul className='powerlift__navbar-navlinks__mobile-links'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar