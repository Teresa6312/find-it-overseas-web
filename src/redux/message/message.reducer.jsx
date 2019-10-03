import messageActionTypes from './message-action-types';

const initial = {
    message: null
}

const messageReducer=(state=initial, action)=>{
    switch(action.type){
        case messageActionTypes.set:
            return{
                ...state,
                message:action.payload
            }
        default:
            return state;
    }
}

export default messageReducer;