import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business_show/business_show_container';

const IndexItem = ({ business }) => {
  const avgRating = business.avg_rating;
  let rating;
  if (avgRating < 1.5) {
        rating = <div className="red-star-1"></div>;
      } else if (avgRating < 2) {
        rating = <div className="red-star-1-5"></div>;
      } else if (avgRating < 2.5) {
        rating = <div className="red-star-2"></div>;
      } else if (avgRating < 3) {
        rating = <div className="red-star-2-5"></div>;
      } else if (avgRating < 3.5) {
        rating = <div className="red-star-3"></div>;
      } else if (avgRating < 4) {
        rating = <div className="red-star-3-5"></div>;
      } else if (avgRating< 4.5) {
        rating = <div className="red-star-4"></div>;
      } else if (avgRating < 5) {
        rating = <div className="red-star-4-5"></div>;
      } else {
        rating = <div className="red-star-5"></div>;
      }

  return (
      <div className="business-info">
        <div className="business-info-left">
          <div className="business-link">
              <div className="business-profile">
                <div className="business-image"><Link to={`/businesses/${business.id}`}><img className="index-image" src={business.img_url} /></Link></div>
                <div className="business-title">
                  <Link to={`/businesses/${business.id}`}>{business.name}</Link>
                    <div className="business-rating-holder">
                      {rating}
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
