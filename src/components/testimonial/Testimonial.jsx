import React, { useState } from 'react'
import './testimonial.css'
import { arrowb, arrowf, quote, user1, user2, user3 } from '../../assets'

const Testimonial = () => {
  const testimonials = [
    {
      id: "testimonials-1",
      img: user1,
      comment: "GymBase is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts. Check what else we offer for our members. GymBase is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts.",
      name: "AMITEE LOISELLE"
    },
    {
      id: "testimonials-2",
      img: user2,
      comment: "GymBase is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts. Check what else we offer for our members. GymBase is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts.",
      name: "MARK ANTHONY"
    },
    {
      id: "testimonials-3",
      img: user3,
      comment: "GymBase is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts. Check what else we offer for our members. GymBase is not just a gym, we have an indoor swimming pool, sauna zone, two indoor team courts.",
      name: "LIAM HARPAUL"
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [activeArrow, setActiveArrow] = useState(null);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % testimonials.length);
    setActiveArrow('forward');
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setActiveArrow('backward');
  };

  return (
    <div className='powerlift__testimonials' id='testimonies'>
      <div className='powerlift__testimonials-container'>
        <img src={testimonials[currentImage].img} alt="" className='powerlift__testimonials-container__userimg' />
        <img src={quote} alt="" className='powerlift__testimonials-container__quoteimg' />
        <p className='powerlift__testimonials-container__firstparagraph'>{testimonials[currentImage].comment}</p>
        <p className='powerlift__testimonials-container__secondparagraph'>{testimonials[currentImage].name}</p>

        <div className='arrows'>
          <div className={`arrow ${activeArrow === 'backward' ? 'active' : ''}`}>
            <img src={arrowb} alt="" className='arrowb' onClick={handlePrev} />
          </div>
          <div className={`arrow ${activeArrow === 'forward' ? 'active' : ''}`}>
            <img src={arrowf} alt="" className='arrowf' onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial