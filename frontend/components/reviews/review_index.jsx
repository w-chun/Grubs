import React from 'react';
import ReviewIndexItem from './review_index_item';

export default class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.business);
    this.props.fetchReviews(this.props.match.params.businessId);
  }

  render() {
    const business = this.props.businesses[this.props.business];
    const reviews = this.props.businessReviews.map((review, i) => {
      return <ReviewIndexItem key={`review-${i}`} review={review} />;
    });
    return (
      <div className="review-index-item-wrapper">
        <h2 className="recommended-reviews">Recommended Reviews <b className="business-review-name">for {business.name}</b>
        </h2>
        <div className="reviews-list">
          <ul>
            {reviews}
          </ul>
        </div>
      </div>
    );
  }
}
