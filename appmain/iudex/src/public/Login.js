import React, { Component } from 'react';
// import Header from './components/Header';
// import SideNavBar from './components/SideNavBar';
// import BodyMain from './components/BodyMain';
import './Login.css';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'https://25knyelhz8.execute-api.ap-southeast-1.amazonaws.com/dev/auth',
      data: JSON.stringify({
        path: '/login',
        data: this.state
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      json: true
    }
    axios(options)
      .then((resp) => {
        console.log(resp);
      })
      .catch(console.error)
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
            <form onSubmit={this.onSubmit} className="ui large form">
              <div className="ui stacked secondary  segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" placeholder="E-mail address" name="username"
                      value={this.state.username} onChange={this.onChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password"
                      value={this.state.password} onChange={this.onChange} />
                  </div>
                </div>
                <button className="ui fluid large teal submit button">Login</button>
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
