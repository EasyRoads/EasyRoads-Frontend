import React from 'react';
import level from '../../assets/lv1-small.png';
import rain from '../../assets/rain.png';
import './style.css';

const LevelInfo = () => {
  return (
    <div className='level-info'>
      {/* <p className='title'>Our suggestion</p> */}
      <img src={level} alt='' className='level' />
      <p className='time-location'>
        40 min <br />
        Yorkdale, Toronto
      </p>
      <img src={rain} alt='' className='rain' />
    </div>
  );
};
export default LevelInfo;
