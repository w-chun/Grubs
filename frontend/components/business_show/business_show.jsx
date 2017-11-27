import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import BusinessDetails from './business_details';
import ReviewIndexContainer from '../reviews/review_index_container';


export default class BusinessShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.business;
    this.reviewLink = this.reviewLink.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.businessId !== newProps.match.params.businessId) {
      this.props.fetchBusiness(newProps.match.params.businessId);
      this.props.fetchReviews(this.props.match.params.businessId);
    }
  }

  reviewLink(){
    let title = "Write a Review";
    let path = 'reviews/new';
    let user;
    if (this.props.currentUser) {
      user = this.props.currentUser.id;
    }
    this.props.reviews.map(review => {
      if (review.author_id === user) {
        title = "Edit Review";
        path = `reviews/${review.id}/edit`;
      }
    });
    return (
      <Link to={`/businesses/${this.props.business.id}/${path}`}>{title}</Link>
    );
  }

  render () {
    const business = this.props.business ;
    if (!business) {
      return (
        <div className="business-show-wrapper">
          <HeaderContainer />
          <div className="business-show-container">
            <h2>Fetching Businesses...</h2>
          </div>
        </div>
      );
    } else {
    return (
      <div className="business-show-wrapper">
        <HeaderContainer />
        <div className="top-shelf-grey">
          <div className="business-show-container">
            <BusinessDetails business={business}/>
          </div>
          <div className="review-link">
            {this.reviewLink()}
          </div>
        </div>
      </div>
    );
    }
  }
}
