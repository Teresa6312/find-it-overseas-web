import React from 'react'

const MessageBar = ({children, type}) =>(
    <div className={`message ${type}`}>
        {children}
    </div>
)


export default MessageBar;