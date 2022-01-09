import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import dotenv from 'dotenv';
// dotenv.config();

const containerStyle = {
    width: '400px',
    height: '400px'
};

const Map = (props) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    console.log(process.env.GOOGLE_MAPS_API_KEY);
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={props.center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/* child comps e.g. markers here */}
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map);