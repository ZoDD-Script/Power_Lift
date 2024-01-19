import React, { useState } from 'react'
import { close, logo, menu, user, whatsappIcon } from '../../assets'
import { navLinks, whatsapp } from '../../constant'
import { Link } from 'react-scroll'
import './navbar.css'

const NavBar = () => {
  const [toggle, settoggle] = useState(false)
  const [whatsappDropdown, setWhatsappDropdown] = useState(false);

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

      <div className='whatsapp__chat'>
        <img
          src={whatsappIcon} // Replace with your WhatsApp icon source
          alt="whatsapp"
          className='whatsapp__icon'
          onClick={() => setWhatsappDropdown((prev) => !prev)}
        />

        {whatsappDropdown && (
          <div className='whatsapp__dropdown-container'>
            <div className='whatsapp__dropdown-header'>
              <img src={close} alt="close" onClick={() => setWhatsappDropdown((prev) => !prev)} className='whatsapp__dropdown-close' />
              <h2 className='whatsapp__dropdown-heading'>Support</h2>
            </div>
            {whatsapp.map((wa) => (
              <div key={wa.id} className='whatsapp__dropdown-body'>
                <a onClick={() => setWhatsappDropdown((prev) => !prev)} href={`https://wa.me/${wa.number}?text=Hi...`} target='_blank' className='whatsapp__dropdown-body__customercare-container'>
                  <img src={user} alt="" className='whatsapp__dropdown-body__customercare-container__image' />
                  <div className='text__container'>
                    <p className='whatsapp__dropdown-body__customercare-container__title'>{wa.title}</p>
                    <p className='whatsapp__dropdown-body__customercare-container__name'>
                      {wa.name}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar