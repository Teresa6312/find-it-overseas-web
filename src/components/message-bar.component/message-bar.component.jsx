import React from 'react'

const MessageBar = (props) =>{
    return(
        <div className={`message ${props.type}`}>
            {props.children}
        </div>
    )
}

export default MessageBar;