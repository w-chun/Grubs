import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import BusinessDetails from './business_details';
import ReviewIndexContainer from '../reviews/review_index_container';
import BusinessMap from '../business_map/business_map';
import BusinessImagesContainer from '../business_images/business_images_container';

export default class BusinessShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.business;
    this.reviewLink = this.reviewLink.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId);
    this.props.fetchImages(this.props.match.params.businessId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.businessId !== newProps.match.params.businessId) {
      this.props.fetchBusiness(newProps.match.params.businessId);
      this.props.fetchReviews(newProps.match.params.businessId);
      this.props.fetchImages(newProps.match.params.businessId);
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
        title = "Update Review";
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
            <div className="business-index">
              <h2>Sorry, no businesses found!</h2>
            </div>
        </div>
      );
    } else {
    return (
      <div className="business-show-wrapper">
        <HeaderContainer />
        <div className="business-show-super-container">
          <BusinessImagesContainer />
        <div className="top-shelf">
          <div className="business-show-container">
            <BusinessDetails business={business}/>
          </div>
          <div className="bottom-container-wrapper">
          <div className="review-link-wrapper">
            <div className="review-link">
              {this.reviewLink()}
            </div>
          </div>
          <div className="bottom-container">
            <div className="bottom-container-1-3">
              <ReviewIndexContainer />
            </div>
            <div className="bottom-container-2-3">
              <h3 className="business-info-text">Hours</h3>
                <table>
                  <tbody className="business-hours">
                    <tr><th>Mon</th><td>11:00 am - 10:00 pm</td></tr>
                    <tr><th>Tue</th><td>11:00 am - 10:00 pm</td></tr>
                    <tr><th>Wed</th><td>11:00 am - 10:00 pm</td></tr>
                    <tr><th>Thu</th><td>11:00 am - 10:00 pm</td></tr>
                    <tr><th>Fri</th><td>11:00 am - 10:00 pm</td></tr>
                    <tr><th>Sat</th><td>10:00 am - 10:00 pm</td></tr>
                    <tr><th>Sun</th><td>10:00 am - 10:00 pm</td></tr>
                  </tbody>
                </table>
              <h3 className="business-info-text">More business info</h3>
              <ul className="business-info-list">
                <li>Takes Reservations  <b>Yes</b></li>
                <li>Delivery  <b>No</b></li>
                <li>Take-out  <b>Yes</b></li>
                <li>Accepts Credit Cards  <b>Yes</b></li>
                <li>Accepts Android Pay <b>No</b></li>
                <li>Accepts Apple Pay  <b>No</b></li>
                <li>Accepts Bitcoin  <b>No</b></li>
                <li>Good For  <b>Lunch, Dinner</b></li>
                <li>Parking  <b>Street</b></li>
                <li>Bike Parking  <b>No</b></li>
                <li>Wheelchair Accessible  <b>Yes</b></li>
                <li>Good for Kids  <b>Yes</b></li>
                <li>Good for Groups  <b>Yes</b></li>
                <li>Attire  <b>Casual</b></li>
                <li>Ambience  <b>Trendy</b></li>
                <li>Noise Level  <b>Average</b></li>
                <li>Alcohol  <b>Full Bar</b></li>
                <li>Outdoor Seating  <b>No</b></li>
                <li>Wi-Fi  <b>No</b></li>
                <li>Has TV  <b>No</b></li>
                <li>Dogs Allowed  <b>No</b></li>
                <li>Waiter Service  <b>Yes</b></li>
                <li>Drive-Thru  <b>No</b></li>
                <li>Caters  <b>No</b></li>
                <li>Gender Neutral Restrooms  <b>Yes</b></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    );
    }
  }
}
