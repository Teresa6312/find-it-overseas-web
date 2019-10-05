import modalActionTypes from './modal-action-type';

export const showLogInModal = () => ({
    type: modalActionTypes.showLogInModal,
});

export const closeLogInModal = () => ({
    type: modalActionTypes.closeLogInModal,
});