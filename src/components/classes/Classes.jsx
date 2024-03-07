import React, { useState } from 'react';
import './classes.css';
import { active, activekids, body, arrowb, arrowf } from '../../assets';

const Classes = () => {
  const classes = [
    {
      id: "class-1",
      img: active,
      title: "Active Adults",
      text: "STRENGTH, SPEED, STAMINA"
    },
    {
      id: "class-2",
      img: activekids,
      title: "Acive Kids",
      text: "FUN AND EDUATION"
    },
    {
      id: "class-3",
      img: body,
      title: "Body Attack",
      text: "THE POWER PUSHER"
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [activeArrow, setActiveArrow] = useState(null);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % classes.length);
    setActiveArrow('forward');
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + classes.length) % classes.length);
    setActiveArrow('backward');
  };

  return (
    <div className='powerlift__classes'>
      <h1 className='powerlift__classes-header'>Our Equipment</h1>
      <p className='powerlift__classes-paragraph'>
      Drawing from the vast experience of Precise Lighting, Powerlift Pro combines superior craftsmanship with reliability. Our range includes everything from robust free weights and benches to state-of-the-art cardio and resistance machines, each designed to withstand the rigors of intense training.
      </p>

      <div className='powerlift__classes-images slider-container'>
        <img src={classes[currentImage].img} alt="" className='powerlift__classes-image1' />
        <div className='descripton'>
          <h2>{classes[currentImage].title}</h2>
          <p>{classes[currentImage].text}</p>
        </div>
      </div>

      <div className='powerlift__classes-images_laptop slider-container-laptop'>
        {classes.map((classItem, index) => (
          <div key={classItem.id} className='class-item'>
            <img src={classItem.img} alt="" className='powerlift__classes-image' />
            <div className='description-laptop'>
              <h2>{classItem.title}</h2>
              <p>{classItem.text}</p>
            </div>
          </div>
        ))}
      </div>


      <div className='arrows'>
        <div className={`arrow ${activeArrow === 'backward' ? 'active' : ''}`}>
          <img src={arrowb} alt="" className='arrowb' onClick={handlePrev} />
        </div>
        <div className={`arrow ${activeArrow === 'forward' ? 'active' : ''}`}>
          <img src={arrowf} alt="" className='arrowf' onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Classes;
