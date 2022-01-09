import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Polygon, Circle } from '@react-google-maps/api';

import hazardousDrivingAreas from '../data/hazardous_driving_areas';

const containerStyle = {
    width: '400px',
    height: '400px'
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

    const [centerOfPolygon, setCenterOfPolygon] = useState({});
   
    const level1 = '#BF55F1';
    const level2 = '#FDBC15';

    const options = {
        // fillColor: `${BF55F1}`,
        fillOpacity: 0.7,
        // strokeColor: "#BF55F1",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    }

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
      }
      
    // const polygonLoaded = polygon => {
    //     console.log("polygon: ", polygon);
    // }

    // const circleOnLoad = circle => {
    //     console.log('Circle onLoad circle: ', circle)
    // }
    
    // const circleOnUnmount = circle => {
    //     console.log('Circle onUnmount circle: ', circle)
    // }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        language: "en",
        region: "ca"
    })

    const [map, setMap] = React.useState(null)

    useEffect(() => {
        setTimeout(() => {
            getCenterOfPolygon();
        }, 200);
        
    }, []);

    const getCenterOfPolygon = () => {
        const bounds = new window.google.maps.LatLngBounds();
        
        // for (let i = 0; i < paths.length; i++) {
        //     bounds.extend(paths[i]);
        // }
        // console.log(bounds.getCenter());
        setCenterOfPolygon(bounds.getCenter());
    }

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={props.center}
                zoom={13}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* child comps e.g. markers here */}
                {level1Routes.map((route) =>
                    <Polygon 
                        paths={route}
                        options={options, {fillColor: level1, strokeColor: level1}}
                    />
                )}
                
                {level2Routes.map((route) => 
                    <Polygon 
                        paths={route}
                        options={options, {fillColor: level2, strokeColor: level2}}
                    />
                )}
                
                {hazardousDrivingAreas.map((area) => 
                    <Circle
                    // onLoad={circleOnLoad} //optional
                    // onUnmount={circleOnUnmount} //optional
                    // required
                    center={{lat: area.latitude, lng: area.longitude}}
                    // required
                    options={circleOptions}
                    />
                )}
                
            </GoogleMap>
    ) : <></>
}

export default React.memo(Map);