import React, { useState } from "react";
import { GoogleMap, InfoBox, LoadScript, MarkerF } from '@react-google-maps/api';
import MapMarker from "./MapMarker";

const marks = [{
  position: {
    lat: 55.65492872914032,
    lng: 12.606468200683594
  },
  address: "Address1"
},
{
  position: {
    lat: 55.66480589536855,
    lng: 12.578659057617188
  },
  address: "Address2"
},
{
  position: {
    lat: 55.679326612622546,
    lng: 12.567672729492188
  },
  address: "Address3"
},
{
  position: {
    lat: 55.677929060178236,
    lng: 12.548036790411148
  },
  address: "Address4"
},
{
  position: {
    lat: 55.695955983917266,
    lng: 12.553939819335938
  },
  address: "Address5"
},
{
  position: {
    lat: 55.68726820680346,
    lng: 12.58399269362576
  },
  address: "Address6"
}]

const containerStyle = {
  width: '100%',
  height: '50%'
};

const center = {
  lat: 55.67896782,
  lng: 12.58221366
};

function SimpleMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAtnAQ8cHhpJBSJeCdQUKkXr1hxGv6yN0M"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {marks.map(marker => <MapMarker position={marker.position} address={marker.address}/> )}
      </GoogleMap>
    </LoadScript>
  )
}

export default SimpleMap