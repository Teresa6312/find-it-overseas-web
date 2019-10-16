import React from 'react';
import PostsDisplayItem from '../posts-display-item.component/posts-diaplay-item.component';

const PostsDisplay = ({posts, displayAsList}) =>{
    if(!posts||posts.length===0) return null;
    return (
        <div className = {`posts-display ${displayAsList? "posts-display-list": "posts-display-card"}`}>
            {
                posts.map((post)=>(
                    <PostsDisplayItem 
                        key={post.id}
                        addClassName={`${displayAsList? "posts-display-list": "posts-display-card"}-item`}
                        post={post}
                        />
                ))
            }
        </div>
    )
}


export default PostsDisplay;