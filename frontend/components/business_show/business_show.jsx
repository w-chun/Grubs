import React from 'react';
import { Link } from 'react-router-dom';

export default class BusinessShow extends React.Component {
  componentDidMount(){

  }

  render() {
    let business = this.props.business;
    return (
      <div className="business-show-container">
        <header className="nav-bar">
          <div className="grubs-link">
            <h1><Link to="/" className="title">Grubs</Link></h1>
          </div>
        </header>
      </div>
    );
  }
}
