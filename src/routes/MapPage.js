import React, { useState } from 'react';
import Map from '../components/Map.js';

const MapPage = () => {
    const [center, setCenter] = useState({lat: 43.767707, lng: -79.388739}); //default: toronto

    return (
        <div>
            <Map center={center} />            
        </div>
    )
}

export default MapPage;