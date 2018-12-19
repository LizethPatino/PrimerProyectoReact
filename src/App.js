import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">  
      <Navigation titulo="Tasks" />       
      <img src={logo} className="App-logo" alt="logo" />        
      </div>
    );
  }
}

export default App;
