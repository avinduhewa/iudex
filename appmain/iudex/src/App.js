import React, { Component } from 'react';
import {Router,Route} from "react-router";
import Header from './components/DashboardComponents/Header';
import SideNavBar from './components/SideNavBar';
import BodyMain from './components/DashboardComponents/BodyMain';
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
