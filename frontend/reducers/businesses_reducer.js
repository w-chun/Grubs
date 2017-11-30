import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES, RECEIVE_SEARCH_RESULTS } from '../actions/business_actions';
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
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};

export default businessesReducer;
