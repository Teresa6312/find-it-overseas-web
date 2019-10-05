import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from './redux/user/user.selectors';

import PostDetail from './pages/post-detail-page/post-detail-page';
import Header from'./components/header/header.component';
import PostsPage from './pages/posts-page/posts-page';

import {auth, createOrGetUser, firestore} from './firebase/firebase.utils';
import {setCurrentUser, setUserPosts} from './redux/user/user.actions'

import AboutPage from './pages/about-page/about-page';
import userPostsPage from './pages/user-posts-page/user-posts-page';
import UserProfilePage from './pages/user-profile-page/user-profile-page';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser, setUserPosts} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createOrGetUser(userAuth);
        // snapShot return many data that from firebase but not contain all from our database in firebase
        // useing snapShot.data() will return all data from our database except id
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data(),
          });
        let list = [];
        firestore.collection("posts")
          .where('createdBy', '==', userRef)
          .where('open', '==', true)
          .get().then(snapshot=>{
              snapshot.forEach(( post =>
                  list = [...list, {id:post.id, ...post.data()}]
                  ));
        }).then(()=>{
            setUserPosts(list);
        });
      });

      }else{
        setCurrentUser(userAuth);
        setUserPosts([]);
      }
    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={PostsPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/my-account/post-history" component={userPostsPage}/>
          <Route exact path="/my-account/profile" component={UserProfilePage}/>
          <Route path="/posts/postID=:postID" component={PostDetail}/>
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUserPosts: posts => dispatch(setUserPosts(posts)),
})

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
