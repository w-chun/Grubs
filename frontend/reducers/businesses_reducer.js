import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const businessesReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return merge({}, {[action.business.id]: action.business});
    case RECEIVE_REVIEW:
      const business = action.review.business;
      return merge({}, state, {[business.id]: business});
    default:
      return state;
  }
};

export default businessesReducer;
