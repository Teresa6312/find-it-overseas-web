import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import logInModalReducer from './log-in-modal/log-in-modal.reducer';
import userPostsReducer from './user-posts/user-posts.reducer';
import viewHistoryReducer from './view-history/view-history.reducer';
import messageReducer from './message/message.reducer';

// locally store view history
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['postViewHistory', 'message']
}

const rootReducer = combineReducers({
    user: userReducer,
    logInModal: logInModalReducer,
    userPosts: userPostsReducer,
    postViewHistory: viewHistoryReducer,
    message:messageReducer,
});

export default persistReducer(persistConfig, rootReducer)