import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import BusinessDetails from './business_details';
import ReviewIndexContainer from '../reviews/review_index_container';


export default class BusinessShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.business;
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.businessId !== newProps.match.params.businessId) {
      this.props.fetchBusiness(newProps.match.params.businessId);
    }
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
            <Link to={`/businesses/${business.id}/reviews/new`}>New Review</Link>
          </div>
        </div>
      </div>
    );
    }
  }
}
