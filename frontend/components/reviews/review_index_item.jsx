import React from 'react';

const ReviewIndexItem = ({ review }) => {
  return (
    <div className="review-index-wrapper">
      <div className="review-index-container">
        <div className="user-profile">Review by: User {review.author_id}</div>
        <div className="user-review">
          <div className="review-rating">Rating: {review.rating}</div>
          <div className="review-body">{review.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewIndexItem;
