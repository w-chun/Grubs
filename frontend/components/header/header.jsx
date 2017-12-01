import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search_container';


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

  handleClick(e){
    e.preventDefault();
    this.props.fetchBusinesses()
      .then(this.props.history.push("/businesses"));
  }

  render() {
    let nav;
    if (this.props.currentUser) {
      nav = (
        <div className="greeting">
          <div className="current-user">
            <div className="profile-pic"><img src={this.props.currentUser.img_url}/></div>
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
            <div className="header-search-bar">
              <Search />
            </div>
            {nav}
          </div>
        </div>
        <div className="header-nav-links">
          <div className="nav-links">
            <button onClick={this.handleClick.bind(this)} className="restaurants-button">Restaurants</button>
            <a href="https://www.linkedin.com/in/wilson-chun-58a86891/" target="_blank">About Me</a>
            <a href='https://github.com/w-chun' target="_blank">Github</a>
          </div>
        </div>
      </div>
    );
  }
}
