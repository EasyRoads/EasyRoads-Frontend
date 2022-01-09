import React from 'react';
import Button from '../../components/button/button.js';
import style from './style.module.css';
const RouteNavPage = (props) => {
  return (
    <div className={style.homeMapStartPage}>
      <div className={style.container}>
        <Button
          link='/driving-detail'
          label='Start'
          className={style.custombtn}
        />
      </div>
    </div>
  );
};

export default RouteNavPage;
