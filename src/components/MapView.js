import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import './MapView.css';
import MapViewContainer from "./MapViewContainer";

const MapView = withScriptjs(withGoogleMap((props) => {

    return (
        <div className='MapView'>
            <GoogleMap
                defaultZoom={16}
                center={{ lat: 37.8719, lng: -122.2585 }}
            >
            </GoogleMap>
        </div>
    );
}
))

export default MapView;