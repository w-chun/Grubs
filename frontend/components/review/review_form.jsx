import React from 'react';
import { Link } from 'react-router-dom';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount() {
    if (this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.review) {
      const review = newProps.review;
      this.setState({ body: review.body, rating: review.rating });
    }
  }

  updateBody() {
    return (e) => {
      this.setState({ body: e.currentTarget.value });
    };
  }

  updateRating(num) {
    return (e) => {
      this.setState({ rating: num});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const business = this.props.business;
    const review = this.props.review;
    let newReview;
    if (this.props.formType === 'edit') {
      newReview = Object.assign({}, review, { body: this.state.body, rating: this.state.rating });
    }
    this.props.processForm(newReview, business.id, this.props.formType);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.match.params.reviewId);
  }

  render() {
    return (
      <div className="review-form-container">
        <div>
          <label>Review</label>
        </div>
        <div className="review-form">
          <div>
            <textarea onChange={this.updateBody()} value={this.state.body}></textarea>
          </div>
          <button onClick={this.handleSubmit()}>Post Review</button>
        </div>
      </div>
    );
  }
}
