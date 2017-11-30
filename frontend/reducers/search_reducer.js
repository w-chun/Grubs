import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/business_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.businesses;
    default:
      return state;
  }
};

export default searchReducer;
