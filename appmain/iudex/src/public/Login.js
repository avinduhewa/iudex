import React, { Component } from 'react';
// import Header from './components/Header';
// import SideNavBar from './components/SideNavBar';
// import BodyMain from './components/BodyMain';
import './Login.css';
import axios from 'axios';


class Login extends Component {
  constructor() {
    super();
    const login = (e) => {
      console.log(e);
      const user = {
        username: document.getElementById("email"),
        password: document.getElementById("password")
      };
      axios.post('https://25knyelhz8.execute-api.ap-southeast-1.amazonaws.com/dev/auth',
        {
          path:'/login',
          data: user
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch(console.error)
    }
  }
  render() {

    return (
      <div className="Login">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked secondary  segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" id="email" name="email" placeholder="E-mail address"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                  </div>
                </div>
                <button onClick={this.login} className="ui fluid large teal submit button">Login</button>
              </div>

              <div className="ui error message"></div>

            </form>

            {/* <div className="ui message">
              New to us? <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?">Register</a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
