import React, { Component } from 'react';



class DashboardAdminSelect extends Component {
  render() {
    return (

      

        <div className="ui card " id="activityCard">
          <div className="content">
            <div className="header">Deligates and Points</div>
          </div>
          <div className="content" onClick={this.handleClick}>
            <button className="accordion" >Avindu</button>
            <div className="panel">
              <div className="ui relaxed divided list">           
                <div className="item">
                <i className="large user circle middle aligned icon"></i>
                  <div className="content">
                    <div className="ui list">
                      <div className="item">
                        <div className="content">
                          <div className="header">Avindu</div>
                          <div className="description">Avindu@gmail.com</div>
                          <div className="list">
                            <div className="ui list">
                              <div className="item">
                                <div className="ui divider"></div>
                                <div className="content">
                                  <div className="header">Debating - {50}</div>
                                  <div className="header">Lobbying - {20}</div>
                                  <div className="header">Knowledge of protocol - {40} </div>
                                  <div className="header">Foreign policy statement - {60}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>     
              </div>
            </div>
{/* hardcoded just to show */}
            <button className="accordion" >Peshala</button>
            <div className="panel">
              <div className="ui relaxed divided list">           
                <div className="item">
                <i className="large user circle middle aligned icon"></i>
                  <div className="content">
                    <div className="ui list">
                      <div className="item">
                        <div className="content">
                          <div className="header">Peshala Rasanga</div>
                          <div className="description">Peshalarasanga@gmail.com</div>
                          <div className="list">
                            <div className="ui list">
                              <div className="item">
                                <div className="ui divider"></div>
                                <div className="content">
                                  <div className="header">Debating - {20}</div>
                                  <div className="header">Lobbying - {20}</div>
                                  <div className="header">Knowledge of protocol - {20} </div>
                                  <div className="header">Foreign policy statement - {20}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>     
              </div>
            </div>
          </div>
          <div className="extra content">
            {/* <button className="ui button">Join Project</button> */}
          </div>

      <div className="DashboardAdminSelect bodyCards">
        
       
        <div className="ui card">
        <div className="content">
          <div className="header">Project Timeline</div>
        </div>
        <div className="content">
          fhgfhghgfhg
        </div>
        <div className="extra content">
          <button className="ui button">Join Project</button>

        </div>
      </div>
     </div>
     </div>
    
   

   
    );
  }
}

export default DashboardAdminSelect;
