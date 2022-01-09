import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Button = ({ type, label, link, moreStyle, displayVal }) => {
  return (
    <button type={type} className={`custom-btn ${moreStyle}`} style={{display: (displayVal ? 'block': 'none')}}>
      <Link to={link} className='link-btn'>
        {label}
      </Link>
    </button>
  );
};

export default Button;
