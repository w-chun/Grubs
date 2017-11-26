import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewIndex);
