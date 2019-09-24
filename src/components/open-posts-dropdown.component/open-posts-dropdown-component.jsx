import React from 'react';
import {connect} from 'react-redux';
import { firestore } from '../../firebase/firebase.utils';

const OpenPostsDropdown = ({currentUser}) =>{
    console.log(currentUser);
    if(!currentUser) return null
    const snap = firestore.collection(`users/${currentUser.id}/posts`)
        .where('open', '==', true)
        .get().then(snapshot=>{
            snapshot.forEach(( doc =>
                console.log(doc.id)
                )
        )});
    return(
        <div className="open-posts-dropdown">
            <div className="open-posts-dropdown-items">
                { currentUser.displayName
                    // userPosts.data.map((post)=>(
                    // <div key={post.id} className="open-posts-dropdown-item">
                    //     <div className="open-posts-dropdown-item-title">
                    //         {post.title}
                    //     </div>
                    // </div>
                    // ))
                }  
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(OpenPostsDropdown)
