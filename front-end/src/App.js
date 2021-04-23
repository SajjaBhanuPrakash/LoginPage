// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Home from './components/Home/home'
import Main from './components/Main/Main'
import { BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Router history={history}>
          <Main />
        </Router>
      </div>
    );
  }
}

export default App;
