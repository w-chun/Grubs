export const searchBusinesses = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data: { search: { query } }
  })
);

export const getBusinessByCity = (city) => (
  $.ajax({
    method: 'GET',
    url: 'api/business_searches/',
    data: { search: {query: city} }
  })
);
