import React from 'react';
import Map from '../components/Map.js';
import Button from '../components/button/button.js';
import style from './homeMapStartPage/style.module.css';

const MapPage = () => {
    const center = {lat: 43.755735, lng: -79.385804};
    // 43.767707, lng: -79.388739
    return (
        <div>
            <Map center={center} />   
            <Button
                link='/driving-detail'
                label='Start'
                className={style.custombtn}
            />         
        </div>
    )
}

export default MapPage;