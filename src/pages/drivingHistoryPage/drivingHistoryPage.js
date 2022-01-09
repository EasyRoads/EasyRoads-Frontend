import React from 'react';
import './style.css';
import UserHistory from '../../components/user-history/user-history.js';

const DrivingHistoryPage = (props) => {
  return (
    <div className='history'>
      <p className='title'>History</p>

      <UserHistory className='history-info' />
      <UserHistory className='history-info' />
      <UserHistory className='history-info' />
    </div>
  );
};
export default DrivingHistoryPage;
