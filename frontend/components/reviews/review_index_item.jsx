import React from 'react';

const ReviewIndexItem = ({ review }) => {
  return (
    <div className="review-index-container">
      {review.body}
      {review.rating}
      </div>
  );
};

export default ReviewIndexItem;
