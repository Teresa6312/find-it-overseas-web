import React from 'react';
import {connect} from 'react-redux';
import PostsItemSummary from '../posts-item-summary.component/posts-item-summary.component';

const OpenPostsDropdown = ({userPosts}) =>{

    return(
        <div className="open-posts-dropdown">
            <div className="open-posts-dropdown-items">
                { 
                    userPosts.map((post)=>(
                        <PostsItemSummary 
                            key={post.id}
                            post={post} 
                            addClassName="open-posts-dropdown-item"/>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userPosts:state.userPosts.userPosts
})

export default connect(mapStateToProps)(OpenPostsDropdown)
