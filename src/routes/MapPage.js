import React, { useState } from 'react';
import Map from '../components/Map.js';

const MapPage = () => {
    const [center, setCenter] = useState({lat: 43.653226, lng: -79.3831843}); //default: toronto

    return (
        <div>
            <Map center={center} />            
        </div>
    )
}

export default MapPage;