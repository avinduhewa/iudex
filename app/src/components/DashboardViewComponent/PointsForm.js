import React, { Component } from 'react';
import axios from 'axios';

import CountryAuto from './SearchComponentCountry';
import CriteriaAuto from './SearchComponentCriteria';
import PointsSelector from './PointsSelector';

class PointsForm extends Component {


  constructor(props) {
    super(props);

    this.state = {
      maxValue :"",
      undo: false
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
    this.checkCategory();
  }






 checkCategory(){

    switch(this.state.category ){
      case '1':
      this.setState({
        maxValue: "10"
      });
      break;
     
      case '2':
      this.setState({
        maxValue: "50"
      });
      break;
    
      case '3':
      this.setState({
        maxValue: "10"
      });
      break;
   
      case '4':
      this.setState({
        maxValue: "100"
      });
    }

 }

  onSubmit(e) {
    e.preventDefault();
    this.refs.btn.setAttribute("disabled", "disabled");
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
        this.setState({undo: false});
        this.refs.btn.removeAttribute("disabled");
        this.refs.btn2.removeAttribute("disabled");
      })
      .catch(console.error)
  }

  undo(e) {
    this.refs.btn2.setAttribute("disabled", "disabled");
    console.log(e);
    const options = {
      method: 'POST',
      url: 'https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/undo',
      data: JSON.stringify({
        committee: window.localStorage.getItem('committee'),
        email: window.localStorage.getItem('email'),
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
        this.setState({undo: true});
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
              <PointsSelector onChange={this.onChange.bind(this)} maximum={this.state.maxValue}/>
            </div>
            <div className="field">
              <button className="ui button" type="submit" ref="btn">Submit</button>
              <button className="ui button" type="button" ref="btn2" onClick={this.undo.bind(this)}>Undo</button>
            </div>
          </div>


        </div>
      </form>



    );
  }
}

export default PointsForm;
