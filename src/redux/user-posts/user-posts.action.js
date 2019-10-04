import userPostsActionTypes from './user-post-action-types';

export const setUserPosts = (posts) => {
    return {
        type: userPostsActionTypes.set,
        payload: posts
    }
}
