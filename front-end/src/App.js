// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Home from  './components/home'
import Main from './components/Main/Main'
import {BrowserRouter as Router} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Router>
          <Main />
        </Router>
        
      </div>
    );
  }
}

export default App;
