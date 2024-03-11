import React, { useState } from 'react'
import './testimonial.css'
import { arrowb, arrowf, quote, user1, user2, user3 } from '../../assets'

const Testimonial = () => {
  const testimonials = [
    {
      id: "testimonials-1",
      img: user1,
      comment: "I recently outfitted my home gym with equipment from Powerlift Pro, and I couldn't be happier with the quality. The barbells and plates are durable and well-made, making my workouts effective and enjoyable.",
      name: "AMITEE LOISELLE"
    },
    {
      id: "testimonials-2",
      img: user2,
      comment: "As a personal trainer, I rely on top-notch equipment to deliver results to my clients. Powerlift Pro never disappoints! Their wide selection of racks, benches, and accessories meets the needs of all my clients, from beginners to elite athletes.",
      name: "MARK ANTHONY"
    },
    {
      id: "testimonials-3",
      img: user3,
      comment: "I recently opened a new fitness studio, and Powerlift Pro was my go-to for outfitting the space. Their commercial-grade equipment is built to last, and my clients love the professional feel of the gym. Thanks, Powerlift Pro, for helping me bring my vision to life!",
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