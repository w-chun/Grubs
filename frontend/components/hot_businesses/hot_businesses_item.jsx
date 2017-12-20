import React from 'react';
import { Link } from 'react-router-dom';

const HotBusinessItem = ({ business }) => {
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
    <div className="hot-business-item">
      <Link to={`/businesses/${business.id}`}><img src={business.img_url} /></Link>
      <div className="hot-business-info">
        <Link to={`/businesses/${business.id}`}>{business.name}</Link>
        <div className="hot-business-rating">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default HotBusinessItem;
