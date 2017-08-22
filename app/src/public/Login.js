import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
        console.log(resp.data.data);
        if(resp.data.data.login) {
          window.localStorage.setItem('position', resp.data.data.user.position);
          window.localStorage.setItem('name', resp.data.data.user.name);
          window.localStorage.setItem('email', resp.data.data.user.email);
          window.localStorage.setItem('committee', resp.data.data.user.committee);
          window.localStorage.setItem('login', resp.data.data.login);
          window.localStorage.setItem('admin', resp.data.data.admin);
          window.location.assign('/app');
        }else{
          this.setState({ error: "Incorrect email and password" })
        }
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
            <h4 className="error">{this.state.error}</h4>
            <form onSubmit={this.onSubmit} className="ui large form">
              <div className="ui stacked secondary  segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" placeholder="E-mail address" name="email"
                      value={this.state.email} onChange={this.onChange} />
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
