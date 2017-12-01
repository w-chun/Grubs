import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business_show/business_show_container';

const IndexItem = ({ business }) => {
  return (
      <div className="business-info">
        <div className="business-info-left">
          <div className="business-link">
              <div className="business-profile">
                <div className="business-image"><Link to={`/businesses/${business.id}`}><img className="index-image" src={business.img_url} /></Link></div>
                <div className="business-title">
                  <Link to={`/businesses/${business.id}`}>{business.name}</Link>
                    <div className="business-rating-holder">
                      <div className="red-star-4"></div>
                    </div>
                  </div>
              </div>
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
