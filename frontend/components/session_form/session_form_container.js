import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.location.pathname === "/login" ? "login" : "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "login" ? login : signup;
  return {
    processForm: user => dispatch(action(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
