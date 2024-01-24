import React from 'react'
import './footer.css'
import { whitelogo } from '../../assets'
import { footerLinks, socialMedia } from '../../constant'

const Footer = () => (
  <section className='powerlift__footer'>
    <div className='powerlift__footer-links__container'>
      <div className='powerlift__footer-links_section1'>
        <img src={whitelogo} alt="hoobank" className='powerlift__footer-links__image' />
        <p className='powerlift__footer-links__paragraph'>We don’t just offer renewable energy solutions; <br />We provide a commitment to quality, sustainability, and partnership.</p>
      </div>

      <div className='powerlift__footer-links__section2'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className='powerlift__footer-links__tab'>
            <h4 className='powerlift__footer-links__title'>
              {footerLink.title}
            </h4>
            <ul className='powerlift__footer-links'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className='powerlift__footer-links__list'>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='powerlift__footer-rights'>
      <p className='powerlift__footer-rights__paragraph'>
        2024 Rinnovo. All Rights Reserved
      </p>
      <div className='powerlift__footer-rights__socials'>
        {socialMedia.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id} className='powerlift__footer-rights__socials-image' />
        ))}
      </div>
    </div>
  </section>
)

export default Footer