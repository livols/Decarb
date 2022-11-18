import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarker from "./MapMarker";

const marks = [
  {
    position: {
      lat: 55.70947568192011,
      lng: 9.556312940395532,
    },
    address: "Bølgen",
  },
  {
    position: {
      lat: 55.701357541883944,
      lng: 12.539471740395191,
    },
    address: "Nordbro",
  },
  {
    position: {
      lat: 55.68896387296714,
      lng: 12.578330298064369,
    },
    address: "Statens Museum for Kunst",
  },
  {
    position: {
      lat: 55.671161589493074,
      lng: 12.576693169228761,
    },
    address: "Danhostel Copenhagen City",
  },
  {
    position: {
      lat: 55.638150358247024,
      lng: 12.578914399906507,
    },
    address: "Bella Center",
  },
  {
    position: {
      lat: 55.61345802725619,
      lng: 12.976307255730902,
    },
    address: "Turning torso",
  },
];

const containerStyle = {
  width: "100%",
  height: "50%",
};

const center = {
  lat: 55.67896782,
  lng: 12.58221366,
};

function SimpleMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAtnAQ8cHhpJBSJeCdQUKkXr1hxGv6yN0M">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {marks.map((marker) => (
          <MapMarker position={marker.position} address={marker.address} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default SimpleMap;
