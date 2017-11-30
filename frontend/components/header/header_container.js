import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions';


const mapStateToProps = ( state, ownProps ) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
