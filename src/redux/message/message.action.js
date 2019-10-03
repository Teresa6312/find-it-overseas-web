import messageActionTypes from './message-action-types'

export const setMessage =(message)=>{
    return {
        type:messageActionTypes.set,
        payload:message
    }
}
