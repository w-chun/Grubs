import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.location.pathname === "/login" ? "login" : "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user, formType) => {
    if (formType === "login") {
      return dispatch(login(user));
    } else {
      return dispatch(signup(user));
    }
  },
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
