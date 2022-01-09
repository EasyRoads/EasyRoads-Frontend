import React from 'react';
import level from '../../assets/lv1-small.png';
import rain from '../../assets/rain.png';
import './style.css';

const LevelInfo = () => {
  return (
    <div className='container'>
      <div className='level-info'>
        <img src={level} alt='' className='level-one' />
        <p className='time-location'>
          40 min <br />
          Yorkdale, Toronto
        </p>
        <img src={rain} alt='' className='rain' />
      </div>
    </div>
  );
};
export default LevelInfo;
