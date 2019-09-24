import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'

import HomePage from './pages/home-page/home-page';
import PostDetail from './pages/post-detail/post-detail';
import Header from'./components/header/header.component';
import Posts from './pages/posts/posts.component';

import {auth, createOrGetUser} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
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
          
        })
      }else{
        setCurrentUser(userAuth);
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
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/posts/" component={Posts}/>
          <Route path="/posts/:postID" component={PostDetail}/>
        </Switch>
        read=> https://stackoverflow.com/questions/51116747/react-router-v4-link-vs-redirect-vs-history
      </div>
    );
  }

}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})


export default connect(null,mapDispatchToProps)(App);
