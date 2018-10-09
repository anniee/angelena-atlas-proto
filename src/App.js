import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import Routes from 'Routes';
import 'App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter className="App">
      <div>
        <Header />
        <Routes />
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
