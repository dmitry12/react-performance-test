import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LongList2 from './LongList2'
import { Provider } from 'react-redux'


// Redux
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import names from './names.reducer'

const rootReducer = combineReducers({
  names,
})

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <LongList2 id={0} />
        </div>
      </Provider>
    );
  }
}

export default App;
