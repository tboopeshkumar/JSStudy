import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrowseView from './components/browseview'
import store from './store/index';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title"> Transaction Browser</h1>
        </header>
        <Provider store={store}>
          <BrowseView></BrowseView>
        </Provider>
      </div>
    );
  }
}

export default App;
