import viewHistoryActionType from './view-history-action-types';

const initial = {
    viewHistory: []
}

const viewHistoryReducer = (state=initial, action) =>{
    switch (action.type){
        case(viewHistoryActionType.add):
            const existingPost = state.viewHistory.find(
                post => post.id === action.payload.id
            );

            if (existingPost) {
                return state;
            }
            return{
                ...state,
                viewHistory: [action.payload, ...state.viewHistory]
            }
            
        case(viewHistoryActionType.clear):
            return{
                ...state,
                viewHistory:[]
            }
        default:
            return state;
    }
}

export default viewHistoryReducer;