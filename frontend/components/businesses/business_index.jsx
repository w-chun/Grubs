import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import IndexItem from './business_index_item';
import IndexMapContainer from '../index_map/index_map_container';
import FilterContainer from '../filter/filter_container';

export default class BusinessIndex extends React.Component {
  componentWillMount(){
    if (!this.props.location.search) {
      this.props.fetchBusinesses();
    }
  }

  render() {
    const businesses = this.props.businesses;
    const businessesList = Object.keys(businesses).map(business => {
      return <IndexItem key={`index-${business}`} business={businesses[business]}/>;
    });
    if (businessesList.length === 0) {
      return (
        <div className="business-index-container">
          <HeaderContainer />
          <FilterContainer />
          <div className="business-index">
            <h2>Sorry, no businesses found!</h2>
            <IndexMapContainer />
          </div>
        </div>
      );
    } else {
        return (
          <div className="business-index-container">
            <HeaderContainer />
            <FilterContainer />
            <div className="business-index">
              <div className="business-list">{businessesList}</div>
              <IndexMapContainer />
            </div>
          </div>
        );
      }
  }
}
