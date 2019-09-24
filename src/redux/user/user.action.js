import userActionTypes from './user-action-types'
export const setCurrentUser = user => ({
    type:userActionTypes.setCurrentUser,
    payload: user
});

// export const updateCurrentUser = user => ({
//     type: 'update_current_user',
//     payload: user
// });
