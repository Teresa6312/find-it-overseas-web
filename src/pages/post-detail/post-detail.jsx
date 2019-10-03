import React from 'react';
import {connect} from 'react-redux'

import {firestore} from '../../firebase/firebase.utils';
import {setMessage} from '../../redux/message/message.action';
import {addToViewHistory} from '../../redux/view-history/view-history.action';

const PostsDetail =({viewHistory, setMessage, addToViewHistory, match, history})=>{
    firestore.doc(`posts/${match.params.postID}`).onSnapshot(
        snapshot=>{
            if(!snapshot.exists){
                setMessage({
                    type:"error",
                    messageText:"Request Post was not excit!"
                })
                history.goBack();
            }else{
                const post = snapshot.data();
                if(!post.open){
                    setMessage({
                        type:"error",
                        messageText:"Request Post was closed!"
                    })
                    history.goBack();
                }else{
                    addToViewHistory({
                        id: snapshot.id,
                        title:post.title
                    })
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
    viewHistory: state.postViewHistory.viewHistory
})

const mapDispatchToProps = dispatch =>({
    setMessage: (message) => dispatch(setMessage(message)),
    addToViewHistory:(post) => dispatch(addToViewHistory(post)),
  })


export default connect(mapStateToProps,mapDispatchToProps)(PostsDetail)

