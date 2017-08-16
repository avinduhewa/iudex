import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

class DashboardAdminView extends Component {


  render() {
    return (
      <div className="DashboardAdminView ">
          <table className="ui celled structured table">
            <thead>
                <tr>
                <th rowspan="2">Name</th>
                <th rowspan="2">Type</th>
                <th rowspan="2">Files</th>
                <th colspan="3">Languages</th>
                </tr>
                <tr>
                <th>Ruby</th>
                <th>JavaScript</th>
                <th>Python</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Alpha Team</td>
                <td>Project 1</td>
                <td className="right aligned">2</td>
                <td className="center aligned">
                    <i className="large green checkmark icon"></i>
                </td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td rowspan="3">Beta Team</td>
                <td>Project 1</td>
                <td className="right aligned">52</td>
                <td className="center aligned">
                    <i className="large green checkmark icon"></i>
                </td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>Project 2</td>
                <td className="right aligned">12</td>
                <td></td>
                <td className="center aligned">
                    <i className="large green checkmark icon"></i>
                </td>
                <td></td>
                </tr>
                <tr>
                <td>Project 3</td>
                <td className="right aligned">21</td>
                <td className="center aligned">
                    <i className="large green checkmark icon"></i>
                </td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
            </table>
   
      </div>
    );
  }
}

export default DashboardAdminView;
