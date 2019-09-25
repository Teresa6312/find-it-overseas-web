import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import OpenPostsDropdown from '../open-posts-dropdown.component/open-posts-dropdown-component'

const OpenPostsIcon = ({userPosts}) =>{
    if(userPosts.length===0) return null;

    return (
    <div className='header-main-menu-item open-posts-icon'>
        <Link to='my-account/openning-posts'>
            <div className='open-posts-icon-num' title="click to view all you opening request posts">
                {userPosts.length}
            </div>
        </Link>
        <OpenPostsDropdown/>  
    </div>
)}

const mapStateToProps = (state) => ({
    userPosts:state.userPosts.userPosts
})

export default connect(mapStateToProps)(OpenPostsIcon)
