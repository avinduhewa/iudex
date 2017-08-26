import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import SelectView from './DashboardAdminComponents/DashboardAdminSelect';
import AdminView from './DashboardAdminComponents/DashboardAdminView';
import Select from './DashboardAdminComponents/ComSelection';
import axios from 'axios';

class dashboarSelectView extends Component {
  constructor() {
    super();

    this.state = {
      activityLog: [],
      totalPoints: [],
      committees: [],
      selectedCommittee: '599c377c734d1d647d03819e',
      points: []
    }
    this.getTotalPoints();
    this.getActivityLog();
    this.handleSessionChange = this.handleSessionChange.bind(this);
  }

  handleSessionChange(e) {
    this.setState({
      selectedCommittee: e.target.value,

    });
  }


  getTotalPoints() {
    console.log(this.state.selectedCommittee);
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getOverallPoints?committee=${this.state.selectedCommittee}`)
      .then((resp) => {
        console.log('totalPoints', resp.data.data);
        this.setState({
          totalPoints: resp.data.data,

        })
      })
      .catch(console.error);
    setInterval(() => {
      axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getOverallPoints?committee=${this.state.selectedCommittee}`)
        .then((resp) => {
          this.setState({

            totalPoints: resp.data.data

          })
          this.getCommitteList();
          this.getActivityLog();
        })
        .catch(console.error)
    }, 2000)
  }


  getActivityLog() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getActivityLog?committee=${this.state.selectedCommittee}`)
      .then((resp) => {
        console.log('getActivityLog', resp.data.data);
        this.setState({
          activityLog: resp.data.data,

        })
      })
      .catch(console.error);
  }

  getCommitteList() {
    const array = [
      {
        Name: 'General Assembly',
        Value: '599c386d734d1d647d038249'
      }
    ]
    this.setState({ committees: array });
  }

  render() {
    return (
      <div className="ui container">
        <br /> <br /> <br />
        <div className="dashboarSelectView ">

          <form onSubmit={this.handleSessionSelection}>
            <select className="ui fluid  dropdown" value={this.state.value} onChange={this.handleSessionChange}>
              <option value="599c386d734d1d647d038249" >United Nations Security Council (SC)</option>
              <option value="599c37f4734d1d647d0381f9">Commission on Nacotic Drugs (CND)</option>
              <option value="599c2f8f734d1d647d037c19">International Court of Justice (ICJ)</option>
              <option value="599c3833734d1d647d03822d">World Health Assembly (WHA)</option>
              <option value="599c37b7734d1d647d0381af">United Nations Human Rights Council (UNHRC)</option>
              <option value="599c377c734d1d647d03819e">Commission on the Status of Women (CSW)</option>
              <option value="599c35ca734d1d647d0380c1">World Food Programme (WFP)</option>
              <option value="599c370a734d1d647d038136">General Assembly</option>
              <option value="598ad84f734d1d2227f453fb">United Nations Population Fund (UNFPA)</option>

            </select>
          </form>

          <br /> <br />
          <div className="ui grid">

            <div className="eight wide column">

              <div className="ui row ">
                <div className="ui card" id="cardNotes">
                  <div className="content" style={{ overflow: 'auto' }}>
                  

                      <SelectView points={this.state.totalPoints} />
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="eight wide column">
              <div className="ui row ">
                <div className="ui card" id="cardNotes">
                  <h3 className="ui center aligned icon header">
                    Activity log
      </h3>
                  <div className="content" style={{ overflow: 'auto' }}>
                    <div className="ui  segment">


                     


                        {this.state.activityLog.map((activity) => (

                          <div className="ui feed">
                          <div className="event">
                            <div className="label">
                              {/* <img src="/images/avatar/small/jenny.jpg"/> */}
                            </div>
                              <div className="content">
                                <div className="date">
                                {activity.timestamp}
                              </div>
                                <div className="summary">
                                <a> {activity.chair}</a> <a>{activity.type} {activity.points}</a> points to  <a> {activity.country}</a> for {activity.category}
                                {/* <div className="ui divider"></div> */}
                               </div>
                              </div>
                            </div>
                           
                          </div>
                          
                        ))}

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <br /><br />
          </div>

        </div>
        );
  }
}

export default dashboarSelectView;
