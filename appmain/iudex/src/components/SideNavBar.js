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
      <div className="SideNavBar navigation">
        <div className="ui inverted  menu">
          <a className="item">
            Name
        </a>
        <div className="right menu">
            <div className="item">
            <h1> National Youth Model United Nations - Sri Lanka</h1>
            </div>
          </div>
    

          <div className="right menu">
            <div className="item">
              <div onClick={this.onClick} className="ui primary button log">Log out</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNavBar;
