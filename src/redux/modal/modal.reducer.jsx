import modalActionTypes from './modal-action-type';

const initial = {
    logInModalIsShow: false,
};

const logInModalReducer = (state=initial, action) =>{
    switch(action.type){
        case modalActionTypes.showLogInModal :
            return {
                ...state,
                logInModalIsShow: true
            }
        case modalActionTypes.closeLogInModal :
            return {
                ...state,
                logInModalIsShow: false
            }
        default:
            return state;
    }
}

export default logInModalReducer;