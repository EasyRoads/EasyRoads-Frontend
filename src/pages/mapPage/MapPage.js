import React, { useState } from 'react';
import Map from '../../components/Map.js';
import Button from '../../components/button/button.js';
import style from './style.css';

const MapPage = () => {
    const center = {lat: 43.755735, lng: -79.385804};
    const [displayVal, setDisplayVal] = useState(false);
    // 43.767707, lng: -79.388739
    const sendBtnVisibility = (value) => { // the callback. Use a better name
        setDisplayVal(value);
    };
    return (
        <div className={style.box}>
            <Map center={center} sendBtnVisibility={sendBtnVisibility}/>
            <Button
                link='/driving-detail'
                label='Start'
                moreStyle="map-btn"
                displayVal={displayVal}
            />
        </div>
    )
}

export default MapPage;