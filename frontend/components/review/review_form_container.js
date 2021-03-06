import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { selectReview, selectBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';
import { fetchReviews, fetchReview, createReview, updateReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let review;
  if (ownProps.match.path === "/businesses/:businessId/reviews/:reviewId/edit") {
    formType = 'edit';
    review = selectReview(state.entities, ownProps.match.params.reviewId);
  } else {
    formType = 'new';
  }
  return {
    business: selectBusiness(state.entities, ownProps.match.params.businessId),
    review,
    formType,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
     processForm: (review, businessId, formType) => {
       if (formType === 'new') {
         return dispatch(createReview(businessId, review));
       } else {
         return dispatch(updateReview(businessId, review));
       }
     },
     fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
     fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
     deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
   };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
