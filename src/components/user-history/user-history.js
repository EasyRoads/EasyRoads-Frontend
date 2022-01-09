import React from 'react';
import './style.css';
import driveRoute from '../../assets/drive-route.png';
import sun from '../../assets/sun.png';
const UserHistory = (props) => {
  return (
    <>
      <div className='history-info'>
        <img src={driveRoute} alt='' className='drive-route' />

        <span className='date'>
          Jan 8th, 2022
          <br /> 32min
          <br /> Yorkdale, Toronto
        </span>

        <img src={sun} alt='' className='sun' />
      </div>
    </>
  );
};

export default UserHistory;
