import React from 'react'

const MessageBar = (props) =>(
    <div className={`message ${props.type}`}>
        {props.children}
    </div>
)


export default MessageBar;