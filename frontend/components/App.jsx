import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import BusinessIndexContainer from './businesses/business_index_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <Route exact path="/" component={HomeContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path="/businesses" component={BusinessIndexContainer} />
  </div>
);

export default App;
