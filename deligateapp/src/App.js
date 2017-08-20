import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavBar from './components/SideNavBar';
import Dashboard from './components/DashboardViewComponent/DashboardViewGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
    <SideNavBar/>
    <Dashboard/>
      </div>
    );
  }
}

export default App;
