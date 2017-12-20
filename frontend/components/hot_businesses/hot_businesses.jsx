import React from 'react';
import HotBusinessItem from './hot_businesses_item';

export default class HotBusinesses extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  render (){
    if (this.props.businesses) {
      const businesses = this.props.businesses.slice(0,3).map((business,i) => {
        return <HotBusinessItem key={`hot-business-${i}`} business={business} />;
      });
      return (
        <div className="hot-businesses-wrapper">
          <div className="hot-businesses-container">
            Hot Businesses
            <div className="hot-businesses">
              {businesses}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
