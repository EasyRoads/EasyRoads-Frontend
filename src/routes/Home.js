import React, { useState } from 'react';
import Map from '../components/Map.js';
import * as api from '../apis/api';
import SearchBar from '../components/SearchBar.js';

const Home = () => {
    const [center, setCenter] = useState({lat: -3.745, lng: -38.523}); //default: toronto

    const search = async (location) => {
        try {
            const center = await api.getLatLngFromAddress(location);
            const lat = center.lat;
            const lng = center.lng;
            setCenter({lat, lng});

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <SearchBar onSubmit={search} />
            <Map center={center} />      
        </div>
    )
}

export default Home;