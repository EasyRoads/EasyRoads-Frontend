import React from 'react';
import level from '../../assets/large.png';
import sun from '../../assets/sun.png';
import rain from '../../assets/rain.png';
import snow from '../../assets/snow.png';
import './style.css';

const DriveResultBottom = (props) => {
  return (
    <div className='container'>
      <img src={level} alt='' className='large-level' />
      <ul className='weather-info'>
        <li className='weather'>
          <img src={sun} alt='' className='level' />
        </li>
        <li className='weather'>
          <img src={rain} alt='' className='level' />
        </li>
        <li className='weather'>
          <img src={snow} alt='' className='level' />
        </li>
      </ul>
      <p className='text'>
        You drove on a rainy day! One step closer to the next level.
      </p>
    </div>
  );
};

export default DriveResultBottom;
