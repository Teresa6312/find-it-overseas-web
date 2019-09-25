import userPostActionTypes from './user-post-action-types';

export const setUserPosts = (list) => {
    return {
        type: userPostActionTypes.setUserPosts,
        payload: list
    }
}
