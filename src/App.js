import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import Routes from 'Routes';
import logo from 'logo.svg';
import 'App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div>
        <Header />
        <Routes />
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
