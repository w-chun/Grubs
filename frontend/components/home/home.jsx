import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import FooterContainer from '../footer/footer_container';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-img">
          <header className="nav-home">
            <div className="nav-center"><GreetingContainer /></div>
          </header>
          <div className="title-link"><h1><Link to="/" className="title">Grubs</Link></h1></div>
          <div className="search-bar">
            <input type="text"></input>

          </div>
          <div className="home-nav-links-container">
            <div className="home-nav-links">
              <Link to="/businesses">Restaurants</Link>
            </div>
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}
