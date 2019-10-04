import userActionTypes from './user.action-types'

const initial_state = {
    currentUser: null,
    userPosts: []
}


const userReducer = ( state=initial_state, action) => {
    switch(action.type){
        case userActionTypes.setUser:
            return{
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.setPosts:
            return{
                ...state,
                userPosts:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;