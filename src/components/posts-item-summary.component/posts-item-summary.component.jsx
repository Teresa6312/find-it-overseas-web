import React from "react";
import {withRouter} from 'react-router-dom'

const PostsItemSummary = ({post, addClassName, history}) =>(
    <div 
        className={`posts-item-summary ${addClassName}`}
        onClick={()=>history.push(`/posts/postID=${post.id}`)}
        >
        {post.title}
    </div>
)

export default withRouter(PostsItemSummary);