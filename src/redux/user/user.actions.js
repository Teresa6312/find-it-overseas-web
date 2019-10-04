import userActionTypes from './user.action-types'
export const setCurrentUser = user => ({
    type:userActionTypes.setUser,
    payload: user
});

export const setUserPosts = (posts) => {
    return {
        type: userActionTypes.setPosts,
        payload: posts
    }
}
