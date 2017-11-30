export const selectBusiness = ({ businesses }, id) => {
  return businesses[id];
};

export const selectReview = ({ reviews }, id) => {
  return reviews[id];
};

export const selectReviews = (state, businessId) => {
  const reviews = asArray(state.entities.reviews);
  const businessReviews = reviews.filter(
    (review) => review.business_id === parseInt(businessId)
    );
  return businessReviews;
};

export const selectImages = (state, businessId) => {
  const images = asArray(state.entities.images);
  const businessImages = images.filter(
    (image) => image.business_id === parseInt(businessId)
    );
  return businessImages;
};

export const asArray = ( obj ) => (
  Object.keys(obj).map(key => obj[key])
);
