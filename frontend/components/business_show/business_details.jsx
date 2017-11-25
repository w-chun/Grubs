import React from 'react';
import { Link } from 'react-router';


const BusinessDetails = ({ business }) => {
  return (
    <div className="business-details">
      <h2>{business.name}</h2>
      <div className="business-details-address">
          <li>{business.address}</li>
          <li>{business.city}, {business.state} {business.zipcode}</li>
          <li>{business.phone}</li>
        <li>{business.url}</li>
      </div>
    </div>
  );
};

export default BusinessDetails;
