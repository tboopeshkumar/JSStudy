import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrowseView from './components/browseview'
import { createStore } from 'redux'
import browseviewreducer from './reducers/browseviewreducer';
import { browseView } from "./sagas/browseviewsaga";
import { Provider } from 'react-redux';

const store = createStore(browseviewreducer);
browseView();
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
