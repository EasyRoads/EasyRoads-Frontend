import React from 'react';
import './style.css';
import rainblack from '../../assets/rain-black.png';

const WeatherInfo = () => {
  return (
    <div className='weather-info'>
      <img src={rainblack} alt='' className='rainblack' />
      <p className='label'>
        It's raining! A great chance to improve your driving skills
      </p>
    </div>
  );
};

export default WeatherInfo;
