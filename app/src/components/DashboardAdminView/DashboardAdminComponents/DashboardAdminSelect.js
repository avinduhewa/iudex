import React, { Component } from 'react';
import './accordion.css';





class DashboardAdminSelect extends Component {

  handleClick() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    debugger;
    console.log(acc)
    for (i = 0; i < acc.length; i++) {
      debugger;
      acc[i].onclick = function () {
        debugger;
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      }
    }
  }


  render() {
    return (
      <div className="DashboardAdminSelect ">

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
        </div>


      </div>

    );
  }
}

export default DashboardAdminSelect;
