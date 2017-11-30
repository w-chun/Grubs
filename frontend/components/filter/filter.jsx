import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      near: ""
    };
  }

  searchSF(e) {
    e.preventDefault();
    this.props.searchBusinesses({near: "San Francisco"});
  }

  searchSSF(e) {
    e.preventDefault();
    this.props.searchBusinesses({near: "South San Francisco"});
  }

  searchSJ(e) {
    e.preventDefault();
    this.props.searchBusinesses({near: "San Jose"});
  }

  searchOAK(e) {
    e.preventDefault();
    this.props.searchBusinesses({near: "Oakland"});
  }

  render() {
    return (
      <div className="filter-wrapper">
        <div className="filter-container">
          <div className="filter-title"><h2>Restaurants in:</h2></div>
          <div className="filter-buttons">
            <button onClick={this.searchSF.bind(this)} className="filter-button">San Francisco</button>
            <button onClick={this.searchSSF.bind(this)} className="filter-button">South San Francisco</button>
            <button onClick={this.searchSJ.bind(this)} className="filter-button">San Jose</button>
            <button onClick={this.searchOAK.bind(this)} className="filter-button">Oakland</button>
          </div>
        </div>
      </div>
    );
  }
}
