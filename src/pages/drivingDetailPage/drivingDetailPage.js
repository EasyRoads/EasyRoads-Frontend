import React from 'react';
import map from '../../assets/drive-route.png';
import style from './style.module.css';
import DriveResult from '../../components/drive-result/drive-result.js';
import DriveResultBottom from '../../components/drive-result-bottom/drive-result-bottom.js';
import HistoryButton from '../../components/history-button/history-button.js';
const DrivingDetailPage = (props) => {
  return (
    <div className={style.detail}>
      <p className={style.title}>Today's Driving</p>
      <img src={map} alt='' className={style.map} />
      <DriveResult />
      <DriveResultBottom className={style.container} />
      <HistoryButton link='/driveHistory' />
    </div>
  );
};

export default DrivingDetailPage;
