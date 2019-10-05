import { createSelector } from 'reselect';

const selectViewHistory = state => state.history;

export const selectViewedPosts = createSelector(
  [selectViewHistory],
  history => history.viewedPosts
);
