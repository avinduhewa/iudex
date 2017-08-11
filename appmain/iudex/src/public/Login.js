import React, { Component } from 'react';
// import Header from './components/Header';
// import SideNavBar from './components/SideNavBar';
// import BodyMain from './components/BodyMain';
import './Login.css';



class Login extends Component {
  render() {

    function login(event) {
      console.log(event);
      console.log('asdasd');
    }

    return (
      <div className="Login">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form onSubmit={this.login} className="ui large form">
              <div className="ui stacked secondary  segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="email" placeholder="E-mail address"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password"/>
                  </div>
                </div>
                <button type="submit" className="ui fluid large teal submit button">Login</button>
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
