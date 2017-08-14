import React, { Component } from 'react';



class SideNavBar extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (window.localStorage.getItem("login") !== null) {
      window.localStorage.setItem("login", false);
      window.location.assign("/");
    }
  }

  render() {
    return (
      <div className="SideNavBar">
        <div className="ui inverted  menu">
          <a className="item">
            Name
        </a>
          <div className="right menu">
            <div className="item">
              <div onClick={this.onClick} className="ui primary button">Log out</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNavBar;
