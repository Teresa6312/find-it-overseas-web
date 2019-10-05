import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {firestore} from '../../firebase/firebase.utils';
import {setMessage} from '../../redux/message/message.action';
import {viewPost} from '../../redux/history/history.action';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {verifyUser} from '../../code/permission';
import { selectViewedPosts } from '../../redux/history/history.selectors';

const PostsDetail =({viewedPosts,currentUser, setMessage, viewPost, match, history})=>{
    firestore.doc(`posts/${match.params.postID}`).onSnapshot(
        snapshot=>{
            if(!snapshot.exists){
                setMessage({
                    type:"error",
                    messageText:"Request Post was not excit!"
                })
                history.push('/posts/');
            }else{
                const post = snapshot.data();
                if(post.open||verifyUser(currentUser.id)){
                    viewPost({
                        id: snapshot.id,
                        title:post.title
                    })
                }else{
                    setMessage({
                        type:"error",
                        messageText:"Request Post was closed!"
                    })
                    history.push('/posts/');
                }
            }

        }
    )
    const post  = viewedPosts.find( e =>{
        if(e.id===match.params.postID){
            return e;
        }return null;
    });
    return (
        <div>
        {post?
            post.title
            :null
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    viewedPosts: selectViewedPosts
  })
  

const mapDispatchToProps = dispatch =>({
    setMessage: (message) => dispatch(setMessage(message)),
    viewPost:(post) => dispatch(viewPost(post)),
  })


export default connect(mapStateToProps,mapDispatchToProps)(PostsDetail)

