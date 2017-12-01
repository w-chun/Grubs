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
  const images = asArray(state.entities.businesses[businessId].images);
  return images;
};

export const asArray = ( obj ) => {
  if (!obj) {
    return [];
  } else {
    return Object.keys(obj).map(key => obj[key]);
  }
};
