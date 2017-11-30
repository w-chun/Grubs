/* global google:false */

import React from 'react';
import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';

import MarkerManager from "../../util/marker_manager";

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.43129
  },
  zoom: 12
};

class BusinessMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.businesses && Object.keys(this.props.businesses).length > 0) {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.businesses[0] !== nextProps.businesses[0]) {
      nextProps.businesses.map(business => (
        this.MarkerManager.createMarkerFromBusiness(business)
      ));
    }
  }

  render() {
    return (
      <div id="map" ref="map">Map</div>
    );
  }
}

export default BusinessMap;
