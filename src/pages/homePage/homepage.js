import React from 'react';
import './style.css';
import LevelInfo from '../../components/level-info/level-info';
import WeatherInfo from '../../components/weather-info/weather-info.js';
import Button from '../../components/button/button.js';
const HomePage = () => {
  return (
    <div className='homepage'>
      <p className='title'>Our suggestions</p>
      <LevelInfo className='level-page' />
      <WeatherInfo className='weather-page' />
      <div className='container'>
        <Button label='Where to Drive' />
      </div>
    </div>
  );
};
export default HomePage;
