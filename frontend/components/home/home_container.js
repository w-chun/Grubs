import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './home';
import { fetchBusinesses } from '../../actions/business_actions';

export const mapStateToProps = state => ({

});

export const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => (dispatch(fetchBusinesses))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
