import historyActionTypes from './history-action-types';

const initial = {
    viewedPosts: []
}

const HistoryReducer = (state=initial, action) =>{
    switch (action.type){
        case(historyActionTypes.viewPost):
            const existingPost = state.viewedPosts.find(
                post => post.id === action.payload.id
            );

            if (existingPost) {
                return state;
            }
            return{
                ...state,
                viewedPosts: [action.payload, ...state.viewedPosts]
            }
            
        case(historyActionTypes.clearViewedPosts):
            return{
                ...state,
                viewedPosts:[]
            }
        default:
            return state;
    }
}

export default HistoryReducer;