import React from 'react'
import {withRouter} from 'react-router-dom'


const PostsDisplayItem = ({addClassName, post, history}) =>(
    <div 
        key={post.id} 
        className={`posts-display-item ${addClassName}`}
        onClick={()=>history.push(`/posts/postID=${post.id}`)}
        >
        {post.title}
    </div>
)


export default withRouter(PostsDisplayItem)