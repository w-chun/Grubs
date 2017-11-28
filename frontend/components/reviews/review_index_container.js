import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './review_index';
import { fetchBusiness } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';
import { selectReviews } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    business: ownProps.match.params.businessId,
    businessReviews: selectReviews(state, ownProps.match.params.businessId),
    businesses: state.entities.businesses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
