import React, { Component } from 'react';
import SideNavBar from './components/SideNavBar';
import DashboardViewGrid from './components/DashboardViewComponent/DashboardViewGrid';


import './App.css';



class App extends Component {
  render() {
    return (

      <div className="App">
      <SideNavBar/>
      <DashboardViewGrid/>

      </div>
    );
  }
}

export default App;
