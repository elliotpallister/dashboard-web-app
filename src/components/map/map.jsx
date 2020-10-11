import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import './map.scss';

const styles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
  {
    width: '100%',
    height: '88%',
    maxHeight: '80%',
    overflow: 'hidden',
    boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.2)',
  }
]

const containerStyle = {
  width: '72%',
  maxHeight: '50%',
  height: '50%',
  textAlign: 'center',
  overflow: 'hidden',
  marginTop: '2rem'
}

export class MapContainer extends Component {
  render() {
    return (
        <Map
          className='map-selector'
          google={this.props.google}
          zoom={this.props.zoom}
          initialCenter={{lat: this.props.lat, lng: this.props.lng}}
          center={{ lat: this.props.lat, lng: this.props.lng }}
          styles={styles}
          containerStyle={containerStyle}
        >
          {this.props.locations.map((location, index) => {
            console.log(location)
            return <Marker key={index} position={{lat: location.lat, lng: location.lng}}/>
          })}
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAnmjgI4_1WPB3YoDmh4LkxiNeM6K4bIQ0',
})(MapContainer);
