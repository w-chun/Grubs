import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HotBusinesses from './hot_businesses';
import { asArray } from '../../reducers/selectors';
import { fetchBusinesses } from '../../actions/business_actions';

export const mapStateToProps = state => ({
  businesses: asArray(state.entities.businesses)
});

export const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HotBusinesses));
