import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import SelectView from './DashboardAdminComponents/DashboardAdminSelect';
import AdminView from './DashboardAdminComponents/DashboardAdminView';
import { BrowserRouter, Route } from 'react-router-dom';

class dashboarSelectView extends Component {


  render() {
    return (
      <div className="dashboarSelectView ">
         <SideNavBar/>
         <br/><br/>
         <div className="ui container">
             
      <AdminView/>
      {/* <SelectView/>  */}
          </div>
   
      </div>
    );
  }
}

export default dashboarSelectView;
