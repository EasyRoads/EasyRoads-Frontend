import React from 'react';
import './style.css';
import LevelInfo from '../../components/level-info/level-info';
import WeatherInfo from '../../components/weather-info/weather-info.js';
import Button from '../../components/button/button.js';
const HomePage = () => {
  return (
    <div className='homepage'>
      <p className='title'>Our suggestions</p>
      <LevelInfo className='level-info' />
      <WeatherInfo className='weather-info' />
      <div className='container home-btn-div'>
        <Button link='/areas' label='Where to Drive?'/>
      </div>
    </div>
  );
};
export default HomePage;
