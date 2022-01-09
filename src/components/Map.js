import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Polygon, Circle, Marker } from '@react-google-maps/api';

import hazardousDrivingAreas from '../data/hazardous_driving_areas';
import currLocation from '../assets/current-location.png';
import Lv1 from '../assets/Lv1.png';
import Lv2 from '../assets/Lv2.png';
import Button from '../components/button/button.js';
import style from '../pages/homeMapStartPage/style.module.css';

const containerStyle = {
    width: '415px',
    height: '800px'
};

const Map = (props) => {
    // console.log(props.center);

    const level1Routes = [
        [
            { lat: 43.752741, lng: -79.361114 },
            { lat: 43.742673, lng: -79.357792 },
            { lat: 43.738025, lng: -79.363600 },
            { lat: 43.742274, lng: -79.369093 },
            { lat: 43.748055, lng: -79.368702 },
            { lat: 43.750305, lng: -79.365030 },
            { lat: 43.752454, lng: -79.365451 },
        ],
        [
            { lat: 43.780759, lng: -79.406642 },
            { lat: 43.782865, lng: -79.396085 },
            { lat: 43.770345, lng: -79.391001 },
            { lat: 43.768078, lng: -79.401338 },
        ]
    ];

    const level2Routes = [
        [
            { lat: 43.747039, lng: -79.388995 },
            { lat: 43.750856, lng: -79.390631 },
            { lat: 43.752562, lng: -79.395352 },
            { lat: 43.755563, lng: -79.398231 },
            { lat: 43.754224, lng: -79.403151 },
            { lat: 43.753271, lng: -79.404733 },
            { lat: 43.747794, lng: -79.402773 },
            { lat: 43.744846, lng: -79.399506 },
        ],
        [
            { lat: 43.758227, lng: -79.364178 },
            { lat: 43.755660, lng: -79.363744 },
            { lat: 43.755039, lng: -79.366497 },
            { lat: 43.753142, lng: -79.365945 },
            { lat: 43.752425, lng: -79.369845 },
            { lat: 43.751485, lng: -79.370322 },
            { lat: 43.749895, lng: -79.378642 },
            { lat: 43.750991, lng: -79.378992 },
            { lat: 43.753173, lng: -79.376477 },
            { lat: 43.760199, lng: -79.379038 },
            { lat: 43.761763, lng: -79.372364 },
            { lat: 43.759995, lng: -79.366859 },
    
        ]
    ];

    const markerPosition = {
        lat: 43.742441,
        lng: -79.386132
    };

    const polylinePath = [
        {lat: 43.742626, lng: -79.385321},
        {lat: 43.743719, lng: -79.385428},
        {lat: 43.744002, lng: -79.383361},
        {lat: -27.467, lng: 153.027}
    ];

    const textPositions = [
        {lat: 43.745272, lng: -79.364093 },
        {lat: 43.774755, lng: -79.398936 },
        {lat: 43.756350, lng: -79.371459 },
        {lat: 43.749469, lng: -79.397986 }
    ];

    // const [centerOfPolygon, setCenterOfPolygon] = useState({});

    const options = {
        // fillColor: `${BF55F1}`,
        // fillOpacity: 0.9,
        // strokeColor: "#BF55F1",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    };

    const labelOptions = {
        fillColor: '#111111',
        fillOpacity: 0,
        // strokeColor: "#BF55F1",
        strokeOpacity: 0,
        // strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    };

    const circleOptions = {
        strokeColor: 'rgb(180, 180, 180)',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: 'rgb(180, 180, 180)',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 70,  //6.4516
        zIndex: 1
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        language: "en",
        region: "ca"
    });

    const [map, setMap] = React.useState(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         getCenterOfPolygon();
    //     }, 200);
        
    // }, []);

    // const getCenterOfPolygon = () => {
    //     const bounds = new window.google.maps.LatLngBounds();
        
    //     // for (let i = 0; i < paths.length; i++) {
    //     //     bounds.extend(paths[i]);
    //     // }
    //     // console.log(bounds.getCenter());
    //     setCenterOfPolygon(bounds.getCenter());
    // }

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    // const level1Color = ['#BF55F1', '#58DBF8'];
    // const level2Color = ['#FDBC15', '#58DBF8'];
    const [color1, setColor1] = useState('#BF55F1');
    const [color2, setColor2] = useState('#BF55F1');
    const [color3, setColor3] = useState('#FDBC15');
    const [color4, setColor4] = useState('#FDBC15');

    const handleClick1 = (e) => {
        color1 === '#BF55F1' 
            ? setColor1('#58DBF8')
            : setColor1('#BF55F1')
    };

    const handleClick2 = (e) => {
        color2 === '#BF55F1'
            ? setColor2('#58DBF8')
            : setColor2('#BF55F1')
    };

    const handleClick3 = (e) => {
        color3 === '#FDBC15' 
            ? setColor3('#58DBF8')
            : setColor3('#FDBC15')
    };

    const handleClick4 = (e) => {
        color4 === '#FDBC15'
            ? setColor4('#58DBF8')
            : setColor4('#FDBC15')
    };
    
    return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={props.center}
                zoom={13.5}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* child comps e.g. markers here */}
                <Polygon 
                    paths={level1Routes[0]}
                    options={options, {fillColor: color1, strokeColor: color1, fillOpacity: 0.55}}
                    onClick={handleClick1}
                />
                <Polygon
                    paths={level1Routes[1]}
                    options={options, {fillColor: color2, strokeColor: color2, fillOpacity: 0.55}}
                    onClick={handleClick2}
                />             
                <Polygon 
                    paths={level2Routes[0]}
                    options={options, {fillColor: color3, strokeColor: color3, fillOpacity: 0.55}}
                    onClick={handleClick3}
                />
                <Polygon 
                    paths={level2Routes[1]}
                    options={options, {fillColor: color4, strokeColor: color4, fillOpacity: 0.55}}
                    onClick={handleClick4}
                />
                <Marker
                    icon={Lv1}
                    position={textPositions[0]}
                />
                <Marker
                    icon={Lv1}
                    position={textPositions[1]}
                />
                <Marker
                    icon={Lv2}
                    position={textPositions[2]}
                />
                <Marker
                    icon={Lv2}
                    position={textPositions[3]}
                />
                {hazardousDrivingAreas.map((area, i) => 
                    <Circle
                        // onLoad={circleOnLoad} //optional
                        // onUnmount={circleOnUnmount} //optional
                        // required
                        key={i}
                        center={{lat: area.latitude, lng: area.longitude}}
                        // required
                        options={circleOptions}
                    />
                )}
                <Marker
                    position={markerPosition}
                    icon={currLocation}
                />
            </GoogleMap>
    ) : <></>
}

export default React.memo(Map);