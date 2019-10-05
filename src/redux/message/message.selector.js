import { createSelector } from 'reselect';

const selectMessage = state => state.message;

export const selectMessageText = createSelector(
  [selectMessage],
  message => message.message
);
