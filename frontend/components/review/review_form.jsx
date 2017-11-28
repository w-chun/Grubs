import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillUnmount(){
    this.props.fetchReview(this.props.match.params.reviewId);
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.review) {
      const review = newProps.review;
      this.setState({ body: review.body, rating: review.rating });
    }
    if (this.props.match.businessId !== newProps.match.businessId) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
  }

  updateBody() {
    return (e) => {
      this.setState({ body: e.currentTarget.value });
    };
  }

  updateRating() {
    return (e) => {
      this.setState({ rating: parseInt(e.currentTarget.value) });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let business = this.props.business;
    let review = this.state;
    if (this.props.formType === 'edit') {
      review = Object.assign({}, review,
        { body: this.state.body, rating: this.state.rating, id: this.props.match.params.reviewId}
        );
      this.props.processForm(review, business.id, this.props.formType);
    } else {
      this.props.processForm(review, business.id, this.props.formType);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.match.params.reviewId);
  }

  render() {
    let title;
    let button;
    let cancel;
    if (this.props.formType === 'edit') {
      title = 'Update Review';
      button = <button onClick={this.handleDelete}>
        <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`}>
          Delete Review
        </Link>
        </button>;
      cancel = <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`}>Cancel</Link>;
    } else {
      title = "Write a Review";
      cancel = <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`}>Cancel</Link>;
    }
    return (
      <div className="review-form-container">
        <HeaderContainer />
        <div>
          <label>{title}</label>
        </div>
        <div className="review-form">
          <div>
            <div>
              <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="1" /><label>1</label>
              <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="2" /><label>2</label>
              <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="3" /><label>3</label>
              <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="4" /><label>4</label>
              <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="5" /><label>5</label>
            </div>
            <textarea onChange={this.updateBody()} value={this.state.body}></textarea>
          </div>
            <button onClick={this.handleSubmit}>
              <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`}>
                Post Review</Link>
              </button>
            {button}
            {cancel}
        </div>
      </div>
    );
  }
}
