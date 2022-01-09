import React from 'react';
import './style.css';

const DriveResult = (props) => {
  return (
    <div className='drive-result-info'>
      <div className='row'>
        <div className='column'>Time</div>
        <div className='column'>58:20</div>
      </div>
      <div className='row'>
        <div className='column'>Location</div>
        <div className='column'>Bloor, Toronto</div>
      </div>
      <div className='row'>
        <div className='column'>Average Speed</div>
        <div className='column'>62km/h</div>
      </div>
      <div className='row'>
        <div className='column'>Weatjer</div>
        <div className='column'>Light Rain</div>
      </div>
    </div>
  );
};

export default DriveResult;
