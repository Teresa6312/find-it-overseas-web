import React from 'react';
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/home-page/home-page'
import PostDetail from './pages/post-detail/post-detail'
import Header from'./components/header/header.component';
import {Posts} from './pages/posts/posts.component'

import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn:false,
    }
    
  }
  render(){

    return (
      <div className="App">
        <Header isLoggedIn = {this.state.isLoggedIn}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/posts/" component={Posts}/>
          <Route path="/posts/:postID" component={PostDetail}/>
        </Switch>
        <Button text="hello"/>
        read=> https://stackoverflow.com/questions/51116747/react-router-v4-link-vs-redirect-vs-history
      </div>
    );
  }

}

export default App;
