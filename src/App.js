import React from 'react';
import './App.scss';

import {Header} from'./components/header/header.component';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn:false
    }
    
  }
  render(){
    return (
      <div className="App">
        <Header isLoggedIn = {this.state.isLoggedIn}/>
        <p>Welcome to Find it Overseas!</p>
        <Button/>
      </div>
    );
  }

}

export default App;
