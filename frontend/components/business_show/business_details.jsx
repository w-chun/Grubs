import React from 'react';
import { Link } from 'react-router';


const BusinessDetails = ({ business }) => {
  return (
    <div>
      <ul className="business-list">
        <img className="index-image" src={business.img_url} />
        <li>{business.name}</li>
        <li>{business.address}</li>
        <li>{business.city}</li>
        <li>{business.state}</li>
        <li>{business.zipcode}</li>
        <li>{business.phone}</li>
        <li>{business.url}</li>
      </ul>
    </div>
  );
};

export default BusinessDetails;
