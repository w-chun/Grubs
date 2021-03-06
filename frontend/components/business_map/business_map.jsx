/* global google:false */

import React from 'react';
import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';

import MarkerManager from "../../util/marker_manager";

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class BusinessMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    const mapOptions = {
      center: {
        lat: this.props.businesses[0].latitude,
        lng: this.props.businesses[0].longitude
      },
      zoom: 15
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.businesses) {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.businesses[0] !== nextProps.businesses[0]) {
      const map = this.refs.map;
      const mapOptions = {
        center: {
          lat: this.props.businesses[0].latitude,
          lng: this.props.businesses[0].longitude
        },
        zoom: 14
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarkers(nextProps.businesses);
    }
  }

  render() {
    return (
      <div className="business-map-container">
        <div id="businessmap" ref="map">Map</div>
      </div>
    );
  }
}

export default BusinessMap;
