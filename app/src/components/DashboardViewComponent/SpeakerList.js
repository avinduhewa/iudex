import React, { Component } from 'react';
import axios from 'axios';

import SpeakerLIstloop from './FormsAndList/SpeakerLIstloop';
import SpeakerForm from './FormsAndList/SpeakerForm';

class SpeakerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      judgeNote: '',

      speakerList: [],
      committee: window.localStorage.getItem('committee')
    };
    this.handleSubmitSpeaker = this.handleSubmitSpeaker.bind(this);
  }

  componentDidMount() {
    this.callGetAPI();
    setInterval(() => {
      this.callGetAPI();
    }, 5000)
  }

  handleSubmitSpeaker(speaker) {
    console.log('here', this.state);
    var newSpeaker = {
      id: this.state.speakerList.length + 1,
      speaker: speaker,
      checked: false
    }
    const array = this.state.speakerList.slice();
    array.push(newSpeaker);
    this.setState({ speakerList: array });
    this.callupdateAPI(array);
  }

  callupdateAPI(array) {
    const params = JSON.parse(JSON.stringify(this.state));
    params.speakerList = array;
    const options = {
      method: 'POST',
      url: 'https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/updateSpeakersList',
      data: JSON.stringify(params),
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

  callGetAPI() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getSpeakersList?committee=${'598ad84f734d1d2227f453fb'}`)
      .then((resp) => {
        this.setState({
          speakerList: resp.data.data
        })
      })
      .catch(console.error);
  }

  render() {
    return (

      <div className="ui card" id="cardNotes" >
        <h3 className="ui center aligned icon header">

          Speaker List
        </h3>

        <div className="content" style={{ overflow: 'auto' }}>

          <SpeakerLIstloop speakerList={this.state.speakerList} />

        </div>

        <div className=" content">
          <SpeakerForm onSubmitSpeaker={this.handleSubmitSpeaker} />
        </div>


      </div>






    );
  }
}

export default SpeakerList;
