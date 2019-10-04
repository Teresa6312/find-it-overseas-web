import { createSelector } from 'reselect';

const selectModal = state => state.modal;

export const selectLogInModal = createSelector(
  [selectModal],
  modal => modal.logInModalIsShow
);
