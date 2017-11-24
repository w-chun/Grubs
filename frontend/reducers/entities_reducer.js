import { combineReducers } from 'redux';
import businessesReducer from './businesses_reducer';

const entitiesReducer = combineReducers({
  businesses: businessesReducer
});

export default entitiesReducer;
