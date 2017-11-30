import * as BusinessAPIUtil from '../util/business_api_util';
import * as SearchAPIUtil from '../util/search_api_util';
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";


const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});


export const fetchBusinesses = () => dispatch => (
  BusinessAPIUtil.fetchBusinesses()
    .then((businesses) => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = (id) => dispatch => (
  BusinessAPIUtil.fetchBusiness(id)
    .then((business) => dispatch(receiveBusiness(business)))
);

export const searchBusinesses = (query) => dispatch => (
  SearchAPIUtil.searchBusinesses(query)
    .then((searchResults) => dispatch(receiveSearchResults(searchResults)))
);
