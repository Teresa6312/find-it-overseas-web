import React from 'react'

const PostDetail = (props) =>{
    console.log({props})
return(
    <div>
    Post Detail: {props.match.params.postID}
    </div>
)
}

export default PostDetail