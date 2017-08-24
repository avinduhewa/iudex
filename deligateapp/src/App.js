import React, { Component } from 'react';

import './App.css';

import Dashboard from './components/DashboardViewComponent/DashboardViewGrid';

class App extends Component {
  render() {
    return (
      <div className="App">

    <div className ="ui container">
    <Dashboard/>
        </div>
   
      </div>
    );
  }
}

export default App;
