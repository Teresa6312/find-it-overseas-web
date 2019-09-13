import React from 'react';
import './App.scss';

import {Header} from'./components/header/header.component';
import {Post} from './components/post/post.component'
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
        <Post displayAsList={false} posts={this.state.props}/>
        <Button text="hello"/>
      </div>
    );
  }

}

export default App;
