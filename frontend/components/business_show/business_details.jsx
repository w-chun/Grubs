import React from 'react';
import { Link } from 'react-router';


const BusinessDetails = ({ business }) => {
  return (
    <div className="business-details">
      <h1>{business.name}</h1>
      <div className="business-details-address">
          <li>{business.address}</li>
          <li>{business.city}, {business.state} {business.zipcode}</li>
          <li>{business.phone}</li>
        <li><a href={`https://www.${business.url}`}>{business.url}</a></li>
      </div>
    </div>
  );
};

export default BusinessDetails;
