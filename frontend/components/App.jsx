import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <header className="nav-bar">
      <div className="nav-center"></div>
      <div className="nav-center"><h1><Link to="/" className="title">Grubs</Link></h1></div>
      <div className="nav-center"><GreetingContainer /></div>
    </header>

    <div className="session-form-container">
      <div className="session-form">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
    </div>
  </div>
);

export default App;
