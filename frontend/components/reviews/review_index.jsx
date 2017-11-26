import React from 'react';
import ReviewIndexItem from './review_index_item';

export default class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.business.id);
  }

  render() {
    const reviews = this.props.reviews;
  }
}
