import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

const PostsDisplayItem = ({addClassName, post, history}) =>(
    <div 
        className={`posts-display-item ${addClassName}`}
        onClick={()=>history.push(`/posts/postID=${post.id}`)}
        >
        <div className="posts-display-item-title">
            {post.title}
        </div>

        <div className="posts-display-item-tabs">
            {post.tabs.map((tab, index) =>(
                <div key={index} className="posts-display-item-tabs-item">& {tab}</div>
            ))}        
        </div>
        <div className="posts-display-item-description">
                {post.description.length>200?post.description.substring(0, 200)+"...":post.description}
        </div>

    </div>
)

PostsDisplayItem.propTypes = {
    post: PropTypes.object.isRequired,
};
  

export default withRouter(PostsDisplayItem)