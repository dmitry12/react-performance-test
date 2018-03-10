import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LongList2 from './LongList2'

// 1.
// Make a long list with items that are editable
// Row [ text ] [ text ] [ text ]
// Row [ text ] [ text ] [ text ]
// Row [ text ] [ text ] [ text ]
// Row [ text ] [ text ] [ text ]
//
// 2. Make a long list where on click item can be removed

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LongList2 />
      </div>
    );
  }
}

export default App;
