import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const fetchReviews = (businessId) => dispatch => {
  return ReviewAPIUtil.fetchReviews(businessId)
    .then((reviews) => dispatch(receiveReviews(reviews)));
};

export const fetchReview = (reviewId) => dispatch => {
  return ReviewAPIUtil.fetchReview(reviewId)
    .then((review) => dispatch(receiveReview(review)));
};

export const createReview = (businessId, review) => dispatch => {
  return ReviewAPIUtil.createReview(businessId, review)
    .then((newReview) => dispatch(receiveReview(newReview)));
};

export const updateReview = (businessId, review) => dispatch => {
  return ReviewAPIUtil.updateReview(businessId, review)
    .then((updatedReview) => dispatch(receiveReview(updatedReview)));
};

export const deleteReview = (reviewId) => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)));
};
