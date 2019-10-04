import React from 'react';
import {connect} from 'react-redux'

import PostsItemSummary from '../posts-item-summary.component/posts-item-summary.component';
import { clearViewHistory } from '../../redux/view-history/view-history.action';

const ViewHistory = ({viewHistory, clearViewHistory}) =>{
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
                    viewHistory?
                    viewHistory.map(post=>
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


const mapStatetoProps = ({postViewHistory}) =>({
    viewHistory: postViewHistory.viewHistory
})

const mapDispatchToProps = dispatch =>({
    clearViewHistory:() => dispatch(clearViewHistory()),
})

export default connect(mapStatetoProps,mapDispatchToProps)(ViewHistory);