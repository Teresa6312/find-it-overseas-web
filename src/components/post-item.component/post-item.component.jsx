import React from 'react'
import {withRouter} from 'react-router-dom'


const PostItem = ({itemContainerClassName, post, history, match}) =>{
    return(
        <div 
            key={post.id} 
            className={itemContainerClassName}
            onClick={()=>history.push(`${match.url}/${post.id}`)}
            >
            {post.title}
        </div>)
}

export default withRouter(PostItem)