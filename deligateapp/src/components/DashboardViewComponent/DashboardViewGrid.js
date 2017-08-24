import React, { Component } from 'react';



import CountryAuto from './SearchComponentCountry';
import CountryAuto2 from './SearchComponentyourCountry';
import CriteriaAuto2 from './SearchComponentCom';
import axios from 'axios';





class DashboardViewGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      committee: "",
      voter: "" ,
      nominee: ""
    }

    this.onSubmit = this.onSubmit.bind(this);






  }

  onChange(field, value) {

    this.setState({ [field]: value });

  }

  onSubmit(e) {

    e.preventDefault();
    console.log("submitted");
    this.vote()
  }

  vote() {

    this.refs.btn.setAttribute("disabled", "disabled");
    const options = {
      method: 'POST',
      url: 'https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/vote',
     
      data: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      json: true
    }
    axios(options)
      .then((resp) => {

      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="DashboardViewGrid bodyCards">

        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Vote
    </div>
            </h2>

            <form className="ui  form" onSubmit={this.onSubmit}>
              <div className="ui  segment">
                <div className="ui  form">

                  <div className=" field">
                    <CriteriaAuto2 onChange={this.onChange.bind(this)} />


                  </div>
                  <div className=" field">

                    <CountryAuto onChange={this.onChange.bind(this)} />
                  </div>
                  <div className=" field">

                    <CountryAuto2 onChange={this.onChange.bind(this)} />
                  </div>
                  <button className="ui button" type="submit" ref="btn">Submit</button>
                </div>
              </div>

            </form>


          </div>
        </div>




      </div>
    );
  }
}

export default DashboardViewGrid;
