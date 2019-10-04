import { createSelector } from 'reselect';

const selectMessage = state => state.message;

export const selectViewedPosts = createSelector(
  [selectMessage],
  message => message.message
);
