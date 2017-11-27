import React from 'react';
import ReviewIndexItem from './review_index_item';

export default class ReviewIndex extends React.Component {
  componentWillMount() {
    this.props.fetchReviews(this.props.business.id);
  }

  render() {
    const reviews = this.props.businessReviews.map((review, i) => {
      return <ReviewIndexItem key={`review-${i}`} review={review} />;
    });
    const business = this.props.business;
    return (
      {reviews}
    );
  }
}
