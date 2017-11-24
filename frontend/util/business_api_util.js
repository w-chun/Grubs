export const fetchBusinesses = () => (
  $.ajax({
    method: "GET",
    url: '/api/businesses',
    status: (res) => {debugger;},
    error: (err) => console.log(err)
  })
);

export const fetchBusiness = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/businesses/${id}`,
    error: (err) => console.log(err)
  })
);
