import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { selectBusiness } from '../../reducers/selectors';
import fetchBusiness from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const business = selectBusiness(state.entities, businessId);
  return {
    businessId, business
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
