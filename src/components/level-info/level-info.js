import React from 'react';
import { GiRaining } from 'react-icons/gi';
import './style.css';

const LevelInfo = () => {
return(
    <>
        <p className="title">Our suggestion</p>
        <div className="level">
        <img src="" className="level-img"/>
        <p className="time">40 min</p>
        <br/>
        <p className="location">Yorkdale, Toronto</p>
        <GiRaining className="weather-rainy"/>
        </div>
    </>
    )
}
export default LevelInfo;