import historyActionTypes from './history-action-types';

export const viewPost = (post) =>{
    return{
        type:historyActionTypes.viewPost,
        payload:post
    }
};

export const clearViewHistory = () =>{
    return{
        type:historyActionTypes.clearViewedPosts,
    }
};