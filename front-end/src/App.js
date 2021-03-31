// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Home from  './components/home'
import Main from './components/Main/Main'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Main />
      </div>
    );
  }
}

export default App;
