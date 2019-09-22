import React from 'react';
import OpenPostsDropdown from '../open-posts-dropdown.component/open-posts-dropdown-component'

const OpenPostsIcon = ({number}) =>(
    <div className='open-posts-icon' title="click to view all you opening request posts">
        <div className='open-posts-icon-num'>
            {number}
        </div>
        <OpenPostsDropdown/>  
    </div>
)

export default OpenPostsIcon;
