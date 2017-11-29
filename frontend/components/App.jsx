import React from 'react';
import Favicon from 'react-favicon';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessShowContainer from './business_show/business_show_container';
import ReviewFormContainer from './review/review_form_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <Favicon url="http://res.cloudinary.com/dih798zsl/image/upload/v1511918737/26240912-illustration-of-funny-chef-with-toque-presenting-his-stars-Stock-Illustration_ruu4ja.jpg"/>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/businesses" component={BusinessIndexContainer} />
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
      <Route path="/businesses/:businessId/reviews/new" component={ReviewFormContainer} />
      <Route path="/businesses/:businessId/reviews/:reviewId/edit" component={ReviewFormContainer} />
    </Switch>
  </div>
);

export default App;
