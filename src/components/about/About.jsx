import React from 'react'
import { infos, options } from '../../constant'
import './about.css'
import { about1, about2, about3 } from '../../assets'

const OptionCard = ({ icon, title, followText, content, clss }) => (
  <div className={`powerlift__hero-option ${clss}`}>
    <h2 className='powerlift__hero-option__header'>{title}</h2>
    <h3 className='powerlift__hero-option__small-header'>{followText}</h3>
    <div className='powerlift__hero-option__content'>
      <img src={icon} alt="" className='powerlift__hero-option__content-image' />
      <p className='powerlift__hero-option__content-paragraph'>{content}</p>
    </div>
  </div>
)

const InfoCard =({ title, content }) => (
  <div className='powerlift__about-infocard'>
    <p>{title}</p>
    <h3>{content}</h3>
  </div>
)

const About = () => (
  <div className='powerlift__about' id='about-us'>
    <div className='powerlift__about-section1'>
      {options.map((option) => (
        <OptionCard key={option.id} {...option} />
      ))}
    </div>

    <div className='powerlift__about-section2' id='about-us'>
      <div className='powerlift__about-images__container'>
        <img src={about1} alt="" className='powerlift__about-images1' />
        <img src={about2} alt="" className='powerlift__about-images2' />
        <img src={about3} alt="" className='powerlift__about-images3' />
      </div>
      <div className='powerlift__about-content__container'>
        <h3 className='powerlift__about-content__intro'>
          About
        </h3>
        <h2 className='powerlift__about-content__heading'>
        Your ultimate destination for premium solutions.
        </h2>
        <p className='powerlift__about-content__first-paragraph'>
        As a leading subsidiary of the respected Precise Lighting, we specialize in providing a wide range of high-quality gym equipment tailored to meet the diverse needs worldwide. Our dedication extends beyond mere products; we are committed to enhancing your workout experiences with advanced design, durability, and unparalleled customer support.
        </p>
        <br />
        <p className='powerlift__about-content__second-paragraph'>
        Drawing from the vast experience of Precise Lighting, Powerlift Pro combines superior craftsmanship with reliability. Our range includes everything from robust free weights and benches to state-of-the-art cardio and resistance machines, each designed to withstand the rigors of intense training.
        </p>

        <div className='powerlift_about-info'>
          {infos.map((info) => (
            <InfoCard key={info.id} {...info} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default About