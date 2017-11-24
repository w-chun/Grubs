import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';

export const mapStateToProps = (state) => ({
  businesses: state.entities.businesses
});

export const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
