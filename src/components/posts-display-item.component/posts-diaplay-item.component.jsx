import React from 'react'
import {withRouter} from 'react-router-dom'


const PostsDisplayItem = ({itemContainerClassName, post, history, match}) =>{
    return(
        <div 
            key={post.id} 
            className={itemContainerClassName}
            onClick={()=>history.push(`/posts/postID=${post.id}`)}
            >
            {post.title}
        </div>)
}

export default withRouter(PostsDisplayItem)