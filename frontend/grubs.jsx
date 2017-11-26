import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchReviews, fetchReview, createReview, updateReview, deleteReview } from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchReviews = fetchReviews;
  window.fetchReview = fetchReview;
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;

  ReactDOM.render(<Root store={ store } />, root);
});
