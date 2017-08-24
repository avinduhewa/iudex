import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import SelectView from './DashboardAdminComponents/DashboardAdminSelect';
import AdminView from './DashboardAdminComponents/DashboardAdminView';
import axios from 'axios';

class dashboarSelectView extends Component {
  constructor(){
    super();

      this.state = {
        activityLog: [],
        totalPoints: [],
        committees: [],
        selectedCommittee: '598ad84f734d1d2227f453fb'
      }

      this.getTotalPoints();
      this.getActivityLog();
  }

  getTotalPoints(){
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getOverallPoints?committee=${this.state.selectedCommittee}`)
    .then((resp) => {
      console.log('totalPoints', resp.data.data);
      this.setState({
        totalPoints: resp.data.data
      })
    })
    .catch(console.error);
  }

  getActivityLog(){
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getActivityLog?committee=${this.state.selectedCommittee}`)
    .then((resp) => {
      console.log('getActivityLog', resp.data.data);      
      this.setState({
        activityLog: resp.data.data
      })
    })
    .catch(console.error);
  }

  getCommitteList(){
    const array = [
      {
        Name: 'General Assembly',
        Value: '598ad84f734d1d2227f453fb'
      }
    ]
    this.setState({committees: array});
  }

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
