import React from 'react';
import PostsDisplayItem from '../posts-display-item.component/posts-diaplay-item.component';

const PostsDisplay = ({posts, addClassName}) =>{
    if(!posts||posts.length===0) return null;
    return (
        <div className = {`posts-page-display ${addClassName}`}>
            {
                posts.map((post)=>(
                    <PostsDisplayItem 
                        key={post.id}
                        addClassName={`${addClassName}-item`}
                        post={post}
                        />
                ))
            }
        </div>
    )
}


export default PostsDisplay;