import React, { Component } from 'react';



class SideNavBar extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      name: window.localStorage.getItem("name")
    }
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
            {this.state.name}
        </a>
          <div className="right menu">
            <div className="item">
              <h3><b> National Youth Model United Nations - Sri Lanka</b></h3>
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
