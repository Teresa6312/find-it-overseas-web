import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

const PostsDisplayItem = ({addClassName, post, history}) =>(
    <div 
        className={`posts-display-item ${addClassName}`}
        onClick={()=>history.push(`/posts/postID=${post.id}`)}
        >
        {post.title}
    </div>
)

PostsDisplayItem.propTypes = {
    post: PropTypes.object.isRequired,
};
  

export default withRouter(PostsDisplayItem)