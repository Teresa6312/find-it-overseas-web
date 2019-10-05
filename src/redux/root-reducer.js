import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import modalReducer from './modal/modal.reducer';
import historyReducer from './history/history.reducer';
import messageReducer from './message/message.reducer';

// locally store view history
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['history', 'message']
}

const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
    history: historyReducer,
    message:messageReducer,
});

export default persistReducer(persistConfig, rootReducer)