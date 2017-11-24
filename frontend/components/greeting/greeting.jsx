import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="session-links">
    <Link className="login-link" to="/login">Login</Link>
    <Link className="signup-link" to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <header className="greeting">
    <div className="current-user">
      <div className="profile-pic"><img src={currentUser.img_url}/></div>
      <h3>{currentUser.username}</h3>
     </div>
    <div className="home-logout"><button className="logout-button" onClick={logout}>Log Out</button></div>
  </header>
);

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
