import React from 'react';
import { Link } from 'react-router';


const BusinessDetails = ({ business }) => {
  return (
    <div className="business-details">
      <h1>
        {business.name}
        <div className="business-rating-holder">
          <div className="red-star-4"></div>
        </div>
      </h1>
      <div className="business-details-location">
        <div className="business-map">
          <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${business.latitude},${business.longitude}&zoom=15&size=300x200&markers=color:red%7C%7C${business.latitude},${business.longitude}&key=AIzaSyAI3nAmR1VrXe3fH4N5iu6zNl_g56fcZAI`}/>
        </div>
        <div className="business-details-info">
          <li>{business.address}</li>
          <li>{business.city}, {business.state} {business.zipcode}</li>
          <li>{business.phone}</li>
          <li><a href={`https://www.${business.url}`}>{business.url}</a></li>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
