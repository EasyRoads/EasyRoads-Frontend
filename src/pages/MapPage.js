import React from 'react';
import Map from '../components/Map.js';

const MapPage = () => {
    const center = {lat: 43.755735, lng: -79.385804};
    // 43.767707, lng: -79.388739
    return (
        <div>
            <Map center={center} />            
        </div>
    )
}

export default MapPage;