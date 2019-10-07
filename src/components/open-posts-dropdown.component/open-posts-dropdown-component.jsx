import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectUserPosts} from '../../redux/user/user.selectors';

import PostsItemSummary from '../posts-item-summary.component/posts-item-summary.component';

const OpenPostsDropdown = ({userPosts}) =>{
    if(userPosts.length===0) return null;
    
    return(
        <div className="open-posts-dropdown">
            { 
                userPosts.map((post)=>(
                    <PostsItemSummary 
                        key={post.id}
                        post={post} 
                        addClassName="open-posts-dropdown-item"/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userPosts:selectUserPosts
})

export default connect(mapStateToProps)(OpenPostsDropdown)
