

import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "react-google-maps";


class MapaGo extends Component {


  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: -12.138873, lng: -76.9897933 }}
      >
        <Marker
          position={{ lat: -12.138873, lng: -76.9897933 }}
        />
        <Marker
          position={{ lat: -12.198873, lng: -76.9897933 }}
        />
        <Marker
          position={{ lat: -12.148873, lng: -76.9697933 }}
        />

        <DirectionsRenderer origin={{ lat: -12.148873, lng: -76.9697933 }} destination={{ lat: -12.198873, lng: -76.9897933 }} />

      </GoogleMap>
    ));

    return (

      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZZa6B7gnZ23tgreaMPqpdyDY3OUbZ7rE&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    );
  }
}


export default MapaGo;

