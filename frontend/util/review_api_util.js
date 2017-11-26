export const fetchReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews`
  })
);

export const fetchReview = (reviewId) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${reviewId}`
  })
);

export const createReview = (businessId, review) => (
  $.ajax({
    method: 'POST',
    url: `/api/businesses/${businessId}/reviews`,
    data: { review }
  })
);

export const updateReview = (businessId, review) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/businesses/${businessId}/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  })
);
