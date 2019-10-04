import viewHistoryActionType from './view-history-action-types';

export const addToViewHistory = (post) =>{
    return{
        type:viewHistoryActionType.add,
        payload:post
    }
};

export const clearViewHistory = () =>{
    return{
        type:viewHistoryActionType.clear,
    }
};