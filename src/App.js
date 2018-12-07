import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Block from './components/Block';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Block>
          </Block>
        </header>
      </div>
    );
  }
}

export default App;
