export const fetchImages = (businessId) => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}/images`,
    data: { businessId }
  });
};

export const postImage = (businessId, url) => {
  const image = {img_url : url};
  return $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/images`,
    data: { businessId, image }
  });
};
