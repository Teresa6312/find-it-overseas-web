import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PostsItemSummary from '../posts-item-summary.component/posts-item-summary.component';
import { clearViewHistory } from '../../redux/history/history.action';
import { selectViewedPosts } from '../../redux/history/history.selectors';

const ViewedPostsHistory = ({viewedPosts, clearViewHistory}) =>{
    if(!viewedPosts||viewedPosts.length===0) return null;
    return(
        <div className="view-history">
            <div className="view-history-header">
                View History
                <span 
                    className="view-history-header__span"
                    onClick={()=>clearViewHistory()}
                    >
                    clear
                </span>
            </div>
            <div className="view-history-posts">
                {
                    viewedPosts?
                    viewedPosts.map(post=>
                        <PostsItemSummary
                            key={post.id}
                            post={post}
                            addClassName="view-hisory-post"/>)
                    : null
                }
            </div>
        </div>
    )
}


const mapStatetoProps = createStructuredSelector({
    viewedPosts: selectViewedPosts
})

const mapDispatchToProps = dispatch =>({
    clearViewHistory:() => dispatch(clearViewHistory()),
})

export default connect(mapStatetoProps,mapDispatchToProps)(ViewedPostsHistory);