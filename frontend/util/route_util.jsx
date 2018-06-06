import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, history}) => {
  return (
    <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`${history.goBack()}`} />
    )
  )}/>
  );
};

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={(props) => (
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      )}
    />
);


const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
