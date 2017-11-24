import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';


export default class BusinessShow extends React.Component {
  componentDidMount(){

  }

  render() {
    let business = this.props.business;
    return (
      <div className="business-show-container">
        <HeaderContainer />
      </div>
    );
  }
}
