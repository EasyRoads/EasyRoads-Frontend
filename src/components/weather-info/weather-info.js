import React from 'react';
import './style.css';
import rainblack from '../../assets/rain-black.png';

const WeatherInfo = () => {
  return (
    <div className='container'>
      <div className='weather-info'>
        <img src={rainblack} alt='' className='rainblack' />
        <p className='text'>
          It's raining! A great chance to improve your driving skills
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;
