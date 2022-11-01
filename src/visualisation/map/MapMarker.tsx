import { InfoBox, MarkerF } from '@react-google-maps/api'
import React, { useState } from 'react'

type MapMarkerProps = {
    position: {
        lat: number,
        lng: number
      },
    address: string
}

const onLoad = (marker: any) => {
    console.log('marker: ', marker)
}

export default function MapMarker(props: MapMarkerProps) {
    const [showInfo, setShowInfo] = useState(false);
  
    const onHoverOpen = () => {
        setShowInfo(true)
    }
          
    const onHoverClose = () => {
        setShowInfo(false)
    }
          
    return (
        <MarkerF
            onLoad={onLoad}
            position={props.position}
            onMouseOver={onHoverOpen}
            onMouseOut={onHoverClose}
            //TODO: Add onClick Routing when the page is created
        >
            {showInfo && 
                <InfoBox
                  options={{ closeBoxURL: ``, enableEventPropagation: true }}
                >
                  <div style={{ backgroundColor: `green`, opacity: 1, padding: `12px` }}>
                    <div style={{ fontSize: `16px`, color: 'white' }}>
                      {props.address}
                    </div>
                  </div>
                </InfoBox>}
        </MarkerF>
    )
}