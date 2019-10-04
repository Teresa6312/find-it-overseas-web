import logInModalActionTypes from './log-in-modal-action-type';

export const showLogInModal = () => ({
    type: logInModalActionTypes.show,
});

export const closeLogInModal = () => ({
    type: logInModalActionTypes.close,
});