import React from 'react';
import {connect} from 'react-redux';

const OpenPostsDropdown = ({userPosts}) =>{

    return(
        <div className="open-posts-dropdown">
            <div className="open-posts-dropdown-items">
                { 
                    userPosts.map((post)=>(
                    <div key={post.id} className="open-posts-dropdown-item">
                        <div className="open-posts-dropdown-item-title">
                            {post.title}
                        </div>
                    </div>
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
