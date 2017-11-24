import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import BusinessDetails from './business_details';


export default class BusinessShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.business;
  }

  componentDidMount(){
      this.props.fetchBusiness(this.props.match.params.businessId);
  }

  render () {
    const business = this.props.business ;
    if (!business) {
      return (
        <div className="business-show-container">
          <HeaderContainer />
          <div className="business-show">
            <h2>Fetching Businesses...</h2>
          </div>
        </div>
      );
    } else {
    return (
      <div className="business-show-container">
        <HeaderContainer />
        <div className="business-show">
          <BusinessDetails business={business}/>
        </div>
      </div>
    );
    }
  }
}



  // const BusinessShow  = ({ business, businessId, fetchBusiness }) => {
  //   const businesses = {
  //     [businessId]: business
  //   };


  //
  // export default BusinessShow;
