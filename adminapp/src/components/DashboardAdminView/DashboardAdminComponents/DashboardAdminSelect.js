import React, { Component } from 'react';
import './accordion.css';
import axios from 'axios';


class DashboardAdminSelect extends Component {
  constructor() {
    super();

    this.state = {

      totalPoints: [],


    }



  }

  accordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    }
  }



  render() {
    return (


      <div >

        {this.props.points.map((tolPoints) => (
          <div className="ui collumn" onClick={this.accordion}>

            <button className="accordion" >{tolPoints.name}</button>
            <div className="panel">

              <div className="ui relaxed divided list">



                <div className="item">

                  <div className="content">




                    <div className="ui relaxed divided list">
                      <div className="item">
                        <i className=" User middle aligned icon"></i>
                        <div className="content">

                          {tolPoints.points.map((points, index) => (

                            <div>
                              <div className="header"><h3>{this.props.chairs[index]}</h3></div>
                              <div className="ui divider"></div>

                              <div className="description">Debating
                          <div className="ui right floated">
                                  -  {points.debating}
                                </div>
                              </div>
                              <div className="description">lobbying
                          <div className="ui right floated">
                                  -  {points.lobbying}
                                </div>
                              </div>
                              <div className="description">Knowledge of protocol
                          <div className="ui right floated">
                                  -  {points.protocol}
                                </div>
                              </div>
                              <div className="description">Foreign policy statement
                          <div className="ui right floated">
                                  -  {points.fps}
                                </div>
                              </div>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>








    );
  }
}

export default DashboardAdminSelect;
