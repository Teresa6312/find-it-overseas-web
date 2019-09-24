import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import OpenPostsDropdown from '../open-posts-dropdown.component/open-posts-dropdown-component'

const OpenPostsIcon = ({currentUser}) =>{
    return (
    <div className='open-posts-icon'>
        <Link to='my-account/openning-posts'>
            <div className='open-posts-icon-num' title="click to view all you opening request posts">
                {currentUser.displayName}
                {console.log(currentUser)}
            </div>
        </Link>
        <OpenPostsDropdown/>  
    </div>
)}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
})

export default connect(mapStateToProps, )(OpenPostsIcon)
