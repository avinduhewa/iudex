import React, { Component } from 'react';
import axios from 'axios';

import CountryAuto from './SearchComponentCountry';
import CriteriaAuto from './SearchComponentCriteria';
import PointsSelector from './PointsSelector';

class PointsForm extends Component {


  constructor(props) {
    super(props);

    this.state = {
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateCountrySearch = this.updateCountrySearch.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }


  _handleKeyPress(e, field) {
    if (e.keyCode === 13) {
      e.preventDefault();
      let next = this.refs[field.name].nextSibling;
      if (next && next.tagName === "INPUT") {
        this.refs[field.name].nextSibling.focus();
      }
    }
  }


  updateCountrySearch(e) {
    this.setState({ countrySearch: e.target.value })

  }

  componentWillMount() {
    if (window.localStorage.getItem("login") === null ||
      window.localStorage.getItem("login") === "false") {
      window.location.assign('/');
    }
  }

  onChange(field, value) {
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ [field]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/add',
      data: JSON.stringify({
        committee: window.localStorage.getItem('committee'),
        email: window.localStorage.getItem('email'),
        country: this.state.country,
        category: this.state.category,
        points: parseInt(this.state.points),
        position: window.localStorage.getItem('position'),
        name: window.localStorage.getItem('name')
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      json: true
    }
    axios(options)
      .then((resp) => {
       console.log("succeess");
      })
      .catch(console.error)
  }



  render() {
    return (


      <form className="ui form" onSubmit={this.onSubmit}>

        <div className="field">
          <div className="four fields">
            <div className="field">
              <CountryAuto onChange={this.onChange.bind(this)} />
            </div>
            <div className="field">
              <CriteriaAuto onChange={this.onChange.bind(this)} />
            </div>
            <div className="field">
              <PointsSelector onChange={this.onChange.bind(this)} />
            </div>
            <div className="field">
              <button className="ui button" type="submit">Submit</button>
            </div>
          </div>


        </div>
      </form>



    );
  }
}

export default PointsForm;
