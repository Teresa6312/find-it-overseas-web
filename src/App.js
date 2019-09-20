import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/home-page/home-page';
import PostDetail from './pages/post-detail/post-detail';
import Header from'./components/header/header.component';
import Posts from './pages/posts/posts.component';

import {auth, createOrGetUser} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn:false,
      currentUser:null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        console.log(userAuth)
        const userRef = await createOrGetUser(userAuth);
        // snapShot return many data that from firebase but not contain all from our database in firebase
        // useing snapShot.data() will return all data from our database except id
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({currentUser:userAuth})
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
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

export default App;
