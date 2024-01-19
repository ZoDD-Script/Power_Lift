import React from 'react'
import { offer } from '../../assets'
import { offers } from '../../constant'
import './offer.css'

const OfferCard = ({ icon, title, content }) => (
  <div className='powerlift__offer-container__section1'>
    <div className='powerlift__offer-container__section1__horizontal-line'></div>
    <div className='powerlift__offer-container__section1__content'>
      <img src={icon} alt="" className='' />
      <h3 className=''>{title}</h3>
      <p className=''>{content}</p>
    </div>
  </div>
)

const Offer = () => (
  <div className='powerlift__offer-container'>
    <div className='powerlift__offer-container__section1-container'>
      {offers.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </div>
    <div className='powerlift__offer-container__section2'>
      <img src={offer} alt="" className='powerlift__offer-container__section2-image' />
    </div>
  </div>
)

export default Offer