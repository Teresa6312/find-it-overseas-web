import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {postTypes} from '../../assets/data/data';
import {firestore} from '../../firebase/firebase.utils';
import {setMessage} from '../../redux/message/message.action';
import {viewPost} from '../../redux/history/history.action';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {verifyUser} from '../../code/permission';
import { selectViewedPosts } from '../../redux/history/history.selectors';


class PostsDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post:null
        }
    }
    render(){
        const {currentUser, setMessage, viewPost, match, history} = this.props;
        firestore.doc(`posts/${match.params.postID}`).onSnapshot(
            snapshot=>{
                if(!snapshot.exists){
                    setMessage({
                        type:"error",
                        messageText:"Request Post was not excit!"
                    })
                    history.push('/posts/');
                }else{
                    const postData = snapshot.data();
                    if(postData.open||verifyUser(currentUser.id)){
                        viewPost({
                            id: snapshot.id,
                            title:postData.title
                        });
                        this.setState({post:postData});
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
        const {post} = this.state;
        if(!post) return null;
        return(
            <div className="post-detail-page">
                <div className="post-detail-page-title">{post.title} ({postTypes[post.postType]})</div>
                <div className="post-detail-page-description">{post.description}</div>
            </div>
        )
    }
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

