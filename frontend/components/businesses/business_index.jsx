import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import IndexItem from './business_index_item';

export default class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const businesses = this.props.businesses;
    const businessesList = Object.keys(businesses).map(business => {
      return <IndexItem key={`index-${business}`} business={businesses[business]}/>;
    });
    if (!businesses) {
      return (
        <div className="business-index-container">
          <HeaderContainer />
          <div className="business-index">
            <h2>No Businesses Found!</h2>
          </div>
        </div>
      );
    } else {
        return (
          <div className="business-index-container">
            <HeaderContainer />
            <div className="filters">Filters</div>
            <div className="business-index">
              <div className="business-list">{businessesList}</div>
              <div className="map">
                Map
              </div>
            </div>

          </div>
        );
      }
  }
}