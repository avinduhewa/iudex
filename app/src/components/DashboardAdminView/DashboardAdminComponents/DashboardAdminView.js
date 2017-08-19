import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

class DashboardAdminView extends Component {


  render() {
    return (
      <div className="DashboardAdminView ">

          <div className="ui card " id="activityCard">
            <div className="content">
              <div className="header">Activity</div>
            </div>
            <div className="content">
         
            </div>
            <div className="extra content">
              {/* <button className="ui button">Join Project</button> */}
            </div>
          </div>
   
      </div>
    );
  }
}

export default DashboardAdminView;
