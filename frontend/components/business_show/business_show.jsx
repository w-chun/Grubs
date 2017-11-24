import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';


// export default class BusinessShow extends React.Component {
  // constructor(props){
  //   super(props);
  //   console.log(this.props);
  // }
  // componentDidMount(){
  //     this.props.fetchBusiness(this.props.match.params.businessId);
  // }
  const BusinessShow  = ({ business, businessId, fetchBusiness }) => {
  const businesses = {
    [businessId]: business
  };
    return (
      <div className="business-show-container">
        <HeaderContainer />
        <div className="business-show">

        </div>
      </div>
    );
  };

  export default BusinessShow;
