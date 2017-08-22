import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import SelectView from './DashboardAdminComponents/DashboardAdminSelect';
import AdminView from './DashboardAdminComponents/DashboardAdminView';


class dashboarSelectView extends Component {


  render() {
    return (
      <div className="ui container">
        <br /> <br /> <br />
        <div className="dashboarSelectView ">

          <div className="ui grid">
            <div className="eight wide column">
              <SelectView />
            </div>
            <div className="eight wide column">
              <AdminView />
            </div>
          </div>

          <br /><br />
        </div>

      </div>
    );
  }
}

export default dashboarSelectView;
