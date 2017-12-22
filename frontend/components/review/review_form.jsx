import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import IndexItem from '../businesses/business_index_item';

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

  componentDidUpdate() {
    const placeholder="Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
    this.refs.Textarea.setAttribute("placeholder", placeholder);
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
      this.props.processForm(review, business.id, this.props.formType)
        .then(this.props.history.push(`/businesses/${this.props.business ? this.props.business.id : ""}`));
    } else {
      this.props.processForm(review, business.id, this.props.formType)
        .then(this.props.history.push(`/businesses/${this.props.business ? this.props.business.id : ""}`));
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.match.params.reviewId)
      .then(this.props.history.push(`/businesses/${this.props.business ? this.props.business.id : ""}`));
  }

  render() {
    let title;
    let button;
    let cancel;
    let name;
    if (this.props.formType === 'edit') {
      name = <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`}>
        <h1>{this.props.business ? this.props.business.name : ""}</h1>
        </Link>;
      title = 'Update Review';
      button = <button onClick={this.handleDelete} className="post-review-button">
          Delete Review
        </button>;
      cancel = <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`} className="cancel-button">Cancel</Link>;
    } else {
      name = <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`}>
        <h1>{this.props.business ? this.props.business.name : ""}</h1>
        </Link>;
      title = "Write a Review";
      cancel = <Link to={`/businesses/${this.props.business ? this.props.business.id : ""}`} className="cancel-button">Cancel</Link>;
    }
    return (
      <div className="review-form-wrapper">
        <HeaderContainer />
        <div className="review-form-container">
          <div className="review-business-name">
            {name}
          </div>
          <div className="review-title">
            <label>{title}</label>
          </div>
          <form onSubmit={this.handleSubmit}>
          <div className="review-form-wrapper">
            <div className="your-review"><label>Your Review</label></div>
            <div className="review-form">
              <div className="rating">
                <div>
                  <span className="star-rating">
                    <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="1" /><i></i>
                    <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="2" /><i></i>
                    <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="3" /><i></i>
                    <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="4" /><i></i>
                    <input type="radio" name="rating" onClick={this.updateRating().bind(this)} value="5" /><i></i>
                  </span>
                </div>
                <div className="rating-text"><label>Select Your Rating.</label></div>
              </div>
                <div className="text-body">
                  <textarea ref="Textarea" onChange={this.updateBody()} value={this.state.body} required
                    placeholder="Your review helps others learn about great local businesses.
                    Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.">
                  </textarea>
                </div>
            </div>
            <div className="button-container">
              <input type="submit" value="Post Review" className="post-review-button"></input>
              <div>{button}</div>
              <div className="cancel-button-wrapper">{cancel}</div>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
