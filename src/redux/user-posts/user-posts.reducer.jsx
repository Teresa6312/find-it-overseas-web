import userPostActionTypes from './user-post-action-types';

const initial = {
    userPosts:[]
}

const userPostsReducer = (state=initial, action) =>{
    switch(action.type){
        case userPostActionTypes.setUserPosts:
            return{
                ...state,
                userPosts:action.payload
            }
        default:
            return state;
    }
}

export default userPostsReducer;