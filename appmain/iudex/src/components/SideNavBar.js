import React, { Component } from 'react';



class SideNavBar extends Component {
  render() {
    return (
      <div className="SideNavBar">

    
        <div className="ui inverted  menu">
      
        <a className="item">
          Name
        </a>
        <div className="right menu">
          
          <div className="item">
              <div className="ui primary button">Log out</div>
          </div>
        </div>
        </div>

      </div>
    );
  }
}

export default SideNavBar;
