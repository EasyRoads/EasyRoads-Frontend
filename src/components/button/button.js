import React from 'react';
import './style.css';
const Button = ({ type, label }) => {
  return (
    <button type={type} className='custom-btn'>
      {label}
    </button>
  );
};

export default Button;
