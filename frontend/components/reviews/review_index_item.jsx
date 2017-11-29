import React from 'react';

const ReviewIndexItem = ({ review }) => {
  let rating;
  switch (review.rating) {
    case 1:
      rating = <div className="red-star-1"></div>;
      break;
    case 2:
      rating = <div className="red-star-2"></div>;
      break;
    case 3:
      rating = <div className="red-star-3"></div>;
      break;
    case 4:
      rating = <div className="red-star-4"></div>;
      break;
    case 5:
      rating = <div className="red-star-5"></div>;
      break;
  }

  return (
    <div className="review-index-wrapper">
      <div className="review-index-container">
        <div className="user-profile">Review by: User {review.author_id}</div>
        <div className="user-review">
          <div className="review-rating">{rating}</div>
          <div className="review-body">{review.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewIndexItem;
