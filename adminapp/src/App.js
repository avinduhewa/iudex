import React, { Component } from 'react';
import logo from './logo.svg';
import SideNavBar from './components/SideNavBar';
import DashboardAdmin from './components/DashboardAdminView/dashboarMainView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavBar/>
        <DashboardAdmin/>


      </div>
    );
  }
}

export default App;
