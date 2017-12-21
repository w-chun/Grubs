import React from 'react';
import { Link } from 'react-router';


const BusinessDetails = ({ business }) => {
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
    <div className="business-details">
      <h1>
        {business.name}
        <div className="business-rating-holder">
          {rating}
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
          <li><a href={`https://www.${business.url}`} target="_blank">{business.url}</a></li>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
