import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";

export const receiveImages = (image) => ({
  type: RECEIVE_IMAGES,
  image
});

export const receiveImage = (image) => ({
  type: RECEIVE_IMAGE,
  image
});

export const postImage = (businessId, imgUrl) => dispatch => (
  ImageAPIUtil.postImage(businessId, imgUrl)
    .then((image) => dispatch(receiveImage(image)))
);

export const fetchImages = (businessId) => dispatch => (
  ImageAPIUtil.fetchImages(businessId)
    .then((image) => dispatch(receiveImages(image)))
);
