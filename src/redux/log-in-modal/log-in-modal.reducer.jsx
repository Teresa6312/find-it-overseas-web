import logInModalActionTypes from './log-in-modal-action-type';

const initial = {
    logInModalIsShow: false,
};

const logInModalReducer = (state=initial, action) =>{
    switch(action.type){
        case logInModalActionTypes.show :
            return {
                ...state,
                logInModalIsShow: true
            }
        case logInModalActionTypes.close :
            return {
                ...state,
                logInModalIsShow: false
            }
        default:
            return state;
    }
}

export default logInModalReducer;