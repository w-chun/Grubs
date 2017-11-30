export const searchBusinesses = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data: { query }
  })
);
