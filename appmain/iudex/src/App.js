import React, { Component } from 'react';
import Header from './components/Header';
import SideNavBar from './components/SideNavBar';
import BodyMain from './components/BodyMain';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNavBar />

        <BodyMain />

      </div>
    );
  }
}

export default App;
