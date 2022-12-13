import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarker from "./MapMarker";

const marks = [
  {
    position: {
      lat: 55.64827947623469,
      lng: 12.604725496218432,
    },
    address: "Funkiavej 54, 2300 København",
  },
  {
    position: {
      lat: 55.65124649753639,
      lng: 12.607066511558106,
    },
    address: "Torfavej 5, 2300 København",
  },
  {
    position: {
      lat: 55.65529514991005,
      lng: 12.605112063729035,
    },
    address: "Christian II's Allé 21, 2300 København",
  },
  {
    position: {
      lat: 55.66048683516736,
      lng: 12.608975911558527,
    },
    address: "Spaniensgade, 2300 København",
  },
  {
    position: {
      lat: 55.665415253229106,
      lng: 12.593026369228525,
    },
    address: "Peter Vedels Gade 11, 2300 København",
  },
  {
    position: {
      lat: 55.68105571211621,
      lng: 12.575636898064047,
    },
    address: "Store Kannikestræde 5, 1169 København",
  },
  {
    position: {
      lat: 55.723618230842575,
      lng: 12.53307756923104,
    },
    address: "Emdrupgårdsvej 5, 2400 København",
  },
  {
    position: {
      lat: 55.70244553834966,
      lng: 12.486234026899917,
    },
    address: "Tølløsevej 69, 2700 København",
  },
  {
    position: {
      lat: 55.71222653890025,
      lng: 12.476828369230557,
    },
    address: "Storegårdsvej 30, 2700 København",
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
