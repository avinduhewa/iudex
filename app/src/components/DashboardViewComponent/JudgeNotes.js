import React, { Component } from 'react';
import axios from 'axios';

class JudgeNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      committee: window.localStorage.getItem('committee'),
      judgeNote: '',
      value : '1',
      trueValue : 0,
      delegates: []
    };


    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSessionSelection = this.handleSessionSelection.bind(this);
    this.handleSessionChange = this.handleSessionChange.bind(this);
    }

  componentDidMount() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getRollCall?committee=${this.state.committee}`)
      .then((resp) => {
        console.log(resp.data.data)
        this.setState({
          delegates: resp.data.data
        })
      })
      .catch(console.error);
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  handleSessionChange(e) {
    this.setState({
      value: e.target.value,
      trueValue: parseInt(e.target.value) - 1
    });
  }

  handleSessionSelection(e) {
    e.preventDefault();
    let array = this.state.delegates.slice();
    array.map((item) => {
      console.log(item);
      item.rollcall[this.state.trueValue].timestamp = Math.floor(Date.now() / 1000); 
    })
    this.setState({delegates: array});
    this.callupdateAPI();
  }
  
  callupdateAPI() {
    const options = {
      method: 'POST',
      url: 'https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/updateRollCall',
      data: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      json: true
    }
    axios(options)
      .then((resp) => {
        console.log(resp.data);
        console.log("success");
      })
      .catch(console.error)
  }

  onCheckChange(item, e) {
    let index = this.state.delegates.indexOf(item);
    console.log(index);
    const array = this.state.delegates.slice();
    if (array[index].rollcall[this.state.trueValue].checked === true) {
      array[index].rollcall[this.state.trueValue].checked = false;
    } else {
      array[index].rollcall[this.state.trueValue].checked = true;
    }
    this.setState({delegates: array});
  }

  render() {
    return (



      <div className="ui card" id="cardNotes" >
        <h3 className="ui invert center aligned icon header">

          Role call
           </h3>


        <div className="content" style={{ overflow: 'auto' }}>

      

          <form onSubmit={this.handleSessionSelection}>
            <select className="ui fluid  dropdown" value={this.state.value} onChange={this.handleSessionChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </form>
          <table className="ui celled padded table">
            <thead>
              <tr>
                <th>Country</th>
                <th> Session</th>
              </tr>
            </thead>
            <tbody>
              {this.state.delegates.map((item, index) => (
                <tr key={index}>
                <td>
                  <h4 className="ui image header">
                    <div className="content">
                      {item.name}
                    </div>
                  </h4></td>
                <td>
                  <div className="ui checkbox">
                    <input type="checkbox" ref="checked" onChange={this.onCheckChange.bind(this, item)} 
                    checked={item.rollcall[this.state.trueValue].checked} name={item.name} />
                    <label></label>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="extra content">
          <form className="ui form" onSubmit={this.handleSessionSelection}>
            <div className="ui form">
              <button className="ui button" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default JudgeNotes;
