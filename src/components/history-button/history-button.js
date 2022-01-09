import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const HistoryButton = ({ link }) => {
  return (
    <>
      <button className='history-btn'>
        <Link to={link} className='link-btn'>
          See My History
        </Link>
      </button>
    </>
  );
};
export default HistoryButton;
