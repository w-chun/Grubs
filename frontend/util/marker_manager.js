/* global google:false */

class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses){
    const businessesObj = {};
    businesses.forEach(business => (businessesObj[business.id] = business));

    businesses
      .filter(business => !this.markers[business.id])
      .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness));

    Object.keys(this.markers)
      .filter(businessId => !businessesObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]));
  }

  createMarkerFromBusiness(business) {
    const position = {lat: business.latitude, lng: business.longitude };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      name: business.name,
      businessId: business.id
    });

    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;
