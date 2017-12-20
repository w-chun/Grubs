import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES, RECEIVE_SEARCH_RESULTS,
        CLEAR_SEARCH, RECEIVE_IMAGE, RECEIVE_IMAGES } from '../actions/business_actions';
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
    case CLEAR_SEARCH:
      return {};
    case RECEIVE_IMAGES:
      return action.images;
    case RECEIVE_IMAGE:
      return merge({}, {[action.image.id]: action.image});
    default:
      return state;
  }
};

export default businessesReducer;
