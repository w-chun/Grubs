import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business_show/business_show_container';

const IndexItem = ({ business }) => {
  return (
    <div>
      <ul className="business-info">
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

export default IndexItem;
