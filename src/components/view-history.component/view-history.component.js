import React from 'react';
import {connect} from 'react-redux'

const ViewHistory = ({viewHistory}) =>{
    console.log(viewHistory);
    return(
        <div className="view-history">
            <div className="view-hisory-header">
                View History
            </div>
            {viewHistory.map(post=>
                <div key={post.id}>
                    {post.title}
                </div>
            )}
        </div>
    )
}

const mapStatetoProps = ({postViewHistory}) =>({
    viewHistory: postViewHistory.viewHistory
})

export default connect(mapStatetoProps)(ViewHistory);