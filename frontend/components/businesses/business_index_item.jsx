import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business_show/business_show_container';

const IndexItem = ({ business }) => {
  return (
      <div className="business-info">
        <div className="business-info-left">
          <div className="business-image"><img className="index-image" src={business.img_url} /></div>
          <div className="business-title">
            <Link to={`/businesses/${business.id}`}>{business.name}</Link>
          </div>
        </div>
        <div className="business-address">
          <li>{business.address}</li>
          <li>{business.city}, {business.state} {business.zipcode}</li>
          <li>{business.phone}</li>
        </div>
      </div>
  );
};

export default IndexItem;
