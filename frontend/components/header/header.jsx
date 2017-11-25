import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
  constructor (props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    return (e) => {
      e.preventDefault();
      this.props.logout();
    };
  }

  render() {
    let nav;
    if (this.props.currentUser) {
      nav = (
        <div className="greeting">
          <div className="current-user">
            <div className="profile-pic"><img src={this.props.currentUser.img_url}/></div>
            <h3>{this.props.currentUser.username}</h3>
          </div>
          <div className="home-logout"><button className="logout-button" onClick={this.logout()}>Log Out</button></div>
        </div>
      );
    } else {
      nav = (
        <div className="session-links">
          <Link className="login-link" to="/login">Login</Link>
          <Link className="signup-link" to="/signup">Sign Up</Link>
        </div>
      );
    }

    return (
      <div className="header-container-wrapper">
        <div className="header-container">
          <div className="header-nav">
            <div className="grubs-link">
              <h1><Link to="/" className="title">Grubs</Link></h1>
            </div>
            {nav}
          </div>
        </div>
        <div className="header-nav-links">
          <div className="nav-links">
            <Link to="/businesses">Restaurants</Link>
            <a href="">Nightlife</a>
            <a href="">Home Services</a>
            <a href="">.</a>
            <Link to="">Write a Review</Link>
          </div>
        </div>
      </div>
    );
  }
}
