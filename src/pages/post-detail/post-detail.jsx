import React from 'react';
import {connect} from 'react-redux'

import {firestore} from '../../firebase/firebase.utils';
import {setMessage} from '../../redux/message/message.action';
import {addToViewHistory} from '../../redux/view-history/view-history.action';
import {verifyUser} from '../../code/permission';

const PostsDetail =({viewHistory,currentUser, setMessage, addToViewHistory, match, history})=>{
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
                    addToViewHistory({
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
    const post  = viewHistory.find( e =>{
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

const mapStateToProps = (state) =>({
    viewHistory: state.postViewHistory.viewHistory,
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch =>({
    setMessage: (message) => dispatch(setMessage(message)),
    addToViewHistory:(post) => dispatch(addToViewHistory(post)),
  })


export default connect(mapStateToProps,mapDispatchToProps)(PostsDetail)

