import React from 'react';

const ReviewIndexItem = ({ review }) => {
  debugger;
  return (
    <div className="review-index-container">
      {review.body}
      {review.rating}
      </div>
  );
};

export default ReviewIndexItem;
