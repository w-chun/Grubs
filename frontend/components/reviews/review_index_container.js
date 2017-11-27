import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
import { selectReviews } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    business: ownProps.business,
    businessReviews: selectReviews(state, ownProps.business.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
