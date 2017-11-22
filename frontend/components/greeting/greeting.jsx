import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="session-links">
    <Link className="login-link" to="/login">Login</Link>
    <Link className="signup-link" to="/signup">Sign Up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <header className="greeting">
    <h2>{currentUser.username}</h2>
    <button className="logout" onClick={logout}>Log Out</button>
  </header>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
