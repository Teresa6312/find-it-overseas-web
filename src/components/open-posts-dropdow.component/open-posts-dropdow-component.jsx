import React from 'react';
import {Link} from 'react-router-dom';
const posts = [
    {
        type:'post',
        title:"hello post",
        id:1
    },
    {
        type:'service',
        title:'hello service',
        id:2
    },
    {
        type:"product",
        title:"hello product",
        id:3
    },
    {
        type:"supplement",
        title:"hello supplement",
        id:4
    },
    {
        type:'post',
        title:"hello post",
        id:5
    },
    {
        type:'service',
        title:'hello service',
        id:6
    },
    {
        type:"product",
        title:"hello product",
        id:7
    },
    {
        type:"supplement",
        title:"hello supplement",
        id:8
    },
    {
        type:'post',
        title:"hello post",
        id:9
    },
    {
        type:'service',
        title:'hello service',
        id:10
    },
    {
        type:"product",
        title:"hello product",
        id:11
    },
    {
        type:"supplement",
        title:"hello supplement",
        id:12
    }
];

const OpenPostsDropdown = () =>{
    return(
        <div className="open-posts-dropdown">
            <Link to='my-account/openning-posts' className="open-posts-dropdown-link">view all of my opening posts</Link>
            <div className="open-posts-dropdown-items">
                {posts.map((post)=>(
                    <div key={post.id} className="open-posts-dropdown-item">
                        <div className="open-posts-dropdown-item-title">
                            {post.title}
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    )
}
export default OpenPostsDropdown;
