const initial = {
    logInModalIsShow: false,
};

const logInModalReducer = (state=initial, action) =>{
    switch(action.type){
        case 'show' :
            return {
                ...state,
                logInModalIsShow: true
            }
        case 'close' :
            return {
                ...state,
                logInModalIsShow: false
            }
        default:
            return state;
    }
}

export default logInModalReducer;