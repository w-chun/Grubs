import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { selectBusiness, selectReviews } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchImages } from '../../actions/image_actions';


const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const business = selectBusiness(state.entities, businessId);
  const reviews = selectReviews(state, businessId);
  return {
    business,
    reviews,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  fetchReviews: businessId => dispatch(fetchReviews(businessId)),
  fetchImages: businessId => dispatch(fetchImages(businessId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
