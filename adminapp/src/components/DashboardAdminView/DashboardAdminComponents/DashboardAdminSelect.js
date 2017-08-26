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
                <i className="large github middle aligned icon"></i>
                <div className="content">
                <br/>
                  <a className="header">Deligate Name</a>
                  <div className="description">Deligate email</div>
                  <div className="description">Deligate more info</div>


                  <div className="ui relaxed divided list">
                    <div className="item">
                      <i className=" User middle aligned icon"></i>
                      <div className="content">
                        <a className="header"><b>Debating</b></a>
                        {tolPoints.points.map((points) => (
                          <div className="description">{points.debating}</div>
                        ))}
                      </div>
                    </div>
                    <div className="item">
                      <i className=" User middle aligned icon"></i>
                      <div className="content">
                        <a className="header">Lobbying</a>
                        {tolPoints.points.map((points) => (
                        <div className="description">{points.lobbying}</div>
                        ))}
                      </div>
                    </div>
                    <div className="item">
                      <i className=" User middle aligned icon"></i>
                      <div className="content">
                        <a className="header">Knowledge of protocol</a>
                        {tolPoints.points.map((points) => (
                        <div className="description">{points.protocol}</div>
                        ))}
                      </div>
                    </div>
                    <div className="item">
                      <i className=" User middle aligned icon"></i>
                      <div className="content">
                        <a className="header">Foreign policy statement</a>
                        {tolPoints.points.map((points) => (
                        <div className="description">{points.fps}</div>
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
