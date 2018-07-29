import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={HomePage}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
