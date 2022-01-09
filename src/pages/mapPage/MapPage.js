import React from 'react';
import Map from '../../components/Map.js';
import Button from '../../components/button/button.js';
import style from './style.css';

const MapPage = () => {
    const center = {lat: 43.755735, lng: -79.385804};
    // 43.767707, lng: -79.388739
    return (
        <div className={style.box}>
            <Map center={center} />   
            <Button
                link='/driving-detail'
                label='Start'
                moreStyle="map-btn"
            />
        </div>
    )
}

export default MapPage;