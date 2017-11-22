import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <header className="nav-home">
          <div className="nav-center"><GreetingContainer /></div>
        </header>
        <div className="title-link"><h1><Link to="/" className="title">Grubs</Link></h1></div>
      </div>
    );
  }
}
