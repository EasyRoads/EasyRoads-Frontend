import React from 'react';
import './style.css';

const DriveResult = (props) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>Time</div>
          <div className='col-sm'>58:20</div>
        </div>
        <div className='row'>
          <div className='col-sm'>Location</div>
          <div className='col-sm'>Bloor, Toronto</div>
        </div>
        <div className='row'>
          <div className='col-sm'>Average Speed</div>
          <div className='col-sm'>62km/h</div>
        </div>
        <div className='row'>
          <div className='col-sm'>Weatjer</div>
          <div className='col-sm'>Light Rain</div>
        </div>
      </div>
    </>
  );
};

export default DriveResult;
