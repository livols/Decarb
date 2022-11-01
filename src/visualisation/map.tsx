import React from "react";
import GoogleMapReact from 'google-map-react';

type MarkerProps = {
  text: string,
  lat: number,
  lng: number
}

const Marker = (props: MarkerProps) => <div>{props.text}</div>

const marks = [{
  "lat": 55.65492872914032,
  "lng": 12.606468200683594
},
{
  "lat": 55.66480589536855,
  "lng": 12.578659057617188
},
{
  "lat": 55.679326612622546,
  "lng": 12.567672729492188
},
{
  "lat": 55.692874420351124,
  "lng": 12.599258422851562
},
{
  "lat": 55.695955983917266,
  "lng": 12.553939819335938
},
{
  "lat": 55.683377023927335,
  "lng": 12.535289972618981
}]

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 55.67896782,
      lng: 12.58221366
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAtnAQ8cHhpJBSJeCdQUKkXr1hxGv6yN0M" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={55.65492872914032}
          lng={12.606468200683594}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap