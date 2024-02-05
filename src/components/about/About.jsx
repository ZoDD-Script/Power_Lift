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
  <div className='powerlift__about'>
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
        From the moment you walk through the door you know Gymbase is a unique place
        </h2>
        <p className='powerlift__about-content__first-paragraph'>
        When we created Gym Base, we knew we wanted to be more than just a simple gym. Having worked in traditional gyms in the past, we knew we needed to create a concept that would provide our members with the most effective tools for success. This meant we needed to offer a wide range of classes both for children and adults.
        </p>
        <br />
        <p className='powerlift__about-content__second-paragraph'>
        This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.
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