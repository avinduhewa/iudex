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

         <h1 className="ui center aligned icon header">
          <i className="circular users icon committee"></i>
          <p className="committee">Committee</p>
        </h1>


            <div className ="ui row">
            <div className="ui form">
              <div className="two fields">

                <div className="field">
                <SelectView/> 
                
                </div>
                <div className="field">
                <AdminView/>
                
                </div>
              
              </div>
            </div>
            </div>
     
     
          </div>
   
      </div>
    );
  }
}

export default dashboarSelectView;
