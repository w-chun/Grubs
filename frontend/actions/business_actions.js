import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});


export const fetchBusinesses = () => dispatch => (
  BusinessAPIUtil.fetchBusinesses()
    .then((businesses) => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = (id) => dispatch => (
  BusinessAPIUtil.fetchBusiness(id)
    .then((business) => dispatch(receiveBusiness(business)))
);
