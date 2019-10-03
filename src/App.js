import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'

import PostDetail from './pages/post-detail/post-detail';
import Header from'./components/header/header.component';
import PostsPage from './pages/posts-page/posts-page';

import {auth, createOrGetUser, firestore} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action'
import { setUserPosts } from './redux/user-posts/user-posts.action';
import AboutPage from './pages/about-page/about-page';

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
          <Route exact path="/posts/" component={PostsPage}/>
          <Route exact path="/about/" component={AboutPage}/>
          <Route path="/posts/postID=:postID" component={PostDetail}/>
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUserPosts: user => dispatch(setUserPosts(user)),
})

const mapStateToProps = (state) => ({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
