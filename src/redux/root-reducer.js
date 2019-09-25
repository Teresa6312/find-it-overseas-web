import {combineReducers} from 'redux';

import userReducer from './user/user-reducer';
import logInModalReducer from './log-in-modal/log-in-modal-reducer';
import userPostsReducer from './user-posts/user-posts.reducer';

export default combineReducers({
    user: userReducer,
    logInModal: logInModalReducer,
    userPosts: userPostsReducer
});