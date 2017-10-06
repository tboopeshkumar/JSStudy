import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './main/main'
import { Menu } from './menu/menu'

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title"> Transaction Browse</h1>
        </header>
       
        <Menu/>
        <Main/>
      </div>
    );
  }
}

export default App;
