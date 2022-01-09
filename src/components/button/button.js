import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Button = ({ type, label, link, moreStyle }) => {
  return (
    <button type={type} className={`custom-btn ${moreStyle}`}>
      <Link to={link} className='link-btn'>
        {label}
      </Link>
    </button>
  );
};

export default Button;
